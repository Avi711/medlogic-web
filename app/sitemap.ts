import type { MetadataRoute } from "next";
import { getPapers } from "@/lib/papers";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.domain}/accessibility`, changeFrequency: "yearly", priority: 0.2 },
    ...getPapers().map((paper) => ({
      url: `${site.domain}/research/${paper.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
