// Managed IT content — transcribed verbatim from design-refs/Managed IT.dc.html.

export const trustChips = [
  "15+ years",
  "COBIT-led",
  "Virtual CIO-led",
  "Nairobi-based",
  "Named IT Operations Lead",
  "AI-forward",
];

export const comparison = [
  { dim: "Engagement shape", fractional: "One senior individual, often advisory-heavy and time-limited.", b1: "A Virtual CIO plus named IT Operations Lead and delivery team." },
  { dim: "Continuity", fractional: "Key-person risk if the individual is unavailable or exits.", b1: "Institutional continuity through team-backed delivery and a documented operating rhythm." },
  { dim: "Execution", fractional: "Recommendations may remain in slide decks.", b1: "Roadmap, tickets, project gates, risk register, seasoned project management and operations follow-through." },
  { dim: "Governance", fractional: "Depends on individual preference.", b1: "NIST & COBIT-informed Audit & IT governance framework as a formal methodology." },
  { dim: "Scalability", fractional: "Capped by one person's hours.", b1: "Can pull in cybersecurity, ERP, Advanced Visual Reporting, Agentic AI, End User Training or cloud specialists as needed." },
];

export const pillars = [
  { num: "01", icon: "M8.5 12 3.5 12.5l1.2 4.4a1.4 1.4 0 0 0 1.7 1l2-.5M8.5 12l2.7-3a2 2 0 0 1 2.9-.1l1.4 1.4M8.5 12l3.3 3.3a1.3 1.3 0 0 0 1.9-1.8M13.6 8.9l3.2 3.2a1.3 1.3 0 0 1-1.8 1.8l-.2-.1M15.6 6.9 19 3.5", name: "vCIO Advisory", copy: "Strategic IT leadership, budget guidance, roadmap ownership, vendor governance, management reporting and End User Empowerment training." },
  { num: "02", icon: "M13 6.5a6.5 6.5 0 1 1-6.3 8M13 9.5V13l2.5 1.5M3 8.5h5M2 11.5h4M3 14.5h3", name: "IT Operations & Helpdesk", copy: "Professional support, ticketing, escalation, on-site visits and SLA reporting led by a named operations lead." },
  { num: "03", icon: "M12 3.5c2.4 1.3 5 2 8 2.1v5.4c0 4.3-3.2 7.6-8 9.5-4.8-1.9-8-5.2-8-9.5V5.6c3-.1 5.6-.8 8-2.1ZM9 11.8l2.1 2.2 4-4.3", name: "Cybersecurity & Endpoint", copy: "Firewall, practical cyber hygiene, endpoint protection, awareness training, policy support and resilience planning." },
  { num: "04", icon: "M7 17.5a4.5 4.5 0 0 1-.6-9 5.5 5.5 0 0 1 10.7-1.2A4 4 0 0 1 16.5 15M12 12.5v7M9.5 17.5 12 20l2.5-2.5", name: "Cloud & Microsoft 365", copy: "Microsoft 365 or Google Workspace administration, licence optimisation, collaboration discipline and user empowerment." },
  { num: "05", icon: "M12 19.5v.01M8.8 16.2a4.5 4.5 0 0 1 6.4 0M5.9 13.1a8.7 8.7 0 0 1 12.2 0M3 10a12.8 12.8 0 0 1 18 0", name: "Network & Connectivity", copy: "Internet, Wi-Fi, switching, segmentation, branch connectivity, IP PBX & in-house contact centers, and uptime improvement." },
  { num: "06", icon: "M3.5 3.5v16a1 1 0 0 0 1 1h16M7.5 16.5v-5M11.5 16.5v-9M15.5 16.5v-3M19.5 16.5V6.5", name: "ERP Support, Agentic AI, Visual Reporting", copy: "ERP Level 1 support, data visibility through Advanced Visual Reporting and Agentic AI workflow automation." },
];

export const platforms = [
  { src: "/assets/logo-microsoft365.png", alt: "Microsoft 365", h: 36 },
  { src: "/assets/logo-gworkspace.png", alt: "Google Workspace", h: 44 },
  { src: "/assets/vendor-odoo.png", alt: "Odoo", h: 34 },
  { src: "/assets/logo-claude.png", alt: "Claude", h: 36 },
  { src: "/assets/logo-n8n.png", alt: "n8n", h: 38 },
  { src: "/assets/logo-openclaw.png", alt: "OpenClaw", h: 58 },
  { src: "/assets/logo-sophos.png", alt: "Sophos", h: 44 },
  { src: "/assets/logo-hp.png", alt: "HP", h: 44, label: "HP" },
  { src: "/assets/logo-yeastar.png", alt: "Yeastar", h: 44 },
];

export const assessmentItems = [
  "Users and devices",
  "Microsoft 365 or Google Workspace",
  "Internet and network stability",
  "Backup and business continuity posture",
  "Support process and ticketing maturity",
  "Cybersecurity and data-protection flags",
  "ERP, CRM, HRMS, AI and automation readiness",
];

export const packs = [
  { name: "Starter", icon: "M12 3.5 19 8v8l-7 4.5L5 16V8z M12 12v8.5M12 12 5 8M12 12l7-4", fit: "2 days/week · 15–40 users", positioning: "For organisations ready to professionalise IT without a full-time commitment.", inclusions: ["2 days/week on-site engineer", "Remote support", "Quarterly vCIO review", "IT Operations Lead oversight"] },
  { name: "Growth", icon: "M3.5 20.5V14M9.2 20.5V9.5M14.9 20.5v-7M20.5 20.5V4.5M3.5 10.5l5.7-4 5.7 3 5.6-5", fit: "3 days/week · 40–80 users", positioning: "For growing organisations running several systems, ERP dependencies or distributed operations.", inclusions: ["3 days/week on-site engineer", "Remote support", "Monthly vCIO", "Automation review", "Deeper ERP input"] },
  { name: "Business", icon: "M4 20.5V6.5a1 1 0 0 1 1-1h6v15M11 5.5V3.5h9v17M4 20.5h17M7 9h1.5M7 12.5h1.5M14.5 7.5H16M14.5 11H16M14.5 14.5H16", fit: "Full-time · 80+ users", positioning: "For established organisations that need IT to operate like an internal department with strategy on top.", inclusions: ["Full-time dedicated engineer", "Ongoing vCIO governance", "Training programme", "Reporting", "Approved projects", "Agentic AI"] },
];

export const faqs = [
  { q: "Do you replace our in-house IT person?", a: "No. We complement and empower your internal technical staff. Your Virtual CIO provides high-level budget, roadmap, and compliance planning, while our IT Operations Lead supports your administrators and helpdesk staff on a defined ticketing SLA, ensuring they aren't bogged down in day-to-day crises." },
  { q: "Are the Free IT Assessment and the formal IT Audit different?", a: "Yes. The Free IT Assessment is a complimentary, high-level 90-minute alignment session to diagnose major risks. A formal IT Audit is a paid, weeks-long comprehensive deep dive into your server architecture, codebase, security rules, and databases, yielding a complete 50-page technical blueprint." },
  { q: "How does the named leadership team work?", a: "Instead of routing your strategic issues into a faceless ticket queue, you have direct mobile and email access to your assigned vCIO and IT Operations Lead. They manage your infrastructure on a monthly operating rhythm and meet with your executive team regularly." },
];
