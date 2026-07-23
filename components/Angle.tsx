/**
 * The angle — the page's one ownable idea, drawn once as a system.
 *
 * Geometry (shared by every instance on the page):
 *   vertex = the hip · one ray = the trunk · the other ray = the thighs
 *   90° (sitting)  is drawn in graphite — a dead, closed reading
 *   35° (squatting) is drawn in pine    — the page's only signal colour
 *
 * Everything is hand-authored vector work: hairlines, arcs, a right-angle
 * square, a hatched wedge and measured readings. No decoration that does not
 * carry a measurement.
 */

/** Diagonal hairline hatch, declared once per SVG instance. */
function Hatch({ id }: { id: string }) {
  return (
    <defs>
      <pattern
        id={id}
        width="9"
        height="9"
        patternTransform="rotate(45)"
        patternUnits="userSpaceOnUse"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="9"
          stroke="var(--pine)"
          strokeWidth="1"
          opacity="0.32"
        />
      </pattern>
    </defs>
  );
}

/**
 * The hero plate. Both readings share one vertex so the difference between
 * them is the whole picture: 90° opens flat, 35° folds the thighs up.
 */
export function AngleFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 372"
      className={className}
      role="img"
      aria-labelledby="angle-figure-title"
      fill="none"
    >
      <title id="angle-figure-title">
        שרטוט הזווית שבין הגו לירכיים: 90 מעלות בישיבה על אסלה רגילה, לעומת 35
        מעלות בכריעה מלאה
      </title>
      <Hatch id="hatch-hero" />

      {/* construction lines — the drawing surface */}
      <g stroke="var(--hair)" strokeWidth="1">
        <line x1="330" y1="44" x2="330" y2="14" strokeDasharray="3 5" />
        <line x1="56" y1="300" x2="18" y2="300" strokeDasharray="3 5" />
        <line x1="18" y1="300" x2="402" y2="300" strokeDasharray="1 6" />
      </g>

      {/* the 35° wedge — the position the body was built for */}
      <path
        d="M 330 300 L 330 150 A 150 150 0 0 0 244 177.1 Z"
        fill="url(#hatch-hero)"
      />

      {/* sitting: 90° */}
      <g stroke="var(--graphite)">
        <line x1="330" y1="300" x2="56" y2="300" strokeWidth="2" />
        <path d="M 330 182 A 118 118 0 0 0 212 300" strokeWidth="1" />
        <path d="M 330 274 L 304 274 L 304 300" strokeWidth="1.5" />
      </g>

      {/* the trunk axis, shared by both readings */}
      <line
        x1="330"
        y1="300"
        x2="330"
        y2="44"
        stroke="var(--ink)"
        strokeWidth="2"
      />

      {/* squatting: 35° */}
      <g stroke="var(--pine)">
        <line x1="330" y1="300" x2="183.2" y2="90.3" strokeWidth="3" />
        <path d="M 330 224 A 76 76 0 0 0 286.4 237.7" strokeWidth="1.5" />
      </g>

      <circle cx="330" cy="300" r="4.5" fill="var(--ink)" />

      {/* readings */}
      <g
        fontFamily="var(--font-display), Heebo, sans-serif"
        fontWeight="900"
        textAnchor="middle"
      >
        <text x="118" y="284" fontSize="34" fill="var(--ink-soft)">
          90°
        </text>
        <text x="150" y="78" fontSize="44" fill="var(--pine)">
          35°
        </text>
      </g>
      <g
        fontFamily="var(--font-sans), Assistant, sans-serif"
        fontWeight="600"
        fontSize="16"
        textAnchor="middle"
        direction="rtl"
      >
        <text x="118" y="326" fill="var(--ink-soft)">
          בישיבה
        </text>
        <text x="150" y="104" fill="var(--pine)">
          בכריעה
        </text>
      </g>
    </svg>
  );
}

