import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | MedLogic",
  description: "מדיניות הפרטיות של אתר MedLogic",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
          מדיניות פרטיות
        </h1>
        <div className="mt-8 max-w-[42rem] space-y-5 text-ink-soft">
          <p>
            הפרטיות שלכם חשובה לנו. מסמך זה מפרט איזה מידע נאסף באתר{" "}
            {site.name} וכיצד אנו משתמשים בו.
          </p>
          <h2 className="pt-2 font-serif text-2xl font-bold text-pine">
            איזה מידע אנחנו אוספים
          </h2>
          <p>
            המידע היחיד שנאסף באתר הוא המידע שאתם בוחרים למסור בטופס יצירת
            הקשר: שם, מספר טלפון, שעה נוחה לשיחה והודעה חופשית (אם צירפתם).
            האתר אינו עושה שימוש בעוגיות פרסום ואינו מטמיע כלי מעקב של צדדים
            שלישיים; סרטון וידאו מוטמע נטען רק לאחר לחיצה מפורשת עליו.
          </p>
          <h2 className="pt-2 font-serif text-2xl font-bold text-pine">
            למה אנחנו משתמשים במידע
          </h2>
          <p>
            הפרטים שנמסרו בטופס משמשים אך ורק לחזרה אליכם לשיחת ייעוץ בנוגע
            למוצרי {site.name}. איננו שולחים דיוור פרסומי, איננו מעבירים את
            הפרטים לגורם שלישי לצורכי שיווק, ואיננו סוחרים בהם בשום צורה.
          </p>
          <h2 className="pt-2 font-serif text-2xl font-bold text-pine">
            שמירת מידע וזכויותיכם
          </h2>
          <p>
            המידע נשמר במערכות מאובטחות ולמשך הזמן הדרוש לטיפול בפנייה בלבד.
            בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, באפשרותכם לבקש בכל עת
            לעיין במידע שנמסר, לתקנו או למחוק אותו — פשוט פנו אלינו{" "}
            {site.email ? (
              <>
                בדוא&quot;ל: <span className="ltr-isolate">{site.email}</span>
              </>
            ) : (
              "באמצעות טופס יצירת הקשר"
            )}
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
