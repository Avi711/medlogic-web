import type { Metadata, Viewport } from "next";
import { Heebo, Google_Sans } from "next/font/google";
import { copy, keywords } from "@/lib/seo";
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

const TITLE = "מתקן כריעה לאסלה | הקלה בעצירות וטחורים | MedLogic";
const DESCRIPTION =
  "אסלת הכריעה של ד\"ר סיקירוב מאפשרת התרוקנות טבעית ומלאה בתנוחת כריעה. מבוסס על 6 מחקרים רפואיים, פטנט בינלאומי. השאירו פרטים לשיחת ייעוץ ללא התחייבות.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: TITLE, template: `%s | ${site.nameEn}` },
  description: DESCRIPTION,
  applicationName: site.nameEn,
  keywords,
  authors: [{ name: site.nameEn, url: site.domain }],
  creator: site.nameEn,
  publisher: site.nameEn,
  category: "health",
  alternates: { canonical: "/" },
  /*
    Explicit, permissive preview controls. Google's generative features (AI
    Overviews, AI Mode) use the same snippet controls as classic Search, so a
    restrictive default here would quietly shrink what they may quote.
  */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: site.domain,
    siteName: site.nameEn,
    title: "מדלוג'יק – עוברים לכריעה, נפרדים מהמאמץ",
    description: copy.tagline,
    images: [
      // The real kit in a bathroom — not the generic ambience shot — so a
      // shared link shows the actual product.
      {
        url: "/images/product-bathroom.jpg",
        width: 1920,
        height: 1072,
        alt: "ערכת הכריעה של MedLogic: אסלה קרמית נמוכה ומעליה מתקן דריכה, בחדר רחצה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מדלוג'יק – עוברים לכריעה, נפרדים מהמאמץ",
    description: copy.tagline,
    images: ["/images/product-bathroom.jpg"],
  },
  // Ownership tokens are optional env vars, so a missing one renders nothing.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f3d2e",
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
