import type { MetadataRoute } from "next";
import { copy } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nameEn} — ${site.name}`,
    short_name: site.nameEn,
    description: copy.tagline,
    lang: "he",
    dir: "rtl",
    start_url: "/",
    display: "browser",
    background_color: "#f4f6f2",
    theme_color: "#0f3d2e",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
