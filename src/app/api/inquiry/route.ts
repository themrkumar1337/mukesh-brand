import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Service Offline" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, type, message } = await req.json();

    // 1. CONDENSED NOTIFICATION (To: Your Office)
    await resend.emails.send({
      from: 'HQ <office@mukeshkrana.com>',
      to: ['mukesh@bharatsec.com'], //
      subject: `[INQUIRY] ${name} — ${type}`,
      html: `
        <div style="font-family: sans-serif; font-size: 13px; color: #111;">
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Topic:</strong> ${type}</p>
          <div style="border-left: 2px solid #3b82f6; padding-left: 15px; margin-top: 10px; color: #444;">
            ${message}
          </div>
        </div>
      `
    });

    // 2. DETAILED ACKNOWLEDGMENT (To: The User)
    await resend.emails.send({
      from: 'Mukesh K. Rana <office@mukeshkrana.com>',
      to: [email],
      // REFINEMENT: If they click 'Reply', it goes straight to your personal business email
      replyTo: 'mukesh@bharatsec.com', 
      subject: `Re: Your Inquiry regarding ${type}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.7; padding: 20px;">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out. I've received your message regarding <strong>${type}</strong> and appreciate the context you provided.</p>
          <p>I personally review every inquiry to ensure it aligns with my current operational focus. Between leading <strong>Bharat Security</strong> and managing my other ventures, please allow me about 48 to 72 hours to review your briefing and respond properly.</p>
          <p>If you have any additional documents or time-sensitive details, <b>feel free to reply directly to this email</b>.</p>
          <p>Best regards,</p>
          <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="margin: 0; font-weight: bold; color: #000; font-size: 16px;">Mukesh K. Rana</p>
            <p style="margin: 0; color: #3b82f6; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Founder & CEO, Bharat Security</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: "Transmission failed" }, { status: 500 });
  }
}