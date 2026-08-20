// Homepage content — transcribed verbatim from design-refs/Homepage.dc.html.
// Do not paraphrase (Developer Guide fidelity rule).

export const trustChips = [
  "15+ years",
  "Nairobi-based",
  "Virtual CIO-led",
  "ERP governance",
  "NAWIRI loyalty",
  "AI-forward",
  "Named IT Operations Lead",
];

export const whyPoints = [
  { lead: "A Virtual CIO", rest: "gives leadership a technology roadmap, budget discipline and board-ready reporting." },
  { lead: "An IT Operations Lead", rest: "ensures the work actually happens: tickets, site visits, escalations, vendors and SLAs." },
  { lead: "ERP advisory is kept vendor-neutral,", rest: "so the business case drives the software decision — not reseller commission." },
  { lead: "Digital products are approached with the same discipline:", rest: "scoped, governed, measurable and practical." },
];

// Process cards — Discover → Improve, under the "Our AIM-IT Methodology" heading.
// iconPath copied verbatim; rendered as a 22px stroked SVG (#0f766e).
export const processSteps = [
  { num: "01", label: "Discover", copy: "We start by understanding the current environment, risks, users, systems and leadership priorities.", iconPath: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4-4" },
  { num: "02", label: "Prioritise", copy: "We turn noise into a short list of risks, quick wins and strategic next steps.", iconPath: "M4 6h10M4 12h7M4 18h4M17 8v10M17 8l-3 3M17 8l3 3" },
  { num: "03", label: "Govern", copy: "We align technology decisions to business value, budgets, vendors and accountability.", iconPath: "M12 3 4 6v5c0 4.5 3.4 8.3 8 9.5 4.6-1.2 8-5 8-9.5V6l-8-3ZM9 12l2 2 4-4" },
  { num: "04", label: "Deliver", copy: "We mobilise engineers, implementation partners or product teams depending on the approved roadmap.", iconPath: "M12 3c3.5 1.5 5.5 5 5.5 9L12 18l-5.5-6c0-4 2-7.5 5.5-9ZM12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.5 17 6 21M15.5 17 18 21" },
  { num: "05", label: "Improve", copy: "We review performance, report clearly and propose practical improvements every cycle.", iconPath: "M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" },
];

export const testimonials = [
  { quote: "We handed our whole IT operation to Binary One. Running costs down, standards world-class.", person: "Mumbi Kariuki", role: "Director", org: "International Safety & Training Centre", logo: "/assets/istc-mark.webp" },
  { quote: "Odoo done right — ERP costs cut by half, with accounts, production and POS finally in step.", person: "Patrick Meme", role: "General Manager", org: "Royal Oven Tanzania", logo: "/assets/royal-oven-logo.webp" },
  { quote: "NAWIRI is not a tool, it is revenue. It puts us straight in front of the mechanics who move our parts.", person: "Peris Temba", role: "Parts Marketing Executive", org: "Isuzu East Africa", logo: "/assets/isuzu-logo.webp" },
];

// Client wall (14 logos, 7×2). Resolved per the design's domain→logo/size mapping.
export type Client = {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  tileLift: number;
  showName: boolean;
};
export const clients: Client[] = [
  { name: "Isuzu East Africa", logo: "/assets/isuzu-logo.webp", logoW: 98, logoH: 98, tileLift: 0, showName: false },
  { name: "Vivo Fashion Group", logo: "/assets/vivo-logo.webp", logoW: 78, logoH: 52, tileLift: 0, showName: true },
  { name: "Rhombus Concrete", logo: "/assets/rhombus-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "International Safety & Training Centre", logo: "/assets/istc-mark.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "Pacific Petroleum 'Dubai & East Africa'", logo: "/assets/pacific-petroleum-mark.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "Tosha Energy", logo: "/assets/tosha-energy-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "Royal Oven Tanzania", logo: "/assets/royal-oven-logo.webp", logoW: 58, logoH: 72, tileLift: -6, showName: true },
  { name: "Kenya Meat Commission", logo: "/assets/kmc-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "KN Law LLP", logo: "/assets/kn-law-logo.webp", logoW: 62, logoH: 62, tileLift: -8, showName: true },
  { name: "Ahmednasir Abdullahi Advocates LLP", logo: "/assets/logo-ahmednasir.webp", logoW: 44, logoH: 44, tileLift: 0, showName: true },
  { name: "KELIN Kenya NGO", logo: "/assets/kelin-logo.webp", logoW: 94, logoH: 52, tileLift: 0, showName: true },
  { name: "MOGO Kenya", logo: "/assets/mogo-logo.webp", logoW: 76, logoH: 76, tileLift: -8, showName: true },
  { name: "Nairobi City County", logo: "/assets/nairobi-county-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "Maakiou Coffee Estate", logo: "/assets/maakiou-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
  { name: "PEMBE Millers", logo: "/assets/pembe-logo.webp", logoW: 52, logoH: 52, tileLift: 0, showName: true },
];
