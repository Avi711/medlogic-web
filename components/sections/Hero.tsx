import Image from "next/image";
import Link from "next/link";
import productHero from "@/public/images/product-hero.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[11fr_9fr] lg:gap-14">
        <div>
          <h1 className="font-display text-[2rem] font-black leading-[1.15] text-ink min-[400px]:text-[2.375rem] sm:text-[3.5rem]">
            סובלים מעצירות או טחורים?
            <br />
            <span className="text-pine">הבעיה אינה בגוף שלכם — אלא בזווית.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-[1.375rem]">
            אסלת הכריעה של MedLogic מחזירה לגוף התרוקנות טבעית ומלאה בתנוחת
            כריעה — הפיתוח של ד&quot;ר דב סיקירוב, מומחה ברפואה פנימית והחוקר
            המוביל בעולם בתחום תנוחת ההתרוקנות.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#form"
              className="rounded-md bg-clay px-8 py-4 text-xl font-bold text-white shadow-card transition-colors hover:bg-clay-deep"
            >
              רוצה לשמוע אם זה מתאים לי
            </Link>
            <Link
              href="/#problem"
              className="font-semibold text-pine underline-offset-4 hover:underline"
            >
              למה זה קורה? ↓
            </Link>
          </div>
          <p className="mt-3 text-base text-ink-soft">
            שיחה קצרה, בלי התחייבות ובלי לחץ.
          </p>

          <div className="mt-8 border-t-2 border-amber/60 pt-4">
            <p className="text-base font-semibold text-ink-soft">
              מבוסס על 6 מחקרים שפורסמו בכתבי עת רפואיים בין־לאומיים
            </p>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-xs sm:max-w-md lg:max-w-none">
          <Image
            src={productHero}
            alt="ערכת אסלת הכריעה של MedLogic — האסלה הנמוכה ומעליה מתקן הדריכה עם משטחים ירוקים מונעי החלקה"
            priority
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
            className="h-auto w-full rounded-sm border border-line"
          />
          <figcaption className="mt-2 text-center text-base text-ink-soft">
            הערכה המלאה: האסלה הנמוכה ומתקן הדריכה
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
