const CLAIMS = [
  "6 מחקרים בכתבי עת רפואיים",
  "פטנט בין־לאומי רשום",
  "פותח על ידי ד״ר דב סיקירוב",
  "סוקר ב־ynet, הארץ ומעריב",
];

/**
 * The line under the hero: four facts, no box. A card here made three
 * stacked boxes (hero, strip, press) read as one glued pile — so this is
 * plain text on the canvas, a quiet caption to the hero above it.
 */
export default function TrustBar() {
  return (
    <section aria-label="עובדות מפתח" className="shell pt-5 pb-2 sm:pt-6">
      <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-2 px-2">
        {CLAIMS.map((claim) => (
          <li
            key={claim}
            className="flex items-center gap-2.5 font-display text-[1rem] font-bold text-ink-soft"
          >
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-green" />
            {claim}
          </li>
        ))}
      </ul>
    </section>
  );
}
