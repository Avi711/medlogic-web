import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
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
  metadataBase: new URL("https://medlogic.co.il"),
  title: "מתקן כריעה לאסלה | הקלה בעצירות וטחורים | MedLogic",
  description:
    "מתקן הכריעה של ד\"ר סיקירוב הופך כל אסלה לתנוחת התרוקנות טבעית. מבוסס על 6 מחקרים רפואיים, פטנט בינלאומי. השאירו פרטים לשיחת ייעוץ ללא התחייבות.",
  openGraph: {
    title: "מדלוג'יק – עוברים לכריעה, נפרדים מהמאמץ",
    description:
      "הפתרון הפיזיולוגי לעצירות וטחורים, מבוסס על 6 מחקרים שפורסמו בספרות הרפואית.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${frankRuhl.variable} ${assistant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
