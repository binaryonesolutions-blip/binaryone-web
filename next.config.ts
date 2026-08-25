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
    // Security headers applied to every page response (production hardening).
    const security = [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [
      {
        // Images/fonts in /public: cache a day, revalidate in the background.
        // (/_next/static immutable caching is handled by public/_headers on the
        // Cloudflare assets binding + Next's own defaults.)
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        // HTML + RSC payloads (everything else): always revalidate (stops a
        // deploy serving stale pages that point at gone JS chunks) + security.
        source: "/:path((?!_next/static|_next/image|assets/).*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }, ...security],
      },
    ];
  },
  async redirects() {
    // Canonicalise on the apex: www.binaryone.co.ke -> binaryone.co.ke.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.binaryone.co.ke" }],
        destination: "https://binaryone.co.ke/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// Deploys to Cloudflare Workers via OpenNext. This call lets `next dev` access
// Cloudflare bindings (env vars, KV, R2…) locally; it is a no-op in production.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
