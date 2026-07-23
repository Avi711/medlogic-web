import Image, { type StaticImageData } from "next/image";
import haaretzLogo from "@/public/images/press/haaretz.png";
import maarivLogo from "@/public/images/press/maariv.png";
import themarkerLogo from "@/public/images/press/themarker.png";
import ynetLogo from "@/public/images/press/ynet.png";

type PressItem = {
  outlet: string;
  logo: StaticImageData;
  headline: string;
  url: string;
};

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "TheMarker",
    logo: themarkerLogo,
    headline:
      "אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
    url: "https://www.themarker.com/labels/2019-03-13/ty-article-labels/0000017f-f88b-d47e-a37f-f9bf25c50000",
  },
  {
    outlet: "הארץ",
    logo: haaretzLogo,
    headline:
      "יותר ויותר אנשים משוכנעים שהדרך שבה אנחנו עושים צרכים שגויה. פנינו לרופאים ולחסידי כריעה",
    url: "https://www.haaretz.co.il/magazine/2019-04-03/ty-article-magazine/.premium/0000017f-e007-d804-ad7f-f1ffc2630000",
  },
  {
    outlet: "ynet",
    logo: ynetLogo,
    headline:
      "הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות: ישיבה ממושכת מגבירה את הסיכון לטחורים",
    url: "https://www.ynet.co.il/articles/0,7340,L-5291707,00.html",
  },
  {
    outlet: "מעריב",
    logo: maarivLogo,
    headline:
      "עשרות אלפי ישראלים לוקים בעצירות כל שנה — ואיך התנוחה הנכונה יכולה לעזור",
    url: "https://www.maariv.co.il/news/health/article-1095397",
  },
];

export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי בנושא" className="border-y border-line bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center font-semibold tracking-wide text-ink-soft">
          מדברים על זה בתקשורת בישראל
        </p>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRESS_ITEMS.map((item) => (
            <li key={item.outlet} className="border-s-2 border-amber ps-4">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Image
                  src={item.logo}
                  alt={item.outlet}
                  className="h-9 w-auto object-contain object-right"
                  sizes="10rem"
                />
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  ״{item.headline}״
                </p>
                <span className="mt-2 inline-block text-sm font-semibold text-pine group-hover:underline">
                  לכתבה המלאה ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
