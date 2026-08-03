"use server";

import { deliverNotification, deliverAdvisoryInvite } from "@/lib/forms/delivery";
import { fieldsEmail, escapeHtml } from "@/lib/forms/format";

export type ActionResult = { ok: boolean; error?: string; preview?: boolean };
const OK = (preview: boolean): ActionResult => ({ ok: true, preview });
const FAIL = (error: string): ActionResult => ({ ok: false, error });

const s = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
// Honeypot: a hidden field real users never fill. If set, treat as a bot and
// return success without delivering.
const isBot = (fd: FormData) => s(fd, "website") !== "";

async function send(subject: string, html: string, replyTo?: string): Promise<ActionResult> {
  try {
    const { preview } = await deliverNotification(subject, html, replyTo);
    return OK(preview);
  } catch (err) {
    console.error("[forms] delivery failed:", err);
    return FAIL("We couldn't send that just now. Please email info@binaryone.co.ke.");
  }
}

// ---- Free IT Assessment (Managed IT page + Contact assessment tab) ----
export async function submitAssessment(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !org || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const html = fieldsEmail("Free IT Assessment request", "A new assessment request came in from the website.", [
    ["Name", name], ["Organisation", org], ["Role / title", s(fd, "role")],
    ["Work email", email], ["Phone", s(fd, "phone")], ["Users / workstations", s(fd, "users")],
    ["Current IT setup", s(fd, "setup")], ["Main concern", s(fd, "concern")],
    ["Preferred date", s(fd, "meetingDate")], ["Message", s(fd, "message")],
  ]);
  return send(`Free IT Assessment — ${org}`, html, email);
}

// ---- General enquiry (Contact enquiry tab) ----
export async function submitEnquiry(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), email = s(fd, "email"), message = s(fd, "message");
  if (!name || !email || !message) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid email.");
  const html = fieldsEmail("General enquiry", "A new enquiry came in from the website.", [
    ["Name", name], ["Organisation", s(fd, "org")], ["Role / title", s(fd, "role")],
    ["Email", email], ["Phone", s(fd, "phone")], ["Product of interest", s(fd, "topic")],
    ["Message", message],
  ]);
  return send(`Enquiry — ${name}`, html, email);
}

// ---- Data Subject Access Request (Data Protection portal) ----
export async function submitDsar(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), email = s(fd, "email"), type = s(fd, "type");
  if (!name || !email || !type) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid email.");
  const ticket = s(fd, "ticket");
  const html = fieldsEmail("Data request (DPA 2019)", "A data subject request was lodged via the portal.", [
    ["Ticket", ticket], ["Request type", type], ["Name", name],
    ["Email", email], ["Phone", s(fd, "phone")], ["Details", s(fd, "details")],
  ]);
  return send(`DSAR ${ticket || ""} — ${type}`.trim(), html, email);
}

// ---- Loyalty maturity self-score lead capture ----
export async function submitLoyaltyScore(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !org || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const html = fieldsEmail("Loyalty maturity self-score", "A lead completed the NAWIRI maturity self-score.", [
    ["Name", name], ["Organisation", org], ["Work email", email],
    ["Score", s(fd, "score")], ["Band", s(fd, "band")],
  ]);
  return send(`Loyalty self-score — ${org}`, html, email);
}

// ---- Diagnostic booking (Enterprise IT & AI Diagnostic modal) ----
export async function submitDiagnostic(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !org || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const html = fieldsEmail("Diagnostic follow-up request", "A visitor finished the diagnostic and asked for a follow-up.", [
    ["Name", name], ["Organisation", org], ["Work email", email],
    ["Phone", s(fd, "phone")], ["Readiness score", s(fd, "score")], ["Grade", s(fd, "grade")],
  ]);
  return send(`Diagnostic follow-up — ${org}`, html, email);
}

// ---- Boardroom Advisory booking (Contact advisory modal) ----
// Times map to a fixed 45-minute slot in East Africa Time.
const SLOT_TIMES: Record<string, string> = {
  "09:00 AM": "09:00", "10:30 AM": "10:30", "01:00 PM": "13:00",
  "02:30 PM": "14:30", "04:00 PM": "16:00",
};
const addMinutes = (hhmm: string, mins: number) => {
  const [h, m] = hhmm.split(":").map(Number);
  const t = h * 60 + m + mins;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
};

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

export async function bookAdvisory(input: AdvisoryInput): Promise<ActionResult> {
  if (input.website) return OK(true);
  const { partnerName, dateISO, slot, name, org, email } = input;
  if (!partnerName || !dateISO || !slot || !name || !org || !email)
    return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const start = SLOT_TIMES[slot];
  if (!start || !/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return FAIL("Please pick a valid date and time slot.");

  const startISO = `${dateISO}T${start}:00`;
  const endISO = `${dateISO}T${addMinutes(start, 45)}:00`;
  const subject = `Boardroom Advisory — Binary One × ${org}`;
  const bodyHtml = `<p>Boardroom advisory session with <b>${escapeHtml(partnerName)}</b> and ${escapeHtml(name)} (${escapeHtml(org)}).</p>${
    input.agenda ? `<p><b>Agenda:</b> ${escapeHtml(input.agenda)}</p>` : ""
  }`;
  const notifyHtml = fieldsEmail("Boardroom Advisory booking", "A new advisory session was booked from the website.", [
    ["Partner", partnerName], ["Date", input.dateLabel], ["Time (EAT)", slot],
    ["Name", name], ["Organisation", org], ["Email", email],
    ["Phone", input.phone], ["Agenda", input.agenda],
  ]);

  try {
    const { preview } = await deliverAdvisoryInvite({
      subject, bodyHtml, startISO, endISO, timeZone: "E. Africa Standard Time",
      requesterName: name, requesterEmail: email, partnerName,
      location: "Binary One Solutions, Ngong Road, Nairobi (or Teams)", notifyHtml,
    });
    return OK(preview);
  } catch (err) {
    console.error("[forms] advisory booking failed:", err);
    return FAIL("We couldn't confirm that slot. Please email info@binaryone.co.ke.");
  }
}
