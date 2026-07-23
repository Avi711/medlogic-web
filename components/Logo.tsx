/**
 * The MedLogic mark: a microscope, drawn to stay legible down to 16px.
 * Kept in sync with app/icon.svg (favicon / tab / home-screen icon).
 */
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--pine)" />
      <g
        fill="none"
        stroke="var(--paper)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 50h32" strokeWidth="6" />
        <path d="M32 50c-10-5-11-16-5-22" strokeWidth="6" />
        <path d="M19 40h19" strokeWidth="5" />
        <path d="M28 30 42 16" strokeWidth="9" />
      </g>
      <path
        d="M45 13 50 8"
        stroke="var(--amber)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
