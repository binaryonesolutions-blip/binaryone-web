"use client";

import { useState } from "react";
import { checkStatements } from "@/content/erpPitfalls";

// Two-minute ERP self-check (Guide §9). Tick statements → live score + verdict.
export default function ErpSelfCheck() {
  const [ticked, setTicked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setTicked((t) => ({ ...t, [i]: !t[i] }));
  const score = Object.values(ticked).filter(Boolean).length;
  const verdict =
    score >= 6 ? "Ready to talk to vendors." : score >= 4 ? "Scope before you shop." : score >= 1 ? "Choosing software now would be expensive." : "Tick what you can say honestly.";

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between gap-[28px] rounded-[16px] border border-[rgba(56,224,196,0.28)] bg-white/[0.04] px-[28px] py-[24px]">
        <div>
          <div className="flex items-baseline gap-[14px]">
            <span className="font-sora text-[64px] font-extrabold leading-[1] tracking-[-0.03em] text-[#38e0c4]">{score}</span>
            <span className="font-sora text-[26px] font-bold text-[#7f9c96]">/ 8</span>
          </div>
          <span className="mt-[8px] block font-jet text-[10.5px] font-bold tracking-[0.18em] text-[#7f9c96]">YOUR SCORE</span>
        </div>
        <span className="text-right font-inter text-[15px] lg:text-[17px] font-semibold text-[#38e0c4]">{verdict}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        {checkStatements.map((text, i) => {
          const on = !!ticked[i];
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="flex cursor-pointer select-none items-start gap-[14px] rounded-[12px] border px-[20px] py-[18px] transition-[background,border-color]"
              style={{ background: on ? "rgba(56,224,196,0.10)" : "rgba(255,255,255,0.04)", borderColor: on ? "rgba(56,224,196,0.55)" : "rgba(56,224,196,0.18)" }}
            >
              <span
                className="mt-[2px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border-[1.5px] transition-[background,border-color]"
                style={{ borderColor: on ? "#38e0c4" : "rgba(56,224,196,0.55)", background: on ? "#38e0c4" : "transparent" }}
              >
                <span className="font-inter text-[12px] font-bold leading-[1] text-[#06231e] transition-opacity" style={{ opacity: on ? 1 : 0 }}>✓</span>
              </span>
              <span className="font-inter text-[14.5px] leading-[1.6]" style={{ color: on ? "#FFFFFF" : "#e6efec" }}>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
