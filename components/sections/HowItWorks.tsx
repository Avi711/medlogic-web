import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import productBathroom from "@/public/images/product-bathroom.jpg";

const STEPS = [
  {
    title: "מתקינים פעם אחת",
    body: "מקבלים ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן הדריכה — מתחברת לתשתית האינסטלציה הביתית בהתקנה פשוטה.",
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-14 sm:py-20">
      <div className="shell">
        <SectionHeading
          eyebrow="הערכה"
          title="שלושה שלבים — והשירותים בבית חוזרים לעבוד בשביל הגוף שלכם"
          meta="אסלה נמוכה + מתקן דריכה"
          lede="מקבלים ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן דריכה עם משטחים מונעי החלקה. הערכה מתחברת לתשתית האינסטלציה הביתית הרגילה בהתקנה פשוטה. אין ידיות אחיזה — התמיכה מגיעה מהמשטחים הרחבים ומהגובה הנמוך."
        />
      </div>

      <figure className="mt-9">
        <Image
          src={productBathroom}
          alt="ערכת הכריעה מותקנת בחדר אמבטיה: אסלה קרמית נמוכה ומעליה מתקן דריכה עם שני משטחים רחבים מונעי החלקה"
          sizes="100vw"
          className="h-[15rem] w-full border-y border-ink/20 object-cover sm:h-[24rem] lg:h-[27rem]"
        />
        <figcaption className="shell caption mt-2.5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-ink-soft">
          <span>
            הערכה מותקנת בחדר רחצה ביתי — האסלה הנמוכה ומעליה משטחי הדריכה.
            ללא ידיות אחיזה.
          </span>
          <span className="font-semibold text-ink">הדמיה של המוצר</span>
        </figcaption>
      </figure>

      <div className="shell">
        <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <h3 className="display-3 text-ink">
                <span className="ltr-isolate tnum text-pine">{i + 1}.</span>{" "}
                {step.title}
              </h3>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/25 pt-6">
          <p className="display-3 text-ink">נשמע מעניין? דברו איתנו.</p>
          <Link
            href="/#form"
            className="flex min-h-[3.25rem] items-center bg-clay px-7 text-[1.125rem] font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep"
          >
            השאירו טלפון — נחזור אליכם
          </Link>
        </div>
      </div>
    </section>
  );
}
