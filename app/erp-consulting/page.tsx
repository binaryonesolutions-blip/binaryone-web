import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import { routes } from "@/content/nav";
import { heroChips, risks, failTiles, failures, stages, vendors, whyOdoo, proofs } from "@/content/erp";

export const metadata: Metadata = {
  alternates: { canonical: "/erp-consulting" },
  title: "ERP Consulting Kenya | Vendor-Neutral: Odoo, SAP, Sage Audit",
  description:
    "Vendor-neutral ERP consulting for Kenyan businesses outgrowing QuickBooks, Tally or Sage. Assess readiness before you sign. Commission an ERP assessment.",
};

const Icon = ({ d, cls = "h-[26px] w-[26px]", w = 1.7 }: { d: string; cls?: string; w?: number }) => (
  <svg viewBox="0 0 24 24" className={cls}><path d={d} fill="none" stroke="#0f766e" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function ERPConsulting() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] text-[#1c1b1b] [font-family:var(--font-inter)]">
      <SiteHeader active={routes.erp} sticky />

      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden [background:linear-gradient(180deg,#071e1b_0%,#0a2724_48%,#6f8f86_78%,#F8FAFB_100%)]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px)] [background-size:72px_100%] [mask-image:linear-gradient(180deg,#000_82%,transparent_99%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[28px] lg:gap-[64px] px-5 sm:px-8 lg:px-[64px] pb-[80px] pt-[88px]">
          {/* Mobile-only eyebrow — sits above the hero image like a title */}
          <span className="order-1 inline-flex w-fit items-center gap-[10px] rounded-[999px] border border-[rgba(56,224,196,0.35)] bg-[rgba(56,224,196,0.06)] px-[20px] py-[9px] font-jet text-[13px] font-bold tracking-[0.14em] text-[#38e0c4] lg:hidden">
            <span className="h-[8px] w-[8px] rounded-full bg-[#38e0c4]" />INDEPENDENT ERP ADVISORY &amp; PROJECT MANAGEMENT
          </span>
          <div className="order-3 lg:order-none">
            <span className="mb-[30px] hidden items-center gap-[10px] rounded-[999px] border border-[rgba(56,224,196,0.35)] bg-[rgba(56,224,196,0.06)] px-[20px] py-[9px] font-jet text-[13px] font-bold tracking-[0.14em] text-[#38e0c4] lg:inline-flex">
              <span className="h-[8px] w-[8px] rounded-full bg-[#38e0c4]" />INDEPENDENT ERP ADVISORY &amp; PROJECT MANAGEMENT
            </span>
            <h1 className="mb-[30px] font-sora text-[30px] sm:text-[40px] lg:text-[54px] font-bold leading-[1.16] tracking-[-0.02em] text-white [text-wrap:pretty]">
              An ERP implementation fails or succeeds <span className="text-[#38e0c4]">long before the software is installed.</span>
            </h1>
            <p className="mb-[36px] max-w-[640px] font-inter text-[15.5px] lg:text-[18px] font-semibold leading-[1.7] text-[#e6efec] [text-wrap:pretty]">
              Independent ERP advisory, data governance and Odoo or SAP preparation for growing East African businesses that cannot afford a failed transition.
            </p>
            <div className="mb-[44px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px]">
              <Link href={routes.erpPitfalls} className="inline-flex items-center gap-[12px] rounded-[14px] bg-[#38e0c4] px-[30px] py-[17px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#0c1512] shadow-[0_8px_24px_rgba(56,224,196,0.25)] hover:bg-[#5ceace]">
                <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5M19 18v3H6.5M8.5 7.5h7M8.5 11h5" fill="none" stroke="#0c1512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Open the ERP Pitfalls Guide
              </Link>
              <Link href={routes.contact} className="inline-block rounded-[14px] border-[1.5px] border-[rgba(56,224,196,0.5)] bg-[rgba(255,255,255,0.06)] px-[28px] py-[15.5px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-[#38e0c4] hover:bg-[rgba(56,224,196,0.12)] hover:text-[#5ceace]">Book a Free ERP Consultation</Link>
            </div>
            <div className="border-t border-[#1c1b1b] pt-[28px]">
              <span className="mb-[16px] block font-jet text-[13px] font-bold tracking-[0.14em] text-[#5eead4]">OUR ERP ADVISORY APPROACH</span>
            </div>
            <div className="flex flex-wrap gap-[12px]">
              {heroChips.map((c) => (
                <span key={c} className="rounded-[999px] border border-[rgba(255,255,255,0.12)] bg-[rgba(12,21,18,0.75)] px-[16px] py-[9px] font-inter text-[13px] font-semibold text-white">{c}</span>
              ))}
            </div>
          </div>
          <div className="order-2 lg:order-none group relative h-[520px] overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
            <Image src="/assets/erp-advisory-hero.png" alt="ERP advisory working session" fill priority sizes="560px" className="object-cover [object-position:center_40%] [filter:grayscale(0.12)] transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" />
            <div className="absolute bottom-[10px] left-[20px] right-[20px] rounded-[12px] border border-[rgba(56,224,196,0.2)] bg-[rgba(6,58,52,0.55)] px-[20px] py-[10px] [backdrop-filter:blur(8px)]">
              <span className="mb-[2px] block font-jet text-[11.5px] font-bold tracking-[0.18em] text-[#38e0c4]">ENTERPRISE RESOURCE PLANNING</span>
              <span className="font-inter text-[14px] text-white">Operational Flow Optimization</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CORE PHILOSOPHY ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-start gap-[64px] px-5 sm:px-8 lg:px-[64px] pb-[96px]">
        <div>
          <span className="mb-[20px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#0f766e]">CORE PHILOSOPHY</span>
          <h2 className="mb-[26px] font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">We are independent advisors, not software sales representatives.</h2>
          <p className="mb-[44px] font-inter text-[15px] lg:text-[17px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">Binary One does not earn commissions from software vendors. We help you choose the right platform (whether Odoo, SAP, Microsoft Dynamics or a bespoke build), document your actual business processes, structure your RFP, evaluate vendor proposals, and govern the implementation team. Our focus is process continuity, data integrity and cost control.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div>
              <div className="mb-[10px] flex items-start gap-[10px]">
                <svg viewBox="0 0 24 24" className="mt-[2px] h-[22px] w-[22px] flex-shrink-0"><circle cx="12" cy="12" r="8" fill="none" stroke="#0f766e" strokeWidth="1.7" /><circle cx="12" cy="12" r="4.5" fill="none" stroke="#0f766e" strokeWidth="1.7" /><circle cx="12" cy="12" r="1.4" fill="#0f766e" /></svg>
                <span className="font-sora text-[14.5px] lg:text-[16px] font-bold text-[#1c1b1b]">ERP Strategy &amp; Governance</span>
              </div>
              <p className="font-inter text-[14px] leading-[1.65] text-[#3e4947]">Process mapping, platform selection, vendor selection, RFP design, project steering representation, independent quality assurance.</p>
            </div>
            <div>
              <div className="mb-[10px] flex items-start gap-[10px]">
                <svg viewBox="0 0 24 24" className="mt-[2px] h-[22px] w-[22px] flex-shrink-0"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" fill="none" stroke="#0f766e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="font-sora text-[14.5px] lg:text-[16px] font-bold text-[#1c1b1b]">ERP Project Management &amp; Assurance</span>
              </div>
              <p className="font-inter text-[14px] leading-[1.65] text-[#3e4947]">Governed delivery from kickoff to go-live — milestone planning, steering-committee reporting, risk registers, UAT sign-off and quality assurance gates.</p>
            </div>
          </div>
        </div>
        <div className="mt-[150px] rounded-[16px] border border-[#E5E7EB] bg-[#f6f3f2] p-[36px]">
          <div className="mb-[24px] flex items-start gap-[14px]">
            <svg viewBox="0 0 24 24" className="h-[46px] w-[46px] flex-shrink-0"><path d="M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9.5 12.5 8 21l4-2.5L16 21l-1.5-8.5" fill="none" stroke="#0f766e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div>
              <span className="mb-[3px] block font-sora text-[15.5px] lg:text-[18px] font-bold text-[#1c1b1b]">Integrity Guarantee</span>
              <span className="font-inter text-[13.5px] text-[#6e7977]">Our advice is never incentivised</span>
            </div>
          </div>
          <p className="mb-[28px] font-inter text-[15px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">Many implementation agencies recommend software based on licensing sales overrides. Binary One represents you, the buyer, to keep vendors honest, verify project scope milestones, and control ERP total cost of ownership (TCO).</p>
          <div className="flex items-center gap-[12px] rounded-[12px] border border-[#E5E7EB] bg-white px-[24px] py-[20px]">
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] flex-shrink-0"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9M8.5 12l2.5 2.5 4.5-5" fill="none" stroke="#0f766e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="font-sora text-[15px] font-bold text-[#1c1b1b]">100% Vendor-Neutral Advisory</span>
          </div>
        </div>
      </div>

      {/* ===== NIGHTMARE NARRATIVE (dark) ===== */}
      <div className="bg-[#00332f] px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <span className="mb-[24px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#7cdc79]">THE NIGHTMARE NARRATIVE</span>
        <p className="m-0 max-w-[1000px] font-sora text-[30px] font-semibold leading-[1.5] text-[#F8FAFB] [text-wrap:pretty]">You crossed 50 workstations. Stock no longer reconciles. Finance closes the month late. A consultant tells you it is time for &ldquo;a real ERP&rdquo;. So you buy one. Eighteen months later, the budget has doubled, users are keeping parallel Excel files, and the board wants to know when the return arrives. <span className="text-[#7cdc79]">This is not bad luck. It is what happens when software is bought before readiness is measured.</span></p>
      </div>

      {/* ===== RISK CARDS ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[48px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">The numbers nobody puts in the sales deck.</h2>
        <div className="mb-[40px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {risks.map((r) => (
            <div key={r.name} className="flex flex-col gap-[14px] rounded-[20px] border-[1.5px] border-[#0f766e] bg-[#f0faf6] p-[32px] shadow-[0_1px_2px_rgba(15,118,110,0.05),0_8px_24px_rgba(15,118,110,0.06)] [background-image:linear-gradient(rgba(15,118,110,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.06)_1px,transparent_1px)] [background-size:22px_22px]">
              <div className="flex items-center gap-[14px]">
                <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#dff3ea]"><Icon d={r.icon} /></span>
                <h3 className="font-sora text-[21px] font-bold text-[#1c1b1b]">{r.name}</h3>
              </div>
              <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">{r.copy}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-[1100px] whitespace-nowrap text-center font-inter text-[15px] lg:text-[17px] italic leading-[1.6] text-[#6e7977]">The technology is rarely the cause of failure. The leadership around the technology almost always is.</p>
      </div>

      {/* ===== WHY ERP PROJECTS FAIL ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] items-center gap-[40px] px-5 sm:px-8 lg:px-[64px] pb-[96px]">
        <div>
          <h2 className="mb-[18px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Why ERP projects fail.</h2>
          <Image src="/assets/erp-fail-abstract.png" alt="ERP project trajectory fracturing" width={420} height={170} className="mb-[64px] block h-[170px] w-[420px] rounded-[14px] object-cover" />
          <div className="grid max-w-[420px] grid-cols-1 md:grid-cols-2 gap-[28px]">
            {failTiles.map((ft) => (
              <div key={ft.label} className="flex flex-col items-center gap-[12px] rounded-[14px] border border-[rgba(15,118,110,0.18)] px-[18px] py-[24px] text-center shadow-[0_1px_2px_rgba(15,118,110,0.06)] transition-[box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:shadow-[0_10px_26px_rgba(15,118,110,0.14)] [background:linear-gradient(160deg,#ffffff_0%,#f2fbf9_55%,#e3f5f1_100%)]">
                <Icon d={ft.icon} cls="h-[30px] w-[30px]" />
                <span className="font-inter text-[12.5px] font-semibold leading-[1.4] tracking-[0.02em] text-[#3e4947]">{ft.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-full flex-col justify-center self-center">
          {failures.map((f) => (
            <div key={f.lead} className="flex items-start gap-[18px] border-b border-[#E5E7EB] py-[18px]">
              <span className="mt-[9px] h-[8px] w-[8px] flex-shrink-0 rounded-full bg-[#ba1a1a]" />
              <p className="font-inter text-[14.5px] lg:text-[16.5px] leading-[1.6] text-[#3e4947]"><strong className="font-semibold text-[#1c1b1b]">{f.lead}</strong> — {f.rest}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BINARY ONE ERP APPROACH ===== */}
      <div className="border-y border-[#E5E7EB] bg-white px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[20px] font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">We do not sell ERP. We govern it.</h2>
        <p className="mb-[56px] max-w-[880px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Most ERP conversations start with a product demo. Ours starts with business readiness. We do not resell Odoo, SAP, Sage, Microsoft Dynamics or Clio LegalTech. We sit on your side of the table, apply governance discipline and help you select, implement and review the right system for the business.</p>
        <div className="mb-[56px] text-center">
          <span className="mb-[18px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#0f766e]">IMPLEMENTATION METHODOLOGY</span>
          <h3 className="font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b]">Our in-house ERP Delivery Methodology</h3>
          <span className="mt-[22px] inline-block h-[4px] w-[56px] rounded-[2px] bg-[#0f766e]" />
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[18px]">
          <div className="absolute left-[8.33%] right-[8.33%] top-[27px] z-0 h-[2px] [background:linear-gradient(90deg,rgba(15,118,110,0.15),rgba(15,118,110,0.55),rgba(15,118,110,0.15))]" />
          {stages.map((s) => (
            <div key={s.num} className="relative z-[1] flex flex-col items-center gap-0 text-center">
              <span className="mb-[20px] inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-white font-jet text-[16px] lg:text-[19px] font-extrabold text-[#eafff8] shadow-[0_6px_16px_rgba(15,118,110,0.28)] [background:linear-gradient(145deg,#0f766e,#0b4f49)]">{s.num}</span>
              <div className="flex w-full flex-1 flex-col gap-[11px] rounded-[14px] border border-[rgba(15,118,110,0.18)] border-t-[3px] border-t-[#17a892] px-[20px] py-[24px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-[6px] hover:border-[#17a892] hover:shadow-[0_16px_34px_rgba(15,118,110,0.14)] [background:linear-gradient(160deg,rgba(45,212,191,0.10)_0%,rgba(45,212,191,0.03)_40%,#FFFFFF_78%)]">
                <span className="font-sora text-[14.5px] lg:text-[16.5px] font-bold leading-[1.3] text-[#1c1b1b] [text-wrap:pretty]">{s.name}</span>
                <p className="font-inter text-[13.5px] leading-[1.6] text-[#4a5a54] [text-wrap:pretty]">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== VENDORS WE GOVERN ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] py-[96px] text-center">
        <h2 className="mb-[40px] font-sora text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Vendors we govern.</h2>
        <div className="mb-[44px] flex flex-wrap items-center justify-center gap-x-[72px] gap-y-[36px]">
          {vendors.map((v) => (
            <span key={v.name} className="inline-flex flex-col items-start gap-[5px]">
              <img src={v.logo} alt={v.name} style={{ height: v.h }} className="block w-auto max-w-[220px] object-contain" />
              {v.caption && <span className="pl-[44px] font-inter text-[14px] font-bold tracking-[0.01em] text-[#1c1b1b]">{v.caption}</span>}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-[760px] font-inter text-[14.5px] lg:text-[16px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Different businesses need different platforms. A 60-user manufacturer in Ruiru is not a 12-partner law firm in Westlands. We govern the selection and implementation logic so the system fits the business, not the other way round.</p>
        <div className="mt-[40px] flex justify-center">
          <Link href={`${routes.erpPitfalls}#self-check`} className="inline-flex items-center gap-[12px] rounded-[12px] bg-[#38e0c4] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#06231e] shadow-[0_8px_24px_rgba(56,224,196,0.25)] hover:bg-[#5ceace]">Take the two-minute ERP readiness self-check<span className="text-[15px] lg:text-[17px]">→</span></Link>
        </div>
      </div>

      {/* ===== ODOO SPECIALTY ===== */}
      <div className="bg-white px-5 sm:px-8 lg:px-[64px] pb-[96px] pt-[80px]">
        <span className="mb-[20px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#0f766e]">PLATFORM SPECIALTY</span>
        <div className="mb-[22px] flex items-center gap-[24px]">
          <img src="/assets/vendor-odoo.png" alt="Odoo" className="block h-[52px] w-auto flex-shrink-0 object-contain" />
          <h2 className="max-w-[820px] font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Leveraging Odoo ERP for Mid-Market Operational Efficiency</h2>
        </div>
        <p className="mb-[48px] max-w-[760px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Struggling with ERP selection or optimisation? Odoo — a comprehensive, cloud-ready suite of integrated, customisable modules covering Accounting, CRM, Manufacturing and HR — is often the ideal fit for growing mid-market organisations. Starting with an ERP GAP Analysis, we deploy customised Odoo platforms with local integrations and expert advisory via monthly vCIO roundtables:</p>
        <h3 className="mb-[40px] text-center font-sora text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-[#1c1b1b]">Why Odoo stands out for the mid-market</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px]">
          {whyOdoo.map((w) => (
            <div key={w.label} className="flex flex-col items-center gap-[16px] text-center">
              <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-[1.5px] border-[rgba(15,118,110,0.20)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_rgba(15,118,110,0.14)] transition-[transform,box-shadow] duration-[250ms] hover:scale-[1.1] [background:radial-gradient(circle_at_32%_26%,#ffffff_0%,#eefaf7_52%,#d6f0ea_100%)]">
                <Icon d={w.icon} cls="h-[36px] w-[36px]" w={1.6} />
              </span>
              <span className="font-inter text-[13.5px] font-semibold leading-[1.4] text-[#1c1b1b]">{w.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PROOF CARDS ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] pb-[96px] pt-[80px]">
        <span className="mb-[24px] block font-jet text-[12px] font-bold tracking-[0.22em] text-[#0f766e]">ERP ENGAGEMENTS ACROSS THE LIFECYCLE — SELECTION, AUDIT &amp; GOVERNANCE</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {proofs.map((p) => (
            <div key={p.num} className="flex flex-col gap-[14px] rounded-[16px] border border-[#cbe6df] bg-white p-[32px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] [background-image:radial-gradient(130%_110%_at_0%_0%,rgba(15,118,110,0.13)_0%,rgba(15,118,110,0.045)_42%,transparent_68%)]">
              <span className="font-inter text-[12px] font-semibold tracking-[0.12em] text-[#006e1b]">CLIENT STORY {p.num}</span>
              <div className="flex items-center gap-[14px]">
                <span className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB]">
                  <img src={p.logo} alt={p.client} className="block h-[34px] w-[34px] object-contain" />
                </span>
                <h3 className="font-sora text-[22px] font-bold text-[#1c1b1b]">{p.client}</h3>
              </div>
              <p className="font-inter text-[15px] leading-[1.65] text-[#3e4947]">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FEATURED CASE STUDY ===== */}
      <div className="px-5 sm:px-8 lg:px-[64px] pb-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-[64px] overflow-hidden rounded-[24px] border border-[rgba(56,224,196,0.16)] bg-[#0c1512] px-5 sm:px-8 lg:px-[64px] py-[72px] shadow-[inset_0_1px_0_rgba(56,224,196,0.08),0_24px_60px_rgba(0,0,0,0.35)] [background-image:radial-gradient(circle_at_90%_8%,rgba(56,224,196,0.16),transparent_44%),radial-gradient(circle_at_2%_98%,rgba(56,224,196,0.12),transparent_42%),linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(140deg,#10201c_0%,#0c1512_52%,#0a1310_100%)] [background-size:auto,auto,54px_54px,54px_54px,auto]">
          <div>
            <span className="mb-[18px] block font-jet text-[13px] font-bold tracking-[0.22em] text-[#38e0c4]">FEATURED CASE STUDY</span>
            <div className="mb-[26px] flex items-start gap-[20px]">
              <img src="/assets/pacific-petroleum-mark.png" alt="Pacific Petroleum" className="mt-[2px] block h-[72px] w-[72px] flex-shrink-0 object-contain" />
              <h2 className="font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-white [text-wrap:pretty]">Pacific Petroleum: One Odoo Backbone Across Dubai &amp; East Africa</h2>
            </div>
            <p className="mb-[44px] font-inter text-[14.5px] lg:text-[16px] leading-[1.7] text-[#c8d6d1] [text-wrap:pretty]">For Pacific Petroleum — headquartered in Dubai with subsidiaries across five East African countries — Binary One governed a full Odoo Enterprise implementation completed in March 2025. Rather than reselling a platform, we sat on the client&apos;s side of the table: consolidating multi-country, multi-currency operations onto one governed ledger, standardising intercompany controls and delivering a multi-lingual system the whole group actually uses — at a fraction of the cost of the Tier-1 alternatives on the shortlist.</p>
            <div className="flex gap-[72px]">
              {[
                { big: "6 Countries", small: "Dubai HQ + Nairobi, South Sudan, Uganda, DRC & Tanzania" },
                { big: "Multi", small: "Currency & Lingual Operations" },
                { big: "45%", small: "More Affordable than MS Dynamics" },
              ].map((s) => (
                <div key={s.big} className="flex flex-col gap-[8px]">
                  <span className="font-jet text-[32px] font-bold leading-none text-[#38e0c4]">{s.big}</span>
                  <span className="font-jet text-[12.5px] font-medium leading-[1.5] tracking-[0.04em] text-[#8fa8a0]">{s.small}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Link href={routes.enquiry} className="inline-flex items-center gap-[12px] whitespace-nowrap rounded-[12px] bg-[#38e0c4] px-[30px] py-[18px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#0c1512] hover:bg-[#5ceace]">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]"><path d="M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" fill="none" stroke="#0c1512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Discuss Your ERP Project
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
