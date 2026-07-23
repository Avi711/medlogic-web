const CLAIMS = [
  "פטנט בינלאומי רשום",
  "6 מחקרים בכתבי עת רפואיים",
  "פותח על ידי רופא מומחה לרפואה פנימית",
  "מתחבר לאינסטלציה הביתית",
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/15 bg-paper-deep">
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-1 px-4 py-4 text-base font-semibold text-ink-soft sm:px-6">
        {CLAIMS.map((claim, i) => (
          <li key={claim}>
            {i > 0 && (
              <span aria-hidden="true" className="me-6 text-line max-sm:hidden">
                ·
              </span>
            )}
            {claim}
          </li>
        ))}
      </ul>
    </section>
  );
}
