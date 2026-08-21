"use client";

import { useState } from "react";

type ThumbQuality = "maxresdefault" | "sddefault";

/**
 * A video without a custom thumbnail has no maxresdefault.jpg: YouTube answers
 * 404 with a grey placeholder image, which the browser still renders — so the
 * downgrade has to be triggered by the tell-tale 120px width, not by onError.
 */
const PLACEHOLDER_THUMB_WIDTH = 200;

/**
 * Click-to-load YouTube embed — no third-party requests until the
 * visitor chooses to play.
 */
export default function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbQuality, setThumbQuality] = useState<ThumbQuality>("maxresdefault");

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] bg-ink">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&hl=he`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] bg-ink shadow-card"
      aria-label={`הפעלת סרטון: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnail, remote domain not worth configuring */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/${thumbQuality}.jpg`}
        alt=""
        loading="lazy"
        onError={() => setThumbQuality("sddefault")}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth < PLACEHOLDER_THUMB_WIDTH) {
            setThumbQuality("sddefault");
          }
        }}
        className="h-full w-full object-cover opacity-90 transition-[transform,opacity] duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-action text-ink shadow-action transition-transform duration-[140ms] group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 -translate-x-0.5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
