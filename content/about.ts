// About page — transcribed verbatim from design-refs/About.dc.html.

export const beliefs = [
  "Technology must serve business value, not vendor fashion.",
  "Good IT needs both strategy and operational discipline.",
  "ERP, AI and software projects must be governed before they are built.",
  "The right partner should complement internal teams, not make them irrelevant.",
  "Proof should come before promise.",
];

// Leaders with a photo image key (resolved to a static import in the page).
export const leaders = [
  {
    photo: "humphrey",
    area: "FOUNDER / LEAD CONSULTANT",
    lead: "Humphrey Kirui",
    copy: "— Business Leader and IT Strategist with two decades of enterprise IT across retail, manufacturing, agribusiness, energy, telecom and government, including multi-country ERP deployments on Odoo and SAP HANA. Creator of NAWIRI — a novel digital loyalty platform that lifted a listed manufacturer's sales 30% in its first year.",
  },
  {
    photo: "mike",
    area: "VIRTUAL CIO",
    lead: "Mike Kiai",
    copy: "— Group CTO with 25+ years leading IT strategy, digital transformation and enterprise platform delivery across banking, healthcare, retail and international development in five African markets. PMP, ITIL and ISC2-certified; equally at home in a board risk review or an integration debug.",
  },
  {
    photo: "eugene",
    area: "IT OPERATIONS LEAD",
    lead: "Eugene Hillary",
    copy: "— across systems and network administration, software development and support supervision. Builds our real-world agentic AI use cases: alert triage, automated patch and backup checks, first-line resolution — with a human approving every change.",
  },
  {
    photo: "mary",
    area: "BUSINESS DEVELOPMENT",
    lead: "Mary Kalama",
    copy: "— Business Development Manager who matches business requirements to digital transformation strategies, shortening the customer journey from first conversation to honest scoping and a proposal built on your numbers, not ours.",
  },
] as const;
