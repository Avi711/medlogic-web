import Image from "next/image";
import sittingIllustration from "@/public/images/illu-sitting.jpg";
import squatIllustration from "@/public/images/illu-squat.jpg";

/**
 * Figure 1 — the whole argument in one plate. Two anatomical panels, the
 * angle set as the largest thing on the page after the headline. RTL: the
 * problem panel renders first, so it sits on the right and is read first.
 */
const PANELS = [
  {
    image: sittingIllustration,
    alt: "איור אנטומי: בישיבה על אסלה בגובה כיסא צינור היציאה מתקפל בזווית חדה",
    letter: "א",
    angle: "90°",
    angleClass: "text-error",
    title: "בישיבה",
    caption: "המעבר מקופל — היציאה דורשת מאמץ",
  },
  {
    image: squatIllustration,
    alt: "איור אנטומי: בכריעה מלאה צינור היציאה מתיישר ונפתח",
    letter: "ב",
    angle: "35°",
    angleClass: "text-pine",
    title: "בכריעה",
    caption: "המעבר פתוח — היציאה קלה וטבעית",
  },
];

export default function AngleDiagram() {
  return (
    <figure>
      <div className="grid grid-cols-2 gap-5 sm:gap-10">
        {PANELS.map((panel) => (
          <div key={panel.title}>
            <div className="flex items-end justify-between gap-2 border-b-2 border-ink pb-1.5">
              <h3 className="font-display text-[1.125rem] font-bold leading-none text-ink sm:text-2xl">
                <span className="text-ink-soft">{panel.letter}.</span>{" "}
                {panel.title}
              </h3>
              <span
                className={`ltr-isolate font-display text-[2.25rem] font-black leading-[0.8] tracking-[-0.03em] sm:text-[4rem] ${panel.angleClass}`}
              >
                {panel.angle}
              </span>
            </div>
            <Image
              src={panel.image}
              alt={panel.alt}
              sizes="(min-width: 1024px) 36vw, 46vw"
              className="mt-4 h-auto w-full border border-ink/15"
            />
            <p className="caption mt-2.5 border-t border-ink/20 pt-2 text-ink-soft">
              {panel.caption}
            </p>
          </div>
        ))}
      </div>

      <figcaption className="caption mt-5 max-w-[62ch] border-t border-ink/25 pt-2.5 text-ink-soft">
        <strong className="font-bold text-ink">איור 1:</strong> זווית הגוף
        בישיבה לעומת כריעה, והשפעתה על מעבר היציאה. ככל שכיפוף הירך גדול
        יותר — כך הזווית הרקטואנלית ישרה יותר, ופחות עומס נדרש כדי לרוקן את
        המעי.
      </figcaption>
    </figure>
  );
}
