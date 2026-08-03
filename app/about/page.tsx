import type { Metadata } from "next";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import { routes } from "@/content/nav";
import { beliefs, leaders } from "@/content/about";
import aboutHero from "@/public/assets/about-hero.png";
import believeIcon from "@/public/assets/about-believe-icon.png";
import aboutBelief from "@/public/assets/about-belief.png";
import humphrey from "@/public/assets/humphrey-kirui-v2.png";
import mike from "@/public/assets/mike-kiai.png";
import eugene from "@/public/assets/eugene-hillary.png";
import mary from "@/public/assets/about-leader-4.png";
import deliveryTeam from "@/public/assets/delivery-team.png";
import edwin from "@/public/assets/edwin-kairu.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Binary One Solutions is a Nairobi-based digital transformation consulting firm helping organisations make better technology decisions, run IT reliably and build digital tools that create measurable value.",
};

const leaderPhotos: Record<string, StaticImageData> = { humphrey, mike, eugene, mary };

export default function AboutPage() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      <SiteHeader active={routes.about} sticky />

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[56px] px-5 sm:px-8 lg:px-[64px] py-[88px]">
        <div>
          <h1 className="mb-[24px] font-sora text-[30px] sm:text-[38px] lg:text-[50px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Technology consulting for organisations that need order, direction and delivery.</h1>
          <p className="font-inter text-[15px] lg:text-[17.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Binary One Solutions is a Nairobi-based digital transformation consulting firm helping medium-sized and larger organisations make better technology decisions, run IT more reliably and build digital tools that create measurable business value. Our team brings over 20 years of cross-industry experience, including work with Fortune 500 companies.</p>
        </div>
        <div className="order-first lg:order-none group flex h-[380px] items-center justify-center overflow-hidden rounded-[16px] border border-[#E5E7EB]">
          <Image src={aboutHero} alt="Binary One boardroom, Nairobi" className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06]" />
        </div>
      </section>

      {/* Our story */}
      <section className="bg-[#00332f] px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <span className="mb-[24px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#7cdc79]">OUR STORY</span>
        <p className="max-w-[980px] font-sora text-[28px] font-semibold leading-[1.55] text-[#F8FAFB] [text-wrap:pretty]">
          Binary One was founded to close a gap many African organisations experience: too much technology pressure, <span className="text-[#7cdc79]">too little structured IT leadership.</span> Over the years, our work has grown across Managed IT, ERP advisory, digital loyalty, cloud collaboration, cybersecurity, software projects and executive IT governance.
        </p>
      </section>

      {/* What we believe */}
      <section className="px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[36px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">What we believe.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center gap-[40px]">
          <div className="flex aspect-square max-w-[300px] items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_30px_rgba(15,23,42,0.05)]">
            <Image src={believeIcon} alt="Governed technology decisions" className="h-full w-full object-contain" />
          </div>
          <div className="-mt-[8px] flex flex-col">
            {beliefs.map((b) => (
              <div key={b} className="flex items-start gap-[18px] border-b border-[#E5E7EB] py-[13px]">
                <span className="mt-[9px] h-[8px] w-[8px] flex-shrink-0 rounded-full bg-[#006e1b]" />
                <p className="font-inter text-[15.5px] lg:text-[18px] font-medium leading-[1.6] text-[#1c1b1b]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belief image */}
      <section className="px-5 sm:px-8 lg:px-[64px] pb-[96px] pt-[88px]">
        <div className="h-[420px] overflow-hidden rounded-[16px] border border-[#E5E7EB]">
          <Image src={aboutBelief} alt="Binary One team at work" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-[#E5E7EB] bg-white px-5 sm:px-8 lg:px-[64px] py-[96px]">
        <h2 className="mb-[48px] font-sora text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b]">Leadership and delivery.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {leaders.map((l) => (
            <div key={l.lead} className="flex items-start gap-[24px] rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] p-[32px]">
              <div className="h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-full border border-[#E5E7EB]">
                <Image src={leaderPhotos[l.photo]} alt={l.area} className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="mb-[8px] block font-inter text-[12px] font-semibold tracking-[0.12em] text-[#006e1b]">{l.area}</span>
                <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947]"><strong className="font-semibold text-[#1c1b1b]">{l.lead}</strong> {l.copy}</p>
              </div>
            </div>
          ))}
          {/* Delivery team */}
          <div className="flex items-start gap-[24px] rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] p-[32px]">
            <div className="h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-full border border-[#E5E7EB]">
              <Image src={deliveryTeam} alt="Binary One delivery team" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="mb-[8px] block font-inter text-[12px] font-semibold tracking-[0.12em] text-[#006e1b]">DELIVERY TEAM</span>
              <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]"><strong className="font-semibold text-[#1c1b1b]">Engineers, developers and vendor partners</strong> — a bench of managed IT engineers, software developers and certified IT OEM vendor partners behind every engagement, so escalation paths and specialist skills never depend on a single individual.</p>
              <p className="mt-[12px] font-inter text-[14.5px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">A great team that runs our managed IT SLAs and helpdesk, delivers Odoo ERP rollouts, and builds NAWIRI, agentic AI and custom enterprise software. OEM and cloud vendor partnerships give us licensing, hardware and escalation paths direct to source.</p>
            </div>
          </div>
          {/* Advisor */}
          <div className="flex items-start gap-[24px] rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] p-[32px]">
            <div className="h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-full border border-[#E5E7EB]">
              <Image src={edwin} alt="Edwin Kairu" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="mb-[8px] block font-inter text-[12px] font-semibold tracking-[0.12em] text-[#006e1b]">ADVISOR &amp; SHAREHOLDER</span>
              <p className="mb-[12px] font-inter text-[15.5px] leading-[1.65] text-[#3e4947]"><strong className="font-semibold text-[#1c1b1b]">Edwin Kairu</strong> — Distinguished Service Professor at Carnegie Mellon University; AI research and cybersecurity expert.</p>
              <p className="font-inter text-[14.5px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">15+ years strengthening the security posture of organisations across security reviews, incident response, vulnerability management and network forensics. MS Information Security Policy &amp; Management, Carnegie Mellon University.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 sm:px-8 lg:px-[64px] py-[104px] text-center">
        <h2 className="mx-auto mb-[36px] max-w-[800px] font-sora text-[25px] sm:text-[31px] lg:text-[38px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Talk to a senior consultant about where your organisation is trying to go.</h2>
        <Link href={routes.enquiry} className="inline-block rounded-[12px] bg-[#38e0c4] px-[32px] py-[16px] font-inter text-[14.5px] lg:text-[16.5px] font-semibold text-[#06231e] shadow-[0_1px_2px_rgba(56,224,196,0.24),0_6px_16px_rgba(56,224,196,0.16)] transition-colors hover:bg-[#5ceace] hover:text-[#06231e]">Talk to a consultant</Link>
      </section>

      <SiteFooter />
    </div>
  );
}
