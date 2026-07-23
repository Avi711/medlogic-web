import AngleDiagram from "@/components/AngleDiagram";
import SectionHeading from "@/components/SectionHeading";

/** The lead feature: a standfirst, two columns of text, a pull quote, plate 1. */
export default function Problem() {
  return (
    <section id="problem" className="shell scroll-mt-24 py-16 sm:py-24">
      <SectionHeading
        eyebrow="הסיבה"
        title="הבעיה היא לא אתם. הבעיה היא הזווית."
        meta="ראו איור 1 ↓"
        lede={
          <>
            במשך מאות אלפי שנים בני אדם התרוקנו בתנוחת כריעה מלאה. האסלה בגובה
            כיסא היא המצאה בת <span className="ltr-isolate tnum">150</span> שנה
            בלבד — והגוף שלנו פשוט לא נבנה בשבילה.
          </>
        }
      />

      <div className="textcols mt-9 text-ink lg:columns-2">
        <p className="dropcap">
          הישיבה בזווית של <strong className="ltr-isolate font-bold">90°</strong>{" "}
          מקפלת את צינור היציאה — כמו צינור השקיה מקופל. הלחץ שנדרש כדי להתגבר
          על הקיפול הוא בדיוק מה שמחקרים קושרים לטחורים, לדימומים ולתחושת
          התרוקנות לא מלאה.
        </p>
        <p className="mt-5">
          בכריעה קורה ההפך: כיפוף הירך מיישר את המעבר, והיציאה נדחקת החוצה
          לאורך מוצא פתוח — פחות מאמץ, פחות זמן. זה ההבדל שד״ר סיקירוב מדד,
          פרסם, ובנה סביבו מוצר.
        </p>
        <p className="mt-5">
          השימוש הנרחב באסלות ישיבה במערב התחיל במאה ה־
          <span className="ltr-isolate tnum">19</span>, כשמערכות ביוב נבנו כדי
          לשפר את התברואה בערים שגדלו. באסיה ובאפריקה הכריעה נותרה הדרך
          העיקרית — ושם, כפי שתיארו רופאים שעבדו באזורים הכפריים, טחורים,
          עצירות ודיברטיקולוזיס כמעט לא נראו.
        </p>
      </div>

      <blockquote className="my-14 border-y-2 border-ink py-9 sm:my-20 sm:py-12">
        <p className="pullquote max-w-[22ch] text-pine">
          זו לא בעיה שלכם. זו בעיה של התנוחה. ואת התנוחה — אפשר לשנות.
        </p>
      </blockquote>

      <AngleDiagram />
    </section>
  );
}
