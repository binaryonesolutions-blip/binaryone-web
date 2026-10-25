import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/content/nav";
import { briefs } from "@/content/insights";
import erpThumb from "@/public/assets/insight-erp-thumb.webp";
import nawiriThumb from "@/public/assets/insight-nawiri-v3.webp";
import managedThumb from "@/public/assets/insight-managed-it-v2.webp";

const thumbs: Record<string, StaticImageData> = {
  erp: erpThumb,
  nawiri: nawiriThumb,
  managedit: managedThumb,
};

// Permanent Insights article pages (SEO checklist §E2): full text in HTML, one
// H1, named author, published date, unique title + description + canonical, and
// at least one link to a service page. Statically generated for export.
export const dynamicParams = false;

export function generateStaticParams() {
  return briefs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brief = briefs.find((b) => b.slug === slug);
  if (!brief) return {};
  return pageMeta({
    path: `/insights/${brief.slug}`,
    title: brief.title,
    description: brief.excerpt,
  });
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brief = briefs.find((b) => b.slug === slug);
  if (!brief) notFound();

  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      <SiteHeader active={routes.insights} sticky />

      <article className="mx-auto max-w-[760px] px-5 sm:px-8 lg:px-[64px] pb-[88px] pt-[56px]">
        <Link href={routes.insights} className="mb-[28px] inline-flex items-center gap-[7px] font-inter text-[13.5px] font-semibold text-[#0f766e] hover:text-[#06332e]">← All Insights</Link>

        <div className="mb-[20px] flex flex-wrap items-center gap-[16px]">
          <span className="rounded-[4px] bg-[#d8f3ee] px-[14px] py-[7px] font-jet text-[11.5px] font-semibold tracking-[0.12em] text-[#0f766e]">{brief.category}</span>
          <span className="font-jet text-[12.5px] font-medium tracking-[0.10em] text-[#3e4947]">{brief.dateLong}</span>
        </div>

        <h1 className="mb-[26px] font-sora text-[27px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1c1b1b] [text-wrap:pretty]">{brief.title}</h1>

        <div className="mb-[32px] flex items-center gap-[12px] border-b border-[#E5E7EB] pb-[28px]">
          <span className="inline-flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-[#071e1b] font-jet text-[12px] font-bold text-[#38e0c4]">{brief.initials}</span>
          <span className="flex flex-col gap-[2px]">
            <span className="font-inter text-[14.5px] font-semibold text-[#1c1b1b]">{brief.author}</span>
            <span className="font-inter text-[12.5px] text-[#6e7977]">{brief.role}</span>
          </span>
        </div>

        <Image src={thumbs[brief.thumb]} alt="" className="mb-[36px] block h-auto w-full rounded-[14px] object-cover" />

        <div className="flex flex-col gap-[18px]">
          {brief.body.map((para, i) => (
            <p key={i} className="m-0 font-inter text-[15.5px] lg:text-[17px] leading-[1.75] text-[#3e4947] [text-wrap:pretty]">{para}</p>
          ))}
        </div>

        <div className="mt-[44px] flex flex-col gap-[16px] rounded-[16px] border border-[rgba(15,118,110,0.18)] bg-white px-[28px] py-[30px] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-inter text-[15px] leading-[1.5] text-[#3e4947]">Related service — <span className="font-semibold text-[#1c1b1b]">{brief.service.label}</span></span>
          <Link href={brief.service.href} className="inline-flex flex-shrink-0 items-center gap-[9px] whitespace-nowrap rounded-[12px] bg-[#0f766e] px-[24px] py-[13px] font-sora text-[14.5px] font-bold text-white hover:bg-[#0d655e]">Explore {brief.service.label} <span className="text-[16px]">→</span></Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
