import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import { DiagnosticTrigger, DiagnosticModal } from "@/components/overlays/DiagnosticModal";
import { routes } from "@/content/nav";
import { trustChips, whyPoints, processSteps, testimonials, clients } from "@/content/home";

const flashDots = [
  { left: 8, top: 55, delay: 2.3 }, { left: 32, top: 54, delay: 3.33 },
  { left: 44, top: 55, delay: 3.84 }, { left: 76, top: 57, delay: 5.21 },
  { left: 93, top: 49, delay: 5.94 }, { left: 49, top: 66, delay: 4.06 },
  { left: 86, top: 65, delay: 5.64 },
];

const routeCards = [
  { kicker: "MANAGED IT SERVICES", href: routes.managedIt, img: "/assets/about-midsection.webp", alt: "Managed IT operations in Nairobi", objPos: "center 62%", title: "IT leadership plus daily support.", copy: "A structured Managed IT service led by a Virtual CIO and delivered through an IT Operations Lead, service desk discipline, on-site support and practical technology governance.", cta: "Engage our Managed IT + vCIO Services →" },
  { kicker: "ERP CONSULTING", href: routes.erp, img: "/assets/home-erp-card.webp", alt: "Grain milling facility with engineering controls", objPos: "center", title: "Avoid the ERP nightmare.", copy: "Vendor-neutral ERP readiness, selection support and implementation governance for organisations outgrowing QuickBooks, Sage, Tally or fragmented spreadsheets.", cta: "Commission an ERP Readiness Assessment →" },
  { kicker: "DIGITAL PRODUCTS", href: routes.digitalProducts, img: "/assets/nawiri-retail-hero.webp", alt: "Kenyan retail loyalty moment", objPos: "center 45%", title: "Products built for real market moments.", copy: "NAWIRI Digital Loyalty, Agentic AI Workflows and Custom Enterprise Software Builds — packaged from years of practical development experience.", cta: "Explore Digital Products →" },
];

