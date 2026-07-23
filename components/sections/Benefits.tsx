import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

/**
 * Mean time to sensation of satisfactory emptying, per position, as measured
 * in Sikirov 2003 (n=28). Drawn as a journal figure rather than described.
 */
const MEASUREMENTS = [
  { position: "אסלה רגילה", detail: "גובה 41–42 ס״מ", minutes: 2.1 },
  { position: "אסלה נמוכה", detail: "גובה 31–32 ס״מ", minutes: 1.9 },
  { position: "כריעה מלאה", detail: "המתקן של MedLogic", minutes: 0.85, highlight: true },
];

const AXIS_MAX = 2.5;

export default function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="מה נמדד"
          title="דקה וחצי פחות בשירותים. זה מה שהמדידה מראה."
        />

        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <figure>
            <div className="border-y border-ink/15 py-8">
              {MEASUREMENTS.map((row) => (
                <div key={row.position} className="mb-7 last:mb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={`font-bold ${
                        row.highlight ? "text-pine" : "text-ink"
                      }`}
                    >
                      {row.position}{" "}
                      <span className="font-normal text-ink-soft">
                        ({row.detail})
                      </span>
                    </span>
                    <span
                      className={`ltr-isolate font-display text-2xl font-black ${
                        row.highlight ? "text-pine" : "text-ink-soft"
                      }`}
                    >
                      {row.minutes.toFixed(2)}׳
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className={`mt-2 h-7 ${row.highlight ? "bg-pine" : "bg-ink/20"}`}
                    style={{ width: `${(row.minutes / AXIS_MAX) * 100}%` }}
                  />
                </div>
              ))}

              <div aria-hidden="true" className="mt-6 border-t border-ink/25 pt-1.5">
                <div className="flex justify-between text-sm text-ink-soft">
                  <span className="ltr-isolate">2.5 דק׳</span>
                  <span className="ltr-isolate">0</span>
                </div>
              </div>
            </div>

            <figcaption className="mt-3 text-base text-ink-soft">
              איור 2: הזמן הממוצע עד תחושת התרוקנות מלאה, לפי תנוחה.{" "}
              <span className="ltr-isolate">28</span> נבדקים,{" "}
              <span className="ltr-isolate">6</span> יציאות בכל תנוחה. מתוך
              המחקר שפורסם ב-
              <span className="ltr-isolate">Digestive Diseases and Sciences</span>{" "}
              (2003).{" "}
              <Link
                href="/research/comparison-of-straining"
                className="font-semibold text-pine underline underline-offset-4"
              >
                למאמר המלא
              </Link>
            </figcaption>
          </figure>

          <div className="space-y-5 lg:pt-2">
            <p className="text-xl leading-relaxed text-ink">
              כל אחד ואחת מ-28 המשתתפים התרוקנו מהר יותר בכריעה — ללא יוצא מן
              הכלל. <span className="ltr-isolate">44%</span> דירגו את
              ההתרוקנות בכריעה כ„קלה מאוד”, לעומת{" "}
              <span className="ltr-isolate">9–20%</span> בישיבה.
            </p>
            <p className="text-ink-soft">
              הזמן העודף בישיבה אינו זמן של מנוחה — הוא הזמן שנדרש כדי לדחוף
              את התוכן דרך זווית כמעט ישרה. זה המאמץ שהמחקרים קושרים לטחורים,
              לדימומים ולתחושת ההתרוקנות הלא־מלאה.
            </p>
            <p className="text-ink-soft">
              המתקן נועד למי שמתמודד עם עצירות, טחורים, דימומים, דיברטיקולוזיס,
              תחושת התרוקנות לא מלאה, אחרי לידה, או לפני ואחרי ניתוח באזור פי
              הטבעת.
            </p>
            <p className="text-base text-ink-soft">
              המתקן מסייע לתנוחת התרוקנות טבעית ואינו תחליף לאבחון או לייעוץ
              רפואי. במצב רפואי מורכב — התייעצו עם הרופא המטפל.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
