// Small helpers to turn a form submission into a tidy notification email.

// Builds the notification subject from the form's own title, so every message
// that lands in the inbox is labelled by the form it came from. An optional
// ref (company / name / ticket) disambiguates multiple submissions.
export function subjectLine(formTitle: string, ref?: string): string {
  const r = (ref ?? "").trim();
  return r ? `${formTitle} — ${r}` : formTitle;
}

export function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Renders a "how they answered" section from a diagnostic's per-question
// responses (question text, the option they chose, and its score).
export function responsesSection(
  items: { q: string; a: string; score: number; max: number }[],
): string {
  if (!Array.isArray(items) || items.length === 0) return "";
  const rows = items
    .map(
      (it, i) =>
        `<div style="padding:11px 0;border-bottom:1px solid #eef2f1">
          <div style="font:600 13px system-ui;color:#0b3d38;margin:0 0 3px">${i + 1}. ${escapeHtml(it.q)}</div>
          <div style="font:14px system-ui;color:#1c1b1b">${escapeHtml(it.a)} <span style="color:#17a892;font:600 12px system-ui;white-space:nowrap">(${Number(it.score) || 0}/${Number(it.max) || 3})</span></div>
        </div>`,
    )
    .join("");
  return `<div style="margin-top:22px">
    <div style="font:700 12px system-ui;color:#6e7977;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 6px">How they answered</div>
    ${rows}
  </div>`;
}

// Renders [label, value] rows into a simple branded HTML email body.
// `extra` is optional HTML appended after the fields table (e.g. responses).
export function fieldsEmail(
  heading: string,
  intro: string,
  rows: [string, string | undefined | null][],
  extra?: string,
): string {
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
      ${extra ?? ""}
    </div>
  </div>`;
}
