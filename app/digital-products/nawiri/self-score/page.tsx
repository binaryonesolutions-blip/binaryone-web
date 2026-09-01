import type { Metadata } from "next";
import Link from "next/link";
import LoyaltySelfScore from "@/components/tools/LoyaltySelfScore";
import { routes } from "@/content/nav";

export const metadata: Metadata = {
  alternates: { canonical: "/digital-products/nawiri/self-score" },
  description:
    "Score your loyalty programme across 10 statements in 3 minutes. Your total places it in one of four maturity eras — and tells you what to fix first.",
};

export default function LoyaltySelfScorePage() {
  return (
    <div
      data-skin="nawiri"
      className="mx-auto min-h-screen w-full max-w-[1440px] overflow-x-hidden bg-[#0A1628] font-inter text-white [background-image:linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
    >
      {/* Mini general nav */}
      <div className="flex h-[40px] items-center justify-between bg-[#071120] px-5 sm:px-8 lg:px-[64px]">
        <Link href={routes.home} className="font-inter text-[12px] font-semibold text-[#94A3B8] hover:text-[#9EFF5A]">← binaryone.co.ke</Link>
        <nav className="hidden items-center gap-[24px] font-inter text-[12px] font-medium lg:flex">
          <Link href={routes.home} className="text-[#94A3B8] hover:text-[#9EFF5A]">Home</Link>
          <Link href={routes.managedIt} className="text-[#94A3B8] hover:text-[#9EFF5A]">Managed IT</Link>
          <Link href={routes.erp} className="text-[#94A3B8] hover:text-[#9EFF5A]">ERP Consulting</Link>
          <Link href={routes.digitalProducts} className="text-[#94A3B8] hover:text-[#9EFF5A]">Digital Products</Link>
          <Link href={routes.about} className="text-[#94A3B8] hover:text-[#9EFF5A]">About</Link>
          <Link href={routes.insights} className="text-[#94A3B8] hover:text-[#9EFF5A]">Insights</Link>
          <Link href={routes.contact} className="text-[#94A3B8] hover:text-[#9EFF5A]">Contact</Link>
        </nav>
      </div>
      <div className="h-[1px] shadow-[0_0_12px_rgba(158,255,90,0.45)] [background:linear-gradient(90deg,rgba(158,255,90,0),#9EFF5A_18%,#9EFF5A_82%,rgba(158,255,90,0))]" />

      {/* Header */}
      <header className="sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-[rgba(45,212,191,0.25)] bg-[rgba(10,22,40,0.92)] px-5 sm:px-8 lg:px-[64px] [backdrop-filter:blur(12px)]">
        <div className="flex items-center gap-[16px]">
          <Link href={routes.nawiri} className="flex items-baseline gap-[8px]">
            <span className="font-sora text-[16.5px] lg:text-[20px] font-extrabold tracking-[0.02em] text-white">NAWIRI</span>
            <span className="hidden font-inter text-[10px] font-medium tracking-[0.16em] text-[#94A3B8] sm:inline">DIGITAL LOYALTY</span>
          </Link>
          <span className="hidden h-[22px] w-[1px] bg-[rgba(45,212,191,0.4)] sm:block" />
          <span className="hidden font-inter text-[12px] font-medium text-[#94A3B8] sm:inline">Loyalty Programme Maturity Self-Score</span>
        </div>
        <nav className="flex items-center gap-[16px] font-inter text-[14.5px] font-medium sm:gap-[32px]">
          <Link href={routes.nawiri} className="hidden text-[#E2E8F0] sm:inline">← Back to NAWIRI</Link>
          <Link href={routes.contact} className="inline-flex items-center gap-[10px] rounded-[11px] border border-[rgba(158,255,90,0.45)] bg-[#071A2E] px-[20px] py-[11px] font-inter text-[14.5px] font-semibold text-white transition-[background,border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[#9EFF5A] hover:bg-[#0d2942] hover:shadow-[0_0_0_1px_rgba(158,255,90,0.6),0_0_22px_rgba(158,255,90,0.42),0_8px_20px_rgba(4,12,24,0.4)]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9EFF5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M3 10h18" /></svg>
            Book a NAWIRI Demo
          </Link>
        </nav>
      </header>

      {/* Intro */}
      <section className="max-w-[900px] px-5 sm:px-8 lg:px-[64px] pb-[48px] pt-[80px]">
        <span className="mb-[16px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#2dd4bf]">FREE SELF-ASSESSMENT · 10 QUESTIONS · 3 MINUTES</span>
        <h1 className="mb-[20px] font-sora text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1.1] text-white [text-wrap:pretty]">How mature is your loyalty programme, <span className="text-[#9EFF5A]">honestly?</span></h1>
        <p className="font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">Score each statement from 1 (not true of us) to 4 (fully true of us). Your total places your programme in one of four maturity eras — and tells you what to fix first before investing further.</p>
      </section>

      <LoyaltySelfScore />

      {/* Footer strip */}
      <footer className="flex flex-col items-center gap-[18px] border-t border-[rgba(45,212,191,0.25)] px-5 sm:px-8 lg:px-[64px] pb-[32px] pt-[28px]">
        <div className="flex flex-wrap items-center justify-center gap-[26px]">
          <Link href={routes.nawiri} className="inline-flex items-center gap-[9px] font-inter text-[14.5px] font-semibold text-[#9EFF5A] hover:text-[#c6ff9d]"><span className="text-[14.5px] lg:text-[16px]">←</span>Back to NAWIRI</Link>
          <Link href={routes.digitalProducts} className="font-inter text-[14.5px] font-medium text-[#94A3B8] hover:text-[#2dd4bf]">Digital Products</Link>
          <Link href={routes.enquiry} className="font-inter text-[14.5px] font-medium text-[#94A3B8] hover:text-[#2dd4bf]">Book a NAWIRI demo</Link>
        </div>
        <span className="font-inter text-[13.5px] text-[#64748B]"><a href="tel:+254787990220" className="text-[#94A3B8] hover:text-[#2dd4bf]">+254 787 990 220</a> · <a href="mailto:info@binaryone.co.ke" className="text-[#94A3B8] hover:text-[#2dd4bf]">info@binaryone.co.ke</a> · Nairobi, Kenya</span>
        <span className="inline-flex items-center gap-[10px] font-inter text-[14px] font-medium tracking-[0.08em] text-[#94A3B8]">Possibilities<span className="b1-decorative h-[7px] w-[7px] rounded-full bg-[#9EFF5A] [animation:lsBeacon_1.9s_ease-in-out_infinite]" />Realised</span>
      </footer>
    </div>
  );
}
