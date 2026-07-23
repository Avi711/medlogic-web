"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "איך זה עובד" },
  { href: "/#research", label: "המחקר" },
  { href: "/#faq", label: "שאלות נפוצות" },
];

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
      className={`sticky top-0 z-50 bg-paper border-b border-sage-wash transition-shadow duration-200 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="font-display text-2xl font-bold text-pine sm:text-[1.75rem]">
            {site.name}
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-ink-soft hover:text-pine transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {site.phoneE164 && site.phoneDisplay && (
            <a
              href={`tel:${site.phoneE164}`}
              className="ltr-isolate hidden sm:inline font-bold text-pine text-lg"
            >
              {site.phoneDisplay}
            </a>
          )}
          <Link
            href="/#form"
            className="whitespace-nowrap rounded-md bg-clay px-3 py-2.5 text-base font-bold text-white transition-colors hover:bg-clay-deep sm:px-5 sm:text-lg"
          >
            <span className="sm:hidden">השאירו טלפון</span>
            <span className="hidden sm:inline">השאירו טלפון — נחזור אליכם</span>
          </Link>

          <details ref={menuRef} className="relative md:hidden">
            <summary
              aria-label="תפריט ניווט"
              className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-md border border-line [&::-webkit-details-marker]:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-pine"
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
              className="absolute start-auto end-0 top-full mt-2 w-52 rounded-md border border-line bg-card p-2 shadow-card"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => menuRef.current?.removeAttribute("open")}
                  className="block rounded-md px-4 py-3 font-semibold text-ink hover:bg-sage-wash"
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

