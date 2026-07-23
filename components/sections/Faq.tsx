import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

type FaqItem = {
  q: string;
  a: string;
  /** When true, the rendered answer ends with a CTA button to the form. */
  cta?: boolean;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "האם ארגיש שיפור מיד?",
    a: "אצל רבים ההבדל מורגש כבר בשימושים הראשונים — פחות מאמץ ותחושת התרוקנות מלאה יותר. במצבים ותיקים יותר, כמו טחורים כרוניים, השיפור בדרך כלל הדרגתי ומצטבר לאורך שבועות. כל גוף בקצב שלו.",
  },
  {
    q: "כריעה לא תהיה לי לא נוחה? לא כרעתי שנים.",
    a: "זו השאלה הכי נפוצה — והתשובה מפתיעה. המתקן תוכנן בדיוק בשביל זה: משטחי דריכה רחבים ומונעי החלקה בגובה נמוך, כך שלא צריך שיווי משקל של ספורטאי. רוב המשתמשים מתרגלים תוך ימים ספורים, והגוף \"נזכר\" בתנוחה מהר משחושבים.",
  },
  {
    q: "מה בדיוק מקבלים, והאם זה מתאים לבית שלי?",
    a: "מקבלים ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן דריכה עם משטחים מונעי החלקה. הערכה מתחברת לתשתית האינסטלציה הביתית הרגילה בהתקנה פשוטה, ובשיחת הטלפון נוודא יחד את ההתאמה לשירותים שלכם.",
  },
  {
    q: "למי המתקן מיועד?",
    a: "לכל מי שסובל מעצירות, טחורים, מאמץ בשירותים או תחושת התרוקנות לא מלאה. הוא מתאים גם למתמודדים עם דיברטיקולוזיס, לנשים לאחר לידה ולמי שעבר או עומד לעבור ניתוח באזור פי הטבעת — בכפוף להתייעצות עם הרופא המטפל.",
  },
  {
    q: "אני מבוגר / יש לי בעיות ברכיים. זה בטוח בשבילי?",
    a: "המתקן פותח מתוך מחשבה על קהל מבוגר: משטחי דריכה רחבים מונעי החלקה, גובה נמוך ותנוחה יציבה. עם זאת, אם יש מגבלה משמעותית בברכיים או בירכיים — נשוחח על זה בטלפון בכנות מלאה. אם זה לא מתאים לכם, נגיד לכם.",
  },
  {
    q: "מה קורה אם המתקן לא יתאים לי?",
    a: "אנחנו עומדים מאחורי המוצר. בשיחת הטלפון נפרט את תנאי האחריות ותקופת ההתנסות — בשקיפות מלאה ולפני כל התחייבות מצדכם.",
  },
  {
    q: "כמה זה עולה?",
    a: "המחיר תלוי בדגם ובהתאמה לשירותים שלכם, ולכן אנחנו מעדיפים לתת לכם מחיר מדויק ולא מספר כללי. השאירו פרטים — ובשיחה קצרה תקבלו את כל המידע, בלי לחץ ובלי משחקים.",
    cta: true,
  },
];

/** FAQPage structured data — a cheap rich-result win for the search snippet. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-y-2 border-ink bg-paper-deep py-14 sm:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="shell">
        <div className="grid gap-x-14 gap-y-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
          <SectionHeading
            eyebrow="שאלות ותשובות"
            title="שאלות ששואלים אותנו בטלפון"
            meta="7 שאלות"
            className="lg:sticky lg:top-28"
          />

          <div className="border-t-2 border-ink">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group border-b border-ink/25">
                <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-baseline gap-3 py-3.5 [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-display text-[1.0625rem] font-black text-pine"
                  >
                    ש.
                  </span>
                  <span className="font-display text-[1.125rem] font-bold leading-snug text-ink group-hover:text-pine">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className="ms-auto h-5 w-5 shrink-0 translate-y-1 text-pine transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="flex gap-3 pb-5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-display text-[1.0625rem] font-black text-ink-soft"
                  >
                    ת.
                  </span>
                  <div className="max-w-[60ch]">
                    <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                    {item.cta && (
                      <Link
                        href="/#form"
                        className="mt-4 flex min-h-[3.25rem] w-fit items-center bg-clay px-6 font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep"
                      >
                        לקבלת מחיר מדויק בשיחה קצרה ←
                      </Link>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
