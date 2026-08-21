/**
 * MedLogic — lead sink for Google Sheets.
 *
 * Receives the JSON that app/api/lead/route.ts posts to LEAD_WEBHOOK_URL,
 * appends a row, and (optionally) emails a notification.
 *
 * SETUP
 *  1. Create a Google Sheet (sheets.new). Name it e.g. "MedLogic – לידים".
 *  2. Extensions → Apps Script. Delete the placeholder, paste this file, Save.
 *  3. Put your address in NOTIFY_EMAIL below if you want an email per lead.
 *  4. Deploy → New deployment → type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone          ← required; the site posts anonymously
 *     Authorise when prompted (the "unverified app" warning is expected — it is
 *     your own script; choose Advanced → Go to … ).
 *  5. Copy the /exec URL it gives you. That is LEAD_WEBHOOK_URL.
 *
 * Re-deploying after an edit: Deploy → Manage deployments → edit → Version:
 * New version. Editing the code alone does not update the live URL.
 */

/** Tab the leads are written to; created automatically on the first lead. */
const SHEET_NAME = 'Leads';

/** Leave empty to skip the notification email. */
const NOTIFY_EMAIL = '';

function doPost(e) {
  // Two submissions landing together would otherwise race for the same row.
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const lead = JSON.parse(e.postData.contents);

    getSheet_().appendRow([
      new Date(),
      lead.name || '',
      // Leading apostrophe keeps 05x… as text; as a number Sheets eats the 0.
      "'" + (lead.phone || ''),
      lead.callHour || '',
      lead.message || '',
      lead.page || '',
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'ליד חדש מהאתר: ' + (lead.name || '') + ' (' + (lead.phone || '') + ')',
        body: [
          'שם: ' + (lead.name || ''),
          'טלפון: ' + (lead.phone || ''),
          'שעה נוחה לשיחה: ' + (lead.callHour || 'לא צוינה'),
          lead.message ? 'הודעה: ' + lead.message : '',
          '',
          'נשלח: ' + (lead.submittedAt || ''),
        ].filter(String).join('\n'),
      });
    }

    return json_({ ok: true });
  } catch (err) {
    // Returning 200 with ok:false would look like success to the site, so let
    // the error propagate — the site then shows the visitor the retry message.
    throw err;
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['התקבל', 'שם', 'טלפון', 'שעה נוחה', 'הודעה', 'עמוד']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
