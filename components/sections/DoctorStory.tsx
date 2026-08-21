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

export default function DoctorStory() {
  return (
    <section id="doctor" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <SectionHeading
        eyebrow="מי עומד מאחורי זה"
        title="התגלית שהתחילה בשירות מילואים — והפכה למחקר שמצוטט בכל העולם"
        meta="ד״ר דב (ברקו) סיקירוב"
      />

      <div className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
        <figure className="max-lg:mx-auto max-lg:max-w-[21rem]">
          <div className="overflow-hidden rounded-[var(--radius-lg)] bg-mint-wash">
            <Image
              src={doctorImage}
              alt="ד״ר דב סיקירוב, מומחה ברפואה פנימית"
              sizes="(min-width: 1024px) 30vw, 21rem"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4">
            <span className="block font-display text-[1.1875rem] font-black text-ink">
              ד&quot;ר דב (ברקו) סיקירוב,{" "}
              <span className="ltr-isolate">M.D.</span>
            </span>
            <span className="caption mt-1 block">
              מומחה ברפואה פנימית · שישה מאמרים בכתבי עת רפואיים עם ביקורת
              עמיתים, הראשון ב־
              <span className="ltr-isolate tnum">1987</span>
            </span>
          </figcaption>
        </figure>

        <div>
          <div className="max-w-[54ch] space-y-5 text-[1.1875rem] leading-relaxed text-ink-soft">
            <p>
              בשירות מילואים בלבנון, בשטח ובלי אסלות, שם ד&quot;ר סיקירוב לב
              לתופעה מוזרה: כשכולם נאלצו לכרוע — ההתרוקנות הייתה קלה יותר.
            </p>
            <p className="font-display text-[1.375rem] font-black leading-snug tracking-[-0.025em] text-green">
              רופא אחר היה שוכח מזה. הוא החליט לבדוק.
            </p>
            <p>
              המחקר שפרסם ב־<span className="ltr-isolate tnum">2003</span> ב־
              <span className="ltr-isolate font-semibold text-ink">
                Digestive Diseases and Sciences
              </span>{" "}
              מצוטט עד היום, ומאחוריו גל שלם של מוצרי תנוחה שנמכרו במיליוני
              יחידות בארה&quot;ב.
            </p>
            <p>
              אבל שרפרף לא הספיק לו. עם מהנדסים פיתח{" "}
              <strong className="font-bold text-ink">
                ערכה שלמה — אסלה נמוכה ומעליה מתקן דריכה
              </strong>
              , בפטנט בין־לאומי.
            </p>
          </div>

          <ol className="mt-10 space-y-0">
            {TIMELINE.map((item, i) => (
              <li key={item.period} className="flex gap-4">
                <div
                  aria-hidden="true"
                  className="flex w-3 shrink-0 flex-col items-center"
                >
                  <span className="mt-2 h-3 w-3 rounded-full bg-green" />
                  {i < TIMELINE.length - 1 && (
                    <span className="w-0.5 flex-1 bg-line-strong" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="tnum block font-display text-[1.0625rem] font-black text-green">
                    {item.period}
                  </span>
                  <span className="mt-0.5 block leading-snug text-ink-soft">
                    {item.event}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/#form" className="btn">
              רוצים לשמוע אם זה מתאים לכם?
            </Link>
            <p className="text-[1.0625rem] text-ink-soft">
              שיחה קצרה, בלי התחייבות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
