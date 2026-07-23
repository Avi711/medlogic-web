import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-3 text-paper/80">
            פיתוח ישראלי מבוסס מחקר להתרוקנות טבעית ובריאה. פטנט בינלאומי
            רשום.
          </p>
        </div>

        <nav aria-label="קישורים" className="space-y-2">
          <p className="font-bold">ניווט מהיר</p>
          <ul className="space-y-2 text-paper/80">
            <li>
              <Link href="/#doctor" className="hover:text-paper hover:underline">
                אודות ד&quot;ר סיקירוב
              </Link>
            </li>
            <li>
              <Link href="/#research" className="hover:text-paper hover:underline">
                המחקרים
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-paper hover:underline">
                שאלות נפוצות
              </Link>
            </li>
            <li>
              <Link href="/#form" className="hover:text-paper hover:underline">
                יצירת קשר
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-paper hover:underline">
                מדיניות פרטיות
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-paper hover:underline">
                הצהרת נגישות
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-2">
          {/* Without a phone/email a "contact" heading over bare opening
              hours reads as unfinished — retitle it honestly. */}
          <p className="font-bold">
            {site.phoneE164 || site.email ? "יצירת קשר" : "שעות פעילות"}
          </p>
          <ul className="space-y-2 text-paper/80">
            {site.phoneE164 && site.phoneDisplay && (
              <li>
                <a href={`tel:${site.phoneE164}`} className="ltr-isolate hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="ltr-isolate hover:underline">
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
      <div className="border-t border-paper/15 pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-8 sm:px-6">
          <p className="text-base leading-relaxed text-paper/60">
            המידע באתר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי, אבחון
            או המלצה לטיפול. מתקן הכריעה מסייע לתנוחת התרוקנות טבעית ואינו
            תחליף לבדיקה או לטיפול אצל רופא. בכל מקרה של תסמינים מתמשכים,
            דימום או כאב — יש לפנות לרופא. התוצאות המתוארות משקפות חוויות
            אישיות ועשויות להשתנות מאדם לאדם.
          </p>
          <p className="text-base text-paper/60">
            © {new Date().getFullYear()} {site.nameEn}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
