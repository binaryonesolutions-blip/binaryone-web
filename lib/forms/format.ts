// Small helpers to turn a form submission into a tidy notification email.

export function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Renders [label, value] rows into a simple branded HTML email body.
export function fieldsEmail(
  heading: string,
  intro: string,
  rows: [string, string | undefined | null][],
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
    </div>
  </div>`;
}
