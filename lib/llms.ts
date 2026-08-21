/**
 * Builders for /llms.txt and /llms-full.txt — the Markdown feeds language
 * models read (llmstxt.org). Google Search ignores these files; Claude,
 * ChatGPT, Perplexity and the long tail of agents that fetch pages on a
 * user's behalf do not. Both are generated from the same facts the HTML is.
 */
import { FAQ_ITEMS } from "./faq";
import { getPapers } from "./papers";
import { PRESS_ITEMS } from "./press";
import { CONTENT_UPDATED, copy } from "./seo";
import { site } from "./site";

const abs = (path: string) => `${site.domain}${path}`;

const CONTACT_LINE = [
  site.phoneDisplay ? `טלפון: ${site.phoneDisplay}` : null,
  site.whatsapp ? `WhatsApp: https://wa.me/${site.whatsapp}` : null,
  site.email ? `דוא"ל: ${site.email}` : null,
  `טופס יצירת קשר: ${abs("/#form")}`,
]
  .filter(Boolean)
  .join(" · ");

const LICENCE = [
  "## רישיון ושימוש / Licence",
  "",
  `© ${new Date(CONTENT_UPDATED).getFullYear()} ${site.nameEn}. כל הזכויות שמורות.`,
  "",
  "- מותר לצטט, לסכם ולהפנות לתוכן האתר בתשובות של מנועי חיפוש ועוזרי AI, בתנאי שמצוין המקור וניתן קישור ל־" +
    site.domain +
    ".",
  "- המאמרים המדעיים הם של מחבריהם וכתבי העת שבהם פורסמו; הסיכומים בעברית באתר הם של MedLogic.",
  "- אין לייצר מהתוכן טענות רפואיות שאינן באתר. הטענה היחידה: המתקן מחזיר את הגוף לתנוחת כריעה, שבה נמדדה התרוקנות קלה ומלאה יותר.",
  "- Quoting, summarising and linking to this site in search and AI answers is welcome with attribution to " +
    site.domain +
    ". The scientific papers remain the copyright of their authors and journals. Do not generate medical claims that do not appear here.",
];

