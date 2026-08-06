import type { Metadata } from "next";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import DataProtectionBody from "@/components/tools/DataProtectionBody";
import { lastUpdated } from "@/content/dataProtection";

export const metadata: Metadata = {
  alternates: { canonical: "/data-protection" },
  title: "Data Protection Policy",
  description:
    "Binary One Solutions' commitment to the Kenya Data Protection Act, 2019 — boardroom-grade controls, ODPC registration, statutory data-subject rights and a DSAR portal.",
};

export default function DataProtectionPage() {
  return (
    <div data-skin="policy" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      <SiteHeader solid />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1c2b] px-5 sm:px-8 lg:px-[64px] py-[72px]">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_88%_0%,rgba(34,163,90,0.22),transparent_46%)]" />
        <div className="relative flex items-start justify-between gap-[40px]">
          <div className="max-w-[720px]">
            <span className="mb-[20px] inline-flex items-center gap-[8px] rounded-[999px] border border-[rgba(124,220,121,0.3)] bg-[rgba(124,220,121,0.12)] px-[15px] py-[7px] font-jet text-[11px] font-bold uppercase tracking-[0.14em] text-[#7cdc79]">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6.5v5c0 4.5-3.4 7.9-8 9.5-4.6-1.6-8-5-8-9.5v-5z" /></svg>
              Fiduciary IT Governance
            </span>
            <h1 className="mb-[16px] font-sora text-[30px] sm:text-[40px] lg:text-[52px] font-bold leading-[1.1] lg:leading-[1.05] tracking-[-0.02em] text-white">Data Protection Policy</h1>
            <p className="max-w-[620px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.6] text-[#93a4b3] [text-wrap:pretty]">Demonstrating our strict commitment to the Kenya Data Protection Act, 2019. We implement boardroom-grade security controls to safeguard client information assets.</p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-[12px] rounded-[14px] border border-white/10 bg-white/[0.04] px-[20px] py-[16px]">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#22a45a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            <div>
              <p className="mb-[2px] font-inter text-[10px] font-bold tracking-[0.12em] text-[#93a4b3]">LAST UPDATED</p>
              <p className="font-jet text-[14px] font-medium text-[#e2e8f0]">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </section>

      <DataProtectionBody />

      <SiteFooter />
    </div>
  );
}
