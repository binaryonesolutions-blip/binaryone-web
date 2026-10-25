import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { briefs } from "@/content/insights";
import erpThumb from "@/public/assets/insight-erp-thumb.webp";
import nawiriThumb from "@/public/assets/insight-nawiri-v3.webp";
import managedThumb from "@/public/assets/insight-managed-it-v2.webp";

const thumbs: Record<string, StaticImageData> = {
  erp: erpThumb,
  nawiri: nawiriThumb,
  managedit: managedThumb,
};

// Insights brief grid (SEO checklist §E1). Each card is a real <a href> to a
// permanent article page (/insights/<slug>), so the links live in the delivered
// HTML and are crawlable — not a client-side modal.
export default function InsightsBriefs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
      {briefs.map((a) => (
        <Link
          key={a.slug}
          href={`/insights/${a.slug}`}
          className="flex flex-col overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] hover:-translate-y-[2px] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_16px_40px_rgba(15,118,110,0.14)]"
        >
          <Image src={thumbs[a.thumb]} alt="" className="block h-[178px] w-full object-cover" />
          <div className="flex items-center justify-between gap-[12px] px-[26px] pt-[26px]">
            <span className="inline-flex items-center gap-[7px] font-jet text-[11.5px] font-semibold tracking-[0.12em] text-[#0f766e]">
              <svg viewBox="0 0 24 24" className="h-[13px] w-[13px] flex-shrink-0" fill="none" stroke="#0f766e" strokeWidth="2"><path d="M20.59 13.41 12 22 2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" /><circle cx="7.5" cy="7.5" r="0.5" fill="#0f766e" /></svg>
              {a.category}
            </span>
            <span className="whitespace-nowrap font-jet text-[11.5px] font-semibold tracking-[0.10em] text-[#3e4947]">{a.date}</span>
          </div>
          <div className="flex flex-1 flex-col gap-[12px] px-[26px] pb-[22px] pt-[16px]">
            <h3 className="font-sora text-[16.5px] lg:text-[20px] font-bold leading-[1.35] tracking-[-0.01em] text-[#1c1b1b] [text-wrap:pretty]">{a.title}</h3>
            <p className="flex-1 font-inter text-[14px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">{a.excerpt}</p>
          </div>
          <div className="mx-[26px] flex items-center justify-between border-t border-[#E5E7EB] pb-[20px] pt-[16px]">
            <span className="inline-flex items-center gap-[10px]">
              <span className="inline-flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[#071e1b] font-jet text-[9.5px] font-bold text-[#38e0c4]">{a.initials}</span>
              <span className="font-inter text-[13.5px] text-[#3e4947]">{a.author}</span>
            </span>
            <span className="inline-flex items-center gap-[6px] font-inter text-[13.5px] font-bold text-[#005c55]">Read Brief <span className="text-[12px]">›</span></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
