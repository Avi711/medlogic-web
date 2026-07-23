import SectionHeading from "@/components/SectionHeading";

const BENEFITS = [
  {
    title: "פחות מאמץ, פחות זמן",
    body: "הזווית נפתחת והיציאה מתקצרת — בלי לחץ ובלי כוח.",
    icon: <path d="M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />,
  },
  {
    title: "התרוקנות מלאה יותר",
    body: "נפרדים מתחושת ה\"לא סיימתי\" המתסכלת.",
    icon: <path d="M4 12.5l5 5L20 6.5" />,
  },
  {
    title: "הקלה בטחורים ודימומים",
    body: "פחות מאמץ — פחות לחץ על כלי הדם באזור.",
    icon: (
      <path d="M12 3c3.5 4.5 6 7.6 6 10.5a6 6 0 1 1-12 0C6 10.6 8.5 7.5 12 3z" />
    ),
  },
  {
    title: "תמיכה במערכת העיכול",
    body: "התרוקנות סדירה מפחיתה את הלחץ במעי הגס.",
    icon: (
      <>
        <path d="M7 4h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8" />
      </>
    ),
  },
  {
    title: "חיזוק ויציבות לגוף",
    body: "הכריעה מפעילה את שרירי הרגליים — גם בגיל מבוגר.",
    icon: (
      <>
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 8v6l-4 7M12 14l4 7M6 11h12" />
      </>
    ),
  },
  {
    title: "לנשים — בהיריון ואחרי לידה",
    body: "תנוחה שתורמת לחיזוק רצפת האגן (בתיאום עם הרופא המטפל).",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7c2 2.2 3.2 3.8 3.2 5.4a3.2 3.2 0 1 1-6.4 0C8.8 10.8 10 9.2 12 7z" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" title="במה זה תורם — ולמי זה מתאים" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-start gap-4 rounded-sm border border-line bg-card p-5 shadow-card"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-wash">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-pine"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-ink">{benefit.title}</h3>
                <p className="mt-1 text-base text-ink-soft">{benefit.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-ink-soft">
          המתקן מסייע לתנוחת התרוקנות טבעית ואינו תחליף לאבחון או לייעוץ
          רפואי.
        </p>
      </div>
    </section>
  );
}
