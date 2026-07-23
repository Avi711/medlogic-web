/**
 * Medical-plate style SVG comparison: sitting (90°, kinked passage)
 * vs. full squat (35°, open passage). Pure vector — crisp at any size.
 */

function Figure({ variant }: { variant: "sitting" | "squatting" }) {
  const isSitting = variant === "sitting";
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-auto"
      role="img"
      aria-label={
        isSitting
          ? "איור: בישיבה בזווית של 90 מעלות נוצר כיפוף חד במעבר היציאה"
          : "איור: בכריעה בזווית של 35 מעלות המעבר מתיישר ונפתח"
      }
    >
      <line x1="10" y1="185" x2="190" y2="185" stroke="currentColor" strokeWidth="2" opacity="0.25" />

      {isSitting ? (
        <>
          {/* toilet */}
          <rect x="108" y="120" width="52" height="62" rx="4" fill="currentColor" opacity="0.12" />
          {/* body: upright torso, thighs horizontal — 90° hip angle */}
          <circle cx="86" cy="47" r="13" fill="none" stroke="currentColor" strokeWidth="5" />
          <path
            d="M 88 60 L 92 118 L 52 122 L 50 182"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* kinked passage */}
          <path
            d="M 100 92 Q 104 112 92 126"
            fill="none"
            stroke="var(--error)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />
          {/* hip-angle marker */}
          <path d="M 91 105 A 13 13 0 0 1 78 119" fill="none" stroke="var(--error)" strokeWidth="2.5" />
          <text x="130" y="105" fill="var(--error)" fontSize="18" fontWeight="700" textAnchor="middle">
            90°
          </text>
        </>
      ) : (
        <>
          {/* squat platform */}
          <rect x="60" y="158" width="90" height="24" rx="4" fill="currentColor" opacity="0.12" />
          {/* body: deep squat, torso leaning onto raised knees — 35° hip angle */}
          <circle cx="72" cy="72" r="13" fill="none" stroke="currentColor" strokeWidth="5" />
          <path
            d="M 76 85 L 96 128 L 66 140 L 84 158"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* open, straightened passage */}
          <path
            d="M 102 104 Q 114 122 118 146"
            fill="none"
            stroke="var(--pine)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />
          {/* hip-angle marker — tight angle between torso and thighs */}
          <path d="M 86 106 A 15 15 0 0 1 97 120" fill="none" stroke="var(--pine)" strokeWidth="2.5" />
          <text x="140" y="112" fill="var(--pine)" fontSize="18" fontWeight="700" textAnchor="middle">
            35°
          </text>
        </>
      )}
    </svg>
  );
}

export default function AngleDiagram() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-8">
      {/* RTL: sitting (the problem) renders on the right — read first */}
      <figure className="rounded-sm border border-line bg-card p-4 text-ink shadow-card sm:p-7">
        <Figure variant="sitting" />
        <figcaption className="mt-4 text-center">
          <span className="block font-serif text-xl font-bold text-error">בישיבה</span>
          <span className="mt-1 block text-base text-ink-soft">
            המעבר מתקפל בזווית חדה — היציאה דורשת מאמץ
          </span>
        </figcaption>
      </figure>
      <figure className="rounded-sm border border-line bg-card p-4 text-ink shadow-card sm:p-7">
        <Figure variant="squatting" />
        <figcaption className="mt-4 text-center">
          <span className="block font-serif text-xl font-bold text-pine">בכריעה</span>
          <span className="mt-1 block text-base text-ink-soft">
            הזווית נפתחת והמעבר מתיישר — היציאה קלה וטבעית
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
