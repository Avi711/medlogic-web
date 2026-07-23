import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import deviceIllustration from "@/public/images/illu-device.jpg";
import stepUpIllustration from "@/public/images/illu-step-up.jpg";
import squatIllustration from "@/public/images/illu-squat.jpg";

const STEPS = [
  {
    title: "מתקינים פעם אחת",
    body: "מתחבר לכל אסלה ביתית סטנדרטית — בלי כלים, בלי שיפוץ, בלי להפריע לשאר בני הבית.",
    image: deviceIllustration,
    alt: "איור: מתקן הכריעה מוצב סביב אסלה ביתית רגילה, לצד ידית תמיכה",
  },
  {
    title: "עולים ונתמכים",
    body: "משטחי דריכה יציבים וידית תמיכה נושאים חלק מהמשקל — עולים בבטחה, בלי שיווי משקל של ספורטאי.",
    image: stepUpIllustration,
    alt: "איור: אדם עולה בבטחה על משטח הדריכה כשידו אוחזת בידית התמיכה",
  },
  {
    title: "מתרוקנים בקלות",
    body: "בכריעה הזווית נפתחת והמעי מתיישר — פחות מאמץ, התרוקנות מלאה יותר.",
    image: squatIllustration,
    alt: "איור: תנוחת כריעה מלאה שבה מעבר היציאה ישר ופתוח",
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
                <article className="h-full overflow-hidden rounded-sm border border-line bg-card shadow-card">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-auto w-full"
                  />
                  <div className="p-6 pt-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="font-serif text-5xl font-black leading-none text-amber"
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-ink-soft">{step.body}</p>
                  </div>
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
