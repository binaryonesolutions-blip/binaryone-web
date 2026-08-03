import Link from "next/link";
import { routes } from "@/content/nav";

// NAWIRI / Loyalty Self-Score chrome (Guide §6, product sub-brand). A mini
// general nav bar + glowing divider + sticky NAWIRI-branded header.
export default function NawiriNav({
  sectionLinks = [
    { label: "Features", href: "#features" },
    { label: "Proof", href: "#proof" },
    { label: "Pricing", href: "#pricing" },
  ],
  ctaLabel = "Book a NAWIRI Demo",
  ctaHref = "#demo",
}: {
  sectionLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <>
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

      {/* NAWIRI header */}
      <header className="sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-[rgba(45,212,191,0.25)] bg-[rgba(10,22,40,0.92)] px-5 sm:px-8 lg:px-[64px] [backdrop-filter:blur(12px)]">
        <div className="flex items-center gap-[16px]">
          <div className="flex items-baseline gap-[8px]">
            <span className="font-sora text-[16.5px] lg:text-[20px] font-extrabold tracking-[0.02em] text-white">NAWIRI</span>
            <span className="hidden font-inter text-[10px] font-medium tracking-[0.16em] text-[#94A3B8] sm:inline">DIGITAL LOYALTY</span>
          </div>
          <span className="hidden h-[22px] w-[1px] bg-[rgba(45,212,191,0.4)] sm:block" />
          <span className="hidden font-inter text-[12px] font-medium text-[#94A3B8] sm:inline">by Binary One Solutions</span>
        </div>
        <nav className="flex items-center gap-[16px] font-inter text-[14.5px] font-medium sm:gap-[32px]">
          <span className="hidden items-center gap-[32px] md:flex">
            {sectionLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[#E2E8F0]">{l.label}</a>
            ))}
          </span>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-[10px] rounded-[11px] border border-[rgba(158,255,90,0.45)] bg-[#071A2E] px-[20px] py-[11px] font-inter text-[14.5px] font-semibold text-white transition-[background,border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[#9EFF5A] hover:bg-[#0d2942] hover:shadow-[0_0_0_1px_rgba(158,255,90,0.6),0_0_22px_rgba(158,255,90,0.42),0_8px_20px_rgba(4,12,24,0.4)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9EFF5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M3 10h18" />
            </svg>
            {ctaLabel}
          </a>
        </nav>
      </header>
    </>
  );
}
