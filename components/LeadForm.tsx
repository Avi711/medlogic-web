"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Time ranges are wrapped in LRI/PDI marks so RTL rendering keeps 9:00–12:00
// in reading order instead of flipping it.
const isolate = (range: string) => `⁦${range}⁩`;

const CALL_HOURS = [
  `בוקר ${isolate("(9:00–12:00)")}`,
  `צהריים ${isolate("(12:00–15:00)")}`,
  `אחר הצהריים ${isolate("(15:00–18:00)")}`,
  `ערב ${isolate("(18:00–20:30)")}`,
  "לא משנה לי — מתי שנוח לכם",
];

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-line bg-paper px-4 py-3.5 text-lg text-ink placeholder:text-ink-soft/50 focus:border-pine focus:outline-none focus:ring-2 focus:ring-night-brand/40";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

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

    if (payload.name.length < 2) {
      setFieldError("נשמח לדעת איך לפנות אליכם — הזינו שם מלא");
      return;
    }
    if (!/^0\d{1,2}-?\d{7}$/.test(payload.phone.replace(/\s/g, ""))) {
      setFieldError("מספר הטלפון לא נראה תקין — בדקו אותו שוב רגע");
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
      if (!res.ok) throw new Error(`lead submit failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-night-brand/40 bg-night-surface p-8 text-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="mx-auto mb-4 h-12 w-12 text-night-brand"
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
        <p className="font-serif text-2xl font-bold text-night-ink">
          תודה! קיבלנו את הפרטים.
        </p>
        <p className="mt-2 text-night-ink-soft">
          נציג מטעמנו יחזור אליכם בשעה שביקשתם. בינתיים, אם מתחשק לכם — גללו
          למעלה וקראו על המחקרים של ד&quot;ר סיקירוב.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-md bg-night-surface p-6 sm:p-8"
    >
      <h3 className="mb-6 font-serif text-2xl font-bold text-night-ink">
        נשמח לחזור אליכם
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
          <span className="mb-1.5 block font-semibold text-night-ink">
            שם מלא
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="לדוגמה: רחל כהן"
            className={inputClasses}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-semibold text-night-ink">
            טלפון
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="050-1234567"
            className={inputClasses}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-semibold text-night-ink">
            שעה נוחה לשיחה
          </span>
          <select name="callHour" className={inputClasses} defaultValue={CALL_HOURS[0]}>
            {CALL_HOURS.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-semibold text-night-ink">
            משהו שכדאי שנדע?{" "}
            <span className="font-normal text-night-ink-soft">(לא חובה)</span>
          </span>
          <textarea
            name="message"
            rows={2}
            placeholder="למשל: עצירות כרונית, לפני ניתוח, שאלה על התקנה..."
            className={`${inputClasses} resize-none`}
          />
        </label>
      </div>

      {fieldError && (
        <p role="alert" className="mt-4 font-semibold text-night-amber">
          {fieldError}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 font-semibold text-night-amber">
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

      <p className="mt-3 text-center text-base text-night-ink-soft">
        הפרטים שלכם ישמשו אך ורק לחזרה אליכם. בלי דיוור, בלי הטרדות, בלי
        העברה לגורם שלישי.
      </p>
    </form>
  );
}
