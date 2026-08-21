/**
 * Everything a machine reads about this site, in one place: the structured
 * data graph (JSON-LD), the facts the llms.txt feeds are built from, and the
 * shared copy that search engines and assistants see before a human does.
 *
 * The same objects feed the homepage graph, the per-paper ScholarlyArticle,
 * and the Markdown feeds, so a fact corrected here is corrected everywhere.
 */
import { FAQ_ITEMS } from "./faq";
import { getPapers, type Paper } from "./papers";
import { PRESS_ITEMS } from "./press";
import { site } from "./site";

/**
 * Bump when public copy changes materially. Used as <lastmod> in the sitemap
 * and as the "updated" line in llms.txt. A build-time `new Date()` would
 * claim a change on every deploy, which search engines learn to ignore.
 */
export const CONTENT_UPDATED = "2026-08-21";

export const ORG_ID = `${site.domain}/#organization`;
export const WEBSITE_ID = `${site.domain}/#website`;
export const PERSON_ID = `${site.domain}/#dr-dov-sikirov`;
export const PRODUCT_ID = `${site.domain}/#squatting-toilet-kit`;
export const VIDEO_ID = `${site.domain}/#video`;

export const copy = {
  /** One sentence a machine can quote. Matches the hero + sub, not the ad. */
  tagline: "הפתרון הפיזיולוגי לעצירות וטחורים: ערכת אסלת כריעה מבוססת מחקר",
  product: {
    name: "ערכת אסלת הכריעה של MedLogic",
    nameEn: "MedLogic squatting toilet kit",
    description:
      "ערכה שלמה להתרוקנות בתנוחת כריעה מלאה: אסלה קרמית נמוכה ייעודית (כ־20 ס״מ) ומעליה מתקן דריכה עם משטחים רחבים מונעי החלקה. מתחברת לתשתית האינסטלציה הביתית הרגילה בהתקנה פשוטה. פותחה על ידי ד״ר דב סיקירוב, מומחה ברפואה פנימית, על בסיס שישה פרסומים בכתבי עת רפואיים, בהם מחקר קליני שעבר ביקורת עמיתים (2003). פטנט בין־לאומי רשום. אינה שרפרף או תוספת לאסלה רגילה.",
    descriptionEn:
      "A complete kit for full-squat defecation: a dedicated low ceramic toilet (about 20 cm) with a stepping platform mounted above it, wide non-slip footrests, connects to standard household plumbing. Developed by Dr. Dov Sikirov, M.D., internal medicine specialist, on the basis of six publications in medical journals, including a peer-reviewed clinical study (2003). Internationally patented. Not a stool or an add-on for a regular-height toilet.",
  },
  person: {
    name: "ד״ר דב (ברקו) סיקירוב",
    nameEn: "Dr. Dov (Berko) Sikirov, M.D.",
    alternateNames: ["Dov Sikirov", "Berko Sikirov", "B. A. Sikirov", "דב סיקירוב"],
    jobTitle: "מומחה ברפואה פנימית",
    jobTitleEn: "Internal medicine specialist",
    bio: "רופא מומחה ברפואה פנימית, ממציא ערכת אסלת הכריעה של MedLogic והחוקר שפרסם, החל מ־1987, שישה מאמרים בכתבי עת רפואיים על הקשר בין תנוחת ההתרוקנות לעצירות, טחורים, דיברטיקולוזיס ואירועים קרדיו־וסקולריים. מחקרו מ־2003 ב־Digestive Diseases and Sciences (28 נבדקים, שלוש תנוחות) הוא המקור המצוטט ביותר בעולם בנושא.",
  },
  video: {
    title: "כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון?",
    description:
      "ד״ר דב סיקירוב מסביר מדוע האסלה בגובה כיסא מקפלת את הזווית הרקטואנלית, ואיך כריעה מלאה (כ־35° בין הגו לירכיים) מיישרת את המעבר ומאפשרת התרוקנות קלה ומלאה.",
  },
  /** The three numbers the whole site leans on. From Sikirov 2003. */
  evidence: [
    "100% מ־28 המשתתפים התרוקנו מהר יותר בכריעה: ממוצע 0.85 דקות לעומת 2.1 דקות על אסלה בגובה 41–42 ס״מ ו־1.9 דקות על אסלה בגובה 31–32 ס״מ.",
    "44% דירגו את ההתרוקנות בכריעה כקלה לחלוטין, לעומת 9–20% בתנוחות הישיבה.",
    "ההבדל מובהק סטטיסטית, P < 0.0001.",
  ],
  disclaimer:
    "המידע באתר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי, אבחון או המלצה לטיפול. מתקן הכריעה מסייע לתנוחת התרוקנות טבעית ואינו תחליף לבדיקה או לטיפול אצל רופא. בכל מקרה של תסמינים מתמשכים, דימום או כאב — יש לפנות לרופא. התוצאות המתוארות משקפות חוויות אישיות ועשויות להשתנות מאדם לאדם.",
};

