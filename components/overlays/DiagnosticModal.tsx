"use client";

import { useEffect, useState } from "react";
import {
  DIAG_QUESTIONS,
  META_COLOR,
  META_NAME,
  META_ORDER,
  REC_BANK,
  gradeFor,
  type DiagCategory,
} from "@/content/diagnostic";
import { submitDiagnostic } from "@/app/actions/forms";

const OPEN_EVENT = "b1-open-diagnostic";

// Exact trigger buttons (Homepage hero + diagnostic card, Digital Products card).
// Both dispatch the same event; a single DiagnosticModal instance listens and opens.
export function DiagnosticTrigger({ variant }: { variant: "hero" | "card" }) {
  const open = () => window.dispatchEvent(new CustomEvent(OPEN_EVENT));

  if (variant === "hero") {
    return (
      <button
        onClick={open}
        className="inline-flex cursor-pointer items-center gap-[11px] rounded-[12px] bg-[#00332f] px-[26px] py-[16px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(0,51,47,0.24),0_8px_20px_rgba(0,51,47,0.16)] transition-colors hover:bg-[#0a423c]"
      >
        <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] flex-shrink-0">
          <path d="M14 3v4a1 1 0 0 0 1 1h4M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5ZM8.5 13h5M8.5 16.5h3" fill="none" stroke="#38e0c4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Run a Digital Diagnostic
      </button>
    );
  }
  return (
    <button
      onClick={open}
      className="relative inline-flex cursor-pointer items-center gap-[9px] whitespace-nowrap rounded-[11px] bg-[#38e0c4] px-[22px] py-[14px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#0c1512] transition-colors hover:bg-[#5ceace]"
    >
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] flex-shrink-0">
        <path d="M14 3v4a1 1 0 0 0 1 1h4M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5ZM8.5 13h5M8.5 16.5h3" fill="none" stroke="#0c1512" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      START DIAGNOSTICS
    </button>
  );
}

interface Answer {
  score: number;
  category: DiagCategory;
}

