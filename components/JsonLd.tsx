import { jsonLd } from "@/lib/seo";

/**
 * Renders a JSON-LD graph. Server component; the output lands in the initial
 * HTML, which is what Googlebot and every AI crawler actually read.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
