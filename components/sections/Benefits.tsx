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

/** Run-in list, the way a printed guide sets one. No cards, no icons. */
export default function Benefits() {
  return (
    <section className="shell py-14 sm:py-20">
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div>
          <SectionHeading eyebrow="מה זה נותן" title="במה זה תורם — ולמי זה מתאים" />
          <p className="mt-5 text-[1.0625rem] text-ink-soft">
            המתקן נועד למי שמתמודד עם עצירות, טחורים, דימומים, דיברטיקולוזיס,
            תחושת התרוקנות לא מלאה, אחרי לידה, או לפני ואחרי ניתוח באזור פי
            הטבעת — בכפוף להתייעצות עם הרופא המטפל.
          </p>
        </div>

        <dl className="grid gap-x-12 sm:grid-cols-2 lg:pt-1">
          {BENEFITS.map((item) => (
            <div
              key={item.term}
              className="border-t border-ink/20 py-4 first:border-t-2 first:border-ink sm:[&:nth-child(2)]:border-t-2 sm:[&:nth-child(2)]:border-ink"
            >
              <dt className="inline font-display text-[1.125rem] font-bold text-ink">
                {item.term}
              </dt>
              <dd className="inline text-[1.0625rem] text-ink-soft">
                {" "}
                — {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="caption mt-8 border-t border-ink/20 pt-3 text-ink-soft">
        המתקן מסייע לתנוחת התרוקנות טבעית ואינו תחליף לאבחון או לייעוץ רפואי.
      </p>
    </section>
  );
}