export const keywords = [
  "אסלת כריעה",
  "מתקן כריעה לאסלה",
  "עצירות",
  "טחורים",
  "התרוקנות בכריעה",
  "תנוחת כריעה",
  "הזווית הרקטואנלית",
  "דיברטיקולוזיס",
  "ד״ר דב סיקירוב",
  "squatting toilet",
  "squatting defecation posture",
  "MedLogic",
];

const abs = (path: string) => `${site.domain}${path}`;

/* ---------- schema.org nodes ---------- */

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.nameEn,
    alternateName: [site.name, "מדלוגיק"],
    url: site.domain,
    logo: {
      "@type": "ImageObject",
      url: abs("/images/logo.png"),
      width: 270,
      height: 270,
    },
    image: abs("/images/product-hero.jpg"),
    description: copy.tagline,
    founder: { "@id": PERSON_ID },
    areaServed: { "@type": "Country", name: "Israel" },
    knowsLanguage: ["he", "en"],
    ...(site.phoneE164 || site.email
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            ...(site.phoneE164 ? { telephone: site.phoneE164 } : {}),
            ...(site.email ? { email: site.email } : {}),
            availableLanguage: ["Hebrew", "English"],
            areaServed: "IL",
          },
        }
      : {}),
    // The four articles that cover the company — verified, real links.
    subjectOf: PRESS_ITEMS.map((item) => ({
      "@type": "NewsArticle",
      headline: item.headline,
      url: item.url,
      inLanguage: "he",
      publisher: { "@type": "Organization", name: item.outlet },
      ...(item.date ? { datePublished: item.date } : {}),
    })),
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: copy.person.name,
    alternateName: copy.person.alternateNames,
    honorificPrefix: "Dr.",
    honorificSuffix: "M.D.",
    jobTitle: copy.person.jobTitle,
    description: copy.person.bio,
    image: abs("/images/doctor.jpg"),
    url: abs("/#doctor"),
    worksFor: { "@id": ORG_ID },
    nationality: { "@type": "Country", name: "Israel" },
    knowsAbout: [
      "Defecation posture",
      "Constipation",
      "Hemorrhoids",
      "Diverticulosis coli",
      "Anorectal angle",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.domain,
    name: site.nameEn,
    alternateName: site.name,
    description: copy.tagline,
    inLanguage: "he",
    publisher: { "@id": ORG_ID },
    copyrightHolder: { "@id": ORG_ID },
    copyrightYear: new Date(CONTENT_UPDATED).getFullYear(),
  };
}

export function productNode() {
  return {
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: copy.product.name,
    alternateName: copy.product.nameEn,
    description: copy.product.description,
    image: [abs("/images/product-hero.jpg"), abs("/images/product-bathroom.jpg")],
    brand: { "@id": ORG_ID },
    manufacturer: { "@id": ORG_ID },
    url: abs("/#how-it-works"),
    category: "Bathroom fixtures > Squatting toilets",
    countryOfOrigin: { "@type": "Country", name: "Israel" },
    audience: {
      "@type": "PeopleAudience",
      audienceType:
        "People with constipation, hemorrhoids, incomplete evacuation, or diverticulosis; post-partum women; patients before or after anorectal surgery",
    },
    // Patent + research are what make this a product and not a stool.
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Patent",
        value: "Internationally registered patent",
      },
      {
        "@type": "PropertyValue",
        name: "Toilet height",
        value: "approx. 20 cm (low ceramic toilet) + stepping platform",
      },
      {
        "@type": "PropertyValue",
        name: "Installation",
        value: "Connects to standard household plumbing",
      },
    ],
  };
}

