// Agentic AI page — transcribed verbatim from design-refs/Agentic AI.dc.html.

export const heroTags = [
  "Cognitive AI agents",
  "RAG architecture",
  "Odoo & SAP integrations",
  "Invoice verification",
  "Data anomaly detection",
];

export type ModuleIcon = "brain" | "db" | "search";

export const modules: { icon: ModuleIcon; title: string; copy: string }[] = [
  { icon: "brain", title: "Retrieval-Augmented Generation (RAG)", copy: "Build localized corporate brain models that securely read internal audits, HR guidelines, compliance standards and agricultural laws in natural language." },
  { icon: "db", title: "Autonomous Ledger Assistants", copy: "System agents that continuously scan Odoo ledgers to verify supplier receipts, flag missing KRA tax credentials and detect fraudulent invoices in real-time." },
  { icon: "search", title: "Document Intelligence Workflows", copy: "Automated extraction models that convert PDF purchase invoices, bill files and receipts into correct structured database records in seconds." },
];

export const properties = [
  { name: "Multi-step", copy: "It plans a sequence, not a single response." },
  { name: "Tool-using", copy: "It reads and writes to approved systems." },
  { name: "Goal-oriented", copy: "You give it an outcome, not just a script." },
  { name: "Supervised", copy: "A named human approves high-stakes steps." },
  { name: "Audit-trailed", copy: "Every read, write and decision is logged." },
];

export const useCases = [
  { fn: "Procurement", does: "Triages quotations, checks supplier compliance, flags exceptions and drafts purchase orders for approval." },
  { fn: "Finance", does: "Processes invoices, matches against PO and GRN, and flags discrepancies." },
  { fn: "Customer service", does: "Routes enquiries by intent, drafts first responses and escalates complex cases." },
  { fn: "Sales", does: "Follows up quotations after 48 hours and logs activity to CRM." },
  { fn: "IT helpdesk", does: "Performs first-line triage, opens tickets and assigns to a human for unresolved issues." },
  { fn: "Executive support", does: "Summarises documents and drafts board-pack material from source data." },
  { fn: "Audit & compliance", does: "Checks expenses, vendor onboarding documents and contract clauses against approved policy." },
  { fn: "HR", does: "Handles leave workflows, onboarding checklists and policy Q&A." },
];

export const readiness = [
  "A repeatable process with documented steps",
  "Reasonably clean data in accessible systems",
  "A named pilot owner with authority",
  "Executive sponsorship from the CFO, COO or MD",
  "Tolerance for a 60-day pilot before scaling",
];

export interface Scenario {
  tag: string;
  label: string;
  command: string;
  quote: string;
  result: string;
  steps: { head: string; line: string; detail: string }[];
}

export const scenarios: Scenario[] = [
  {
    tag: "INVOICE AUDIT",
    label: "Audit incoming PDF invoice against Odoo Purchase Order records",
    command: "INVOICE_AUDIT",
    quote: "Audit incoming PDF invoice against Odoo Purchase Order records",
    result: "Match confirmed — invoice INV-9040 reconciled against PO-7742. Flagged for human sign-off.",
    steps: [
      { head: "[STEP 1] COGNITIVE INTENT ANALYSIS", line: "Scanning PDF Invoice INV-9040: \"Fertilizer Supplier Ltd, Total: KES 840,000.\"", detail: "> Extracted invoice metadata: Supplier=\"Fertilizer Supplier Ltd\", Amount=840,000, Item=\"NPK Fertilizer\"." },
      { head: "[STEP 2] TOOL CALL: query_odoo_purchase_orders", line: "Querying Odoo ERP database for open purchase orders linked to Supplier.", detail: "> Found active PO-7742. Approved Amount: KES 840,000. Ordered Item: \"NPK Fertilizer\". Qty: 100 bags." },
      { head: "[STEP 3] RECONCILIATION", line: "Cross-checking invoice line items and totals against PO and goods-received note.", detail: "> Amounts match. Quantity match. No price variance detected." },
    ],
  },
  {
    tag: "LOYALTY RULES RAG",
    label: "Query NAWIRI programme rules on mechanic reward ceilings for lubricant seal codes",
    command: "COMPLIANCE_RAG",
    quote: "Query NAWIRI programme rules on mechanic reward ceilings for lubricant seal codes",
    result: "Answer grounded in 3 source clauses. Ceiling: KES 15,000 per mechanic per month across airtime, M-PESA and toolbox rewards.",
    steps: [
      { head: "[STEP 1] COGNITIVE INTENT ANALYSIS", line: "Interpreting query: \"maximum reward value per mechanic per month on induction-seal redemptions.\"", detail: "> Intent classified: policy-lookup. Domain: NAWIRI lubricants loyalty rules." },
      { head: "[STEP 2] TOOL CALL: vector_search(policy_store)", line: "Retrieving top-ranked clauses from the embedded programme-rules knowledge base.", detail: "> Retrieved 3 chunks: Programme Rules §6.1 (seal-code validity), Reward Schedule Annex A (airtime / M-PESA / toolbox tiers), Anti-fraud Policy §3." },
      { head: "[STEP 3] GROUNDED SYNTHESIS", line: "Composing answer strictly from retrieved sources with citations.", detail: "> Ceiling = KES 15,000 / mechanic / month. Toolbox redemption unlocks at 40 verified seals. Source confidence: high." },
    ],
  },
  {
    tag: "SWAHILI SUMMARIZER",
    label: "Process Swahili farmer SMS and log a pesticide supply exception",
    command: "NLP_SWAHILI",
    quote: "Process Swahili farmer SMS and log a pesticide supply exception",
    result: "Exception logged to NAWIRI ledger. Agro-dealer and field officer notified for follow-up.",
    steps: [
      { head: "[STEP 1] LANGUAGE DETECTION & TRANSLATION", line: "Inbound SMS: \"Dawa ya kuua wadudu niliyonunua duka la pembejeo haijafanya kazi kwenye mahindi yangu.\"", detail: "> Detected: Swahili. Translated: \"The pesticide I bought at the agrovet has not worked on my maize.\"" },
      { head: "[STEP 2] INTENT CLASSIFICATION", line: "Classifying farmer message against known exception types.", detail: "> Category: pesticide-efficacy-complaint. Counterfeit risk: possible. Sentiment: negative. Priority: high." },
      { head: "[STEP 3] TOOL CALL: log_product_exception", line: "Writing structured exception record to the NAWIRI ledger with the redeemed pack code.", detail: "> Exception EX-3391 created. Batch traced to agrovet; agronomist dispatched to the farm." },
    ],
  },
];

