import { google } from "googleapis";

/**
 * Appends a row to a Google Sheet using a service account.
 *
 * Setup required (see /SETUP.md for full walkthrough):
 *   1. Create a Google Cloud service account, enable the Sheets API.
 *   2. Share your Google Sheet with the service account's email (Editor access).
 *   3. Put these in your .env.local / Vercel environment variables:
 *        GOOGLE_SERVICE_ACCOUNT_EMAIL
 *        GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY   (keep the \n characters literal, see SETUP.md)
 *        GOOGLE_SHEET_ID                      (the long ID in the sheet's URL)
 *
 * If these env vars are not set, this function logs a warning and returns
 * without throwing — so the site keeps working (emails still send) even
 * before Sheets logging is configured.
 */
export async function appendRowToSheet(sheetName, row) {
  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    GOOGLE_SHEET_ID,
  } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    console.warn(
      "[sheets] Skipping Google Sheets logging — environment variables not configured yet. See SETUP.md."
    );
    return { skipped: true };
  }

  try {
    const auth = new google.auth.JWT(
      GOOGLE_SERVICE_ACCOUNT_EMAIL,
      null,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return { skipped: false };
  } catch (err) {
    // Sheets logging failing should never block the email from sending or
    // the user from seeing a success message — log and move on.
    console.error("[sheets] Failed to append row:", err.message);
    return { skipped: true, error: err.message };
  }
}
