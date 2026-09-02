"use server";

import { deliverNotification, deliverAdvisoryInvite } from "@/lib/forms/delivery";
import { fieldsEmail, escapeHtml, subjectLine, responsesSection } from "@/lib/forms/format";

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
  const title = "Free IT Assessment";
  const html = fieldsEmail(title, "A new assessment request came in from the website.", [
    ["Name", name], ["Organisation", org], ["Role / title", s(fd, "role")],
    ["Work email", email], ["Phone", s(fd, "phone")], ["Users / workstations", s(fd, "users")],
    ["Current IT setup", s(fd, "setup")], ["Main concern", s(fd, "concern")],
    ["Preferred date", s(fd, "meetingDate")], ["Message", s(fd, "message")],
  ]);
  return send(subjectLine(title, org), html, email);
}

// ---- General enquiry (Contact enquiry tab) ----
export async function submitEnquiry(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), email = s(fd, "email"), message = s(fd, "message");
  if (!name || !email || !message) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid email.");
  const title = "General Enquiry";
  const html = fieldsEmail(title, "A new enquiry came in from the website.", [
    ["Name", name], ["Organisation", s(fd, "org")], ["Role / title", s(fd, "role")],
    ["Email", email], ["Phone", s(fd, "phone")], ["Product of interest", s(fd, "topic")],
    ["Message", message],
  ]);
  return send(subjectLine(title, s(fd, "org") || name), html, email);
}

// ---- Data Subject Access Request (Data Protection portal) ----
export async function submitDsar(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), email = s(fd, "email"), type = s(fd, "type");
  if (!name || !email || !type) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid email.");
  const ticket = s(fd, "ticket");
  const title = "Data Subject Request";
  const html = fieldsEmail(title, "A data subject request was lodged via the portal.", [
    ["Ticket", ticket], ["Request type", type], ["Name", name],
    ["Email", email], ["Phone", s(fd, "phone")], ["Details", s(fd, "details")],
  ]);
  return send(subjectLine(title, ticket ? `${type} (${ticket})` : type), html, email);
}

// ---- Loyalty maturity self-score lead capture ----
export async function submitLoyaltyScore(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !org || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const title = "NAWIRI Loyalty Self-Score";
  const html = fieldsEmail(title, "A lead completed the NAWIRI maturity self-score.", [
    ["Name", name], ["Organisation", org], ["Work email", email],
    ["Score", s(fd, "score")], ["Band", s(fd, "band")],
  ]);
  return send(subjectLine(title, org), html, email);
}

// ---- Managed IT Readiness assessment (/managed-it/readiness) ----
export async function submitReadiness(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const title = "Managed IT Readiness Assessment";
  const html = fieldsEmail(title, "A visitor completed the Managed IT readiness assessment.", [
    ["Name", name], ["Organisation", org], ["Work email", email], ["Phone", s(fd, "phone")],
    ["Computers", s(fd, "computers")], ["Laptops", s(fd, "laptops")], ["Servers", s(fd, "servers")],
    ["Branches", s(fd, "branches")], ["Staff", s(fd, "staff")],
    ["Indicative service pack", s(fd, "pack")], ["Fit", s(fd, "packFit")],
    ["Why this pack", s(fd, "packWhy")],
  ]);
  return send(subjectLine(title, org || name), html, email);
}

// ---- Diagnostic booking (Enterprise IT & AI Diagnostic modal) ----
export async function submitDiagnostic(_prev: ActionResult | null, fd: FormData): Promise<ActionResult> {
  if (isBot(fd)) return OK(true);
  // Organisation is optional in the diagnostic modal (31AUG design) — only name,
  // a valid email and a reachable phone are required there.
  const name = s(fd, "name"), org = s(fd, "org"), email = s(fd, "email");
  if (!name || !email) return FAIL("Please complete the required fields.");
  if (!isEmail(email)) return FAIL("Please enter a valid work email.");
  const title = "Enterprise IT & AI Diagnostic";
  let responses: { q: string; a: string; score: number; max: number }[] = [];
  try {
    const parsed = JSON.parse(s(fd, "answers") || "[]");
    if (Array.isArray(parsed)) responses = parsed;
  } catch { /* ignore malformed answers payload */ }
  const html = fieldsEmail(
    title,
    "A visitor finished the diagnostic and asked for a follow-up.",
    [
      ["Name", name], ["Organisation", org], ["Work email", email],
      ["Phone", s(fd, "phone")], ["Readiness score", s(fd, "score")], ["Grade", s(fd, "grade")],
      ["Most pressing priority", s(fd, "message")],
    ],
    responsesSection(responses),
  );
  return send(subjectLine(title, org), html, email);
}

// ---- Boardroom Advisory booking (Contact advisory modal) ----
// Times map to a fixed 90-minute slot in East Africa Time.
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
  const endISO = `${dateISO}T${addMinutes(start, 90)}:00`;
  const title = "Boardroom Advisory";
  const subject = `${title} — Binary One × ${org}`; // calendar event / meeting title
  const bodyHtml = `<p>Boardroom advisory session with <b>${escapeHtml(partnerName)}</b> and ${escapeHtml(name)} (${escapeHtml(org)}).</p>${
    input.agenda ? `<p><b>Agenda:</b> ${escapeHtml(input.agenda)}</p>` : ""
  }`;
  const notifyHtml = fieldsEmail(title, "A new advisory session was booked from the website.", [
    ["Partner", partnerName], ["Date", input.dateLabel], ["Time (EAT)", slot],
    ["Name", name], ["Organisation", org], ["Email", email],
    ["Phone", input.phone], ["Agenda", input.agenda],
  ]);

  try {
    const { preview } = await deliverAdvisoryInvite({
      subject, notifySubject: subjectLine(title, org), bodyHtml, startISO, endISO,
      timeZone: "E. Africa Standard Time",
      requesterName: name, requesterEmail: email, partnerName,
      location: "St Charles Lwanga House, 1st Floor, Ngong Road, Nairobi (or Teams link if remote)", notifyHtml,
    });
    return OK(preview);
  } catch (err) {
    console.error("[forms] advisory booking failed:", err);
    return FAIL("We couldn't confirm that slot. Please email info@binaryone.co.ke.");
  }
}