// Delivery sequence — computed exactly as the design's approachStages().
export interface ApproachStage {
  num: string;
  name: string;
  copy: string;
  tint: string;
  icon: string;
  iconGlow: string;
  ring: string;
  glow: string;
}

export const approach: ApproachStage[] = (() => {
  const stages = [
    { num: "01", name: "Discovery", copy: "Map two or three candidate workflows and choose one." },
    { num: "02", name: "Scoped agent design", copy: "Narrow, specific and governed. No general-purpose “do everything” agents." },
    { num: "03", name: "vCIO governance", copy: "Your Virtual CIO chairs scope, permissions and exception-handling decisions." },
    { num: "04", name: "Integration", copy: "Connect to Microsoft 365, Google Workspace, Odoo, Slack, email or ERP where approved." },
    { num: "05", name: "60-day pilot", copy: "Measure against three KPIs agreed upfront." },
    { num: "06", name: "Six-month review", copy: "Expand, contract or retire the agent based on evidence." },
  ];
  const tint = ["#2dd4bf", "#3edcc4", "#5ce3b4", "#7aeaa0", "#8cf47f", "#9EFF5A"];
  const icons = [
    "M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15.2 15.2 20 20",
    "M4.5 12h4l2.2-5 2.6 10 2.2-5h4.2",
    "M12 3l7 3v6c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6zM9.6 12.2 11.6 14.2 15 10.6",
    "M9 7.5H6.5A2.5 2.5 0 0 0 4 10v4a2.5 2.5 0 0 0 2.5 2.5H9M15 7.5h2.5A2.5 2.5 0 0 1 20 10v4a2.5 2.5 0 0 1-2.5 2.5H15M8.5 12h7",
    "M4 19V5M4 19h16M8 19v-5.5M12 19V9.5M16 19v-8M8.5 5.5 12 4l3.5 1.5",
    "M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6M4.2 17.4v-3.2h3.2M19.8 6.6v3.2h-3.2",
  ];
  return stages.map((st, i) => {
    const t = i / (stages.length - 1);
    const ringAt = (n: number) => {
      const tt = n / (stages.length - 1);
      return n < 5 ? "rgba(45,212,191," + (0.35 + 0.45 * tt).toFixed(2) + ")" : "rgba(158,255,90,0.85)";
    };
    return {
      ...st,
      tint: tint[i],
      icon: icons[i],
      iconGlow: "drop-shadow(0 0 6px " + (i < 5 ? "rgba(45,212,191,0.5)" : "rgba(158,255,90,0.55)") + ")",
      ring: ringAt(i),
      glow: "0 0 " + Math.round(10 + 16 * t) + "px " + (i < 5 ? "rgba(45,212,191," : "rgba(158,255,90,") + (0.12 + 0.26 * t).toFixed(2) + "), inset 0 0 12px rgba(0,0,0,0.5)",
    };
  });
})();
