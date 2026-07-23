import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    headline: "אחרי שנים של סבל — הטחורים פשוט נעלמו.",
    body: "אני מהנדס במקצועי, ואיש הגיוני מטבעי. סבלתי מטחורים קשים שנים ארוכות וניסיתי כמעט הכל. חודשים ספורים אחרי שעברתי להתרוקן בכריעה עם המתקן — הכאבים והדימומים נעלמו. הלוואי שמישהו היה מסביר לי את זה עשרים שנה קודם.",
    source: "ר', מהנדס, עלה מארגנטינה",
  },
  {
    headline: "הפסקתי להתאמץ — והתחלתי להרגיש בן אדם אחר.",
    body: "בגיל 50 הרגשתי כבד, עייף ומרוקן. כל ביקור בשירותים היה מאבק, והמאמץ הזה השפיע על כל היום שלי. מאז שעברתי לכריעה ההתרוקנות קלה, ואני מרגיש הרבה יותר רענן וצלול. בשבילי זה שינה את איכות החיים.",
    source: "יעקב, בן 50",
  },
  {
    headline: "הדימומים, שליוו אותי שנים — פסקו.",
    body: "סבלתי מדיברטיקוליטיס ומדימומים חוזרים, וכבר חשבתי שזה חלק מהחיים. אחרי תקופה של שימוש במתקן הדימומים פסקו, וגם הרופא שלי הופתע לטובה. היום אני ממליץ עליו לכל מי שמוכן להקשיב.",
    source: "ח', עלה מפרו",
  },
  {
    headline: "כריעה שינתה לי את החיים.",
    body: "במשך שנתיים הייתי אובד עצות, ואיבדתי תקווה. לא האמנתי שהפתרון כל כך פשוט — אבל כשמבינים שזה פשוט לחזור לתנוחה הטבעית, הכל פתאום ברור.",
    source: "אריק",
  },
  {
    headline: "אחרי הלידה — הכל השתנה.",
    body: "לאחר הלידה הראשונה התחלתי לסבול מעצירות. אחרי אין־ספור ייעוצים עם רופאים ונטילת תרופות הגעתי לד\"ר סיקירוב, שהדריך אותי לעבור לכריעה. לא האמנתי שבכזו קלות זה ייעלם — החיים שלי פשוט השתנו.",
    source: "מרים",
  },
  {
    headline: "נדהמתי לגלות כמה זה קל.",
    body: "אחרי שחזרתי מטיול בסיני, שם עשיתי צרכים בכריעה, נדהמתי לגלות כמה זה קל יותר. כשהבנתי שאצל ד\"ר סיקירוב הכל מגובה במחקרים ובתיעודים — זה היה לי ברור.",
    source: "ענת",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" title="אנשים אמיתיים. תוצאות שמדברות בעד עצמן." />

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.source} className="h-full">
              <figure className="flex h-full flex-col border-t-2 border-amber pt-6">
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl font-black leading-[0.5] text-amber"
                >
                  ”
                </span>
                <blockquote className="mt-4 grow">
                  <p className="font-serif text-2xl font-medium leading-snug text-ink">
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
