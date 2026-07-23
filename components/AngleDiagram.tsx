import Image from "next/image";
import sittingIllustration from "@/public/images/illu-sitting.jpg";
import squatIllustration from "@/public/images/illu-squat.jpg";

/**
 * Two-panel anatomical comparison: sitting (90°, kinked passage, clay/red)
 * vs. full squat (35°, open passage, pine). RTL: the problem panel renders
 * first so it sits on the right and is read first.
 */
const PANELS = [
  {
    image: sittingIllustration,
    alt: "איור אנטומי: בישיבה על אסלה צינור היציאה מתקפל בזווית חדה",
    angle: "90°",
    angleClass: "bg-error/10 text-error",
    title: "בישיבה",
    titleClass: "text-error",
    caption: "המעבר מקופל — היציאה דורשת מאמץ",
  },
  {
    image: squatIllustration,
    alt: "איור אנטומי: בכריעה מלאה צינור היציאה מתיישר ונפתח",
    angle: "35°",
    angleClass: "bg-pine/10 text-pine",
    title: "בכריעה",
    titleClass: "text-pine",
    caption: "המעבר פתוח — היציאה קלה וטבעית",
  },
];

export default function AngleDiagram() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-8">
      {PANELS.map((panel) => (
        <figure
          key={panel.title}
          className="relative overflow-hidden rounded-sm border border-line bg-card shadow-card"
        >
          <span
            className={`ltr-isolate absolute end-3 top-3 rounded-md px-2.5 py-1 font-serif text-xl font-black sm:text-2xl ${panel.angleClass}`}
          >
            {panel.angle}
          </span>
          <Image
            src={panel.image}
            alt={panel.alt}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-auto w-full"
          />
          <figcaption className="px-3 pb-5 text-center sm:px-5">
            <span className={`block font-serif text-xl font-bold ${panel.titleClass}`}>
              {panel.title}
            </span>
            <span className="mt-1 block text-base text-ink-soft">
              {panel.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
