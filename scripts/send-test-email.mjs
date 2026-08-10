// Preview / send a sample of the branded notification email that the site's
// forms generate — so you can see how it looks before wiring up Azure/Graph.
//
//   1) Just preview (no credentials needed):
//        node scripts/send-test-email.mjs
//      → writes email-preview.html; open it in your browser.
//
//   2) Send it to your own Gmail to check inbox rendering:
//        pnpm add -D nodemailer          (one-time)
//        # In Google Account → Security → 2-Step Verification → App passwords,
//        # create a 16-char app password (NOT your normal password).
//        GMAIL_USER=you@gmail.com GMAIL_APP_PASSWORD=abcd efgh ijkl mnop \
//          node scripts/send-test-email.mjs you@gmail.com
//
// This mirrors lib/forms/format.ts (fieldsEmail) so the preview matches prod.

import { writeFileSync } from "node:fs";

const escapeHtml = (v) =>
  String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const fieldsEmail = (heading, intro, rows) => {
  const cells = rows
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(
      ([label, v]) =>
        `<tr><td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;font:600 13px system-ui;color:#6e7977;white-space:nowrap;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;font:14px system-ui;color:#1c1b1b">${escapeHtml(
          String(v),
        )}</td></tr>`,
    )
    .join("");
  return `<div style="max-width:640px;margin:0 auto;font-family:system-ui">
    <div style="background:#071e1b;color:#fff;padding:18px 22px;border-radius:12px 12px 0 0">
      <div style="font:700 16px system-ui">Binary One Solutions</div>
      <div style="font:13px system-ui;color:#9EFF5A">${escapeHtml(heading)}</div>
    </div>
    <div style="border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px;padding:20px 22px">
      <p style="font:14px system-ui;color:#3e4947;margin:0 0 16px">${escapeHtml(intro)}</p>
      <table style="border-collapse:collapse;width:100%">${cells}</table>
    </div>
  </div>`;
};

// --- Sample submission (Free IT Assessment) ---
const title = "Free IT Assessment";
const html = fieldsEmail(title, "A new assessment request came in from the website.", [
  ["Name", "Sam Buyer"],
  ["Organisation", "Zenith Millers"],
  ["Role / title", "IT Manager"],
  ["Work email", "sam@zenith.co.ke"],
  ["Phone", "+254 733 000 000"],
  ["Users / workstations", "120"],
  ["Current IT setup", "Mixed on-prem + Microsoft 365"],
  ["Main concern", "Cybersecurity"],
  ["Preferred date", "2026-08-12"],
  ["Message", "Please advise on our IT roadmap."],
]);
const subject = `${title} — Zenith Millers`;

const to = process.argv[2];

if (!to || to.startsWith("--")) {
  writeFileSync(
    "email-preview.html",
    `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#f3f4f6;padding:24px">${html}</body></html>`,
  );
  console.log("Wrote email-preview.html — open it in a browser.");
  console.log("Subject line would be:", subject);
} else {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Set GMAIL_USER and GMAIL_APP_PASSWORD env vars first (see header of this file).");
    process.exit(1);
  }
  const nodemailer = (await import("nodemailer")).default;
  const transport = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  await transport.sendMail({ from: user, to, subject, html });
  console.log("Sent test email to", to, "— subject:", subject);
}
