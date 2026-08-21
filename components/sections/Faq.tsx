import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/lib/faq";

export default function Faq() {
  return (
    <section id="faq" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
        <SectionHeading
          eyebrow="שאלות ותשובות"
          title="שאלות ששואלים אותנו בטלפון"
          meta="7 שאלות"
          className="lg:sticky lg:top-32"
        />

        <div className="card overflow-hidden">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border-b border-line last:border-b-0">
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-start gap-4 px-6 py-5 font-display text-[1.125rem] font-black leading-snug text-ink transition-colors hover:text-green [&::-webkit-details-marker]:hidden sm:px-8">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  className="ms-auto h-6 w-6 shrink-0 text-green transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="px-6 pb-6 sm:px-8">
                <p className="max-w-[62ch] leading-relaxed text-ink-soft">{item.a}</p>
                {item.cta && (
                  <Link href="/#form" className="btn mt-5">
                    לקבלת מחיר מדויק בשיחה קצרה ←
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
