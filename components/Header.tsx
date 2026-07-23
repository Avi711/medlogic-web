"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "איך זה עובד" },
  { href: "/#research", label: "המחקרים" },
  { href: "/#doctor", label: "ד״ר סיקירוב" },
  { href: "/#faq", label: "שאלות נפוצות" },
];

/** The masthead: wordmark, standing rules, contents line, one action. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when tapping anywhere outside it
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(e.target as Node)) {
        menu.removeAttribute("open");
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-4 border-double border-ink bg-paper ${
        scrolled ? "shadow-[0_10px_20px_-18px_rgba(32,36,31,0.9)]" : ""
      }`}
    >
      <div className="shell flex h-[66px] items-center justify-between gap-4 sm:h-[74px]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="font-display text-[1.6rem] font-black tracking-[-0.03em] text-ink sm:text-[1.9rem]">
            {site.name}
          </span>
          <span
            aria-hidden="true"
            className="mx-1 hidden h-8 w-px bg-ink/25 lg:block"
          />
          <span className="hidden max-w-[15ch] text-[0.9375rem] leading-tight text-ink-soft lg:block">
            מתקן הכריעה של ד״ר סיקירוב
          </span>
        </Link>

        <nav
          aria-label="ניווט ראשי"
          className="hidden items-center md:flex"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-[1.0625rem] font-semibold text-ink-soft transition-colors hover:text-pine ${
                i > 0 ? "border-s border-line" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {site.phoneE164 && site.phoneDisplay && (
            <a
              href={`tel:${site.phoneE164}`}
              className="ltr-isolate hidden text-lg font-bold text-pine sm:inline"
            >
              {site.phoneDisplay}
            </a>
          )}
          <Link
            href="/#form"
            className="flex min-h-11 items-center whitespace-nowrap bg-clay px-3.5 text-[1.0625rem] font-bold text-[#fff6ee] transition-colors hover:bg-clay-deep sm:px-5"
          >
            <span className="sm:hidden">השאירו טלפון</span>
            <span className="hidden sm:inline">השאירו טלפון — נחזור אליכם</span>
          </Link>

          <details ref={menuRef} className="relative md:hidden">
            <summary
              aria-label="תפריט ניווט"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-ink/40 [&::-webkit-details-marker]:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-ink"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="ניווט נייד"
              className="absolute end-0 start-auto top-full mt-2 w-56 border-2 border-ink bg-card"
            >
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => menuRef.current?.removeAttribute("open")}
                  className={`block px-4 py-3.5 font-semibold text-ink hover:bg-sage-wash ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
