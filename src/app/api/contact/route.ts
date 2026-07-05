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
      console.warn("Validation failed:", result.error.format());
      return NextResponse.json(
        { success: false, message: 'Invalid data provided.', errors: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'ethereal.user@ethereal.email',
        pass: process.env.SMTP_PASS || 'ethereal_password',
      },
    });

    let emailSubject = '';
    let emailText = '';
    let emailHtml = '';

    if (data.type === 'newsletter') {
      emailSubject = `New Newsletter Signup: ${data.email}`;
      emailText = `New subscriber: ${data.email}`;
      emailHtml = `<p><strong>New subscriber:</strong> ${data.email}</p>`;
    } else {
      emailSubject = `Consultation Request: ${data.eventType} for ${data.name}`;
      emailText = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nEvent Type: ${data.eventType}\nDestination: ${data.destination || 'N/A'}\nGuests: ${data.guestCount || 'N/A'}\nDate: ${data.date || 'N/A'}\nDetails: ${data.message || 'N/A'}`;
      emailHtml = `
        <h3>New Private Consultation Request</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Event Type:</strong> ${data.eventType}</p>
        <p><strong>Destination:</strong> ${data.destination || 'N/A'}</p>
        <p><strong>Guest Count:</strong> ${data.guestCount || 'N/A'}</p>
        <p><strong>Preferred Date:</strong> ${data.date || 'N/A'}</p>
        <p><strong>Additional Details:</strong><br/>${data.message || 'N/A'}</p>
      `;
    }

    const mailOptions = {
      from: '"Vision Beyond Events" <noreply@visionbeyondevents.com>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'contact@visionbeyondevents.com',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
