// Delivery abstraction. When Graph secrets are present, sends real email /
// calendar invites; otherwise runs in "preview" mode (logs the payload) so the
// whole form pipeline works locally without any credentials.
import { graphConfigured, senderAddress, notifyAddress } from "./env";
import { graphSendMail, graphCreateEvent } from "./graph";

export async function deliverNotification(
  subject: string,
  html: string,
  replyTo?: string,
): Promise<{ preview: boolean }> {
  if (!graphConfigured()) {
    console.log("[forms:preview] email →", notifyAddress(), "|", subject, {
      replyTo,
    });
    return { preview: true };
  }
  await graphSendMail({
    from: senderAddress(),
    to: [notifyAddress()],
    subject,
    html,
    replyTo,
  });
  return { preview: false };
}

export async function deliverAdvisoryInvite(opts: {
  subject: string;
  notifySubject: string;
  bodyHtml: string;
  startISO: string;
  endISO: string;
  timeZone: string;
  requesterName: string;
  requesterEmail: string;
  partnerName: string;
  partnerEmail?: string;
  location?: string;
  notifyHtml: string;
}): Promise<{ preview: boolean; eventId?: string; eventWebLink?: string; organizer?: string }> {
  if (!graphConfigured()) {
    console.log("[forms:preview] advisory invite →", opts.requesterEmail, "|", opts.subject, {
      notifySubject: opts.notifySubject,
      partner: opts.partnerName,
      start: opts.startISO,
    });
    return { preview: true };
  }
  const attendees = [
    { address: opts.requesterEmail, name: opts.requesterName },
    ...(opts.partnerEmail
      ? [{ address: opts.partnerEmail, name: opts.partnerName }]
      : []),
  ];
  const organizer = senderAddress();
  // Event owned by the shared mailbox; requester (+partner) invited.
  const event = await graphCreateEvent({
    organizer,
    subject: opts.subject,
    bodyHtml: opts.bodyHtml,
    startISO: opts.startISO,
    endISO: opts.endISO,
    timeZone: opts.timeZone,
    attendees,
    location: opts.location,
  });
  // TEMP diagnostic: prove where the event landed (visible in Worker logs).
  console.log("[forms] advisory event created →", { organizer, id: event.id, webLink: event.webLink });
  // Internal heads-up to the team inbox as well.
  await graphSendMail({
    from: organizer,
    to: [notifyAddress()],
    subject: opts.notifySubject,
    html: opts.notifyHtml,
    replyTo: opts.requesterEmail,
  });
  return { preview: false, eventId: event.id, eventWebLink: event.webLink, organizer };
}
