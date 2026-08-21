import SectionHeading from "@/components/SectionHeading";

const BENEFITS = [
  {
    term: "פחות מאמץ, פחות זמן",
    body: "הזווית נפתחת והיציאה מתקצרת — בלי לחץ ובלי כוח.",
  },
  {
    term: "התרוקנות מלאה יותר",
    body: "נפרדים מתחושת ה״לא סיימתי״ המתסכלת.",
  },
  {
    term: "הקלה בטחורים ודימומים",
    body: "פחות מאמץ — פחות לחץ על כלי הדם באזור.",
  },
  {
    term: "תמיכה במערכת העיכול",
    body: "התרוקנות סדירה מפחיתה את הלחץ במעי הגס.",
  },
  {
    term: "חיזוק ויציבות לגוף",
    body: "הכריעה מפעילה את שרירי הרגליים — גם בגיל מבוגר.",
  },
  {
    term: "לנשים — בהיריון ואחרי לידה",
    body: "תנוחה שתורמת לחיזוק רצפת האגן (בתיאום עם הרופא המטפל).",
  },
];

export default function Benefits() {
  return (
    <section className="shell pb-16 sm:pb-24">
      <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow="מה זה נותן"
          title="במה זה תורם — ולמי זה מתאים"
          lede="המתקן נועד למי שמתמודד עם עצירות, טחורים, דימומים, דיברטיקולוזיס, תחושת התרוקנות לא מלאה, אחרי לידה, או לפני ואחרי ניתוח באזור פי הטבעת — בכפוף להתייעצות עם הרופא המטפל."
        />

        <dl className="grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:pt-3">
          {BENEFITS.map((item) => (
            <div key={item.term} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-green"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10.5 8 14.5 16 5.5" />
                </svg>
              </span>
              <div>
                <dt className="font-display text-[1.1875rem] font-black text-ink">
                  {item.term}
                </dt>
                <dd className="mt-1 leading-relaxed text-ink-soft">
                  {item.body}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <p className="caption mt-12 border-t border-line pt-5">
        המתקן מסייע לתנוחת התרוקנות טבעית ואינו תחליף לאבחון או לייעוץ רפואי.
      </p>
    </section>
  );
}
