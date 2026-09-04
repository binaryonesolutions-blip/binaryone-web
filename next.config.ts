import type { NextConfig } from "next";

// Static export → deployed to Cloudflare Pages. Every page is a prebuilt static
// file served directly by Cloudflare's CDN, so no Worker runs for a page view
// (this is what ends the "Error 1102 — Worker exceeded resource limits"). The
// only server code is the forms endpoint at functions/api/submit.ts (a Pages
// Function), which runs solely on form submit.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // No image optimiser at the edge; we ship pre-optimised WebP and serve the
    // files directly as static assets.
    unoptimized: true,
  },
  // NB: headers() and redirects() are NOT supported with output:'export'. They
  // now live in public/_headers and public/_redirects (Cloudflare Pages).
};

export default nextConfig;
