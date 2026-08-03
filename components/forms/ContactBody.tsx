"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/content/nav";
import { submitAssessment, submitEnquiry, bookAdvisory } from "@/app/actions/forms";

const FIELD =
  "w-full box-border rounded-[10px] border border-[#E5E7EB] bg-white px-[16px] py-[13px] font-inter text-[15px] text-[#1c1b1b] outline-none focus:border-[#0f766e]";
const SELECT =
  "w-full rounded-[10px] border border-[#E5E7EB] bg-white px-[16px] py-[13px] font-inter text-[15px] text-[#3e4947] outline-none focus:border-[#0f766e]";
const ADV_FIELD =
  "w-full rounded-[10px] border border-white/[0.16] bg-white/[0.05] px-[13px] py-[9px] font-inter text-[14px] text-white placeholder:text-[#7fa9a3]";
const ADV_LABEL = "font-inter text-[11px] font-bold uppercase tracking-[0.1em] text-[#5df0d0]";

const ADV_SLOTS = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
const ADV_PARTNERS = [
  "Humphrey Kirui (Founder / Lead Consultant)",
  "Mike Kiai (Virtual CIO)",
  "Eugene Hillary (IT Operations Lead)",
  "Mary Kalama (Business Development Lead)",
];

// Next 5 weekdays, each as a display label + an ISO date for the calendar invite.
function advisoryDates(): { label: string; iso: string }[] {
  const out: { label: string; iso: string }[] = [];
  const d = new Date();
  while (out.length < 5) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day === 0 || day === 6) continue;
    out.push({
      label: d.toLocaleDateString("en-GB", { weekday: "short", month: "short", day: "numeric" }).replace(/^(\w+)\s/, "$1, "),
      iso: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
    });
  }
  return out;
}

const mapSrc = "https://maps.google.com/maps?q=" + encodeURIComponent("PQ2W+JX7, Ngong Rd, Nairobi") + "&z=16&output=embed";

const HONEYPOT = <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />;

