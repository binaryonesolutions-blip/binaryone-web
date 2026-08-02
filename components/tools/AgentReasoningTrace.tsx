"use client";

import { useEffect, useRef, useState } from "react";
import { scenarios } from "@/content/agenticAi";

const PlayIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Cognitive Reasoning Engine Trace (Guide §9, Agentic AI). Steps reveal on a
// 900ms interval after Run; each scenario resets the trace.
export default function AgentReasoningTrace() {
  const [scenario, setScenario] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const selectScenario = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setScenario(i);
    setRevealed(0);
    setRunning(false);
    setDone(false);
  };

  const runAgent = () => {
    if (timer.current) clearInterval(timer.current);
    const total = scenarios[scenario].steps.length;
    setRevealed(0);
    setRunning(true);
    setDone(false);
    timer.current = setInterval(() => {
      setRevealed((r) => {
        const next = r + 1;
        if (next >= total) {
          if (timer.current) clearInterval(timer.current);
          setRunning(false);
          setDone(true);
        }
        return next;
      });
    }, 900);
    setTimeout(() => setRevealed((r) => (r === 0 ? 1 : r)), 100);
  };

  const active = scenarios[scenario];
  const statusText = running ? "RUNNING — EXECUTING" : done ? "COMPLETE" : "IDLE - LISTENING";
  const statusColor = running ? "#fcd34d" : done ? "#34d399" : "#94A3B8";
  const runLabel = running ? "Running…" : done ? "Run again" : "Run agent";
  const visibleSteps = active.steps.slice(0, revealed);

  return (
    <div className="overflow-hidden rounded-[20px] border border-[rgba(45,212,191,0.2)] bg-[#040d0b] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-[28px] py-[20px]">
        <span className="inline-flex items-center gap-[12px] font-jet text-[13px] font-bold tracking-[0.12em] text-[#e2e8f0]">
          <span className="text-[#2dd4bf]">&gt;_</span>COGNITIVE REASONING ENGINE TRACE
        </span>
        <span className="rounded-[8px] border border-white/[0.14] bg-white/[0.03] px-[14px] py-[8px] font-jet text-[12px] font-semibold" style={{ color: statusColor }}>
          Agent Status: {statusText}
        </span>
      </div>

      <div className="grid min-h-[460px] grid-cols-[0.85fr_1.15fr]">
        {/* Selector */}
        <div className="flex flex-col gap-[16px] border-r border-white/[0.08] p-[28px]">
          <span className="font-jet text-[12px] font-bold tracking-[0.14em] text-[#94A3B8]">SELECT WORKFLOW TARGET</span>
          {scenarios.map((s, i) => (
            <div
              key={s.tag}
              onClick={() => selectScenario(i)}
              className="flex cursor-pointer items-center justify-between gap-[14px] rounded-[12px] px-[20px] py-[18px] transition-all duration-200 hover:border-[rgba(45,212,191,0.6)]"
              style={{
                border: `1px solid ${i === scenario ? "rgba(45,212,191,0.6)" : "rgba(255,255,255,0.10)"}`,
                background: i === scenario ? "rgba(45,212,191,0.06)" : "rgba(255,255,255,0.02)",
              }}
            >
              <span className="flex flex-col gap-[7px]">
                <span className="font-jet text-[11px] font-bold tracking-[0.12em] text-[#5eead4]">SCENARIO: {s.tag}</span>
                <span className="font-inter text-[14.5px] font-medium leading-[1.45] text-[#E2E8F0]">{s.label}</span>
              </span>
              <span className="inline-flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[8px] border border-[rgba(45,212,191,0.4)] text-[#2dd4bf]">
                <PlayIcon className="h-[14px] w-[14px]" />
              </span>
            </div>
          ))}
        </div>

        {/* Trace */}
        <div className="flex max-h-[520px] flex-col gap-[20px] overflow-y-auto px-[32px] py-[28px]">
          <div className="flex items-center justify-between gap-[16px]">
            <span className="font-jet text-[14px] text-[#94A3B8]">Active Trigger Command:</span>
            <span className="font-jet text-[13px] font-bold tracking-[0.08em] text-[#5eead4]">{active.command}</span>
          </div>
          <div className="rounded-[10px] border border-[rgba(45,212,191,0.25)] bg-[rgba(45,212,191,0.05)] px-[20px] py-[16px]">
            <span className="font-jet text-[14px] font-bold italic tracking-[0.04em] text-[#e2e8f0]">&quot; {active.quote} &quot;</span>
          </div>
          {visibleSteps.map((step) => (
            <div key={step.head} className="flex flex-col gap-[10px] rounded-[10px] border border-white/10 bg-white/[0.02] px-[20px] py-[18px]">
              <span className="font-jet text-[11.5px] font-bold tracking-[0.06em] text-[#94A3B8]">{step.head}</span>
              <span className="font-inter text-[15px] leading-[1.5] text-[#E2E8F0]">{step.line}</span>
              <span className="font-jet text-[12.5px] leading-[1.55] text-[#64748B]">{step.detail}</span>
            </div>
          ))}
          {done && (
            <div className="flex items-center gap-[12px] rounded-[10px] border border-[rgba(52,211,153,0.4)] bg-[rgba(52,211,153,0.08)] px-[20px] py-[18px]">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] flex-shrink-0" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="font-inter text-[14.5px] font-semibold leading-[1.5] text-[#a7f3d0]">{active.result}</span>
            </div>
          )}
          <button
            onClick={runAgent}
            className="mt-[4px] inline-flex cursor-pointer items-center gap-[10px] self-start rounded-[10px] bg-[#0f766e] px-[24px] py-[13px] font-inter text-[14.5px] font-semibold text-white transition-colors hover:bg-[#0d655e]"
          >
            <PlayIcon className="h-[16px] w-[16px]" />
            {runLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
