"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ISRAELI_PHONE_RE, normalizePhone } from "@/lib/validation";

// Labels wrap the time range in LRI/PDI isolate marks so RTL rendering keeps
// 9:00–12:00 in reading order; values stay free of control characters.
const isolate = (range: string) => `⁦${range}⁩`;

const CALL_HOURS = [
  { value: "לא משנה לי", label: "לא משנה לי — מתי שנוח לכם" },
  { value: "בוקר 9:00-12:00", label: `בוקר ${isolate("(9:00–12:00)")}` },
  { value: "צהריים 12:00-15:00", label: `צהריים ${isolate("(12:00–15:00)")}` },
  { value: "אחר הצהריים 15:00-18:00", label: `אחר הצהריים ${isolate("(15:00–18:00)")}` },
  { value: "ערב 18:00-20:30", label: `ערב ${isolate("(18:00–20:30)")}` },
];

type Status = "idle" | "sending" | "success" | "error";
type FieldError = { field: "name" | "phone"; text: string } | null;

const FIELD_ERRORS = {
  name: "נשמח לדעת איך לפנות אליכם — הזינו שם מלא",
  phone: "מספר הטלפון לא נראה תקין — בדקו אותו שוב רגע",
} as const;

/**
 * The one conversion surface on the site. Always a white card so it reads the
 * same wherever it sits — on the green blocks and on the ink footer alike.
 */
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<FieldError>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      callHour: String(data.get("callHour") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""),
    };

    // Bring the failing field back on screen — on mobile it can be far
    // above the submit button.
    const rejectField = (field: "name" | "phone") => {
      setFieldError({ field, text: FIELD_ERRORS[field] });
      const input = form.elements.namedItem(field);
      if (input instanceof HTMLInputElement) {
        input.scrollIntoView({ block: "center" });
        input.focus({ preventScroll: true });
      }
    };

    if (payload.name.length < 2) {
      rejectField("name");
      return;
    }
    if (!ISRAELI_PHONE_RE.test(normalizePhone(payload.phone))) {
      rejectField("phone");
      return;
    }

    setFieldError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 422) {
        const { error } = (await res.json()) as { error?: string };
        if (error === "name" || error === "phone") {
          rejectField(error);
          setStatus("idle");
          return;
        }
      }
      if (!res.ok) throw new Error(`lead submit failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="card p-8 sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-green">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5 10 17.5 19 7" />
          </svg>
        </span>
        <p className="mt-5 font-display text-[1.625rem] font-black tracking-[-0.03em] text-ink">
          תודה! קיבלנו את הפרטים.
        </p>
        <p className="mt-2 text-ink-soft">
          נציג מטעמנו יחזור אליכם בשעה שביקשתם. בינתיים, אם מתחשק לכם — גללו
          למעלה וקראו על המחקרים של ד&quot;ר סיקירוב.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-9">
      <h3 className="display-3 text-ink">השאירו פרטים — נחזור אליכם בשעה שתבחרו</h3>

      {/* honeypot — invisible to real users, catches naive bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <div className="mt-7 space-y-5">
        <label className="block">
          <span className="mb-2 block font-semibold text-ink">שם מלא</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="לדוגמה: רחל כהן"
            aria-invalid={fieldError?.field === "name" || undefined}
            aria-describedby={fieldError?.field === "name" ? "lead-error" : undefined}
            className="field"
          />
          {fieldError?.field === "name" && (
            <p id="lead-error" role="alert" className="mt-2 font-semibold text-error">
              {fieldError.text}
            </p>
          )}
        </label>

        <label className="block">
          <span className="mb-2 block font-semibold text-ink">טלפון</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            placeholder="050-1234567"
            aria-invalid={fieldError?.field === "phone" || undefined}
            aria-describedby={fieldError?.field === "phone" ? "lead-error" : undefined}
            className="field text-left"
          />
          {fieldError?.field === "phone" && (
            <p id="lead-error" role="alert" className="mt-2 font-semibold text-error">
              {fieldError.text}
            </p>
          )}
        </label>

        <label className="block">
          <span className="mb-2 block font-semibold text-ink">שעה נוחה לשיחה</span>
          <select name="callHour" className="field">
            {CALL_HOURS.map((hour) => (
              <option key={hour.value} value={hour.value}>
                {hour.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-semibold text-ink">
            משהו שכדאי שנדע?{" "}
            <span className="font-normal text-ink-faint">(לא חובה)</span>
          </span>
          <textarea
            name="message"
            rows={2}
            placeholder="למשל: עצירות כרונית, לפני ניתוח, שאלה על התקנה..."
            className="field resize-none"
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 font-semibold text-error">
          משהו השתבש בשליחה. נסו שוב בעוד רגע
          {site.phoneE164 && site.phoneDisplay ? (
            <>
              {" "}
              או התקשרו:{" "}
              <a
                href={`tel:${site.phoneE164}`}
                className="ltr-isolate font-bold underline"
              >
                {site.phoneDisplay}
              </a>
            </>
          ) : (
            "."
          )}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-lg mt-7 w-full">
        {status === "sending" ? "שולחים..." : "חזרו אליי לשיחה קצרה"}
      </button>

      <p className="caption mt-4">
        אנחנו חוזרים בדרך כלל תוך מספר שעות, בשעות הפעילות.
        <br />
        הפרטים ישמשו אך ורק לחזרה אליכם — בלי דיוור ובלי העברה לגורם שלישי.
      </p>
    </form>
  );
}
