import { NextRequest, NextResponse } from 'next/server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((v) => v === true, 'Consent is required'),
  // captcha removed; protected via middleware rate limiting
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', issues: parsed.error.flatten() }, { status: 400 });
    }

    // Forward the request to the NestJS API
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api/v1';
    const response = await fetch(`${apiBaseUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json({ error: errorData?.error || 'Failed to send message' }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[CONTACT_FORM_ERROR]', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
