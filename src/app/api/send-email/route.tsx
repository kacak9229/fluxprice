import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Send the Welcome Email
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
                      <img src="https://fluxpriceai.com/fluxprice2.png" alt="FluxPrice AI" width="180" style="display: block; border: 0; max-width: 100%; height: auto;" />
                    </td>
                  </tr>

                  <!-- Hero Section -->
                  <tr>
                    <td align="center" style="padding: 0 40px;">
                      <h1 style="color: #1a1a1a; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.5px;">
                        You're on the list! 🚀
                      </h1>
                      <p style="color: #555555; font-size: 16px; line-height: 26px; margin: 0 0 32px 0;">
                       Welcome to the future of e-commerce pricing. Your spot for early access is pending confirmation.
                      </p>
                    </td>
                  </tr>

                  <!-- CTA Button -->
                  <tr>
                    <td align="center" style="padding: 0 40px 48px 40px;">
                      <a href="https://fluxpriceai.com/thank-you" style="background-color: #000000; color: #ffffff; padding: 16px 36px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; transition: background-color 0.2s;">
                        Confirm Email
                      </a>
                      <p style="margin-top: 24px; color: #8898aa; font-size: 13px;">
                        (No password required yet)
                      </p>
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
                        <a href="https://fluxpriceai.com" style="color: #2563eb; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
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

    return NextResponse.json(emailData);
  } catch (error) {
    console.error('Unexpected error in /api/send-email:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
