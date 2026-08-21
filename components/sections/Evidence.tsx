import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

/**
 * Mean time to the sensation of satisfactory emptying, per position, as
 * measured in Sikirov 2003 (n=28, six defecations per position).
 */
const MEASUREMENTS = [
  { position: "אסלה רגילה", detail: "גובה מושב 41–42 ס״מ", minutes: 2.1 },
  { position: "אסלה נמוכה", detail: "גובה מושב 31–32 ס״מ", minutes: 1.9 },
  {
    position: "כריעה מלאה",
    detail: "התנוחה שהערכה מאפשרת",
    minutes: 0.85,
    highlight: true,
  },
];

const AXIS_MAX = 2.4;

const FINDINGS = [
  <>
    <strong className="ltr-isolate tnum font-black text-ink">100%</strong> מ־
    <span className="ltr-isolate tnum">28</span> המשתתפים התרוקנו מהר יותר
    בכריעה — ללא יוצא מן הכלל.
  </>,
  <>
    <strong className="ltr-isolate tnum font-black text-ink">44%</strong> דירגו
    את ההתרוקנות בכריעה כ״קלה מאוד״, לעומת{" "}
    <span className="ltr-isolate tnum">9–20%</span> בתנוחות הישיבה.
  </>,
  <>
    ההפרש — בזמן ובמאמץ המדווח — היה מובהק סטטיסטית:{" "}
    <strong className="ltr-isolate font-black text-ink">P &lt; 0.0001</strong>.
  </>,
];

export default function Evidence() {
  return (
    <section id="evidence" className="shell scroll-mt-28 py-16 sm:py-24">
      <SectionHeading
        eyebrow="מה נמדד"
        title="דקה וחצי פחות בשירותים."
        meta="Sikirov · 2003"
        lede="הזמן העודף בישיבה אינו זמן של מנוחה — הוא הזמן שנדרש כדי לדחוף את התוכן דרך זווית כמעט ישרה. זה המאמץ שהמחקרים קושרים לטחורים, לדימומים ולתחושת ההתרוקנות הלא־מלאה."
      />

      <div className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start">
        <figure className="card p-6 sm:p-9">
          <ul className="space-y-7">
            {MEASUREMENTS.map((row) => (
              <li key={row.position}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="leading-tight">
                    <span
                      className={`font-display font-black ${
                        row.highlight ? "text-green" : "text-ink"
                      }`}
                    >
                      {row.position}
                    </span>{" "}
                    <span className="caption">{row.detail}</span>
                  </span>
                  <span
                    className={`ltr-isolate tnum font-display text-[2rem] font-black leading-none tracking-[-0.04em] ${
                      row.highlight ? "text-green" : "text-ink-faint"
                    }`}
                  >
                    {row.minutes.toFixed(2)}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-3 h-4 overflow-hidden rounded-full bg-canvas-sink"
                >
                  <div
                    className={`h-full rounded-full ${
                      row.highlight ? "bg-green" : "bg-line-strong"
                    }`}
                    style={{ width: `${(row.minutes / AXIS_MAX) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <figcaption className="caption mt-8 border-t border-line pt-5">
            הזמן הממוצע בדקות עד תחושת התרוקנות מלאה, לפי תנוחה.{" "}
            <span className="ltr-isolate tnum">28</span> נבדקים בגילי{" "}
            <span className="ltr-isolate tnum">17–66</span>,{" "}
            <span className="ltr-isolate tnum">6</span> יציאות בכל תנוחה. מתוך
            המחקר שפורסם ב־
            <span className="ltr-isolate">Digestive Diseases and Sciences</span>{" "}
            <span className="ltr-isolate tnum">(2003)</span>.{" "}
            <Link
              href="/research/comparison-of-straining"
              className="font-bold text-green underline underline-offset-4 hover:text-green-lift"
            >
              למאמר המלא ←
            </Link>
          </figcaption>
        </figure>

        <div>
          <div className="rounded-[var(--radius-lg)] bg-mint-wash p-7 sm:p-8">
            <span className="kicker bg-white/70">שלושה ממצאים מהמחקר</span>
            <ul className="mt-5 space-y-4">
              {FINDINGS.map((finding, i) => (
                <li
                  key={i}
                  className="border-b border-green/12 pb-4 leading-snug text-ink-soft last:border-b-0 last:pb-0"
                >
                  {finding}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 font-display text-[1.375rem] font-black leading-snug tracking-[-0.025em] text-green">
            המתקן אינו מבטיח דבר. הוא מחזיר את הגוף לתנוחה שבה המדידה הזו
            נעשתה — וזו כל הטענה.
          </p>
        </div>
      </div>
    </section>
  );
}
