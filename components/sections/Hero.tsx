import Image from "next/image";
import Link from "next/link";
import productHero from "@/public/images/product-hero.jpg";

const PROOF = [
  "פותח על ידי רופא מומחה לרפואה פנימית",
  "פטנט בין־לאומי רשום",
  "מתחבר לאינסטלציה הביתית",
];

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-mint"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

/**
 * The first green block. The product carries the fold; the headline states the
 * one idea the whole page rests on, and the action sits directly under it.
 */
export default function Hero() {
  return (
    <section id="hero" className="shell pt-3 pb-4 sm:pt-5">
      <div className="block-green grid lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
        <div className="order-2 p-7 sm:p-11 lg:order-1 lg:p-14">
          <span className="kicker bg-white/12 text-mint">
            תנוחת ההתרוקנות · פיתוח ישראלי
          </span>

          <h1 className="display-1 mt-6 text-on-dark">
            הבעיה אינה בגוף שלכם.{" "}
            <span className="text-mint">היא בזווית.</span>
          </h1>

          <p className="mt-6 max-w-[38ch] text-[1.1875rem] leading-relaxed text-on-dark-soft sm:text-[1.3125rem]">
            אסלת הכריעה של MedLogic מחזירה לגוף את התנוחה שבה ההתרוקנות טבעית
            ומלאה — הפיתוח של ד&quot;ר דב סיקירוב, מבוסס על שישה מחקרים שפורסמו
            בכתבי עת רפואיים עם ביקורת עמיתים.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/#form" className="btn btn-lg">
              השאירו טלפון — נחזור אליכם
            </Link>
            <Link href="/#how-it-works" className="btn-quiet-dark min-h-16 px-7 text-[1.125rem]">
              איך זה עובד
            </Link>
          </div>
          <p className="mt-4 text-[1.0625rem] text-on-dark-soft">
            שיחה קצרה, בלי התחייבות ובלי לחץ.
          </p>

          <ul className="mt-9 grid gap-2.5 border-t border-white/15 pt-7">
            {PROOF.map((line) => (
              <li key={line} className="flex gap-2.5 text-[1.0625rem] text-on-dark-soft">
                <Tick />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 min-h-[19rem] sm:min-h-[26rem] lg:order-2 lg:min-h-full">
          <Image
            src={productHero}
            alt="ערכת הכריעה של MedLogic: אסלה קרמית נמוכה ומעליה מתקן דריכה עם שני משטחים רחבים מונעי החלקה"
            fill
            priority
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover"
          />
          <p className="absolute top-5 start-5 rounded-full bg-surface/95 px-4 py-2 font-display text-[1.375rem] font-black text-green shadow-soft backdrop-blur-sm sm:top-7 sm:start-7">
            <span className="ltr-isolate">35°</span>
            <span className="ms-2 align-middle text-[0.9375rem] font-bold text-ink-soft">
              הזווית שפותחת
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
