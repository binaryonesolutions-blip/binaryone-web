import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Binary One Solutions | Managed IT, ERP & NAWIRI Loyalty Kenya",
    template: "%s | Binary One Solutions",
  },
  description:
    "Nairobi-based Managed IT, Virtual CIO, ERP consulting and NAWIRI loyalty solutions for growing Kenyan organisations. Book a Free IT Assessment.",
};

// Fixed 1440px canvas + zoom shim (Guide §2). Shipped as-is for a pixel-exact
// clone; runs before paint to avoid a flash of unscaled layout.
const canvasZoomShim = `
(function(){
  function fit(){
    var w = document.documentElement.clientWidth || window.innerWidth;
    var r = w / 1440;
    if (r > 1.6) r = 1.6;
    if (r < 0.15) r = 0.15;
    document.documentElement.style.zoom = r;
  }
  fit();
  window.addEventListener('resize', fit);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: canvasZoomShim }} />
        {children}
      </body>
    </html>
  );
}
