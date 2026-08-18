import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/chrome/SiteHeader";
import { DiagnosticModal } from "@/components/overlays/DiagnosticModal";
import { routes } from "@/content/nav";
import { heroChips, products, type ProductIcon } from "@/content/digitalProducts";
import nawiriLogo from "@/public/assets/nawiri-logo.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/digital-products" },
  title: "Digital Products",
  description:
    "NAWIRI, Agentic AI and Custom Software Builds — how Binary One packages fifteen years of bespoke development into products you can buy, measure and govern.",
};

function ProductGlyph({ icon }: { icon: ProductIcon }) {
  if (icon === "nawiri") {
    return (
      <Image
        src={nawiriLogo}
        alt="NAWIRI"
        width={46}
        height={46}
        className="block h-[46px] w-[46px] object-contain [filter:drop-shadow(0_0_10px_rgba(158,255,90,0.4))]"
      />
    );
  }
  if (icon === "cpu") {
    return (
      <svg viewBox="0 0 24 24" width={46} height={46} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 14h2M19 9h2M19 14h2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width={46} height={46} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  );
}

export default function DigitalProductsPage() {
  return (
    <div
      data-skin="product"
      className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#0B1D33] font-inter text-white [background-image:linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
    >
      <SiteHeader active={routes.digitalProducts} sticky />

      {/* Hero (dark → fades into light) */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-[64px] pb-[96px] pt-[92px] [background:linear-gradient(180deg,#04140f_0%,#071e1b_28%,#0c2a24_52%,#b9cbc4_86%,#F8FAFB_100%)]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.07)_1px,transparent_1px)] [background-size:58px_100%] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.4)_60%,transparent_90%)] [-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.4)_60%,transparent_90%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-start gap-[28px] lg:gap-[64px]">
          {/* Mobile-only eyebrow — sits above the hero panel like a title */}
          <span className="order-1 inline-flex w-fit items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.4)] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#5eead4] lg:hidden">
            <span className="h-[7px] w-[7px] rounded-full bg-[#38e0c4] shadow-[0_0_6px_rgba(56,224,196,0.9)]" />
            DIGITAL PRODUCTS HUB
          </span>
          {/* Left */}
          <div className="order-3 lg:order-none">
            <span className="mb-[30px] hidden items-center gap-[9px] rounded-[999px] border border-[rgba(45,212,191,0.4)] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#5eead4] lg:inline-flex">
              <span className="h-[7px] w-[7px] rounded-full bg-[#38e0c4] shadow-[0_0_6px_rgba(56,224,196,0.9)]" />
              DIGITAL PRODUCTS HUB
            </span>
            <h1 className="mb-[26px] font-sora text-[32px] sm:text-[44px] lg:text-[64px] font-bold leading-[1.1] lg:leading-[1.05] tracking-[-0.025em] text-white">
              Three products.<br />
              <span className="text-[#38e0c4]">One discipline.</span>
            </h1>
            <p className="mb-[30px] max-w-[600px] font-inter text-[15.5px] lg:text-[18px] leading-[1.65] text-[#aebfba] [text-wrap:pretty]">
              NAWIRI, Agentic AI and Custom Software Builds are how we package fifteen years of bespoke development experience into things you can buy, measure and govern.
            </p>
            <a
              href="#dp-products"
              className="mb-[34px] inline-flex items-center gap-[12px] rounded-[12px] bg-[#eef4f2] px-[26px] py-[15px] font-inter text-[15px] font-bold text-[#06231e] shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-colors hover:bg-white hover:text-[#06231e]"
            >
              Explore Our Solutions
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <div className="border-t border-white/[0.14] pt-[26px]">
              <span className="mb-[16px] block font-jet text-[13px] font-bold tracking-[0.14em] text-[#38e0c4]">BUILT HERE. BUILT TO LAST.</span>
            </div>
            <div className="flex max-w-[640px] flex-wrap gap-[12px]">
              {heroChips.map((c) => (
                <span key={c} className="rounded-[8px] border border-white/10 bg-[rgba(6,24,20,0.72)] px-[15px] py-[9px] font-jet text-[12.5px] font-medium text-[#d5e2dd]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — network panel */}
          <div className="order-2 lg:order-none relative flex flex-col gap-[20px] overflow-hidden rounded-[18px] border border-[rgba(45,212,191,0.22)] bg-[#05100e] px-[28px] py-[26px] shadow-[inset_0_1px_0_rgba(56,224,196,0.08),0_30px_70px_rgba(0,0,0,0.5)] [background-image:radial-gradient(circle_at_88%_6%,rgba(56,224,196,0.18),transparent_46%),radial-gradient(circle_at_4%_96%,rgba(158,255,90,0.08),transparent_44%),linear-gradient(90deg,rgba(56,224,196,0.045)_1px,transparent_1px),linear-gradient(rgba(56,224,196,0.045)_1px,transparent_1px),linear-gradient(150deg,#0a1a16_0%,#06120f_60%,#050f0d_100%)] [background-size:auto,auto,46px_46px,46px_46px,auto]">
            <div className="flex items-center justify-between">
              <span className="font-jet text-[11px] font-bold tracking-[0.18em] text-[#5eead4]">LAST-MILE DISTRIBUTION NETWORK</span>
              <span className="inline-flex items-center gap-[7px] font-jet text-[10px] font-bold tracking-[0.14em] text-[#9EFF5A]">
                <span className="b1-decorative h-[7px] w-[7px] rounded-full bg-[#9EFF5A] shadow-[0_0_7px_rgba(158,255,90,0.9)] [animation:dpBlink_1.6s_ease-in-out_infinite]" />
                LIVE
              </span>
            </div>

            <svg viewBox="0 0 440 236" className="block h-auto w-full">
              <g fill="none" strokeLinecap="round">
                <path className="b1-decorative" d="M74 118 C130 118 160 118 214 118" stroke="#38e0c4" strokeWidth="2" strokeDasharray="3 7" style={{ animation: "dpFlow 1.1s linear infinite" }} />
                <path className="b1-decorative" d="M226 118 C300 116 330 78 392 52" stroke="#9EFF5A" strokeWidth="2" strokeDasharray="3 7" style={{ animation: "dpFlow 1.2s linear infinite" }} />
                <path className="b1-decorative" d="M226 118 C300 118 336 118 398 118" stroke="#9EFF5A" strokeWidth="2" strokeDasharray="3 7" style={{ animation: "dpFlow 1.0s linear infinite" }} />
                <path className="b1-decorative" d="M226 118 C300 120 330 158 392 184" stroke="#9EFF5A" strokeWidth="2" strokeDasharray="3 7" style={{ animation: "dpFlow 1.3s linear infinite" }} />
              </g>
              {/* manufacturer */}
              <circle cx="54" cy="118" r="17" fill="#0b201b" stroke="#4a5f5a" strokeWidth="1.5" />
              <path d="M46 124v-7l5 3.5v-3.5l5 3.5v-3.5l5 3.5v7Z" fill="none" stroke="#8fb0a7" strokeWidth="1.4" strokeLinejoin="round" />
              <text x="56" y="149" textAnchor="middle" fill="#8fb0a7" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.4">MANUFACTURER&apos;S</text>
              <text x="56" y="162" textAnchor="middle" fill="#8fb0a7" fontFamily="'JetBrains Mono', monospace" fontSize="10" letterSpacing="0.8">BRAND</text>
              {/* hub */}
              <circle className="b1-decorative" cx="220" cy="118" r="30" fill="none" stroke="#38e0c4" strokeWidth="1.5" style={{ animation: "dpRing 2.6s ease-out infinite" }} />
              <circle className="b1-decorative" cx="220" cy="118" r="30" fill="none" stroke="#38e0c4" strokeWidth="1.5" style={{ animation: "dpRing 2.6s ease-out infinite", animationDelay: "1.3s" }} />
              <circle cx="220" cy="118" r="26" fill="#06231e" stroke="#38e0c4" strokeWidth="2" />
              <g stroke="#7cf5da" strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round">
                <path d="M220 106l11 5.5-11 5.5-11-5.5z" />
                <path d="M209 117.5l11 5.5 11-5.5" />
                <path d="M209 122.5l11 5.5 11-5.5" />
              </g>
              <text x="220" y="166" textAnchor="middle" fill="#5eead4" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700" letterSpacing="1">NAWIRI PLATFORM</text>
              {/* members */}
              <circle cx="392" cy="52" r="15" fill="#0b201b" stroke="#2f8f7f" strokeWidth="1.5" />
              <path d="M385 56v-6h14v6M387.5 50l1-3h9l1 3" fill="none" stroke="#9EFF5A" strokeWidth="1.4" strokeLinejoin="round" />
              <text x="392" y="82" textAnchor="middle" fill="#93b3a9" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.6">RETAIL</text>
              <circle cx="398" cy="118" r="15" fill="#0b201b" stroke="#2f8f7f" strokeWidth="1.5" />
              <path d="M394 113l3 3-3 3m8-6l3 3-3 3" fill="none" stroke="#9EFF5A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <text x="398" y="148" textAnchor="middle" fill="#93b3a9" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.6">FUNDI</text>
              <circle cx="392" cy="184" r="15" fill="#0b201b" stroke="#2f8f7f" strokeWidth="1.5" />
              <path d="M392 190c-4-2-5-6-2-9 2 3 2 3 4 3-1-3 0-6 2-8 1 3 3 4 3 8 0 4-3 6-7 6z" fill="none" stroke="#9EFF5A" strokeWidth="1.3" strokeLinejoin="round" />
              <text x="392" y="214" textAnchor="middle" fill="#93b3a9" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.6">FARMER</text>
            </svg>

            <div className="border-t border-white/[0.08] pt-[18px]">
              <span className="mb-[8px] block font-jet text-[10.5px] font-bold tracking-[0.18em] text-[#9EFF5A]">REWARDS DISBURSED</span>
              <span className="mb-[10px] block font-sora text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.02em] text-white">KES 1,000,000+</span>
              <p className="font-inter text-[13.5px] leading-[1.6] text-[#9fb4ae] [text-wrap:pretty]">
                Instant airtime &amp; cashback to loyalty members via{" "}
                <Link href={routes.nawiri} className="border-b border-[rgba(56,224,196,0.4)] text-[#38e0c4] hover:text-[#5eead4]">
                  NAWIRI M-Pesa microservices
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] border-t border-white/[0.08] pt-[18px]">
              {[
                { v: "480K", l: "ACTIVE MEMBERS" },
                { v: "1.2M", l: "REDEMPTIONS / DAY" },
                { v: "42ms", l: "AVG LATENCY" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col gap-[4px]">
                  <span className="font-sora text-[16.5px] lg:text-[20px] font-extrabold leading-[1] text-[#5eead4]">{s.v}</span>
                  <span className="font-jet text-[9.5px] font-medium tracking-[0.06em] text-[#7f938d]">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product cards (light) */}
      <section id="dp-products" className="bg-[#F8FAFB] px-5 sm:px-8 lg:px-[64px] pb-[88px] pt-[72px] [scroll-margin-top:90px]">
        <div className="mb-[44px] text-center">
          <span className="mb-[14px] block font-jet text-[12.5px] font-bold tracking-[0.16em] text-[#0f766e]">OUR DIGITAL SOLUTIONS</span>
          <h2 className="mb-[14px] font-sora text-[27px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0c1512]">Three products, built to buy and govern</h2>
          <p className="mx-auto max-w-[600px] font-inter text-[14.5px] lg:text-[16.5px] leading-[1.6] text-[#4a5a54] [text-wrap:pretty]">
            From last-mile loyalty to autonomous workflows and bespoke systems &mdash; pick the engine that fits your operation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-[28px]">
          {products.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-[20px] p-[32px_30px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_30px_rgba(15,23,42,0.06)]"
              style={{ background: p.cardBg, backgroundImage: p.cardImage, backgroundSize: p.cardBgSize, border: `1px solid ${p.cardBorder}` }}
            >
              <div className="mb-[26px] flex items-start justify-between gap-[12px]">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[13px]" style={{ background: p.iconBg, color: p.accent }}>
                  <ProductGlyph icon={p.icon} />
                </span>
                <span className="rounded-[7px] px-[12px] py-[7px] font-jet text-[11px] font-bold tracking-[0.06em]" style={{ color: p.accent, background: p.chipBg }}>
                  {p.chip}
                </span>
              </div>
              <h2 className="mb-[12px] font-sora text-[23px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: p.titleColor }}>{p.title}</h2>
              <p className="mb-[22px] font-jet text-[14.5px] font-bold leading-[1.45] [text-wrap:pretty]" style={{ color: p.accent }}>{p.tagline}</p>
              <p className="mb-[24px] font-inter text-[14.5px] leading-[1.7] [text-wrap:pretty]" style={{ color: p.bodyColor }}>{p.desc}</p>
              <div className="mt-auto flex flex-col gap-[12px] pt-[22px]" style={{ borderTop: `1px solid ${p.divider}` }}>
                {p.bullets.map((b) => (
                  <span key={b} className="flex items-start gap-[11px] font-inter text-[14px] leading-[1.5]" style={{ color: p.bodyColor }}>
                    <span className="mt-[6px] h-[7px] w-[7px] flex-shrink-0 rounded-full" style={{ background: p.accent }} />
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href={p.href}
                className="mt-[26px] flex items-center justify-center gap-[9px] rounded-[12px] px-[22px] py-[15px] font-jet text-[12.5px] font-bold tracking-[0.08em] transition-colors bg-[var(--bbg)] hover:bg-[var(--bhover)]"
                style={{ "--bbg": p.btnBg, "--bhover": p.btnHoverBg, color: p.btnColor } as React.CSSProperties}
              >
                {p.cta} <span className="text-[14px]">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="bg-[#F8FAFB] px-5 sm:px-8 lg:px-[64px] pb-[112px] pt-[24px] text-center">
        <h2 className="mx-auto mb-[32px] max-w-[760px] font-sora text-[28px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1.14] tracking-[-0.025em] text-[#0c1512] [text-wrap:pretty]">
          Ready to turn proven expertise into your digital transformation?
        </h2>
        <Link
          href={routes.enquiry}
          className="inline-flex items-center gap-[10px] rounded-[12px] bg-[#38e0c4] px-[30px] py-[16px] font-inter text-[14.5px] lg:text-[16px] font-bold text-[#06231e] transition-colors hover:bg-[#5ceace]"
        >
          Book a Free IT Assessment
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
        <Link href={routes.home} className="border-b border-white/30 pb-[1px] text-[#E2E8F0] hover:text-[#7cdc79]">
          ← Back to binaryone.co.ke
        </Link>
      </footer>

      <DiagnosticModal />
    </div>
  );
}
