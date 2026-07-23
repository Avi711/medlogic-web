import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="how-it-works" className="scroll-mt-20 bg-paper-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="איך זה עובד"
          title="שלושה שלבים — והשירותים בבית חוזרים לעבוד בשביל הגוף שלכם"
        />

        <ol className="grid gap-x-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="border-t-2 border-ink pt-4 max-sm:mb-8 max-sm:last:mb-0"
            >
              <h3 className="font-display text-2xl font-bold text-ink">
                <span className="ltr-isolate text-pine">{i + 1}</span>{" "}
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/#form"
            className="inline-block whitespace-nowrap rounded-md bg-clay px-8 py-4 text-xl font-bold text-white shadow-card transition-colors hover:bg-clay-deep"
          >
            השאירו טלפון — נחזור אליכם
          </Link>
        </div>
      </div>
    </section>
  );
}
