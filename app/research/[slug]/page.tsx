import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PaperReader from "@/components/PaperReader";
import Footer from "@/components/sections/Footer";
import { getPaper, getPapers } from "@/lib/papers";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPapers().map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const paper = getPaper((await params).slug);
  if (!paper) return {};
  return {
    title: `${paper.titleEn} | MedLogic`,
    description: paper.summary,
  };
}

export default async function PaperPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const paper = getPaper((await params).slug);
  if (!paper) notFound();
  const otherPapers = getPapers().filter((p) => p.slug !== paper.slug);

  return (
    <>
      <Header />
      <main id="main" className="bg-paper-deep py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#research"
            className="font-semibold text-pine underline-offset-4 hover:underline"
          >
            → חזרה לכל המחקרים
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            {/* The article is presented as a printed offprint — a paper on paper. */}
            <article className="border border-line bg-card px-5 py-8 shadow-card sm:px-10 sm:py-12 lg:px-14">
              <header dir="ltr" className="text-left">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                    {paper.journal}
                  </p>
                  <span className="rounded-sm bg-sage-wash px-2 py-0.5 text-sm font-semibold text-pine">
                    Peer-reviewed · {paper.year}
                  </span>
                </div>

                <h1 className="mt-8 max-w-[26ch] font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  {paper.titleEn}
                </h1>
                <p
                  dir="rtl"
                  className="mt-3 text-right font-display text-xl text-ink-soft"
                >
                  {paper.title}
                </p>

                {paper.authors.length > 0 && (
                  <p className="mt-6 text-lg font-semibold text-ink">
                    {paper.authors.join(", ")}
                  </p>
                )}
                <div className="mt-8 border-b border-line" />
              </header>

              {/* Cap the measure so the text stays readable on wide screens. */}
              <div className="pt-8 [&_p]:max-w-[70ch]">
                <PaperReader bodyHe={paper.bodyHe} bodyEn={paper.bodyEn} />
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="border border-line bg-card p-6">
                <h2 className="font-display text-lg font-bold text-ink">
                  פרטי הפרסום
                </h2>
                <dl className="mt-4 space-y-3 text-base">
                  <div>
                    <dt className="font-semibold text-ink">כתב העת</dt>
                    <dd className="ltr-isolate text-ink-soft">{paper.journal}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">שנת פרסום</dt>
                    <dd className="ltr-isolate text-ink-soft">{paper.year}</dd>
                  </div>
                  {paper.authors.length > 0 && (
                    <div>
                      <dt className="font-semibold text-ink">מחברים</dt>
                      <dd className="ltr-isolate text-ink-soft">
                        {paper.authors.join(", ")}
                      </dd>
                    </div>
                  )}
                </dl>

                {paper.pdf && <PdfLink href={paper.pdf} />}
              </div>

              <div className="border border-line bg-card p-6">
                <p className="font-display text-lg font-bold text-ink">
                  רוצים לדעת אם מתקן הכריעה מתאים לכם?
                </p>
                <p className="mt-2 text-base text-ink-soft">
                  השאירו פרטים ונחזור אליכם לשיחה קצרה, בלי התחייבות.
                </p>
                <Link
                  href="/#form"
                  className="mt-4 inline-block rounded-md bg-clay px-5 py-3 font-bold text-white transition-colors hover:bg-clay-deep"
                >
                  השאירו טלפון — נחזור אליכם
                </Link>
              </div>

              <nav
                aria-label="מחקרים נוספים"
                className="border border-line bg-card p-6"
              >
                <h2 className="font-display text-lg font-bold text-ink">
                  מחקרים נוספים
                </h2>
                <ul className="mt-4 space-y-4">
                  {otherPapers.map((other) => (
                    <li key={other.slug}>
                      <Link href={`/research/${other.slug}`} className="group block">
                        <span
                          dir="ltr"
                          className="block text-start text-base font-semibold text-pine group-hover:underline"
                        >
                          {other.titleEn}
                        </span>
                        <span className="ltr-isolate mt-0.5 block text-sm text-ink-soft">
                          {other.journal}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Download link for the scanned original offprint, when one exists. */
function PdfLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 flex items-center justify-center gap-2 rounded-md border-2 border-pine px-4 py-3 font-bold text-pine transition-colors hover:bg-pine hover:text-paper"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
      </svg>
      המאמר המקורי <span className="ltr-isolate">(PDF)</span>
    </a>
  );
}
