import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, message } = body;

        if (!email || !message) {
            return NextResponse.json(
                { error: "Email and message are required." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Otis Portfolio <onboarding@resend.dev>", // temporary sender for testing
            to: [process.env.CONTACT_TO_EMAIL as string],
            replyTo: email,
            subject: `Portfolio contact from ${email}`,
            text: `
New portfolio message

From: ${email}

Message:
${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        return NextResponse.json(
            { error: "Something went wrong sending the message." },
            { status: 500 }
        );
    }
}