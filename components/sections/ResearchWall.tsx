import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getPapers } from "@/lib/papers";

/** Slight alternating rotations — documents laid on a desk. */
const ROTATIONS = ["-rotate-1", "rotate-1", "rotate-0"];

export default function ResearchWall() {
  const papers = getPapers();

  return (
    <section id="research" className="scroll-mt-20 bg-paper-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="המחקר" title="לא מבטיחים. מוכיחים." />
        <p className="-mt-6 mb-10 max-w-[42rem] text-ink-soft sm:mb-14">
          מאחורי מתקן הכריעה עומדות עשרות שנות מחקר של ד&quot;ר סיקירוב — שישה
          מאמרים שפורסמו בכתבי עת רפואיים בינלאומיים עם ביקורת עמיתים. הנה הם,
          בשפה פשוטה:
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, i) => (
            <li key={paper.slug}>
              <Reveal className="h-full">
                <Link
                  href={`/research/${paper.slug}`}
                  className={`block h-full transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
                    ROTATIONS[i % ROTATIONS.length]
                  }`}
                >
                  <article className="flex h-full flex-col border border-line bg-card p-6 shadow-card">
                    <p className="text-sm font-semibold text-ink-soft">
                      <span className="ltr-isolate">{paper.journal}</span>
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold leading-snug text-pine">
                      <span className="ltr-isolate text-start block" dir="ltr">
                        {paper.titleEn}
                      </span>
                    </h3>
                    <p className="mt-3 grow text-base text-ink-soft">
                      {paper.summary}
                    </p>
                    <span className="mt-4 font-semibold text-clay">
                      למאמר המלא ←
                    </span>
                  </article>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base text-ink-soft">
          את המאמרים המלאים אפשר למצוא גם במאגרים הרפואיים הבינלאומיים
          (PubMed).
        </p>
      </div>
    </section>
  );
}
