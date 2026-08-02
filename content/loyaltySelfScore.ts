// Loyalty Programme Maturity Self-Score — transcribed verbatim from
// design-refs/Loyalty Self-Score.dc.html.

export const QUESTIONS = [
  { text: "We know, by name or ID, who buys or influences our product at the last mile.", dim: "Last-mile visibility" },
  { text: "We can see redemption or engagement activity within 24 hours of it happening.", dim: "Data freshness" },
  { text: "Rewards reach members instantly (airtime, M-PESA or points), not weeks later.", dim: "Reward mechanics" },
  { text: "Our programme covers basic-phone users, not just smartphone owners.", dim: "Market reach" },
  { text: "We can tell which regions, products or campaigns drive repeat purchase.", dim: "Insight" },
  { text: "Counterfeit or diverted product would show up in our programme data.", dim: "Channel integrity" },
  { text: "A named owner runs the programme with a budget and quarterly targets.", dim: "Governance" },
  { text: "Sales and marketing actually use programme dashboards in their decisions.", dim: "Adoption" },
  { text: "We own our member data outright — no agency or platform lock-in.", dim: "Data ownership" },
  { text: "We can link the programme to a measurable sales or margin outcome.", dim: "Business value" },
];

export const BANDS = [
  { min: 10, name: "Punch-card era (10–17)", copy: "Your programme rewards repeat purchase but generates almost no insight. Before any platform investment, fix data capture: who is the member, and what did they just do? That single change unlocks everything above it." },
  { min: 18, name: "Points & discounts era (18–25)", copy: "You reward transactions but the buyer is still largely anonymous. Priority: identity and instant value — registered members and mobile-money rewards. This is the gap NAWIRI closes fastest." },
  { min: 26, name: "App-engagement era (26–33)", copy: "You have members and mechanics, but adoption and insight lag — dashboards exist, decisions don't use them. Priority: governance, a named owner and last-mile coverage beyond smartphone users." },
  { min: 34, name: "Data-driven, last-mile era (34–40)", copy: "Your programme is a genuine data channel. The next gains are integration depth — connecting loyalty data to ERP, distribution and anti-counterfeit controls — and disciplined quarterly review." },
];
