// Digital Products hub — transcribed verbatim from design-refs/Digital Products.dc.html.

export const heroChips = [
  "15+ Years Proven",
  "Industry Experience",
  "Robust APIs",
  "Full Stack Development",
  "Homegrown + Global Quality",
];

export type ProductIcon = "nawiri" | "cpu" | "code";

export interface ProductCard {
  icon: ProductIcon;
  chip: string;
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
  cardBg: string;
  cardImage: string;
  cardBgSize: string;
  cardBorder: string;
  iconBg: string;
  accent: string;
  chipBg: string;
  titleColor: string;
  bodyColor: string;
  divider: string;
  btnBg: string;
  btnColor: string;
  btnHoverBg: string;
}

export const products: ProductCard[] = [
  {
    icon: "nawiri",
    chip: "FMCG Loyalty Platform",
    title: "NAWIRI Digital Loyalty",
    tagline: "Own the last mile of your distribution.",
    desc: "A mobile-first loyalty platform connecting Kenyan and East African manufacturers directly to painters, mechanics, fundis and farmers who make the purchase decisions. Direct M-Pesa integration rewards instant sales influencers.",
    bullets: [
      "Real-time airtime and M-Pesa rewards",
      "Encrypted scratch anti-counterfeit codes",
      "Daily consumption regional heat maps",
    ],
    href: "/digital-products/nawiri",
    cta: "LEARN MORE ABOUT NAWIRI",
    cardBg: "#0a2b23",
    cardImage:
      "radial-gradient(120% 90% at 85% -10%, rgba(158,255,90,0.15) 0%, transparent 52%), radial-gradient(100% 80% at -10% 110%, rgba(56,224,196,0.1) 0%, transparent 48%), linear-gradient(rgba(158,255,90,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(158,255,90,0.05) 1px, transparent 1px)",
    cardBgSize: "auto, auto, 30px 30px, 30px 30px",
    cardBorder: "rgba(158,255,90,0.3)",
    iconBg: "rgba(158,255,90,0.06)",
    accent: "#9EFF5A",
    chipBg: "rgba(158,255,90,0.12)",
    titleColor: "#FFFFFF",
    bodyColor: "#aebfba",
    divider: "rgba(255,255,255,0.12)",
    btnBg: "#9EFF5A",
    btnColor: "#06231e",
    btnHoverBg: "#b6ff7d",
  },
  {
    icon: "cpu",
    chip: "Workflow Automation",
    title: "Agentic AI Workflows",
    tagline: "Practical automation that acts, not just chats.",
    desc: "Integrate cognitive LLM agents to autonomously interface with your Odoo or SAP systems. Background workers parse invoices, verify supplier compliance rules and run daily multi-system reconciliation loops under supervision.",
    bullets: [
      "RAG compliance & policy query engines",
      "Autonomous three-way invoice matching",
      "Structured human-in-the-loop safety rails",
    ],
    href: "/digital-products/agentic-ai",
    cta: "DISCOVER OUR AGENTIC AI",
    cardBg: "#FFFFFF",
    cardImage:
      "linear-gradient(rgba(15,118,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.07) 1px, transparent 1px)",
    cardBgSize: "30px 30px, 30px 30px",
    cardBorder: "#0f766e",
    iconBg: "#eef4f3",
    accent: "#0f766e",
    chipBg: "rgba(15,118,110,0.09)",
    titleColor: "#3e4947",
    bodyColor: "#4a5a54",
    divider: "#cfe0dc",
    btnBg: "#0f766e",
    btnColor: "#FFFFFF",
    btnHoverBg: "#0d655e",
  },
  {
    icon: "code",
    chip: "Bespoke Engineering",
    title: "Custom Enterprise Software",
    tagline: "When off-the-shelf cannot.",
    desc: "Bespoke high-performance web applications, custom API integrations, internal dashboards and native mobile apps engineered specifically for your distinct business process. Agile delivery gets code live in weeks.",
    bullets: [
      "Line-of-business custom portals",
      "M-Pesa, bank and core gateway APIs",
      "Stack-agnostic, robust, scalable design",
    ],
    href: "/digital-products/custom-software",
    cta: "OUR CUSTOM SOFTWARE APPROACH",
    cardBg: "#FFFFFF",
    cardImage:
      "linear-gradient(rgba(15,118,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.07) 1px, transparent 1px)",
    cardBgSize: "30px 30px, 30px 30px",
    cardBorder: "#0f766e",
    iconBg: "#eef4f3",
    accent: "#0f766e",
    chipBg: "rgba(15,118,110,0.09)",
    titleColor: "#3e4947",
    bodyColor: "#4a5a54",
    divider: "#cfe0dc",
    btnBg: "#0f766e",
    btnColor: "#FFFFFF",
    btnHoverBg: "#0d655e",
  },
];
