import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[11fr_9fr] lg:gap-14">
        <div>
          <h1 className="font-serif text-[2.375rem] font-black leading-[1.15] text-ink sm:text-[3.5rem]">
            סובלים מעצירות או טחורים?
            <br />
            <span className="text-pine">
              ייתכן שהבעיה היא לא בגוף שלכם — אלא בזווית הישיבה.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-[1.375rem]">
            מתקן הכריעה של MedLogic הופך כל אסלה ביתית לתנוחת התרוקנות טבעית
            ומלאה — הפיתוח של ד&quot;ר דב סיקירוב, מומחה ברפואה פנימית והחוקר
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
              איך זה עובד? ↓
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

        <div
          className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[480px]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%)" }}
        >
          <Image
            src={heroImage}
            alt="חדר אמבטיה ביתי רגוע באור בוקר, אסלה לבנה ליד קיר ירוק-מרווה"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
