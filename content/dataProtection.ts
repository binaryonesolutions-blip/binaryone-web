// Data Protection page — transcribed verbatim from design-refs/Data Protection.dc.html.

export type PillarIcon = "lock" | "shield" | "db" | "check";
export type NavIcon = "shield" | "file" | "user" | "key";

export const navDefs: { key: "overview" | "full" | "rights" | "portal"; label: string; icon: NavIcon }[] = [
  { key: "overview", label: "Executive Overview", icon: "shield" },
  { key: "full", label: "Full Policy Text", icon: "file" },
  { key: "rights", label: "Your Rights (DPA 2019)", icon: "user" },
  { key: "portal", label: "Data Request Portal", icon: "key" },
];

export const pillars: { icon: PillarIcon; title: string; copy: string }[] = [
  { icon: "lock", title: "Lawfulness & Transparency", copy: "We process all data lawfully, transparently, and with strict operational justification under the Kenya Data Protection Act, 2019." },
  { icon: "shield", title: "Zero-Reseller Fiduciary Stance", copy: "We are fully independent consultants. We never sell, rent, monetize, or lease client details or corporate configuration metadata to software vendors or third-party marketers." },
  { icon: "db", title: "Data Minimization", copy: "We limit the data we collect to the absolute minimum required to execute our professional ERP audits, system deployments, and boardroom advisory." },
  { icon: "check", title: "Sovereign Cloud Storage", copy: "Our system databases reside on physically secure cloud infrastructures ensuring strong encryption in transit and at rest." },
];

export const sections: { head: string; body: string; list: string[] }[] = [
  { head: "1. SCOPE AND AUTHORITY", body: "This Policy applies to all personal data collected, stored, processed, or transferred by Binary One Solutions Limited under the Laws of Kenya, specifically the Kenya Data Protection Act, 2019 (DPA). The scope covers digital transformation consultations, ERP reviews, custom software implementations (such as NAWIRI modules), and standard operations of our web services.", list: [] },
  { head: "2. CATEGORIES OF PERSONAL DATA WE PROCESS", body: "In the execution of our duties, we process the following standard categories of personal data:", list: [
    "Client Representatives: Full name, executive email, business telephone numbers, job title, corporate physical address.",
    "Engagement Metadata: Configuration parameters of audited databases, supplier licensing volumes, system access logs.",
    "Website Interaction: Technical IP addresses, device identifiers, referral channels, contact form submissions.",
    "Personnel & Candidates: Professional curricula vitae, reference verification reports, remuneration details.",
  ] },
  { head: "3. LEGAL BASES FOR PROCESSING", body: "Under Section 30 of the DPA, we only process data when we have established a legitimate legal ground:", list: [
    "Performance of a Contract: Essential for completing ERP rescue strategies, system evaluations, and boardroom advisory contracts.",
    "Consent: Explicitly gathered when subscribing to insights, requesting custom audits, or submitting career forms.",
    "Legitimate Interests: To secure our infrastructure, monitor digital product metrics, and defend client networks from supplier software vendor legal claims.",
    "Legal Obligations: Compliance with statutory tax, corporate governance, or national security mandates in Kenya.",
  ] },
  { head: "4. RETENTION AND DISPOSAL", body: "Personal data is retained only for the duration necessary to satisfy the contract or fulfill statutory obligations in Kenya.", list: [
    "Client audit files and configuration metadata are securely wiped within 30 business days after executive board sign-off.",
    "General business records and communication files are retained for a period of up to 7 years for tax compliance.",
    "We utilize standard military-grade digital shredding protocols to prevent unauthorized data recovery during decommissioning cycles.",
  ] },
  { head: "5. TRANSFER OF DATA OUTSIDE KENYA", body: "Binary One stores data inside localized cloud infrastructure zones. Any transfer of personal data outside the territory of Kenya is executed in strict alignment with Sections 48 and 49 of the Data Protection Act, 2019. We confirm that cloud providers utilize adequate safeguards (such as Standard Contractual Clauses or certification mechanisms) approved by the ODPC.", list: [] },
  { head: "6. SECURITY MEASURES", body: "We employ robust technical and organizational security controls:", list: [
    "Multi-factor authentication (MFA) required on all staff systems and consulting portals.",
    "End-to-end encryption (TLS 1.3) for data in transit and AES-256 for database blocks at rest.",
    "Mandatory annual data protection awareness training for all consulting partners and engineers.",
  ] },
  { head: "7. CONTACT THE DATA PROTECTION OFFICER", body: "If you have questions, concerns, or wish to exercise your statutory rights, contact our Data Protection Officer:", list: [] },
];

export const rights = [
  { title: "Right to Be Informed", description: "You have the right to know what personal data is being collected, why it is collected, and how it is processed.", section: "Section 26, Kenya DPA 2019" },
  { title: "Right of Access", description: "You can request copies of all personal data held by Binary One regarding you, free of charge.", section: "Section 26, Kenya DPA 2019" },
  { title: "Right to Rectification", description: "You have the right to request that we correct any inaccurate, outdated, incomplete, or misleading data held about you.", section: "Section 26, Kenya DPA 2019" },
  { title: "Right to Objection", description: "You can object to the processing of all or part of your personal data, including for direct marketing purposes.", section: "Section 26, Kenya DPA 2019" },
  { title: "Right to Erasure (To Be Forgotten)", description: "You can request that we permanently delete your personal data where there is no legal override for retention.", section: "Section 26, Kenya DPA 2019" },
  { title: "Right to Data Portability", description: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format.", section: "Section 34, Kenya DPA 2019" },
];

// lastUpdated: "January 5, <year>" (roll back a year before Jan 5). Fixed for the
// static clone build (current: 2026).
export const lastUpdated = "January 5, 2026";
