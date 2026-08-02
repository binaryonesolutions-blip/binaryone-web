// NAWIRI page — transcribed verbatim from design-refs/NAWIRI.dc.html.

export const trustChips = [
  "30%+ year-one sales lift",
  "M-PESA integrated",
  "Works on basic phones",
  "Built in Nairobi",
  "White-label ready",
];

export interface Era {
  years: string;
  name: string;
  mechanic: string;
  optimised: string;
  limitation: string;
  num: string;
  rise: string;
  isNow: boolean;
  dot: string;
  glow: string;
  yearColor: string;
  labelColor: string;
  chipBorder: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  ghost: string;
  bar1: string;
  bar2: string;
  bar3: string;
  bar4: string;
}

export const eras: Era[] = [
  { years: "2015–2018", name: "Punch-card era", mechanic: "Stamps, plastic cards, manual lists", optimised: "Repeat purchase", limitation: "No data, no insight, easy to lose" },
  { years: "2018–2021", name: "Points & discounts", mechanic: "SMS codes, basic apps, supermarket cards", optimised: "Transaction frequency", limitation: "Anonymous buyers, little behavioural insight" },
  { years: "2021–2024", name: "App-based engagement", mechanic: "Branded apps, push notifications", optimised: "Member acquisition", limitation: "High drop-off and abandoned apps" },
  { years: "2024–2026", name: "Data-driven, last-mile", mechanic: "Real-time rewards, dashboards, mobile-money payouts", optimised: "Relationship intelligence", limitation: "Needs clean data, governance and integration" },
].map((e, i) => {
  const now = i === 3;
  const blue = "#2dd4bf", neon = "#9EFF5A", off = "#1B2C47";
  return {
    ...e,
    num: "0" + (i + 1),
    rise: 156 - i * 52 + "px",
    isNow: now,
    dot: now ? neon : blue,
    glow: now ? "rgba(158,255,90,0.7)" : "rgba(45,212,191,0.85)",
    yearColor: now ? neon : blue,
    labelColor: now ? "rgba(158,255,90,0.75)" : "#2dd4bf",
    chipBorder: now ? "rgba(158,255,90,0.45)" : "rgba(45,212,191,0.4)",
    cardBg: now ? "#0F2438" : "#11203A",
    cardBorder: now ? "rgba(158,255,90,0.5)" : "rgba(45,212,191,0.3)",
    cardShadow: now ? "0 0 44px rgba(158,255,90,0.14), 0 20px 48px rgba(0,0,0,0.4)" : "0 12px 32px rgba(0,0,0,0.3)",
    ghost: now ? "rgba(158,255,90,0.16)" : "rgba(45,212,191,0.16)",
    bar1: now ? neon : blue,
    bar2: i >= 1 ? (now ? neon : blue) : off,
    bar3: i >= 2 ? (now ? neon : blue) : off,
    bar4: i >= 3 ? neon : off,
  };
});

export const failIcons = [
  { label: "Invisible end consumer", icon: "M3 3l18 18M10.6 10.7a2 2 0 0 0 2.8 2.8M6.6 6.8C4.6 8 3.2 9.9 2.5 12c1.5 4 5.2 6.5 9.5 6.5 1.7 0 3.3-.4 4.7-1.1M9.9 5.8A10 10 0 0 1 12 5.5c4.3 0 8 2.5 9.5 6.5-.5 1.4-1.3 2.6-2.3 3.6" },
  { label: "Counterfeit leakage", icon: "M12 3 20 6.5v5c0 4.5-3.4 7.9-8 9.5-4.6-1.6-8-5-8-9.5v-5zM9 9.5l6 6M15 9.5l-6 6" },
  { label: "POS data dead-end", icon: "M4 20.5h16M6.5 20.5v-6h3v6M14.5 20.5v-10h3v10M4 8.5 9 5l4 2.5 7-4M16.5 3.5H20v3.5" },
  { label: "Delayed incentives", icon: "M12 7.5v5l3.5 2M12 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17ZM9.5 1.5h5" },
];

export const failures = [
  "You sell through distributors, so the end consumer is invisible to you.",
  "Counterfeits and informal channels erode margin before head office notices.",
  "POS data ends at the till and rarely shows why a product was chosen.",
  "Retailers respond to instant value. Mobile-money rewards make incentives immediate.",
];

export const features = [
  { num: "01", name: "Distributor & retailer tracking", copy: "Trace engagement from product movement to last-mile influencer activity.", icon: "M5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7.6 16.4 16.4 8.1M18.5 13.5V20M15.5 17h6" },
  { num: "02", name: "Real-time airtime rewards", copy: "Reward users instantly through phone-based redemption across all mobile phone networks in Kenya.", icon: "M7 3.5h7v17H7zM10.5 17.5h.01M17 7.5c1.4 1.4 1.4 4.2 0 5.6M19.5 5.5c2.4 2.4 2.4 7.2 0 9.6" },
  { num: "03", name: "M-PESA cashback", copy: "Disburse value directly to the redeemer's phone after approved redemption.", icon: "M3 8h18v9H3zM12 14.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM6.5 11v.01M17.5 14v.01" },
  { num: "04", name: "Points progression", copy: "Creates a mix of tiered rewards — earned on merit to drive repeat purchase through last-mile influence.", icon: "M4 20v-4.5h4.5V20zM9.8 20v-9h4.5v9zM15.5 20V5.5H20V20" },
  { num: "05", name: "Mobile app + SMS + USSD", copy: "Serve smartphone and basic-phone users without excluding the real market.", icon: "M4 4.5h16V16H9.5L4 20.5zM8.5 8.5h7M8.5 12h4.5" },
  { num: "06", name: "Scratch-to-reveal coupons", copy: "Support anti-counterfeit controls through secure coupons and hidden product codes.", icon: "M4 7h16v3.2a1.8 1.8 0 0 0 0 3.6V17H4v-3.2a1.8 1.8 0 0 0 0-3.6zM13.5 8.5v1.5M13.5 11.8v1.5M13.5 15v1.5" },
  { num: "07", name: "Dashboards & heat maps", copy: "Give sales and marketing teams visibility by region, brand and user behaviour.", icon: "M4 20V11M9 20V4.5M14 20v-6.5M19 20V8.5M3 21.5h18" },
  { num: "08", name: "White-label ready", copy: "Your brand, your data, your customer relationship: and your own customized mobile app!", icon: "M12 3h8.5v8.5L11.5 20.5 3 12zM16.2 7.8h.01" },
];
