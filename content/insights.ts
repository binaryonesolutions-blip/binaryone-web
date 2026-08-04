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
    title: "ERP projects rarely fail at the software. Here is where they actually go wrong",
    excerpt: "Six out of ten ERP programmes we are called into were already in trouble before anyone opened the software. After years of auditing these things, the pattern barely changes — sponsorship, data, scope and change. Here is what it looks like early, what it costs late, and how we shut each one down.",
    author: "Michael Kiai",
    initials: "MK",
    role: "Virtual CIO / Advisory",
    body: [
      "I have sat in enough post-mortems to know how the conversation starts. Somebody puts the vendor on the screen and asks what went wrong with the product. Almost every time, the answer was decided months earlier — in a steering meeting that kept slipping, in a stock master nobody owned, in a go-live date picked to suit a board calendar. The software is usually the least interesting part of the failure.",
      "So when a client asks us to look at a stalled programme, we do not start with the system. We start with the seven things that quietly break ERP in this region, and we score them honestly.",
      "Sponsorship is the first and the most expensive. When a programme is handed to IT or finance and left there, cross-departmental decisions have nowhere to go. Everyone waits for the monthly slot, and the implementer bills for the waiting. The fix is unglamorous: one named executive with the authority to settle a process dispute on the spot, and a fortnightly steering committee working off a live risk register.",
      "Dirty data is the second, and it is the one people underestimate most. Customers, suppliers and stock sitting in four spreadsheets with four different codes. Here is the uncomfortable truth — messy data migrates faster than clean data. It goes in easily and comes back out as distrust in every report after go-live. Clean and de-duplicate the masters first, with a named owner per domain and a signed-off cut-off date. Nothing else in the plan survives if this is skipped.",
      "Scope creep never arrives as a bad idea. It arrives as one more reasonable report, department by department, until the timeline stretches and the original business case has quietly disappeared. We freeze a phase-one scope tied to that case and send everything else to a phase-two backlog with its own approval. Saying “yes, in phase two” keeps the programme honest without making enemies.",
      "Then there is the finger-pointing. Software vendor, implementer, internal team — three credible explanations for the same delay, and no one owning the outcome. The client absorbs both the slip and the rework. This is precisely why we hold no licence revenue: one accountability matrix, contractual milestones, and an advisor whose recommendation follows the evidence rather than the margin.",
      "Timelines are where optimism gets expensive. A date chosen for a financial year, then work compressed to fit it — and testing, training and data cleansing are always the first things cut. We plan backwards from a tested cut-over, not forwards from a wish, and we treat UAT and training as non-negotiable line items.",
      "Change management gets the same treatment. Train people the week before go-live and you will watch the parallel spreadsheets reappear the week after. The system goes live; the people do not. Role-based training, super-users in every department, and adoption tracked as a KPI for ninety days.",
      "The last one is the quietest. The project closes at go-live and nobody checks whether the promised benefits ever arrived — while licences and support renew for years against a business case no one validated. We audit benefits realisation at three and six months, and we act on the gap.",
      "Our consulting sequence exists for exactly this reason. Audit first, then a readiness score, then gap analysis, then structured vendor selection, then implementation governance, then the post-go-live audit — six stages, each one closing a specific pitfall rather than adding process for its own sake.",
      "None of this is theory and none of it is expensive at the right moment. Every one of these problems costs least before contracts are signed and data is migrated. If you are somewhere in that window, walk your programme through the ERP Pitfalls Guide and score it green, amber or red. Optimism is the most expensive input in an ERP budget — and it is the one thing no vendor will flag for you.",
    ],
  },
  {
    thumb: "nawiri",
    category: "DIGITAL LOYALTY",
    date: "NOVEMBER 3, 2025",
    dateLong: "NOVEMBER 3, 2025",
    title: "The last mile decides: rewarding the mechanic, fundi and farmer who choose your brand",
    excerpt: "Your distributor buys the pallet. A mechanic, fundi, farmer or household chooses the brand at the point of consumption — and you never learn their name. NAWIRI rewards that person directly on any phone, and gives the manufacturer a live, named view of who actually moves the product.",
    author: "Humphrey Kirui",
    initials: "HK",
    role: "Founder & Lead Consultant",
    body: [
      "A manufacturer can see every carton leaving the depot and still not know who used it. Between the plant and the point of consumption sit distributors, stockists and shopfronts — and the person who actually decides, the mechanic fitting the part or the farmer opening the input, stays invisible.",
      "NAWIRI closes that gap. It is our homegrown loyalty platform built for the consumption last mile: mechanics, fundis, painters, farmers and households who buy on repeat, judge on performance and recommend on trust.",
      "Reward at the moment of use: A code on the pack, sachet or part is scratched and sent by SMS, USSD or app. Airtime or M-PESA cashback lands on the same number within seconds — no smartphone, no app store, no waiting for a quarterly promo cycle.",
      "Points that build on merit: Repeat redemptions move a fundi or mechanic up tiers with better earn rates and bonuses, so the reward compounds for the people who keep specifying your brand rather than the ones who buy once at a discount.",
      "The retail last mile as an influence layer: Shopfront attendants and counter staff decide which brand gets handed over when a customer asks for “any one”. Enrolled as named influencers with their own codes, they earn on the sale they influenced — a small, measurable incentive exactly where the recommendation happens.",
      "Genuine product, proven: Every code is unique and single-use, so redemption doubles as anti-counterfeit verification. Where the fakes are circulating shows up as a map, not a rumour.",
      "What the brand owner gets: Named repeat buyers, redemption by region and SKU, tier movement, lapsed users and campaign cost per active buyer — a direct channel to the last mile instead of an estimate from a distributor report.",
      "We build, host and support it. Onboarding, field and attendant training, a support line, and a dashboard your brand and trade teams can act on the same week.",
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
