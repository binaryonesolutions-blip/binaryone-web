"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reliable in-page anchor scrolling. Native fragment navigation is brittle
// (and was effectively dead behind the old `overflow-x:hidden` roots), so we
// drive it explicitly: scroll the #id element into view on mount (handles
// cross-page links like /about#leadership) and on every hashchange (handles
// same-page links like the hero's "Explore Our Solutions"). scrollIntoView
// honours the CSS `scroll-padding-top`, so targets land below the sticky header.
export default function HashScroll() {
  // Layouts persist across client-side navigation, so re-run on pathname change
  // to handle cross-page anchors (e.g. footer "Leadership" → /about#leadership).
  const pathname = usePathname();
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    };

    scrollToHash();
    // Re-scroll once shortly after mount, in case late layout (fonts/images)
    // shifted a cross-page target after the first pass.
    const settle = setTimeout(scrollToHash, 140);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(settle);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
