/**
 * Verified press coverage. The clippings themselves (images) stay with the
 * PressStrip component; this file holds the facts so the llms feeds and the
 * Organization JSON-LD (`subjectOf`) can cite the same four articles.
 */
export type PressItem = {
  outlet: string;
  headline: string;
  url: string;
  /** ISO date of the article, when known from the URL or the page. */
  date?: string;
};

export const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "TheMarker",
    headline:
      "אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש",
    url: "https://www.themarker.com/labels/2019-03-13/ty-article-labels/0000017f-f88b-d47e-a37f-f9bf25c50000",
    date: "2019-03-13",
  },
  {
    outlet: "הארץ",
    headline: "יכול להיות שאנחנו עושים קקי לא נכון?",
    url: "https://www.haaretz.co.il/magazine/2019-04-03/ty-article-magazine/.premium/0000017f-e007-d804-ad7f-f1ffc2630000",
    date: "2019-04-03",
  },
  {
    outlet: "ynet",
    headline: "10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות",
    url: "https://www.ynet.co.il/articles/0,7340,L-5291707,00.html",
  },
  {
    outlet: "מעריב",
    headline: "יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח?",
    url: "https://www.maariv.co.il/news/health/article-1095397",
  },
];
