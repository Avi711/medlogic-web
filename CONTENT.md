# MedLogic — Raw Content Spec

Everything a designer/builder needs. **Content only — no design instructions.**
Language: Hebrew (RTL). Latin strings (`90°`, `M.D.`, journal names, times) must be bidi-isolated.

---

## 1. Product truth (do not deviate)

- The product is a **complete kit**: a dedicated **low ceramic toilet (~20 cm high)** + a **step/platform device mounted above it** for full squatting.
- It is **NOT** an add-on / stool for a regular household toilet.
- It has **NO handles**. Support comes from wide non-slip step surfaces at low height.
- Connects to standard home plumbing; simple installation.
- Invented by **Dr. Dov (Berko) Sikirov, M.D.**, internal medicine specialist. Internationally registered patent.
- Business model: **lead generation only** — no online checkout, no listed price. Goal = user leaves name + phone + preferred call hour.

### Compliance (Israeli law)
- No cure/medical claims. Use "מסייע", "עשוי", "תורם" — never "מרפא"/"מבטיח".
- Testimonials require the disclaimer: *"העדויות משקפות חוויה אישית של משתמשים. התוצאות עשויות להשתנות מאדם לאדם."*
- Medical disclaimer required in footer (text in §9).
- Accessibility statement page (`/accessibility`) is legally required. Privacy policy page (`/privacy`) required for lead collection.
- Any AI-rendered/retouched visual must be captioned honestly (e.g. "הדמיה").

---

## 2. Images — live URLs

Base: `https://medlogic-web.vercel.app`

| Purpose | URL | Notes |
|---|---|---|
| Product kit (hero) | `/images/product-hero.jpg` | Approved retouched **real** photo of the kit — low toilet + step device |
| Dr. Sikirov portrait | `/images/doctor.jpg` | Real photo |
| Logo | `/images/logo.png` | |
| Anatomy — sitting 90° | `/images/illu-sitting.jpg` | Kinked passage, red |
| Anatomy — squatting 35° | `/images/illu-squat.jpg` | Straight passage, green |
| Position reference — sitting | `/images/position-sitting.jpg` | From original site |
| Position reference — squat | `/images/position-squat.jpg` | From original site |
| Position reference — device | `/images/position-device.jpg` | From original site |
| Generic hero/OG image | `/images/hero.jpg` | Used as OpenGraph image |
| Press clip — TheMarker | `/images/press/themarker-clip.jpg` | Real newspaper screenshot |
| Press clip — הארץ | `/images/press/haaretz-clip.jpg` | Real newspaper screenshot |
| Press clip — ynet | `/images/press/ynet-clip.jpg` | Real newspaper screenshot |
| Press clip — מעריב | `/images/press/maariv-clip.jpg` | Real newspaper screenshot |

Video (YouTube, Dr. Sikirov explains): `https://www.youtube.com/watch?v=xRYNbIhHuO4`

**Image rules:** only real photos of the actual product. Generated/illustrated product imagery has been rejected repeatedly — every attempt rendered a regular-height toilet, which is factually wrong.

---

## 3. Page copy (in order)

### Hero
- H1: **סובלים מעצירות או טחורים?** / **הבעיה אינה בגוף שלכם — אלא בזווית.**
- Sub: אסלת הכריעה של MedLogic מחזירה לגוף התרוקנות טבעית ומלאה בתנוחת כריעה — הפיתוח של ד"ר דב סיקירוב, מומחה ברפואה פנימית והחוקר המוביל בעולם בתחום תנוחת ההתרוקנות.
- Primary CTA: **רוצה לשמוע אם זה מתאים לי** → form
- Secondary link: למה זה קורה? ↓
- Under CTA: שיחה קצרה, בלי התחייבות ובלי לחץ.
- Proof line: מבוסס על 6 מחקרים שפורסמו בכתבי עת רפואיים בין־לאומיים
- Image: `product-hero.jpg`, caption: **הערכה המלאה: האסלה הנמוכה ומתקן הדריכה**

