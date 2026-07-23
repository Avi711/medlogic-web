# MedLogic — Design System & Direction

Read this before touching any UI. It exists because without an explicit direction a
model converges on the statistical average of the web — which is exactly the
"AI slop" this project must not be.

## The job

Hebrew (RTL) landing page. One goal: the visitor leaves **name + phone** for a
callback. Audience: Israelis 45+, embarrassed about the problem (constipation,
hemorrhoids), suspicious of hype, mostly on mobile. Every design decision is
judged by: does it make a 60-year-old trust this enough to type their phone number?

## Non-negotiable content facts

- Complete kit: dedicated **low ceramic toilet (~20 cm)** + step device above it.
  Not an add-on for a normal toilet. **No handles.**
- Invented by Dr. Dov (Berko) Sikirov, M.D. — 6 peer-reviewed papers, international patent.
- Never promise a cure. Use מסייע / עשוי / תורם.
- The doctor's photograph is his real photo. **Never AI-retouch or replace a real
  person's photograph.** Product renders are allowed only when derived from the
  real product photo and captioned honestly (הדמיה).

## Type

Two families only: **Assistant** (body, `font-sans`) and **Heebo** (display,
`font-display`). No other font, ever.

- Hebrew has no italics and no small-caps — never fake them.
- Body ≥ 19px for this audience. Measure 60–75 characters.
- Latin runs (`90°`, `M.D.`, journal names, times, numbers with %) must sit inside
  `.ltr-isolate` or they flip.
- Build a real display scale. If the h1 and the section h2 look the same size,
  there is no hierarchy.

## Colour

Tokens live in `app/globals.css`. Discipline over variety:

- Ink on paper is the default. Pine (`--pine`) for structure and quiet emphasis.
- **Clay (`--clay`) is reserved exclusively for the primary action.** If clay
  appears on something that is not clickable, it is a bug.
- Amber/gold is a legacy accent. Do not add new gold. Prefer removing it.
- Dark sections (`bg-night`) are a deliberate, rare punctuation — at most two per page.

## Banned patterns (these are what "AI slop" means here)

Do not ship any of these, in any form:

1. Ghost/decorative numerals behind headings (`01`, `02`, …).
2. Three or more sections built from the same white rounded card with border + shadow.
3. Symmetric grids of feature cards with thin line icons in pale circles.
4. Big-number "stat blocks" (`0.85` / `100%` / `44%`) as a row of equal tiles.
5. Alternating full-width colour bands, one idea per band, for the whole page.
6. Centred eyebrow + centred heading + centred sub, repeated down the page.
7. Uniform vertical padding everywhere — no compression, no density, no arrival.
8. Emoji or generic stock iconography as content.
9. Decorative flourishes that carry no information.
10. Dead space that is not doing compositional work (an orphaned CTA in an empty half).

## What good looks like here

- **Editorial, not marketing.** The strongest surfaces in this project are the
  research offprint page and the 90°/35° figure with its `איור 1:` caption.
  Extend that language: rules, captions, figure numbers, real data, dense type.
- **The angle is the one ownable idea.** 90° vs 35° is the whole argument. It
  should be impossible to leave the page without being able to draw it.
- **Real evidence beats adjectives.** Measured numbers from Sikirov 2003
  (0.85 min squatting vs 1.9–2.1 min sitting; 100% of 28 subjects faster;
  44% rated it "very easy" vs 9–20%) are more persuasive than any benefit copy.
- **Asymmetry and compression.** Not everything gets equal weight. Some blocks
  are dense and quiet; one or two are loud.
- **Conversion mechanics stay intact:** a persistent way to act, a real form
  (name + phone + preferred call hour) reachable at all times, reassurance
  microcopy next to the button, and the sticky mobile bar.

## Accessibility (non-negotiable)

WCAG 2.2 AA, verified with axe: contrast, visible focus everywhere (including on
dark sections), labelled fields with `aria-invalid` + `aria-describedby`, skip
link, `prefers-reduced-motion`, tap targets ≥ 44px, no text under 16px except
captions and legal.

## Technical constraints

- Next.js 16 App Router + Tailwind v4 (`@theme inline` tokens, `@utility`).
  Read `node_modules/next/dist/docs/` before using an API you are unsure about.
- Logical properties only (`ms/me`, `ps/pe`, `start/end`) — never left/right.
- Server components by default; `"use client"` only where interaction demands it.
- Images through `next/image` with real `sizes`. No layout shift.
- No new dependencies without a reason that survives review.
