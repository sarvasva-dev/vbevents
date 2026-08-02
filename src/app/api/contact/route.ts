import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the validation schemas
const consultationSchema = z.object({
  type: z.literal('consultation'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Valid phone number is required'),
  eventType: z.string().min(2, 'Event type is required'),
  destination: z.string().optional(),
  guestCount: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
});

const newsletterSchema = z.object({
  type: z.literal('newsletter'),
  email: z.string().email('Invalid email address'),
});

// A union of the two possible payload structures
const payloadSchema = z.discriminatedUnion('type', [
  consultationSchema,
  newsletterSchema,
]);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Parse and validate the body
    const result = payloadSchema.safeParse(body);
    
    if (!result.success) {
      console.error("[Contact API] Validation Error:", JSON.stringify(result.error.format(), null, 2));
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your inputs and try again.', 
          errors: result.error.format() 
        },
        { status: 400 }
      );
    }

    const data = result.data;
    console.log(`[Contact API] Processing ${data.type} request for: ${data.email}`);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("[Contact API] ERROR: SMTP_USER or SMTP_PASS is not defined in environment variables.");
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service configuration is incomplete on server. Please ensure SMTP_USER and SMTP_PASS environment variables are configured in Vercel.' 
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587 or other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    let emailSubject = '';
    let emailText = '';
    let emailHtml = '';

    if (data.type === 'newsletter') {
      emailSubject = `New Newsletter Signup: ${data.email}`;
      emailText = `New subscriber: ${data.email}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-f8f9fa;">
          <h2 style="color: #a07820;">New Newsletter Subscription</h2>
          <p><strong>Subscriber Email:</strong> ${data.email}</p>
        </div>
      `;
    } else {
      emailSubject = `Consultation Request: ${data.eventType} for ${data.name}`;
      emailText = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nEvent Type: ${data.eventType}\nDestination: ${data.destination || 'N/A'}\nGuests: ${data.guestCount || 'N/A'}\nDate: ${data.date || 'N/A'}\nDetails: ${data.message || 'N/A'}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #d4af37; background: #faf9f6;">
          <h2 style="color: #a07820; border-bottom: 1px solid #d4af37; padding-bottom: 10px;">New Private Consultation Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Event Type:</strong> ${data.eventType}</p>
          <p><strong>Destination:</strong> ${data.destination || 'N/A'}</p>
          <p><strong>Guest Count:</strong> ${data.guestCount || 'N/A'}</p>
          <p><strong>Preferred Date:</strong> ${data.date || 'N/A'}</p>
          <p><strong>Additional Details:</strong><br/>${data.message || 'N/A'}</p>
        </div>
      `;
    }

    // Default 'from' should align with authenticated user to prevent 553/501 SMTP rejection
    const fromAddress = process.env.SMTP_FROM || (process.env.SMTP_USER ? `"Vision Beyond Events" <${process.env.SMTP_USER}>` : '"Vision Beyond Events" <noreply@visionbeyondevents.com>');

    // Fixed Team Head Email + Default Receiver Email
    const teamRecipients = [
      'vd6665444@gmail.com',
      process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'visionbeyondevents@gmail.com'
    ];

    // 1. Send full submission data to Team Head & Admin
    const teamMailOptions = {
      from: fromAddress,
      to: teamRecipients,
      replyTo: data.email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    // 2. Send automatic confirmation email to the client/user who filled the form
    let clientSubject = '';
    let clientHtml = '';

    if (data.type === 'newsletter') {
      clientSubject = 'Welcome to Vision Beyond Events Newsletter';
      clientHtml = `
        <div style="font-family: 'Montserrat', Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37; padding: 30px; background: #faf9f6;">
          <h2 style="color: #a07820; font-family: Georgia, serif; text-align: center; margin-bottom: 20px;">VISION BEYOND EVENTS</h2>
          <hr style="border: 0; border-top: 1px solid #d4af37; margin: 20px 0;" />
          <p>Thank you for subscribing to the <strong>Vision Beyond Events</strong> Newsletter.</p>
          <p>You will now receive exclusive insights into luxury destination weddings, private celebrations, trend reports, and behind-the-scenes event architecture.</p>
          <br />
          <p style="margin-bottom: 4px;">Warm regards,</p>
          <p style="font-weight: bold; color: #a07820; margin-top: 0;">Vision Beyond Events Team</p>
          <p style="font-size: 12px; color: #64748b;">Phone: +91 80818 08902 | Website: www.vbevents.co.in</p>
        </div>
      `;
    } else {
      clientSubject = `Thank You for Reaching Out to Vision Beyond Events - ${data.eventType}`;
      clientHtml = `
        <div style="font-family: 'Montserrat', Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37; padding: 30px; background: #faf9f6;">
          <h2 style="color: #a07820; font-family: Georgia, serif; text-align: center; margin-bottom: 20px;">VISION BEYOND EVENTS</h2>
          <hr style="border: 0; border-top: 1px solid #d4af37; margin: 20px 0;" />
          <p>Dear <strong>${data.name}</strong>,</p>
          <p>Thank you for requesting a private consultation with Vision Beyond Events.</p>
          <p>We have received your event inquiry details and our advisory team is currently reviewing your vision. A dedicated event architect will reach out to you shortly (within 24 hours).</p>
          <div style="background: #ffffff; padding: 20px; border-left: 3px solid #a07820; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0 0 8px 0;"><strong>Event Type:</strong> ${data.eventType}</p>
            <p style="margin: 0 0 8px 0;"><strong>Destination:</strong> ${data.destination || 'N/A'}</p>
            <p style="margin: 0 0 8px 0;"><strong>Estimated Guests:</strong> ${data.guestCount || 'N/A'}</p>
            <p style="margin: 0;"><strong>Preferred Date:</strong> ${data.date || 'N/A'}</p>
          </div>
          <p>Rest assured, every interaction with Vision Beyond Events is protected under strict confidentiality protocols.</p>
          <br />
          <p style="margin-bottom: 4px;">Warm regards,</p>
          <p style="font-weight: bold; color: #a07820; margin-top: 0;">The Vision Beyond Events Advisory Team</p>
          <p style="font-size: 12px; color: #64748b;">Phone: +91 80818 08902 | Website: www.vbevents.co.in</p>
        </div>
      `;
    }

    const clientMailOptions = {
      from: fromAddress,
      to: data.email,
      subject: clientSubject,
      html: clientHtml,
    };

    // Send both emails in parallel
    const [teamResult] = await Promise.allSettled([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    if (teamResult.status === 'rejected') {
      throw teamResult.reason;
    }

    console.log(`[Contact API] Success - Submission processed for ${data.email} & notification dispatched to team head (vd6665444@gmail.com).`);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[Contact API] Critical Error during email dispatch:', message);
    return NextResponse.json(
      { success: false, message: 'Our servers encountered an issue sending your request. Please contact us directly via WhatsApp or Phone.' },
      { status: 500 }
    );
  }
}
