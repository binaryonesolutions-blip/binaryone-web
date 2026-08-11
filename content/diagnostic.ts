// Enterprise IT & AI Diagnostic — 8-question engine data, transcribed verbatim
// from the updated Homepage.dc.html DIAG_QUESTIONS (the diagnostic modal is
// shared across the Homepage and the Digital Products hub). Guide §9.1.

export type DiagCategory = "infrastructure" | "security" | "erp" | "ai" | "software" | "cx";

export interface DiagOption {
  text: string;
  score: number;
  description: string;
}

export interface DiagQuestion {
  category: DiagCategory;
  catLabel: string;
  text: string;
  options: DiagOption[];
}

export const DIAG_QUESTIONS: DiagQuestion[] = [
  {
    category: "infrastructure",
    catLabel: "Cloud & IT Management",
    text: "When your systems go down at 2am, who decides what happens next — and does the ticket exist before you call?",
    options: [
      { text: "On-premise servers, manual backups, no monitoring — support summoned by phone or WhatsApp when something breaks.", score: 1, description: "No roadmap owner and no ticket trail; staff find the outage before systems do." },
      { text: "Hybrid cloud backups tied to local network reliability, a helpdesk email inbox, and IT advice sought project by project.", score: 2, description: "Moderate resilience, but whoever reads the inbox first sets the priority." },
      { text: "Cloud platform with automated scaling, an SLA-driven helpdesk, and a Virtual CIO steering roadmap and budget.", score: 3, description: "Every incident ticketed and measured; technology decisions governed at board level." },
    ],
  },
  {
    category: "security",
    catLabel: "Cybersecurity Defense",
    text: "What protects your customer records and endpoints today — and how often is that protection actually tested?",
    options: [
      { text: "Standard antivirus on individual computers, no central access policy, and testing only after an incident occurs.", score: 1, description: "Reactive posture that invites phishing, ransomware and easily preventable exploits." },
      { text: "Central firewall and password policies, but no MFA or incident logging, and reviews only when a client audit demands one.", score: 2, description: "Basic defence, checked too rarely to catch fast-evolving zero-day vectors." },
      { text: "Full endpoint protection, mandatory MFA and encrypted APIs, with continuous scanning, quarterly penetration tests and phishing drills.", score: 3, description: "Proactive defence in depth, verified on a schedule rather than after the fact." },
    ],
  },
  {
    category: "erp",
    catLabel: "ERP Automation",
    text: "How integrated and automated are your core business operations (Finances, CRM, HR, Inventory)?",
    options: [
      { text: "Independent spreadsheet files and separate local software. High manual reconciliation required.", score: 1, description: "Highly siloed data leading to human errors and slow reporting." },
      { text: "Basic ERP or localized accounting software, but missing sync with supply chain, inventory, or mobile payments.", score: 2, description: "Partially automated, with persistent manual friction at payment and shipping gates." },
      { text: "Fully integrated ERP (Odoo, SAP, or custom CRM) linked to live banking, mobile money, and inventory triggers.", score: 3, description: "Automated workflow where transactions seamlessly flow from trigger to ledger." },
    ],
  },
  {
    category: "ai",
    catLabel: "Agentic AI Readiness",
    text: "To what extent does your organization utilize artificial intelligence or intelligent automations in daily operations?",
    options: [
      { text: "No active AI or automation tools are used. Workflows are entirely manual.", score: 1, description: "Manual handling of high-volume repetitive tasks limits throughput." },
      { text: "Individual team members use third-party AI tools separately, but there is no custom enterprise system.", score: 2, description: "Scattered productivity gains, but lacking corporate data privacy controls and integrated tools." },
      { text: "Localized AI agents or automated pipelines (RAG systems) assist customer support and parse complex documents.", score: 3, description: "High-leverage operations powered by contextual, secure enterprise AI models." },
    ],
  },
  {
    category: "software",
    catLabel: "Custom Software",
    text: "Where do the workflows that make you different actually live — in off-the-shelf software, or in something built for how you operate?",
    options: [
      { text: "Our differentiating processes run on spreadsheets, WhatsApp and workarounds around software that was never built for them.", score: 1, description: "The business bends to the tool; the advantage stays undocumented and unscalable." },
      { text: "We have customised or bolted onto packaged software, but the integrations are fragile and one vendor owns the code.", score: 2, description: "Buy was the right call once, but the build-vs-buy line has not been revisited." },
      { text: "A purpose-built application, owned by us, with documented APIs, source code in our hands and a maintained delivery roadmap.", score: 3, description: "Clean, maintainable engineering where the software encodes the competitive advantage." },
    ],
  },
  {
    category: "cx",
    catLabel: "Customer Experience",
    text: "How well do you know — and reward — the end customers who actually drive your sales?",
    options: [
      { text: "We sell through distributors or retail, so we have no record of who the end buyer is.", score: 1, description: "The last mile is invisible, so demand shifts are only seen after the fact." },
      { text: "We run occasional promotions or a manual loyalty scheme tracked on paper or spreadsheets.", score: 2, description: "Some engagement, but no member data to segment, score or measure." },
      { text: "A digital loyalty platform captures every purchase and pays rewards to the customer instantly.", score: 3, description: "Named, scored customers and live last-mile demand data." },
    ],
  },
  {
    category: "cx",
    catLabel: "Customer Experience",
    text: "How is your sales pipeline and field-team activity tracked today?",
    options: [
      { text: "In each rep's own notebook, phone and WhatsApp threads. There is no shared pipeline.", score: 1, description: "Forecasts rely on memory, and customers walk out with the rep who leaves." },
      { text: "A shared spreadsheet or basic CRM that reps update after the fact.", score: 2, description: "Visibility exists, but it is late, partial and hard to act on." },
      { text: "A live CRM with mobile field-sales capture, route plans, targets and pipeline dashboards.", score: 3, description: "Every visit, quote and order is tied to a person and a number." },
    ],
  },
  {
    category: "cx",
    catLabel: "Customer Experience",
    text: "When a customer calls, messages or emails you, what happens next?",
    options: [
      { text: "Enquiries land on individual phones and inboxes, with no queue and no record.", score: 1, description: "Missed calls and dropped follow-ups go unnoticed." },
      { text: "A shared line or inbox that staff monitor, but without call logging or response targets.", score: 2, description: "Reachable, yet service levels cannot be measured or improved." },
      { text: "One queue for calls, WhatsApp, email and chat, with logging, SLAs and reporting.", score: 3, description: "Every conversation is captured, routed and answered against a target." },
    ],
  },
];

