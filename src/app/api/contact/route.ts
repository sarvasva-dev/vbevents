import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the validation schemas
const contactSchema = z.object({
  type: z.literal('contact'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const newsletterSchema = z.object({
  type: z.literal('newsletter'),
  email: z.string().email('Invalid email address'),
});

// A union of the two possible payload structures
const payloadSchema = z.discriminatedUnion('type', [
  contactSchema,
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

    const mailOptions = {
      from: '"Vision Beyond Events" <noreply@visionbeyondevents.com>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'contact@visionbeyondevents.com',
      subject: data.type === 'newsletter' ? `New Newsletter Signup: ${data.email}` : `New Inquiry from ${data.name}`,
      text: data.type === 'newsletter' 
        ? `New subscriber: ${data.email}`
        : `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: data.type === 'newsletter'
        ? `<p><strong>New subscriber:</strong> ${data.email}</p>`
        : `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message}</p>`,
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
