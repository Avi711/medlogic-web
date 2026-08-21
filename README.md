# MedLogic — medlogic.co.il

Hebrew-native (RTL) lead-generation site for MedLogic's squatting-posture
device, built on the research of Dr. Dov Sikirov. Next.js App Router,
Tailwind CSS v4, no other runtime dependencies.

## Development

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Lead form

`POST /api/lead` validates submissions (name, Israeli phone, preferred
call hour, optional message) and forwards them to any of the following —
configure via environment variables:

| Variable | Purpose |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Generic JSON webhook (Make / Zapier / Google Apps Script / CRM) |
| `RESEND_API_KEY` | Resend API key for email delivery |
| `LEAD_EMAIL_TO` | Recipient address for lead emails |
| `LEAD_EMAIL_FROM` | Optional sender override (default `MedLogic <leads@medlogic.co.il>`) |

Without any of these set, leads are only logged to the server console —
set at least one before launch.

## Before launch

- Fill in the real phone / WhatsApp / email in `lib/site.ts` —
  phone-related UI stays hidden while these are empty.
- Configure a lead destination (see above).
- Replace `public/images/hero.jpg` if a real product photo becomes
  available (current image is an AI-generated ambience shot without the
  device).

## Search & AI discoverability

Everything a crawler or language model reads is generated from one set of
facts in `lib/seo.ts` (+ `lib/faq.ts`, `lib/press.ts`, `lib/papers.ts`):

| URL | Source | What it is |
| --- | --- | --- |
| `/robots.txt` | `app/robots.txt/route.ts` | Allows everything but `/admin` and `/api/`; names every documented AI crawler explicitly; `Content-Signal: search=yes, ai-input=yes, ai-train=yes` |
| `/sitemap.xml` | `app/sitemap.ts` | All public pages with `<lastmod>`, plus image and video extensions on the homepage |
| `/llms.txt`, `/llms-full.txt` | `app/llms*.txt/route.ts`, `lib/llms.ts` | Curated / full Markdown per llmstxt.org, with an explicit attribution licence |
| `/manifest.webmanifest` | `app/manifest.ts` | Web app manifest (name, icons, theme colour, RTL) |
| JSON-LD on `/` | `homeGraph()` | Organization, founder Person, WebSite, Product, VideoObject, FAQPage, WebPage, six ScholarlyArticles — one `@id`-linked graph |
| JSON-LD on `/research/*` | `paperGraph()` | ScholarlyArticle with journal/volume/issue/pages, BreadcrumbList |

Bump `CONTENT_UPDATED` in `lib/seo.ts` when public copy changes — it is the
sitemap `<lastmod>` and the "updated" line in llms.txt. Optional ownership
tokens: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` (see
`.env.example`). After launch: verify the domain in Google Search Console and
Bing Webmaster Tools and submit `/sitemap.xml` to both — Bing's index is what
ChatGPT search and Copilot read.

## Content

- `content/papers/*.md` — the six published papers (Hebrew + English)
  rendered at `/research/[slug]`; index and one-line summaries live in
  `lib/papers.ts`.
- Site-wide contact details: `lib/site.ts`.
