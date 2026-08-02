"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/content/nav";
import { QUESTIONS, BANDS } from "@/content/loyaltySelfScore";

// Loyalty Programme Maturity Self-Score (Guide §9). Score each of 10 statements
// 1–4; total maps to one of four maturity eras, then a lead-capture unlock.
export default function LoyaltySelfScore() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [sent, setSent] = useState(false);
  const [fName, setFName] = useState("");
  const [fOrg, setFOrg] = useState("");
  const [fEmail, setFEmail] = useState("");

  const answered = Object.keys(answers).length;
  const total = Object.values(answers).reduce((s, v) => s + v, 0);
  const done = answered === 10;
  const band = done ? [...BANDS].reverse().find((b) => total >= b.min) : null;
  const barWidth = Math.round((total / 40) * 100) + "%";

  return (
    <>
      {/* Questions */}
      <div className="flex max-w-[1000px] flex-col gap-[14px] px-[64px] pb-[48px]">
        {QUESTIONS.map((q, i) => (
          <div key={i} className="grid grid-cols-[44px_1fr_auto] items-center gap-[20px] rounded-[14px] border border-[rgba(45,212,191,0.32)] bg-[#11203A] px-[28px] py-[22px] hover:border-[rgba(45,212,191,0.55)] [background-image:radial-gradient(130%_120%_at_0%_0%,rgba(45,212,191,0.12)_0%,rgba(45,212,191,0.03)_38%,transparent_62%),radial-gradient(120%_130%_at_100%_100%,rgba(158,255,90,0.08)_0%,transparent_55%)]">
            <span className="font-jet text-[13px] font-medium text-[#2dd4bf]">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <span className="mb-[3px] block font-inter text-[16px] font-semibold leading-[1.4] text-white">{q.text}</span>
              <span className="block font-inter text-[13px] leading-[1.4] text-[#64748B]">{q.dim}</span>
            </div>
            <div className="flex gap-[8px]">
              {[1, 2, 3, 4].map((v) => {
                const on = answers[i] === v;
                return (
                  <button
                    key={v}
                    onClick={() => setAnswers((a) => ({ ...a, [i]: v }))}
                    className="h-[44px] w-[44px] cursor-pointer rounded-[10px] border-[1.5px] font-sora text-[16px] font-bold"
                    style={{ borderColor: on ? "#9EFF5A" : "rgba(45,212,191,0.4)", background: on ? "#9EFF5A" : "transparent", color: on ? "#0A1628" : "#94A3B8" }}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Score panel */}
      <div className="max-w-[1000px] px-[64px] pb-[96px]">
        <div className="rounded-[16px] border border-[rgba(158,255,90,0.35)] bg-[#0D1B31] px-[48px] py-[44px]">
          <div className="grid grid-cols-[auto_1fr] items-center gap-[56px]">
            <div className="flex min-w-[220px] flex-col gap-[6px]">
              <span className="font-jet text-[12px] font-medium tracking-[0.18em] text-[#2dd4bf]">YOUR SCORE</span>
              <span className="font-sora text-[88px] font-extrabold leading-[1] text-[#9EFF5A] [text-shadow:0_0_40px_rgba(158,255,90,0.3)]">{done ? String(total) : total + "…"}</span>
              <span className="font-inter text-[13px] font-medium text-[#94A3B8]">{done ? "out of 40 · complete" : answered + " of 10 answered"}</span>
            </div>
            <div>
              <div className="mb-[22px] h-[10px] overflow-hidden rounded-[100px] bg-[#1B2C47]">
                <div className="h-full rounded-[100px] [background:linear-gradient(90deg,#2dd4bf,#9EFF5A)]" style={{ width: barWidth }} />
              </div>
              <h2 className="mb-[10px] font-sora text-[26px] font-extrabold leading-[1.2] text-white">{band ? band.name : "Your maturity band appears here"}</h2>
              <p className="font-inter text-[15.5px] leading-[1.65] text-[#94A3B8] [text-wrap:pretty]">{band ? band.copy : "Each statement maps to one of the four loyalty eras — punch-card, points & discounts, app engagement, and data-driven last-mile. Your total shows where your programme truly sits."}</p>
            </div>
          </div>
          <div className="mt-[36px] border-t border-[rgba(45,212,191,0.25)] pt-[32px]">
            {!done ? (
              <p className="font-inter text-[15px] font-medium text-[#64748B]">Answer all 10 statements to unlock your maturity band and the written report.</p>
            ) : !sent ? (
              <>
                <div className="grid grid-cols-[1fr_1fr_1.2fr_auto] items-center gap-[14px]">
                  <input placeholder="Name *" value={fName} onChange={(e) => setFName(e.target.value)} className="box-border w-full rounded-[10px] border border-[rgba(45,212,191,0.35)] bg-[#11203A] px-[16px] py-[14px] font-inter text-[15px] text-white outline-none focus:border-[#9EFF5A]" />
                  <input placeholder="Organisation *" value={fOrg} onChange={(e) => setFOrg(e.target.value)} className="box-border w-full rounded-[10px] border border-[rgba(45,212,191,0.35)] bg-[#11203A] px-[16px] py-[14px] font-inter text-[15px] text-white outline-none focus:border-[#9EFF5A]" />
                  <input placeholder="Work email *" type="email" value={fEmail} onChange={(e) => setFEmail(e.target.value)} className="box-border w-full rounded-[10px] border border-[rgba(45,212,191,0.35)] bg-[#11203A] px-[16px] py-[14px] font-inter text-[15px] text-white outline-none focus:border-[#9EFF5A]" />
                  <button onClick={() => setSent(true)} className="cursor-pointer whitespace-nowrap rounded-[12px] border-none bg-[#9EFF5A] px-[26px] py-[15px] font-sora text-[15px] font-bold text-[#0A1628] hover:bg-[#B4FF7E]">Compute my report</button>
                </div>
                <p className="mt-[14px] font-inter text-[12.5px] leading-[1.5] text-[#64748B]">Your details will only be used to send your maturity report and follow up once. Kenya Data Protection Act 2019 applies: See our <Link href={routes.dataProtection} className="border-b border-[#9EFF5A] pb-[1px] text-[#9EFF5A] hover:border-[#B4FF7E] hover:text-[#B4FF7E]">Data Protection Policy</Link></p>
              </>
            ) : (
              <div className="flex items-center gap-[18px]">
                <span className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-[#9EFF5A] font-sora text-[20px] font-bold text-[#0A1628]">✓</span>
                <div>
                  <span className="mb-[3px] block font-sora text-[18px] font-bold text-white">Report on its way.</span>
                  <span className="font-inter text-[14.5px] text-[#94A3B8]">Your written maturity report and recommended next steps will arrive by email. Want to move faster? <Link href={routes.contact} className="border-b border-[rgba(158,255,90,0.5)] pb-[1px] text-[#9EFF5A]">Book a NAWIRI demo</Link>.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
