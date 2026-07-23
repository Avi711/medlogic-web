import { NextRequest, NextResponse } from "next/server";
import { ISRAELI_PHONE_RE, normalizePhone } from "@/lib/validation";

type LeadPayload = {
  name?: string;
  phone?: string;
  callHour?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this
};

const DELIVERY_TIMEOUT_MS = 5000;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }
  const payload = body as LeadPayload;

  // Honeypot: pretend success so bots don't adapt
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim().slice(0, 80);
  const phone = normalizePhone(payload.phone ?? "");
  const callHour = (payload.callHour ?? "").trim().slice(0, 100);
  const message = (payload.message ?? "").trim().slice(0, 1000);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "name" }, { status: 422 });
  }
  if (!ISRAELI_PHONE_RE.test(phone)) {
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

  const deliveries: Promise<boolean>[] = [];

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    deliveries.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      })
        .then((res) => res.ok)
        .catch(() => false)
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  if (resendKey && emailTo) {
    deliveries.push(
      fetch("https://api.resend.com/emails", {
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
        signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      })
        .then((res) => res.ok)
        .catch(() => false)
    );
  }

  const results = await Promise.all(deliveries);
  const delivered = results.some(Boolean);

  const maskedPhone = phone.slice(0, 3) + "****" + phone.slice(-3);
  console.log(
    `[lead] ${name} ${maskedPhone} hour="${callHour}" channels=${results.length} delivered=${delivered}`
  );

  // If delivery channels exist but every one failed, surface the failure so
  // the visitor sees the retry message instead of a false success.
  if (deliveries.length > 0 && !delivered) {
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
