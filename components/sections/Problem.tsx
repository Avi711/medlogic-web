import { AngleFigure } from "@/components/Angle";
import AngleDiagram from "@/components/AngleDiagram";
import SectionHeading from "@/components/SectionHeading";

/**
 * Order is the argument: the claim, then the two bodies — which need no
 * explanation — then the "why" with the measured drawing beside it for
 * whoever wants the mechanism. Self-explanatory first, abstraction second.
 */
export default function Problem() {
  return (
    <section id="problem" className="shell scroll-mt-28 py-16 sm:py-24">
      <SectionHeading
        eyebrow="הסיבה"
        title="הבעיה היא לא אתם. הבעיה היא הזווית."
        lede={
          <>
            במשך מאות אלפי שנים בני אדם התרוקנו בתנוחת כריעה מלאה. האסלה בגובה
            כיסא היא המצאה בת <span className="ltr-isolate tnum">150</span> שנה
            בלבד — והגוף שלנו פשוט לא נבנה בשבילה.
          </>
        }
      />

      <div className="mt-10 sm:mt-12">
        <AngleDiagram />
      </div>

      {/* The mechanism, with the measured drawing beside it. */}
      <div className="mt-12 grid gap-x-14 gap-y-8 sm:mt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
        <div className="max-w-[54ch] space-y-5 text-[1.1875rem] leading-relaxed text-ink-soft">
          <p className="font-display text-[1.375rem] font-black leading-snug tracking-[-0.025em] text-green">
            למה הזווית קובעת?
          </p>
          <p>
            בין הרקטום לתעלה האנאלית יש זווית טבעית של{" "}
            <strong className="ltr-isolate font-bold text-ink">90°</strong> — והיא
            שם בכוונה: היא סוגרת את המעבר ומונעת בריחה לאורך היום. הגוף אמור
            לפתוח אותה רק ברגע הנכון,{" "}
            <strong className="font-bold text-ink">וזה קורה בכריעה</strong>.
          </p>
          <p>
            ישיבה על אסלה בגובה כיסא כמעט אינה פותחת אותה. המעבר נשאר מקופל,
            והמאמץ שנדרש כדי להתגבר על הקיפול הוא מה שמחקרים קושרים לטחורים,
            לדימומים ולתחושת התרוקנות לא מלאה. ככל שכיפוף הירך גדול יותר — כך
            הזווית ישרה יותר, ופחות מאמץ נדרש. ואת התנוחה — אפשר לשנות.
          </p>
        </div>

        <figure className="card p-6 sm:p-8">
          <AngleFigure className="mx-auto block h-auto w-full max-w-[22rem]" />
          <figcaption className="caption mt-4 border-t border-line pt-4">
            הזווית שבין הגו לירכיים:{" "}
            <span className="ltr-isolate font-bold text-ink">90°</span> על אסלה
            בגובה כיסא, <span className="ltr-isolate font-bold text-green">35°</span>{" "}
            בכריעה מלאה. זה כל ההבדל — וכל השאר בדף הזה נשען עליו.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
