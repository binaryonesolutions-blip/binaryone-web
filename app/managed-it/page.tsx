import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import FaqAccordion from "@/components/tools/FaqAccordion";
import AssessmentForm from "@/components/forms/AssessmentForm";
import { routes } from "@/content/nav";
import { trustChips, comparison, pillars, platforms, assessmentItems, packs } from "@/content/managedIt";

export const metadata: Metadata = {
  alternates: { canonical: "/managed-it" },
  title: "Managed IT Services Kenya | Virtual CIO & IT Operations",
  description:
    "Managed IT services for Kenyan organisations needing Virtual CIO strategy, IT Operations Lead accountability, helpdesk discipline and cyber resilience.",
};

const leaders = [
  { img: "/assets/humphrey-kirui-v2.webp", alt: "Humphrey Kirui, Virtual CIO", role: "Virtual CIO", copy: "Formulates the IT Strategy and owns the roadmap. Turns IT Audit gaps into strategic management reviews, governs the IT team and vendors, recommends budgets and aligns every IT decision to business priorities." },
  { img: "/assets/eugene-hillary.webp", alt: "Eugene Hillary, IT Operations Lead", role: "IT Operations Lead", copy: "Runs service delivery and manages the on-site engineers. Owns helpdesk, tickets, site visits, SLAs and escalation, Agentic AI deployment, audit remediation, CyberSec and Level 1 ERP support, so the strategy becomes daily operational discipline." },
];

