import type { MetadataRoute } from "next";

// Emit a static sitemap.xml at build time (required with output:'export').
export const dynamic = "force-static";

const BASE = "https://binaryone.co.ke";

// path, changeFrequency, priority
const ROUTES: [string, MetadataRoute.Sitemap[number]["changeFrequency"], number][] = [
  ["", "weekly", 1.0],
  ["/managed-it", "monthly", 0.9],
  ["/erp-consulting", "monthly", 0.9],
  ["/digital-products", "monthly", 0.9],
  ["/digital-products/nawiri", "monthly", 0.8],
  ["/digital-products/agentic-ai", "monthly", 0.8],
  ["/digital-products/custom-software", "monthly", 0.8],
  ["/about", "monthly", 0.7],
  ["/insights", "weekly", 0.7],
  ["/contact", "monthly", 0.7],
  ["/managed-it/readiness", "monthly", 0.6],
  ["/erp-consulting/pitfalls-guide", "monthly", 0.6],
  ["/digital-products/nawiri/self-score", "monthly", 0.6],
  ["/data-protection", "yearly", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(([path, changeFrequency, priority]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