### Trust bar (4 items)
פטנט בינלאומי רשום · 6 מחקרים בכתבי עת רפואיים · פותח ע״י רופא מומחה · מתאים לכל בית

### 01 — The problem
Title: **הבעיה היא לא אתם. הבעיה היא הזווית.**
- במשך מאות אלפי שנים בני אדם התרוקנו בתנוחת כריעה מלאה. האסלה בגובה כיסא היא המצאה בת 150 שנה בלבד — והגוף שלנו פשוט לא נבנה בשבילה.
- הישיבה בזווית של 90° מקפלת את צינור היציאה — כמו צינור השקיה מקופל. הלחץ שנדרש כדי להתגבר על הקיפול הוא בדיוק מה שמחקרים קושרים לטחורים, לדימומים ולתחושת התרוקנות לא מלאה.
- Pull quote: **זו לא בעיה שלכם. זו בעיה של התנוחה. ואת התנוחה — אפשר לשנות.**

**Angle diagram (2 panels):**
| | Sitting | Squatting |
|---|---|---|
| Badge | 90° (red) | 35° (green) |
| Title | בישיבה | בכריעה |
| Caption | המעבר מקופל — היציאה דורשת מאמץ | המעבר פתוח — היציאה קלה וטבעית |

Figure caption: איור 1: זווית הגוף בישיבה לעומת כריעה, והשפעתה על מעבר היציאה

### 02 — How it works
Title: **שלושה שלבים — והשירותים בבית חוזרים לעבוד בשביל הגוף שלכם**
1. **מתקינים פעם אחת** — מקבלים ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן הדריכה — מתחברת לתשתית האינסטלציה הביתית בהתקנה פשוטה.
2. **עולים ונתמכים** — עולים בבטחה על משטחי הדריכה הרחבים מונעי ההחלקה — יציבות מלאה, בלי שיווי משקל של ספורטאי.
3. **מתרוקנים בקלות** — בכריעה הזווית נפתחת והמעי מתיישר — פחות מאמץ, התרוקנות מלאה יותר.

CTA: **נשמע מעניין? דברו איתנו**

### 03 — Benefits
Title: **במה זה תורם — ולמי זה מתאים**
| Benefit | Body |
|---|---|
| פחות מאמץ, פחות זמן | הזווית נפתחת והיציאה מתקצרת — בלי לחץ ובלי כוח. |
| התרוקנות מלאה יותר | נפרדים מתחושת ה"לא סיימתי" המתסכלת. |
| הקלה בטחורים ודימומים | פחות מאמץ — פחות לחץ על כלי הדם באזור. |
| תמיכה במערכת העיכול | התרוקנות סדירה מפחיתה את הלחץ במעי הגס. |
| חיזוק ויציבות לגוף | הכריעה מפעילה את שרירי הרגליים — גם בגיל מבוגר. |
| לנשים — בהיריון ואחרי לידה | תנוחה שתורמת לחיזוק רצפת האגן (בתיאום עם הרופא המטפל). |

Footnote: המתקן מסייע לתנוחת התרוקנות טבעית ואינו תחליף לאבחון או לייעוץ רפואי.

### Video
Title: **צפו: כולנו עושים את זה — אבל האם נכון?**
Sub: ההסבר המלא מפי ד"ר סיקירוב, בגובה העיניים.

### 04 — Testimonials (6)
Title: **אנשים אמיתיים. תוצאות שמדברות בעד עצמן.**

