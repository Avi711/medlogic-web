import Link from "next/link";
import LeadForm from "@/components/LeadForm";

/**
 * Mid-page conversion point — catches visitors convinced by the
 * testimonials. On mobile the page is long enough already, so instead of a
 * second full form we show a single button to the final form.
 */
export default function MidCta() {
  return (
    <section className="border-y border-line bg-paper-deep py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink [text-wrap:balance] sm:text-[2.5rem]">
            מוכנים לבדוק אם זה מתאים גם לכם?
          </h2>
          <p className="mt-4 max-w-[38rem] text-ink-soft">
            שיחה קצרה, בלי התחייבות. נסביר, נענה על כל שאלה ונבדוק יחד את
            ההתאמה לשירותים שלכם — בשעה שנוחה לכם.
          </p>
          <Link
            href="/#form"
            className="mt-8 inline-block rounded-md bg-clay px-8 py-4 text-xl font-bold text-white shadow-card transition-colors hover:bg-clay-deep lg:hidden"
          >
            השאירו טלפון — נחזור אליכם
          </Link>
        </div>
        <div className="hidden lg:block">
          <LeadForm theme="paper" />
        </div>
      </div>
    </section>
  );
}
