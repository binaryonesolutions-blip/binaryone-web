// Secrets come from the Cloudflare Pages Function runtime (context.env). This
// module is intentionally free of any framework/OpenNext import so it can run
// inside a plain Pages Function on the Workers runtime.
export type Secrets = Record<string, string | undefined>;

// True once the Microsoft Graph app-registration secrets are present.
// Until then, delivery runs in "preview" mode (logs instead of sends).
export function graphConfigured(env: Secrets): boolean {
  return Boolean(env.AZURE_TENANT_ID && env.AZURE_CLIENT_ID && env.AZURE_CLIENT_SECRET);
}

// Mailbox that sends + receives form notifications. Overridable via secrets.
export const senderAddress = (env: Secrets) => env.GRAPH_SENDER || "info@binaryone.co.ke";
export const notifyAddress = (env: Secrets) => env.NOTIFY_TO || "info@binaryone.co.ke";