export default function ContactBody() {
  const [tab, setTab] = useState<"assessment" | "enquiry">("assessment");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const [advDone, setAdvDone] = useState(false);
  const [advPartner, setAdvPartner] = useState(0);
  const [advDate, setAdvDate] = useState(0);
  const [advSlot, setAdvSlot] = useState(0);
  const [partnersOpen, setPartnersOpen] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tab");
    if (t === "enquiry" || t === "assessment") setTab(t);
  }, []);

  const dates = advisoryDates();
  const chip = (active: boolean) => ({
    background: active ? "#0f766e" : "rgba(255,255,255,0.05)",
    borderColor: active ? "#38e0c4" : "rgba(255,255,255,0.16)",
    color: active ? "#FFFFFF" : "#c2dbd7",
  });

  const tabBtn = (active: boolean) =>
    `flex-1 cursor-pointer rounded-[9px] border-none px-[20px] py-[13px] font-inter text-[15px] font-semibold ${
      active ? "bg-white text-[#1c1b1b] shadow-[0_1px_3px_rgba(15,118,110,0.12)]" : "bg-transparent text-[#3e4947]"
    }`;

  async function handleForm(
    e: React.FormEvent<HTMLFormElement>,
    action: (prev: null, fd: FormData) => Promise<{ ok: boolean; error?: string }>,
  ) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setError("");
    setSending(true);
    try {
      const res = await action(null, fd);
      if (res.ok) setSubmitted(true);
      else setError(res.error || "Something went wrong.");
    } catch {
      setError("Something went wrong. Please email info@binaryone.co.ke.");
    } finally {
      setSending(false);
    }
  }

  async function handleAdvisory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setError("");
    setSending(true);
    try {
      const res = await bookAdvisory({
        partnerName: ADV_PARTNERS[advPartner],
        dateISO: dates[advDate].iso,
        dateLabel: dates[advDate].label,
        slot: ADV_SLOTS[advSlot],
        name: String(fd.get("name") || ""),
        org: String(fd.get("org") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        agenda: String(fd.get("agenda") || ""),
        website: String(fd.get("website") || ""),
      });
      if (res.ok) setAdvDone(true);
      else setError(res.error || "Something went wrong.");
    } catch {
      setError("We couldn't confirm that slot. Please email info@binaryone.co.ke.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] items-start gap-[48px] px-5 sm:px-8 lg:px-[64px] pb-[104px] pt-[56px]">
      {/* Left: tabs + form */}
      <div>
        <div className="mb-[32px] flex rounded-[12px] border border-[#E5E7EB] bg-[#f0eded] p-[4px]">
          <button onClick={() => { setTab("assessment"); setSubmitted(false); setError(""); }} className={tabBtn(tab === "assessment")}>Book a Free IT Assessment</button>
          <button onClick={() => { setTab("enquiry"); setSubmitted(false); setError(""); }} className={tabBtn(tab === "enquiry")}>General Enquiry</button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-start gap-[16px] rounded-[16px] border border-[#E5E7EB] bg-white p-[48px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)]">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#006e1b] font-inter text-[22px] font-semibold text-white">✓</span>
            <h3 className="font-sora text-[28px] font-bold text-[#1c1b1b]">Thank you. Your request has been received.</h3>
            <p className="font-inter text-[14.5px] lg:text-[16px] leading-[1.65] text-[#3e4947]">Binary One will review the details and respond with the recommended next step.</p>
            <p className="font-inter text-[13.5px] leading-[1.6] text-[#6e7977]">Your details will only be used to respond to your enquiry or Free IT Assessment request.</p>
            <button onClick={() => setSubmitted(false)} className="cursor-pointer border-none bg-transparent p-0 font-inter text-[14.5px] font-semibold text-[#005c55] [border-bottom:1.5px_solid_#005c55] hover:text-[#006e1b]">Send another request</button>
          </div>
        ) : tab === "assessment" ? (
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-[40px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)]">
            <p className="mb-[28px] font-inter text-[15.5px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">The Free IT Assessment is a structured 90-minute session with your Virtual CIO. We review your current IT setup, identify the three biggest risks, and leave you with a written one-page brief — no obligation, no sales pitch.</p>
            <form onSubmit={(e) => handleForm(e, submitAssessment)} className="flex flex-col gap-[16px]">
              {HONEYPOT}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <input required name="name" placeholder="Name *" className={FIELD} />
                <input required name="org" placeholder="Organisation *" className={FIELD} />
                <input required name="role" placeholder="Role / Title *" className={FIELD} />
                <input required name="email" placeholder="Work email *" type="email" className={FIELD} />
                <input required name="phone" placeholder="Phone *" type="tel" className={FIELD} />
                <input required name="users" placeholder="Number of users / workstations *" type="number" className={FIELD} />
              </div>
              <textarea required name="setup" placeholder="Current IT setup *" rows={3} className={`${FIELD} resize-y`} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <select required name="concern" className={SELECT} defaultValue="">
                  <option value="">Main concern *</option>
                  <option>Cybersecurity</option><option>Cost control</option><option>Reliability &amp; uptime</option><option>Cloud migration</option><option>Compliance &amp; audit</option><option>ERP fit</option><option>Other</option>
                </select>
                <input required name="meetingDate" placeholder="Preferred meeting date *" type="date" className={`${FIELD} py-[12px]`} />
              </div>
              <textarea name="message" placeholder="Anything we should know? (optional)" rows={2} className={`${FIELD} resize-y`} />
              <label className="flex cursor-pointer items-start gap-[10px] font-inter text-[13px] leading-[1.5] text-[#3e4947]">
                <input required type="checkbox" className="mt-[2px] [accent-color:#006e1b]" />
                <span>I consent to Binary One Solutions processing this information under their <Link href={routes.dataProtection} className="text-[#0f766e] [border-bottom:1px_solid_rgba(15,118,110,0.4)] hover:text-[#12897f]">Data Protection Policy</Link>. (Kenya Data Protection Act 2019)</span>
              </label>
              {error && <p className="font-inter text-[13.5px] text-[#c0392b]">{error}</p>}
              <button type="submit" disabled={sending} className="cursor-pointer self-start rounded-[12px] border-none bg-[#0f766e] px-[28px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.20),0_6px_16px_rgba(15,118,110,0.14)] hover:bg-[#0d655e] disabled:opacity-60">{sending ? "Sending…" : "Send & confirm my slot"}</button>
            </form>
          </div>
        ) : (
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-[40px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)]">
            <p className="mb-[28px] font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">Question about NAWIRI? ERP audit? Custom build? Tell us briefly and we will route your enquiry to the right specialist.</p>
            <form onSubmit={(e) => handleForm(e, submitEnquiry)} className="flex flex-col gap-[16px]">
              {HONEYPOT}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <input required name="name" placeholder="Name *" className={FIELD} />
                <input required name="org" placeholder="Organisation *" className={FIELD} />
                <input name="role" placeholder="Role / Title *" className={FIELD} />
                <input required name="email" placeholder="Work email *" type="email" className={FIELD} />
                <input name="phone" placeholder="Phone (optional)" type="tel" className={FIELD} />
                <select required name="topic" className={SELECT} defaultValue="">
                  <option value="">Product of interest *</option>
                  <option>Managed IT</option><option>ERP Consulting</option><option>NAWIRI Digital Loyalty</option><option>Agentic AI Workflows</option><option>Custom Enterprise Software Builds</option><option>Other</option>
                </select>
              </div>
              <textarea required name="message" placeholder="Message *" rows={5} className={`${FIELD} resize-y`} />
              <label className="flex cursor-pointer items-start gap-[10px] font-inter text-[13px] leading-[1.5] text-[#3e4947]">
                <input required type="checkbox" className="mt-[2px] [accent-color:#006e1b]" />
                <span>I consent to Binary One Solutions processing this information under their <Link href={routes.dataProtection} className="text-[#0f766e] [border-bottom:1px_solid_rgba(15,118,110,0.4)] hover:text-[#12897f]">Data Protection Policy</Link>.</span>
              </label>
              {error && <p className="font-inter text-[13.5px] text-[#c0392b]">{error}</p>}
              <button type="submit" disabled={sending} className="cursor-pointer self-start rounded-[12px] border-none bg-[#0f766e] px-[28px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.20),0_6px_16px_rgba(15,118,110,0.14)] hover:bg-[#0d655e] disabled:opacity-60">{sending ? "Sending…" : "Send enquiry"}</button>
            </form>
          </div>
        )}
      </div>

      {/* Right: side panel */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-stretch gap-[22px] rounded-[16px] border border-[rgba(56,224,196,0.75)] bg-[#d9f5ef] p-[32px] shadow-[0_0_0_1px_rgba(56,224,196,0.18),0_0_28px_rgba(56,224,196,0.30),0_18px_40px_-30px_rgba(6,35,30,0.35)]">
          <span className="flex w-[38px] flex-shrink-0 items-center justify-center">
            <span className="flex h-[30px] w-[160px] rotate-90 items-stretch justify-center gap-[3px] [filter:drop-shadow(0_0_10px_rgba(63,174,73,0.35))]">
              <span className="block h-full w-[3px] bg-[#3fae49]" /><span className="block h-full w-[3px] bg-[#3fae49]" /><span className="block h-full w-[5.5px] bg-[#3fae49]" /><span className="block h-full w-[3px] bg-[#3fae49]" />
              <span className="mx-[3px] flex h-full items-center justify-center rounded-[3px] bg-[#3fae49] px-[8px]"><span className="font-sora text-[13px] font-extrabold tracking-[0.03em] text-white">B1S</span></span>
              <span className="block h-full w-[3px] bg-[#3fae49]" /><span className="block h-full w-[4.5px] bg-[#3fae49]" />
            </span>
          </span>
          <span className="w-[1px] flex-shrink-0 self-stretch [background:linear-gradient(180deg,rgba(15,118,110,0)_0%,rgba(15,118,110,0.30)_18%,rgba(15,118,110,0.30)_82%,rgba(15,118,110,0)_100%)]" />
          <div className="flex flex-1 flex-col gap-[16px]">
            <span className="font-inter text-[12px] font-semibold tracking-[0.14em] text-[#0f766e]">CONTACT CARD</span>
            <p className="font-inter text-[15px] leading-[1.75] text-[#2c4b46]"><strong className="font-bold text-[#06332e]">Binary One Solutions Ltd</strong><br />St Charles Lwanga House, 1st Floor,<br />Ngong Road, Nairobi, Kenya<br />P.O. Box 52883 (00100)</p>
            <p className="font-inter text-[15px] leading-[1.75] text-[#2c4b46]"><a href="tel:+254787990220" className="text-[#2c4b46] hover:text-[#06332e]">+254 787 990 220</a><br /><a href="mailto:info@binaryone.co.ke" className="text-[#2c4b46] hover:text-[#06332e]">info@binaryone.co.ke</a></p>
            <button onClick={() => { setAdvisoryOpen(true); setAdvDone(false); setPartnersOpen(false); setError(""); }} className="inline-flex cursor-pointer items-center gap-[9px] self-start whitespace-nowrap rounded-[9px] border border-[#00332f] bg-[#00332f] px-[14px] py-[9px] font-jet text-[10.5px] font-bold tracking-[0.1em] text-[#eafaf6] transition-[background,border-color] hover:border-[#0f766e] hover:bg-[#0a4a42] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] flex-shrink-0" fill="none" stroke="#38e0c4" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8.5 3v4M15.5 3v4" /></svg>
              BOOK BOARDROOM ADVISORY
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(6,35,30,0.05),0_18px_40px_-30px_rgba(6,35,30,0.35)]">
          <div className="flex items-center justify-between gap-[12px] border-b border-[#E5E7EB] px-[16px] py-[12px]">
            <span className="inline-flex items-center gap-[9px] font-jet text-[10.5px] font-bold tracking-[0.16em] text-[#0f766e]"><svg viewBox="0 0 24 24" className="h-[15px] w-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>NGONG ROAD, NAIROBI</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Binary+One+Solutions+Ngong+Road+Nairobi" target="_blank" rel="noopener" className="whitespace-nowrap font-inter text-[12px] font-semibold text-[#0f766e] hover:text-[#12897f]">Open in Maps ↗</a>
          </div>
          <div className="h-[320px]">
            <iframe src={mapSrc} className="block h-full w-full border-none" loading="lazy" title="Binary One Solutions location" />
          </div>
        </div>

        <div className="flex flex-col gap-[6px] rounded-[16px] border border-[#E5E7EB] bg-white px-[28px] py-[24px]">
          <span className="font-inter text-[12px] font-semibold tracking-[0.14em] text-[#3e4947]">OFFICE HOURS</span>
          <span className="font-inter text-[14.5px] lg:text-[16px] font-medium text-[#1c1b1b]">Monday – Friday, 08:30 – 17:30 EAT</span>
        </div>
      </div>

      {/* Boardroom Advisory modal */}
      {advisoryOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-[24px] [background:rgba(3,20,18,0.66)] [backdrop-filter:blur(9px)]">
          <div onClick={() => { setAdvisoryOpen(false); setAdvDone(false); }} className="absolute inset-0" />
          <div data-adv-panel="1" className="relative flex max-h-[92vh] w-[760px] max-w-full flex-col gap-[13px] overflow-y-auto rounded-[20px] border border-[rgba(56,224,196,0.28)] bg-[#00332f] px-[28px] py-[22px] shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
            <div className="flex items-start justify-between gap-[18px]">
              <span className="inline-flex items-center gap-[12px] font-sora text-[14.5px] lg:text-[16px] font-bold tracking-[0.005em] text-white"><svg viewBox="0 0 24 24" className="h-[21px] w-[21px] flex-shrink-0" fill="none" stroke="#38e0c4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8.5 3v4M15.5 3v4" /></svg>BOOK BOARDROOM ADVISORY</span>
              <button onClick={() => { setAdvisoryOpen(false); setAdvDone(false); }} aria-label="Close" className="inline-flex h-[32px] w-[32px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[9px] border border-white/[0.14] bg-white/[0.06] text-[#c2dbd7] hover:bg-white/[0.12] hover:text-white"><svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
            </div>

            {advDone ? (
              <div className="flex flex-col gap-[14px] pb-[8px] pt-[18px]">
                <span className="inline-flex items-center gap-[10px] font-inter text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#5df0d0]"><span className="h-[8px] w-[8px] rounded-full bg-[#7cdc79] shadow-[0_0_8px_rgba(124,220,121,0.9)]" />RESERVATION LOGGED</span>
                <p className="font-inter text-[16px] lg:text-[19px] font-semibold leading-[1.5] text-white [text-wrap:pretty]">Boardroom advisory held for {dates[advDate].label} at {ADV_SLOTS[advSlot]} EAT.</p>
                <p className="font-inter text-[14.5px] leading-[1.7] text-[#c2dbd7] [text-wrap:pretty]">Mary Kalama will confirm the slot by email within one business day, with a short agenda and the partner&apos;s brief.</p>
                <button onClick={() => { setAdvisoryOpen(false); setAdvDone(false); }} className="mt-[6px] cursor-pointer self-start rounded-[10px] border border-[rgba(56,224,196,0.4)] bg-[rgba(56,224,196,0.1)] px-[20px] py-[12px] font-inter text-[13px] font-bold tracking-[0.06em] text-[#d8ece8] hover:bg-[rgba(56,224,196,0.18)] hover:text-white">CLOSE</button>
              </div>
            ) : (
              <form onSubmit={handleAdvisory} className="flex flex-col gap-[12px]">
                {HONEYPOT}
                <div className="relative flex flex-col gap-[6px]">
                  <span className={ADV_LABEL}>SELECT SENIOR PARTNER</span>
                  <button type="button" onClick={() => setPartnersOpen((v) => !v)} className="flex w-full cursor-pointer items-center justify-between gap-[12px] rounded-[10px] border border-white/[0.16] bg-white/[0.05] px-[14px] py-[10px] text-left font-inter text-[14px] text-white hover:border-[rgba(56,224,196,0.55)]">
                    {ADV_PARTNERS[advPartner]}
                    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] flex-shrink-0" fill="none" stroke="#38e0c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9.5l6 6 6-6" /></svg>
                  </button>
                  {partnersOpen && (
                    <div className="absolute left-0 right-0 top-full z-[5] mt-[6px] flex flex-col gap-[2px] rounded-[12px] border border-[rgba(56,224,196,0.4)] p-[6px] shadow-[0_24px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(56,224,196,0.16)] [background-color:#04413a] [background-image:radial-gradient(120%_90%_at_6%_0%,rgba(56,224,196,0.28),transparent_58%),radial-gradient(90%_120%_at_100%_100%,rgba(124,220,121,0.16),transparent_60%),linear-gradient(160deg,#075f55_0%,#00332f_72%)]">
                      {ADV_PARTNERS.map((p, i) => (
                        <button type="button" key={p} onClick={() => { setAdvPartner(i); setPartnersOpen(false); }} className="w-full cursor-pointer rounded-[8px] border-none px-[13px] py-[10px] text-left font-inter text-[13.5px] hover:bg-[rgba(56,224,196,0.16)] hover:text-white" style={{ background: i === advPartner ? "rgba(56,224,196,0.14)" : "transparent", color: i === advPartner ? "#FFFFFF" : "#c2dbd7", fontWeight: i === advPartner ? 600 : 400 }}>{p}</button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-[6px]">
                  <span className={ADV_LABEL}>SELECT DATE (UPCOMING SLOTS)</span>
                  <div className="flex flex-nowrap gap-[8px]">
                    {dates.map((d, i) => (
                      <button type="button" key={d.iso} onClick={() => setAdvDate(i)} className="flex-1 cursor-pointer whitespace-nowrap rounded-[9px] border px-[10px] py-[9px] font-inter text-[13px] font-semibold hover:border-[#38e0c4]" style={chip(i === advDate)}>{d.label}</button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <span className={ADV_LABEL}>AVAILABLE TIME SLOTS</span>
                  <div className="flex flex-nowrap gap-[8px]">
                    {ADV_SLOTS.map((label, i) => (
                      <button type="button" key={label} onClick={() => setAdvSlot(i)} className="flex-1 cursor-pointer whitespace-nowrap rounded-[9px] border px-[10px] py-[8px] font-inter text-[13px] font-semibold tracking-[0.01em] hover:border-[#38e0c4]" style={chip(i === advSlot)}>{label}</button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px]">
                  <label className="flex flex-col gap-[6px]"><span className={ADV_LABEL}>YOUR NAME</span><input required name="name" type="text" placeholder="Full name" className={ADV_FIELD} /></label>
                  <label className="flex flex-col gap-[6px]"><span className={ADV_LABEL}>ORGANISATION</span><input required name="org" type="text" placeholder="Company name" className={ADV_FIELD} /></label>
                  <label className="flex flex-col gap-[6px]"><span className={ADV_LABEL}>WORK EMAIL</span><input required name="email" type="email" placeholder="you@company.co.ke" className={ADV_FIELD} /></label>
                  <label className="flex flex-col gap-[6px]"><span className={ADV_LABEL}>MOBILE NUMBER</span><input name="phone" type="tel" placeholder="+254 700 000 000" className={ADV_FIELD} /></label>
                </div>

                <label className="flex flex-col gap-[6px]">
                  <span className={ADV_LABEL}>BRIEFING SCOPE</span>
                  <textarea name="agenda" rows={1} placeholder="vCIO, ERP advisory, NAWIRI, Agentic AI or Custom Software — and the decision you need to make." className={`${ADV_FIELD} resize-y leading-[1.55]`} />
                </label>

                {error && <p className="font-inter text-[12.5px] text-[#ffb4a8]">{error}</p>}
                <button type="submit" disabled={sending} className="w-full cursor-pointer rounded-[12px] border-none bg-[#38e0c4] px-[24px] py-[13px] font-sora text-[14.5px] font-bold tracking-[0.03em] text-[#06231e] hover:bg-[#5eead4] disabled:opacity-60">{sending ? "Securing…" : "Secure Advisory Reservation"}</button>
                <p className="mt-[4px] font-inter text-[12px] leading-[1.5] text-[#8fb3ae]">Ninety minutes, no charge, no obligation. Processed under our <Link href={routes.dataProtection} className="text-[#9EFF5A] hover:text-[#c4ff9e]">Data Protection Policy</Link>.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
