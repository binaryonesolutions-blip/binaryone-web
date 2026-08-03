import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NawiriNav from "@/components/chrome/NawiriNav";
import { routes } from "@/content/nav";
import { trustChips, eras, failIcons, failures, features } from "@/content/nawiri";
import nawiriLogo from "@/public/assets/nawiri-logo.png";
import nawiriRetail from "@/public/assets/nawiri-retail-hero.png";
import nawiriGrowth from "@/public/assets/nawiri-growth.png";
import crownLogo from "@/public/assets/logo-crown-paints.png";
import isuzuLogo from "@/public/assets/isuzu-logo.png";

export const metadata: Metadata = {
  title: "NAWIRI Digital Loyalty",
  description:
    "NAWIRI is a mobile-first loyalty platform connecting Kenyan and East African manufacturers directly to the painters, mechanics, fundis and farmers who influence what gets bought. Own the last mile.",
};

export default function NawiriPage() {
  return (
    <div
      data-skin="nawiri"
      className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#0A1628] font-inter text-white [background-image:linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
    >
      <NawiriNav />

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-[56px] px-5 sm:px-8 lg:px-[64px] pb-[56px] pt-[96px]">
        <div>
          <div className="mb-[24px] flex items-center gap-[28px]">
            <Image src={nawiriLogo} alt="NAWIRI" priority className="block h-[150px] w-auto flex-shrink-0 [filter:drop-shadow(0_0_24px_rgba(158,255,90,0.35))]" />
            <h1 className="font-sora text-[52px] font-extrabold leading-[1.08] tracking-[-0.01em] text-white [text-wrap:pretty]">
              NAWIRI Digital Loyalty — <span className="text-[#9EFF5A]">Own the Last Mile.</span>
            </h1>
          </div>
          <p className="mb-[36px] font-inter text-[15.5px] lg:text-[18px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">
            A mobile-first loyalty platform that connects Kenyan and East African manufacturers directly to the painters, mechanics, fundis, farmers, shopkeepers and households who actually influence what gets bought.
          </p>
          <div className="flex items-center gap-[20px]">
            <Link href={routes.nawiriSelfScore} className="inline-block rounded-[12px] bg-[#9EFF5A] px-[30px] py-[16px] font-sora text-[14.5px] lg:text-[16px] font-bold text-[#0A1628] shadow-[0_0_32px_rgba(158,255,90,0.25)] transition-colors hover:bg-[#B4FF7E] hover:text-[#0A1628]">
              Compute Your Customer Loyalty Maturity
            </Link>
            <a href="#features" className="border-b-[1.5px] border-[#2dd4bf] pb-[2px] font-inter text-[15.5px] font-semibold text-white hover:border-[#9EFF5A] hover:text-[#9EFF5A]">See the features →</a>
          </div>
        </div>
        <div className="group relative flex h-[440px] items-center justify-center overflow-hidden rounded-[16px] border border-[rgba(45,212,191,0.35)] bg-[#11203A] shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
          <Image src={nawiriRetail} alt="Kenyan retail loyalty moment" fill sizes="620px" className="object-cover [object-position:center_45%] transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" />
        </div>
      </section>

      {/* Trust strip */}
      <section className="flex flex-wrap gap-[10px] px-5 sm:px-8 lg:px-[64px] pb-[88px]">
        {trustChips.map((chip) => (
          <span key={chip} className="inline-block rounded-[100px] border border-[rgba(45,212,191,0.4)] px-[16px] py-[9px] font-inter text-[13.5px] font-medium text-[#E2E8F0] [background:linear-gradient(180deg,rgba(45,212,191,0.1),rgba(45,212,191,0.03))]">
            {chip}
          </span>
        ))}
      </section>

      {/* Loyalty Has Changed — era timeline */}
      <section className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <span className="mb-[16px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#2dd4bf]">LOYALTY HAS CHANGED</span>
        <h2 className="mb-[20px] max-w-[820px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-extrabold leading-[1.15] text-white [text-wrap:pretty]">
          Loyalty is no longer a retention gimmick. It is a <span className="text-[#9EFF5A]">real-time data channel.</span>
        </h2>
        <p className="mb-[56px] max-w-[820px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">
          Kenyan loyalty has matured. Manufacturers and distributors now need a direct view of the retailer, fundi, mechanic, painter or farmer who decides what moves at the last mile. NAWIRI turns those interactions into rewards, insights and repeat behaviour.
        </p>
        <div className="relative pt-[24px]">
          <svg viewBox="0 0 1200 190" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-[190px] w-full">
            <defs>
              <linearGradient id="eraline" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2dd4bf" stopOpacity="0.35" />
                <stop offset="0.62" stopColor="#2dd4bf" stopOpacity="0.8" />
                <stop offset="1" stopColor="#9EFF5A" />
              </linearGradient>
            </defs>
            <path d="M 0 168 C 150 168 190 128 300 122 C 410 116 450 92 600 82 C 750 72 790 52 900 40 C 990 30 1080 16 1200 10" fill="none" stroke="url(#eraline)" strokeWidth="3" />
          </svg>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {eras.map((era) => (
              <div key={era.num} className="flex flex-col">
                <div className="flex-shrink-0" style={{ height: era.rise }} />
                <div className="relative flex flex-1 flex-col gap-[14px] rounded-[16px] px-[26px] pb-[24px] pt-[26px]" style={{ background: era.cardBg, border: `1px solid ${era.cardBorder}`, boxShadow: era.cardShadow }}>
                  <span className="absolute left-[22px] top-[-14px] inline-flex items-center gap-[8px] rounded-[100px] bg-[#0A1628] px-[14px] py-[5px]" style={{ border: `1px solid ${era.chipBorder}` }}>
                    <span className="h-[9px] w-[9px] rounded-full" style={{ background: era.dot, boxShadow: `0 0 14px ${era.glow}, 0 0 4px ${era.dot}` }} />
                    <span className="font-jet text-[11.5px] font-semibold tracking-[0.06em]" style={{ color: era.yearColor }}>{era.years}</span>
                  </span>
                  <span className="absolute right-[18px] top-[10px] font-sora text-[28px] sm:text-[34px] lg:text-[44px] font-extrabold leading-[1]" style={{ color: era.ghost }}>{era.num}</span>
                  <div className="mt-[10px] flex h-[22px] items-end gap-[3px]">
                    <span className="w-[6px] rounded-[2px]" style={{ height: "25%", background: era.bar1 }} />
                    <span className="w-[6px] rounded-[2px]" style={{ height: "50%", background: era.bar2 }} />
                    <span className="w-[6px] rounded-[2px]" style={{ height: "75%", background: era.bar3 }} />
                    <span className="w-[6px] rounded-[2px]" style={{ height: "100%", background: era.bar4 }} />
                  </div>
                  <span className="font-sora text-[16px] lg:text-[19px] font-extrabold leading-[1.25] text-white">{era.name}</span>
                  <div className="flex flex-col gap-[10px] font-inter text-[13.5px] leading-[1.5]">
                    <span className="text-[#94A3B8]"><span className="mb-[2px] block font-inter text-[10.5px] font-semibold tracking-[0.14em]" style={{ color: era.labelColor }}>MECHANISM</span>{era.mechanic}</span>
                    <span className="text-[#94A3B8]"><span className="mb-[2px] block font-inter text-[10.5px] font-semibold tracking-[0.14em]" style={{ color: era.labelColor }}>OPTIMISED FOR</span>{era.optimised}</span>
                    <span className="text-[#94A3B8]"><span className="mb-[2px] block font-inter text-[10.5px] font-semibold tracking-[0.14em]" style={{ color: era.labelColor }}>LIMITATION</span>{era.limitation}</span>
                  </div>
                  {era.isNow && (
                    <span className="inline-flex items-center gap-[7px] self-start rounded-[100px] border border-[rgba(158,255,90,0.4)] bg-[rgba(158,255,90,0.12)] px-[14px] py-[6px] font-sora text-[11px] font-bold tracking-[0.1em] text-[#9EFF5A]">◉ NAWIRI OPERATES HERE</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why traditional loyalty fails */}
      <section className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[88px] [background:linear-gradient(180deg,rgba(45,212,191,0.045),rgba(45,212,191,0.015))]">
        <h2 className="mb-[36px] font-sora text-[34px] font-extrabold leading-[1.2] text-white [text-wrap:pretty]">Why traditional loyalty <span className="text-[#9EFF5A]">fails.</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] items-start gap-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            {failIcons.map((fi) => (
              <div key={fi.label} className="flex flex-col items-center gap-[12px] rounded-[14px] border border-[rgba(158,255,90,0.28)] bg-[#11203A] px-[18px] py-[20px] text-center shadow-[inset_0_1px_0_rgba(158,255,90,0.08),0_12px_28px_rgba(0,0,0,0.28)] transition-[border-color,transform] duration-[250ms] [background-image:radial-gradient(135%_105%_at_18%_0%,rgba(158,255,90,0.16)_0%,rgba(45,212,191,0.08)_38%,transparent_68%)] hover:-translate-y-[3px] hover:border-[rgba(158,255,90,0.55)]">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border border-[rgba(158,255,90,0.22)] [background:radial-gradient(circle_at_50%_35%,rgba(158,255,90,0.18),rgba(45,212,191,0.06))]">
                  <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]"><path d={fi.icon} fill="none" stroke="#9EFF5A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="font-inter text-[12px] font-semibold leading-[1.4] tracking-[0.04em] text-[#c3d3cf]">{fi.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {failures.map((f) => (
              <div key={f} className="flex items-start gap-[18px] border-b border-[rgba(45,212,191,0.2)] py-[20px]">
                <span className="mt-[9px] h-[8px] w-[8px] flex-shrink-0 rotate-45 bg-[#2dd4bf]" />
                <p className="font-inter text-[14.5px] lg:text-[16.5px] leading-[1.6] text-[#E2E8F0]">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[88px] [scroll-margin-top:78px]">
        <span className="mb-[16px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#2dd4bf]">NAWIRI PLATFORM</span>
        <h2 className="mb-[56px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-extrabold leading-[1.15] text-white">Eight capabilities. <span className="text-[#9EFF5A]">One platform.</span></h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {features.map((ft) => (
            <div key={ft.num} className="flex flex-col gap-[12px] rounded-[16px] border border-[rgba(45,212,191,0.32)] bg-[#11203A] p-[28px] [background-image:radial-gradient(130%_100%_at_12%_0%,rgba(45,212,191,0.14)_0%,rgba(45,212,191,0.04)_42%,transparent_70%)] hover:border-[rgba(45,212,191,0.6)]">
              <div className="flex items-center justify-between">
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-[rgba(45,212,191,0.35)] bg-[rgba(158,255,90,0.08)]">
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]"><path d={ft.icon} fill="none" stroke="#9EFF5A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="font-jet text-[12px] font-medium text-[#9EFF5A]">{ft.num}</span>
              </div>
              <span className="font-sora text-[15px] lg:text-[17px] font-bold leading-[1.3] text-white">{ft.name}</span>
              <p className="font-inter text-[14px] leading-[1.6] text-[#94A3B8]">{ft.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[88px] [scroll-margin-top:78px] [background:linear-gradient(180deg,rgba(45,212,191,0.045),rgba(45,212,191,0.015))]">
        <div className="mb-[56px] grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-[80px]">
          <div className="flex flex-col gap-[6px]">
            <span className="font-sora text-[128px] font-extrabold leading-[1] text-[#9EFF5A] [text-shadow:0_0_48px_rgba(158,255,90,0.35)]">30%+</span>
            <span className="font-inter text-[14px] font-medium tracking-[0.08em] text-[#94A3B8]">YEAR-ON-YEAR SALES LIFT IN YEAR ONE</span>
          </div>
          <p className="max-w-[540px] font-inter text-[15.5px] lg:text-[18px] leading-[1.65] text-[#E2E8F0] [text-wrap:pretty]">Prototype to live deployment possible within two months, subject to scope and readiness.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <div className="flex flex-col gap-[14px] rounded-[16px] border border-[rgba(45,212,191,0.3)] bg-[#11203A] p-[32px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[rgba(248,250,251,0.92)]">
                <Image src={crownLogo} alt="Crown Paints" className="block h-[26px] w-[32px] object-contain" />
              </span>
              <span className="font-sora text-[16px] lg:text-[19px] font-bold text-[#9EFF5A]">Crown Paints Team Kubwa</span>
            </div>
            <p className="font-inter text-[15px] leading-[1.65] text-[#94A3B8]">NAWIRI originates from the painter-focused loyalty programme that helped Crown Paints build a large registered influencer base and connect reward activity to market growth.</p>
          </div>
          <div className="flex flex-col gap-[14px] rounded-[16px] border border-[rgba(45,212,191,0.3)] bg-[#11203A] p-[32px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[rgba(248,250,251,0.92)]">
                <Image src={isuzuLogo} alt="Isuzu East Africa" className="block h-[26px] w-[26px] object-contain" />
              </span>
              <span className="font-sora text-[16px] lg:text-[19px] font-bold text-[#9EFF5A]">Isuzu MAXIT</span>
            </div>
            <p className="font-inter text-[15px] leading-[1.65] text-[#94A3B8]">NAWIRI connected Isuzu East Africa directly to mechanics and parts buyers through rewards, points and anti-counterfeit visibility.</p>
          </div>
          <div className="flex flex-col gap-[14px] rounded-[16px] border border-[rgba(45,212,191,0.3)] bg-[#11203A] p-[32px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[10px] border border-[rgba(158,255,90,0.28)] bg-[rgba(158,255,90,0.12)]">
                <svg viewBox="0 0 24 24" className="block h-[22px] w-[22px]" fill="none" stroke="#9EFF5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><path d="M17 13.5v7M13.5 17h7" />
                </svg>
              </span>
              <span className="font-sora text-[16px] lg:text-[19px] font-bold text-[#9EFF5A]">Sector breadth</span>
            </div>
            <p className="font-inter text-[15px] leading-[1.65] text-[#94A3B8]">Paints and coatings · Lubricants and automotive parts · Cement and building materials · Seeds, fertilisers and agrochemicals · Detergents, beauty and foodstuffs</p>
          </div>
        </div>
      </section>

      {/* Pricing position */}
      <section id="pricing" className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[88px] [scroll-margin-top:78px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_380px_1fr] items-center gap-[56px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className="whitespace-nowrap font-sora text-[34px] font-extrabold leading-[1.2] text-white">Pricing <span className="text-[#9EFF5A]">position.</span></h2>
            <span className="whitespace-nowrap font-caveat text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.1] text-[#2dd4bf]">
              meets <span className="relative inline-block">Sales<span className="absolute bottom-[1px] left-[-4px] right-[-6px] h-[2.5px] origin-[left_center] rotate-[-5deg] rounded-[2px] bg-[#9EFF5A]" /></span> Explosion!
            </span>
          </div>
          <Image src={nawiriGrowth} alt="Growth chart with rocket" className="block h-auto w-full rounded-[16px]" />
          <div className="rounded-[16px] border border-[rgba(45,212,191,0.3)] bg-[#11203A] p-[36px]">
            <p className="font-inter text-[15px] lg:text-[17px] leading-[1.7] text-[#E2E8F0] [text-wrap:pretty]">NAWIRI is sold as a white-labelled SaaS subscription with a fixed setup fee and monthly platform fee scaled to active members and reward volume. <strong className="font-bold text-[#9EFF5A]">We do not take a cut of your rewards budget. You own your data.</strong></p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="border-t border-[rgba(45,212,191,0.2)] px-5 sm:px-8 lg:px-[64px] py-[112px] text-center [scroll-margin-top:78px] [background:radial-gradient(60%_100%_at_50%_0%,rgba(158,255,90,0.08),rgba(158,255,90,0)_70%)]">
        <h2 className="mx-auto mb-[40px] max-w-[780px] font-sora text-[28px] sm:text-[34px] lg:text-[44px] font-extrabold leading-[1.15] text-white [text-wrap:balance]">Ready to own the last mile of <span className="text-[#9EFF5A]">your market?</span></h2>
        <div className="flex items-center justify-center gap-[24px]">
          <Link href={routes.enquiry} className="inline-block rounded-[12px] bg-[#9EFF5A] px-[34px] py-[17px] font-sora text-[14.5px] lg:text-[16.5px] font-bold text-[#0A1628] shadow-[0_0_40px_rgba(158,255,90,0.3)] transition-colors hover:bg-[#B4FF7E] hover:text-[#0A1628]">Book a NAWIRI Demo</Link>
          <Link href={routes.nawiriSelfScore} className="border-b-[1.5px] border-[#2dd4bf] pb-[2px] font-inter text-[15.5px] font-semibold text-white hover:border-[#9EFF5A] hover:text-[#9EFF5A]">Compute the Loyalty Programme Maturity Self-Score →</Link>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="flex items-center justify-between border-t border-[rgba(45,212,191,0.25)] px-5 sm:px-8 lg:px-[64px] py-[32px] font-inter text-[13.5px] text-[#94A3B8]">
        <span><span className="font-sora text-[14px] font-extrabold text-white">NAWIRI</span> · a Binary One Solutions product</span>
        <span>
          +254 787 990 220 · info@binaryone.co.ke · Nairobi ·{" "}
          <Link href={routes.dataProtection} className="border-b border-white/30 pb-[1px] text-inherit hover:text-[#7cdc79]">Data Protection Policy</Link>
        </span>
        <Link href={routes.home} className="border-b border-[rgba(45,212,191,0.5)] pb-[1px] text-[#E2E8F0] hover:text-[#9EFF5A]">← Back to binaryone.co.ke</Link>
      </footer>
    </div>
  );
}
