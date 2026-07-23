import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    title: "מתקינים פעם אחת",
    body: "מתקן הכריעה מתחבר לכל אסלה ביתית סטנדרטית, בלי שיפוץ, בלי כלים מיוחדים ובלי לפגוע בשימוש הרגיל של שאר בני הבית.",
  },
  {
    title: "עולים ונתמכים",
    body: "עולים בבטחה על משטחי הדריכה היציבים, נאחזים בידיות התמיכה, ומתמקמים בתנוחת כריעה טבעית מעל האסלה. הגוף עושה את השאר.",
  },
  {
    title: "מתרוקנים בקלות",
    body: "בתנוחת הכריעה הזווית נפתחת והמעי מתיישר. המאמץ פוחת, ההתרוקנות מלאה יותר — ורבים מהמשתמשים מדווחים על הקלה כבר בשימושים הראשונים.",
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

        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="h-full">
                <article className="h-full rounded-sm border border-line bg-card p-7 shadow-card">
                  <span
                    aria-hidden="true"
                    className="font-serif text-6xl font-black leading-none text-amber"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-ink">
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
            className="inline-block rounded-md bg-clay px-8 py-4 text-xl font-bold text-white shadow-card transition-colors hover:bg-clay-deep"
          >
            נשמע מעניין? נחזור אליכם לשיחה קצרה
          </Link>
        </div>
      </div>
    </section>
  );
}
