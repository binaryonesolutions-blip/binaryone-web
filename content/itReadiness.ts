// IT Readiness assessment — transcribed verbatim from design-refs/IT Readiness.dc.html.

export type CounterKey = "computers" | "laptops" | "servers" | "branches" | "staff";

export const FIELDS: { key: CounterKey; label: string; hint: string; max: number }[] = [
  { key: "computers", label: "Desktop computers", hint: "Workstations in daily use across all sites", max: 500 },
  { key: "laptops", label: "Laptops", hint: "Company-issued portable machines", max: 500 },
  { key: "servers", label: "Servers", hint: "Physical or virtual — on-premise and hosted", max: 10 },
  { key: "branches", label: "Branches / sites", hint: "Locations needing connectivity and support", max: 10 },
  { key: "staff", label: "Existing IT support personnel", hint: "In-house IT staff currently on the payroll", max: 10 },
];

export function packFor(counts: Record<CounterKey, number>): { packName: string; packWhy: string } {
  const { computers, laptops, servers, branches } = counts;
  const users = computers + laptops;
  if (users > 80 || servers >= 4 || branches >= 4) return { packName: "Business", packWhy: "80+ users or a multi-server, multi-branch estate points to a full-time dedicated engineer with ongoing vCIO governance." };
  if (users > 40 || servers >= 2 || branches >= 2) return { packName: "Growth", packWhy: "40–80 users, several systems or distributed sites fit a 3-days/week engineer with monthly vCIO reviews." };
  if (users > 0) return { packName: "Starter", packWhy: "15–40 users professionalising IT fit a 2-days/week engineer with quarterly vCIO reviews." };
  return { packName: "—", packWhy: "Adjust the numbers to see which service pack fits your environment." };
}
