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

## Content

- `content/papers/*.md` — the six published papers (Hebrew + English)
  rendered at `/research/[slug]`; index and one-line summaries live in
  `lib/papers.ts`.
- Site-wide contact details: `lib/site.ts`.
