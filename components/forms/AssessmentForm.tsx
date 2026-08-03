"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/content/nav";

// Inline Free IT Assessment form on the Managed IT page (design §Free IT Assessment).
// Client + basic validation; success state replaces the form in place (Guide §8.3).
// Real delivery (info@binaryone.co.ke) is wired to the server action at deploy time.
const inputCls =
  "w-full box-border rounded-[10px] border border-[#E5E7EB] bg-white px-[16px] py-[13px] font-inter text-[15px] text-[#1c1b1b] outline-none focus:border-[#0f766e]";

export default function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-[16px] py-[24px]">
        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#006e1b] font-inter text-[16.5px] lg:text-[20px] font-semibold text-white">✓</span>
        <h3 className="font-sora text-[24px] font-bold text-[#1c1b1b]">Thank you. Your request has been received.</h3>
        <p className="font-inter text-[15.5px] leading-[1.65] text-[#3e4947]">Binary One will review the details and respond with the recommended next step.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-[16px]"
    >
      <h3 className="mb-[4px] font-sora text-[22px] font-bold text-[#1c1b1b]">Book a Free IT Assessment</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        <input required placeholder="Name *" className={inputCls} />
        <input required placeholder="Organisation *" className={inputCls} />
        <input required type="email" placeholder="Work email *" className={inputCls} />
        <input required type="tel" placeholder="Phone *" className={inputCls} />
      </div>
      <input required type="number" placeholder="Number of users / workstations *" className={inputCls} />
      <select required defaultValue="" className={`${inputCls} text-[#3e4947]`}>
        <option value="" disabled>Main concern *</option>
        <option>Cybersecurity</option>
        <option>Cost control</option>
        <option>Reliability &amp; uptime</option>
        <option>Cloud migration</option>
        <option>Compliance &amp; audit</option>
        <option>ERP fit</option>
        <option>Other</option>
      </select>
      <label className="flex cursor-pointer items-start gap-[10px] font-inter text-[13px] leading-[1.5] text-[#3e4947]">
        <input type="checkbox" required className="mt-[2px] [accent-color:#006e1b]" />
        <span>
          I consent to Binary One Solutions processing this information under their{" "}
          <Link href={routes.dataProtection} className="border-b border-[rgba(15,118,110,0.4)] text-[#0f766e] hover:text-[#12897f]">Data Protection Policy</Link>.
        </span>
      </label>
      <button
        type="submit"
        className="cursor-pointer rounded-[12px] bg-[#0f766e] px-[28px] py-[15px] font-inter text-[14.5px] lg:text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.20),0_6px_16px_rgba(15,118,110,0.14)] hover:bg-[#0d655e]"
      >
        Send &amp; confirm my slot
      </button>
    </form>
  );
}
