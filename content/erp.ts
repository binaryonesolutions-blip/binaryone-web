// ERP Consulting content — transcribed verbatim from design-refs/ERP Consulting.dc.html.

export const heroChips = ["ERP governance", "Independent advisory", "Odoo specialty", "SAP insights", "Data validation pipelines"];

export const risks = [
  { name: "ERP failure risk", icon: "M12 2L2 20h20L12 2zM12 9v5M12 17.5v.5", copy: "Many ERP projects fail to meet their business objectives because leadership, scope, data and change management are weak before software is even selected." },
  { name: "Cost overrun risk", icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", copy: "Cost overruns are common when requirements, data migration, training and change control are underestimated." },
  { name: "Change-management risk", icon: "M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H2v-2a4 4 0 0 1 3-3.87M16 3.13a4 4 0 0 1 0 7.75M8 3.13a4 4 0 0 0 0 7.75M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", copy: "Users rarely reject a good system; they reject a system they were not prepared for, trained on or allowed to shape." },
  { name: "Governance risk", icon: "M12 3l8 3v5c0 4.5-3 8-8 10-5-2-8-5.5-8-10V6l8-3zM9 12l2 2 4-4", copy: "Without a vendor-neutral governance layer, every party has an incentive to blame someone else when the project drifts." },
];

export const failTiles = [
  { label: "Weak sponsorship", icon: "M12 3l7 4v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V7l7-4M9.5 11.5l5 0M12 9v5" },
  { label: "Dirty data going in", icon: "M12 3c3.9 0 7 1.1 7 2.5S15.9 8 12 8 5 6.9 5 5.5 8.1 3 12 3M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5M9 17.5l6-6" },
  { label: "Vendor finger-pointing", icon: "M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" },
  { label: "Scope creep & timelines", icon: "M12 8v4l2.5 2.5M12 3a9 9 0 1 0 9 9M17 3l4 0 0 4" },
];

export const failures = [
  { lead: "Weak executive sponsorship", rest: "ERP is a business-change programme, not an IT project." },
  { lead: "Poor data discipline going in", rest: "messy data migrates faster than clean data." },
  { lead: "Vendor finger-pointing", rest: "software vendor, implementer and client blame each other." },
  { lead: "Scope creep", rest: "every department asks for “just one more report”." },
  { lead: "Unrealistic timelines", rest: "compressed delivery multiplies every other risk." },
  { lead: "Insufficient change management", rest: "the system goes live, but the people do not." },
];

export const stages = [
  { num: "01", name: "Audit first", copy: "We audit current systems, processes, data and risks before discussing vendors." },
  { num: "02", name: "Readiness assessment", copy: "We score people, process, data, sponsorship, budget and governance honestly." },
  { num: "03", name: "Gap analysis", copy: "We separate what the business truly needs from what is merely nice to have." },
  { num: "04", name: "Vendor selection", copy: "Structured RFP, demo scoring, reference checks and contract review." },
  { num: "05", name: "Implementation governance", copy: "Steering committee, risk register, implementer accountability and change control." },
  { num: "06", name: "Post-go-live audit", copy: "Three and six months after go-live, we review benefits realisation against the business case." },
];

export const vendors = [
  { name: "Odoo", logo: "/assets/vendor-odoo.png", h: 32 },
  { name: "SAP Business One", logo: "/assets/vendor-sap.png", h: 36 },
  { name: "Sage", logo: "/assets/vendor-sage.png", h: 40 },
  { name: "Microsoft Dynamics 365 Business Central", logo: "/assets/vendor-dynamics.png", h: 40 },
  { name: "Clio LegalTech", logo: "/assets/vendor-clio.png", h: 38, caption: "LegalTech" },
];

export const whyOdoo = [
  { label: "All-in-one solution", icon: "M4 8h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM7 14v4a2 2 0 0 0 2 2h5" },
  { label: "Fully integrated", icon: "M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" },
  { label: "Easy deployment", icon: "M12 16V8M8.5 11.5 12 8l3.5 3.5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 4h10" },
  { label: "Scalable & intuitive", icon: "M4 20V10M9.5 20V4M15 20v-9M20.5 20v-5M4 10l5.5-6M9.5 4 15 11M15 11l5.5 4" },
  { label: "Expand as you grow", icon: "M4 20h16M6.5 20v-4h3v4M10.5 20v-8h3v8M14.5 20V7h3v13M13 4h5v5" },
  { label: "Fits every industry", icon: "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 12v3M5 21a3 3 0 1 1 4-2.8M15 18.2A3 3 0 1 1 19 21M8.8 18.5h6.4" },
];

export const proofs = [
  { num: 1, client: "Royal Oven Tanzania", logo: "/assets/royal-oven-logo.png", copy: "Binary One helped Royal Oven settle on Odoo ERP and reduce implementation cost while integrating accounting, production, Point-of-Sale and HR functionality." },
  { num: 2, client: "Pembe Flour Mills Kenya", logo: "/assets/pembe-logo.png", copy: "Binary One supported SAP Business One audit and executive training so the ERP became a management instrument, not just an accounting database." },
  { num: 3, client: "Pacific Petroleum", logo: "/assets/pacific-petroleum-mark.png", copy: "Binary One supported Odoo Enterprise governance across multiple subsidiaries and countries, proving the value of disciplined ERP project oversight." },
];
