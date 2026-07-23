import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

const REASSURANCES = [
  "שיחת ייעוץ טלפונית חינם, בגובה העיניים",
  "משלוח ואריזה דיסקרטיים",
  "בלי התחייבות ובלי לחץ — אם זה לא מתאים לכם, נגיד לכם",
];

/** The back page: reversed out of black, with the coupon printed on it. */
export default function FinalCta() {
  return (
    <section id="form" className="scroll-mt-24 bg-ink py-14 text-paper sm:py-20">
      <div className="shell grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]">
        <div>
          <p className="kicker border-b border-paper/30 pb-2.5 text-[#c8d8c9]">
            יצירת קשר
          </p>
          <h2 className="display-2 mt-5 text-paper">
            עשרות שנות מחקר. פטנט בין־לאומי. ושיחת טלפון אחת שמפרידה ביניכם
            לבין הקלה אמיתית.
          </h2>
          <p className="mt-6 max-w-[38rem] text-paper/75">
            השאירו פרטים ונציג מטעם MedLogic יחזור אליכם בשעה שנוחה לכם —
            להסביר, לענות על כל שאלה ולבדוק יחד אם המתקן מתאים לכם. בלי
            התחייבות.
          </p>

          <ul className="mt-8 border-t border-paper/25">
            {REASSURANCES.map((line) => (
              <li
                key={line}
                className="border-b border-paper/25 py-3 text-[1.0625rem] leading-snug text-paper/90"
              >
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
              className="mt-8 flex min-h-[3.25rem] w-fit items-center bg-whatsapp px-6 font-bold text-white"
            >
              עדיף לכם בוואטסאפ? דברו איתנו
            </a>
          )}
        </div>

        <LeadForm theme="paper" />
      </div>
    </section>
  );
}
