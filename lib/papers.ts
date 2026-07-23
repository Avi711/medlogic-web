import fs from "fs";
import path from "path";

export type Paper = {
  slug: string;
  title: string;
  titleEn: string;
  authors: string[];
  journal: string;
  year: number;
  summary: string;
  bodyHe: string;
  bodyEn: string;
};

type ParsedDoc = {
  meta: Record<string, string | string[]>;
  body: string;
};

const PAPERS_DIR = path.join(process.cwd(), "content", "papers");

/** Order + Hebrew one-line summaries for the research wall. */
const PAPER_INDEX: {
  slug: string;
  titleEn: string;
  summary: string;
}[] = [
  {
    slug: "comparison-of-straining",
    titleEn: "Comparison of Straining During Defecation in Three Positions",
    summary:
      "המחקר המרכזי: 28 נבדקים נמדדו בשלוש תנוחות — בכריעה נדרשו שליש מהזמן וכמעט ללא מאמץ, עם תחושת התרוקנות מלאה.",
  },
  {
    slug: "symptoms-of-hemorrhoids",
    titleEn:
      "Symptoms of Hemorrhoids Diminished Significantly or Ceased Completely by Changing to the Squatting Position",
    summary:
      "מכתב שפורסם בכתב העת של ההסתדרות הרפואית בישראל: תסמיני טחורים פחתו משמעותית או נעלמו לאחר מעבר לכריעה.",
  },
  {
    slug: "cardio-vascular-events",
    titleEn: "Cardio-Vascular Events at Defecation: Are They Unavoidable?",
    summary:
      "המאמץ בישיבה מפעיל שוב ושוב את תמרון ולסלבה ומעמיס על הלב — בכריעה המאמץ פוחת באופן ניכר.",
  },
  {
    slug: "primary-constipation",
    titleEn: "Primary Constipation: An Underlying Mechanism",
    summary:
      "עצירות ראשונית מוסברת כתוצאה של התרוקנות לא שלמה בישיבה — יישור הזווית בכריעה מאפשר ריקון טבעי ומלא.",
  },
  {
    slug: "etiology-of-diverticulosis-coli",
    titleEn: "Etiology and Pathogenesis of Diverticulosis Coli: A New Approach",
    summary:
      "לחצים מוגברים במעי בעת מאמץ בישיבה נקשרים להיווצרות סעיפים (דיברטיקולות) — ממצא נדיר בעמים שנוהגים לכרוע.",
  },
  {
    slug: "management-of-hemorrhoids",
    titleEn: "Management of Hemorrhoids: A New Approach",
    summary:
      "מעקב אחר חולי טחורים שעברו לכריעה: הקלה מהירה בתסמינים ללא ניתוח וללא תרופות.",
  },
];

function parseDoc(filePath: string): ParsedDoc | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };

  const meta: Record<string, string | string[]> = {};
  let currentKey: string | null = null;
  for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && currentKey) {
      const arr = (meta[currentKey] as string[]) ?? [];
      arr.push(stripQuotes(item[1]));
      meta[currentKey] = arr;
      continue;
    }
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      if (kv[2] === "") {
        meta[currentKey] = [];
      } else {
        meta[currentKey] = stripQuotes(kv[2]);
        currentKey = null;
      }
    }
  }
  return { meta, body: m[2].trim() };
}

function stripQuotes(s: string): string {
  return s.replace(/^"(.*)"$/, "$1").replace(/\\"/g, '"').trim();
}

export function getPapers(): Paper[] {
  return PAPER_INDEX.map((entry) => {
    const he = parseDoc(path.join(PAPERS_DIR, `${entry.slug}-he.md`));
    const en = parseDoc(path.join(PAPERS_DIR, `${entry.slug}-en.md`));
    const meta = he?.meta ?? {};
    return {
      slug: entry.slug,
      title: (meta.title as string) ?? entry.titleEn,
      titleEn: entry.titleEn,
      authors: Array.isArray(meta.authors) ? meta.authors : [],
      journal: (meta.journal as string) ?? "",
      year: Number(meta.year ?? 0),
      summary: entry.summary,
      bodyHe: he?.body ?? "",
      bodyEn: en?.body ?? "",
    };
  }).filter((p) => p.bodyHe || p.bodyEn);
}

export function getPaper(slug: string): Paper | undefined {
  return getPapers().find((p) => p.slug === slug);
}
