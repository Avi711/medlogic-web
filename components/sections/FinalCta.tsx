import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

const REASSURANCES = [
  "שיחת ייעוץ טלפונית חינם, בגובה העיניים",
  "משלוח ואריזה דיסקרטיים",
  "בלי התחייבות ובלי לחץ — אם זה לא מתאים לכם, נגיד לכם",
];

export default function FinalCta() {
  return (
    <section id="form" className="scroll-mt-20 bg-night py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-night-ink [text-wrap:balance] sm:text-[2.5rem]">
            עשרות שנות מחקר. פטנט בינלאומי. ושיחת טלפון אחת שמפרידה ביניכם
            לבין הקלה אמיתית.
          </h2>
          <p className="mt-5 max-w-[38rem] text-night-ink-soft">
            השאירו פרטים ונציג מטעם MedLogic יחזור אליכם בשעה שנוחה לכם —
            להסביר, לענות על כל שאלה ולבדוק יחד אם המתקן מתאים לכם. בלי
            התחייבות.
          </p>

          <ul className="mt-8 space-y-4">
            {REASSURANCES.map((line) => (
              <li key={line} className="flex items-start gap-3 text-night-ink">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-6 w-6 shrink-0 text-night-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
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
              className="mt-8 inline-block rounded-md bg-whatsapp px-6 py-3 font-bold text-white"
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
