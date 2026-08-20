// IT Readiness assessment — transcribed verbatim from design-refs/IT Readiness.dc.html.

export type CounterKey = "computers" | "laptops" | "servers" | "branches" | "staff";

export const FIELDS: { key: CounterKey; label: string; hint: string; max: number }[] = [
  { key: "computers", label: "Desktop computers", hint: "Workstations in daily use across all sites", max: 500 },
  { key: "laptops", label: "Laptops", hint: "Company-issued portable machines", max: 500 },
  { key: "servers", label: "Servers", hint: "Physical or virtual — on-premise and hosted", max: 10 },
  { key: "branches", label: "Branches / sites", hint: "Locations needing connectivity and support", max: 10 },
  { key: "staff", label: "Existing IT support personnel", hint: "In-house IT staff currently on the payroll", max: 10 },
];

const PACKS = [
  { packName: "Starter", packFit: "2 days/week · 15–40 users", packWhy: "15–40 users professionalising IT without a full-time commitment: a 2-days/week on-site engineer, remote support with monthly ticket KPI reports, and monthly vCIO review." },
  { packName: "Growth", packFit: "3 days/week · 40–80 users", packWhy: "40–80 users running several systems, ERP dependencies or distributed operations: a 3-days/week engineer with IT Operations Lead oversight and fortnightly vCIO advisory." },
  { packName: "Business", packFit: "Full-time · 80+ users", packWhy: "80+ users needing IT to operate like an internal department: a full-time dedicated engineer with ongoing vCIO governance, dashboards and Agentic AI workflows." },
];

export function packFor(counts: Record<CounterKey, number>): { packName: string; packFit: string; packWhy: string } {
  const { computers, laptops, servers, branches } = counts;
  const users = computers + laptops;
  if (users === 0) return { packName: "—", packFit: "", packWhy: "Adjust the numbers to see which service pack fits your environment." };
  // User count sets the band, exactly as the service plans are published.
  let tier = users >= 80 ? 2 : users >= 40 ? 1 : 0;
  // A heavy estate for the user count nudges one band up — never more.
  if (tier < 2 && (servers >= 4 || branches >= 4)) tier += 1;
  const pack = PACKS[tier];
  if (tier === 0 && users < 15) {
    return { ...pack, packWhy: "Under 15 users, so Starter is the entry pack: a 2-days/week on-site engineer, remote support with monthly ticket KPI reports, and monthly vCIO review. We will confirm the right cadence at your Free IT Assessment." };
  }
  return pack;
}
