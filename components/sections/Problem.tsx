import AngleDiagram from "@/components/AngleDiagram";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" title="הבעיה היא לא אתם. הבעיה היא הזווית." />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[42rem] space-y-5">
            <p>
              במשך מאות אלפי שנים בני אדם התרוקנו בתנוחת כריעה מלאה. האסלה
              בגובה כיסא היא המצאה בת 150 שנה בלבד — והגוף שלנו פשוט לא נבנה
              בשבילה.
            </p>
            <p>
              כשאנחנו יושבים בזווית של{" "}
              <strong className="ltr-isolate">90°</strong>, השריר שעוטף את קצה
              המעי מושך ויוצר פיתול חד בצינור היציאה. זה כמו צינור השקיה
              מקופל: כדי שמשהו יעבור, צריך להפעיל לחץ.
            </p>
            <p>
              הלחץ הזה — המאמץ המוכר לכל מי שסובל מעצירות — הוא בדיוק מה
              שמחקרים קושרים לאורך השנים לטחורים, לדימומים, לתחושת התרוקנות לא
              מלאה ולעומס על הגוף.
            </p>
            <p>
              בתנוחת כריעה מלאה, לעומת זאת, הזווית נפתחת, הפיתול מתיישר —
              והיציאה נעשית קלה, מהירה ומלאה יותר. לא בכוח. פשוט בזכות הפיזיקה
              של הגוף.
            </p>

            <blockquote className="border-s-[3px] border-amber ps-5 pt-2">
              <p className="font-serif text-2xl font-medium leading-snug text-pine sm:text-[1.75rem]">
                זו לא בעיה שלכם. זו בעיה של התנוחה.
                <br />
                ואת התנוחה — אפשר לשנות.
              </p>
            </blockquote>
          </div>

          <Reveal>
            <AngleDiagram />
            <p className="mt-3 text-center text-base text-ink-soft">
              איור 1: זווית הגוף בישיבה לעומת כריעה, והשפעתה על מעבר היציאה
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
