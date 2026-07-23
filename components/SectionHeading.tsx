/**
 * Section heading with an oversized ghost index numeral at the RTL start
 * corner — the site's editorial pacing device.
 */
export default function SectionHeading({
  index,
  title,
  dark = false,
}: {
  index: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="relative mb-10 sm:mb-14">
      <span
        aria-hidden="true"
        className={`absolute -top-10 sm:-top-16 start-0 font-serif font-black leading-none select-none text-[7rem] sm:text-[10rem] ${
          dark ? "text-night-ink/5" : "text-ink/5"
        }`}
      >
        {index}
      </span>
      <h2
        className={`relative font-serif font-bold text-3xl sm:text-[2.5rem] leading-tight ${
          dark ? "text-night-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
