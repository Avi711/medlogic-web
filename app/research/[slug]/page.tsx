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

  return (
    <>
      <Header />
      <main id="main" className="bg-paper-deep py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/#research"
            className="font-semibold text-pine underline-offset-4 hover:underline"
          >
            → חזרה לכל המחקרים
          </Link>

          {/* The article is presented as a printed offprint — a paper on paper. */}
          <article className="mt-6 border border-line bg-card px-5 py-8 shadow-card sm:px-10 sm:py-12">
            <header dir="ltr" className="text-left">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  {paper.journal}
                </p>
                <span className="rounded-sm bg-sage-wash px-2 py-0.5 text-sm font-semibold text-pine">
                  Peer-reviewed · {paper.year}
                </span>
              </div>

              <h1 className="mt-8 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {paper.titleEn}
              </h1>
              <p dir="rtl" className="mt-3 text-right font-serif text-xl text-ink-soft">
                {paper.title}
              </p>

              {paper.authors.length > 0 && (
                <p className="mt-6 text-lg font-semibold text-ink">
                  {paper.authors.join(", ")}
                </p>
              )}
              <div className="mt-8 border-b border-line" />
            </header>

            <div className="pt-8">
              <PaperReader bodyHe={paper.bodyHe} bodyEn={paper.bodyEn} />
            </div>
          </article>

          <aside className="mt-8 rounded-md border border-line bg-card p-6 sm:p-8">
            <p className="font-serif text-xl font-bold text-ink">
              רוצים לדעת אם מתקן הכריעה מתאים לכם?
            </p>
            <p className="mt-2 text-ink-soft">
              השאירו פרטים ונחזור אליכם לשיחה קצרה, בלי התחייבות.
            </p>
            <Link
              href="/#form"
              className="mt-5 inline-block rounded-md bg-clay px-6 py-3 font-bold text-white transition-colors hover:bg-clay-deep"
            >
              לשיחת ייעוץ חינם
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
