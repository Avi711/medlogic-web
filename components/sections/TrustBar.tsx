const CLAIMS = [
  "6 מחקרים בכתבי עת רפואיים",
  "פטנט בין־לאומי רשום",
  "פותח על ידי ד״ר דב סיקירוב",
  "סוקר ב־ynet, הארץ ומעריב",
];

/** The dark rule under the hero: four facts, no ornament. */
export default function TrustBar() {
  return (
    <section aria-label="עובדות מפתח" className="shell pb-4">
      <ul className="on-dark flex flex-wrap items-center justify-between gap-x-8 gap-y-3 rounded-[var(--radius-lg)] bg-ink px-6 py-5 sm:px-9">
        {CLAIMS.map((claim) => (
          <li
            key={claim}
            className="flex items-center gap-2.5 font-display text-[1.0625rem] font-bold text-on-dark"
          >
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-mint" />
            {claim}
          </li>
        ))}
      </ul>
    </section>
  );
}