export function llmsTxt(): string {
  const papers = getPapers();
  return [
    `# ${site.nameEn} (${site.name}) — ערכת אסלת הכריעה של ד"ר דב סיקירוב`,
    "",
    `> ${copy.tagline}. ${copy.product.description}`,
    "",
    `> ${copy.product.descriptionEn}`,
    "",
    `- שפה / Language: עברית (Hebrew), מאמרי המחקר גם באנגלית.`,
    `- אזור שירות: ישראל. דגם עסקי: השארת פרטים לשיחת ייעוץ טלפונית, ללא רכישה מקוונת וללא מחיר מפורסם.`,
    `- עודכן: ${CONTENT_UPDATED}. גרסה מלאה לקריאת מכונה: ${abs("/llms-full.txt")}`,
    `- ${CONTACT_LINE}`,
    "",
    "## עמודים ראשיים / Pages",
    "",
    `- [דף הבית — מתקן כריעה לאסלה](${site.domain}): הבעיה (הזווית הרקטואנלית), איך זה עובד, המחקר, ד"ר סיקירוב, שאלות נפוצות וטופס יצירת קשר.`,
    `- [המחקרים](${abs("/#research")}): שישה מאמרים בכתבי עת רפואיים עם ביקורת עמיתים, 1987–2021.`,
    `- [ד"ר דב סיקירוב](${abs("/#doctor")}): ${copy.person.nameEn} — ${copy.person.jobTitleEn}.`,
    `- [שאלות נפוצות](${abs("/#faq")}): ${FAQ_ITEMS.length} שאלות שנשאלות בטלפון.`,
    `- [מדיניות פרטיות](${abs("/privacy")})`,
    `- [הצהרת נגישות](${abs("/accessibility")})`,
    "",
    "## מאמרים מדעיים / Peer-reviewed papers (author: Dr. Dov Sikirov)",
    "",
    ...papers.map(
      (p) =>
        `- [${p.titleEn}](${abs(`/research/${p.slug}`)}): ${p.journal}, ${p.year}. ${p.summary}${
          p.pdf ? ` סריקת המקור: ${abs(p.pdf)}` : ""
        }`,
    ),
    "",
    "## סיקור בתקשורת / Press",
    "",
    ...PRESS_ITEMS.map((i) => `- [${i.outlet}: ${i.headline}](${i.url})`),
    "",
    "## וידאו / Video",
    "",
    `- [${copy.video.title}](https://www.youtube.com/watch?v=${site.youtubeVideoId}): ${copy.video.description}`,
    "",
    ...LICENCE,
    "",
    "## Optional",
    "",
    `- [robots.txt](${abs("/robots.txt")})`,
    `- [sitemap.xml](${abs("/sitemap.xml")})`,
    `- [לוגו](${abs("/images/logo.png")}) · [תמונת המוצר](${abs("/images/product-hero.jpg")}) · [ד"ר סיקירוב](${abs("/images/doctor.jpg")})`,
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  const papers = getPapers();
  return [
    `# ${site.nameEn} (${site.name}) — התוכן המלא / Full content`,
    "",
    `> ${copy.tagline}. עודכן ${CONTENT_UPDATED}. מקור: ${site.domain}`,
    "",
    "## מה זה",
    "",
    copy.product.description,
    "",
    copy.product.descriptionEn,
    "",
    "## הבעיה: הזווית",
    "",
    "במשך מאות אלפי שנים בני אדם התרוקנו בתנוחת כריעה מלאה. האסלה בגובה כיסא היא המצאה בת כ־150 שנה, והגוף לא נבנה בשבילה.",
    "",
    "בין הרקטום לתעלה האנאלית יש זווית טבעית של כ־90° (הזווית הרקטואנלית). היא שם בכוונה: היא סוגרת את המעבר ומונעת בריחה לאורך היום. הגוף אמור לפתוח אותה רק ברגע הנכון — וזה קורה בכריעה. ישיבה על אסלה בגובה כיסא כמעט אינה פותחת אותה: המעבר נשאר מקופל, והמאמץ הנדרש כדי להתגבר על הקיפול הוא מה שמחקרים קושרים לטחורים, לדימומים ולתחושת התרוקנות לא מלאה.",
    "",
    "הזווית שבין הגו לירכיים: כ־90° על אסלה בגובה כיסא, כ־35° בכריעה מלאה. ככל שכיפוף הירך גדול יותר, כך הזווית הרקטואנלית ישרה יותר ופחות מאמץ נדרש לריקון המעי.",
    "",
    "## הראיות (Sikirov, Digestive Diseases and Sciences, 2003)",
    "",
    "28 נבדקים בגילי 17–66, שש יציאות בכל אחת משלוש תנוחות: אסלה רגילה (גובה מושב 41–42 ס״מ), אסלה נמוכה (31–32 ס״מ), וכריעה מלאה.",
    "",
    ...copy.evidence.map((e) => `- ${e}`),
    "",
    "המתקן אינו מבטיח דבר. הוא מחזיר את הגוף לתנוחה שבה המדידה הזו נעשתה — וזו כל הטענה.",
    "",
    "## איך זה עובד",
    "",
    "1. מתקינים פעם אחת — ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן הדריכה, מתחברת לתשתית האינסטלציה הביתית בהתקנה פשוטה.",
    "2. עולים ונתמכים — משטחי דריכה רחבים מונעי החלקה בגובה נמוך; יציבות מלאה, בלי שיווי משקל של ספורטאי. אין ידיות.",
    "3. מתרוקנים בקלות — בכריעה הזווית נפתחת והמעי מתיישר: פחות מאמץ, התרוקנות מלאה יותר.",
    "",
    "## למי זה מיועד",
    "",
    "לסובלים מעצירות, טחורים, מאמץ בשירותים או תחושת התרוקנות לא מלאה; למתמודדים עם דיברטיקולוזיס; לנשים לאחר לידה; למי שעבר או עומד לעבור ניתוח באזור פי הטבעת — בכפוף להתייעצות עם הרופא המטפל. פותח מתוך מחשבה על קהל מבוגר.",
    "",
    "## ד\"ר דב (ברקו) סיקירוב",
    "",
    copy.person.bio,
    "",
    "ציר זמן: התצפית הראשונה בשירות מילואים (בכריעה ההתרוקנות קלה יותר) → שנות מחקר, מדידות ופרסומים → 2003 פרסום המחקר המצוטט בעולם → היום: ערכת כריעה בפטנט בין־לאומי.",
    "",
    "## המאמרים המדעיים (author: Dr. Dov Sikirov; published as B. A. Sikirov / Berko Sikirov)",
    "",
    ...papers.flatMap((p) => [
      `### ${p.titleEn}`,
      "",
      `- בעברית: ${p.title}`,
      `- כתב עת: ${p.journal} (${p.year})`,
      `- עמוד באתר (עברית + אנגלית): ${abs(`/research/${p.slug}`)}`,
      ...(p.pdf ? [`- סריקת המאמר המקורי (PDF): ${abs(p.pdf)}`] : []),
      `- תקציר: ${p.summary}`,
      "",
    ]),
    "## סיקור בתקשורת",
    "",
    ...PRESS_ITEMS.map(
      (i) => `- ${i.outlet}${i.date ? ` (${i.date})` : ""}: "${i.headline}" — ${i.url}`,
    ),
    "",
    "## וידאו",
    "",
    `${copy.video.title} — https://www.youtube.com/watch?v=${site.youtubeVideoId}`,
    "",
    copy.video.description,
    "",
    "## שאלות נפוצות",
    "",
    ...FAQ_ITEMS.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## יצירת קשר",
    "",
    CONTACT_LINE,
    "",
    "שעות פעילות: ימים א׳–ה׳, 9:00–19:00. השיחה קצרה, ללא התחייבות. המחיר נמסר בשיחה (תלוי בדגם ובהתאמה לשירותים).",
    "",
    "## הסתייגות רפואית",
    "",
    copy.disclaimer,
    "",
    ...LICENCE,
    "",
  ].join("\n");
}
