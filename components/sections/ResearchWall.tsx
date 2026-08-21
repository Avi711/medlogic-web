import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getPapers } from "@/lib/papers";

export default function ResearchWall() {
  const papers = getPapers();

  return (
    <section id="research" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <SectionHeading
        eyebrow="המחקר"
        title="לא מבטיחים. מוכיחים."
        meta="6 פרסומים · 1987–2021"
        lede="מאחורי מתקן הכריעה עומדות עשרות שנות מחקר של ד״ר סיקירוב — שישה מאמרים שפורסמו בכתבי עת רפואיים בין־לאומיים. הנה הם, בשפה פשוטה:"
      />

      <ol className="mt-12 grid gap-4">
        {papers.map((paper, i) => (
          <li key={paper.slug}>
            <Link
              href={`/research/${paper.slug}`}
              className="card group grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-5 p-6 transition-shadow hover:shadow-card sm:p-7 lg:grid-cols-[2.75rem_minmax(0,6fr)_minmax(0,6fr)] lg:gap-x-10"
            >
              <span
                aria-hidden="true"
                className="ltr-isolate tnum flex h-11 w-11 items-center justify-center rounded-full bg-mint-wash font-display text-[1.25rem] font-black text-green"
              >
                {i + 1}
              </span>

              <span className="block">
                <span
                  dir="ltr"
                  className="block text-start font-display text-[1.125rem] font-black leading-snug text-ink group-hover:underline"
                >
                  {paper.titleEn}
                </span>
                <span className="ltr-isolate caption mt-1.5 block">
                  {paper.journal}
                </span>
              </span>

              <span className="col-start-2 mt-4 block lg:col-start-3 lg:mt-0">
                <span className="block leading-relaxed text-ink-soft">
                  {paper.summary}
                </span>
                <span className="mt-2 block font-semibold text-green">
                  למאמר המלא ←
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="caption mt-6">
        את המאמרים המלאים אפשר למצוא גם במאגרים הרפואיים הבין־לאומיים{" "}
        <span className="ltr-isolate">(PubMed)</span>.
      </p>
    </section>
  );
}
