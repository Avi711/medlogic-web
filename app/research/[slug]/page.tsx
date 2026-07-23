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
    title: `${paper.title} | MedLogic`,
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
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/#research"
          className="font-semibold text-pine underline-offset-4 hover:underline"
        >
          → חזרה לכל המחקרים
        </Link>

        <header className="mt-6 border-b border-line pb-8">
          <p className="text-sm font-semibold text-ink-soft">
            <span className="ltr-isolate">{paper.journal}</span>
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {paper.title}
          </h1>
          <p className="mt-2 font-serif text-xl text-ink-soft" dir="ltr">
            {paper.titleEn}
          </p>
          {paper.authors.length > 0 && (
            <p className="mt-4 text-ink-soft">{paper.authors.join(", ")}</p>
          )}
        </header>

        <div className="py-10">
          <PaperReader bodyHe={paper.bodyHe} bodyEn={paper.bodyEn} />
        </div>

        <aside className="rounded-md border border-line bg-paper-deep p-6 sm:p-8">
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
      </main>
      <Footer />
    </>
  );
}