1. **אחרי שנים של סבל — הטחורים פשוט נעלמו.** — אני מהנדס, איש הגיוני מטבעי. אחרי שנים של טחורים קשים, חודשים ספורים של התרוקנות בכריעה — והכאבים והדימומים נעלמו. חבל שלא הסבירו לי את זה עשרים שנה קודם. — *ר', מהנדס, עלה מארגנטינה*
2. **הדימומים, שליוו אותי שנים — פסקו.** — עם דיברטיקוליטיס ודימומים חוזרים, חשבתי שזה חלק מהחיים. אחרי תקופה עם המתקן הדימומים פסקו — וגם הרופא שלי הופתע לטובה. — *ח', עלה מפרו*
3. **אחרי הלידה — הכל השתנה.** — אחרי הלידה הראשונה סבלתי מעצירות, ושום ייעוץ או תרופה לא עזרו. ד"ר סיקירוב הדריך אותי לעבור לכריעה — לא האמנתי שבכזו קלות זה ייעלם. — *מרים*
4. **הפסקתי להתאמץ — והתחלתי להרגיש בן אדם אחר.** — בגיל 50 כל ביקור בשירותים היה מאבק שהשפיע על כל היום. מאז שעברתי לכריעה ההתרוקנות קלה, ואני מרגיש רענן וצלול. — *יעקב, בן 50*
5. **כריעה שינתה לי את החיים.** — שנתיים הייתי אובד עצות. לא האמנתי שהפתרון כל כך פשוט — לחזור לתנוחה הטבעית, והכל פתאום ברור. — *אריק*
6. **נדהמתי לגלות כמה זה קל.** — בטיול בסיני גיליתי כמה קל להתרוקן בכריעה. כשראיתי שאצל ד"ר סיקירוב הכל מגובה במחקרים — זה היה לי ברור. — *ענת*

Disclaimer: העדויות משקפות חוויה אישית של משתמשים. התוצאות עשויות להשתנות מאדם לאדם.

### Mid CTA
**מוכנים לבדוק אם זה מתאים גם לכם?** — שיחה קצרה, בלי התחייבות. נסביר, נענה על כל שאלה ונבדוק יחד את ההתאמה לשירותים שלכם — בשעה שנוחה לכם.
Button: להשארת פרטים לשיחה קצרה

### Doctor story
Title: **התגלית שהתחילה בשירות מילואים — והפכה למחקר שמצוטט בכל העולם**
- במהלך שירות מילואים בלבנון שם לב ד"ר דב סיקירוב לתופעה מוזרה: בשטח, בלי אסלות, כשכולם נאלצו לכרוע — ההתרוקנות הייתה קלה יותר. בלי המאמץ המוכר מהבית.
- רופא אחר היה שוכח מזה. ד"ר סיקירוב החליט לבדוק.
- המחקר המרכזי שלו, שפורסם בשנת 2003 בכתב העת *Digestive Diseases and Sciences*, הראה שבכריעה ההתרוקנות אורכת בממוצע כדקה פחות מאשר בישיבה — ובמאמץ קטן משמעותית. המחקר מצוטט עד היום על ידי חוקרים בכל העולם, והוא ההשראה שמאחורי גל שלם של מוצרי תנוחה שנמכרו במיליוני יחידות בארה"ב.
- אבל שרפרף פשוט לא הספיק לו. יחד עם מהנדסים פיתח ד"ר סיקירוב **ערכה שלמה — אסלה נמוכה ייעודית ומעליה מתקן דריכה** — שמאפשרת כריעה מלאה ובטוחה בבית. על הפיתוח נרשם פטנט בינלאומי.

Timeline: שירות המילואים → התצפית הראשונה: בכריעה — ההתרוקנות קלה יותר | שנות המחקר → מדידות, השוואות ופרסום בכתבי עת רפואיים | 2003 → פרסום המחקר המצוטט בעולם | היום → מתקן כריעה בפטנט בינלאומי, זמין לכל בית בישראל

Caption under portrait: ד"ר דב (ברקו) סיקירוב, M.D. — מומחה ברפואה פנימית · החוקר המצוטט בעולם בתחום תנוחת ההתרוקנות
CTA: רוצים לשמוע אם הפיתוח מתאים לכם? השאירו פרטים

### 05 — Research wall
Title: **לא מבטיחים. מוכיחים.**
Intro: מאחורי מתקן הכריעה עומדות עשרות שנות מחקר של ד"ר סיקירוב — שישה מאמרים שפורסמו בכתבי עת רפואיים בינלאומיים עם ביקורת עמיתים. הנה הם, בשפה פשוטה:
Footnote: את המאמרים המלאים אפשר למצוא גם במאגרים הרפואיים הבינלאומיים (PubMed).
→ Papers listed in §5.

