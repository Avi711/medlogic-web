import Link from "next/link";
import Reveal from "@/components/Reveal";
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
          index="02"
          title="שלושה שלבים — והשירותים בבית חוזרים לעבוד בשביל הגוף שלכם"
        />

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="h-full">
                <article className="h-full rounded-sm border border-line bg-card p-6 shadow-card sm:p-7">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-black leading-none text-amber sm:text-6xl"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            href="/#form"
            className="inline-block whitespace-nowrap rounded-md bg-clay px-8 py-4 text-xl font-bold text-white shadow-card transition-colors hover:bg-clay-deep"
          >
            נשמע מעניין? דברו איתנו
          </Link>
        </div>
      </div>
    </section>
  );
}
