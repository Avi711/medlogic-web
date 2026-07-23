const TRUST_ITEMS = [
  {
    label: "פטנט בינלאומי רשום",
    icon: (
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />
    ),
  },
  {
    label: "6 מחקרים בכתבי עת רפואיים",
    icon: (
      <>
        <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
        <path d="M9 9h6M9 13h6" />
      </>
    ),
  },
  {
    label: "פותח ע״י רופא מומחה",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </>
    ),
  },
  {
    label: "מתאים לכל אסלה ביתית",
    icon: (
      <>
        <path d="M6 3h9v7H6z" />
        <path d="M4 10h14a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6z" />
        <path d="M9 16v5" />
      </>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-paper-deep">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item, i) => (
          <li
            key={item.label}
            className={`flex items-center justify-center gap-3 px-4 py-6 text-center ${
              i > 0 ? "border-s border-line" : ""
            } ${i === 2 ? "max-lg:border-s-0" : ""}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 shrink-0 text-pine"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {item.icon}
            </svg>
            <span className="font-semibold text-ink">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