export function videoNode() {
  const id = site.youtubeVideoId;
  return {
    "@type": "VideoObject",
    "@id": VIDEO_ID,
    name: copy.video.title,
    description: copy.video.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    inLanguage: "he",
    // Dr. Sikirov explains on camera; MedLogic publishes the embed.
    actor: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    // TODO(owner): add uploadDate (YYYY-MM-DD from YouTube Studio) — it is the
    // one required field missing for a video rich result. Not guessed on purpose.
  };
}

export function faqNode() {
  return {
    "@type": "FAQPage",
    "@id": abs("/#faq"),
    inLanguage: "he",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * "Journal, Vol. 48, No. 7, pp. 1201-1205" → nested Periodical / Volume /
 * Issue nodes plus pagination, which is how schema.org wants a citation.
 * Falls back to a plain Periodical when the string has another shape.
 */
function periodicalNodes(journal: string) {
  const m = journal.match(
    /^(.*?),\s*Vol\.\s*(\d+),\s*No\.\s*(\d+),\s*pp?\.\s*([\d–-]+)/,
  );
  if (!m) return { isPartOf: { "@type": "Periodical", name: journal } };
  const [, name, volume, issue, pages] = m;
  return {
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: issue,
      isPartOf: {
        "@type": "PublicationVolume",
        volumeNumber: volume,
        isPartOf: { "@type": "Periodical", name },
      },
    },
    pagination: pages,
  };
}

export function scholarlyArticleNode(paper: Paper) {
  return {
    "@type": "ScholarlyArticle",
    "@id": abs(`/research/${paper.slug}#article`),
    headline: paper.titleEn,
    alternativeHeadline: paper.title,
    url: abs(`/research/${paper.slug}`),
    description: paper.summary,
    author: { "@id": PERSON_ID },
    datePublished: String(paper.year),
    ...periodicalNodes(paper.journal),
    inLanguage: ["en", "he"],
    about: ["Defecation posture", "Squatting", "Constipation", "Hemorrhoids"],
    isAccessibleForFree: true,
    ...(paper.pdf
      ? {
          associatedMedia: {
            "@type": "MediaObject",
            contentUrl: abs(paper.pdf),
            encodingFormat: "application/pdf",
          },
        }
      : {}),
  };
}

export function breadcrumbNode(
  trail: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/** The complete homepage graph. Every node is linked by @id, not duplicated. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      personNode(),
      websiteNode(),
      productNode(),
      videoNode(),
      faqNode(),
      {
        "@type": "WebPage",
        "@id": abs("/#webpage"),
        url: site.domain,
        name: "מתקן כריעה לאסלה | הקלה בעצירות וטחורים | MedLogic",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PRODUCT_ID },
        primaryImageOfPage: abs("/images/product-bathroom.jpg"),
        inLanguage: "he",
        dateModified: CONTENT_UPDATED,
        // Medical disclaimer carried into the graph, not just the footer.
        disambiguatingDescription: copy.disclaimer,
      },
      ...getPapers().map(scholarlyArticleNode),
    ],
  };
}

export function paperGraph(paper: Paper) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      personNode(),
      scholarlyArticleNode(paper),
      breadcrumbNode([
        { name: site.nameEn, path: "/" },
        { name: "המחקרים", path: "/#research" },
        { name: paper.titleEn, path: `/research/${paper.slug}` },
      ]),
      {
        "@type": "WebPage",
        "@id": abs(`/research/${paper.slug}#webpage`),
        url: abs(`/research/${paper.slug}`),
        name: `${paper.titleEn} | ${site.nameEn}`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": abs(`/research/${paper.slug}#article`) },
        inLanguage: ["en", "he"],
        dateModified: CONTENT_UPDATED,
      },
    ],
  };
}

/**
 * Serialise for a <script type="application/ld+json">. `<` is escaped so a
 * stray "</script>" inside copy can never break out of the tag.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
