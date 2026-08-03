"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { briefs } from "@/content/insights";
import erpThumb from "@/public/assets/insight-erp-thumb.png";
import nawiriThumb from "@/public/assets/insight-nawiri-v3.png";
import managedThumb from "@/public/assets/insight-managed-it-v2.png";

const thumbs: Record<string, StaticImageData> = {
  erp: erpThumb,
  nawiri: nawiriThumb,
  managedit: managedThumb,
};

// Insights brief grid + advisory-brief modal (Guide §9). Cards open a full-text
// modal; overlay-click / Escape / Close all dismiss it.
export default function InsightsBriefs() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  const brief = active === null ? null : briefs[active];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {briefs.map((a, i) => (
          <div
            key={a.title}
            onClick={() => setActive(i)}
            className="flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] hover:-translate-y-[2px] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_16px_40px_rgba(15,118,110,0.14)]"
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
          </div>
        ))}
      </div>

      {brief && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(7,30,27,0.55)] p-[40px]">
          <div onClick={(e) => e.stopPropagation()} className="relative flex max-h-[82vh] w-[700px] flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            <div className="h-[14px] flex-shrink-0 [background:linear-gradient(90deg,#071e1b,#0f766e_45%,#38e0c4)]" />
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-[24px] top-[26px] z-[2] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] bg-white font-inter text-[15px] text-[#3e4947] hover:bg-[#f1f5f4]">✕</button>
            <div className="overflow-y-auto px-[44px] pb-[32px] pt-[36px]">
              <div className="mb-[22px] flex items-center gap-[18px]">
                <span className="rounded-[4px] bg-[#d8f3ee] px-[14px] py-[7px] font-jet text-[12px] font-semibold tracking-[0.12em] text-[#0f766e]">{brief.category}</span>
                <span className="font-jet text-[13px] font-medium tracking-[0.10em] text-[#3e4947]">{brief.dateLong}</span>
              </div>
              <h2 className="mb-[22px] pr-[36px] font-sora text-[30px] font-bold leading-[1.25] tracking-[-0.015em] text-[#1c1b1b] [text-wrap:pretty]">{brief.title}</h2>
              <div className="mb-[26px] flex items-center gap-[12px] border-b border-[#E5E7EB] pb-[24px]">
                <span className="inline-flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[#071e1b] font-jet text-[11px] font-bold text-[#38e0c4]">{brief.initials}</span>
                <span className="flex flex-col gap-[2px]">
                  <span className="font-inter text-[14.5px] font-semibold text-[#1c1b1b]">{brief.author}</span>
                  <span className="font-inter text-[12.5px] text-[#6e7977]">{brief.role}</span>
                </span>
              </div>
              {brief.body.map((para, i) => (
                <p key={i} className="mb-[18px] font-inter text-[15px] leading-[1.7] text-[#3e4947] [text-wrap:pretty]">{para}</p>
              ))}
              <div className="mt-[8px] flex justify-end border-t border-[#E5E7EB] pt-[24px]">
                <button onClick={() => setActive(null)} className="cursor-pointer rounded-[999px] bg-[#071e1b] px-[26px] py-[12px] font-inter text-[14px] font-semibold text-white hover:bg-[#0f766e]">Close Advisory Brief</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
