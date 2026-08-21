import Link from "next/link";
import LeadForm from "@/components/LeadForm";

/**
 * The third green block. On mobile the page is long enough already, so the
 * form itself stays at the foot of the page and this becomes a single action.
 */
export default function MidCta() {
  return (
    <section className="shell pb-16 sm:pb-24">
      <div className="block-green grid items-center gap-x-14 gap-y-9 p-7 sm:p-11 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:p-14">
        <div>
          <span className="kicker bg-white/12 text-mint">בלי התחייבות</span>
          <h2 className="display-2 mt-5 max-w-[16ch] text-on-dark">
            מוכנים לבדוק אם זה מתאים גם לכם?
          </h2>
          <p className="lede mt-5 max-w-[46ch] text-on-dark-soft">
            שיחה קצרה. נסביר, נענה על כל שאלה ונבדוק יחד את ההתאמה לשירותים
            שלכם — בשעה שנוחה לכם.
          </p>
          <p className="mt-7 max-w-[30ch] font-display text-[1.375rem] font-black leading-snug tracking-[-0.025em] text-mint">
            אם זה לא מתאים לכם — נגיד לכם. בלי לחץ ובלי משחקים.
          </p>
          <Link href="/#form" className="btn btn-lg mt-8 lg:hidden">
            להשארת פרטים לשיחה קצרה
          </Link>
        </div>

        <div className="hidden lg:block">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
