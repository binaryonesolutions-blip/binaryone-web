import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/chrome/SiteFooter";
import ErpSelfCheck from "@/components/tools/ErpSelfCheck";
import { routes } from "@/content/nav";
import { pitfalls, lenses, stages } from "@/content/erpPitfalls";
import logoLight from "@/public/assets/b1s-logo-light.png";
import pitfallsSquare from "@/public/assets/erp-pitfalls-square.png";

export const metadata: Metadata = {
  title: "The ERP Pitfalls Guide",
  description:
    "Seven ways ERP programmes quietly go wrong in East Africa — what each looks like from the inside, what it costs, and the vendor-neutral antidote we apply before a licence is signed.",
};

export default function ErpPitfallsPage() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-[#E0E5E6] bg-[rgba(237,241,242,0.94)] px-5 sm:px-8 lg:px-[64px] [backdrop-filter:blur(12px)]">
        <Link href={routes.home} className="flex items-center">
          <Image src={logoLight} alt="Binary One Solutions — Towards Digital Transformation" height={45} priority className="block h-[45px] w-auto" />
        </Link>
        <div className="flex items-center gap-[28px]">
          <Link href={routes.erp} className="inline-flex items-center gap-[9px] font-inter text-[15px] font-medium text-[#1c1b1b] hover:text-[#0f766e]"><span className="text-[14.5px] lg:text-[16px]">←</span>Back to ERP Consulting</Link>
          <Link href={routes.enquiry} className="inline-block rounded-[12px] bg-[#0f766e] px-[22px] py-[12px] font-inter text-[14.5px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.3)] transition-[background,color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:bg-white hover:text-[#0b3d38] hover:shadow-[0_0_0_1px_rgba(56,224,196,0.9),0_0_18px_rgba(56,224,196,0.55),0_6px_18px_rgba(6,35,30,0.25)]">Request a Scoping Session</Link>
        </div>
      </header>

      {/* Cover */}
      <section className="relative overflow-hidden bg-[#071e1b] px-5 sm:px-8 lg:px-[64px] pb-[72px] pt-[88px]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(56,224,196,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,224,196,0.07)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -right-[120px] -top-[140px] h-[520px] w-[520px] rounded-full [background:radial-gradient(circle,rgba(56,224,196,0.20)_0%,rgba(7,30,27,0)_68%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-[64px]">
          <div>
            <svg viewBox="0 0 24 24" className="mb-[18px] block h-[56px] w-[56px] [filter:drop-shadow(0_0_14px_rgba(56,224,196,0.45))]"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5M19 18v3H6.5M8.5 7.5h7M8.5 11h5" fill="none" stroke="#38e0c4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="mb-[26px] inline-flex items-center gap-[10px] font-jet text-[11.5px] font-bold tracking-[0.2em] text-[#38e0c4]">FIELD GUIDE<span className="inline-block h-[5px] w-[5px] rounded-full bg-[#38e0c4]" />VENDOR-NEUTRAL<span className="inline-block h-[5px] w-[5px] rounded-full bg-[#38e0c4]" />EDITION 2026</span>
            <h1 className="mb-[22px] font-sora text-[32px] sm:text-[42px] lg:text-[60px] font-extrabold leading-[1.1] lg:leading-[1.05] tracking-[-0.03em] text-white [text-wrap:pretty]">The ERP <span className="text-[#38e0c4]">Pitfalls</span> Guide</h1>
            <p className="mb-[30px] max-w-[600px] font-inter text-[15.5px] lg:text-[18px] leading-[1.7] text-[#c2dbd7] [text-wrap:pretty]">Seven ways ERP programmes quietly go wrong in East Africa — what each one looks like from the inside, what it costs, and the antidote we apply before a single licence is signed.</p>
            <div className="flex flex-wrap gap-[12px]">
              <a href="#self-check" className="inline-flex items-center gap-[8px] whitespace-nowrap rounded-[999px] border border-[rgba(56,224,196,0.62)] px-[18px] py-[9px] font-inter text-[13px] font-bold text-[#8ff5e2] shadow-[0_0_18px_rgba(56,224,196,0.22)] transition-[box-shadow,transform] hover:-translate-y-[1px] hover:text-white hover:shadow-[0_0_26px_rgba(56,224,196,0.42)] [background:linear-gradient(135deg,rgba(56,224,196,0.26)_0%,rgba(15,118,110,0.30)_100%)]">8-point self-check<span className="text-[14px]">↓</span></a>
              <span className="whitespace-nowrap rounded-[999px] border border-[rgba(56,224,196,0.45)] bg-[rgba(12,21,18,0.6)] px-[16px] py-[9px] font-inter text-[13px] font-semibold text-[#c2dbd7]">7 pitfalls</span>
              <a href="#counter-programme" className="whitespace-nowrap rounded-[999px] border border-[rgba(56,224,196,0.45)] bg-[rgba(12,21,18,0.6)] px-[16px] py-[9px] font-inter text-[13px] font-semibold text-[#c2dbd7] hover:text-[#38e0c4]">6-stage counter-programme</a>
              <span className="whitespace-nowrap rounded-[999px] border border-[rgba(56,224,196,0.45)] bg-[rgba(12,21,18,0.6)] px-[16px] py-[9px] font-inter text-[13px] font-semibold text-[#c2dbd7]">~10 min read</span>
            </div>
          </div>
          <div className="rounded-[18px] border border-[rgba(56,224,196,0.22)] bg-[rgba(4,13,11,0.55)] p-[32px] [backdrop-filter:blur(6px)]">
            <span className="mb-[20px] block font-jet text-[11px] font-bold tracking-[0.18em] text-[#38e0c4]">CONTENTS</span>
            {pitfalls.map((p) => (
              <a key={p.num} href={p.anchor} className="flex items-baseline gap-[14px] border-b border-white/[0.08] py-[11px] text-[#e6efec] hover:text-[#38e0c4]">
                <span className="flex-shrink-0 font-jet text-[12px] font-bold text-[#38e0c4]">{p.num}</span>
                <span className="font-inter text-[15px] font-medium leading-[1.45]">{p.title}</span>
              </a>
            ))}
            <a href="#counter-programme" className="flex items-baseline gap-[14px] py-[11px] text-[#e6efec] hover:text-[#38e0c4]">
              <span className="flex-shrink-0 font-jet text-[12px] font-bold text-[#38e0c4]">08</span>
              <span className="font-inter text-[15px] font-medium leading-[1.45]">The counter-programme: six stages</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to read */}
      <section className="border-b border-[#E5E7EB] bg-white px-5 sm:px-8 lg:px-[64px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-[64px]">
          <div>
            <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#0f766e]">HOW TO USE THIS GUIDE</span>
            <h2 className="mb-[20px] font-sora text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">ERP rarely fails at the software layer.</h2>
            <p className="font-inter text-[14.5px] lg:text-[16.5px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">It fails at sponsorship, data, scope and change — long before anyone blames the product. Read each pitfall against your own programme and mark it green, amber or red. Anything amber or red is a decision you still have time to make cheaply.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {lenses.map((l) => (
              <div key={l.title} className="rounded-[14px] border border-[rgba(15,118,110,0.18)] p-[24px] shadow-[0_1px_2px_rgba(15,118,110,0.06)] [background:linear-gradient(160deg,#ffffff_0%,#f2fbf9_55%,#e3f5f1_100%)]">
                <svg viewBox="0 0 24 24" className="mb-[14px] h-[30px] w-[30px]"><path d={l.icon} fill="none" stroke="#0f766e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="mb-[6px] block font-sora text-[15.5px] font-bold text-[#1c1b1b]">{l.title}</span>
                <span className="font-inter text-[13.5px] leading-[1.6] text-[#3e4947]">{l.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitfalls */}
      <section className="px-5 sm:px-8 lg:px-[64px] pb-[40px] pt-[88px]">
        <h2 className="mb-[8px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">Seven pitfalls.</h2>
        <p className="mb-[52px] font-inter text-[14.5px] lg:text-[16.5px] text-[#6e7977]">Symptom · what it costs · the antidote.</p>
        <div className="flex flex-col gap-[28px]">
          {pitfalls.map((p) => (
            <div key={p.id} id={p.id} className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-[32px] rounded-[16px] border border-[#E5E7EB] border-l-4 border-l-[#0f766e] bg-white px-[40px] py-[36px] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[box-shadow,transform] hover:-translate-y-[2px] hover:shadow-[0_14px_34px_rgba(15,118,110,0.12)]">
              <div>
                <span className="block font-sora text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1] tracking-[-0.03em] text-[#e3f5f1]">{p.num}</span>
                <span className="mt-[12px] inline-block rounded-[999px] px-[11px] py-[5px] font-jet text-[10.5px] font-bold tracking-[0.1em]" style={{ background: p.riskBg, color: p.riskColor }}>{p.risk}</span>
              </div>
              <div>
                <h3 className="mb-[16px] font-sora text-[25px] font-bold leading-[1.25] tracking-[-0.01em] text-[#1c1b1b] [text-wrap:pretty]">{p.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
                  <div>
                    <span className="mb-[8px] block font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#6e7977]">SYMPTOM</span>
                    <span className="font-inter text-[15px] leading-[1.65] text-[#3e4947]">{p.symptom}</span>
                  </div>
                  <div>
                    <span className="mb-[8px] block font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#a4462f]">WHAT IT COSTS</span>
                    <span className="font-inter text-[15px] leading-[1.65] text-[#3e4947]">{p.cost}</span>
                  </div>
                  <div>
                    <span className="mb-[8px] block font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#0f766e]">THE ANTIDOTE</span>
                    <span className="font-inter text-[15px] leading-[1.65] text-[#1c1b1b]">{p.antidote}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-check */}
      <section id="self-check" className="mt-[48px] bg-[#0c1512] px-5 sm:px-8 lg:px-[64px] py-[88px] [scroll-margin-top:90px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-stretch gap-[56px]">
          <div className="flex flex-col">
            <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#38e0c4]">TWO-MINUTE SELF-CHECK</span>
            <h2 className="mb-[20px] font-sora text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-white [text-wrap:pretty]">Eight statements. Count the ones you can say honestly.</h2>
            <p className="mb-[26px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.7] text-[#c2dbd7] [text-wrap:pretty]">Six or more and you are ready to talk to vendors. Four or five and you need a scoping exercise first. Three or fewer and choosing software now is the most expensive thing you could do.</p>
            <div className="mb-[26px] h-[250px] overflow-hidden rounded-[16px] border-2 border-[#38e0c4] shadow-[0_0_0_1px_rgba(56,224,196,0.22),0_0_28px_rgba(56,224,196,0.28)]">
              <Image src={pitfallsSquare} alt="ERP scoping session in progress" className="h-full w-full object-cover [object-position:center_35%]" />
            </div>
            <a href={routes.enquiry} className="mt-auto inline-flex items-center gap-[10px] self-center rounded-[12px] bg-[#38e0c4] px-[30px] py-[16px] font-inter text-[15.5px] font-bold text-[#06231e] hover:bg-[#5ceace] hover:text-[#06231e]">Score it with a consultant<span className="text-[14.5px] lg:text-[16px]">→</span></a>
          </div>
          <ErpSelfCheck />
        </div>
      </section>

      {/* Counter-programme */}
      <section id="counter-programme" className="bg-white px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <span className="mb-[18px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#0f766e]">THE COUNTER-PROGRAMME</span>
        <h2 className="mb-[12px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">Six stages that remove the pitfalls.</h2>
        <p className="mb-[52px] max-w-[720px] font-inter text-[14.5px] lg:text-[16.5px] text-[#6e7977] [text-wrap:pretty]">Our ERP consulting sequence exists because every stage closes one of the seven pitfalls above before it can cost money.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {stages.map((s) => (
            <div key={s.num} className="rounded-[16px] border border-[rgba(15,118,110,0.18)] p-[30px] shadow-[0_1px_2px_rgba(15,118,110,0.06)] [background:linear-gradient(160deg,#ffffff_0%,#f6fcfa_60%,#e9f6f3_100%)]">
              <span className="mb-[12px] block font-jet text-[12px] font-bold tracking-[0.14em] text-[#0f766e]">STAGE {s.num}</span>
              <span className="mb-[10px] block font-sora text-[16px] lg:text-[19px] font-bold text-[#1c1b1b]">{s.name}</span>
              <span className="mb-[16px] block font-inter text-[14.5px] leading-[1.65] text-[#3e4947]">{s.copy}</span>
              <span className="inline-block rounded-[999px] bg-[rgba(15,118,110,0.09)] px-[11px] py-[5px] font-inter text-[11.5px] font-semibold text-[#0f766e]">Closes: {s.closes}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFB] px-5 sm:px-8 lg:px-[64px] py-[96px] text-center">
        <h2 className="mx-auto mb-[18px] max-w-[780px] font-sora text-[36px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Have a look at your own programme against these seven. Then let&apos;s talk about the amber ones.</h2>
        <p className="mx-auto mb-[36px] max-w-[620px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.7] text-[#6e7977] [text-wrap:pretty]">A scoping session is vendor-neutral, evidence-first and costs you nothing but an honest hour.</p>
        <div className="flex justify-center gap-[16px]">
          <Link href={routes.enquiry} className="inline-block rounded-[12px] bg-[#38e0c4] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16.5px] font-semibold text-[#06231e] shadow-[0_1px_2px_rgba(15,118,110,0.2)] hover:bg-[#5ceace] hover:text-[#06231e]">Request a Scoping Session</Link>
          <Link href={routes.erp} className="inline-block rounded-[12px] border-[1.5px] border-[rgba(15,118,110,0.35)] bg-white px-[30px] py-[14.5px] font-inter text-[14.5px] lg:text-[16.5px] font-semibold text-[#0f766e] hover:bg-[#f2fbf9] hover:text-[#0b5f58]">Back to ERP Consulting</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
