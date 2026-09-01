import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ItReadiness from "@/components/tools/ItReadiness";
import { routes } from "@/content/nav";
import logoLight from "@/public/assets/b1s-logo-light.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/managed-it/readiness" },
  description:
    "Tell us the shape of your IT environment and we'll size the right Managed IT service pack before your Free IT Assessment — no obligation, no sales pitch.",
};

export default function ItReadinessPage() {
  return (
    <div data-skin="corporate" className="mx-auto min-h-screen w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex h-[68px] sm:h-[76px] items-center justify-between gap-[12px] border-b border-[#E0E5E6] bg-[rgba(237,241,242,0.94)] px-5 sm:px-8 lg:px-[64px] [backdrop-filter:blur(12px)]">
        <Link href={routes.home} className="flex flex-shrink-0 items-center">
          <Image src={logoLight} alt="Binary One Solutions — Towards Digital Transformation" height={45} priority className="block h-[32px] sm:h-[45px] w-auto" />
        </Link>
        <nav className="flex items-center gap-[10px] sm:gap-[32px] font-inter text-[14.5px] font-medium">
          <Link href={routes.managedIt} className="flex-shrink-0 whitespace-nowrap text-[#1c1b1b]">←<span className="hidden sm:inline"> Back to Managed IT</span></Link>
          <Link href={routes.assessment} className="inline-flex flex-shrink-0 items-center gap-[8px] sm:gap-[10px] whitespace-nowrap rounded-[11px] border border-[rgba(56,224,196,0.75)] bg-[#d9f5ef] px-[13px] py-[9px] sm:px-[20px] sm:py-[11px] font-inter text-[12.5px] sm:text-[14.5px] font-semibold text-[#06332e] shadow-[0_1px_2px_rgba(6,35,30,0.10),0_4px_14px_rgba(6,35,30,0.08)] transition-[background,border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[#38e0c4] hover:bg-[#bfeee4] hover:shadow-[0_0_0_1px_rgba(56,224,196,0.6),0_0_22px_rgba(56,224,196,0.42),0_8px_20px_rgba(6,35,30,0.26)]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M3 10h18" /></svg>
            <span className="sm:hidden">Free Assessment</span><span className="hidden sm:inline">Book a Free IT Assessment</span>
          </Link>
        </nav>
      </header>

      {/* Intro */}
      <section className="max-w-[860px] px-5 sm:px-8 lg:px-[64px] pb-[48px] pt-[80px]">
        <svg viewBox="0 0 24 24" className="mb-[18px] block h-[66px] w-[66px]"><path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 14.5v-9M8.5 20h7M12 16v4M7 12l2.5-3 2 2.2L14.5 7l2.5 3.2" fill="none" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="mb-[16px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#0f766e]">MANAGED IT READINESS · 2 MINUTES</span>
        <h1 className="mb-[20px] font-sora text-[28px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Perform a Managed IT Readiness Assessment.</h1>
        <p className="font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Tell us the shape of your environment. We use these numbers to size the right service pack before your Free IT Assessment — no obligation, no sales pitch.</p>
      </section>

      <ItReadiness />

      {/* Footer strip */}
      <footer className="flex items-center justify-between bg-[#071e1b] px-5 sm:px-8 lg:px-[64px] py-[32px] font-inter text-[13.5px] text-[#9fbcb7]">
        <span>© 2026 Binary One Solutions Ltd · Nairobi, Kenya</span>
        <span className="inline-flex items-center gap-[9px]">Possibilities<span className="b1-decorative h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#7cdc79] shadow-[0_0_4px_rgba(124,220,121,0.95),0_0_10px_rgba(124,220,121,0.55),0_0_18px_rgba(124,220,121,0.28)] [animation:b1-beacon_2.4s_ease-in-out_infinite]" />Realised</span>
      </footer>
    </div>
  );
}
