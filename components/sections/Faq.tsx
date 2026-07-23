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
    <section id="faq" className="scroll-mt-20 bg-paper-deep py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[46rem] px-4 sm:px-6">
        <SectionHeading eyebrow="שאלות ותשובות" title="שאלות ששואלים אותנו בטלפון" />

        <div className="divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-pine transition-transform duration-200 group-open:rotate-180"
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
              <div className="pb-5 pe-9">
                <p className="text-ink-soft">{item.a}</p>
                {item.cta && (
                  <Link
                    href="/#form"
                    className="mt-4 inline-block rounded-md bg-clay px-5 py-2.5 font-bold text-white transition-colors hover:bg-clay-deep"
                  >
                    השאירו טלפון — נחזור אליכם עם מחיר מדויק
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
