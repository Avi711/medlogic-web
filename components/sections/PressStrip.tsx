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

/** Clippings, mounted flat: hairline frame, outlet, headline, link out. */
export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי" className="shell py-14 sm:py-20">
      <SectionHeading
        eyebrow="מהעיתונות"
        title="מדברים על זה בתקשורת בישראל"
        meta="4 כתבות · קישור למקור"
        lede="ארבע כתבות שפורסמו בעיתונות הישראלית על תנוחת ההתרוקנות ועל הפיתוח של ד״ר סיקירוב. כל גזיר מוביל לכתבה המלאה באתר המקורי."
      />

      <ul className="mt-9 grid gap-x-11 gap-y-9 sm:grid-cols-2">
        {PRESS_ITEMS.map((item) => (
          <li key={item.outlet}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <figure>
                <Image
                  src={item.clip}
                  alt={item.alt}
                  sizes="(min-width: 640px) 34rem, 100vw"
                  className="h-auto w-full border border-ink/20 bg-white"
                />
                <figcaption className="mt-3 border-t-2 border-ink pt-2.5">
                  <span className="kicker block text-pine">{item.outlet}</span>
                  <span className="mt-2 block font-display text-[1.0625rem] font-bold leading-snug text-ink group-hover:underline">
                    {item.headline}
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] font-semibold text-clay">
                    לכתבה המלאה ↗
                  </span>
                </figcaption>
              </figure>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
