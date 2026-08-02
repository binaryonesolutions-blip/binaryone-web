// Enterprise IT & AI Diagnostic — 8/10-question engine data, transcribed verbatim
// from design-refs/Digital Products.dc.html (the diagnostic modal is shared across
// the Homepage and the Digital Products hub). Guide §9.1.

export type DiagCategory = "infrastructure" | "security" | "erp" | "ai" | "cx";

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
    catLabel: "Cloud Infrastructure",
    text: "How would you describe your current server and network infrastructure hosting your business systems?",
    options: [
      { text: "On-premise servers with manual backups and no active automated monitoring.", score: 1, description: "High risk of downtime and data loss." },
      { text: "Hybrid setup with basic cloud backups, but still dependent on local network reliability.", score: 2, description: "Moderate resilience, but lacks modern multi-zone failovers." },
      { text: "Fully migrated to a cloud platform (AWS, GCP, Azure) with high availability and automated scaling.", score: 3, description: "Optimized cloud foundation ready for rapid software deployments." },
    ],
  },
  {
    category: "security",
    catLabel: "Cybersecurity Defense",
    text: "What cybersecurity measures are currently active to protect your customer records and business endpoints?",
    options: [
      { text: "Standard antivirus software on individual computers, with no centralized access policy or regular audits.", score: 1, description: "Vulnerable to phishing, ransomware, and unauthorized data extraction." },
      { text: "Centralized firewall and password policies, but lack Multi-Factor Authentication (MFA) and incident logging.", score: 2, description: "Basic defense, but missing proactive breach detection capabilities." },
      { text: "Full Endpoint Protection, mandatory MFA, continuous access auditing, and secure encrypted APIs.", score: 3, description: "Industry-standard cybersecurity posture protecting core assets." },
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
    category: "infrastructure",
    catLabel: "Cloud Infrastructure",
    text: "How quickly can your IT systems recover from a critical hardware or software failure?",
    options: [
      { text: "Recovery could take days and might result in significant loss of transaction history.", score: 1, description: "No validated disaster recovery blueprint." },
      { text: "Recovery takes several hours with minimal data loss, depending on manual restoral of cloud snapshots.", score: 2, description: "Acceptable recovery speed, but still causes noticeable downtime." },
      { text: "Instant, automated failovers across cloud regions, resulting in zero noticeable user downtime.", score: 3, description: "Highly resilient system designed for absolute continuous operations." },
    ],
  },
  {
    category: "security",
    catLabel: "Cybersecurity Defense",
    text: "How often does your technical team run vulnerability scans, penetration testing, or staff cyber-hygiene training?",
    options: [
      { text: "Rarely or never. We only react when a technical security incident occurs.", score: 1, description: "Dangerous reactive posture that invites easily preventable exploits." },
      { text: "Annually or bi-annually, usually driven by external client audits or compliance mandates.", score: 2, description: "Consistent checks, but vulnerable to fast-evolving zero-day vectors." },
      { text: "Continuous automated code scanning, quarterly penetrative tests, and regular simulated phishing drills.", score: 3, description: "Continuous proactive defense in depth, securing modern assets." },
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
  cx: "#12b886",
};

export const META_NAME: Record<DiagCategory, string> = {
  infrastructure: "Cloud Infrastructure",
  security: "Cybersecurity Defense",
  erp: "ERP Automation",
  ai: "Agentic AI Readiness",
  cx: "Customer Experience",
};

export const META_ORDER: DiagCategory[] = ["infrastructure", "security", "erp", "ai", "cx"];

export const REC_BANK = {
  low: [
    "Commission a Free IT Assessment to baseline infrastructure, security and continuity risk.",
    "Stand up automated cloud backups and a documented disaster-recovery blueprint.",
    "Deploy centralized endpoint protection and mandatory Multi-Factor Authentication.",
    "Start capturing end-customer identity — a digital loyalty pilot on your fastest-moving lines.",
  ],
  mid: [
    "Consolidate siloed tools into a governed ERP with live banking and mobile-money triggers.",
    "Introduce continuous access auditing and quarterly penetration testing.",
    "Pilot one Agentic AI workflow (support triage or document parsing) on your existing systems.",
    "Put field sales on a live CRM and route every customer enquiry into one logged, SLA-tracked queue.",
  ],
  high: [
    "Scale Agentic AI pipelines across support, finance and reporting with corporate data controls.",
    "Formalise vCIO-led governance: board-ready reporting, budget discipline and vendor SLAs.",
    "Run simulated phishing drills and automated code scanning to sustain a proactive posture.",
    "Join loyalty, CRM and contact-centre data into a single customer view for predictive campaigns.",
  ],
};

export function gradeFor(pct: number): { grade: string; gradeDesc: string } {
  if (pct < 45) return { grade: "Initiating", gradeDesc: "Foundational gaps expose the business to downtime, data loss and manual friction. A structured roadmap will de-risk operations fast." };
  if (pct < 70) return { grade: "Developing", gradeDesc: "Core systems are in place but automation, security depth and governance are uneven. Targeted upgrades will unlock real leverage." };
  if (pct < 88) return { grade: "Optimized", gradeDesc: "A strong, resilient posture. Refinement of AI workflows and continuous assurance will push you to the frontier." };
  return { grade: "Transformational", gradeDesc: "Best-in-class readiness. Your stack is a competitive weapon — the focus now is compounding the advantage." };
}
