import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/chrome/SiteHeader";
import AgentReasoningTrace from "@/components/tools/AgentReasoningTrace";
import { routes } from "@/content/nav";
import {
  heroTags,
  modules,
  properties,
  useCases,
  readiness,
  approach,
  type ModuleIcon,
} from "@/content/agenticAi";
import agenticHero from "@/public/assets/agentic-hero.png";
import agenticNeural from "@/public/assets/agentic-neural.png";

export const metadata: Metadata = {
  title: "Agentic AI Workflows",
  description:
    "Cognitive AI agents deployed into Odoo and SAP layers — they cross-check files, audit bills and reconcile records in the background, under human-in-the-loop governance.",
};

function ModuleGlyph({ icon }: { icon: ModuleIcon }) {
  const common = { viewBox: "0 0 24 24", width: 24, height: 24, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (icon === "brain") {
    return (
      <svg {...common}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      </svg>
    );
  }
  if (icon === "db") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function AgenticAiPage() {
  return (
    <div
      data-skin="product"
      className="mx-auto w-[1440px] bg-[#0B1D33] font-inter text-white [background-image:linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
    >
      <SiteHeader active={routes.agenticAi} sticky />

      {/* Hero */}
      <section className="grid grid-cols-[1.1fr_0.9fr] items-center gap-[56px] px-[64px] pb-[64px] pt-[96px]">
        <div>
          <span className="mb-[26px] inline-flex items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.4)] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.08em] text-[#5eead4]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#2dd4bf] shadow-[0_0_6px_rgba(45,212,191,0.9)]" />
            AI OPERATIONS &amp; AUTOMATION
          </span>
          <h1 className="mb-[26px] font-sora text-[56px] font-bold leading-[1.08] tracking-[-0.02em] text-white [text-wrap:pretty]">
            AI shouldn&apos;t just answer questions. <span className="text-[#2dd4bf]">It should perform tasks.</span>
          </h1>
          <p className="mb-[40px] font-inter text-[17.5px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">
            We deploy cognitive AI agents directly into Odoo and SAP database layers. They cross-check files, audit bills and reconcile records in the background — so your team can focus on growth.
          </p>
          <div className="flex flex-wrap items-center gap-[16px]">
            <a href="#agent-demo" className="inline-flex items-center gap-[11px] rounded-[12px] bg-[#38e0c4] px-[30px] py-[16px] font-inter text-[16px] font-bold text-[#06231e] transition-colors hover:bg-[#5eead4] hover:text-[#06231e]">
              <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M10 8.5l6 3.5-6 3.5z" /></svg>
              Watch an AI Agent Operate
            </a>
            <Link href={routes.enquiry} className="inline-flex items-center gap-[11px] rounded-[12px] border border-[rgba(94,234,212,0.45)] bg-transparent px-[28px] py-[15px] font-inter text-[16px] font-semibold text-[#5eead4] transition-colors hover:border-[#38e0c4] hover:bg-[rgba(56,224,196,0.10)] hover:text-[#8ff5e2]">
              <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>
              Request an AI Scoping Session
            </Link>
          </div>
          <div className="mt-[44px] flex flex-wrap gap-[12px] border-t border-white/10 pt-[26px]">
            {heroTags.map((t) => (
              <span key={t} className="rounded-[999px] border border-[rgba(56,224,196,0.3)] px-[18px] py-[9px] font-jet text-[12.5px] font-semibold text-[#c7ede6] [background:linear-gradient(180deg,rgba(56,224,196,0.12),rgba(56,224,196,0.03))]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bot mesh panel */}
        <div className="group relative h-[440px] overflow-hidden rounded-[16px] border border-[rgba(30,41,59,0.9)] bg-[#020617] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          <Image
            src={agenticHero}
            alt="Agentic AI workflows and bot mesh network"
            fill
            sizes="560px"
            className="object-cover opacity-50 [mix-blend-mode:luminosity] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-70 group-hover:[mix-blend-mode:normal]"
          />
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <line x1="25%" y1="20%" x2="70%" y2="40%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="25%" y1="20%" x2="25%" y2="70%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="25%" y1="70%" x2="70%" y2="40%" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>
          {/* Audit_Bot_01 */}
          <div className="b1-decorative absolute left-[10%] top-[15%] flex items-center gap-[10px] rounded-[12px] border border-[rgba(16,185,129,0.3)] bg-[rgba(15,23,42,0.9)] px-[12px] py-[8px] shadow-[0_10px_24px_rgba(0,0,0,0.4)] [backdrop-filter:blur(8px)] [animation:b1-float_3s_ease-in-out_infinite]">
            <span className="relative flex h-[8px] w-[8px]"><span className="b1-decorative absolute inset-0 rounded-full bg-[#34d399] [animation:b1-ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite]" /><span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#10b981]" /></span>
            <span className="inline-flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[rgba(16,185,129,0.1)]"><svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg></span>
            <span className="font-jet text-[11px] font-bold tracking-[-0.01em] text-[#6ee7b7]">Audit_Bot_01</span>
          </div>
          {/* NLP_Swahili_02 */}
          <div className="absolute right-[8%] top-[35%] flex items-center gap-[10px] rounded-[12px] border border-[rgba(245,158,11,0.3)] bg-[rgba(15,23,42,0.9)] px-[12px] py-[8px] shadow-[0_10px_24px_rgba(0,0,0,0.4)] [backdrop-filter:blur(8px)] hover:border-[rgba(251,191,36,0.5)]">
            <span className="relative flex h-[8px] w-[8px]"><span className="b1-decorative absolute inset-0 rounded-full bg-[#fbbf24] [animation:b1-ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite]" /><span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#f59e0b]" /></span>
            <span className="inline-flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[rgba(245,158,11,0.1)]"><svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
            <span className="font-jet text-[11px] font-bold tracking-[-0.01em] text-[#fcd34d]">NLP_Swahili_02</span>
          </div>
          {/* RAG_Compliance_03 */}
          <div className="b1-decorative absolute bottom-[28%] left-[8%] flex items-center gap-[10px] rounded-[12px] border border-[rgba(20,184,166,0.3)] bg-[rgba(15,23,42,0.9)] px-[12px] py-[8px] shadow-[0_10px_24px_rgba(0,0,0,0.4)] [backdrop-filter:blur(8px)] [animation:b1-pulse_2.4s_ease-in-out_infinite]">
            <span className="relative flex h-[8px] w-[8px]"><span className="b1-decorative absolute inset-0 rounded-full bg-[#2dd4bf] [animation:b1-ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite]" /><span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#14b8a6]" /></span>
            <span className="inline-flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[rgba(20,184,166,0.1)]"><svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /></svg></span>
            <span className="font-jet text-[11px] font-bold tracking-[-0.01em] text-[#5eead4]">RAG_Compliance_03</span>
          </div>
          <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_top,rgba(2,6,23,0.9),transparent_50%)]" />
          <div className="absolute bottom-[16px] left-[16px] right-[16px] z-10 rounded-[12px] border border-[rgba(30,41,59,0.9)] bg-[rgba(15,23,42,0.85)] px-[16px] py-[14px] [backdrop-filter:blur(8px)]">
            <p className="font-jet text-[10px] font-bold leading-[1] tracking-[0.2em] text-[#2dd4bf]">OPENCLAW &amp; N8N AGENTS</p>
            <p className="mt-[6px] font-inter text-[12px] font-medium text-[#f1f5f9]">Autonomous cognitive workflow agents</p>
          </div>
        </div>
      </section>

      {/* Core Agentic Modules */}
      <section className="border-t border-white/10 px-[64px] py-[88px] text-center">
        <span className="mb-[16px] block font-jet text-[12px] font-bold tracking-[0.18em] text-[#2dd4bf]">OPERATIONAL CAPABILITIES</span>
        <h2 className="mb-[18px] font-sora text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">Our Core Agentic Modules</h2>
        <span className="mb-[52px] inline-block h-[3px] w-[56px] rounded-[2px] bg-[#2dd4bf]" />
        <div className="grid grid-cols-3 gap-[24px] text-left">
          {modules.map((m) => (
            <div key={m.title} className="relative overflow-hidden rounded-[18px] border border-[rgba(148,163,184,0.16)] bg-[#10263F] p-[32px] hover:border-[rgba(45,212,191,0.5)]">
              <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(45,212,191,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.22)_1px,transparent_1px)] [background-size:20px_20px] [filter:blur(0.4px)] [mask-image:linear-gradient(135deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_55%,transparent_85%)] [-webkit-mask-image:linear-gradient(135deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_55%,transparent_85%)]" />
              <span className="relative mb-[24px] inline-flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#071e1b]"><span className="inline-flex text-[#2dd4bf]"><ModuleGlyph icon={m.icon} /></span></span>
              <h3 className="relative mb-[14px] font-sora text-[21px] font-bold leading-[1.3] tracking-[-0.01em] text-white [text-wrap:pretty]">{m.title}</h3>
              <p className="relative font-inter text-[15px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">{m.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive reasoning trace */}
      <section id="agent-demo" className="px-[64px] pb-[96px] [scroll-margin-top:96px]">
        <div className="mb-[36px] text-center">
          <h2 className="mb-[10px] font-sora text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-white">Watch an AI agent execute a background task.</h2>
          <p className="font-inter text-[16px] text-[#94A3B8]">Pick a scenario and run the cognitive reasoning engine trace.</p>
        </div>
        <AgentReasoningTrace />
      </section>

      {/* Five properties */}
      <section className="px-[64px] pb-[96px]">
        <span className="mb-[24px] block font-jet text-[12px] font-bold tracking-[0.18em] text-[#2dd4bf]">WHAT AN AGENTIC WORKFLOW IS</span>
        <div className="grid grid-cols-5 gap-[20px]">
          {properties.map((p) => (
            <div key={p.name} className="relative flex flex-col gap-[10px] overflow-hidden rounded-[16px] border border-[rgba(148,163,184,0.16)] bg-[#10263F] p-[24px] [background-image:radial-gradient(120%_90%_at_15%_0%,rgba(45,212,191,0.16)_0%,rgba(45,212,191,0.05)_38%,transparent_68%)] hover:border-[rgba(45,212,191,0.5)]">
              <span className="relative font-inter text-[17px] font-semibold text-[#2dd4bf]">{p.name}</span>
              <p className="relative font-inter text-[14px] leading-[1.6] text-[#94A3B8]">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t border-white/10 px-[64px] py-[88px]">
        <span className="mb-[16px] block font-jet text-[11.5px] font-bold tracking-[0.22em] text-[#2dd4bf]">BUSINESS CASE</span>
        <h2 className="mb-[48px] font-sora text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">Use cases for Kenyan organisations.</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-[22%] border-b border-[rgba(45,212,191,0.35)] px-[24px] py-[16px] text-left font-inter text-[13px] font-semibold tracking-[0.1em] text-[#2dd4bf]">FUNCTION</th>
              <th className="border-b border-[rgba(45,212,191,0.35)] px-[24px] py-[16px] text-left font-inter text-[13px] font-semibold tracking-[0.1em] text-[#2dd4bf]">AGENT DOES</th>
            </tr>
          </thead>
          <tbody>
            {useCases.map((u) => (
              <tr key={u.fn}>
                <td className="border-b border-white/[0.08] px-[24px] py-[18px] align-top font-inter text-[16px] font-semibold text-white">{u.fn}</td>
                <td className="border-b border-white/[0.08] px-[24px] py-[18px] font-inter text-[15.5px] leading-[1.6] text-[#94A3B8]">{u.does}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Approach */}
      <section className="border-t border-white/10 px-[64px] py-[88px]">
        <div className="mb-[44px] flex flex-col items-start gap-[16px]">
          <span className="font-jet text-[11.5px] font-bold tracking-[0.22em] text-[#2dd4bf]">DELIVERY SEQUENCE</span>
          <h2 className="font-sora text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">The Binary One approach.</h2>
          <span className="inline-flex items-center gap-[11px] rounded-[999px] border border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.06)] px-[16px] py-[9px] font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#8ff5e2]">
            SCOPE<span className="text-[#2dd4bf]">→</span>PILOT<span className="text-[#9EFF5A]">→</span>EVIDENCE
          </span>
        </div>
        <div className="relative">
          <div className="absolute left-[22px] right-[6px] top-[23px] h-[2px] rounded-[2px] [background:linear-gradient(90deg,rgba(45,212,191,0.18)_0%,rgba(45,212,191,0.55)_46%,rgba(158,255,90,0.85)_100%)]" />
          <div className="b1-decorative absolute left-[22px] right-[6px] top-[22px] h-[4px] opacity-40 [animation:b1-rail_1.5s_linear_infinite] [background-image:linear-gradient(90deg,rgba(255,255,255,0.6)_0_7px,rgba(255,255,255,0)_7px_26px)] [background-size:26px_100%] [mask-image:linear-gradient(90deg,transparent_0%,#000_14%,#000_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_14%,#000_86%,transparent_100%)]" />
          <div className="relative grid grid-cols-6 gap-[18px]">
            {approach.map((s) => (
              <div key={s.num} className="flex flex-col gap-[18px]">
                <span className="relative flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-[#0B1D33] font-jet text-[13px] font-bold" style={{ border: `1.5px solid ${s.ring}`, boxShadow: s.glow, color: s.tint }}>{s.num}</span>
                <div className="flex flex-1 flex-col gap-[8px] rounded-b-[14px] border border-white/[0.07] bg-white/[0.022] px-[16px] pb-[20px] pt-[18px] transition-[transform,background,border-color,box-shadow] duration-[250ms] hover:-translate-y-[4px] hover:border-[rgba(45,212,191,0.45)] hover:bg-[rgba(45,212,191,0.06)] hover:shadow-[0_18px_40px_-22px_rgba(45,212,191,0.55)]" style={{ borderTop: `2px solid ${s.ring}` }}>
                  <span className="flex items-center gap-[10px]">
                    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] flex-shrink-0" fill="none" stroke={s.tint} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: s.iconGlow }}><path d={s.icon} /></svg>
                    <span className="font-inter text-[16px] font-semibold leading-[1.3] text-white [text-wrap:pretty]">{s.name}</span>
                  </span>
                  <p className="font-inter text-[13.5px] leading-[1.6] text-[#94A3B8] [text-wrap:pretty]">{s.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness */}
      <section className="grid grid-cols-[0.8fr_1.2fr] items-start gap-[64px] border-t border-white/10 px-[64px] py-[88px]">
        <div>
          <h2 className="mb-[28px] font-sora text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">Readiness signals.</h2>
          <div className="group relative overflow-hidden rounded-[16px] border border-[rgba(45,212,191,0.22)] bg-[#040d0b] shadow-[0_20px_48px_rgba(0,0,0,0.4)]">
            <Image
              src={agenticNeural}
              alt="Neural network intelligence"
              width={800}
              height={300}
              className="block h-[300px] w-full object-cover opacity-85 transition-transform duration-500 ease-in-out [filter:brightness(1.25)_saturate(1.1)] group-hover:scale-[1.07]"
            />
            <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(45,212,191,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.14)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(160deg,rgba(0,0,0,0.7)_0%,transparent_70%)] [-webkit-mask-image:linear-gradient(160deg,rgba(0,0,0,0.7)_0%,transparent_70%)]" />
            <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_top,rgba(4,13,11,0.95)_0%,rgba(4,13,11,0.35)_45%,transparent_80%)]" />
            <div className="absolute left-[20px] top-[20px] inline-flex items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.3)] bg-[rgba(4,13,11,0.75)] px-[15px] py-[8px] [backdrop-filter:blur(6px)]">
              <span className="relative flex h-[8px] w-[8px]"><span className="b1-decorative absolute inset-0 rounded-full bg-[#2dd4bf] [animation:b1-ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite]" /><span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#14b8a6]" /></span>
              <span className="font-jet text-[11px] font-bold tracking-[0.12em] text-[#5eead4]">SIGNAL CHECK: ACTIVE</span>
            </div>
            <div className="absolute bottom-[22px] left-[24px] right-[24px]">
              <p className="mb-[6px] font-jet text-[11px] font-bold tracking-[0.18em] text-[#2dd4bf]">READINESS SCORE</p>
              <p className="font-inter text-[18px] font-semibold leading-[1.4] text-[#f1f5f9] [text-wrap:pretty]">We score fit before we scope — evidence over enthusiasm.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[16px] border border-[rgba(148,163,184,0.16)] bg-[#10263F] p-[36px]">
          <p className="mb-[24px] font-inter text-[17px] font-medium text-white">You are ready for a scoped agentic AI pilot if you have:</p>
          <div className="mb-[28px] flex flex-col">
            {readiness.map((r) => (
              <div key={r} className="flex items-center gap-[14px] border-b border-white/[0.08] py-[12px] font-inter text-[15.5px] text-[#E2E8F0]">
                <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-[#7cdc79] font-inter text-[11px] font-semibold text-[#7cdc79]">✓</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
          <p className="font-inter text-[15px] leading-[1.6] text-[#94A3B8]">
            <strong className="font-semibold text-[#7cdc79]">Honest note:</strong> if three or more of these are missing, we will tell you not to start yet.
          </p>
        </div>
      </section>

      {/* Safety callout */}
      <section className="px-[64px] pb-[88px]">
        <div className="flex items-start gap-[26px] rounded-[16px] border border-[rgba(124,220,121,0.35)] bg-[rgba(124,220,121,0.06)] px-[40px] py-[36px]">
          <span className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-full border border-[rgba(124,220,121,0.45)] bg-[rgba(124,220,121,0.08)] shadow-[0_0_22px_rgba(124,220,121,0.16),inset_0_0_14px_rgba(0,0,0,0.35)]">
            <svg viewBox="0 0 24 24" className="block h-[28px] w-[28px]" fill="none" stroke="#7cdc79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.1 2.6h5.8l4.5 4.5v5.8l-4.5 4.5H9.1l-4.5-4.5V7.1z" transform="translate(0 1.5)" /><path d="M12 8.6v4.2" transform="translate(0 1.5)" /><path d="M12 16.1h.01" transform="translate(0 1.5)" /></svg>
          </span>
          <div className="flex flex-col">
            <span className="mb-[14px] block font-jet text-[12px] font-bold tracking-[0.18em] text-[#7cdc79]">SAFETY</span>
            <p className="font-inter text-[19px] font-medium leading-[1.6] text-white [text-wrap:pretty]">Human-in-the-loop on every high-stakes step. No autonomous money movement, no autonomous external communication and no autonomous data deletion.</p>
          </div>
        </div>
      </section>

      {/* Enterprise integration CTA */}
      <section className="border-t border-white/10 px-[64px] pb-[96px] pt-[88px]">
        <div className="relative grid grid-cols-[1.5fr_auto] items-center gap-[48px] overflow-hidden rounded-[22px] border border-[rgba(56,224,196,0.16)] px-[60px] py-[56px] shadow-[inset_0_1px_0_rgba(56,224,196,0.08),0_24px_60px_rgba(0,0,0,0.35)] [background-color:#0c1512] [background-image:radial-gradient(circle_at_90%_8%,rgba(56,224,196,0.16),transparent_44%),radial-gradient(circle_at_2%_98%,rgba(56,224,196,0.12),transparent_42%),linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(140deg,#10201c_0%,#0c1512_52%,#0a1310_100%)] [background-size:auto,auto,54px_54px,54px_54px,auto]">
          <div className="relative">
            <span className="mb-[16px] block font-jet text-[12px] font-bold tracking-[0.18em] text-[#2dd4bf]">ENTERPRISE INTEGRATION</span>
            <h2 className="mb-[18px] font-sora text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-white [text-wrap:pretty]">Ready to deploy intelligent background workers?</h2>
            <p className="max-w-[600px] font-inter text-[15.5px] leading-[1.7] text-[#c2dbd7] [text-wrap:pretty]">Connect with our systems architects to map out custom language models, vector stores and agent tool-calling patterns built on top of your existing Odoo or SAP databases.</p>
          </div>
          <Link href={routes.enquiry} className="relative inline-flex items-center gap-[11px] whitespace-nowrap rounded-[12px] bg-[#38e0c4] px-[30px] py-[17px] font-inter text-[15.5px] font-bold text-[#0c1512] transition-colors hover:bg-[#5ceace] hover:text-[#0c1512]">
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>
            Request Scoping Session
          </Link>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="flex items-center justify-between border-t border-white/10 px-[64px] py-[32px] font-inter text-[13.5px] text-[#94A3B8]">
        <span>
          <span className="font-sora text-[15px] font-bold text-white">Binary One</span> Solutions Ltd · Digital Products
        </span>
        <span>
          info@binaryone.co.ke · +254 787 990 220 · Nairobi ·{" "}
          <Link href={routes.dataProtection} className="border-b border-white/30 pb-[1px] text-inherit hover:text-[#7cdc79]">
            Data Protection Policy
          </Link>
        </span>
        <Link href={routes.digitalProducts} className="border-b border-white/30 pb-[1px] text-[#E2E8F0] hover:text-[#7cdc79]">
          ← All Digital Products
        </Link>
      </footer>
    </div>
  );
}
