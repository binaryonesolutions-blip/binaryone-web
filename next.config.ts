import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // On Cloudflare Workers next/image does NOT re-encode (no sharp at the
    // edge), and the /_next/image proxy is a fragile, CPU-heavy extra hop that
    // was causing images to fail. We already ship pre-optimized WebP, so serve
    // the files directly as static assets.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Images/fonts in /public: cache a day, revalidate in the background.
        // (/_next/static immutable caching is handled by public/_headers on the
        // Cloudflare assets binding + Next's own defaults.)
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        // HTML + RSC payloads (everything else): always revalidate. This is
        // what stops a deploy from serving stale pages that point at JS chunks
        // which no longer exist (the "old content / can't navigate" bug).
        source: "/:path((?!_next/static|_next/image|assets/).*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;

// Deploys to Cloudflare Workers via OpenNext. This call lets `next dev` access
// Cloudflare bindings (env vars, KV, R2…) locally; it is a no-op in production.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
