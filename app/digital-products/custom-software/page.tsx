import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/chrome/SiteHeader";
import { routes } from "@/content/nav";
import { heroChips, buildVsBuy, builds, stack, delivery } from "@/content/customSoftware";
import customHero from "@/public/assets/custom-software-hero.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/digital-products/custom-software" },
  title: "Custom Software",
  description:
    "Bespoke high-performing custom applications, secure integrations and mobile platforms — engineered for organisations with unique operating models. Build the things worth building.",
};

export default function CustomSoftwarePage() {
  return (
    <div
      data-skin="product"
      className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#0B1D33] font-inter text-white [background-image:linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
    >
      <SiteHeader active={routes.customSoftware} sticky />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-[64px] pb-[84px] pt-[88px] [background:radial-gradient(120%_130%_at_8%_0%,#0a2a24_0%,#071e1b_42%,#06181f_72%,#071627_100%)]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.06)_1px,transparent_1px)] [background-size:58px_100%] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.9)_40%,rgba(0,0,0,0.9)_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.9)_40%,rgba(0,0,0,0.9)_100%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] items-center gap-[28px] lg:gap-[60px]">
          {/* Mobile-only eyebrow — sits above the hero image like a title */}
          <span className="order-1 inline-flex w-fit items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.4)] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#5eead4] lg:hidden">
            <span className="h-[7px] w-[7px] rounded-full bg-[#38e0c4] shadow-[0_0_6px_rgba(56,224,196,0.9)]" />
            BESPOKE ENGINEERING SOLUTIONS
          </span>
          <div className="order-3 lg:order-none">
            <span className="mb-[30px] hidden items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.4)] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#5eead4] lg:inline-flex">
              <span className="h-[7px] w-[7px] rounded-full bg-[#38e0c4] shadow-[0_0_6px_rgba(56,224,196,0.9)]" />
              BESPOKE ENGINEERING SOLUTIONS
            </span>
            <h1 className="mb-[26px] font-sora text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.14] lg:leading-[1.06] tracking-[-0.025em] text-white [text-wrap:pretty]">
              Off-the-shelf software solves common problems. <span className="text-[#38e0c4]">Custom software creates unfair advantages.</span>
            </h1>
            <p className="mb-[34px] max-w-[560px] font-inter text-[15px] lg:text-[17.5px] leading-[1.65] text-[#aebfba] [text-wrap:pretty]">
              We design, compile and support high-performing custom applications, secure integrations, and mobile platforms tailored for organisations with unique operating models.
            </p>
            <Link href={routes.enquiry} className="inline-flex items-center gap-[11px] rounded-[12px] bg-[#2bbfa4] px-[28px] py-[16px] font-inter text-[15.5px] font-bold text-[#06231e] transition-colors hover:bg-[#38e0c4] hover:text-[#06231e]">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 17 6-6-6-6" /><path d="M12 19h8" /></svg>
              Book a Systems Scoping Session
            </Link>
            <div className="mt-[36px] flex max-w-[620px] flex-wrap gap-[12px] border-t border-white/[0.14] pt-[26px]">
              {heroChips.map((c) => (
                <span key={c} className="rounded-[999px] border border-[rgba(56,224,196,0.3)] px-[16px] py-[9px] font-jet text-[12.5px] font-semibold text-[#c7ede6] [background:linear-gradient(180deg,rgba(56,224,196,0.12),rgba(56,224,196,0.03))]">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="order-2 lg:order-none group relative overflow-hidden rounded-[18px] border border-[rgba(45,212,191,0.22)] bg-[#05100e] shadow-[0_34px_80px_rgba(0,0,0,0.55)]">
            <Image src={customHero} alt="High-performance code stack" width={800} height={360} priority className="block h-[360px] w-full object-cover opacity-95 transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.06]" />
            <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(5,16,14,0)_40%,rgba(5,16,14,0.6)_100%)]" />
            <div className="pointer-events-none absolute bottom-[10px] left-[20px] right-[20px] rounded-[12px] border border-[rgba(56,224,196,0.2)] bg-[rgba(6,58,52,0.55)] px-[20px] py-[10px] [backdrop-filter:blur(8px)]">
              <span className="mb-[2px] block font-jet text-[11.5px] font-bold tracking-[0.18em] text-[#38e0c4]">BESPOKE SOFTWARE DEV</span>
              <span className="font-inter text-[14px] text-white">High-Performance Code Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Build vs Buy */}
      <section className="border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <h2 className="mb-[48px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">The Build vs Buy framework.</h2>
        <div className="mb-[36px] overflow-x-auto"><table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr>
              <th className="w-[16%] border-b border-[rgba(59,130,246,0.35)] px-[24px] py-[16px] text-left font-inter text-[13px] font-semibold tracking-[0.1em] text-[#94A3B8]">INDICATOR</th>
              <th className="w-[42%] border-b border-[rgba(59,130,246,0.35)] px-[24px] py-[16px] text-left font-inter text-[13px] font-semibold tracking-[0.1em] text-[#3B82F6]">LEAN TOWARDS BUY</th>
              <th className="border-b border-[rgba(59,130,246,0.35)] px-[24px] py-[16px] text-left font-inter text-[13px] font-semibold tracking-[0.1em] text-[#7cdc79]">LEAN TOWARDS BUILD</th>
            </tr>
          </thead>
          <tbody>
            {buildVsBuy.map((row) => (
              <tr key={row.indicator}>
                <td className="border-b border-white/[0.08] px-[24px] py-[18px] align-top font-inter text-[15.5px] font-semibold text-white">{row.indicator}</td>
                <td className="border-b border-white/[0.08] px-[24px] py-[18px] align-top font-inter text-[15px] leading-[1.6] text-[#94A3B8]">{row.buy}</td>
                <td className="border-b border-white/[0.08] bg-[rgba(124,220,121,0.05)] px-[24px] py-[18px] align-top font-inter text-[15px] leading-[1.6] text-[#E2E8F0]">{row.build}</td>
              </tr>
            ))}
          </tbody>
        </table></div>
        <div className="flex items-start gap-[24px] rounded-[16px] border border-[rgba(124,220,121,0.35)] bg-[rgba(124,220,121,0.06)] px-[36px] py-[32px]">
          <span className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full border border-[rgba(124,220,121,0.5)] bg-[rgba(124,220,121,0.08)] shadow-[0_0_24px_rgba(124,220,121,0.22),inset_0_0_14px_rgba(0,0,0,0.35)]">
            <svg viewBox="0 0 24 24" className="block h-[27px] w-[27px] [filter:drop-shadow(0_0_6px_rgba(124,220,121,0.65))]" fill="none" stroke="#9EFF5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.1 4.1h5.8l4.1 4.1v5.8l-4.1 4.1H9.1L5 14V8.2z" /><path d="M12 8.9v4.2" /><path d="M12 16.2h.01" /></svg>
          </span>
          <div className="flex flex-col">
            <p className="mb-[10px] font-inter text-[16px] lg:text-[19px] font-semibold text-[#7cdc79]">Rule of thumb: if you tick fewer than four BUILD boxes, do not build. We will tell you so.</p>
            <p className="font-inter text-[15.5px] leading-[1.6] text-[#94A3B8]">If you are unsure whether you qualify, the Discovery itself is designed to answer the question honestly — even when the honest answer is &quot;buy, don&apos;t build.&quot;</p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <h2 className="mb-[48px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">What we build.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {builds.map((b) => (
            <div key={b.num} className="relative flex flex-col gap-[10px] overflow-hidden rounded-[16px] border border-[rgba(148,163,184,0.16)] bg-[#10263F] p-[26px] [background-image:radial-gradient(120%_90%_at_15%_0%,rgba(45,212,191,0.16)_0%,rgba(45,212,191,0.05)_38%,transparent_68%)] hover:border-[rgba(45,212,191,0.5)]">
              <span className="relative font-jet text-[12px] font-medium text-[#7cdc79]">{b.num}</span>
              <span className="relative font-inter text-[14.5px] lg:text-[16.5px] font-semibold leading-[1.35] text-white">{b.name}</span>
              <p className="relative font-inter text-[13.5px] leading-[1.6] text-[#94A3B8]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery model */}
      <section className="border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <div className="mb-[44px] flex flex-col items-start gap-[16px]">
          <span className="font-jet text-[11.5px] font-bold tracking-[0.22em] text-[#2dd4bf]">DELIVERY SEQUENCE</span>
          <h2 className="font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white">The delivery model.</h2>
          <span className="inline-flex items-center gap-[11px] rounded-[999px] border border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.06)] px-[16px] py-[9px] font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#8ff5e2]">
            SCOPE<span className="text-[#2dd4bf]">→</span>BUILD<span className="text-[#9EFF5A]">→</span>SUPPORT
          </span>
        </div>
        <div className="relative">
          <div className="absolute left-[22px] right-[6px] top-[23px] h-[2px] rounded-[2px] [background:linear-gradient(90deg,rgba(45,212,191,0.18)_0%,rgba(45,212,191,0.55)_46%,rgba(158,255,90,0.85)_100%)]" />
          <div className="b1-decorative absolute left-[22px] right-[6px] top-[22px] h-[4px] opacity-40 [animation:b1-rail_1.5s_linear_infinite] [background-image:linear-gradient(90deg,rgba(255,255,255,0.6)_0_7px,rgba(255,255,255,0)_7px_26px)] [background-size:26px_100%] [mask-image:linear-gradient(90deg,transparent_0%,#000_14%,#000_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_14%,#000_86%,transparent_100%)]" />
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[18px]">
            {delivery.map((s) => (
              <div key={s.num} className="flex flex-col gap-[18px]">
                <span className="relative flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-[#0B1D33] font-jet text-[13px] font-bold" style={{ border: `1.5px solid ${s.ring}`, boxShadow: s.glow, color: s.tint }}>{s.num}</span>
                <div className="flex flex-1 flex-col gap-[8px] rounded-b-[14px] border border-white/[0.07] bg-white/[0.022] px-[16px] pb-[20px] pt-[18px] transition-[transform,background,border-color,box-shadow] duration-[250ms] hover:-translate-y-[4px] hover:border-[rgba(45,212,191,0.45)] hover:bg-[rgba(45,212,191,0.06)] hover:shadow-[0_18px_40px_-22px_rgba(45,212,191,0.55)]" style={{ borderTop: `2px solid ${s.ring}` }}>
                  <span className="flex items-center gap-[10px]">
                    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] flex-shrink-0" fill="none" stroke={s.tint} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: s.iconGlow }}><path d={s.icon} /></svg>
                    <span className="font-inter text-[14.5px] lg:text-[16px] font-semibold leading-[1.3] text-white [text-wrap:pretty]">{s.name}</span>
                  </span>
                  <p className="font-inter text-[13.5px] leading-[1.6] text-[#94A3B8] [text-wrap:pretty]">{s.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering stack */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-[64px] border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <div>
          <span className="mb-[20px] block font-jet text-[13px] font-medium tracking-[0.18em] text-[#7cdc79]">CLEAN ENGINEERING</span>
          <h2 className="mb-[22px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-white [text-wrap:pretty]">Our engineering stack: modern, fast and maintainable.</h2>
          <p className="mb-[28px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.7] text-[#94A3B8] [text-wrap:pretty]">We construct solutions that are secure, scalable and cost-effective. We avoid legacy bloat and vendor lock-in by utilising open standards:</p>
          <div className="mb-[28px] flex flex-col gap-[16px]">
            {[
              "Strict TypeScript definitions across both client and server layers for maximum type-safety.",
              "API gateway design with integrated rate-limit protection, OAuth tokens and request telemetry.",
            ].map((line) => (
              <div key={line} className="flex items-start gap-[12px]">
                <svg viewBox="0 0 24 24" className="mt-[2px] h-[20px] w-[20px] flex-shrink-0" fill="none" stroke="#7cdc79" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m8.5 12.5 2.5 2.5 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <p className="font-inter text-[15px] leading-[1.6] text-[#E2E8F0]">{line}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-[14.5px] lg:text-[16px] font-semibold leading-[1.6] text-[#7cdc79] [text-wrap:pretty]">We do not have a stack to sell you. We have an outcome to deliver.</p>
        </div>
        <div className="rounded-[18px] border border-[rgba(59,130,246,0.3)] bg-[#10263F] px-[34px] pb-[26px] pt-[34px]">
          <h3 className="mb-[22px] font-sora text-[16.5px] lg:text-[20px] font-bold tracking-[-0.01em] text-white">Standards &amp; Technologies</h3>
          <div className="flex flex-col gap-[14px]">
            {stack.map((s) => (
              <div key={s.label} className="flex flex-col gap-[7px] rounded-[12px] border border-[rgba(59,130,246,0.25)] bg-[#0B1D33] px-[22px] py-[18px] hover:border-[rgba(124,220,121,0.45)]">
                <span className="font-jet text-[11.5px] font-semibold tracking-[0.12em] text-[#7cdc79]">{s.label}</span>
                <span className="font-inter text-[15.5px] font-medium text-white">{s.items}</span>
              </div>
            ))}
          </div>
          <p className="mt-[20px] font-inter text-[13px] leading-[1.6] text-[#94A3B8]">Stack-agnostic by design — cross-platform mobile where sensible, native where the use case demands it.</p>
        </div>
      </section>

      {/* Scoping program */}
      <section className="px-5 sm:px-8 lg:px-[64px] pb-[88px]">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_auto] items-center gap-[32px] lg:gap-[48px] overflow-hidden rounded-[20px] border border-[rgba(56,224,196,0.16)] px-[28px] py-[40px] sm:px-[44px] sm:py-[48px] lg:px-[56px] lg:py-[52px] shadow-[inset_0_1px_0_rgba(56,224,196,0.08),0_24px_60px_rgba(0,0,0,0.35)] [background-color:#0c1512] [background-image:radial-gradient(circle_at_90%_8%,rgba(56,224,196,0.16),transparent_44%),radial-gradient(circle_at_2%_98%,rgba(56,224,196,0.12),transparent_42%),linear-gradient(90deg,rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(rgba(56,224,196,0.05)_1px,transparent_1px),linear-gradient(140deg,#10201c_0%,#0c1512_52%,#0a1310_100%)] [background-size:auto,auto,54px_54px,54px_54px,auto]">
          <div className="relative">
            <span className="mb-[14px] block font-jet text-[12.5px] font-semibold tracking-[0.18em] text-[#7cdc79]">SCOPING PROGRAM</span>
            <h2 className="mb-[16px] font-sora text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-white">Bring your technical roadmap to life.</h2>
            <p className="max-w-[560px] font-inter text-[15.5px] leading-[1.7] text-[#c2dbd7] [text-wrap:pretty]">Have a complex software concept but need an expert architecture partner to scope the technical limits, database schemas and API pathways? Book a 2-hour technical scoping session with our Lead Architect.</p>
          </div>
          <Link href={routes.enquiry} className="relative inline-flex items-center gap-[10px] whitespace-nowrap rounded-[12px] bg-[#38e0c4] px-[22px] sm:px-[28px] py-[16px] font-inter text-[15px] sm:text-[15.5px] font-bold text-[#0c1512] transition-colors hover:bg-[#5ceace] hover:text-[#0c1512]">
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
            Request Scoping Session
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[96px] text-center">
        <h2 className="mx-auto mb-[36px] max-w-[720px] font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-white">Build the things worth building.</h2>
        <Link href={routes.enquiry} className="relative inline-block overflow-hidden rounded-[12px] bg-[#38e0c4] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16.5px] font-bold text-[#06231e] transition-colors hover:bg-[#5eead4] hover:text-[#06231e]">
          <span className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(6,35,30,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(6,35,30,0.18)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(120%_140%_at_50%_50%,transparent_34%,#000_100%)] [-webkit-mask-image:radial-gradient(120%_140%_at_50%_50%,transparent_34%,#000_100%)]" />
          <span className="relative">Book a Custom Software Discovery</span>
        </Link>
      </section>

      {/* Footer strip */}
      <footer className="flex items-center justify-between border-t border-white/10 px-5 sm:px-8 lg:px-[64px] py-[32px] font-inter text-[13.5px] text-[#94A3B8]">
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
