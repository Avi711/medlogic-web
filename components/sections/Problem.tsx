import { AngleFigure } from "@/components/Angle";
import AngleDiagram from "@/components/AngleDiagram";
import SectionHeading from "@/components/SectionHeading";

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

      <div className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start">
        {/*
          Two short paragraphs, not four. The figure and the two anatomy panels
          carry this argument better than prose does, and this audience skims.
        */}
        <div className="max-w-[54ch] space-y-5 text-[1.1875rem] leading-relaxed text-ink-soft">
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
            לדימומים ולתחושת התרוקנות לא מלאה.
          </p>
        </div>

        <figure className="card p-6 sm:p-8">
          <AngleFigure className="mx-auto block h-auto w-full max-w-[24rem]" />
          <figcaption className="caption mt-4 border-t border-line pt-4">
            הזווית שבין הגו לירכיים:{" "}
            <span className="ltr-isolate font-bold text-ink">90°</span> על אסלה
            בגובה כיסא, <span className="ltr-isolate font-bold text-green">35°</span>{" "}
            בכריעה מלאה. זה כל ההבדל — וכל השאר בדף הזה נשען עליו.
          </figcaption>
        </figure>
      </div>

      <blockquote className="mt-12 rounded-[var(--radius-lg)] bg-mint-wash p-8 sm:mt-16 sm:p-12">
        <p className="max-w-[26ch] font-display text-[1.625rem] font-black leading-[1.15] tracking-[-0.03em] text-green sm:text-[2.25rem]">
          זו לא בעיה שלכם. זו בעיה של התנוחה. ואת התנוחה — אפשר לשנות.
        </p>
      </blockquote>

      <div className="mt-12 sm:mt-16">
        <AngleDiagram />
        <p className="caption mt-4 max-w-[70ch]">
          זווית הגוף בישיבה לעומת כריעה, והשפעתה על מעבר היציאה. ככל שכיפוף
          הירך גדול יותר — כך הזווית הרקטואנלית ישרה יותר, ופחות עומס נדרש כדי
          לרוקן את המעי.
        </p>
      </div>
    </section>
  );
}
