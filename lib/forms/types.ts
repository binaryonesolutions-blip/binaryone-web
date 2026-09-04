// Shared form result + advisory input shapes, used by both the client fetch
// wrappers (lib/forms/client.ts) and the Pages Function handler.
export type ActionResult = { ok: boolean; error?: string; preview?: boolean };

export type AdvisoryInput = {
  partnerName: string;
  dateISO: string; // YYYY-MM-DD
  dateLabel: string;
  slot: string; // e.g. "09:00 AM"
  name: string;
  org: string;
  email: string;
  phone?: string;
  agenda?: string;
  website?: string; // honeypot
};
