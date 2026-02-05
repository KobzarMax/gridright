import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://hook.eu2.make.com/gyatr6824q2ge3g9pyxiphv88liqy17d";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "x-make-apikey": process.env.MAKE_API_KEY!,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: text || "Make webhook failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