### Press strip
Heading: **מדברים על זה בתקשורת בישראל** → §6.

### 06 — FAQ
Title: **שאלות ששואלים אותנו בטלפון**

1. **האם ארגיש שיפור מיד?** — אצל רבים ההבדל מורגש כבר בשימושים הראשונים — פחות מאמץ ותחושת התרוקנות מלאה יותר. במצבים ותיקים יותר, כמו טחורים כרוניים, השיפור בדרך כלל הדרגתי ומצטבר לאורך שבועות. כל גוף בקצב שלו.
2. **כריעה לא תהיה לי לא נוחה? לא כרעתי שנים.** — זו השאלה הכי נפוצה — והתשובה מפתיעה. המתקן תוכנן בדיוק בשביל זה: משטחי דריכה רחבים ומונעי החלקה בגובה נמוך, כך שלא צריך שיווי משקל של ספורטאי. רוב המשתמשים מתרגלים תוך ימים ספורים, והגוף "נזכר" בתנוחה מהר משחושבים.
3. **מה בדיוק מקבלים, והאם זה מתאים לבית שלי?** — מקבלים ערכה שלמה: אסלה קרמית נמוכה ייעודית ומעליה מתקן דריכה עם משטחים מונעי החלקה. הערכה מתחברת לתשתית האינסטלציה הביתית הרגילה בהתקנה פשוטה, ובשיחת הטלפון נוודא יחד את ההתאמה לשירותים שלכם.
4. **למי המתקן מיועד?** — לכל מי שסובל מעצירות, טחורים, מאמץ בשירותים או תחושת התרוקנות לא מלאה. הוא מתאים גם למתמודדים עם דיברטיקולוזיס, לנשים לאחר לידה ולמי שעבר או עומד לעבור ניתוח באזור פי הטבעת — בכפוף להתייעצות עם הרופא המטפל.
5. **אני מבוגר / יש לי בעיות ברכיים. זה בטוח בשבילי?** — המתקן פותח מתוך מחשבה על קהל מבוגר: משטחי דריכה רחבים מונעי החלקה, גובה נמוך ותנוחה יציבה. עם זאת, אם יש מגבלה משמעותית בברכיים או בירכיים — נשוחח על זה בטלפון בכנות מלאה. אם זה לא מתאים לכם, נגיד לכם.
6. **מה קורה אם המתקן לא יתאים לי?** — אנחנו עומדים מאחורי המוצר. בשיחת הטלפון נפרט את תנאי האחריות ותקופת ההתנסות — בשקיפות מלאה ולפני כל התחייבות מצדכם.
7. **כמה זה עולה?** — המחיר תלוי בדגם ובהתאמה לשירותים שלכם, ולכן אנחנו מעדיפים לתת לכם מחיר מדויק ולא מספר כללי. השאירו פרטים — ובשיחה קצרה תקבלו את כל המידע, בלי לחץ ובלי משחקים. *(+ CTA: לקבלת מחיר מדויק בשיחה קצרה ←)*

### Final CTA
H2: **עשרות שנות מחקר. פטנט בינלאומי. ושיחת טלפון אחת שמפרידה ביניכם לבין הקלה אמיתית.**
Sub: השאירו פרטים ונציג מטעם MedLogic יחזור אליכם בשעה שנוחה לכם — להסביר, לענות על כל שאלה ולבדוק יחד אם המתקן מתאים לכם. בלי התחייבות.
Reassurances: שיחת ייעוץ טלפונית חינם, בגובה העיניים · משלוח ואריזה דיסקרטיים · בלי התחייבות ובלי לחץ — אם זה לא מתאים לכם, נגיד לכם
WhatsApp button (when number exists): עדיף לכם בוואטסאפ? דברו איתנו

---

