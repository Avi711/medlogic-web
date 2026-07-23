/**
 * Section heading: a short Hebrew eyebrow over the title, set against a
 * hairline rule that runs to the edge of the column.
 */
export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-10 border-t pt-5 sm:mb-14 ${
        dark ? "border-night-ink/20" : "border-ink/15"
      }`}
    >
      <p
        className={`text-base font-bold tracking-wide ${
          dark ? "text-night-brand" : "text-pine"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 max-w-[22ch] font-display text-3xl font-bold leading-tight [text-wrap:balance] sm:text-[2.5rem] ${
          dark ? "text-night-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
