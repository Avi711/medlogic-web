import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getPapers } from "@/lib/papers";

/** The bibliography. Six references, numbered, hanging, hairline-ruled. */
export default function ResearchWall() {
  const papers = getPapers();

  return (
    <section id="research" className="shell scroll-mt-24 py-14 sm:py-20">
      <SectionHeading
        eyebrow="המחקר"
        title="לא מבטיחים. מוכיחים."
        meta="6 מאמרים · ביקורת עמיתים"
        lede="מאחורי מתקן הכריעה עומדות עשרות שנות מחקר של ד״ר סיקירוב — שישה מאמרים שפורסמו בכתבי עת רפואיים בין־לאומיים עם ביקורת עמיתים. הנה הם, בשפה פשוטה:"
      />

      <ol className="mt-9 border-t-2 border-ink">
        {papers.map((paper, i) => (
          <li key={paper.slug} className="border-b border-ink/20">
            <Link
              href={`/research/${paper.slug}`}
              className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 py-5 lg:grid-cols-[2.75rem_minmax(0,6fr)_minmax(0,6fr)] lg:gap-x-10"
            >
              <span className="ltr-isolate tnum font-display text-[1.5rem] font-black leading-none text-pine lg:text-[1.875rem]">
                {i + 1}
              </span>

              <span className="block">
                <span
                  dir="ltr"
                  className="block text-start font-display text-[1.0625rem] font-bold leading-snug text-ink group-hover:underline lg:text-[1.1875rem]"
                >
                  {paper.titleEn}
                </span>
                <span className="ltr-isolate mt-1.5 block text-[0.9375rem] text-ink-soft">
                  {paper.journal}
                </span>
              </span>

              <span className="col-start-2 mt-3 block lg:col-start-3 lg:mt-0">
                <span className="block text-[1.0625rem] leading-relaxed text-ink-soft">
                  {paper.summary}
                </span>
                <span className="mt-2 block text-[0.9375rem] font-semibold text-clay">
                  למאמר המלא ←
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="caption mt-6 text-ink-soft">
        את המאמרים המלאים אפשר למצוא גם במאגרים הרפואיים הבין־לאומיים{" "}
        <span className="ltr-isolate">(PubMed)</span>.
      </p>
    </section>
  );
}
