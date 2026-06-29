import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, type } = body;

    // Create a transporter using environment variables or a placeholder config
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
      to: 'contact@visionbeyondevents.com', // Where you want to receive these emails
      subject: type === 'newsletter' ? `New Newsletter Signup: ${email}` : `New Inquiry from ${name}`,
      text: type === 'newsletter' 
        ? `New subscriber: ${email}`
        : `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: type === 'newsletter'
        ? `<p><strong>New subscriber:</strong> ${email}</p>`
        : `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
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
