import LeadForm from "@/components/LeadForm";

/** Mid-page conversion point — catches visitors convinced by the testimonials. */
export default function MidCta() {
  return (
    <section className="border-y border-line bg-paper-deep py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-[2.5rem]">
            מוכנים לבדוק אם זה מתאים גם לכם?
          </h2>
          <p className="mt-4 max-w-[38rem] text-ink-soft">
            שיחה קצרה, בלי התחייבות. נסביר, נענה על כל שאלה ונבדוק יחד את
            ההתאמה לשירותים שלכם — בשעה שנוחה לכם.
          </p>
        </div>
        <LeadForm theme="paper" />
      </div>
    </section>
  );
}
