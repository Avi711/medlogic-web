import Image from "next/image";
import Link from "next/link";
import productBathroom from "@/public/images/product-bathroom.jpg";

const STEPS = [
  {
    title: "מתקינים פעם אחת",
    body: "ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן הדריכה — מתחברת לתשתית האינסטלציה הביתית בהתקנה פשוטה.",
  },
  {
    title: "עולים ונתמכים",
    body: "עולים בבטחה על משטחי הדריכה הרחבים מונעי ההחלקה — יציבות מלאה, בלי שיווי משקל של ספורטאי.",
  },
  {
    title: "מתרוקנים בקלות",
    body: "בכריעה הזווית נפתחת והמעי מתיישר — פחות מאמץ, התרוקנות מלאה יותר.",
  },
];

/** The second green block: what you actually get, shown in a real bathroom. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <div className="block-green grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative order-1 min-h-[17rem] sm:min-h-[24rem] lg:min-h-full">
          <Image
            src={productBathroom}
            alt="ערכת הכריעה מותקנת בחדר רחצה ביתי: אסלה קרמית נמוכה ומעליה מתקן דריכה עם שני משטחים רחבים מונעי החלקה"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <p className="absolute bottom-4 start-4 rounded-full bg-green/85 px-4 py-2 text-[0.9375rem] font-bold text-mint backdrop-blur-sm">
            הדמיה של המוצר
          </p>
        </div>

        <div className="order-2 p-7 sm:p-11 lg:p-14">
          <span className="kicker bg-white/12 text-mint">הערכה</span>
          <h2 className="display-2 mt-5 max-w-[16ch] text-on-dark">
            אסלה נמוכה ומתקן דריכה — מערכת אחת.
          </h2>
          <p className="lede mt-5 max-w-[46ch] text-on-dark-soft">
            לא אביזר שמניחים על אסלה קיימת. אין ידיות אחיזה — התמיכה מגיעה
            מהמשטחים הרחבים ומהגובה הנמוך.
          </p>

          <ol className="mt-9 space-y-6 border-t border-white/15 pt-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="ltr-isolate mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint font-display text-[1.0625rem] font-black text-green"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.1875rem] font-black text-on-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[1.0625rem] leading-relaxed text-on-dark-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/#form" className="btn">
              נשמע מתאים? השאירו טלפון
            </Link>
            <p className="text-[1.0625rem] text-on-dark-soft">
              נבדוק יחד את ההתאמה לשירותים שלכם.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
