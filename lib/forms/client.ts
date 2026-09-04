// Client-side form submitters. These keep the exact signatures of the old
// server actions, so components only change their import path. Each POSTs the
// form data (tagged with a `type`) to the /api/submit Pages Function, which
// does the Microsoft Graph send and returns the ActionResult.
import type { ActionResult, AdvisoryInput } from "./types";

export type { ActionResult, AdvisoryInput };

async function post(fd: FormData): Promise<ActionResult> {
  try {
    const res = await fetch("/api/submit", { method: "POST", body: fd });
    return (await res.json()) as ActionResult;
  } catch {
    return { ok: false, error: "Something went wrong. Please email info@binaryone.co.ke." };
  }
}

function tagged(type: string, fd: FormData): FormData {
  fd.set("type", type);
  return fd;
}

export const submitAssessment = (_prev: ActionResult | null, fd: FormData) => post(tagged("assessment", fd));
export const submitEnquiry = (_prev: ActionResult | null, fd: FormData) => post(tagged("enquiry", fd));
export const submitDsar = (_prev: ActionResult | null, fd: FormData) => post(tagged("dsar", fd));
export const submitLoyaltyScore = (_prev: ActionResult | null, fd: FormData) => post(tagged("loyalty", fd));
export const submitReadiness = (_prev: ActionResult | null, fd: FormData) => post(tagged("readiness", fd));
export const submitDiagnostic = (_prev: ActionResult | null, fd: FormData) => post(tagged("diagnostic", fd));

export async function bookAdvisory(input: AdvisoryInput): Promise<ActionResult> {
  const fd = new FormData();
  fd.set("type", "advisory");
  fd.set("partnerName", input.partnerName);
  fd.set("dateISO", input.dateISO);
  fd.set("dateLabel", input.dateLabel);
  fd.set("slot", input.slot);
  fd.set("name", input.name);
  fd.set("org", input.org);
  fd.set("email", input.email);
  if (input.phone) fd.set("phone", input.phone);
  if (input.agenda) fd.set("agenda", input.agenda);
  if (input.website) fd.set("website", input.website);
  return post(fd);
}
