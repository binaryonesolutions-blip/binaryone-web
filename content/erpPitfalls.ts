// ERP Pitfalls Guide — transcribed verbatim from design-refs/ERP Pitfalls Guide.dc.html.

const red = { risk: "HIGH RISK", riskBg: "rgba(186,26,26,0.10)", riskColor: "#a4462f" };
const amber = { risk: "COMMON", riskBg: "rgba(217,119,6,0.12)", riskColor: "#8a5a12" };
const teal = { risk: "SILENT", riskBg: "rgba(15,118,110,0.10)", riskColor: "#0f766e" };

export interface Pitfall {
  risk: string; riskBg: string; riskColor: string;
  title: string; symptom: string; cost: string; antidote: string;
  num: string; id: string; anchor: string;
}

export const pitfalls: Pitfall[] = [
  { ...red, title: "Weak executive sponsorship", symptom: "The programme is delegated to IT or finance. Steering meetings slip, decisions wait for a monthly slot.", cost: "Cross-departmental decisions stall; the implementer bills for waiting.", antidote: "Name one accountable executive sponsor with authority to settle process disputes, and hold a fortnightly steering committee with a live risk register." },
  { ...red, title: "Dirty data going in", symptom: "Customer, supplier and stock masters live in several spreadsheets with different codes and duplicates.", cost: "Messy data migrates faster than clean data — and reappears as distrust in every report after go-live.", antidote: "Cleanse and de-duplicate masters before migration, with named data owners per domain and a signed-off cut-off." },
  { ...amber, title: "Scope creep", symptom: "Every department asks for “just one more report”, and each is individually reasonable.", cost: "Timelines stretch, change requests multiply, and the original business case quietly disappears.", antidote: "Freeze a phase-one scope tied to the business case; everything else goes to a phase-two backlog with its own approval." },
  { ...red, title: "Vendor finger-pointing", symptom: "Software vendor, implementer and internal team each explain why the delay belongs to someone else.", cost: "Nobody owns the outcome, and the client absorbs both the delay and the rework.", antidote: "A vendor-neutral governance layer: one accountability matrix, contractual milestones, and an advisor with no licence revenue at stake." },
  { ...amber, title: "Unrealistic timelines", symptom: "A go-live date is chosen for a board meeting or a financial year, then work is compressed to fit it.", cost: "Compressed delivery multiplies every other risk — testing, training and data all get cut first.", antidote: "Plan backwards from a tested cut-over, not forwards from a wish, and protect UAT and training as non-negotiable." },
  { ...red, title: "Insufficient change management", symptom: "Training happens the week before go-live; workarounds and parallel spreadsheets appear the week after.", cost: "The system goes live, but the people do not — adoption stalls and benefits never land.", antidote: "Role-based training, super-users per department, and adoption measured as a KPI for 90 days after go-live." },
  { ...teal, title: "No post-go-live audit", symptom: "The project closes at go-live. Nobody revisits whether the promised benefits actually arrived.", cost: "Licences and support renew for years on a business case nobody ever validated.", antidote: "Audit benefits realisation at three and six months against the original case, and act on the gap." },
].map((p, i) => {
  const num = String(i + 1).padStart(2, "0");
  return { ...p, num, id: "pitfall-" + num, anchor: "#pitfall-" + num };
});

export const lenses = [
  { title: "Read it honestly", copy: "Score your own programme green, amber or red. Optimism is the most expensive input in ERP.", icon: "M12 5c-5 0-9 4.5-9 7s4 7 9 7 9-4.5 9-7-4-7-9-7M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" },
  { title: "Act while it's cheap", copy: "Every pitfall costs least before contracts are signed and data is migrated.", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { title: "Keep it vendor-neutral", copy: "We earn nothing from licences, so the recommendation follows the evidence.", icon: "M12 3l8 3v5c0 4.5-3 8-8 10-5-2-8-5.5-8-10V6l8-3zM9 12l2 2 4-4" },
];

export const checkStatements = [
  "One named executive sponsor owns this programme, not a committee.",
  "We can state the business case in numbers, not adjectives.",
  "Our customer, supplier and stock masters have named owners.",
  "We know which processes we will change and which we will keep.",
  "Phase-one scope is written down and frozen.",
  "The go-live date came from a plan, not from a board calendar.",
  "Budget includes data cleansing, training and post-go-live support.",
  "We have agreed how we will measure benefits after go-live.",
];

export const stages = [
  { num: "01", name: "Audit first", copy: "We audit current systems, processes, data and risks before discussing vendors.", closes: "dirty data" },
  { num: "02", name: "Readiness assessment", copy: "We score people, process, data, sponsorship, budget and governance honestly.", closes: "weak sponsorship" },
  { num: "03", name: "Gap analysis", copy: "We separate what the business truly needs from what is merely nice to have.", closes: "scope creep" },
  { num: "04", name: "Vendor selection", copy: "Structured RFP, demo scoring, reference checks and contract review.", closes: "finger-pointing" },
  { num: "05", name: "Implementation governance", copy: "Steering committee, risk register, implementer accountability and change control.", closes: "unrealistic timelines" },
  { num: "06", name: "Post-go-live audit", copy: "Three and six months after go-live, we review benefits realisation against the business case.", closes: "no audit" },
];