// Proof-strip logo tile — natural width (hugs its own logo) so tiles pack into
// organic, uneven rows on every screen size, like the "Platforms we govern" strip.
const logoTile = (c: (typeof clients)[number]) => (
  <div key={c.name} className="flex w-[108px] flex-col items-center gap-[11px] sm:w-[128px]" style={{ transform: `translateY(${c.tileLift}px)` }}>
    <span className="flex items-end justify-center" style={{ width: c.logoW, height: c.logoH }}>
      <img loading="lazy" decoding="async" src={c.logo} alt={c.name} style={{ maxWidth: c.logoW, maxHeight: c.logoH }} className="block h-auto w-auto object-contain" />
    </span>
    {c.showName && (
      <span className="max-w-[98px] sm:max-w-[122px] text-center font-inter text-[10.5px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#6e7977]">{c.name}</span>
    )}
  </div>
);

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-clip bg-[#F8FAFB] text-[#1c1b1b] [font-family:var(--font-inter)]">
      <SiteHeader active={routes.home} />

      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(120%_95%_at_90%_8%,rgba(15,118,110,0.16)_0%,rgba(15,118,110,0.05)_34%,transparent_60%),linear-gradient(90deg,rgba(15,118,110,0.09)_1px,transparent_1px),linear-gradient(0deg,rgba(15,118,110,0.09)_1px,transparent_1px)] [background-size:100%_100%,60px_60px,60px_60px] [mask-image:linear-gradient(180deg,#000_0%,#000_58%,transparent_100%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-[28px] lg:gap-[56px] px-5 sm:px-8 lg:px-[64px] pb-[48px] lg:pb-[64px] pt-[48px] lg:pt-[88px]">
          {/* Mobile-only eyebrow — sits above the hero image like a title */}
          <span className="order-1 inline-flex w-fit items-center gap-[8px] whitespace-nowrap rounded-[999px] border border-[rgba(15,118,110,0.35)] bg-[rgba(15,118,110,0.06)] px-[14px] py-[8px] font-inter text-[11px] font-bold tracking-[0.05em] text-[#0f766e] lg:hidden">
            <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#7cdc79] shadow-[0_0_6px_rgba(124,220,121,0.85)]" />
            DIGITAL TRANSFORMATION SOLUTIONS
          </span>
          <div className="order-3 lg:order-1">
            <span className="mb-[24px] hidden items-center gap-[10px] rounded-[999px] border border-[rgba(15,118,110,0.35)] bg-[rgba(15,118,110,0.06)] px-[18px] py-[8px] font-inter text-[12.5px] font-bold tracking-[0.09em] text-[#0f766e] lg:inline-flex">
              <span className="h-[8px] w-[8px] rounded-full bg-[#7cdc79] shadow-[0_0_6px_rgba(124,220,121,0.85)]" />
              DIGITAL TRANSFORMATION SOLUTIONS
            </span>
            <h1 className="mb-[24px] font-sora text-[34px] sm:text-[44px] lg:text-[58px] font-bold leading-[1.12] lg:leading-[1.08] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">
              Your IT should drive the business — <span className="text-[#17a892]">not just keep the lights on.</span>
            </h1>
            <p className="mb-[16px] font-inter text-[17px] sm:text-[20px] font-medium leading-[1.5] text-[#1c1b1b] [text-wrap:pretty]">
              Managed IT, ERP governance and digital products for organisations that need structure, continuity and measurable business value from technology.
            </p>
            <p className="mb-[32px] font-inter text-[14.5px] lg:text-[16.5px] font-normal leading-[1.65] text-[#3e4947] [text-wrap:pretty]">
              Binary One Solutions helps growing Kenyan and East African organisations professionalise IT, reduce operational risk, prepare for ERP, and turn practical digital ideas into working systems.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-[12px] sm:gap-[16px]">
              <DiagnosticTrigger variant="hero" />
              <a href="#solutions-1a" className="inline-flex items-center gap-[11px] rounded-[12px] border border-[#E5E7EB] bg-white px-[26px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-[#1c1b1b] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_6px_16px_rgba(0,0,0,0.05)] hover:bg-[#f6f3f2]">
                Explore Our Solutions
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-shrink-0"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#1c1b1b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="group relative flex h-[280px] sm:h-[380px] lg:h-[460px] items-center justify-center overflow-hidden rounded-t-[16px] border border-b-0 border-[#E5E7EB]">
              <Image src="/assets/it-icons-banner.webp" alt="Managed IT icons over Nairobi skyline" fill priority sizes="640px" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" />
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="b1-decorative absolute -top-[20%] -bottom-[20%] left-0 w-[34%] [background:linear-gradient(90deg,transparent,rgba(180,255,236,0.16)_45%,rgba(210,255,244,0.28)_50%,rgba(180,255,236,0.16)_55%,transparent)] [mix-blend-mode:screen] [filter:blur(2px)] [animation:hpSheen_7s_linear_infinite]" />
                <div className="b1-decorative absolute bottom-[11%] left-1/2 h-[3px] w-[44%] -translate-x-1/2 rounded-[50%] [background:radial-gradient(closest-side,rgba(120,245,218,0.75),transparent)] [filter:blur(2px)] [mix-blend-mode:screen] [animation:hpDepth_6.5s_ease-out_infinite] [animation-delay:1s]" />
                {flashDots.map((d, i) => (
                  <span key={i} className="b1-decorative absolute h-[3px] w-[3px] rounded-full bg-[#bafff0] opacity-0 shadow-[0_0_5px_1px_rgba(160,255,230,0.8)] [animation:hpFlash_7s_linear_infinite]" style={{ left: `${d.left}%`, top: `${d.top}%`, animationDelay: `${d.delay}s` }} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-b-[16px] border border-t-0 border-[#E5E7EB] px-[22px] py-[16px] text-center [background:linear-gradient(100deg,#14a08c_0%,#12869a_55%,#1b6f9e_100%)]">
              <span className="relative block font-jet text-[15px] lg:text-[17px] font-bold uppercase tracking-[0.16em] text-[#5df0d0]">Binary ONE Solutions</span>
              <span className="relative mt-[5px] block font-inter text-[15.5px] text-white">Home of Digital Transformation</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TRUST STRIP ===== */}
      <div className="relative mt-[8px] lg:-mt-[52px] overflow-hidden px-5 sm:px-8 lg:px-[64px] pb-[56px]">
        <div className="relative border-t border-[#E5E7EB] pt-[24px]">
          <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.16em] text-[#17a892]">OUR CORPORATE CREDENTIALS</span>
          <div className="flex flex-wrap gap-[10px]">
            {trustChips.map((chip) => (
              <span key={chip} className="inline-block rounded-[100px] border border-[rgba(23,168,146,0.45)] bg-white px-[17px] py-[9px] font-inter text-[13.5px] font-medium text-[#0c3b33] shadow-[0_0_0_3px_rgba(23,168,146,0.06),0_2px_10px_rgba(23,168,146,0.12)]">{chip}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SOLUTIONS INTRO ===== */}
      <div id="solutions-1a" className="px-5 sm:px-8 lg:px-[64px] pb-[56px] pt-[64px] text-center">
        <span className="mb-[20px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#17a892]">EXPLORE OUR SOLUTIONS</span>
        <h2 className="mx-auto mb-[20px] max-w-[900px] font-sora text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:balance]">High-Value IT Solutions Engineered for Scaling Organizations</h2>
        <p className="mx-auto max-w-[760px] font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">We design and manage durable digital ecosystems that secure your enterprise operations, automate your supply chain, and guarantee business continuity.</p>
      </div>

      {/* ===== THREE SOLUTION ROUTES ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] pb-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {routeCards.map((c) => (
            <div key={c.kicker} className="group flex flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_14px_36px_rgba(15,118,110,0.10)]">
              <Link href={c.href} className="relative block h-[170px] overflow-hidden">
                <Image src={c.img} alt={c.alt} fill sizes="440px" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" style={{ objectPosition: c.objPos }} />
              </Link>
              <div className="flex flex-1 flex-col gap-[16px] p-[32px]">
                <Link href={c.href} className="self-center whitespace-nowrap rounded-[8px] border-[2.5px] border-[#17a892] bg-[#EEF7F6] px-[18px] py-[9px] text-center font-sora text-[13px] font-bold tracking-[0.11em] text-[#0b3d38] transition-[transform,box-shadow,border-color] duration-[180ms] hover:scale-[1.06] hover:border-[#0d655e] hover:text-[#0d655e] hover:shadow-[0_0_14px_rgba(23,168,146,0.45)]">{c.kicker}</Link>
                <h3 className="font-sora text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-[#1c1b1b]">{c.title}</h3>
                <p className="flex-1 font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">{c.copy}</p>
                <Link href={c.href} className="self-start border-b-[1.5px] border-[#005c55] pb-[2px] font-inter text-[15px] font-semibold text-[#005c55] hover:border-[#006e1b] hover:text-[#006e1b]">{c.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY BINARY ONE (dark) ===== */}
      <div className="bg-[#00332f] px-5 sm:px-8 lg:px-[64px] py-[64px] lg:py-[96px]">
        <h2 className="mb-[40px] lg:mb-[56px] max-w-[820px] font-sora text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#F8FAFB] [text-wrap:pretty]">
          Governance-grade IT, <span className="text-[#4de3a0]">without the weight of a full internal department.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[56px] gap-y-[40px]">
          {whyPoints.map((pt) => (
            <div key={pt.lead} className="flex items-start gap-[18px]">
              <span className="mt-[9px] h-[8px] w-[8px] flex-shrink-0 rounded-full bg-[#7cdc79]" />
              <p className="font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#d7ebe7]"><strong className="font-semibold text-white">{pt.lead}</strong> {pt.rest}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PROCESS (AIM-IT) ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] py-[64px] lg:py-[96px]">
        <div className="mb-[52px] text-center">
          <span className="mb-[16px] block font-jet text-[12.5px] font-bold tracking-[0.22em] text-[#17a892]">HOW WE WORK</span>
          <h2 className="font-sora text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">Our AIM-IT Methodology.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
          {processSteps.map((s) => (
            <div key={s.num} className="relative flex flex-col gap-[14px] overflow-hidden rounded-[16px] border border-[#cfe8df] bg-[#f1f8f5] px-[24px] pb-[28px] pt-[26px]">
              <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(15,118,110,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[rgba(15,118,110,0.10)]">
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><path d={s.iconPath} fill="none" stroke="#0f766e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="font-jet text-[15px] font-bold text-[#8bb6ac]">{s.num}</span>
              </div>
              <span className="relative font-sora text-[15.5px] lg:text-[18px] font-bold text-[#0c1512]">{s.label}</span>
              <p className="relative font-inter text-[14.5px] leading-[1.6] text-[#3e4947]">{s.copy}</p>
            </div>
          ))}
        </div>
        <span className="mt-[36px] block text-center font-jet text-[12.5px] tracking-[0.22em] text-[#17a892]"><span className="font-bold text-[#0c3b33]">AIM-IT:</span> ASSESS · IMPLEMENT · MANAGE · IMPROVE — IT</span>
      </div>

      {/* ===== PROOF STRIP ===== */}
      <div className="border-t border-[#E5E7EB] bg-[#EFF9F7] px-5 sm:px-8 lg:px-[64px] pb-[34px] pt-[64px] lg:pt-[96px]">
        <h2 className="mb-[36px] lg:mb-[48px] text-center font-sora text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0b3d38]">Trusted by organisations that cannot afford technology confusion.</h2>
        {/* Two centered rows (design): 8 then 7, each wraps on smaller screens */}
        <div className="mx-auto flex max-w-[1200px] flex-col gap-y-[26px]">
          <div className="flex flex-wrap items-start justify-center gap-x-[12px] gap-y-[26px]">
            {clients.slice(0, 8).map(logoTile)}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-[12px] gap-y-[26px]">
            {clients.slice(8).map(logoTile)}
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="border-b border-[#E5E7EB] bg-white px-5 sm:px-8 lg:px-[64px] pb-[88px] pt-[26px] [background-image:linear-gradient(180deg,#EFF9F7_0%,#FFFFFF_78%)]">
        <div className="mx-auto max-w-[1152px]">
          <div className="mb-[40px] flex flex-col items-center gap-[14px]">
            <span className="inline-flex items-center gap-[10px] font-jet text-[11.5px] font-bold tracking-[0.22em] text-[#0f766e]"><span className="h-px w-[22px] bg-[#38e0c4]" />IN THEIR WORDS<span className="h-px w-[22px] bg-[#38e0c4]" /></span>
            <h3 className="text-center font-sora text-[27px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Results our clients will say out loud.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
            {testimonials.map((t) => (
              <figure key={t.person} className="relative flex flex-col gap-[22px] rounded-[18px] border border-[rgba(15,118,110,0.16)] bg-white px-[30px] pb-[28px] pt-[34px] shadow-[0_1px_2px_rgba(6,35,30,0.04),0_18px_40px_-28px_rgba(6,35,30,0.35)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-[4px] hover:border-[rgba(56,224,196,0.55)] hover:shadow-[0_1px_2px_rgba(6,35,30,0.05),0_26px_54px_-26px_rgba(6,35,30,0.45)]">
                <span className="pointer-events-none absolute right-[24px] top-[14px] select-none font-sora text-[68px] font-extrabold leading-none text-[rgba(56,224,196,0.28)]">”</span>
                <blockquote className="relative m-0 font-sora text-[16px] lg:text-[19.5px] font-semibold leading-[1.55] tracking-[-0.01em] text-[#12302b] [text-wrap:pretty]">{t.quote}</blockquote>
                <div className="mt-auto flex flex-col gap-[16px]">
                  <span className="h-px [background:linear-gradient(90deg,rgba(56,224,196,0.75)_0%,rgba(56,224,196,0)_100%)]" />
                  <div className="flex items-center gap-[14px]">
                    <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[11px] border border-[#E5E7EB] bg-[#F8FAFB]">
                      <img loading="lazy" decoding="async" src={t.logo} alt={t.org} className="block h-[30px] w-[30px] object-contain" />
                    </span>
                    <span className="flex flex-col gap-[3px]">
                      <span className="font-sora text-[14px] font-bold text-[#1c1b1b]">{t.person}</span>
                      <span className="font-inter text-[12.5px] leading-[1.45] text-[#6e7977]">{t.role}, {t.org}</span>
                    </span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="flex items-center justify-center gap-[18px] bg-white px-5 sm:px-8 lg:px-[64px] pt-[44px]">
        <span className="h-px flex-1 [background:linear-gradient(90deg,rgba(23,168,146,0)_0%,rgba(23,168,146,0.45)_100%)]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#17a892] shadow-[0_0_0_5px_rgba(23,168,146,0.14)]" />
        <span className="h-px flex-1 [background:linear-gradient(90deg,rgba(23,168,146,0.45)_0%,rgba(23,168,146,0)_100%)]" />
      </div>

      {/* ===== DIGITAL PRODUCTS TITLE ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] pb-[40px] pt-[52px] text-center">
        <span className="mb-[16px] block font-jet text-[12.5px] font-bold tracking-[0.22em] text-[#17a892]">PRODUCTS &amp; PLATFORMS</span>
        <Link href={routes.digitalProducts} className="inline-block border-b-2 border-[#17a892] pb-[20px] font-sora text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#17a892] transition-[color,letter-spacing,text-shadow,border-color,transform] duration-[280ms] hover:-translate-y-[2px] hover:border-[#38e0c4] hover:tracking-[-0.005em] hover:text-[#0b3d38] hover:[text-shadow:0_0_26px_rgba(56,224,196,0.55)]">Explore Our Digital Products</Link>
      </div>

      {/* ===== ACCENT STRIPS ===== */}
      {/* Agentic (light) */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-[28px] lg:gap-[48px] border-b border-[#E5E7EB] bg-white p-8 sm:p-10 lg:p-[64px]">
        <div className="flex w-full lg:w-[280px] flex-col gap-[4px]">
          <span className="font-sora text-[60px] font-extrabold leading-none text-[#17a892]">24/7</span>
          <span className="whitespace-nowrap font-inter text-[13px] font-medium tracking-[0.08em] text-[#6e7977]">AGENTS ON DUTY · LIVE IN 3–6 WKS</span>
        </div>
        <div>
          <h3 className="mb-[8px] font-sora text-[24px] font-extrabold leading-[1.25] text-[#1c1b1b]">Put an agent on <span className="text-[#17a892]">the repetitive work.</span></h3>
          <p className="max-w-[560px] font-inter text-[15.5px] leading-[1.6] text-[#3e4947]">Chatbots tell you what to do — agents do it for you. Invoice capture, reconciliation, support triage and report generation, scoped and governed on your existing systems. First live workflow in weeks, not quarters.</p>
        </div>
        <Link href={routes.agenticAi} className="inline-block justify-self-start whitespace-nowrap rounded-[12px] bg-[#0f766e] px-[26px] py-[14px] font-sora text-[15px] font-bold text-white hover:bg-[#0d655e]">Explore Agentic AI</Link>
      </div>
      {/* NAWIRI (dark) */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-[28px] lg:gap-[48px] border-y border-[rgba(158,255,90,0.28)] bg-[#071e1b] p-8 sm:p-10 lg:p-[64px]">
        <div className="flex w-full lg:w-[280px] flex-col gap-[4px]">
          <span className="font-sora text-[60px] font-extrabold leading-none text-[#9EFF5A]">30%+</span>
          <span className="whitespace-nowrap font-inter text-[13px] font-medium tracking-[0.08em] text-[#94A3B8]">YEAR-ONE SALES LIFT</span>
          <span className="whitespace-nowrap font-inter text-[13px] font-medium tracking-[0.08em] text-[#94A3B8]">&amp; ANTI-COUNTERFEITING</span>
        </div>
        <div>
          <h3 className="mb-[8px] font-sora text-[24px] font-extrabold leading-[1.25] text-white">NAWIRI Digital Loyalty — <span className="text-[#9EFF5A]">own the last mile.</span></h3>
          <p className="max-w-[560px] font-inter text-[15.5px] leading-[1.6] text-[#94A3B8]">The mobile-first loyalty platform behind Crown Paints Team Kubwa and Isuzu MAXIT — rewards, M-PESA and actionable sales data.</p>
        </div>
        <Link href={routes.nawiri} className="inline-block justify-self-start whitespace-nowrap rounded-[12px] bg-[#9EFF5A] px-[26px] py-[14px] font-sora text-[15px] font-bold text-[#071e1b] hover:bg-[#B4FF7E] hover:text-[#0A1628]">Book a NAWIRI Demo</Link>
      </div>
      {/* ERP (light) */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-[28px] lg:gap-[48px] border-b border-[#E5E7EB] bg-white p-8 sm:p-10 lg:p-[64px]">
        <div className="flex w-full lg:w-[280px] flex-col gap-[4px]">
          <span className="font-sora text-[60px] font-extrabold leading-none text-[#17a892]">Free</span>
          <span className="whitespace-nowrap font-inter text-[13px] font-medium tracking-[0.08em] text-[#6e7977]">ERP READINESS ASSESSMENT</span>
        </div>
        <div>
          <h3 className="mb-[8px] font-sora text-[24px] font-extrabold leading-[1.25] text-[#1c1b1b]">Know if you&apos;re ready <span className="text-[#17a892]">before you migrate your ERP.</span></h3>
          <p className="max-w-[560px] font-inter text-[15.5px] leading-[1.6] text-[#3e4947]">A structured review of your processes, data and team — so your ERP rollout lands on time and on budget, without the classic failure traps.</p>
        </div>
        <Link href={routes.erp} className="inline-block justify-self-start whitespace-nowrap rounded-[12px] bg-[#0f766e] px-[26px] py-[14px] font-sora text-[15px] font-bold text-white hover:bg-[#0d655e]">Enter ERP Advisory</Link>
      </div>

      {/* ===== DIAGNOSTIC CARD ===== */}
      <div id="diagnostics" className="relative overflow-hidden bg-white p-8 sm:p-10 lg:p-[64px] [scroll-margin-top:96px]">
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(60%_120%_at_50%_50%,rgba(15,118,110,0.10)_0%,rgba(15,118,110,0.03)_45%,transparent_72%),linear-gradient(90deg,rgba(15,118,110,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(15,118,110,0.06)_1px,transparent_1px)] [background-size:100%_100%,52px_52px,52px_52px]" />
        <div className="relative mx-auto grid max-w-[816px] grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-[28px] sm:gap-[38px] overflow-hidden rounded-[18px] border border-[rgba(56,224,196,0.16)] bg-[#0c1512] p-[28px] sm:p-[44px_48px] shadow-[inset_0_1px_0_rgba(56,224,196,0.08),0_24px_60px_rgba(0,0,0,0.35)] [background-image:radial-gradient(circle_at_90%_8%,rgba(56,224,196,0.16),transparent_44%),radial-gradient(circle_at_2%_98%,rgba(56,224,196,0.12),transparent_42%),linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(140deg,#10201c_0%,#0c1512_52%,#0a1310_100%)] [background-size:auto,auto,54px_54px,54px_54px,auto]">
          <div className="relative">
            <span className="mb-[13px] block font-jet text-[11.5px] font-bold tracking-[0.2em] text-[#38e0c4]">EVALUATE YOUR DIGITAL ECOSYSTEM</span>
            <h2 className="mb-[13px] max-w-[430px] font-sora text-[28px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white [text-wrap:pretty]">Calculate Your Enterprise IT &amp; AI Readiness Posture</h2>
            <p className="max-w-[410px] font-inter text-[15px] leading-[1.55] text-[#9fb4ae]">Take our 3-minute diagnostic survey to assess your core cloud infrastructure, ERP integrations, cybersecurity defenses, vCIO oversight, customer experience, and AI readiness metrics.</p>
          </div>
          <DiagnosticTrigger variant="card" />
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[72px] lg:py-[112px] text-center">
        <h2 className="mx-auto mb-[36px] max-w-[760px] font-sora text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Ready to bring structure, continuity and strategy to your IT?</h2>
        <Link href={routes.assessment} className="inline-block rounded-[12px] bg-[#2aa79b] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16.5px] font-semibold text-white shadow-[0_1px_2px_rgba(42,167,155,0.20),0_6px_16px_rgba(42,167,155,0.14)] hover:bg-[#249387]">Book a Free IT Assessment</Link>
      </div>

      <SiteFooter />
      <DiagnosticModal />
    </div>
  );
}
