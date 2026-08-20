"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { routes } from "@/content/nav";
import { submitAssessment } from "@/app/actions/forms";
import CompanyProfileLink from "@/components/util/CompanyProfileLink";

// Inline Free IT Assessment form on the Managed IT page (design §Free IT Assessment).
// Submits to the submitAssessment server action; success replaces the form in place.
const inputCls =
  "w-full box-border rounded-[10px] border border-[#E5E7EB] bg-white px-[16px] py-[13px] font-inter text-[15px] text-[#1c1b1b] outline-none focus:border-[#0f766e]";

export default function AssessmentForm() {
  const [state, action, pending] = useActionState(submitAssessment, null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errConsent, setErrConsent] = useState(false);
  const phoneNumeric = (e: React.FormEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    const v = el.value.replace(/[^0-9+ ]/g, "");
    if (v !== el.value) el.value = v;
  };
  function gate(e: React.FormEvent<HTMLFormElement>) {
    const okE = email.indexOf("@") > 0;
    const okC = consent;
    if (!okE || !okC) { e.preventDefault(); setErrEmail(!okE); setErrConsent(!okC); }
  }

  if (state?.ok) {
    return (
      <div className="flex flex-col items-start gap-[16px] py-[24px]">
        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#006e1b] font-inter text-[16.5px] lg:text-[20px] font-semibold text-white">✓</span>
        <h3 className="font-sora text-[24px] font-bold text-[#1c1b1b]">Thank you. Your request has been received.</h3>
        <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">Binary One will review the details and respond with the recommended next step.</p>
        <CompanyProfileLink tone="light" />
      </div>
    );
  }

  return (
    <form action={action} noValidate onSubmit={gate} className="flex flex-col gap-[16px]">
      <h3 className="mb-[4px] font-sora text-[22px] font-bold text-[#1c1b1b]">Book a Free IT Assessment</h3>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        <input required name="name" placeholder="Name *" className={inputCls} />
        <input required name="org" placeholder="Organisation *" className={inputCls} />
        <input required name="email" type="email" placeholder="Work email *" value={email} onChange={(e) => { setEmail(e.target.value); setErrEmail(false); }} className={inputCls} />
        <input required name="phone" type="tel" inputMode="numeric" onInput={phoneNumeric} placeholder="Phone *" className={inputCls} />
      </div>
      <input required name="users" type="number" placeholder="Number of users / workstations *" className={inputCls} />
      <select required name="concern" defaultValue="" className={`${inputCls} text-[#3e4947]`}>
        <option value="" disabled>Main concern *</option>
        <option>Cybersecurity</option>
        <option>Cost control</option>
        <option>Reliability &amp; uptime</option>
        <option>Cloud migration</option>
        <option>Compliance &amp; audit</option>
        <option>ERP fit</option>
        <option>Other</option>
      </select>
      <label className="flex cursor-pointer items-start gap-[10px] font-inter text-[13px] leading-[1.5]" style={{ color: errConsent ? "#c1121f" : "#3e4947" }}>
        <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setErrConsent(false); }} className="mt-[2px] [accent-color:#006e1b]" />
        <span>
          I consent to Binary One Solutions processing this information under their{" "}
          <Link href={routes.dataProtection} className="border-b border-[rgba(15,118,110,0.4)] text-[#0f766e] hover:text-[#12897f]">Data Protection Policy</Link>.
        </span>
      </label>
      {errEmail && <span className="font-inter text-[12.5px] font-medium leading-[1.5] text-[#c1121f]">Enter a valid email address, including @.</span>}
      {state?.error && <p className="font-inter text-[13.5px] text-[#c0392b]">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer rounded-[12px] bg-[#0f766e] px-[28px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.20),0_6px_16px_rgba(15,118,110,0.14)] hover:bg-[#0d655e] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send & confirm my slot"}
      </button>
    </form>
  );
}
