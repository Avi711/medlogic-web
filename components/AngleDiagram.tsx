import Image from "next/image";
import {
  AngleOverlay,
  SITTING_READING,
  SQUAT_READING,
} from "@/components/Angle";
import sittingIllustration from "@/public/images/illu-sitting.jpg";
import squatIllustration from "@/public/images/illu-squat.jpg";

/**
 * The whole argument in two panels. The angle is drawn onto the body at its
 * true value, so the difference between 90° and 35° is the thing you actually
 * look at; the numeral sits in a corner badge beside the figure (the same
 * pill as the hero), never printed over the body.
 *
 * RTL: the problem panel renders first, so it sits on the right and is read
 * first. The overlay coordinates are measured against these exact 1200×1200
 * illustrations — replacing an image means re-measuring its reading in Angle.tsx.
 */
const PANELS = [
  {
    image: sittingIllustration,
    alt: "איור אנטומי: בישיבה על אסלה בגובה כיסא צינור היציאה מתקפל בזווית חדה",
    reading: SITTING_READING,
    tone: "muted" as const,
    angle: "90°",
    title: "בישיבה",
    caption: "המעבר מקופל — היציאה דורשת מאמץ",
    highlight: false,
  },
  {
    image: squatIllustration,
    alt: "איור אנטומי: בכריעה מלאה צינור היציאה מתיישר ונפתח",
    reading: SQUAT_READING,
    tone: "brand" as const,
    angle: "35°",
    title: "בכריעה",
    caption: "המעבר פתוח — היציאה קלה וטבעית",
    highlight: true,
  },
];

export default function AngleDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-7">
      {PANELS.map((panel) => (
        <figure
          key={panel.title}
          className={`overflow-hidden rounded-[var(--radius-lg)] ${
            panel.highlight ? "bg-mint" : "bg-canvas-sink"
          }`}
        >
          <div className="relative">
            <Image
              src={panel.image}
              alt={panel.alt}
              sizes="(min-width: 640px) 36vw, 92vw"
              className="h-auto w-full"
            />
            <AngleOverlay reading={panel.reading} tone={panel.tone} />
            {/* The reading, beside the body — the top-start corner is empty in both illustrations. */}
            <p
              className={`ltr-isolate absolute top-4 start-4 rounded-full bg-surface/95 px-4 py-1.5 font-display text-[1.75rem] font-black leading-none shadow-soft backdrop-blur-sm sm:top-5 sm:start-5 sm:px-5 sm:py-2 sm:text-[2.25rem] ${
                panel.highlight ? "text-green" : "text-ink-soft"
              }`}
            >
              {panel.angle}
            </p>
          </div>

          <figcaption className="px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
            <span
              className={`block font-display text-[1.25rem] font-black ${
                panel.highlight ? "text-green" : "text-ink"
              }`}
            >
              {panel.title}
            </span>
            <span className="caption mt-0.5 block">{panel.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
