import Link from "next/link";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/#doctor", label: "ד״ר סיקירוב" },
  { href: "/#research", label: "המחקרים" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/#form", label: "יצירת קשר" },
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/accessibility", label: "הצהרת נגישות" },
];

/** The colophon. */
export default function Footer() {
  return (
    <footer className="border-t border-paper/25 bg-ink text-paper">
      <div className="shell grid gap-x-12 gap-y-9 py-12 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)]">
        <div>
          <p className="font-display text-[1.75rem] font-black tracking-[-0.03em]">
            {site.name}
          </p>
          <p className="mt-3 max-w-[34ch] text-[1.0625rem] leading-relaxed text-paper/75">
            פיתוח ישראלי מבוסס מחקר להתרוקנות טבעית ובריאה. פטנט בין־לאומי
            רשום.
          </p>
        </div>

        <nav aria-label="קישורים">
          <p className="kicker border-b border-paper/25 pb-2 text-[#c8d8c9]">
            ניווט
          </p>
          <ul className="mt-1">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-paper/15">
                <Link
                  href={link.href}
                  className="block py-2.5 text-[1.0625rem] text-paper/80 hover:text-paper hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="kicker border-b border-paper/25 pb-2 text-[#c8d8c9]">
            {site.phoneE164 || site.email ? "יצירת קשר" : "שעות פעילות"}
          </p>
          <ul className="mt-3 space-y-2 text-[1.0625rem] text-paper/80">
            {site.phoneE164 && site.phoneDisplay && (
              <li>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="ltr-isolate hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="ltr-isolate hover:underline"
                >
                  {site.email}
                </a>
              </li>
            )}
            <li>
              ימים א׳–ה׳, <span className="ltr-isolate">9:00–19:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* extra mobile bottom padding keeps the legal text clear of the sticky bar */}
      <div className="border-t border-paper/20 pb-24 md:pb-0">
        <div className="shell flex flex-wrap justify-between gap-x-12 gap-y-4 py-7">
          <p className="caption max-w-[78ch] text-paper/60">
            המידע באתר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי, אבחון
            או המלצה לטיפול. מתקן הכריעה מסייע לתנוחת התרוקנות טבעית ואינו
            תחליף לבדיקה או לטיפול אצל רופא. בכל מקרה של תסמינים מתמשכים, דימום
            או כאב — יש לפנות לרופא. התוצאות המתוארות משקפות חוויות אישיות
            ועשויות להשתנות מאדם לאדם.
          </p>
          <p className="caption text-paper/60">
            © {new Date().getFullYear()} {site.nameEn}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
