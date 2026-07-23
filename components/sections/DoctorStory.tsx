import Image from "next/image";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/lib/site";
import doctorImage from "@/public/images/doctor.jpg";

export default function DoctorStory() {
  return (
    <section id="doctor" className="scroll-mt-20 bg-night py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
          <div className="border border-night-amber/40 p-2">
            <Image
              src={doctorImage}
              alt="ד״ר דב סיקירוב, מומחה ברפואה פנימית"
              className="w-full object-cover"
              sizes="(min-width: 1024px) 33vw, 24rem"
            />
          </div>
          <figcaption className="mt-4 text-center">
            <span className="block font-serif text-xl font-bold text-night-ink">
              ד&quot;ר דב (ברקו) סיקירוב, M.D.
            </span>
            <span className="block text-night-ink-soft">
              מומחה ברפואה פנימית
            </span>
          </figcaption>
        </figure>

        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-night-ink sm:text-[2.5rem]">
            התגלית שהתחילה בשירות מילואים — והפכה למחקר שמצוטט בכל העולם
          </h2>

          <div className="mt-8 max-w-[42rem] space-y-5 text-night-ink/90">
            <p>
              במהלך שירות מילואים בלבנון שם לב ד&quot;ר דב סיקירוב, מומחה
              ברפואה פנימית, לתופעה מוזרה: בשטח, בלי אסלות, כשכולם נאלצו לכרוע
              — ההתרוקנות הייתה קלה יותר. פשוטה יותר. בלי המאמץ המוכר מהבית.
            </p>
            <p>רופא אחר היה שוכח מזה. ד&quot;ר סיקירוב החליט לבדוק.</p>
            <p>
              הוא צלל לספרות הרפואית וגילה שכמעט אף אחד לא חקר את השאלה
              הבסיסית הזו: באיזו תנוחה הגוף האנושי באמת נועד להתרוקן? הוא ערך
              מחקרים, מדד, השווה — ופרסם את הממצאים בכתבי עת רפואיים
              בינלאומיים.
            </p>
            <blockquote className="border-s-[3px] border-night-amber ps-5">
              <p className="font-serif text-2xl font-medium leading-snug text-night-amber">
                המחקר המרכזי שלו, שפורסם בכתב העת Digestive Diseases and
                Sciences, מצוטט עד היום על ידי חוקרים בכל העולם.
              </p>
            </blockquote>
            <p>
              המחקר משנת 2003 הראה שבתנוחת כריעה ההתרוקנות אורכת בממוצע כדקה
              פחות מאשר בישיבה — ובמאמץ קטן משמעותית. הוא ההשראה המדעית
              שמאחורי גל שלם של מוצרי תנוחה שנמכרו במיליוני יחידות בארה&quot;ב.
            </p>
            <p>
              אבל ד&quot;ר סיקירוב לא הסתפק בשרפרף פשוט שמרים את הרגליים. יחד
              עם מהנדסים הוא פיתח מתקן שמאפשר כריעה מלאה ובטוחה מעל אסלה ביתית
              רגילה — התנוחה שהמחקרים שלו הצביעו עליה. על הפיתוח נרשם פטנט
              בינלאומי.
            </p>
            <p className="font-semibold text-night-ink">
              היום, אחרי עשרות שנות מחקר, הפיתוח הזה זמין לכל בית בישראל.
            </p>
          </div>

          <div className="mt-10 max-w-[42rem]">
            <VideoEmbed
              videoId={site.youtubeVideoId}
              title="כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון?"
            />
            <p className="mt-3 text-base text-night-ink-soft">
              כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון? (וידאו)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
