import type { Metadata } from "next";

// Per-page metadata builder (SEO checklist §B titles + §C social metadata).
//
// Next shallow-merges metadata across segments: a page that sets `openGraph`
// REPLACES the root layout's `openGraph` entirely (it does NOT deep-merge — see
// node_modules/next/dist/docs/.../generate-metadata.md §Merging). So every page
// must re-declare the shared share-image + site identity. This helper keeps that
// in one place and guarantees:
//   • exactly one per-page <title>,
//   • og:url + canonical resolve to the SAME absolute URL (relative paths are
//     resolved against metadataBase in app/layout.tsx),
//   • og/twitter title + description follow the page's own title + description,
//   • the 1200×630 share image is present on every page.

const OG_IMAGE = {
  url: "/assets/it-icons-banner.png",
  width: 1200,
  height: 630,
  alt: "Binary One Solutions",
} as const;

export interface PageMetaInput {
  /** Canonical path, e.g. "/managed-it" ("/" for the home page). */
  path: string;
  /** Exact per-page document title. */
  title: string;
  /** Meta description — also drives og:description and twitter:description. */
  description: string;
  /** Optional per-page robots override (e.g. the noindex company profile). */
  robots?: Metadata["robots"];
  /** Optional per-page share image (defaults to the site banner). */
  image?: { url: string; width: number; height: number; alt: string };
}

export function pageMeta({
  path,
  title,
  description,
  robots,
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Binary One Solutions",
      locale: "en_GB",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Binary_One_Sol",
      title,
      description,
      images: [image.url],
    },
    ...(robots ? { robots } : {}),
  };
}
