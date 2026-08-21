import Image, { type StaticImageData } from "next/image";
import SectionHeading from "@/components/SectionHeading";
import haaretzClip from "@/public/images/press/haaretz-clip.jpg";
import maarivClip from "@/public/images/press/maariv-clip.jpg";
import themarkerClip from "@/public/images/press/themarker-clip.jpg";
import ynetClip from "@/public/images/press/ynet-clip.jpg";

type PressItem = {
  outlet: string;
  headline: string;
  clip: StaticImageData;
  alt: string;
  url: string;
};

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "TheMarker",
    headline:
      "אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
    clip: themarkerClip,
    alt: "כתבה ב-TheMarker: אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
    url: "https://www.themarker.com/labels/2019-03-13/ty-article-labels/0000017f-f88b-d47e-a37f-f9bf25c50000",
  },
  {
    outlet: "הארץ",
    headline: "יכול להיות שאנחנו עושים קקי לא נכון?",
    clip: haaretzClip,
    alt: "כתבה בהארץ: יכול להיות שאנחנו עושים קקי לא נכון?",
    url: "https://www.haaretz.co.il/magazine/2019-04-03/ty-article-magazine/.premium/0000017f-e007-d804-ad7f-f1ffc2630000",
  },
  {
    outlet: "ynet",
    headline: "10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות",
    clip: ynetClip,
    alt: "כתבה ב-ynet: 10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות",
    url: "https://www.ynet.co.il/articles/0,7340,L-5291707,00.html",
  },
  {
    outlet: "מעריב",
    headline: "יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח?",
    clip: maarivClip,
    alt: "כתבה במעריב: יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח?",
    url: "https://www.maariv.co.il/news/health/article-1095397",
  },
];

/** Clippings shown whole, in colour — never cropped, never greyscaled. */
export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי" className="shell pb-16 sm:pb-24">
      <SectionHeading
        eyebrow="מהעיתונות"
        title="מדברים על זה בתקשורת בישראל"
        meta="4 כתבות · קישור למקור"
      />

      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRESS_ITEMS.map((item) => (
          <li key={item.outlet}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-card"
            >
              {/*
                Clippings run whole and in colour — never cropped, never
                greyscaled. The frame keeps four different source aspect ratios
                from turning the row into a ragged edge.
              */}
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={item.clip}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 92vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-line p-5">
                <span className="kicker">{item.outlet}</span>
                <span className="mt-3 flex-1 font-display text-[1.0625rem] font-black leading-snug text-ink group-hover:underline">
                  {item.headline}
                </span>
                <span className="caption mt-3 font-bold text-green">
                  לכתבה המלאה ↗
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
