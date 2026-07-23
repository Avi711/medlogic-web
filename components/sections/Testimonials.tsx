import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    headline: "אחרי שנים של סבל — הטחורים פשוט נעלמו.",
    body: "אני מהנדס, איש הגיוני מטבעי. אחרי שנים של טחורים קשים, חודשים ספורים של התרוקנות בכריעה — והכאבים והדימומים נעלמו. חבל שלא הסבירו לי את זה עשרים שנה קודם.",
    source: "ר', מהנדס, עלה מארגנטינה",
  },
  {
    headline: "הדימומים, שליוו אותי שנים — פסקו.",
    body: "עם דיברטיקוליטיס ודימומים חוזרים, חשבתי שזה חלק מהחיים. אחרי תקופה עם המתקן הדימומים פסקו — וגם הרופא שלי הופתע לטובה.",
    source: "ח', עלה מפרו",
  },
  {
    headline: "אחרי הלידה — הכל השתנה.",
    body: "אחרי הלידה הראשונה סבלתי מעצירות, ושום ייעוץ או תרופה לא עזרו. ד\"ר סיקירוב הדריך אותי לעבור לכריעה — לא האמנתי שבכזו קלות זה ייעלם.",
    source: "מרים",
  },
  {
    headline: "הפסקתי להתאמץ — והתחלתי להרגיש בן אדם אחר.",
    body: "בגיל 50 כל ביקור בשירותים היה מאבק שהשפיע על כל היום. מאז שעברתי לכריעה ההתרוקנות קלה, ואני מרגיש רענן וצלול.",
    source: "יעקב, בן 50",
  },
  {
    headline: "כריעה שינתה לי את החיים.",
    body: "שנתיים הייתי אובד עצות. לא האמנתי שהפתרון כל כך פשוט — לחזור לתנוחה הטבעית, והכל פתאום ברור.",
    source: "אריק",
  },
  {
    headline: "נדהמתי לגלות כמה זה קל.",
    body: "בטיול בסיני גיליתי כמה קל להתרוקן בכריעה. כשראיתי שאצל ד\"ר סיקירוב הכל מגובה במחקרים — זה היה לי ברור.",
    source: "ענת",
  },
];

/** Letters column: dense, ruled, no cards and no quotation ornaments. */
export default function Testimonials() {
  return (
    <section className="shell py-14 sm:py-20">
      <SectionHeading
        eyebrow="מכתבים"
        title="אנשים אמיתיים. תוצאות שמדברות בעד עצמן."
        meta="6 עדויות משתמשים"
        lede="העדויות משקפות חוויה אישית של משתמשים. התוצאות עשויות להשתנות מאדם לאדם."
      />

      <div className="mt-9 grid gap-x-11 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.source} className="border-t-2 border-ink pt-4">
            <blockquote>
              <p className="font-display text-[1.3125rem] font-bold leading-tight text-pine">
                {t.headline}
              </p>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                {t.body}
              </p>
            </blockquote>
            <figcaption className="mt-3 border-t border-ink/20 pt-2 text-[1rem] font-semibold text-ink">
              — {t.source}
            </figcaption>
          </figure>
        ))}
      </div>

    </section>
  );
}
