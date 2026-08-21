import type { ReactNode } from "react";

/**
 * Section head: a mint kicker pill, an optional muted note beside it, the
 * headline, and — where there is one — a standfirst held to a readable measure.
 * Always start-aligned; centring these down the page is one of the banned
 * patterns in DESIGN.md.
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
    <header className={className}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className={`kicker ${dark ? "bg-white/12 text-mint" : ""}`}
        >
          {eyebrow}
        </span>
        {meta && (
          <span
            className={`caption font-semibold ${
              dark ? "text-on-dark-soft" : "text-ink-soft"
            }`}
          >
            {meta}
          </span>
        )}
      </div>

      <h2
        className={`display-2 mt-5 max-w-[20ch] ${
          dark ? "text-on-dark" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={`lede mt-5 max-w-[54ch] ${
            dark ? "text-on-dark-soft" : ""
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
