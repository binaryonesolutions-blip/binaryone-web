// Custom Software page — transcribed verbatim from design-refs/Custom Software.dc.html.

export const heroChips = [
  "Tailored architecture",
  "Clean code guidelines",
  "Secure API design",
  "Mobile-first build",
  "Cloud native architecture",
];

export const buildVsBuy = [
  { indicator: "Process", buy: "A well-known process such as HR, visitor management, IoT integration or CRM.", build: "A workflow unique to your business and competitive advantage." },
  { indicator: "Market", buy: "Several mature SaaS tools solve it.", build: "No product solves it well without forcing the workflow." },
  { indicator: "Data sensitivity", buy: "Standard business data.", build: "Highly sensitive, regulated or strategically valuable data." },
  { indicator: "Volume", buy: "Low-to-moderate transaction volume.", build: "High-volume, real-time or low-latency requirements." },
  { indicator: "Time horizon", buy: "Need it live in 30 days.", build: "Can invest 6–12 months for a 5+ year asset." },
  { indicator: "Budget", buy: "Prefer predictable monthly subscription.", build: "Capex appetite for a strategic asset." },
];

export const builds = [
  { num: "01", name: "Line-of-business web applications", desc: "Secure customer extranets, supply-chain monitoring panels and dealer management dashboards." },
  { num: "02", name: "Mobile apps for field, customer or partner use", desc: "Offline-capable collection logs, farmer registries and logistics apps built for low-bandwidth regions." },
  { num: "03", name: "API integrations between ERP, banks, loyalty platforms and CRMs", desc: "Connecting legacy systems, core banking engines, accounting databases and payment aggregators (M-Pesa, Safaricom)." },
  { num: "04", name: "Internal dashboards", desc: "Real-time operational visibility for management — from service desks to factory throughput." },
  { num: "05", name: "Customer and partner portals", desc: "Self-service portals that cut call volume and keep partners transacting around the clock." },
  { num: "06", name: "AI-augmented applications", desc: "Practical AI inside existing workflows — classification, drafting, retrieval — with human control." },
  { num: "07", name: "IoT or device integrations", desc: "Weighbridges, POS terminals and telemetry devices feeding your central ledger securely." },
  { num: "08", name: "Database migration & optimization", desc: "Refining slow relational schemas, optimizing query locks and executing zero-downtime migrations." },
];

export const stack = [
  { label: "FRONTEND LANGUAGES", items: "React, Tailwind CSS, TypeScript, Vite, Next.js" },
  { label: "BACKEND LANGUAGES", items: "Node.js, Express, Go, Python, FastAPI" },
  { label: "DATABASE & INFRASTRUCTURE", items: "PostgreSQL, MongoDB, AWS, Google Cloud, Docker" },
];

export interface DeliveryStage {
  num: string;
  name: string;
  copy: string;
  tint: string;
  icon: string;
  iconGlow: string;
  ring: string;
  glow: string;
}

export const delivery: DeliveryStage[] = (() => {
  const stages = [
    { num: "01", name: "Discovery", copy: "Stakeholders, user journeys, success metrics and scope." },
    { num: "02", name: "Design", copy: "Wireframes, prototypes, technical architecture and security posture." },
    { num: "03", name: "Agile delivery", copy: "Two-week sprints with working software at the end of each sprint." },
    { num: "04", name: "Testing", copy: "Functional, integration, user acceptance and security testing." },
    { num: "05", name: "Deployment", copy: "Pilot users first, then broader rollout." },
    { num: "06", name: "Post-launch support", copy: "Defect window, optional support retainer and managed handover." },
  ];
  const tint = ["#2dd4bf", "#3edcc4", "#5ce3b4", "#7aeaa0", "#8cf47f", "#9EFF5A"];
  const icons = [
    "M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15.2 15.2 20 20",
    "M4 20h4l10-10a2.47 2.47 0 0 0-3.5-3.5L4.5 16.5zM13 6.5 17.5 11",
    "M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6M4.2 17.4v-3.2h3.2M19.8 6.6v3.2h-3.2",
    "M12 3l7 3v6c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6zM9 12l2.1 2.1L15.2 10",
    "M12 3c3 2.2 4.9 5.6 4.9 9.1L12 15.2 7.1 12.1C7.1 8.6 9 5.2 12 3zM12 9.6v.01M9.2 16.9 7.7 21l4.3-2 4.3 2-1.5-4.1",
    "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9",
  ];
  return stages.map((st, i) => {
    const t = i / (stages.length - 1);
    return {
      ...st,
      tint: tint[i],
      icon: icons[i],
      iconGlow: "drop-shadow(0 0 6px " + (i < 5 ? "rgba(45,212,191,0.5)" : "rgba(158,255,90,0.55)") + ")",
      ring: i < 5 ? "rgba(45,212,191," + (0.35 + 0.45 * t).toFixed(2) + ")" : "rgba(158,255,90,0.85)",
      glow: "0 0 " + Math.round(10 + 16 * t) + "px " + (i < 5 ? "rgba(45,212,191," : "rgba(158,255,90,") + (0.12 + 0.26 * t).toFixed(2) + "), inset 0 0 12px rgba(0,0,0,0.5)",
    };
  });
})();
