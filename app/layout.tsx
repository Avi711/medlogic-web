import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
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
    <html lang="he" dir="rtl" className={`${frankRuhl.variable} ${assistant.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:rounded-md focus:bg-pine focus:px-4 focus:py-2 focus:text-paper"
        >
          דלגו לתוכן
        </a>
        {children}
      </body>
    </html>
  );
}
