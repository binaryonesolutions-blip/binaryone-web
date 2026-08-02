// Insights page — transcribed verbatim from design-refs/Insights.dc.html.

export interface Brief {
  thumb: string; // image key resolved in the client component
  category: string;
  date: string;
  dateLong: string;
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  role: string;
  body: string[];
}

export const briefs: Brief[] = [
  {
    thumb: "erp",
    category: "ERP GOVERNANCE",
    date: "OCTOBER 12, 2025",
    dateLong: "OCTOBER 12, 2025",
    title: "The True Cost of ERP Failure: Why 60% of Local Implementations Stall",
    excerpt: "An analysis of common pitfalls in regional ERP deployments, focusing on licensing traps, poor process mapping, and failure to design for offline cooperative sites.",
    author: "Michael Kiai",
    initials: "MK",
    role: "Virtual CIO / Advisory",
    body: [
      "Enterprise Resource Planning (ERP) systems represent a major capital expenditure. Yet, in East Africa, our research and audit engagements reveal a stark reality: over 60% of ERP implementations fail to achieve their primary business objectives or stall indefinitely during deployment.",
      "The primary cause is not the underlying technology; rather, it is a mismatch between rigid software templates and regional operational realities. Companies are frequently pushed into licensing agreements that penalize their operating model.",
      "Licensing Traps: Global software suites often charge per-user, which becomes prohibitively expensive when scaled to field agents or cooperative collectors. The solution is transactional or open-source foundation pricing (like Odoo), which permits unlimited user growth.",
      "Designing for Offline Sites: Many implementations assume permanent high-speed fiber connection. When agricultural scales or regional depots lose connectivity, the entire ERP stalls. Successful architectures must incorporate a hybrid local-offline cache model, syncing with the central database only when internet is recovered.",
      "Process Mapping Before Code: Never configure a single database table before mapping the physical ledger paths. Systems must bend to real operations, not vice-versa, to ensure immediate staff adoption.",
    ],
  },
  {
    thumb: "nawiri",
    category: "DIGITAL LOYALTY",
    date: "NOVEMBER 3, 2025",
    dateLong: "NOVEMBER 3, 2025",
    title: "Every visit remembered: how NAWIRI turns walk-ins into regulars",
    excerpt: "NAWIRI is our digital loyalty platform for Kenyan retailers — points, tiers and M-Pesa-linked rewards that run on a phone at the till. We build it, host it and support it, so shops keep customers coming back without spreadsheets or plastic cards.",
    author: "Humphrey Kirui",
    initials: "HK",
    role: "Founder & Lead Consultant",
    body: [
      "Most retailers already know their best customers by face. What they cannot do is prove it, reward it, or notice the moment a regular quietly stops coming.",
      "NAWIRI is our digital loyalty platform built for that gap — designed for Kenyan shops, pharmacies, salons, restaurants and fuel courts where the till is a phone or a modest POS terminal.",
      "Enrolment in seconds: A customer joins with a phone number at the counter. No plastic card, no app download, no queue. Points attach to the number and are visible to the cashier on the next visit.",
      "Points, tiers and rewards that fit the business: Earn rules, tier thresholds and reward catalogues are configured per merchant, so a coffee retailer and a hardware store can run entirely different economics on the same platform.",
      "M-Pesa-linked redemption: Rewards can be redeemed as discounts, free items or mobile-money value, settled through the same rails merchants already trust for payment.",
      "Insight the owner can act on: Visit frequency, basket value and lapsed-customer lists replace guesswork — so a targeted SMS goes to the people who actually stopped coming.",
      "We build, host and support it. Merchants get onboarding, staff training and a support line; we handle uptime, updates and data protection in the background.",
    ],
  },
  {
    thumb: "managedit",
    category: "MANAGED IT",
    date: "JANUARY 14, 2026",
    dateLong: "JANUARY 14, 2026",
    title: "Someone is watching your systems at 2am — inside our managed IT desk",
    excerpt: "Monitoring, patching, backups and a helpdesk your team can actually reach — with AI agents watching alongside our engineers. Agents spot the quiet failures and propose the fix; a human approves it, so incidents are caught before your users are.",
    author: "Eugene Hillary",
    initials: "EH",
    role: "IT Operations Lead",
    body: [
      "02:14. A disk on the finance server crosses 91% while Nairobi sleeps. Nobody is awake to notice — but something is.",
      "An agentic monitoring bot on our managed IT desk sees the trend, checks it against three weeks of growth, and works out that the volume fills in roughly nine hours. Long before the first user logs in, it has already written the story: what is filling, how fast, and what it wants to do about it.",
      "02:15 — human in the middle. The bot does not touch production on its own. It raises a one-line alert to the on-call engineer with a proposed action and a confidence score. Eugene approves the log-rotation and archive job from his phone in under a minute. The disk drops to 62%. No outage, no ticket, no 8am panic.",
      "That is the shape of the service. Agents do the watching, the correlating and the first draft of the fix. Engineers own the decision. Managed IT is still a human service — the bots simply mean our humans arrive early and informed instead of late and guessing.",
      "Monitoring and alerting: Servers, networks, endpoints and business applications are watched continuously. Agents cluster related alarms into one incident with a probable cause, so an engineer reads a situation rather than sixty notifications.",
      "Patching and hardening: Patch cycles are planned and staged, with configuration baselines enforced so security drift does not quietly accumulate. Anything that touches a production change window is approved by a named engineer, never auto-applied.",
      "Backup and recovery you have actually tested: Backups are scheduled, verified and restore-tested, with agents flagging the silent failures — a job that finished suspiciously fast, a set that shrank overnight. A backup nobody has restored is a hope, not a control.",
      "A helpdesk your staff can reach: One number, one email, one portal. Routine requests are triaged and resolved fast; anything sensitive, judgement-heavy or user-facing goes straight to a person, with site visits where remote support is not enough.",
      "Reporting against SLAs: Monthly reporting shows availability, incidents caught before impact, response times and recurring root causes — so IT spend becomes a conversation about evidence rather than opinion.",
    ],
  },
];
