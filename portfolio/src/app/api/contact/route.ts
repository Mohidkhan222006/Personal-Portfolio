import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas/contact.schema';

/** POST /api/contact — Receives contact form submissions */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed.',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // NOTE: Replace this with your actual email service (Resend, Nodemailer, etc.)
    // For now, log to console (works for development / Vercel deployment testing)
    console.log('[CONTACT FORM]', { name, email, subject, message });

    // TODO: Integrate Resend or Nodemailer here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `[Portfolio] ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: 'Message received! I\'ll be in touch soon.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

/** GET /api/contact — Method not allowed */
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}
