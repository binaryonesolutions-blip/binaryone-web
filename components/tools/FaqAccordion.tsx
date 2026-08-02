"use client";

import { useState } from "react";
import { faqs } from "@/content/managedIt";

// Managed IT "CLIENT FAQS" accordion (design §9 / FAQ block). Single-open;
// chevron ▼ / ▲ supplied per item, answer panel revealed below.
export default function FaqAccordion() {
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col gap-[14px]">
      {faqs.map((f, i) => (
        <div key={i} className="overflow-hidden rounded-[14px] border border-[#ece7e4] bg-[#F8FAFB]">
          <button
            onClick={() => setOpen((v) => (v === i ? -1 : i))}
            aria-expanded={open === i}
            className="flex w-full cursor-pointer items-center justify-between gap-[20px] px-[28px] py-[24px] text-left font-sora text-[17px] font-bold text-[#0c1512]"
          >
            <span>{f.q}</span>
            <span className="flex-shrink-0 font-inter text-[14px] text-[#8a9691]">{open === i ? "▲" : "▼"}</span>
          </button>
          {open === i && (
            <div className="px-[14px] pb-[14px] pt-[6px]">
              <p className="m-0 rounded-[10px] border border-[#9fdbd2] bg-white px-[22px] py-[18px] font-inter text-[15.5px] leading-[1.7] text-[#4a5a54] [background-image:radial-gradient(90%_120%_at_0%_0%,rgba(23,168,146,0.12)_0%,transparent_42%),radial-gradient(85%_130%_at_100%_0%,rgba(15,118,110,0.09)_0%,transparent_46%),radial-gradient(120%_140%_at_100%_100%,rgba(23,168,146,0.10)_0%,transparent_48%),radial-gradient(110%_130%_at_0%_100%,rgba(15,118,110,0.06)_0%,transparent_50%)]">
                {f.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
