# MedLogic — Design System & Direction

Read this before touching any UI.

## The job

Hebrew (RTL) landing page. One goal: the visitor leaves **name + phone** for a
callback. Audience: Israelis 45+, embarrassed about the problem (constipation,
hemorrhoids), suspicious of hype, mostly on mobile. Every design decision is
judged by: does it make a 60-year-old trust this enough to type their phone number?

## Direction

**Bold, product-led, warm.** Deep forest green as the brand ground, coral as the
single action colour, oversized tight Hebrew display type, generous radii, real
photography at scale, real depth instead of borders.

Three earlier attempts died here, all of them the same look under different
names: **warm cream/bone ground + high-contrast display serif + hairline rules +
figure captions + drop caps + newspaper columns.** That is one of the three
clusters AI design collapses into by default, and deriving it from the product
photo *feels* like a justification but is not. Do not go back there. Specifically
banned: cream/bone/newsprint grounds, hairline rules as the primary structure,
`איור 1:` figure captions as a layout motif, drop caps, multi-column body text.

Also previously rejected by the owner: hand-rolled stick-figure illustrations,
AI-generated imagery **of the product** (it renders incoherently every time —
generated *anatomy* with no product in frame is fine), and cropped or greyscale
press clippings (show them whole or not at all).

## Non-negotiable content facts

- Complete kit: dedicated **low ceramic toilet (~20 cm)** + step device above it.
  Not an add-on for a normal toilet. **No handles.**
- Invented by Dr. Dov (Berko) Sikirov, M.D. — 6 peer-reviewed papers, international patent.
- Never promise a cure. Use מסייע / עשוי / תורם.
- The doctor's photograph is his real photo. **Never AI-retouch or replace a real
  person's photograph.**

## Colour

Tokens live in `app/globals.css`. Three grounds, one action:

| Ground | Token | Used for |
| --- | --- | --- |
| Canvas | `--canvas` | the default; every long-form content section |
| Green | `--green` | loud punctuation — **at most four blocks per page** |
| Ink | `--ink` | the footer (the trust strip is a light card — a dark bar under the dark hero read as one heavy mass) |

- **Coral (`--action`) is reserved exclusively for the primary action.** If coral
  appears on something that is not clickable, it is a bug.
- Mint (`--mint`, `--mint-wash`) is the quiet tint: kickers, wash panels,
  accents on green. It is never an action.
- The four green blocks are: hero, the kit, the mid-page CTA, the final form.
  Adding a fifth means removing one.

## Type

Two families only: **Google Sans** (body/UI, `font-sans`) and **Heebo** (display,
`font-display`). No other font, ever.

- Google Sans is a variable font, weights 400–700. Its axis stops at 700, so
  **every display weight above 700 must be Heebo** — `display-1/2/3` and `kicker`
  set the family themselves for exactly this reason.
- Hebrew has no italics and no small-caps — never fake them.
- Body floor is 18px; ledes 19px. Measure 60–75 characters.
- Latin runs (`90°`, `M.D.`, journal names, `P < 0.0001`) must sit inside
  `.ltr-isolate` or they flip.
- Build a real display scale. If the h1 and the section h2 look the same size,
  there is no hierarchy.

## Banned patterns (these are what "AI slop" means here)

1. Ghost/decorative numerals behind headings (`01`, `02`, …).
2. Symmetric grids of feature cards with thin line icons in pale circles.
3. Rows of equal big-number "stat" tiles.
4. Alternating full-width colour bands, one idea per band, down the whole page.
5. Centred eyebrow + centred heading + centred sub, repeated section after section.
6. Uniform vertical padding everywhere — no compression, no density, no arrival.
7. Emoji or generic stock iconography as content.
8. Decorative flourishes that carry no information.
9. Dead space that is not doing compositional work.
10. Anything from the rejected editorial cluster listed under **Direction**.

## What good looks like here

- **The product is the hero.** The two real photographs are the best assets in
  the project. Run them large, in colour, with the green behind them.
- **The angle is the one ownable idea.** 90° vs 35° is the whole argument. It
  should be impossible to leave the page without being able to draw it.
- **Real evidence beats adjectives.** Measured numbers from Sikirov 2003
  (0.85 min squatting vs 1.9–2.1 min sitting; 100% of 28 subjects faster;
  44% rated it "very easy" vs 9–20%) persuade more than any benefit copy.
- **Asymmetry and rhythm.** Loud green block, then quiet canvas, then loud again.
  Not everything gets equal weight.
- **Conversion mechanics stay intact:** a persistent way to act, a real form
  (name + phone + preferred call hour) reachable at all times, reassurance
  microcopy next to every button, and the sticky mobile bar.

## Accessibility (non-negotiable)

WCAG 2.2 AA, verified with axe: contrast, visible focus everywhere (including on
green and ink grounds), labelled fields with `aria-invalid` + `aria-describedby`,
skip link, `prefers-reduced-motion`, tap targets ≥ 44px, no text under 15px.

Coral is a **fill only**, never coloured text on canvas, and everything placed
on it — label text and icons alike — is `--ink`, never white. White on this
coral is 2.84:1 and fails AA at every weight; ink on it is 6.5:1. Any vibrant
coral fails with white, so darkening the text is the fix, not darkening the
coral.

## Technical constraints

- Next.js 16 App Router + Tailwind v4 (`@theme inline` tokens, `@utility`).
  Read `node_modules/next/dist/docs/` before using an API you are unsure about.
- Logical properties only (`ms/me`, `ps/pe`, `start/end`) — never left/right.
  Note that `inset-inline-*` on an absolutely positioned element resolves
  against **that element's own** `direction`; setting `direction: ltr` on a
  badge to keep digits in order will also flip which side it pins to.
- Server components by default; `"use client"` only where interaction demands it.
- Images through `next/image` with real `sizes`. No layout shift.
- No new dependencies without a reason that survives review. The ones that
  have: **Drizzle + postgres.js**, because the schema then lives in git
  (`lib/db/schema.ts`) instead of in a dashboard, which is what makes the
  database reproducible. Runtime connections go through the pooled
  `DATABASE_URL` with `prepare: false`; migrations use `DIRECT_URL`.
