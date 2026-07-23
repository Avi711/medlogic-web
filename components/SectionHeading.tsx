import type { ReactNode } from "react";

/**
 * Standing head, set the way a printed feature sets one: a heavy rule, a
 * tracked department label on the start side, an optional folio note on the
 * end side, the headline, and — where there is one — the standfirst filling
 * the rest of the measure so the rule never runs over empty paper.
 */
export default function SectionHeading({
  eyebrow,
  title,
  meta,
  lede,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  lede?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <header
      className={`border-t-2 pt-3 ${
        dark ? "border-night-ink/45" : "border-ink"
      } ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className={`kicker ${dark ? "text-night-brand" : "text-pine"}`}>
          {eyebrow}
        </p>
        {meta && (
          <p
            className={`kicker ${
              dark ? "text-night-ink-soft" : "text-ink-soft"
            }`}
          >
            {meta}
          </p>
        )}
      </div>

      {lede ? (
        <div className="mt-5 grid gap-x-14 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
          <h2 className={`display-2 ${dark ? "text-night-ink" : "text-ink"}`}>
            {title}
          </h2>
          <p
            className={`text-[1.0625rem] leading-relaxed lg:pb-1.5 ${
              dark ? "text-night-ink-soft" : "text-ink-soft"
            }`}
          >
            {lede}
          </p>
        </div>
      ) : (
        <h2
          className={`display-2 mt-5 max-w-[19ch] ${
            dark ? "text-night-ink" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
    </header>
  );
}
