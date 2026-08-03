// Reads a runtime value from the Cloudflare Worker env (OpenNext) with a
// process.env fallback so it also works under `next dev` and in tests.
// Secrets live in Cloudflare (wrangler secret) or a local `.dev.vars`.
import { getCloudflareContext } from "@opennextjs/cloudflare";

export function getEnv(key: string): string | undefined {
  try {
    const { env } = getCloudflareContext();
    const v = (env as Record<string, unknown>)[key];
    if (typeof v === "string" && v.length > 0) return v;
  } catch {
    // Not in a Cloudflare request context (e.g. build) — fall through.
  }
  const p = process.env[key];
  return p && p.length > 0 ? p : undefined;
}

// True once the Microsoft Graph app-registration secrets are present.
// Until then, delivery runs in local "preview" mode (logs instead of sends).
export function graphConfigured(): boolean {
  return Boolean(
    getEnv("AZURE_TENANT_ID") &&
      getEnv("AZURE_CLIENT_ID") &&
      getEnv("AZURE_CLIENT_SECRET"),
  );
}

// Mailbox that sends + receives form notifications. Overridable via secrets.
export const senderAddress = () => getEnv("GRAPH_SENDER") || "info@binaryone.co.ke";
export const notifyAddress = () => getEnv("NOTIFY_TO") || "info@binaryone.co.ke";
