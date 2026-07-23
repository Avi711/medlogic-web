import Image from "next/image";
import Link from "next/link";
import doctorImage from "@/public/images/doctor.jpg";

const TIMELINE = [
  { period: "שירות המילואים", event: "התצפית הראשונה: בכריעה — ההתרוקנות קלה יותר" },
  { period: "שנות המחקר", event: "מדידות, השוואות ופרסום בכתבי עת רפואיים" },
  { period: "2003", event: "המחקר המצוטט בעולם — Digestive Diseases and Sciences" },
  { period: "היום", event: "מתקן כריעה בפטנט בינלאומי, זמין לכל בית בישראל" },
];

export default function DoctorStory() {
  return (
    <section id="doctor" className="scroll-mt-20 bg-night py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
          <div className="border border-night-amber/40 p-2">
            <Image
              src={doctorImage}
              alt="ד״ר דב סיקירוב, מומחה ברפואה פנימית"
              className="aspect-[4/5] w-full object-cover object-top"
              sizes="(min-width: 1024px) 33vw, 24rem"
            />
          </div>
          <figcaption className="mt-4 text-center">
            <span className="block font-serif text-xl font-bold text-night-ink">
              ד&quot;ר דב (ברקו) סיקירוב, M.D.
            </span>
            <span className="block text-night-ink-soft">
              מומחה ברפואה פנימית · החוקר המצוטט בעולם בתחום תנוחת ההתרוקנות
            </span>
          </figcaption>
        </figure>

        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-night-ink sm:text-[2.5rem]">
            התגלית שהתחילה בשירות מילואים — והפכה למחקר שמצוטט בכל העולם
          </h2>

          <div className="mt-8 max-w-[42rem] space-y-5 text-night-ink/90">
            <p>
              במהלך שירות מילואים בלבנון שם לב ד&quot;ר דב סיקירוב לתופעה
              מוזרה: בשטח, בלי אסלות, כשכולם נאלצו לכרוע — ההתרוקנות הייתה
              קלה יותר. בלי המאמץ המוכר מהבית.
            </p>
            <p>רופא אחר היה שוכח מזה. ד&quot;ר סיקירוב החליט לבדוק.</p>
            <p>
              המחקר המרכזי שלו, שפורסם בשנת 2003 בכתב העת{" "}
              <span className="ltr-isolate whitespace-nowrap font-semibold">
                Digestive Diseases and Sciences
              </span>
              , הראה שבכריעה ההתרוקנות אורכת בממוצע כדקה פחות מאשר בישיבה —
              ובמאמץ קטן משמעותית. המחקר מצוטט עד היום על ידי חוקרים בכל
              העולם, והוא ההשראה שמאחורי גל שלם של מוצרי תנוחה שנמכרו במיליוני
              יחידות בארה&quot;ב.
            </p>
            <p>
              אבל שרפרף פשוט לא הספיק לו. יחד עם מהנדסים פיתח ד&quot;ר סיקירוב
              מתקן שמאפשר כריעה מלאה ובטוחה מעל אסלה ביתית רגילה — התנוחה
              שהמחקרים שלו הצביעו עליה. על הפיתוח נרשם פטנט בינלאומי.
            </p>
          </div>

          <ol className="mt-10 space-y-0 border-s-2 border-night-amber/50">
            {TIMELINE.map((item) => (
              <li key={item.period} className="relative ps-6 pb-6 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -start-[5px] top-2 h-2 w-2 rounded-full bg-night-amber"
                />
                <span className="block font-serif text-lg font-bold text-night-amber">
                  {item.period}
                </span>
                <span className="block text-night-ink/90">{item.event}</span>
              </li>
            ))}
          </ol>

          <Link
            href="/#form"
            className="mt-10 inline-block rounded-md bg-clay px-7 py-3.5 text-lg font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep"
          >
            רוצים לשמוע אם הפיתוח מתאים לכם? השאירו פרטים
          </Link>
        </div>
      </div>
    </section>
  );
}
