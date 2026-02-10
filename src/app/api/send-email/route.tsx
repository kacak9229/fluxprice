import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { sendFbEvent } from '@/lib/fb-capi';
import { prisma } from '@/lib/prisma';
import { randomUUID } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    process.env.APP_URL ||
    "https://fluxpriceai.com"
  );
}

export async function POST(request: NextRequest) {
  try {
    const { email, eventId, fbp, fbc, planName } = await request.json();

    // Get client IP and User Agent from request headers for CAPI
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip");
    const userAgent = request.headers.get("user-agent");

    // 1. Create email open tracking row (unique token for pixel; one conversion per open)
    const token = randomUUID();
    await prisma.emailOpenEvent.create({
      data: {
        token,
        email,
        eventId: eventId ?? `signup-${Date.now()}`,
        convertedAt: null,
      },
    });

    const baseUrl = getBaseUrl();
    const trackingUrl = `${baseUrl}/api/track-open?token=${token}`;
    const thankYouUrl = `${baseUrl}/thank-you?token=${token}`;

    // 2. Send the Welcome Email (with tracking pixel)
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'FluxPrice Waitlist Confirmation <hello@fluxpriceai.com>',
      to: [email],
      subject: 'Welcome to FluxPrice Waitlist 🚀',
      // react: <EmailTemplate firstName="Future User" />,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>You’re almost done!</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f6f9fc; padding: 40px 0;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e1e1e1;">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td align="center" style="padding: 40px 0 20px 0; background-color: #ffffff;">
                      <img src="${baseUrl}/fluxprice2.png" alt="FluxPrice AI" width="180" style="display: block; border: 0; max-width: 100%; height: auto;" />
                    </td>
                  </tr>

                  <!-- Hero Section -->
                  <tr>
                    <td align="center" style="padding: 0 40px;">
                      <h1 style="color: #1a1a1a; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.5px;">
                        You're almost done! 🚀
                      </h1>
                      <p style="color: #555555; font-size: 16px; line-height: 26px; margin: 0 0 32px 0;">
                       Welcome to the future of e-commerce pricing. Your spot for early access is pending confirmation.
                      </p>
                    </td>
                  </tr>

                  <!-- CTA Button -->
                  <tr>
                    <td align="center" style="padding: 0 40px 48px 40px;">
                      <a href="${thankYouUrl}" style="background-color: #000000; color: #ffffff; padding: 16px 36px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; transition: background-color 0.2s;">
                        Confirm Email
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 32px 40px; border-top: 1px solid #e1e1e1; text-align: center;">
                      <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px; line-height: 18px;">
                        © ${new Date().getFullYear()} Fluxprice AI. All rights reserved.<br>
                        San Francisco, CA
                      </p>
                      <div style="margin-top: 16px;">
                        <a href="${baseUrl}" style="color: #2563eb; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <img src="${trackingUrl}" width="1" height="1" alt="" style="display:block;border:0;" />
        </body>
        </html>
      `,
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json({ error: emailError }, { status: 500 });
    }

    // 2. Add to Resend Audience (Contact List)
    try {
      // Use explicit audienceId if available, otherwise Resend will use default audience
      const contactPayload: any = {
        email: email,
        firstName: '',
        unsubscribed: false,
      };
      
      if (audienceId) {
        contactPayload.audienceId = audienceId;
      }

      // const { data, error } = await resend.contacts.create(contactPayload);
      // if (error) {
      //    console.error('Error adding contact to audience:', error);
      // } else {
      //    console.log('Contact added successfully:', data);
      // }
    } catch (contactError) {
      console.error('Failed to add contact to audience:', contactError);
      // We don't fail the request if just adding to list fails, as the email was sent
    }

    // 3. Send Facebook Conversions API Lead event (server-side)
    try {
      await sendFbEvent({
        eventName: "Lead",
        eventId: eventId,
        eventSourceUrl: baseUrl,
        userData: {
          email: email,
          clientIp: clientIp || undefined,
          userAgent: userAgent || undefined,
          fbp: fbp,
          fbc: fbc,
        },
        customData: {
          content_name: planName || "Early Access",
        },
      });
    } catch (fbError) {
      console.error('Failed to send Facebook CAPI event:', fbError);
      // Don't fail the request if CAPI fails, as the email was sent successfully
    }

    return NextResponse.json(emailData);
  } catch (error) {
    console.error('Unexpected error in /api/send-email:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