export const META_COLOR: Record<DiagCategory, string> = {
  infrastructure: "#0f766e",
  security: "#17a892",
  erp: "#2f9e44",
  ai: "#38b6a2",
  software: "#1c8f7f",
  cx: "#12b886",
};

export const META_NAME: Record<DiagCategory, string> = {
  infrastructure: "Cloud & IT Management",
  security: "Cybersecurity Defense",
  erp: "ERP Automation",
  ai: "Agentic AI Readiness",
  software: "Custom Software",
  cx: "Customer Experience",
};

export const META_ORDER: DiagCategory[] = ["infrastructure", "security", "erp", "ai", "software", "cx"];

export const REC_BANK = {
  low: [
    "Commission a Free IT Assessment to baseline infrastructure, security and continuity risk.",
    "Stand up automated cloud backups and a documented disaster-recovery blueprint.",
    "Deploy centralized endpoint protection and mandatory Multi-Factor Authentication.",
    "Start capturing end-customer identity — a digital loyalty pilot on your fastest-moving lines.",
    "Document the one workflow you run differently from competitors, and scope whether to build or buy it.",
  ],
  mid: [
    "Consolidate siloed tools into a governed ERP with live banking and mobile-money triggers.",
    "Introduce continuous access auditing and quarterly penetration testing.",
    "Pilot one Agentic AI workflow (support triage or document parsing) on your existing systems.",
    "Put field sales on a live CRM and route every customer enquiry into one logged, SLA-tracked queue.",
    "Run a Build vs Buy review on your most customised system before the next licence renewal.",
  ],
  high: [
    "Scale Agentic AI pipelines across support, finance and reporting with corporate data controls.",
    "Formalise vCIO-led governance: board-ready reporting, budget discipline and vendor SLAs.",
    "Run simulated phishing drills and automated code scanning to sustain a proactive posture.",
    "Join loyalty, CRM and contact-centre data into a single customer view for predictive campaigns.",
    "Commission a custom build for the workflow no packaged product serves — owned code, documented APIs.",
  ],
};

export function gradeFor(pct: number): { grade: string; gradeDesc: string } {
  if (pct < 45) return { grade: "Initiating", gradeDesc: "Foundational gaps expose the business to downtime, data loss and manual friction. A structured roadmap will de-risk operations fast." };
  if (pct < 70) return { grade: "Developing", gradeDesc: "Core systems are in place but automation, security depth and governance are uneven. Targeted upgrades will unlock real leverage." };
  if (pct < 88) return { grade: "Optimized", gradeDesc: "A strong, resilient posture. Refinement of AI workflows and continuous assurance will push you to the frontier." };
  return { grade: "Transformational", gradeDesc: "Best-in-class readiness. Your stack is a competitive weapon — the focus now is compounding the advantage." };
}
