"use client";

import { useState } from "react";
import PaperBody from "@/components/PaperBody";

/** Language toggle between the Hebrew translation and the English original. */
export default function PaperReader({
  bodyHe,
  bodyEn,
}: {
  bodyHe: string;
  bodyEn: string;
}) {
  const [lang, setLang] = useState<"he" | "en">("he");
  const hasBoth = Boolean(bodyHe && bodyEn);

  return (
    <div>
      {hasBoth && (
        <div role="group" aria-label="בחירת שפת המאמר" className="mb-8 flex gap-2">
          <ToggleButton active={lang === "he"} onClick={() => setLang("he")}>
            עברית
          </ToggleButton>
          <ToggleButton active={lang === "en"} onClick={() => setLang("en")}>
            English
          </ToggleButton>
        </div>
      )}
      {lang === "he" && bodyHe ? (
        <PaperBody markdown={bodyHe} dir="rtl" />
      ) : (
        <PaperBody markdown={bodyEn} dir="ltr" />
      )}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-md border px-5 py-2 font-semibold transition-colors ${
        active
          ? "border-pine bg-pine text-paper"
          : "border-line bg-card text-ink-soft hover:border-pine hover:text-pine"
      }`}
    >
      {children}
    </button>
  );
}
