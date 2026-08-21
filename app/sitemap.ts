import type { MetadataRoute } from "next";
import { getPapers } from "@/lib/papers";
import { CONTENT_UPDATED, copy } from "@/lib/seo";
import { site } from "@/lib/site";

const abs = (path: string) => `${site.domain}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_UPDATED;
  return [
    {
      url: site.domain,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      // Image + video extensions: these are the assets we want found in
      // Google Images / video results, not the decorative ones.
      images: [
        abs("/images/product-hero.jpg"),
        abs("/images/product-bathroom.jpg"),
        abs("/images/doctor.jpg"),
        abs("/images/illu-sitting.jpg"),
        abs("/images/illu-squat.jpg"),
      ],
      videos: [
        {
          title: copy.video.title,
          thumbnail_loc: `https://i.ytimg.com/vi/${site.youtubeVideoId}/hqdefault.jpg`,
          description: copy.video.description,
          player_loc: `https://www.youtube-nocookie.com/embed/${site.youtubeVideoId}`,
        },
      ],
    },
    ...getPapers().map((paper) => ({
      url: abs(`/research/${paper.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: abs("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/accessibility"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
