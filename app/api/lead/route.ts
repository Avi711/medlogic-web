import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  callHour?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this
};

const PHONE_RE = /^0(5\d|[2-4]|[8-9]|7\d)-?\d{7}$/;

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't adapt
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").replace(/[\s-]/g, "");
  const callHour = (body.callHour ?? "").trim();
  const message = (body.message ?? "").trim().slice(0, 1000);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "name" }, { status: 422 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ ok: false, error: "phone" }, { status: 422 });
  }

  const lead = {
    name,
    phone,
    callHour,
    message,
    submittedAt: new Date().toISOString(),
    page: req.headers.get("referer") ?? "",
  };

  const results: string[] = [];

  // 1) Generic webhook (Make / Zapier / Google Apps Script / CRM)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      results.push(`webhook:${res.status}`);
    } catch {
      results.push("webhook:failed");
    }
  }

  // 2) Email via Resend (set RESEND_API_KEY + LEAD_EMAIL_TO)
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  if (resendKey && emailTo) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_EMAIL_FROM ?? "MedLogic <leads@medlogic.co.il>",
          to: [emailTo],
          subject: `ליד חדש מהאתר: ${name} (${phone})`,
          text: [
            `שם: ${name}`,
            `טלפון: ${phone}`,
            `שעה נוחה לשיחה: ${callHour || "לא צוינה"}`,
            message ? `הודעה: ${message}` : null,
            `נשלח: ${lead.submittedAt}`,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      results.push(`email:${res.status}`);
    } catch {
      results.push("email:failed");
    }
  }

  console.log("[lead]", JSON.stringify(lead), results.join(","));
  return NextResponse.json({ ok: true });
}
