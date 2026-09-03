// Navigation + route map (Developer Guide §1, §6.1–6.2). Every internal
// .dc.html href in the source maps to the production route below.
export const routes = {
  home: "/",
  managedIt: "/managed-it",
  managedItReadiness: "/managed-it/readiness",
  erp: "/erp-consulting",
  erpPitfalls: "/erp-consulting/pitfalls-guide",
  digitalProducts: "/digital-products",
  nawiri: "/digital-products/nawiri",
  nawiriSelfScore: "/digital-products/nawiri/self-score",
  agenticAi: "/digital-products/agentic-ai",
  customSoftware: "/digital-products/custom-software",
  about: "/about",
  insights: "/insights",
  contact: "/contact",
  assessment: "/contact?tab=assessment",
  enquiry: "/contact?tab=enquiry",
  dataProtection: "/data-protection",
  companyProfile: "/company-profile",
} as const;

export const primaryNav = [
  { label: "Home", href: routes.home },
  { label: "Managed IT", href: routes.managedIt },
  { label: "ERP Consulting", href: routes.erp },
  // Digital Products is a dropdown — rendered separately
  { label: "About", href: routes.about },
  { label: "Insights", href: routes.insights },
] as const;

// Dropdown rows (Guide §6.2), in exact order. `icon` keys map to inline SVGs.
export interface ProductDropdownRow {
  icon: string;
  title: string;
  desc: string;
  href: string;
  divided?: boolean;
}

export const productsDropdown: ProductDropdownRow[] = [
  {
    icon: "nawiri",
    title: "NAWIRI Loyalty Platform",
    desc: "Digital Loyalty & Last-mile intelligence",
    href: routes.nawiri,
  },
  {
    icon: "agentic",
    title: "Agentic AI Workflows",
    desc: "Autonomous reasoning agents interfacing ERPs",
    href: routes.agenticAi,
  },
  {
    icon: "custom",
    title: "Custom Software",
    desc: "Bespoke high-performance systems engineering",
    href: routes.customSoftware,
  },
  {
    icon: "hub",
    title: "Digital Products Hub Overview",
    desc: "Our Digital Solutions at a glance",
    href: routes.digitalProducts,
    divided: true,
  },
];
