import { Resend } from "resend";
import { appendRowToSheet } from "@/lib/sheets";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const RESERVATION_INBOX = process.env.RESERVATION_INBOX || "DrillTours@gmail.com";

// IMPORTANT: drilltours.com is owned but NOT yet verified inside Resend (Domains → Add
// Domain → add the DNS records Resend provides). Until that verification completes, Resend
// silently REJECTS any send from a @drilltours.com address — the API call still "succeeds"
// from this route's point of view unless you check `error`, which is exactly what was causing
// reservations to never arrive. RESERVE_FROM_EMAIL defaults to Resend's sandbox address, which
// is allowed to send with zero setup, so email delivery works today. Once drilltours.com is
// verified in Resend, set RESERVE_FROM_EMAIL="Drill Tours Reservations <reservations@drilltours.com>"
// as an env var and this will switch over automatically — no code change needed.
const FROM_EMAIL = process.env.RESERVE_FROM_EMAIL || "Drill Tours Reservations <onboarding@resend.dev>";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      country = "",
      phone = "",
      destination = "",
      travelers = "",
      date = "",
      pkg = "",
      notes = "",
    } = body;

    // Basic required-field validation — mirrors the `required` attributes on the form.
    // Coerce to string first since destructuring defaults don't catch explicit null.
    const safeName = String(name ?? "").trim();
    const safeEmail = String(email ?? "").trim();
    if (!safeName || !safeEmail) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    // 1. Send the notification email.
    let emailResult = { skipped: true };
    if (resend) {
      try {
        const { error } = await resend.emails.send({
          from: FROM_EMAIL,
          to: [RESERVATION_INBOX],
          replyTo: email,
          subject: `New reservation request — ${name}${destination ? ` (${destination})` : ""}`,
          html: `
            <h2>New Reservation Request</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Country:</strong> ${escapeHtml(country)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Destination:</strong> ${escapeHtml(destination)}</p>
            <p><strong>Travelers:</strong> ${escapeHtml(travelers)}</p>
            <p><strong>Travel Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Package Type:</strong> ${escapeHtml(pkg)}</p>
            <p><strong>Notes:</strong> ${escapeHtml(notes) || "—"}</p>
            <hr />
            <p style="color:#888;font-size:12px;">Submitted ${submittedAt}</p>
          `,
        });
        if (error) {
          console.error("[reserve] Resend error:", JSON.stringify(error));
          emailResult = { skipped: true, error: error.message || String(error) };
        } else {
          emailResult = { skipped: false };
        }
      } catch (err) {
        console.error("[reserve] Email send failed:", err.message);
        emailResult = { skipped: true, error: err.message };
      }
    } else {
      console.warn("[reserve] RESEND_API_KEY not set — skipping email send. See SETUP.md.");
    }

    // 2. Log the row to Google Sheets (non-blocking on failure).
    const sheetResult = await appendRowToSheet("Reservations", [
      submittedAt,
      name,
      email,
      country,
      phone,
      destination,
      travelers,
      date,
      pkg,
      notes,
    ]);

    return Response.json({
      ok: true,
      emailSent: !emailResult.skipped,
      loggedToSheet: !sheetResult.skipped,
    });
  } catch (err) {
    console.error("[reserve] Unexpected error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
