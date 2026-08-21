import type { Metadata } from "next";
import { Heebo, Google_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

/*
  Variable font — the weight axis is loaded whole, so no `weight` list.
  Next has no metric-override data for Google Sans yet, so it cannot synthesise
  a size-adjusted "Google Sans Fallback" the way it does for Heebo. Naming the
  fallback explicitly at least makes the pre-swap render deterministic instead
  of leaving it to each platform's default sans.
*/
const googleSans = Google_Sans({
  subsets: ["hebrew", "latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial Hebrew", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "מתקן כריעה לאסלה | הקלה בעצירות וטחורים | MedLogic",
  description:
    "אסלת הכריעה של ד\"ר סיקירוב מאפשרת התרוקנות טבעית ומלאה בתנוחת כריעה. מבוסס על 6 מחקרים רפואיים, פטנט בינלאומי. השאירו פרטים לשיחת ייעוץ ללא התחייבות.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "מדלוג'יק – עוברים לכריעה, נפרדים מהמאמץ",
    description:
      "הפתרון הפיזיולוגי לעצירות וטחורים, מבוסס על 6 מחקרים שפורסמו בספרות הרפואית.",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1088 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${googleSans.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:rounded-md focus:bg-green focus:px-4 focus:py-2 focus:text-on-dark"
        >
          דלגו לתוכן
        </a>
        {children}
      </body>
    </html>
  );
}