export default function ManagedIT() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] text-[#1c1b1b] [font-family:var(--font-inter)]">
      <SiteHeader active={routes.managedIt} sticky />

      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden [background:linear-gradient(180deg,#071e1b_0%,#0a2724_48%,#6f8f86_78%,#F8FAFB_100%)]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px)] [background-size:72px_100%] [mask-image:linear-gradient(180deg,#000_82%,transparent_99%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[28px] lg:gap-[64px] px-5 sm:px-8 lg:px-[64px] pb-[80px] pt-[88px]">
          {/* Mobile-only eyebrow — sits above the hero image like a title */}
          <span className="order-1 inline-flex w-fit items-center gap-[10px] rounded-[999px] border border-[rgba(56,224,196,0.35)] bg-[rgba(56,224,196,0.06)] px-[20px] py-[9px] font-jet text-[13px] font-bold tracking-[0.14em] text-[#38e0c4] lg:hidden">
            <span className="h-[8px] w-[8px] rounded-full bg-[#38e0c4]" />MANAGED IT SERVICES
          </span>
          <div className="order-3 lg:order-none">
            <span className="mb-[30px] hidden items-center gap-[10px] rounded-[999px] border border-[rgba(56,224,196,0.35)] bg-[rgba(56,224,196,0.06)] px-[20px] py-[9px] font-jet text-[13px] font-bold tracking-[0.14em] text-[#38e0c4] lg:inline-flex">
              <span className="h-[8px] w-[8px] rounded-full bg-[#38e0c4]" />MANAGED IT SERVICES
            </span>
            <h1 className="mb-[30px] font-sora text-[30px] sm:text-[38px] lg:text-[50px] font-bold leading-[1.16] tracking-[-0.02em] text-white [text-wrap:pretty]">
              Your IT, run with the discipline of a CIO <span className="text-[#38e0c4]">and the responsiveness of an in-house team.</span>
            </h1>
            <p className="mb-[36px] max-w-[640px] font-inter text-[15.5px] lg:text-[18px] font-semibold leading-[1.7] text-[#e6efec] [text-wrap:pretty]">
              We AIM-IT: Assess, Implement, Manage IT — for medium-sized and larger Kenyan organisations who are tired of break-fix vendors and want governance-grade IT without the cost of a full-time CIO.
            </p>
            <div className="mb-[44px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px]">
              <Link href={routes.managedItReadiness} className="inline-flex items-center gap-[12px] rounded-[14px] bg-[#38e0c4] px-[30px] py-[17px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#0c1512] shadow-[0_8px_24px_rgba(56,224,196,0.25)] hover:bg-[#5ceace]">
                <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" fill="none" stroke="#0c1512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Perform a Managed IT Readiness Assessment
              </Link>
              <a href="#assessment" className="inline-block rounded-[14px] border-[1.5px] border-[rgba(56,224,196,0.5)] bg-[rgba(255,255,255,0.06)] px-[28px] py-[15.5px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-[#38e0c4] hover:bg-[rgba(56,224,196,0.12)] hover:text-[#5ceace]">Book a Free IT Assessment</a>
            </div>
            <div className="border-t border-[#1c1b1b] pt-[28px]">
              <span className="mb-[16px] block font-jet text-[13px] font-bold tracking-[0.14em] text-[#5eead4]">OUR MANAGED IT SERVICE DIFFERENTIATOR</span>
            </div>
            <div className="flex flex-wrap gap-[12px]">
              {trustChips.map((chip) => (
                <span key={chip} className="rounded-[999px] border border-[rgba(255,255,255,0.12)] bg-[rgba(12,21,18,0.75)] px-[16px] py-[9px] font-inter text-[13px] font-semibold text-white">{chip}</span>
              ))}
            </div>
          </div>
          <div className="order-2 lg:order-none group relative h-[420px] overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
            <Image src="/assets/managed-it-hero-v4.webp" alt="Managed IT operations environment" fill priority sizes="560px" className="object-cover [object-position:center_55%] transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" />
            <div className="absolute bottom-[10px] left-[20px] right-[20px] rounded-[12px] border border-[rgba(56,224,196,0.2)] bg-[rgba(6,58,52,0.55)] px-[20px] py-[10px] [backdrop-filter:blur(8px)]">
              <span className="mb-[2px] block font-jet text-[11.5px] font-bold tracking-[0.18em] text-[#38e0c4]">MANAGED IT SERVICES</span>
              <span className="font-inter text-[14px] text-white">AIM-IT: Assess · Implement · Manage</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TWO NAMED LEADERS ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#0f766e]">OPERATIONAL GOVERNANCE</span>
        <h2 className="mb-[20px] font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">One brain. One pair of hands. Both accountable.</h2>
        <p className="mb-[56px] max-w-[880px] font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Every Binary One Managed IT engagement is led by two named people, not a faceless ticket queue. Your Virtual CIO sets the direction, owns the roadmap and turns IT into a management conversation. Your IT Operations Lead runs the helpdesk, manages site visits, owns SLAs and escalates risk early. You always know whom to call. They always know your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {leaders.map((l) => (
            <div key={l.role} className="flex items-start gap-[28px] rounded-[16px] border border-[#E5E7EB] bg-white p-[36px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)]">
              <div className="relative h-[96px] w-[96px] flex-shrink-0 overflow-hidden rounded-full border border-[#0f766e]">
                <Image src={l.img} alt={l.alt} fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <h3 className="mb-[12px] font-sora text-[24px] font-bold text-[#1c1b1b]">{l.role}</h3>
                <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">{l.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== OPERATING REALITY (dark) ===== */}
      <div className="bg-[#00332f] px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <span className="mb-[32px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#9EFF5A]">THE OPERATING REALITY</span>
        <p className="m-0 max-w-[1180px] font-sora text-[24px] font-bold leading-[1.6] tracking-[-0.01em] text-white [text-wrap:pretty]">Your server room hums, until it doesn&apos;t. The one person who knows the passwords is on leave. The vendor answers when he feels like it. Every board meeting, IT is a line item nobody can explain. <span className="text-[#6ee7b7]">Break-fix is not a strategy. We replace firefighting with a governed operating rhythm — a Virtual CIO who owns the roadmap, a named Operations Lead who owns every ticket, and AI-forward tooling that sees failure coming before you do!</span></p>
      </div>

      {/* ===== FRACTIONAL VS VIRTUAL ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <div className="mb-[56px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-start gap-[64px]">
          <div>
            <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#0f766e]">ARCHITECTURAL COMPARISON</span>
            <h2 className="mb-[24px] max-w-[640px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">&ldquo;Fractional CIO&rdquo; or <span className="text-[#12b886]">&ldquo;Virtual CIO&rdquo;</span>? The label matters less than the model behind it.</h2>
            <p className="mb-[18px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]"><strong className="text-[#1c1b1b]">A Fractional CIO</strong> is often one senior individual splitting their time across several independent organisations.<br />While they offer excellent strategic guidance, they are naturally constrained by fixed weekly hours and cannot provide the deep technical backup or continuous execution required to manage modern IT risks.</p>
            <p className="mb-[18px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]"><strong className="text-[#1c1b1b]">A Virtual CIO</strong> model, as Binary One delivers it, is a structured service backed by an operations lead and a full delivery bench.<br />This model guarantees that your governance, daily alignment, and active engineering needs are proactively met without any single point of failure.</p>
            <p className="font-inter text-[14.5px] leading-[1.6] text-[#6e7977] [text-wrap:pretty]">For mid-market and larger Kenyan organisations with real compliance, ERP, and cybersecurity exposure, the Binary One <strong className="font-semibold text-[#0f766e]">Virtual CIO</strong> model applies: operational continuity and execution matter just as much as high-level advice.</p>
          </div>
          {/* Terminal mock */}
          <div className="self-center rounded-[20px] bg-[#0c1512] px-[22px] pb-[22px] pt-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.30)]">
            <div className="flex items-center gap-[8px] px-[6px] pb-[16px] pt-[4px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#f43f5e]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#f59e0b]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#38e0c4]" />
              <span className="flex-1 text-center font-jet text-[12.5px] font-medium text-[#8fa8a0]">binary_one_consulting.sh</span>
            </div>
            <div className="flex flex-col gap-[10px]">
              {[
                { badge: "vC", title: "Virtual CIO Dashboard", sub: "Strategic ICT Alignment & Governance", tag: "Active" },
                { icon: "M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3", title: "Agentic AI Workflows", sub: "Auto-Amending SAP/Odoo Records", tag: "Live" },
                { icon: "M12 3l7 4v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V7l7-4M9 12l2 2 4-4", title: "Managed Security Shield", sub: "Nairobi Security Operations Centre", tag: "Protected" },
              ].map((r) => (
                <div key={r.title} className="flex items-center gap-[14px] rounded-[12px] border border-[rgba(56,224,196,0.15)] bg-[rgba(56,224,196,0.06)] px-[16px] py-[14px]">
                  <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[rgba(56,224,196,0.12)] font-jet text-[14px] font-bold text-[#38e0c4]">
                    {r.badge ? r.badge : <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]"><path d={r.icon} fill="none" stroke="#38e0c4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </span>
                  <span className="flex-1">
                    <span className="block font-sora text-[14.5px] font-bold text-white">{r.title}</span>
                    <span className="block font-inter text-[12px] text-[#8fa8a0]">{r.sub}</span>
                  </span>
                  <span className="rounded-[999px] border border-[rgba(56,224,196,0.3)] bg-[rgba(56,224,196,0.12)] px-[12px] py-[4px] font-jet text-[11px] font-bold text-[#38e0c4]">{r.tag}</span>
                </div>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                <div className="rounded-[12px] border border-[rgba(56,224,196,0.15)] bg-[rgba(56,224,196,0.06)] px-[16px] py-[18px] text-center">
                  <span className="mb-[4px] block font-sora text-[24px] font-bold text-white">15+</span>
                  <span className="font-jet text-[10.5px] font-semibold tracking-[0.14em] text-[#8fa8a0]">YEARS EXPERIENCE</span>
                </div>
                <div className="rounded-[12px] border border-[rgba(56,224,196,0.15)] bg-[rgba(56,224,196,0.06)] px-[16px] py-[18px] text-center">
                  <span className="mb-[4px] block font-jet text-[24px] font-bold text-[#38e0c4]">99.99%</span>
                  <span className="font-jet text-[10.5px] font-semibold tracking-[0.14em] text-[#8fa8a0]">NETWORK UPTIME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto"><table className="w-full min-w-[640px] overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] [border-collapse:collapse]">
          <thead>
            <tr className="bg-[#0c1512]">
              <th className="w-[18%] px-[28px] py-[20px] text-left font-jet text-[13px] font-bold tracking-[0.1em] text-white">DIMENSION</th>
              <th className="w-[38%] px-[28px] py-[20px] text-left font-jet text-[13px] font-bold tracking-[0.1em] text-white">TYPICAL FRACTIONAL CIO</th>
              <th className="px-[28px] py-[20px] text-left font-jet text-[13px] font-bold tracking-[0.1em] text-[#38e0c4]">BINARY ONE VIRTUAL CIO MODEL</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((r) => (
              <tr key={r.dim}>
                <td className="border-b border-[#E5E7EB] px-[28px] py-[20px] align-top font-inter text-[15px] font-semibold text-[#1c1b1b]">{r.dim}</td>
                <td className="border-b border-[#E5E7EB] px-[28px] py-[20px] align-top font-inter text-[15px] leading-[1.6] text-[#3e4947]">{r.fractional}</td>
                <td className="border-b border-[#E5E7EB] bg-[rgba(56,224,196,0.08)] px-[28px] py-[20px] align-top font-inter text-[15px] font-semibold leading-[1.6] text-[#1c1b1b]">{r.b1}</td>
              </tr>
            ))}
          </tbody>
        </table></div>
        <p className="mt-[24px] text-center font-jet text-[15px] font-medium italic text-[#6e7977]">Closing line: Same monthly fee. Very different organisation behind it.</p>
      </div>

      {/* ===== SIX PILLARS ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[48px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Our Six Managed IT Pillars.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {pillars.map((p) => (
            <div key={p.num} className="flex flex-col gap-[12px] rounded-[16px] border border-[#cdeee0] bg-[#f0faf6] p-[32px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] [background-image:linear-gradient(rgba(15,118,110,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.06)_1px,transparent_1px)] [background-size:22px_22px]">
              <span className="font-jet text-[12px] font-medium text-[#006e1b]">{p.num}</span>
              <div className="flex items-center gap-[12px]">
                <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] [background:linear-gradient(135deg,#0f766e,#0d9488)]">
                  <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]"><path d={p.icon} fill="none" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="font-sora text-[21px] font-bold text-[#1c1b1b]">{p.name}</h3>
              </div>
              <p className="font-inter text-[15px] leading-[1.65] text-[#3e4947]">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PLATFORMS WE GOVERN ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[96px] text-center">
        <h2 className="mb-[56px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Platforms we govern.</h2>
        <div className="mb-[52px] flex flex-wrap items-center justify-center gap-[44px]">
          {platforms.map((pl) => (
            <span key={pl.alt} className={pl.label ? "inline-flex flex-col items-center gap-[10px]" : "inline-flex items-center"}>
              <img loading="lazy" decoding="async" src={pl.src} alt={pl.alt} style={{ height: pl.h }} className="block w-auto object-contain" />
              {pl.label && <span className="font-inter text-[13px] font-semibold text-[#3e4947]">{pl.label}</span>}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-[820px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">Tools don&apos;t run themselves — governance does. Your vCIO has rolled these exact platforms out inside Fortune 500 environments, and brings that same discipline to your stack: licensed right, secured properly, and squeezed for every shilling of value.</p>
      </div>

      {/* ===== SERVICE PACKS ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[48px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Our Managed IT <span className="text-[#12b886]">Service Packs</span></h2>
        <div className="mb-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {packs.map((pack) => (
            <div key={pack.name} className="flex flex-col gap-[16px] rounded-[16px] border border-[#d3e9e3] p-[36px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_28px_rgba(15,118,110,0.10)] [background:linear-gradient(135deg,rgba(15,118,110,0.14)_0%,rgba(23,168,146,0.06)_34%,#FFFFFF_68%)]">
              <div>
                <div className="mb-[6px] flex items-center gap-[12px]">
                  <span className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border border-[#b7ded5] bg-[rgba(15,118,110,0.12)]">
                    <svg viewBox="0 0 24 24" className="h-[29px] w-[29px]"><path d={pack.icon} fill="none" stroke="#0f766e" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <h3 className="font-sora text-[26px] font-bold text-[#1c1b1b]">{pack.name}</h3>
                </div>
                <span className="inline-block rounded-[100px] bg-[rgba(0,110,27,0.08)] px-[12px] py-[5px] font-inter text-[13px] font-semibold text-[#006e1b]">{pack.fit}</span>
              </div>
              <p className="flex-1 font-inter text-[15px] leading-[1.65] text-[#3e4947]">{pack.positioning}</p>
              <div className="flex flex-col gap-[10px] border-t border-[#E5E7EB] pt-[16px]">
                {pack.inclusions.map((inc, i) => {
                  const isLead = i === 0;
                  const isNote = inc.startsWith("Includes everything");
                  const isItal = inc.startsWith("IT Audit &");
                  return (
                    <div key={inc} className="flex items-start gap-[12px] font-inter text-[14px] leading-[1.5] text-[#1c1b1b]">
                      <span className="mt-[7px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#006e1b]" />
                      {isLead ? <span className="font-bold">{inc}</span> : isNote ? <span className="italic">+ {inc}</span> : isItal ? <span className="italic">{inc}</span> : <span>{inc}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-[880px] font-inter text-[13.5px] leading-[1.65] text-[#3e4947]">Service pack recommended after the <Link href={routes.managedItReadiness} className="text-[#0f766e] underline underline-offset-[2px]">Free IT Assessment</Link>.<br />Standalone IT Audits and larger implementation projects are scoped and approved separately.</p>
      </div>

      {/* ===== FREE IT ASSESSMENT + FORM ===== */}
      <div id="assessment" className="grid grid-cols-1 md:grid-cols-2 gap-[72px] border-y border-[#E5E7EB] bg-[#F8FAFB] px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <div>
          <h2 className="mb-[20px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Start with a Free IT Assessment — know exactly where you stand.</h2>
          <p className="mb-[32px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">The Free IT Assessment is a structured 90-minute session with your Virtual CIO. We review your current IT setup, identify the three biggest risks and leave you with a written one-page brief. No obligation. No sales pitch dressed up as consulting.</p>
          <div className="flex flex-col">
            {assessmentItems.map((item) => (
              <div key={item} className="flex items-center gap-[14px] border-b border-[#E5E7EB] py-[13px] font-inter text-[15.5px] text-[#1c1b1b]">
                <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#006e1b]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] p-[36px]">
          <AssessmentForm />
        </div>
      </div>

      {/* ===== FAQS + FINAL CTA ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <div className="mx-auto max-w-[920px]">
          <div className="mb-[48px] text-center">
            <span className="mb-[14px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#0f766e]">CLIENT FAQS</span>
            <h3 className="font-sora text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0c1512]">Frequently Asked Questions</h3>
            <span className="mt-[18px] inline-block h-[3px] w-[48px] rounded-[2px] bg-[#0f766e]" />
          </div>
          <FaqAccordion />
          <div className="mt-[52px] text-center">
            <p className="mb-[24px] font-inter text-[14.5px] lg:text-[16px] text-[#6b7c76]">Ready to bring structure, continuity and accountability to your IT?</p>
            <a href="#assessment" className="inline-flex items-center gap-[10px] rounded-[12px] bg-[#2fe0c0] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#06231e] hover:bg-[#4fe9cd]">Book a Free IT Assessment <span className="text-[15.5px] lg:text-[18px]">→</span></a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
