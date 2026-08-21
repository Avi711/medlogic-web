import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    headline: "אחרי שנים של סבל — הטחורים פשוט נעלמו.",
    body: "אני מהנדס, איש הגיוני מטבעי. אחרי שנים של טחורים קשים, חודשים ספורים של התרוקנות בכריעה — והכאבים והדימומים נעלמו. חבל שלא הסבירו לי את זה עשרים שנה קודם.",
    source: "ר׳, מהנדס, עלה מארגנטינה",
  },
  {
    headline: "הדימומים, שליוו אותי שנים — פסקו.",
    body: "עם דיברטיקוליטיס ודימומים חוזרים, חשבתי שזה חלק מהחיים. אחרי תקופה עם המתקן הדימומים פסקו — וגם הרופא שלי הופתע לטובה.",
    source: "ח׳, עלה מפרו",
  },
  {
    headline: "אחרי הלידה — הכל השתנה.",
    body: "אחרי הלידה הראשונה סבלתי מעצירות, ושום ייעוץ או תרופה לא עזרו. ד״ר סיקירוב הדריך אותי לעבור לכריעה — לא האמנתי שבכזו קלות זה ייעלם.",
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
    body: "בטיול בסיני גיליתי כמה קל להתרוקן בכריעה. כשראיתי שאצל ד״ר סיקירוב הכל מגובה במחקרים — זה היה לי ברור.",
    source: "ענת",
  },
];

export default function Testimonials() {
  return (
    <section className="shell pb-16 sm:pb-24">
      <SectionHeading
        eyebrow="מהמשתמשים"
        title="אנשים אמיתיים. תוצאות שמדברות בעד עצמן."
        meta="6 עדויות"
        lede="העדויות משקפות חוויה אישית של משתמשים. התוצאות עשויות להשתנות מאדם לאדם."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li key={t.source}>
            <figure className="card flex h-full flex-col p-7">
              <blockquote className="flex-1">
                <p className="font-display text-[1.25rem] font-black leading-tight tracking-[-0.025em] text-green">
                  {t.headline}
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">{t.body}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 font-semibold text-ink">
                {t.source}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