## 4. Lead form (the whole point of the site)

Heading: **השאירו פרטים — נחזור אליכם בשעה שתבחרו**

| Field | Type | Required | Label / placeholder |
|---|---|---|---|
| name | text | ✔ | שם מלא · "לדוגמה: רחל כהן" |
| phone | tel (LTR input) | ✔ | טלפון · "050-1234567" |
| callHour | select | ✔ (default first) | שעה נוחה לשיחה |
| message | textarea | ✖ | הודעה (לא חובה) · "למשל: עצירות כרונית, לפני ניתוח, שאלה על התקנה..." |
| company | honeypot, hidden | — | anti-bot |

Call-hour options: `לא משנה לי — מתי שנוח לכם` (default) · `בוקר (9:00–12:00)` · `צהריים (12:00–15:00)` · `אחר הצהריים (15:00–18:00)` · `ערב (18:00–20:30)`

Submit: **חזרו אליי לשיחה קצרה** (sending: "שולחים...")
Microcopy under button: אנחנו חוזרים בדרך כלל תוך מספר שעות, בשעות הפעילות.
Success: **תודה! קיבלנו את הפרטים.** — נציג מטעמנו יחזור אליכם בשעה שביקשתם.

Israeli phone validation: `/^0(5\d|7\d|[2-4]|[8-9])\d{7}$/` after stripping non-digits.
POST `/api/lead` → delivers via `LEAD_WEBHOOK_URL` and/or Resend (`RESEND_API_KEY` + `LEAD_EMAIL_TO`).

---

## 5. Research papers (6, peer-reviewed)

Full texts (Hebrew + English) live in `content/papers/*.md`. Pages default to English.

| # | Title | Journal | Year | Page |
|---|---|---|---|---|
| 1 | Comparison of Straining During Defecation in Three Positions | Digestive Diseases and Sciences 48(7):1201-1205 | 2003 | `/research/comparison-of-straining` |
| 2 | Symptoms of Hemorrhoids Diminished Significantly or Ceased Completely by Changing from the Sitting to the Squatting Defecation Position | Israel Medical Association Journal (IMAJ) 23(4):264 (letter) | 2021 | `/research/symptoms-of-hemorrhoids` |
| 3 | Cardio-Vascular Events at Defecation: Are They Unavoidable? | Medical Hypotheses 32(3):231-233 | 1990 | `/research/cardio-vascular-events` |
| 4 | Primary Constipation: An Underlying Mechanism | Medical Hypotheses 28(2):71-73 | 1989 | `/research/primary-constipation` |
| 5 | Etiology and Pathogenesis of Diverticulosis Coli: A New Approach | Medical Hypotheses 26(1):17-20 | 1988 | `/research/etiology-of-diverticulosis-coli` |
| 6 | Management of Hemorrhoids: A New Approach | Israel Journal of Medical Sciences 23(4):284-286 | 1987 | `/research/management-of-hemorrhoids` |

Hebrew one-line summaries (used on cards):
1. המחקר המרכזי: 28 נבדקים נמדדו בשלוש תנוחות — בכריעה נדרשו שליש מהזמן וכמעט ללא מאמץ, עם תחושת התרוקנות מלאה.
2. מכתב שפורסם בכתב העת של ההסתדרות הרפואית בישראל: תסמיני טחורים פחתו משמעותית או נעלמו לאחר מעבר לכריעה.
3. המאמץ בישיבה מפעיל שוב ושוב את תמרון ולסלבה ומעמיס על הלב — בכריעה המאמץ פוחת באופן ניכר.
4. עצירות ראשונית מוסברת כתוצאה של התרוקנות לא שלמה בישיבה — יישור הזווית בכריעה מאפשר ריקון טבעי ומלא.
5. לחצים מוגברים במעי בעת מאמץ בישיבה נקשרים להיווצרות סעיפים (דיברטיקולות) — ממצא נדיר בעמים שנוהגים לכרוע.
6. מעקב אחר חולי טחורים שעברו לכריעה: הקלה מהירה בתסמינים ללא ניתוח וללא תרופות.

