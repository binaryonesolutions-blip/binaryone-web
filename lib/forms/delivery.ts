// Delivery abstraction. When Graph secrets are present, sends real email /
// calendar invites; otherwise runs in "preview" mode (logs the payload) so the
// whole form pipeline works locally without any credentials.
import { graphConfigured, senderAddress, notifyAddress, type Secrets } from "./env";
import { graphSendMail, graphCreateEvent } from "./graph";

export async function deliverNotification(
  env: Secrets,
  subject: string,
  html: string,
  replyTo?: string,
): Promise<{ preview: boolean }> {
  if (!graphConfigured(env)) {
    console.log("[forms:preview] email →", notifyAddress(env), "|", subject, {
      replyTo,
    });
    return { preview: true };
  }
  await graphSendMail(env, {
    from: senderAddress(env),
    to: [notifyAddress(env)],
    subject,
    html,
    replyTo,
  });
  return { preview: false };
}

export async function deliverAdvisoryInvite(env: Secrets, opts: {
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
}): Promise<{ preview: boolean }> {
  if (!graphConfigured(env)) {
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
  // Event owned by the shared mailbox; requester (+partner) invited.
  await graphCreateEvent(env, {
    organizer: senderAddress(env),
    subject: opts.subject,
    bodyHtml: opts.bodyHtml,
    startISO: opts.startISO,
    endISO: opts.endISO,
    timeZone: opts.timeZone,
    attendees,
    location: opts.location,
  });
  // Internal heads-up to the team inbox as well.
  await graphSendMail(env, {
    from: senderAddress(env),
    to: [notifyAddress(env)],
    subject: opts.notifySubject,
    html: opts.notifyHtml,
    replyTo: opts.requesterEmail,
  });
  return { preview: false };
}
