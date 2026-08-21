import Image from "next/image";
import Link from "next/link";
import productBathroom from "@/public/images/product-bathroom.jpg";

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
        <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-12 xl:p-14">
          {/*
            The symptom question comes before the claim: a visitor who does not
            recognise themselves in it has no reason to read the headline. The
            category and provenance are carried by the trust strip directly below.
          */}
          <p className="font-display text-[1.1875rem] font-bold text-mint sm:text-[1.375rem]">
            סובלים מעצירות, טחורים, או עומדים לפני ניתוח?
          </p>

          <h1 className="display-1 mt-4 text-on-dark">
            הבעיה אינה בגוף שלכם.{" "}
            <span className="text-mint">היא בזווית.</span>
          </h1>

          <p className="mt-5 max-w-[40ch] text-[1.125rem] leading-relaxed text-on-dark-soft sm:text-[1.25rem]">
            אסלת הכריעה של MedLogic מחזירה לגוף את התנוחה שבה ההתרוקנות טבעית
            ומלאה. פיתוח של ד&quot;ר דב סיקירוב, על בסיס שישה מחקרים בכתבי עת
            רפואיים.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/#form" className="btn btn-lg">
              השאירו פרטים
            </Link>
            {/*
              The second action is "show me", so it goes to the doctor's video,
              not the kit walkthrough — that one is a nav item already.
            */}
            <Link href="/#video" className="btn-quiet-dark min-h-16 gap-2.5 px-7 text-[1.125rem]">
              <svg
                viewBox="0 0 20 20"
                className="h-[1.125rem] w-[1.125rem] shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.5 4.3v11.4a.6.6 0 0 0 .92.5l8.6-5.7a.6.6 0 0 0 0-1L7.42 3.8a.6.6 0 0 0-.92.5Z" />
              </svg>
              איך זה עובד · סרטון
            </Link>
          </div>
          <p className="mt-3.5 text-[1.0625rem] text-on-dark-soft">
            שיחה קצרה, בלי התחייבות ובלי לחץ.
          </p>

          <ul className="mt-7 grid gap-2 border-t border-white/15 pt-6">
            {PROOF.map((line) => (
              <li key={line} className="flex gap-2.5 text-[1.0625rem] text-on-dark-soft">
                <Tick />
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/*
          The bathroom image, not the studio close-up: in context the kit reads
          as a toilet at a glance — the detail photo lives in the kit section.
          This one is a render of the real product, so it carries the
          "הדמיה" tag (CONTENT.md compliance rule); the studio photo does not.
        */}
        <div className="relative order-1 aspect-[4/3] sm:aspect-[3/2] lg:order-2 lg:aspect-auto lg:min-h-full">
          <Image
            src={productBathroom}
            alt="הדמיה: ערכת הכריעה של MedLogic בחדר רחצה ביתי — אסלה קרמית נמוכה ומעליה מתקן דריכה עם שני משטחים רחבים מונעי החלקה"
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
          <p className="absolute bottom-4 start-4 rounded-full bg-green/85 px-3.5 py-1.5 text-[0.875rem] font-bold text-mint backdrop-blur-sm sm:bottom-5 sm:start-5">
            הדמיה של המוצר
          </p>
        </div>
      </div>
    </section>
  );
}
