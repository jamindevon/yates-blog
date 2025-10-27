import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
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
      const tomEmail = "TomJR@YatesFuneralHome.com";

      try {
        // Send notification email to track registrations
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail, tomEmail],
          subject: `🍽️ Lunch & Learn Registration: ${name}`,
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
                  .event-details { background: #fef3c7; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 20px; }
                  .event-details h3 { margin-top: 0; color: #92400e; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 24px;">🍽️ New Lunch & Learn Registration!</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">November 5 at 11:30 AM</p>
                  </div>
                  <div class="content">
                    <h2 style="color: #2d5016; margin-top: 0;">Attendee Information</h2>

                    <div class="field">
                      <span class="label">Name</span>
                      <span class="value">${name}</span>
                    </div>

                    <div class="field">
                      <span class="label">Email</span>
                      <span class="value"><a href="mailto:${email}">${email}</a></span>
                    </div>

                    <div class="field">
                      <span class="label">Phone</span>
                      <span class="value"><a href="tel:${phone}">${phone}</a></span>
                    </div>

                    <div class="field">
                      <span class="label">Registered</span>
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

                    <div class="event-details">
                      <h3>📅 Event Details</h3>
                      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                        <li><strong>Date:</strong> November 5</li>
                        <li><strong>Time:</strong> 11:30 AM</li>
                        <li><strong>Location:</strong> 7951 S US Hwy 1, Port St. Lucie, FL</li>
                        <li><strong>Topic:</strong> Benefits of Planning Ahead</li>
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
        // Continue anyway since we still want to confirm registration
      }
    }

    return NextResponse.json(
      {
        message: "Success"
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
