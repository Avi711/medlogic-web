import Link from "next/link";
import LeadForm from "@/components/LeadForm";

/**
 * The reply coupon, printed mid-issue. On mobile the page is long enough
 * already, so the slip becomes a single stub pointing at the full form.
 */
export default function MidCta() {
  return (
    <section className="border-y-2 border-ink bg-paper-deep py-12 sm:py-16">
      <div className="shell grid items-center gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]">
        <div className="border-t-2 border-ink pt-5">
          <p className="kicker text-pine">ספח פנייה</p>
          <h2 className="display-2 mt-4 max-w-[15ch] text-ink">
            מוכנים לבדוק אם זה מתאים גם לכם?
          </h2>
          <p className="mt-5 max-w-[36rem] text-ink-soft">
            שיחה קצרה, בלי התחייבות. נסביר, נענה על כל שאלה ונבדוק יחד את
            ההתאמה לשירותים שלכם — בשעה שנוחה לכם.
          </p>
          <p className="mt-6 border-t border-ink/20 pt-4 font-display text-[1.375rem] font-medium leading-snug text-pine">
            אם זה לא מתאים לכם — נגיד לכם. בלי לחץ ובלי משחקים.
          </p>
          <Link
            href="/#form"
            className="mt-7 flex min-h-[3.75rem] items-center justify-center bg-clay px-8 text-xl font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep lg:hidden"
          >
            להשארת פרטים לשיחה קצרה
          </Link>
        </div>
        <div className="hidden lg:block">
          <LeadForm theme="paper" />
        </div>
      </div>
    </section>
  );
}
