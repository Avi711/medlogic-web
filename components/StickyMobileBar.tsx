"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Mobile bottom action bar: appears after the hero, hides while the final
 * form is on screen so it never covers it.
 */
export default function StickyMobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const forms = document.querySelectorAll("form");
    if (!hero) return;

    let pastHero = false;
    const visibleForms = new Set<Element>();
    const update = () => setShow(pastHero && visibleForms.size === 0);

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting;
      update();
    });
    // Hide near ANY lead form (mid-page and final) so the bar never covers
    // a form being filled in.
    const formObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleForms.add(entry.target);
        else visibleForms.delete(entry.target);
      }
      update();
    });
    heroObserver.observe(hero);
    forms.forEach((form) => formObserver.observe(form));
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return (
    <div
      inert={!show || undefined}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        {site.whatsapp && (
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              "שלום, אשמח לשמוע פרטים על מתקן הכריעה"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-whatsapp py-3.5 text-center font-bold text-white"
          >
            וואטסאפ
          </a>
        )}
        {site.phoneE164 ? (
          <a
            href={`tel:${site.phoneE164}`}
            className="flex-1 rounded-md bg-clay py-3.5 text-center font-bold text-white"
          >
            חייגו עכשיו
          </a>
        ) : (
          <Link
            href="/#form"
            className="flex-1 rounded-md bg-clay py-3.5 text-center font-bold text-white"
          >
            לשיחת ייעוץ חינם
          </Link>
        )}
      </div>
    </div>
  );
}
