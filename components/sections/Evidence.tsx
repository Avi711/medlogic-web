import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

/**
 * Figure 2 — mean time to the sensation of satisfactory emptying, per
 * position, as measured in Sikirov 2003 (n=28, six defecations per
 * position). Drawn as a journal plate, not as marketing "stats".
 */
const MEASUREMENTS = [
  { position: "אסלה רגילה", detail: "גובה מושב 41–42 ס״מ", minutes: 2.1 },
  { position: "אסלה נמוכה", detail: "גובה מושב 31–32 ס״מ", minutes: 1.9 },
  { position: "כריעה מלאה", detail: "התנוחה שהערכה מאפשרת", minutes: 0.85, highlight: true },
];

const AXIS_MAX = 2.5;
const TICKS = [0, 0.5, 1, 1.5, 2, 2.5];

export default function Evidence() {
  return (
    <section id="evidence" className="shell scroll-mt-24 py-14 sm:py-20">
      <SectionHeading
        eyebrow="מה נמדד"
        title="דקה וחצי פחות בשירותים. זה מה שהמדידה מראה."
        meta="Sikirov · 2003"
        lede="הזמן העודף בישיבה אינו זמן של מנוחה — הוא הזמן שנדרש כדי לדחוף את התוכן דרך זווית כמעט ישרה. זה המאמץ שהמחקרים קושרים לטחורים, לדימומים ולתחושת ההתרוקנות הלא־מלאה."
      />

      <div className="mt-9 grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <figure>
          <div className="border-y-2 border-ink py-7">
            {MEASUREMENTS.map((row) => (
              <div key={row.position} className="mb-6 last:mb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span className="text-[1.0625rem] leading-tight">
                    <span
                      className={`font-bold ${
                        row.highlight ? "text-pine" : "text-ink"
                      }`}
                    >
                      {row.position}
                    </span>{" "}
                    <span className="text-ink-soft">{row.detail}</span>
                  </span>
                  <span
                    className={`ltr-isolate tnum font-display text-[1.75rem] font-black leading-none ${
                      row.highlight ? "text-pine" : "text-ink-soft"
                    }`}
                  >
                    {row.minutes.toFixed(2)}
                    <span className="text-[0.9rem] font-bold"> דק׳</span>
                  </span>
                </div>

                <div className="relative mt-2 h-8">
                  {/* gridlines — the plate reads as a measured chart, not a bar graphic */}
                  {TICKS.map((tick) => (
                    <span
                      key={tick}
                      aria-hidden="true"
                      className="absolute top-0 bottom-0 w-px bg-ink/15"
                      style={{ insetInlineStart: `${(tick / AXIS_MAX) * 100}%` }}
                    />
                  ))}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-y-0 start-0 ${
                      row.highlight ? "bg-pine" : "bg-ink/25"
                    }`}
                    style={{ width: `${(row.minutes / AXIS_MAX) * 100}%` }}
                  />
                </div>
              </div>
            ))}

            <div aria-hidden="true" className="mt-4 border-t border-ink pt-1.5">
              <div className="relative h-5">
                {TICKS.map((tick) => (
                  <span
                    key={tick}
                    className="ltr-isolate tnum absolute top-0 text-[0.875rem] text-ink-soft"
                    style={{
                      insetInlineStart: `${(tick / AXIS_MAX) * 100}%`,
                      transform: "translateX(50%)",
                    }}
                  >
                    {tick}
                  </span>
                ))}
              </div>
              <p className="text-center text-[0.875rem] text-ink-soft">
                דקות עד תחושת התרוקנות מלאה
              </p>
            </div>
          </div>

          <figcaption className="caption mt-3 text-ink-soft">
            <strong className="font-bold text-ink">איור 2:</strong> הזמן הממוצע
            עד תחושת התרוקנות מלאה, לפי תנוחה.{" "}
            <span className="ltr-isolate tnum">28</span> נבדקים בגילי{" "}
            <span className="ltr-isolate tnum">17–66</span>,{" "}
            <span className="ltr-isolate tnum">6</span> יציאות בכל תנוחה. מתוך
            המחקר שפורסם ב־
            <span className="ltr-isolate">Digestive Diseases and Sciences</span>{" "}
            <span className="ltr-isolate tnum">(2003)</span>.{" "}
            <Link
              href="/research/comparison-of-straining"
              className="font-semibold text-pine underline underline-offset-4 hover:text-clay"
            >
              למאמר המלא ←
            </Link>
          </figcaption>
        </figure>

        <div>
          <div className="border-2 border-ink p-5 sm:p-6">
            <p className="kicker border-b border-ink/25 pb-2.5 text-pine">
              שלושה ממצאים מהמחקר
            </p>
            <ul className="mt-1">
              {[
                <>
                  <strong className="ltr-isolate tnum font-bold">100%</strong>{" "}
                  מ־<span className="ltr-isolate tnum">28</span> המשתתפים
                  התרוקנו מהר יותר בכריעה — ללא יוצא מן הכלל.
                </>,
                <>
                  <strong className="ltr-isolate tnum font-bold">44%</strong>{" "}
                  דירגו את ההתרוקנות בכריעה כ״קלה מאוד״, לעומת{" "}
                  <span className="ltr-isolate tnum">9–20%</span> בתנוחות
                  הישיבה.
                </>,
                <>
                  ההפרש — בזמן ובמאמץ המדווח — היה מובהק סטטיסטית:{" "}
                  <strong className="ltr-isolate">P &lt; 0.0001</strong>.
                </>,
              ].map((item, i) => (
                <li
                  key={i}
                  className="border-b border-ink/15 py-3 text-[1.0625rem] leading-snug last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 font-display text-[1.375rem] font-medium leading-snug text-pine">
            המתקן אינו מבטיח דבר. הוא מחזיר את הגוף לתנוחה שבה המדידה הזו
            נעשתה — וזו כל הטענה.
          </p>
        </div>
      </div>
    </section>
  );
}
