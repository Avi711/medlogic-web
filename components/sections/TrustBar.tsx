const CLAIMS = [
  "פטנט בין־לאומי רשום",
  "6 מחקרים בכתבי עת רפואיים",
  "פותח ע״י רופא מומחה לרפואה פנימית",
  "מתחבר לאינסטלציה הביתית",
];

/** The index strip under the front page: four facts, hairline-divided. */
export default function TrustBar() {
  return (
    <section
      aria-label="עובדות מפתח"
      className="border-y-2 border-ink bg-paper-deep"
    >
      <ul className="shell grid grid-cols-2 lg:grid-cols-4">
        {CLAIMS.map((claim, i) => (
          <li
            key={claim}
            className={`py-3 text-[1.0625rem] font-semibold leading-snug text-ink lg:py-3.5 ${
              i % 2 === 1 ? "ps-4 border-s border-ink/20" : "pe-4"
            } ${i >= 2 ? "border-t border-ink/20 lg:border-t-0" : ""} ${
              i >= 1 ? "lg:ps-6 lg:border-s lg:border-ink/20" : ""
            } ${i < 3 ? "lg:pe-6" : "lg:pe-0"}`}
          >
            {claim}
          </li>
        ))}
      </ul>
    </section>
  );
}
