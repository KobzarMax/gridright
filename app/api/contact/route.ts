import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  first_name: string;
  last_name: string;
  email: string;
  accepted: boolean;
  submitted_at?: string;
};

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const firstName = body.first_name?.trim();
    const lastName = body.last_name?.trim();
    const email = body.email?.trim();
    const accepted = Boolean(body.accepted);
    const submittedAt = body.submitted_at || new Date().toISOString();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!accepted) {
      return NextResponse.json(
        { error: "Consent (accepted) is required." },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `Demo anfragen — ${fullName}`;

    const text = [
      "Vielen Dank für Ihre Anfrage.",
      "",
      "Wir haben folgende Daten erhalten:",
      "",
      `Vorname: ${firstName}`,
      `Nachname: ${lastName}`,
      `E-mail: ${email}`,
      `Zeit: ${submittedAt}`,
      "",
      "Wir melden uns zeitnah bei Ihnen.",
      "",
      "— GridRight",
    ].join("\n");

    const html = `
      <h2>Vielen Dank für Ihre Anfrage</h2>
      <p>Wir haben folgende Daten erhalten:</p>
      <ul>
        <li><strong>Vorname:</strong> ${escapeHtml(firstName)}</li>
        <li><strong>Nachname:</strong> ${escapeHtml(lastName)}</li>
        <li><strong>E-mail:</strong> ${escapeHtml(email)}</li>
        <li><strong>Zeit:</strong> ${escapeHtml(submittedAt)}</li>
      </ul>
      <p>Wir melden uns zeitnah bei Ihnen.</p>
      <p>— <strong>GridRight</strong></p>
    `;

    await resend.emails.send({
      // FROM: you
      from: "GridRight <emil.melikov@gridright.de>",

      // TO: user
      to: email,

      // // CC: you (so it lands in your inbox)
      cc: "emil.melikov@gridright.de",

      subject,
      text,
      html,

      // Optional: replies still come back to you
      replyTo: "emil.melikov@gridright.de",
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unexpected error" },
      { status: 500 },
    );
  }
}
