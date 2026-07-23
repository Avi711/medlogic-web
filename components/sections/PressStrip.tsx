const PRESS_ITEMS = [
  {
    outlet: "TheMarker",
    headline:
      "אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
  },
  {
    outlet: "הארץ",
    headline:
      "יותר ויותר אנשים משוכנעים שהדרך שבה אנחנו עושים צרכים שגויה. פנינו לרופאים ולחסידי כריעה",
  },
  {
    outlet: "ynet",
    headline:
      "הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות: ישיבה ממושכת מגבירה את הסיכון לטחורים",
  },
  {
    outlet: "מעריב",
    headline:
      "עשרות אלפי ישראלים לוקים בעצירות כל שנה — ואיך התנוחה הנכונה יכולה לעזור",
  },
];

export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי בנושא" className="border-y border-line bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center font-semibold tracking-wide text-ink-soft">
          מדברים על זה בתקשורת בישראל
        </p>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRESS_ITEMS.map((item) => (
            <li key={item.outlet} className="border-s-2 border-amber ps-4">
              <p className="font-serif text-2xl font-black text-ink">
                {item.outlet}
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                ״{item.headline}״
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
