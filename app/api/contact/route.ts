import { NextResponse } from 'next/server';
// TODO: Implement Resend API key integration later
import { z } from 'zod';

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
    // TODO: Implement Resend API key integration later

    return NextResponse.json({ success: true, id: 'pending-integration' }, { status: 200 });
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
