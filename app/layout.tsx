import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import HashScroll from "@/components/util/HashScroll";

// Three families, one load, on every page (Developer Guide §4).
// Self-hosted by next/font — resolves to the same families/weights the design
// files load from Google Fonts, without the CDN request.
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--ff-sora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--ff-jet",
  display: "swap",
});
// Caveat — used once, on the NAWIRI pricing headline (Guide §4).
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--ff-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://binaryone.co.ke"),
  // Fallback document title only. Per-page titles are now set on each route via
  // lib/seo.pageMeta (SEO checklist §B, 18 Oct 2026 — supersedes the 31 Aug 2026
  // site-wide single-title instruction). Any route without its own title falls
  // back to this string.
  title: "Binary One Solutions | Digital Transformation Solutions - Kenya",
  icons: {
    icon: [
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  description:
    "Nairobi-based Managed IT, Virtual CIO, ERP consulting and NAWIRI loyalty solutions for growing Kenyan organisations. Book a Free IT Assessment.",
  applicationName: "Binary One Solutions",
  // No `keywords` meta — Google ignores it and it was duplicated site-wide
  // (SEO checklist §C4). Per-page keywords intentionally omitted.
  openGraph: {
    type: "website",
    siteName: "Binary One Solutions",
    locale: "en_GB",
    url: "https://binaryone.co.ke",
    title: "Binary One Solutions | Managed IT, ERP & NAWIRI Loyalty Kenya",
    description:
      "Managed IT, ERP governance and digital products for growing Kenyan and East African organisations. Book a Free IT Assessment.",
    images: [{ url: "/assets/it-icons-banner.png", width: 1200, height: 630, alt: "Binary One Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Binary_One_Sol",
    title: "Binary One Solutions | Managed IT, ERP & NAWIRI Loyalty Kenya",
    description:
      "Managed IT, ERP governance and digital products for growing Kenyan and East African organisations.",
    images: ["/assets/it-icons-banner.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body>
        <StructuredData />
        <HashScroll />
        <main>{children}</main>
      </body>
    </html>
  );
}
