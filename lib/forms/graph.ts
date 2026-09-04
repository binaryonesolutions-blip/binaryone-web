// Microsoft Graph client — app-only (client-credentials) flow.
// Requires an Azure AD app registration with APPLICATION permissions:
//   Mail.Send  and  Calendars.ReadWrite  (admin-consented).
// All calls are plain fetch() so they run on the Cloudflare Workers runtime
// (Pages Function). Secrets are threaded in via the `env` argument.
import type { Secrets } from "./env";

const GRAPH = "https://graph.microsoft.com/v1.0";

async function getToken(env: Secrets): Promise<string> {
  const tenant = env.AZURE_TENANT_ID;
  const clientId = env.AZURE_CLIENT_ID;
  const clientSecret = env.AZURE_CLIENT_SECRET;
  if (!tenant || !clientId || !clientSecret) throw new Error("graph-not-configured");

  const res = await fetch(
    `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );
  if (!res.ok) throw new Error(`graph-token ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { access_token: string };
  return json.access_token;
}

export async function graphSendMail(env: Secrets, opts: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const token = await getToken(env);
  const message = {
    subject: opts.subject,
    body: { contentType: "HTML", content: opts.html },
    toRecipients: opts.to.map((address) => ({ emailAddress: { address } })),
    ...(opts.replyTo
      ? { replyTo: [{ emailAddress: { address: opts.replyTo } }] }
      : {}),
  };
  const res = await fetch(
    `${GRAPH}/users/${encodeURIComponent(opts.from)}/sendMail`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ message, saveToSentItems: true }),
    },
  );
  if (!res.ok) throw new Error(`graph-sendmail ${res.status}: ${await res.text()}`);
}

export async function graphCreateEvent(env: Secrets, opts: {
  organizer: string; // mailbox that owns the event (the partner)
  subject: string;
  bodyHtml: string;
  startISO: string; // e.g. 2026-08-04T09:00:00
  endISO: string;
  timeZone: string; // e.g. "E. Africa Standard Time"
  attendees: { address: string; name?: string }[];
  location?: string;
}): Promise<{ id: string; webLink?: string }> {
  const token = await getToken(env);
  const event = {
    subject: opts.subject,
    body: { contentType: "HTML", content: opts.bodyHtml },
    start: { dateTime: opts.startISO, timeZone: opts.timeZone },
    end: { dateTime: opts.endISO, timeZone: opts.timeZone },
    ...(opts.location ? { location: { displayName: opts.location } } : {}),
    attendees: opts.attendees.map((a) => ({
      emailAddress: { address: a.address, name: a.name },
      type: "required",
    })),
    allowNewTimeProposals: true,
  };
  const res = await fetch(
    `${GRAPH}/users/${encodeURIComponent(opts.organizer)}/events`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    },
  );
  if (!res.ok) throw new Error(`graph-createevent ${res.status}: ${await res.text()}`);
  return (await res.json()) as { id: string; webLink?: string };
}
