"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "איך זה עובד" },
  { href: "/#evidence", label: "המחקר" },
  { href: "/#doctor", label: "ד״ר סיקירוב" },
  { href: "/#faq", label: "שאלות נפוצות" },
];

/**
 * `heroId` is the id of a section that carries its own primary action — the
 * homepage hero. Two coral buttons in one viewport reads as shouting, so while
 * that section is on screen this action stays quiet and takes over as the loud
 * one once it scrolls away. Pages without such a section omit the prop and get
 * the loud action throughout.
 */
export default function Header({ heroId }: { heroId?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(Boolean(heroId));
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = heroId && document.getElementById(heroId);
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setHeroVisible(entry.isIntersecting)
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  // Close the mobile menu when tapping anywhere outside it.
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
      className={`sticky top-0 z-50 bg-canvas/85 backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--line),0_12px_28px_-24px_rgba(14,26,20,0.55)]" : ""
      }`}
    >
      {/*
        Logo and nav are one group on the start side, actions on the end side.
        Spreading all three with justify-between leaves the nav floating in the
        middle of a wide screen, which reads as accidental rather than composed.
      */}
      <div className="shell flex h-[70px] items-center gap-4 sm:h-[82px]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="font-display text-[1.55rem] font-black tracking-[-0.045em] text-ink sm:text-[1.8rem]">
            {site.name}
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 font-semibold text-ink-soft transition-colors hover:bg-mint-wash hover:text-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 ms-auto">
          {site.phoneE164 && site.phoneDisplay && (
            <a
              href={`tel:${site.phoneE164}`}
              className="ltr-isolate hidden font-display text-lg font-bold text-green hover:underline sm:inline"
            >
              {site.phoneDisplay}
            </a>
          )}
          {/*
            No action here below md: the sticky bottom bar already carries one,
            in thumb reach, and stacking both put three coral buttons on one
            phone screen. Above md there is no sticky bar, so this is the
            persistent action.
          */}
          <Link
            href="/#form"
            className={`max-md:hidden min-h-12 px-6 text-[1.0625rem] ${
              heroVisible ? "btn-quiet" : "btn"
            }`}
          >
            השאירו טלפון — נחזור אליכם
          </Link>

          <details ref={menuRef} className="relative lg:hidden">
            <summary
              aria-label="תפריט ניווט"
              className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full border-2 border-line-strong text-ink [&::-webkit-details-marker]:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="ניווט נייד"
              className="card absolute end-0 start-auto top-full mt-3 w-60 overflow-hidden p-2 shadow-lift"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => menuRef.current?.removeAttribute("open")}
                  className="block rounded-xl px-4 py-3.5 font-semibold text-ink hover:bg-mint-wash"
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
