import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import deviceIllustration from "@/public/images/illu-device.jpg";
import stepUpIllustration from "@/public/images/illu-step-up.jpg";
import squatIllustration from "@/public/images/illu-squat.jpg";
import step1Thumb from "@/public/images/step-1.jpg";
import step2Thumb from "@/public/images/step-2.jpg";
import step3Thumb from "@/public/images/step-3.jpg";

type Step = {
  title: string;
  body: string;
  alt: string;
  /** Full scene for the stacked desktop card. */
  image: StaticImageData;
  /** Tight crop for the compact mobile thumbnail — nothing gets cut. */
  thumb: StaticImageData;
};

const STEPS: Step[] = [
  {
    title: "מתקינים פעם אחת",
    body: "מתחבר לכל אסלה ביתית סטנדרטית — בלי כלים, בלי שיפוץ, בלי להפריע לשאר בני הבית.",
    image: deviceIllustration,
    thumb: step1Thumb,
    alt: "איור: מתקן הכריעה מוצב סביב אסלה ביתית רגילה, לצד ידית תמיכה",
  },
  {
    title: "עולים ונתמכים",
    body: "משטחי דריכה יציבים וידית תמיכה נושאים חלק מהמשקל — עולים בבטחה, בלי שיווי משקל של ספורטאי.",
    image: stepUpIllustration,
    thumb: step2Thumb,
    alt: "איור: אדם עולה בבטחה על משטח הדריכה כשידו אוחזת בידית התמיכה",
  },
  {
    title: "מתרוקנים בקלות",
    body: "בכריעה הזווית נפתחת והמעי מתיישר — פחות מאמץ, התרוקנות מלאה יותר.",
    image: squatIllustration,
    thumb: step3Thumb,
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

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="h-full">
                <article className="flex h-full items-start gap-4 rounded-sm border border-line bg-card p-5 shadow-card md:block md:p-0">
                  <Image
                    src={step.thumb}
                    alt={step.alt}
                    sizes="7rem"
                    className="h-28 w-28 shrink-0 rounded-md border border-line object-cover md:hidden"
                  />
                  <Image
                    src={step.image}
                    alt={step.alt}
                    sizes="(min-width: 768px) 33vw, 0px"
                    className="hidden h-auto w-full border-b border-line md:block"
                  />
                  <div className="md:p-6">
                    <div className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="font-serif text-3xl font-black leading-none text-amber md:text-5xl"
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-ink md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-base text-ink-soft md:mt-3 md:text-lg">
                      {step.body}
                    </p>
                  </div>
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
