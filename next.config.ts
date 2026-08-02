import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Design uses locally-hosted PNGs; serve modern formats from next/image.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 100],
  },
};

export default nextConfig;

// Deploys to Cloudflare Workers via OpenNext. This call lets `next dev` access
// Cloudflare bindings (env vars, KV, R2…) locally; it is a no-op in production.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
