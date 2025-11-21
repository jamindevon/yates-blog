import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, zipCode } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send notification email if Resend is configured
    if (resend) {
      const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
      const toEmail = process.env.TO_EMAIL || "thesunlandcompany@gmail.com";
      const tomEmail = "tomjr@yatesfuneralhome.com";
      const brianEmail = "Brian@yatesfuneralhome.com";

      try {
        // Send notification email to track leads (to you, Tom, and Brian)
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail, tomEmail, brianEmail],
          subject: `🔔 New Lead: ${firstName} ${lastName} - Yates Funeral Home`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #2d5016; color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
                  .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 15px; padding: 15px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #2d5016; }
                  .label { font-weight: bold; color: #2d5016; display: block; margin-bottom: 5px; }
                  .value { color: #1e293b; font-size: 16px; }
                  .alert { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 20px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 24px;">New Lead Captured!</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Yates Funeral Home Pre-Planning Guide</p>
                  </div>
                  <div class="content">
                    <h2 style="color: #2d5016; margin-top: 0;">Lead Information</h2>

                    <div class="field">
                      <span class="label">Name</span>
                      <span class="value">${firstName} ${lastName}</span>
                    </div>

                    <div class="field">
                      <span class="label">Email</span>
                      <span class="value"><a href="mailto:${email}">${email}</a></span>
                    </div>

                    ${phone ? `
                    <div class="field">
                      <span class="label">Phone</span>
                      <span class="value"><a href="tel:${phone}">${phone}</a></span>
                    </div>
                    ` : ''}

                    ${zipCode ? `
                    <div class="field">
                      <span class="label">Zip Code</span>
                      <span class="value">${zipCode}</span>
                    </div>
                    ` : ''}

                    <div class="field">
                      <span class="label">Submitted</span>
                      <span class="value">${new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })}</span>
                    </div>

                    <div class="alert">
                      <strong>⚡ Next Steps:</strong>
                      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                        <li>User was automatically redirected to the guide</li>
                        <li>Consider following up within 24-48 hours</li>
                        <li>Add to your CRM for nurture campaign</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue anyway since we still want to redirect to the guide
      }
    }

    return NextResponse.json(
      {
        message: "Success",
        guideUrl: "https://eguides.partnerplusmedia.com/YatesFH-V1/"
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Failed to process request"
      },
      { status: 500 }
    );
  }
}
