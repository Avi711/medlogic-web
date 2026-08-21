import Image, { type StaticImageData } from "next/image";
import { PRESS_ITEMS } from "@/lib/press";
import haaretzClip from "@/public/images/press/haaretz-clip.jpg";
import maarivClip from "@/public/images/press/maariv-clip.jpg";
import themarkerClip from "@/public/images/press/themarker-clip.jpg";
import ynetClip from "@/public/images/press/ynet-clip.jpg";

/** Clippings by outlet. The facts (headline, url, date) live in lib/press. */
const CLIPS: Record<string, { clip: StaticImageData; alt: string }> = {
  TheMarker: {
    clip: themarkerClip,
    alt: "כתבה ב-TheMarker: אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
  },
  "הארץ": {
    clip: haaretzClip,
    alt: "כתבה בהארץ: יכול להיות שאנחנו עושים קקי לא נכון?",
  },
  ynet: {
    clip: ynetClip,
    alt: "כתבה ב-ynet: 10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות",
  },
  "מעריב": {
    clip: maarivClip,
    alt: "כתבה במעריב: יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח?",
  },
};

/** Clippings shown whole, in colour — never cropped, never greyscaled. */
export default function PressStrip() {
  return (
    <section aria-label="סיקור תקשורתי" className="shell pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* A label, not a headline: the four clippings are the statement. */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 className="display-3 text-ink">מהעיתונות</h2>
        <span className="caption font-semibold text-ink-soft">4 כתבות · קישור למקור</span>
      </div>

      <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  src={CLIPS[item.outlet].clip}
                  alt={CLIPS[item.outlet].alt}
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
