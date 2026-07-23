import Image, { type StaticImageData } from "next/image";
import haaretzClip from "@/public/images/press/haaretz-clip.jpg";
import maarivClip from "@/public/images/press/maariv-clip.jpg";
import themarkerClip from "@/public/images/press/themarker-clip.jpg";
import ynetClip from "@/public/images/press/ynet-clip.jpg";

type PressItem = {
  outlet: string;
  clip: StaticImageData;
  alt: string;
  url: string;
};

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "TheMarker",
    clip: themarkerClip,
    alt: "כתבה ב-TheMarker: אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
    url: "https://www.themarker.com/labels/2019-03-13/ty-article-labels/0000017f-f88b-d47e-a37f-f9bf25c50000",
  },
  {
    outlet: "הארץ",
    clip: haaretzClip,
    alt: "כתבה בהארץ: יכול להיות שאנחנו עושים קקי לא נכון?",
    url: "https://www.haaretz.co.il/magazine/2019-04-03/ty-article-magazine/.premium/0000017f-e007-d804-ad7f-f1ffc2630000",
  },
  {
    outlet: "ynet",
    clip: ynetClip,
    alt: "כתבה ב-ynet: 10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות",
    url: "https://www.ynet.co.il/articles/0,7340,L-5291707,00.html",
  },
  {
    outlet: "מעריב",
    clip: maarivClip,
    alt: "כתבה במעריב: יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח?",
    url: "https://www.maariv.co.il/news/health/article-1095397",
  },
];

/** Alternating tilt — clippings pinned to a board, like the research wall. */
const ROTATIONS = ["-rotate-1", "rotate-1"];

export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי בנושא" className="border-y border-line bg-paper-deep py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-10 text-center font-display text-2xl font-bold text-ink">
          מדברים על זה בתקשורת בישראל
        </p>
        <ul className="grid gap-8 sm:grid-cols-2">
          {PRESS_ITEMS.map((item, i) => (
            <li key={item.outlet}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
                  ROTATIONS[i % ROTATIONS.length]
                }`}
              >
                <figure className="overflow-hidden border border-line bg-white p-2 shadow-card sm:p-3">
                  <Image
                    src={item.clip}
                    alt={item.alt}
                    sizes="(min-width: 640px) 30rem, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="flex items-center justify-between gap-2 px-1 pt-3 pb-1">
                    <span className="text-sm text-ink-soft">
                      מתוך הכתבה ב{item.outlet === "ynet" || item.outlet === "TheMarker" ? "־" : ""}
                      {item.outlet}
                    </span>
                    <span className="text-sm font-semibold text-pine group-hover:underline">
                      לכתבה המלאה ↗
                    </span>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
