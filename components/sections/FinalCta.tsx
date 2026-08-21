import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

const REASSURANCES = [
  "שיחת ייעוץ טלפונית חינם, בגובה העיניים",
  "משלוח ואריזה דיסקרטיים",
  "בלי התחייבות ובלי לחץ — אם זה לא מתאים לכם, נגיד לכם",
];

/** The last green block, and the page's real destination. */
export default function FinalCta() {
  return (
    <section id="form" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <div className="block-green grid items-center gap-x-14 gap-y-10 p-7 sm:p-11 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:p-14">
        <div>
          <span className="kicker bg-white/12 text-mint">יצירת קשר</span>
          <h2 className="display-2 mt-5 max-w-[18ch] text-on-dark">
            שיחת טלפון אחת מפרידה ביניכם לבין הקלה אמיתית.
          </h2>
          <p className="lede mt-5 max-w-[46ch] text-on-dark-soft">
            השאירו פרטים ונציג מטעם MedLogic יחזור אליכם בשעה שנוחה לכם —
            להסביר, לענות על כל שאלה ולבדוק יחד אם המתקן מתאים לכם.
          </p>

          <ul className="mt-8 space-y-3 border-t border-white/15 pt-7">
            {REASSURANCES.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[1.0625rem] leading-snug text-on-dark-soft"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-mint"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10.5 8 14.5 16 5.5" />
                </svg>
                {line}
              </li>
            ))}
          </ul>

          {site.whatsapp && (
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "שלום, אשמח לשמוע פרטים על מתקן הכריעה"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet-dark mt-8"
            >
              עדיף לכם בוואטסאפ? דברו איתנו
            </a>
          )}
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