Author credit: Dr. Dov (Berko) Sikirov, M.D. (published as B. A. Sikirov / Berko Sikirov / Dov Sikirov).

---

## 6. Press coverage (real articles, verified links)

| Outlet | Headline (Hebrew) | Link |
|---|---|---|
| TheMarker | אתם יושבים טוב? ככה באמת היינו אמורים לבלות בשירותים — פטנט גאוני ממציא מחדש את בית השימוש | https://www.themarker.com/labels/2019-03-13/ty-article-labels/0000017f-f88b-d47e-a37f-f9bf25c50000 |
| הארץ | יכול להיות שאנחנו עושים קקי לא נכון? | https://www.haaretz.co.il/magazine/2019-04-03/ty-article-magazine/.premium/0000017f-e007-d804-ad7f-f1ffc2630000 |
| ynet | 10 הטעויות שאתם עושים בשירותים — שעלולות להזיק לבריאות | https://www.ynet.co.il/articles/0,7340,L-5291707,00.html |
| מעריב | יציאת מצרים — איך מטפלים בעצירות שאחרי הפסח? | https://www.maariv.co.il/news/health/article-1095397 |

Each clipping links to the full article (new tab). Caption pattern: "מתוך הכתבה ב־{outlet}" + "לכתבה המלאה ↗".

---

## 7. Navigation & pages

Sections/anchors: `#hero` · `#problem` · `#how-it-works` · `#research` · `#doctor` · `#faq` · `#form`
Header nav labels: איך זה עובד · המחקרים · ד"ר סיקירוב · שאלות נפוצות · CTA "ייעוץ חינם"
Pages: `/` · `/research/[slug]` (6) · `/privacy` · `/accessibility`

---

## 8. SEO

- Title: `מתקן כריעה לאסלה | הקלה בעצירות וטחורים | MedLogic`
- Description: `אסלת הכריעה של ד"ר סיקירוב מאפשרת התרוקנות טבעית ומלאה בתנוחת כריעה. מבוסס על 6 מחקרים רפואיים, פטנט בינלאומי. השאירו פרטים לשיחת ייעוץ ללא התחייבות.`
- OG title: `מדלוג'יק – עוברים לכריעה, נפרדים מהמאמץ`
- OG image: `/images/hero.jpg`
- `lang="he" dir="rtl"`, canonical `https://medlogic.co.il`
- JSON-LD: FAQPage (from §3 FAQ).

---

## 9. Legal text (footer, verbatim)

> המידע באתר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי, אבחון או המלצה לטיפול. מתקן הכריעה מסייע לתנוחת התרוקנות טבעית ואינו תחליף לבדיקה או לטיפול אצל רופא. בכל מקרה של תסמינים מתמשכים, דימום או כאב — יש לפנות לרופא. התוצאות המתוארות משקפות חוויות אישיות ועשויות להשתנות מאדם לאדם.

Footer tagline: פיתוח ישראלי מבוסס מחקר להתרוקנות טבעית ובריאה. פטנט בינלאומי רשום.
Hours: ימים א׳–ה׳, 9:00–19:00
Copyright: © {year} MedLogic. כל הזכויות שמורות.

---

## 10. Missing — owner must supply

- [ ] Phone number (display + E.164), WhatsApp number, email → `lib/site.ts`. **Currently empty; all phone/WhatsApp UI is hidden.** This is the biggest conversion blocker.
- [ ] Lead delivery: set `LEAD_WEBHOOK_URL` or `RESEND_API_KEY` + `LEAD_EMAIL_TO` in Vercel. **Until then leads are not delivered anywhere.**
- [ ] Exact warranty / trial-period wording (FAQ #6 currently defers it to the phone call).
- [ ] Price range decision (currently intentionally withheld to force the call).
- [ ] More real product photos — installed kit in a real bathroom, close-up of the step surfaces, someone using it.
- [ ] Domain `medlogic.co.il` DNS → Vercel.
