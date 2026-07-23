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
    const form = document.getElementById("form");
    if (!hero || !form) return;

    let pastHero = false;
    let formVisible = false;
    const update = () => setShow(pastHero && !formVisible);

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting;
      update();
    });
    const formObserver = new IntersectionObserver(([entry]) => {
      formVisible = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);
    formObserver.observe(form);
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return (
    <div
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
