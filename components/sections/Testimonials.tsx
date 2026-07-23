import Reveal from "@/components/Reveal";
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

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 24 16"
      className="h-7 w-10 text-amber"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.5 0C2 2.2 0.5 5 0.5 8.5c0 4 2.3 7 5.6 7 2.5 0 4.3-1.8 4.3-4.2 0-2.3-1.7-4-3.9-4-.4 0-.9.1-1.1.2.3-2.4 1.7-4.6 3.6-6L4.5 0zm13 0C15 2.2 13.5 5 13.5 8.5c0 4 2.3 7 5.6 7 2.5 0 4.4-1.8 4.4-4.2 0-2.3-1.8-4-4-4-.4 0-.8.1-1 .2.3-2.4 1.6-4.6 3.5-6L17.5 0z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="מהשטח" title="אנשים אמיתיים. תוצאות שמדברות בעד עצמן." />

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.source} className="h-full">
              <figure className="flex h-full flex-col border-t-2 border-amber pt-6">
                <QuoteMark />
                <blockquote className="mt-4 grow">
                  <p className="font-display text-2xl font-medium leading-snug text-ink">
                    {t.headline}
                  </p>
                  <p className="mt-4 text-ink-soft">{t.body}</p>
                </blockquote>
                <figcaption className="mt-5 font-semibold text-ink">
                  — {t.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-base text-ink-soft">
          העדויות משקפות חוויה אישית של משתמשים. התוצאות עשויות להשתנות מאדם
          לאדם.
        </p>
      </div>
    </section>
  );
}
