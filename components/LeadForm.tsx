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
type Theme = "night" | "paper";

const FIELD_ERRORS = {
  name: "נשמח לדעת איך לפנות אליכם — הזינו שם מלא",
  phone: "מספר הטלפון לא נראה תקין — בדקו אותו שוב רגע",
} as const;

const THEMES = {
  night: {
    container: "rounded-md bg-night-surface p-6 sm:p-8",
    heading: "text-night-ink",
    label: "text-night-ink",
    labelSoft: "text-night-ink-soft",
    input:
      "w-full rounded-md border border-line bg-paper px-4 py-3.5 text-lg text-ink placeholder:text-ink-soft/50 focus:border-pine focus:outline-none focus:ring-2 focus:ring-night-brand/40 aria-invalid:border-error",
    alert: "text-night-amber",
    microcopy: "text-night-ink-soft",
    success:
      "rounded-md border border-night-brand/40 bg-night-surface p-8 text-center",
    successIcon: "text-night-brand",
    successTitle: "text-night-ink",
    successBody: "text-night-ink-soft",
  },
  paper: {
    container: "rounded-md border border-line bg-card p-6 shadow-card sm:p-8",
    heading: "text-ink",
    label: "text-ink",
    labelSoft: "text-ink-soft",
    input:
      "w-full rounded-md border border-line bg-paper px-4 py-3.5 text-lg text-ink placeholder:text-ink-soft/50 focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/20 aria-invalid:border-error",
    alert: "text-error",
    microcopy: "text-ink-soft",
    success: "rounded-md border border-success/40 bg-card p-8 text-center",
    successIcon: "text-success",
    successTitle: "text-ink",
    successBody: "text-ink-soft",
  },
} satisfies Record<Theme, Record<string, string>>;

export default function LeadForm({ theme = "night" }: { theme?: Theme }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<FieldError>(null);
  const t = THEMES[theme];

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
      <div role="status" className={t.success}>
        <svg
          viewBox="0 0 24 24"
          className={`mx-auto mb-4 h-12 w-12 ${t.successIcon}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12.5l2.5 2.5L16 9" />
        </svg>
        <p className={`font-serif text-2xl font-bold ${t.successTitle}`}>
          תודה! קיבלנו את הפרטים.
        </p>
        <p className={`mt-2 ${t.successBody}`}>
          נציג מטעמנו יחזור אליכם בשעה שביקשתם. בינתיים, אם מתחשק לכם — גללו
          למעלה וקראו על המחקרים של ד&quot;ר סיקירוב.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={t.container}>
      <h3 className={`mb-6 font-serif text-2xl font-bold ${t.heading}`}>
        השאירו פרטים — נחזור אליכם בשעה שתבחרו
      </h3>

      {/* honeypot — invisible to real users, catches naive bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <div className="space-y-5">
        <label className="block">
          <span className={`mb-1.5 block font-semibold ${t.label}`}>שם מלא</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="לדוגמה: רחל כהן"
            aria-invalid={fieldError?.field === "name" || undefined}
            aria-describedby={fieldError?.field === "name" ? "lead-error" : undefined}
            className={t.input}
          />
          {fieldError?.field === "name" && (
            <p id="lead-error" role="alert" className={`mt-1.5 font-semibold ${t.alert}`}>
              {fieldError.text}
            </p>
          )}
        </label>

        <label className="block">
          <span className={`mb-1.5 block font-semibold ${t.label}`}>טלפון</span>
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
            className={`${t.input} text-left`}
          />
          {fieldError?.field === "phone" && (
            <p id="lead-error" role="alert" className={`mt-1.5 font-semibold ${t.alert}`}>
              {fieldError.text}
            </p>
          )}
        </label>

        <label className="block">
          <span className={`mb-1.5 block font-semibold ${t.label}`}>
            שעה נוחה לשיחה
          </span>
          <select name="callHour" className={t.input}>
            {CALL_HOURS.map((hour) => (
              <option key={hour.value} value={hour.value}>
                {hour.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={`mb-1.5 block font-semibold ${t.label}`}>
            משהו שכדאי שנדע?{" "}
            <span className={`font-normal ${t.labelSoft}`}>(לא חובה)</span>
          </span>
          <textarea
            name="message"
            rows={2}
            placeholder="למשל: עצירות כרונית, לפני ניתוח, שאלה על התקנה..."
            className={`${t.input} resize-none`}
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className={`mt-4 font-semibold ${t.alert}`}>
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-md bg-clay py-4 text-xl font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep disabled:opacity-60"
      >
        {status === "sending" ? "שולחים..." : "חזרו אליי לשיחה קצרה"}
      </button>

      <p className={`mt-3 text-center text-base ${t.microcopy}`}>
        אנחנו חוזרים בדרך כלל תוך מספר שעות, בשעות הפעילות.
        <br />
        הפרטים ישמשו אך ורק לחזרה אליכם — בלי דיוור ובלי העברה לגורם שלישי.
      </p>
    </form>
  );
}
