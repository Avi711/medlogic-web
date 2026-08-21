import Link from "next/link";
import LogoMark from "@/components/Logo";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/#doctor", label: "ד״ר סיקירוב" },
  { href: "/#research", label: "המחקרים" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/#form", label: "יצירת קשר" },
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/accessibility", label: "הצהרת נגישות" },
];

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-on-dark-soft">
      <div className="shell grid gap-x-12 gap-y-10 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-[1.6rem] font-black tracking-[-0.045em] text-on-dark">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-[34ch] leading-relaxed">
            פיתוח ישראלי מבוסס מחקר להתרוקנות טבעית ובריאה. פטנט בין־לאומי
            רשום.
          </p>
        </div>

        <nav aria-label="קישורים">
          <p className="font-display font-black text-on-dark">ניווט</p>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2 md:grid-cols-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1.5 hover:text-on-dark hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display font-black text-on-dark">
            {site.phoneE164 || site.email ? "יצירת קשר" : "שעות פעילות"}
          </p>
          <ul className="mt-4 space-y-2">
            {site.phoneE164 && site.phoneDisplay && (
              <li>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="ltr-isolate hover:text-on-dark hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="ltr-isolate hover:text-on-dark hover:underline"
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
      <div className="border-t border-white/12 pb-24 md:pb-0">
        <div className="shell flex flex-wrap justify-between gap-x-12 gap-y-4 py-8">
          <p className="caption max-w-[78ch] text-on-dark-soft/80">
            המידע באתר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי, אבחון
            או המלצה לטיפול. מתקן הכריעה מסייע לתנוחת התרוקנות טבעית ואינו
            תחליף לבדיקה או לטיפול אצל רופא. בכל מקרה של תסמינים מתמשכים, דימום
            או כאב — יש לפנות לרופא. התוצאות המתוארות משקפות חוויות אישיות
            ועשויות להשתנות מאדם לאדם.
          </p>
          <p className="caption text-on-dark-soft/80">
            © {new Date().getFullYear()} {site.nameEn}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
