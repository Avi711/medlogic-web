import Image from "next/image";
import Link from "next/link";
import productHero from "@/public/images/product-hero.jpg";

/**
 * The front page. Folio line, a headline set at broadsheet scale, the deck
 * and the action in the start column, the product photograph large in the
 * end column with a ruled caption under it.
 */
export default function Hero() {
  return (
    <section id="hero" className="shell pt-6 pb-12 sm:pt-9 sm:pb-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/30 pb-2.5">
        <p className="kicker text-pine">בריאות · תנוחת ההתרוקנות</p>
        <p className="kicker text-ink-soft max-sm:hidden">
          פותח בישראל · פטנט בין־לאומי רשום
        </p>
      </div>

      <h1 className="mt-7 sm:mt-9">
        <span className="block font-display text-[1.375rem] font-bold text-ink-soft sm:text-[1.75rem]">
          סובלים מעצירות או טחורים?
        </span>
        <span className="display-1 mt-2.5 block text-ink sm:mt-3">
          הבעיה אינה בגוף שלכם — <span className="text-pine">אלא בזווית.</span>
        </span>
      </h1>

      <div className="mt-9 grid items-start gap-x-14 gap-y-10 lg:mt-11 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <p className="max-w-[36rem] text-[1.1875rem] leading-[1.6] text-ink-soft sm:text-[1.3125rem]">
            אסלת הכריעה של MedLogic מחזירה לגוף התרוקנות טבעית ומלאה בתנוחת
            כריעה — הפיתוח של ד&quot;ר דב סיקירוב, מומחה ברפואה פנימית והחוקר
            המוביל בעולם בתחום תנוחת ההתרוקנות.
          </p>

          <div className="mt-8 border-2 border-ink p-5">
            <Link
              href="/#form"
              className="flex min-h-[3.75rem] items-center justify-center bg-clay px-6 text-center text-xl font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep"
            >
              רוצה לשמוע אם זה מתאים לי
            </Link>
            <p className="caption mt-3 text-center text-ink-soft">
              שיחה קצרה, בלי התחייבות ובלי לחץ.
            </p>
          </div>

          <p className="mt-6 border-t border-ink/25 pt-4 text-[1.0625rem] leading-snug text-ink">
            <strong className="font-bold">
              מבוסס על <span className="ltr-isolate tnum">6</span> מחקרים
            </strong>{" "}
            שפורסמו בכתבי עת רפואיים בין־לאומיים עם ביקורת עמיתים.{" "}
            <Link
              href="/#problem"
              className="font-semibold text-pine underline underline-offset-4 hover:text-clay"
            >
              למה זה קורה? ↓
            </Link>
          </p>
        </div>

        <figure className="max-lg:-mx-5 sm:max-lg:-mx-8">
          <Image
            src={productHero}
            alt="ערכת אסלת הכריעה של MedLogic — האסלה הקרמית הנמוכה ומעליה מתקן הדריכה עם משטחים ירוקים מונעי החלקה"
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-[15rem] w-full border-y border-ink/15 object-cover sm:h-[22rem] lg:h-[26rem] lg:border"
          />
          <figcaption className="caption mt-2.5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ink/25 pt-2 text-ink-soft max-lg:px-5 sm:max-lg:px-8">
            <span className="font-semibold text-ink">
              הערכה המלאה: האסלה הקרמית הנמוכה (כ־
              <span className="ltr-isolate tnum">20</span> ס״מ) ומעליה מתקן
              הדריכה
            </span>
            <span>ללא ידיות אחיזה · מתחבר לאינסטלציה הביתית</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
