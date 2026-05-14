import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with the API key from environment variables
// This ensures the key is never exposed to the client
const resend = new Resend(process.env.RESEND_API_KEY);

// Define a validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate the incoming data
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, message } = validatedData;

    // 2. Send the email using Resend
    // Note: In a production environment, 'from' should be an authenticated domain you own
    // e.g. 'onboarding@resend.dev' is for testing, use something like 'noreply@yourdomain.com'
    const data = await resend.emails.send({
      from: 'RealEstate Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'delivered@resend.dev',
      replyTo: email,
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\\n/g, '<br>')}</p>
      `,
    });

    // Handle Resend-specific API errors
    if (data.error) {
      console.error('Resend API Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.format() },
        { status: 400 }
      );
    }

    // Generic error fallback
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending the message.' },
      { status: 500 }
    );
  }
}
