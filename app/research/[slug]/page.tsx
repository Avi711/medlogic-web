import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PaperReader from "@/components/PaperReader";
import Footer from "@/components/sections/Footer";
import { getPaper, getPapers } from "@/lib/papers";
import { paperGraph } from "@/lib/seo";

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
  const path = `/research/${paper.slug}`;
  return {
    // Root layout appends " | MedLogic" via its title template.
    title: paper.titleEn,
    description: paper.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: paper.titleEn,
      description: paper.summary,
      publishedTime: String(paper.year),
      authors: ["Dr. Dov Sikirov"],
      images: [{ url: "/images/doctor.jpg", width: 480, height: 720, alt: "ד״ר דב סיקירוב" }],
    },
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
      <JsonLd data={paperGraph(paper)} />
      <Header />
      <main id="main" className="bg-canvas-sink py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#research"
            className="font-semibold text-green underline-offset-4 hover:underline"
          >
            → חזרה לכל המחקרים
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">            <article className="card px-5 py-8 shadow-card sm:px-10 sm:py-12 lg:px-14">
              <header dir="ltr" className="text-left">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                    {paper.journal}
                  </p>
                  <span className="rounded-full bg-mint-wash px-3 py-1 text-sm font-semibold text-green">
                    Peer-reviewed · {paper.year}
                  </span>
                </div>

                <h1 className="mt-8 max-w-[26ch] font-display text-[2rem] font-black leading-[1.08] tracking-[-0.035em] text-ink sm:text-[2.5rem]">
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
              <div className="card p-6">
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

              <div className="card p-6">
                <p className="font-display text-lg font-bold text-ink">
                  רוצים לדעת אם מתקן הכריעה מתאים לכם?
                </p>
                <p className="mt-2 text-base text-ink-soft">
                  השאירו פרטים ונחזור אליכם לשיחה קצרה, בלי התחייבות.
                </p>
                <Link
                  href="/#form"
                  className="btn mt-4 w-full"
                >
                  השאירו טלפון — נחזור אליכם
                </Link>
              </div>

              <nav
                aria-label="מחקרים נוספים"
                className="card p-6"
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
                          className="block text-start text-base font-semibold text-green group-hover:underline"
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
      className="mt-6 flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border-2 border-green px-4 py-3 font-bold text-green transition-colors hover:bg-green hover:text-on-dark"
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
