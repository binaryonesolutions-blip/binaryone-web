import type { Metadata } from "next";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import InsightsBriefs from "@/components/tools/InsightsBriefs";
import { routes } from "@/content/nav";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical briefs, advisory papers and practical IT strategies written by Binary One's partners and systems architects for business leaders in East Africa.",
};

export default function InsightsPage() {
  return (
    <div data-skin="corporate" className="mx-auto w-[1440px] bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      <SiteHeader active={routes.insights} sticky />

      {/* Hero */}
      <section className="max-w-[900px] px-[64px] pb-[64px] pt-[88px]">
        <span className="mb-[22px] block font-jet text-[13px] font-medium tracking-[0.18em] text-[#0f766e]">KNOWLEDGE &amp; INSIGHTS</span>
        <h1 className="mb-[24px] font-sora text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">Technical briefs, advisory papers and practical IT strategies.</h1>
        <p className="font-inter text-[17.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Written by our active partners and systems architects for business leaders in East Africa.</p>
      </section>

      {/* Brief grid */}
      <section className="border-t border-[#E5E7EB] bg-[#E9EEF2] px-[64px] pb-[104px] pt-[72px]">
        <InsightsBriefs />
      </section>

      <SiteFooter />
    </div>
  );
}