type Reading = {
  /** vertex */
  v: [number, number];
  /** trunk ray endpoint */
  trunk: [number, number];
  /** thigh ray endpoint */
  thigh: [number, number];
  /** arc path between the two rays */
  arc: string;
  /** right-angle square path, drawn only for the 90° reading */
  square?: string;
  /** hatched wedge path, drawn only for the 35° reading */
  wedge?: string;
  label: string;
  labelAt: [number, number];
};

/**
 * The same construction laid over the anatomical illustrations, at the true
 * degree values. Coordinates are in the illustration's own 1200×1200 space.
 */
export function AngleOverlay({
  reading,
  tone,
}: {
  reading: Reading;
  tone: "graphite" | "pine";
}) {
  const stroke = tone === "pine" ? "var(--pine)" : "var(--ink-soft)";
  const id = `hatch-${tone}`;

  // The construction is drawn twice: once in paper as a halo so it stays
  // readable over the illustration, once in ink on top.
  const construction = (halo: boolean) => (
    <g
      stroke={halo ? "var(--paper)" : stroke}
      strokeLinecap="round"
      opacity={halo ? 0.85 : 1}
    >
      <line
        x1={reading.v[0]}
        y1={reading.v[1]}
        x2={reading.trunk[0]}
        y2={reading.trunk[1]}
        strokeWidth={halo ? 14 : 5}
      />
      <line
        x1={reading.v[0]}
        y1={reading.v[1]}
        x2={reading.thigh[0]}
        y2={reading.thigh[1]}
        strokeWidth={halo ? 14 : 5}
      />
      <path d={reading.arc} strokeWidth={halo ? 12 : 3} />
      {reading.square && <path d={reading.square} strokeWidth={halo ? 12 : 3} />}
    </g>
  );

  return (
    <svg
      viewBox="0 0 1200 1200"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      {reading.wedge && <Hatch id={id} />}
      {reading.wedge && <path d={reading.wedge} fill={`url(#${id})`} />}
      {construction(true)}
      {construction(false)}
      <circle
        cx={reading.v[0]}
        cy={reading.v[1]}
        r="12"
        fill={stroke}
        stroke="var(--paper)"
        strokeWidth="4"
      />
      <text
        x={reading.labelAt[0]}
        y={reading.labelAt[1]}
        textAnchor="middle"
        fontFamily="var(--font-display), Heebo, sans-serif"
        fontWeight="900"
        fontSize="82"
        fill={stroke}
        stroke="var(--paper)"
        strokeWidth="14"
        paintOrder="stroke"
      >
        {reading.label}
      </text>
    </svg>
  );
}

/** Trunk vertical, thighs horizontal: a true right angle, at the hip joint. */
export const SITTING_READING: Reading = {
  v: [700, 715],
  trunk: [700, 380],
  thigh: [430, 715],
  arc: "M 700 565 A 150 150 0 0 0 550 715",
  square: "M 700 667 L 652 667 L 652 715",
  label: "90°",
  labelAt: [551, 596],
};

/** Trunk at 118°, thighs 35° from it — measured off the illustration. */
export const SQUAT_READING: Reading = {
  v: [790, 800],
  trunk: [588, 420],
  thigh: [442, 623],
  arc: "M 710.2 649.9 A 170 170 0 0 0 638.5 722.8",
  wedge: "M 790 800 L 710.2 649.9 A 170 170 0 0 0 638.5 722.8 Z",
  label: "35°",
  labelAt: [618, 660],
};

/**
 * A minimal inline rendering of the same construction, used where the idea
 * needs to be recalled rather than explained (section index, sticky bar).
 */
export function AngleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <line x1="24" y1="21" x2="4" y2="21" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <line x1="24" y1="21" x2="24" y2="3" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <line x1="24" y1="21" x2="12.5" y2="4.6" stroke="currentColor" strokeWidth="2" />
      <path d="M 24 14 A 7 7 0 0 0 20 15.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
