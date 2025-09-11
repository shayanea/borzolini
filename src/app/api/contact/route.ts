import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((v) => v === true, 'Consent is required'),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', issues: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    // TODO: hook up email provider or ticket system here
    // Temporary server-side note
    console.warn('[CONTACT_FORM]', { name, email, subject, messageLength: message.length });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[CONTACT_FORM_ERROR]', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