// Full 8/10-question Enterprise IT & AI Diagnostic engine (Guide §9.1).
export function DiagnosticModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingSending, setBookingSending] = useState(false);
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    const onOpen = () => {
      setStep(0);
      setAnswers([]);
      setBookingSubmitted(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const total = DIAG_QUESTIONS.length;
  const isResults = step >= total;
  const answered = answers.length;
  const progressPct = Math.round((answered / total) * 100);

  const choose = (score: number, category: DiagCategory) => {
    setAnswers((a) => [...a, { score, category }]);
    setStep((s) => s + 1);
  };

  const back = () => {
    setAnswers((a) => a.slice(0, -1));
    setStep((s) => Math.max(0, s - 1));
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setBookingSubmitted(false);
  };

  // ---- results computation ----
  let resultsView = null;
  if (isResults) {
    const catMax: Record<DiagCategory, number> = { infrastructure: 0, security: 0, erp: 0, ai: 0, cx: 0 };
    const catScore: Record<DiagCategory, number> = { infrastructure: 0, security: 0, erp: 0, ai: 0, cx: 0 };
    DIAG_QUESTIONS.forEach((q, i) => {
      catMax[q.category] += 3;
      catScore[q.category] += answers[i] ? answers[i].score : 0;
    });
    const score = answers.reduce((a, b) => a + b.score, 0);
    const maxScore = total * 3;
    const pct = Math.round((score / maxScore) * 100);
    const { grade, gradeDesc } = gradeFor(pct);
    const meters = META_ORDER.map((k) => {
      const p = Math.round((catScore[k] / catMax[k]) * 100);
      return { name: META_NAME[k], pctLabel: p + "%", width: p + "%", color: META_COLOR[k] };
    });
    const recSet = pct < 45 ? REC_BANK.low : pct < 70 ? REC_BANK.mid : REC_BANK.high;
    const recs = recSet.map((text, i) => ({ text, n: i + 1 }));

    resultsView = (
      <div>
        <div className="mb-[30px] text-center">
          <span className="mb-[12px] block font-jet text-[11px] font-semibold tracking-[0.18em] text-[#0f766e]">YOUR READINESS SCORECARD</span>
          <div className="flex items-baseline justify-center gap-[6px]">
            <span className="font-sora text-[72px] font-extrabold leading-[1] tracking-[-0.03em] text-[#0c1512]">{pct}%</span>
          </div>
          <span className="mt-[8px] block font-jet text-[13px] font-medium text-[#8a9691]">{score} / {maxScore} points</span>
          <span className="mt-[16px] inline-block rounded-[100px] bg-[#38e0c4] px-[18px] py-[8px] font-jet text-[12px] font-bold tracking-[0.12em] text-[#071e1b]">{grade.toUpperCase()}</span>
          <p className="mx-auto mt-[18px] max-w-[480px] font-inter text-[14.5px] leading-[1.65] text-[#4a5a54] [text-wrap:pretty]">{gradeDesc}</p>
        </div>

        <div className="mb-[30px] flex flex-col gap-[16px]">
          {meters.map((m) => (
            <div key={m.name}>
              <div className="mb-[7px] flex items-center justify-between">
                <span className="font-inter text-[13.5px] font-semibold text-[#1c1b1b]">{m.name}</span>
                <span className="font-jet text-[12px] font-medium text-[#6e7977]">{m.pctLabel}</span>
              </div>
              <div className="h-[8px] overflow-hidden rounded-[100px] bg-[#ece7e4]">
                <div className="h-full rounded-[100px] transition-[width] duration-500 ease-in-out" style={{ width: m.width, background: m.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[28px] rounded-[16px] border border-[#cfe8df] bg-[#f1f8f5] px-[26px] py-[24px]">
          <span className="mb-[16px] block font-sora text-[13px] font-bold text-[#0c1512]">Recommended Next Steps</span>
          <div className="flex flex-col gap-[14px]">
            {recs.map((rec) => (
              <div key={rec.n} className="flex items-start gap-[13px]">
                <span className="inline-flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full bg-[#0f766e] font-jet text-[12px] font-bold text-white">{rec.n}</span>
                <span className="font-inter text-[14px] leading-[1.55] text-[#3e4947]">{rec.text}</span>
              </div>
            ))}
          </div>
        </div>

        {!bookingSubmitted ? (
          <div className="relative overflow-hidden rounded-[18px] bg-[#071e1b] px-[28px] pb-[30px] pt-[28px]">
            <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.06)_1px,transparent_1px)] [background-size:40px_100%]" />
            <div className="relative">
              <span className="mb-[9px] block font-jet text-[10.5px] font-bold tracking-[0.18em] text-[#38e0c4]">BOOK A FREE STRATEGIC ADVISORY SESSION</span>
              <h4 className="mb-[18px] font-sora text-[16.5px] lg:text-[20px] font-bold leading-[1.25] text-white">Turn this scorecard into a roadmap.</h4>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  fd.set("score", `${pct}% (${score}/${maxScore})`);
                  fd.set("grade", grade);
                  setBookingError("");
                  setBookingSending(true);
                  try {
                    const res = await submitDiagnostic(null, fd);
                    if (res.ok) setBookingSubmitted(true);
                    else setBookingError(res.error || "Something went wrong.");
                  } catch {
                    setBookingError("Something went wrong. Please email info@binaryone.co.ke.");
                  } finally {
                    setBookingSending(false);
                  }
                }}
                className="flex flex-col gap-[12px]"
              >
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                  <input name="name" type="text" placeholder="Full name" required className="w-full rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-[14px] py-[12px] font-inter text-[14px] text-white placeholder:text-[#8fa8a1]" />
                  <input name="email" type="email" placeholder="Work email" required className="w-full rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-[14px] py-[12px] font-inter text-[14px] text-white placeholder:text-[#8fa8a1]" />
                </div>
                <input name="org" type="text" placeholder="Organisation" className="w-full rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-[14px] py-[12px] font-inter text-[14px] text-white placeholder:text-[#8fa8a1]" />
                <textarea name="message" placeholder="What's the most pressing priority?" rows={3} className="w-full resize-y rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-[14px] py-[12px] font-inter text-[14px] text-white placeholder:text-[#8fa8a1]" />
                {bookingError && <p className="font-inter text-[12.5px] text-[#ffb4a8]">{bookingError}</p>}
                <button type="submit" disabled={bookingSending} className="mt-[4px] inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-[11px] bg-[#38e0c4] px-[24px] py-[14px] font-jet text-[12px] font-bold tracking-[0.1em] text-[#06231e] transition-colors hover:bg-[#5eead4] disabled:opacity-60">
                  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] flex-shrink-0" fill="none" stroke="#06231e" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                    <path d="M3.5 10h17M8.5 3v4M15.5 3v4M9 14.5l2 2 4-4" />
                  </svg>
                  BOOK MY SESSION
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="rounded-[18px] border border-[#cfe8df] bg-[#f1f8f5] px-[28px] py-[34px] text-center">
            <span className="mb-[16px] inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0f766e]">
              <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h4 className="mb-[8px] font-sora text-[16.5px] lg:text-[20px] font-bold text-[#0c1512]">Request received.</h4>
            <p className="mx-auto mb-[20px] max-w-[400px] font-inter text-[14.5px] leading-[1.6] text-[#4a5a54]">Our team will reach out within one business day to schedule your free strategic advisory session.</p>
            <button onClick={() => setOpen(false)} className="cursor-pointer rounded-[11px] bg-[#071e1b] px-[26px] py-[13px] font-jet text-[12px] font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#0c3b33]">CLOSE</button>
          </div>
        )}

        <div className="mt-[20px] text-center">
          <button onClick={restart} className="cursor-pointer border-none bg-transparent font-inter text-[13px] font-medium text-[#6e7977] underline hover:text-[#0f766e]">Retake the diagnostic</button>
        </div>
      </div>
    );
  }

  // ---- question computation ----
  let questionView = null;
  if (!isResults) {
    const q = DIAG_QUESTIONS[step];
    questionView = (
      <div>
        {step > 0 && (
          <button
            onClick={back}
            className="mb-[16px] inline-flex cursor-pointer items-center gap-[7px] rounded-[9px] border border-[#e4ded9] bg-white px-[13px] py-[8px] font-jet text-[11px] font-semibold tracking-[0.08em] text-[#4a5a54] transition-colors hover:border-[#0f766e] hover:text-[#0f766e]"
          >
            <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            BACK
          </button>
        )}
        <span className="mb-[18px] block w-fit rounded-[100px] bg-[rgba(15,118,110,0.08)] px-[13px] py-[6px] font-jet text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0f766e]">{q.catLabel}</span>
        <h3 className="mb-[24px] font-sora text-[24px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0c1512] [text-wrap:pretty]">{q.text}</h3>
        <div className="flex flex-col gap-[12px]">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => choose(opt.score, q.category)}
              className="flex w-full cursor-pointer items-start gap-[15px] rounded-[14px] border border-[#e4ded9] bg-white px-[20px] py-[18px] text-left transition-[border-color,box-shadow,transform] duration-200 hover:border-[#0f766e] hover:shadow-[0_6px_20px_rgba(15,118,110,0.12)]"
            >
              <span className="inline-flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[8px] bg-[rgba(15,118,110,0.10)] font-jet text-[13px] font-bold text-[#0f766e]">{String.fromCharCode(65 + i)}</span>
              <span className="flex flex-col gap-[5px]">
                <span className="font-inter text-[15px] font-semibold leading-[1.5] text-[#1c1b1b]">{opt.text}</span>
                <span className="font-inter text-[13px] leading-[1.5] text-[#6e7977]">{opt.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[rgba(4,14,12,0.62)] px-[20px] py-[24px] font-inter [backdrop-filter:blur(6px)]"
    >
      <div className="flex max-h-[calc(133vh-64px)] w-full max-w-[720px] origin-center scale-[0.75] flex-col overflow-hidden rounded-[24px] bg-[#F8FAFB] shadow-[0_30px_90px_rgba(4,14,12,0.5)]">
        {/* Header (dark) */}
        <div className="relative flex-shrink-0 overflow-hidden bg-[#071e1b] px-[30px] py-[26px]">
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(56,224,196,0.07)_1px,transparent_1px)] [background-size:44px_100%]" />
          <div className="relative flex items-center justify-between gap-[16px]">
            <span className="font-jet text-[11px] font-bold tracking-[0.2em] text-[#38e0c4]">ENTERPRISE IT &amp; AI DIAGNOSTIC</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[9px] border border-white/15 bg-white/[0.08] text-[#cbd8d3] hover:bg-white/[0.16] hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
          {!isResults && (
            <div className="relative mt-[18px]">
              <div className="mb-[9px] flex items-center justify-between">
                <span className="font-inter text-[12px] font-medium text-[#9fb4ae]">Question {step + 1} of {total}</span>
                <span className="rounded-[100px] bg-[rgba(56,224,196,0.12)] px-[10px] py-[4px] font-jet text-[11px] font-medium text-[#38e0c4]">{progressPct}% Done</span>
              </div>
              <div className="h-[6px] overflow-hidden rounded-[100px] bg-white/10">
                <div className="h-full rounded-[100px] bg-[linear-gradient(90deg,#0f766e,#38e0c4)] transition-[width] duration-[350ms] ease-in-out" style={{ width: progressPct + "%" }} />
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-[30px] pb-[38px] pt-[34px]">
          {isResults ? resultsView : questionView}
        </div>
      </div>
    </div>
  );
}
