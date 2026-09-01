"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/content/nav";
import { FIELDS, packFor, type CounterKey } from "@/content/itReadiness";
import { submitReadiness } from "@/app/actions/forms";
import CompanyProfileLink from "@/components/util/CompanyProfileLink";

const FIELD =
  "w-full box-border rounded-[10px] border border-[#E5E7EB] bg-white px-[16px] py-[13px] font-inter text-[15px] text-[#1c1b1b] outline-none focus:border-[#0f766e]";

const ZERO: Record<CounterKey, number> = { computers: 0, laptops: 0, servers: 0, branches: 0, staff: 0 };

// Managed IT Readiness assessment (Guide §9). Live counters drive the summary and
// an indicative service-pack recommendation; submit shows the confirmation state.
export default function ItReadiness() {
  const [counts, setCounts] = useState<Record<CounterKey, number>>({ ...ZERO });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errConsent, setErrConsent] = useState(false);

  async function submit() {
    const okE = email.indexOf("@") > 0;
    const okP = phone.replace(/[^0-9]/g, "").length >= 9;
    const okC = consent;
    if (!name.trim() || !okE || !okP || !okC) {
      setErrEmail(!okE); setErrPhone(!okP); setErrConsent(!okC);
      setError(name.trim() ? "" : "Please enter your name.");
      return;
    }
    const { packName, packFit, packWhy } = packFor(counts);
    const fd = new FormData();
    fd.set("name", name); fd.set("org", org); fd.set("email", email); fd.set("phone", phone);
    (Object.keys(counts) as CounterKey[]).forEach((k) => fd.set(k, String(counts[k])));
    fd.set("pack", packName); fd.set("packFit", packFit || ""); fd.set("packWhy", packWhy);
    setError("");
    setSending(true);
    try {
      const res = await submitReadiness(null, fd);
      if (res.ok) setSent(true);
      else setError(res.error || "Something went wrong.");
    } catch {
      setError("Something went wrong. Please email info@binaryone.co.ke.");
    } finally {
      setSending(false);
    }
  }

  const cap = (k: CounterKey) => FIELDS.find((f) => f.key === k)!.max;
  const step = (k: CounterKey, d: number) => setCounts((c) => ({ ...c, [k]: Math.min(cap(k), Math.max(0, c[k] + d)) }));
  const put = (k: CounterKey, raw: string) => {
    const digits = raw.replace(/[^0-9]/g, "");
    const n = digits === "" ? 0 : Math.min(cap(k), parseInt(digits, 10));
    setCounts((c) => ({ ...c, [k]: n }));
  };

  const { packName, packFit, packWhy } = packFor(counts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-start gap-[32px] lg:gap-[48px] px-5 sm:px-8 lg:px-[64px] pb-[56px] lg:pb-[104px]">
      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-[40px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)]">
        {sent ? (
          <div className="flex flex-col items-start gap-[16px] py-[12px]">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#006e1b] font-inter text-[22px] font-semibold text-white">✓</span>
            <h3 className="font-sora text-[26px] font-bold text-[#1c1b1b]">Assessment received.</h3>
            <p className="font-inter text-[14.5px] lg:text-[16px] leading-[1.65] text-[#3e4947]">Based on your environment size, we will recommend a service pack and confirm your Free IT Assessment slot within one business day.</p>
            <div className="flex flex-col gap-[6px] rounded-[12px] border border-[#E5E7EB] bg-[#f6f3f2] px-[24px] py-[20px]">
              <span className="font-inter text-[12px] font-semibold tracking-[0.12em] text-[#6e7977]">INDICATIVE FIT</span>
              <span className="font-sora text-[16.5px] lg:text-[20px] font-bold text-[#0f766e]">{packName}</span>
              {packFit && <span className="font-inter text-[13px] font-semibold text-[#0f766e]">{packFit}</span>}
              <span className="font-inter text-[14px] leading-[1.5] text-[#3e4947]">{packWhy}</span>
            </div>
            <button onClick={() => { setSent(false); setCounts({ ...ZERO }); setName(""); setOrg(""); setEmail(""); setPhone(""); setConsent(false); setError(""); }} className="cursor-pointer border-none bg-transparent p-0 font-inter text-[14.5px] font-semibold text-[#005c55] [border-bottom:1.5px_solid_#005c55] hover:text-[#006e1b]">Start over</button>
            <CompanyProfileLink tone="light" className="self-end" />
          </div>
        ) : (
          <div className="flex flex-col gap-[26px]">
            {FIELDS.map((f) => (
              <div key={f.key} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-[20px] border-b border-[#E5E7EB] pb-[22px]">
                <div>
                  <span className="mb-[3px] block font-inter text-[14.5px] lg:text-[16.5px] font-semibold text-[#1c1b1b]">{f.label}</span>
                  <span className="block font-inter text-[13.5px] leading-[1.5] text-[#6e7977]">{f.hint}</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button onClick={() => step(f.key, -1)} className="h-[40px] w-[40px] cursor-pointer rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-white font-inter text-[15.5px] lg:text-[18px] font-semibold text-[#3e4947] hover:border-[#0f766e] hover:text-[#0f766e]">−</button>
                  <input type="text" inputMode="numeric" value={String(counts[f.key])} onChange={(e) => put(f.key, e.target.value)} aria-label={f.label} title={"max " + f.max} className="h-[40px] w-[74px] rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-white text-center font-sora text-[16.5px] lg:text-[20px] font-bold text-[#0f766e] outline-none focus:border-[#0f766e]" />
                  <button onClick={() => step(f.key, 1)} className="h-[40px] w-[40px] cursor-pointer rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-white font-inter text-[15.5px] lg:text-[18px] font-semibold text-[#3e4947] hover:border-[#0f766e] hover:text-[#0f766e]">+</button>
                </div>
              </div>
            ))}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" onChange={() => {}} value="" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
              <input placeholder="Name *" value={name} onChange={(e) => { setName(e.target.value); setError(""); }} className={FIELD} />
              <input placeholder="Organisation" value={org} onChange={(e) => setOrg(e.target.value)} className={FIELD} />
              <input placeholder="Work email *" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrEmail(false); }} className={FIELD} />
              <input placeholder="Phone *" type="tel" inputMode="numeric" value={phone} onChange={(e) => { setPhone(e.target.value.replace(/[^0-9+ ]/g, "")); setErrPhone(false); }} className={FIELD} style={errPhone ? { borderColor: "#c1121f" } : undefined} />
            </div>
            <label className="flex cursor-pointer items-start gap-[10px] font-inter text-[13px] leading-[1.5]" style={{ color: errConsent ? "#c1121f" : "#3e4947" }}>
              <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setErrConsent(false); }} className="mt-[2px] [accent-color:#006e1b]" />
              <span>I consent to Binary One Solutions processing this information under their <Link href={routes.dataProtection} className="text-[#0f766e] [border-bottom:1px_solid_rgba(15,118,110,0.4)] hover:text-[#12897f]">Data Protection Policy</Link>.</span>
            </label>
            {errEmail && <span className="font-inter text-[12.5px] font-medium leading-[1.5] text-[#c1121f]">Enter a valid email address, including @.</span>}
            {errPhone && <span className="font-inter text-[12.5px] font-medium leading-[1.5] text-[#c1121f]">Enter a phone number we can reach you on.</span>}
            {error && <p className="font-inter text-[13.5px] text-[#c0392b]">{error}</p>}
            <button onClick={submit} disabled={sending} className="cursor-pointer self-start rounded-[12px] border-none bg-[#0f766e] px-[28px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.20),0_6px_16px_rgba(15,118,110,0.14)] hover:bg-[#0d655e] disabled:opacity-60">{sending ? "Sending…" : "Submit my readiness profile"}</button>
          </div>
        )}
      </div>

      {/* Live summary */}
      <div className="lg:sticky lg:top-[100px] rounded-[16px] bg-[#00332f] p-[28px] sm:p-[36px]">
        <span className="mb-[20px] block font-jet text-[12px] font-medium tracking-[0.18em] text-[#7cdc79]">YOUR ENVIRONMENT</span>
        <div className="mb-[28px] flex flex-col gap-[14px]">
          {FIELDS.map((f) => (
            <div key={f.key} className="flex items-baseline justify-between border-b border-[rgba(248,250,251,0.12)] pb-[12px]">
              <span className="font-inter text-[14px] text-[#9fbcb7]">{f.label}</span>
              <span className="font-sora text-[16.5px] lg:text-[20px] font-bold text-white">{counts[f.key]}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[4px]">
          <span className="font-inter text-[12px] font-medium tracking-[0.08em] text-[#9fbcb7]">INDICATIVE SERVICE PACK</span>
          <span className="font-sora text-[26px] font-extrabold text-[#7cdc79]">{packName}</span>
          {packFit && <span className="font-inter text-[14px] font-semibold text-[#7cdc79]">{packFit}</span>}
          <span className="font-inter text-[13.5px] leading-[1.55] text-[#9fbcb7]">{packWhy}</span>
        </div>
      </div>
    </div>
  );
}
