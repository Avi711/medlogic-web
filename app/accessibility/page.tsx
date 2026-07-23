import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "הצהרת נגישות | MedLogic",
  description: "הצהרת הנגישות של אתר MedLogic",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          הצהרת נגישות
        </h1>
        <div className="mt-8 max-w-[42rem] space-y-5 text-ink-soft">
          <p>
            אנו ב{site.name} רואים חשיבות רבה במתן שירות שוויוני לכלל
            הגולשים, ובכלל זה אנשים עם מוגבלות. אתר זה נבנה מתוך מטרה לעמוד
            בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
            לשירות), התשע&quot;ג-2013, ובהנחיות התקן הישראלי (ת&quot;י 5568)
            לנגישות תכנים באינטרנט ברמה AA.
          </p>
          <h2 className="pt-2 font-display text-2xl font-bold text-pine">
            התאמות הנגישות באתר
          </h2>
          <ul className="list-disc space-y-2 ps-6">
            <li>מבנה עמודים סמנטי התומך בקוראי מסך, כולל קישור דילוג לתוכן</li>
            <li>גודל טקסט בסיסי מוגדל וניגודיות צבעים העומדת בדרישות התקן</li>
            <li>ניווט מלא באמצעות מקלדת, עם סימון מוקד ברור</li>
            <li>טקסט חלופי לתמונות משמעותיות</li>
            <li>תמיכה בהעדפת צמצום אנימציות של מערכת ההפעלה</li>
            <li>טפסים עם תוויות ברורות והודעות שגיאה מקושרות לשדות</li>
          </ul>
          <h2 className="pt-2 font-display text-2xl font-bold text-pine">
            נתקלתם בבעיה? ספרו לנו
          </h2>
          <p>
            אנו ממשיכים לשפר את נגישות האתר באופן שוטף. אם נתקלתם ברכיב שאינו
            נגיש או בכל קושי אחר, נשמח שתפנו אלינו{" "}
            {site.email ? (
              <>
                בדוא&quot;ל: <span className="ltr-isolate">{site.email}</span>
              </>
            ) : (
              "באמצעות טופס יצירת הקשר באתר"
            )}
            , ונטפל בפנייה בהקדם האפשרי.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
