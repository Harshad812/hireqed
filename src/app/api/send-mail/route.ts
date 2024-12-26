/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendEmail } from "@/lib/emailService";
import corsMiddleware from "@/middlewares/cors";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  corsMiddleware(req);

  try {
    const { name, email, message, phoneNumber } = await req.json();

    console.log(name, email, message, phoneNumber);

    // Step 4: Send payment confirmation email
    const mailOptions = {
      to: email,
      subject: `Payment Confirmation for Order `,
      text: `Hello, \n\n Thank you for your recent payment...`, // Optional plain text fallback
      html: `
        <!DOCTYPE html>
            <html>
            <head>
            <title>${name} - Contact Inquiry</title>
            </head>
            <body>

            <h2>${name}</h2>
            <p>Mobile: <a href=${phoneNumber}>${phoneNumber}</a></p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>

            <p>This email is to inquire about ${message}.</p>

            <p>Thank you for your time and consideration.</p>

            <p>Sincerely,</p>
            <p>${name}</p>

            </body>
            </html>
      `,
    };

    await sendEmail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Mail send successfully." }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Failed to mail send.",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
