import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import doctorImage from "@/public/images/doctor.jpg";

const TIMELINE = [
  {
    period: "שירות המילואים",
    event: "התצפית הראשונה: בכריעה — ההתרוקנות קלה יותר",
  },
  { period: "שנות המחקר", event: "מדידות, השוואות ופרסום בכתבי עת רפואיים" },
  { period: "2003", event: "פרסום המחקר המצוטט בעולם" },
  { period: "היום", event: "מתקן כריעה בפטנט בין־לאומי, זמין לכל בית בישראל" },
];

/** The profile page: portrait, running text, a ruled chronology. */
export default function DoctorStory() {
  return (
    <section id="doctor" className="shell scroll-mt-24 py-14 sm:py-20">
      <SectionHeading
        eyebrow="פרופיל"
        title="התגלית שהתחילה בשירות מילואים — והפכה למחקר שמצוטט בכל העולם"
        meta="ד״ר דב (ברקו) סיקירוב"
        lede={
          <>
            מומחה ברפואה פנימית. שישה מאמרים בכתבי עת רפואיים עם ביקורת עמיתים,
            הראשון ב־<span className="ltr-isolate tnum">1987</span>. על הפיתוח
            שנולד מהמחקר נרשם פטנט בין־לאומי.
          </>
        }
      />

      <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <figure className="max-lg:mx-auto max-lg:max-w-[19rem]">
          <Image
            src={doctorImage}
            alt="ד״ר דב סיקירוב, מומחה ברפואה פנימית"
            sizes="(min-width: 1024px) 30vw, 19rem"
            className="h-auto w-full border border-ink/20"
          />
          <figcaption className="caption mt-2.5 border-t border-ink/25 pt-2 text-ink-soft">
            <span className="block font-display text-[1.0625rem] font-bold text-ink">
              ד&quot;ר דב (ברקו) סיקירוב,{" "}
              <span className="ltr-isolate">M.D.</span>
            </span>
            מומחה ברפואה פנימית · החוקר המצוטט בעולם בתחום תנוחת ההתרוקנות
          </figcaption>
        </figure>

        <div>
          <div className="max-w-[40rem] text-ink">
            <p className="dropcap">
              במהלך שירות מילואים בלבנון שם לב ד&quot;ר דב סיקירוב לתופעה מוזרה:
              בשטח, בלי אסלות, כשכולם נאלצו לכרוע — ההתרוקנות הייתה קלה יותר.
              בלי המאמץ המוכר מהבית.
            </p>
            <p className="mt-5 font-display text-[1.375rem] font-medium leading-snug text-pine">
              רופא אחר היה שוכח מזה. ד&quot;ר סיקירוב החליט לבדוק.
            </p>
            <p className="mt-5">
              המחקר המרכזי שלו, שפורסם בשנת{" "}
              <span className="ltr-isolate tnum">2003</span> בכתב העת{" "}
              <span className="ltr-isolate font-semibold">
                Digestive Diseases and Sciences
              </span>
              , הראה שבכריעה ההתרוקנות אורכת בממוצע כדקה פחות מאשר בישיבה —
              ובמאמץ קטן משמעותית. המחקר מצוטט עד היום על ידי חוקרים בכל העולם,
              והוא ההשראה שמאחורי גל שלם של מוצרי תנוחה שנמכרו במיליוני יחידות
              בארה&quot;ב.
            </p>
            <p className="mt-5">
              אבל שרפרף פשוט לא הספיק לו. יחד עם מהנדסים פיתח ד&quot;ר סיקירוב{" "}
              <strong className="font-bold">
                ערכה שלמה — אסלה נמוכה ייעודית ומעליה מתקן דריכה
              </strong>{" "}
              — שמאפשרת כריעה מלאה ובטוחה בבית. על הפיתוח נרשם פטנט בין־לאומי.
            </p>
          </div>

          <dl className="mt-10 border-t-2 border-ink">
            {TIMELINE.map((item) => (
              <div
                key={item.period}
                className="grid grid-cols-[9rem_minmax(0,1fr)] gap-x-5 border-b border-ink/20 py-3 max-sm:grid-cols-1 max-sm:gap-y-0.5"
              >
                <dt className="tnum font-display text-[1.0625rem] font-bold text-pine">
                  {item.period}
                </dt>
                <dd className="text-[1.0625rem] leading-snug text-ink">
                  {item.event}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="display-3 text-ink">
              רוצים לשמוע אם הפיתוח מתאים לכם?
            </p>
            <Link
              href="/#form"
              className="flex min-h-[3.25rem] items-center bg-clay px-7 text-[1.125rem] font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep"
            >
              השאירו פרטים
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
