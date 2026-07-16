import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { env } from "@/env";

const contactSchema = z.object({
	name: z.string().trim().min(1, "Name is required").max(100),
	email: z.string().trim().email("Invalid email address").max(200),
	subject: z.string().trim().min(1, "Subject is required").max(150),
	message: z.string().trim().min(1, "Message is required").max(5000),
	// Honeypot: hidden from real users in the UI. Bots that auto-fill every
	// field will populate this, so a non-empty value marks the submission as spam.
	company: z.string().optional(),
});

export async function POST(request: Request) {
	let body: unknown;

	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
	}

	const parsed = contactSchema.safeParse(body);

	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.issues[0]?.message ?? "Invalid form data" },
			{ status: 400 }
		);
	}

	const { name, email, subject, message, company } = parsed.data;

	if (company) {
		// Bot tripped the honeypot. Report success so it doesn't learn the
		// field is a trap, but skip actually sending the email.
		return NextResponse.json({ success: true });
	}

	const resend = new Resend(env.RESEND_API_KEY);

	const { error } = await resend.emails.send({
		from: env.CONTACT_EMAIL_FROM ?? "Web Scaffold <onboarding@resend.dev>",
		to: env.CONTACT_EMAIL_TO,
		replyTo: email,
		subject: `[Contact] ${subject}`,
		text: `From: ${name} <${email}>\n\n${message}`,
	});

	if (error) {
		console.error("Resend error:", error);
		return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
	}

	return NextResponse.json({ success: true });
}
