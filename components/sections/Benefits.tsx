const BENEFITS = [
  {
    title: "פחות מאמץ, פחות זמן",
    body: "תנוחת הכריעה פותחת את זווית היציאה ומקצרת משמעותית את זמן השהייה בשירותים — כבר מהשימושים הראשונים רבים מרגישים יציאות קלות יותר.",
  },
  {
    title: "התרוקנות מלאה יותר",
    body: "רבים מהמשתמשים מדווחים שנעלמת תחושת ה\"לא סיימתי\" המתסכלת — והבטן מרגישה קלה יותר לאורך היום.",
  },
  {
    title: "הקלה בטחורים ודימומים",
    body: "צמצום המאמץ מפחית את הלחץ על כלי הדם באזור — הגורם המרכזי להחמרת טחורים. במחקרי ד\"ר סיקירוב דווח על הקלה משמעותית בתסמינים.",
  },
  {
    title: "תמיכה במערכת העיכול",
    body: "התרוקנות סדירה ומלאה תורמת לתפקוד תקין של מערכת העיכול ומפחיתה את הלחץ במעי הגס — הקשור להתפתחות דיברטיקולוזיס.",
  },
  {
    title: "חיזוק ויציבות לגוף",
    body: "תנוחת הכריעה מפעילה את שרירי הרגליים והברכיים, ותורמת ליציבות ולטווח תנועה טוב יותר — גם בגיל מבוגר.",
  },
  {
    title: "לנשים — בהיריון ואחרי לידה",
    body: "בעמדת כריעה שרירי רצפת האגן מתחזקים, מה שעשוי לתרום לשליטה טובה יותר על הסוגרים. מתאים במיוחד בתקופת ההיריון ולאחר לידה (בתיאום עם הרופא המטפל).",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-ink sm:text-[2.5rem]">
          במה זה תורם — ולמי זה מתאים
        </h2>
        <p className="mt-4 mb-10 max-w-[42rem] text-ink-soft sm:mb-14">
          אסלת כריעה היא לא עוד טרנד — היא דרך טבעית ובריאה יותר להתרוקן,
          שמחזירה לגוף את התנוחה שהוא תוכנן לה.
        </p>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                className="mt-1.5 h-6 w-6 shrink-0 text-success"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
              <div>
                <h3 className="font-bold text-ink">{benefit.title}</h3>
                <p className="mt-1 text-ink-soft">{benefit.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
