import type { MetadataRoute } from "next";

// Emit a static robots.txt at build time (required with output:'export').
export const dynamic = "force-static";

const BASE = "https://binaryone.co.ke";

// Explicitly welcome search engines AND the major AI/LLM crawlers, so the site
// can be indexed for both classic search and generative-engine answers.
const aiBots = [
  "GPTBot", // OpenAI / ChatGPT
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic / Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Google Gemini / Vertex
  "Applebot-Extended", // Apple Intelligence
  "Bytespider",
  "Amazonbot",
  "CCBot", // Common Crawl (feeds many models)
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
