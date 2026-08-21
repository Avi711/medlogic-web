import { site } from "@/lib/site";

/*
  A hand-written robots.txt instead of Next's `robots.ts` convention: the
  typed convention cannot emit comments or the `Content-Signal` line, and for
  this site being found — by search engines and by AI assistants alike — is
  the whole point. Only the admin area and the lead API are off limits.

  Per RFC 9309 a group may list several User-agent lines; unknown directives
  (Content-Signal) are ignored by parsers that do not know them.
*/

/** Documented AI crawlers, by operator. Training, search and on-demand fetch. */
const AI_AGENTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini / AI training token — Googlebot itself is covered by *)
  "Google-Extended",
  // Microsoft / Bing (Copilot, and the index behind ChatGPT search)
  "Bingbot",
  // Apple (Siri, Apple Intelligence)
  "Applebot",
  "Applebot-Extended",
  // Meta
  "meta-externalagent",
  "Meta-ExternalFetcher",
  // Amazon (Alexa)
  "Amazonbot",
  // DuckDuckGo (DuckAssist)
  "DuckAssistBot",
  // Mistral, Cohere, You.com, Common Crawl (feeds many open models)
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
  "CCBot",
];

const DISALLOW = ["/admin", "/api/"];

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.domain.replace(/^https?:\/\//, "")} — robots.txt`,
    "# We want to be found: by search engines and by AI assistants alike.",
    "# Only the admin area and the lead API are off limits.",
    "",
    "User-agent: *",
    "Allow: /",
    ...DISALLOW.map((p) => `Disallow: ${p}`),
    "",
    "# AI crawlers — explicitly welcome to index, answer from, and learn from this site.",
    ...AI_AGENTS.map((ua) => `User-agent: ${ua}`),
    "Allow: /",
    ...DISALLOW.map((p) => `Disallow: ${p}`),
    "",
    "# Content Signals (contentsignals.org): search, AI answers and AI training are all permitted.",
    "Content-Signal: search=yes, ai-input=yes, ai-train=yes",
    "",
    "# Curated Markdown for language models:",
    `# ${site.domain}/llms.txt`,
    `# ${site.domain}/llms-full.txt`,
    "",
    `Sitemap: ${site.domain}/sitemap.xml`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
