"use client";

import { useState } from "react";
import { submitDsar } from "@/app/actions/forms";
import Link from "next/link";
import { routes } from "@/content/nav";
import { navDefs, pillars, sections, rights, type NavIcon, type PillarIcon } from "@/content/dataProtection";

function Icon({ name, size = 17 }: { name: NavIcon | PillarIcon; size?: number }) {
  const paths: Record<string, string[]> = {
    shield: ["M12 3 20 6.5v5c0 4.5-3.4 7.9-8 9.5-4.6-1.6-8-5-8-9.5v-5z"],
    file: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z", "M14 3v5h5"],
    user: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M5 20a7 7 0 0 1 14 0"],
    key: ["M15.5 8.5a3.5 3.5 0 1 1-4.6 3.3L4 19v2h2v-2h2v-2h2l1.3-1.3a3.5 3.5 0 0 1 4.2-6.9Z", "M16.5 8.2h.01"],
    lock: ["M6 10V8a6 6 0 0 1 12 0v2", "M5 10h14v10H5z"],
    db: ["M12 8c5 0 8-1.3 8-3s-3-3-8-3-8 1.3-8 3 3 3 8 3Z", "M4 5v14c0 1.7 3 3 8 3s8-1.3 8-3V5", "M4 12c0 1.7 3 3 8 3s8-1.3 8-3"],
    check: ["M20 6.5v5c0 4.5-3.4 7.9-8 9.5-4.6-1.6-8-5-8-9.5v-5L12 3z", "m9 12 2 2 4-4"],
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

const FIELD = "w-full box-border rounded-[9px] border border-[#E5E7EB] bg-[#f8fafc] px-[12px] py-[11px] font-inter text-[13px] text-[#0f172a]";
const FLABEL = "font-inter text-[11px] font-bold tracking-[0.08em] text-[#64748b]";

export default function DataProtectionBody() {
  const [tab, setTab] = useState<"overview" | "full" | "rights" | "portal">("overview");
  const [requestType, setRequestType] = useState("access");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [declaration, setDeclaration] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticket, setTicket] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const goto = (t: typeof tab) => {
    setTab(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(fullName && email && declaration)) return;
    const t = "DSAR-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    setError("");
    setSending(true);
    const fd = new FormData();
    fd.set("name", fullName);
    fd.set("email", email);
    fd.set("phone", phone);
    fd.set("type", requestType);
    fd.set("details", details);
    fd.set("ticket", t);
    try {
      const res = await submitDsar(null, fd);
      if (res.ok) {
        setTicket(t);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else setError(res.error || "Something went wrong.");
    } catch {
      setError("Something went wrong. Please email info@binaryone.co.ke.");
    } finally {
      setSending(false);
    }
  };
  const reset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setDetails("");
    setDeclaration(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] items-start gap-[32px] px-5 sm:px-8 lg:px-[64px] pb-[96px] pt-[56px]">
      {/* Left column */}
      <div className="sticky top-[100px] flex flex-col gap-[20px]">
        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-[16px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="mb-[10px] px-[8px] font-inter text-[10px] font-bold tracking-[0.12em] text-[#94a3b8]">POLICY NAVIGATION</p>
          <div className="flex flex-col gap-[4px]">
            {navDefs.map((n) => {
              const active = tab === n.key;
              return (
                <button
                  key={n.key}
                  onClick={() => goto(n.key)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-[9px] border-none px-[13px] py-[11px] text-left font-inter text-[13px] transition-all ${
                    active ? "bg-[rgba(0,110,27,0.08)] font-semibold text-[#054d18] [border-left:3px_solid_#006e1b]" : "bg-transparent font-medium text-[#475569] [border-left:3px_solid_transparent]"
                  }`}
                >
                  <span className="inline-flex items-center gap-[10px]">
                    <span className="inline-flex" style={{ color: active ? "#0a8f28" : "#94a3b8" }}><Icon name={n.icon} /></span>
                    {n.label}
                  </span>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[16px] bg-[#0c1c2b] p-[22px] text-white">
          <svg viewBox="0 0 24 24" width="130" height="130" fill="none" stroke="#22a45a" strokeWidth="1.4" className="absolute -bottom-[24px] -right-[24px] opacity-10"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>
          <h4 className="mb-[10px] font-inter text-[11px] font-bold tracking-[0.12em] text-[#7cdc79]">ODPC REGISTERED</h4>
          <p className="relative mb-[16px] font-inter text-[12.5px] leading-[1.6] text-[#c7d0dc]">Binary One is registered as a Data Controller and Data Processor with the Office of the Data Protection Commissioner (ODPC) in Nairobi, Kenya.</p>
          <div className="flex items-center gap-[8px] border-t border-white/[0.12] pt-[12px] font-inter text-[11px] font-medium text-[#93a4b3]">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M4 21h17M8 8h3M8 12h3M8 16h3" /></svg>
            Registration: ODPC-2024/B1S-ADVISORY
          </div>
        </div>
      </div>

      {/* Right column */}
      <div>
        {tab === "overview" && (
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-[36px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="mb-[12px] font-sora text-[27px] font-bold leading-[1.2] tracking-[-0.01em] text-[#0f172a]">Executive Policy Summary</h2>
            <p className="mb-[32px] font-inter text-[15px] leading-[1.65] text-[#475569] [text-wrap:pretty]">This Data Protection Policy outlines how Binary One Solutions Ltd (referred to as &quot;Binary One&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles, processes, and protects the personal data of our clients, website visitors, partners, and personnel.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-[14px] border border-[#eef1f4] bg-[#fafbfc] p-[22px]">
                  <span className="mb-[14px] inline-flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[rgba(0,110,27,0.09)] text-[#0f766e]"><Icon name={p.icon} size={16} /></span>
                  <h3 className="mb-[7px] font-inter text-[15px] font-semibold text-[#0f172a]">{p.title}</h3>
                  <p className="font-inter text-[13px] leading-[1.6] text-[#64748b] [text-wrap:pretty]">{p.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-[26px] flex items-start gap-[14px] rounded-[14px] border border-[rgba(0,110,27,0.15)] bg-[rgba(0,110,27,0.05)] px-[22px] py-[20px]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0a8f28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] flex-shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
              <div>
                <h4 className="mb-[5px] font-inter text-[13px] font-semibold text-[#054d18]">Fiduciary Commitment to Clients</h4>
                <p className="font-inter text-[13px] leading-[1.65] text-[#334155] [text-wrap:pretty]">In our capacity as independent advisors, Binary One often audits massive, complex databases of our clients (ERP, billing logs, and Loyalty Programme member data). During these rescue audits, we act strictly as a <strong>Data Processor</strong> bound by rigorous NDA frameworks. All audit workspaces are completely isolated, encrypted, and systematically deleted upon project sign-off.</p>
              </div>
            </div>
            <div className="mt-[26px] flex items-center justify-between gap-[16px] border-t border-[#eef1f4] pt-[22px]">
              <p className="font-inter text-[13px] text-[#64748b]">Need immediate assistance regarding your data rights?</p>
              <button onClick={() => goto("portal")} className="inline-flex cursor-pointer items-center gap-[7px] rounded-[9px] border-none bg-[#0c1c2b] px-[18px] py-[11px] font-inter text-[13px] font-semibold text-white hover:bg-[#16283a]">Submit Data Request <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            </div>
          </div>
        )}

        {tab === "full" && (
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-[36px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="mb-[24px] font-sora text-[27px] font-bold leading-[1.2] tracking-[-0.01em] text-[#0f172a]">Data Protection Policy Statement</h2>
            <div className="flex flex-col gap-[26px]">
              {sections.map((s) => (
                <section key={s.head}>
                  <h3 className="mb-[8px] font-inter text-[13px] font-bold tracking-[0.08em] text-[#0f172a]">{s.head}</h3>
                  <p className="font-inter text-[14px] leading-[1.7] text-[#475569] [text-wrap:pretty]">{s.body}</p>
                  {s.list.length > 0 && (
                    <ul className="mt-[10px] flex list-disc flex-col gap-[6px] pl-[20px]">
                      {s.list.map((li) => <li key={li} className="font-inter text-[13px] leading-[1.6] text-[#475569]">{li}</li>)}
                    </ul>
                  )}
                </section>
              ))}
              <div className="rounded-[12px] border border-[#E5E7EB] bg-[#f8fafc] px-[20px] py-[18px] font-jet text-[13px] font-medium leading-[1.7]">
                <p className="font-bold text-[#0f172a]">Binary One Solutions Limited</p>
                <p className="mt-[2px] text-[#64748b]">Attn: Data Protection concerns</p>
                <p className="mt-[2px] text-[#64748b]">St Charles Lwanga House, 1st Floor, Ngong Road</p>
                <p className="mt-[2px] text-[#64748b]">P.O. Box 52883 (00100), Nairobi, Kenya</p>
                <p className="mt-[8px] font-bold text-[#0a8f28]">Email: info@binaryone.co.ke</p>
              </div>
            </div>
          </div>
        )}

        {tab === "rights" && (
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-[36px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="mb-[10px] font-sora text-[27px] font-bold leading-[1.2] tracking-[-0.01em] text-[#0f172a]">Statutory Data Subject Rights</h2>
            <p className="mb-[28px] font-inter text-[15px] leading-[1.65] text-[#475569] [text-wrap:pretty]">The Kenya Data Protection Act, 2019 guarantees you several fundamental rights regarding how your personal information is treated. You can invoke these rights at any time.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              {rights.map((r) => (
                <div key={r.title} className="flex flex-col gap-[9px] rounded-[14px] border border-[#E5E7EB] p-[20px] hover:border-[rgba(0,110,27,0.35)]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[rgba(0,110,27,0.08)] text-[#0a8f28]"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg></span>
                    <span className="font-jet text-[10px] text-[#94a3b8]">{r.section}</span>
                  </div>
                  <h3 className="font-inter text-[15px] font-semibold text-[#0f172a]">{r.title}</h3>
                  <p className="font-inter text-[13px] leading-[1.6] text-[#64748b] [text-wrap:pretty]">{r.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-[24px] flex items-start gap-[14px] rounded-[14px] border border-[#fde68a] bg-[#fffbeb] px-[22px] py-[20px]">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] flex-shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
              <div>
                <h4 className="mb-[5px] font-inter text-[13px] font-semibold text-[#78350f]">Filing a Formal Complaint</h4>
                <p className="font-inter text-[13px] leading-[1.65] text-[#57534e] [text-wrap:pretty]">If you feel that Binary One has not addressed your data protection request satisfactorily, lodge it formally through our <button onClick={() => goto("portal")} className="cursor-pointer border-none bg-transparent p-0 font-semibold text-[#78350f] hover:text-[#57534e]">Data Request Portal</button> above. You may also write to us at <a href="mailto:info@binaryone.co.ke" className="font-semibold text-[#78350f] hover:text-[#57534e]">info@binaryone.co.ke</a> and we will work to resolve it amicably.</p>
              </div>
            </div>
          </div>
        )}

        {tab === "portal" && (
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-[36px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h2 className="mb-[10px] font-sora text-[27px] font-bold leading-[1.2] tracking-[-0.01em] text-[#0f172a]">Data Subject Access Request (DSAR) Portal</h2>
            <p className="mb-[28px] font-inter text-[15px] leading-[1.65] text-[#475569] [text-wrap:pretty]">Use this secure portal to request a copy of your records, submit updates for rectifications, or ask for account deletion under the Kenya Data Protection Act, 2019.</p>
            {submitted ? (
              <div className="rounded-[16px] border border-[rgba(0,110,27,0.2)] bg-[rgba(0,110,27,0.05)] p-[40px] text-center">
                <span className="mb-[16px] inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0a8f28] text-white"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-11" /></svg></span>
                <h3 className="mb-[8px] font-sora text-[15.5px] lg:text-[18px] font-bold text-[#054d18]">Data Access Request Submitted</h3>
                <p className="mx-auto mb-[14px] max-w-[440px] font-inter text-[13px] leading-[1.65] text-[#475569]">Your request has been received by our Data Protection Officer. We are legally bound to review and respond to valid DSAR applications within <strong>30 calendar days</strong>.</p>
                <p className="mb-[20px] font-jet text-[11px] font-medium text-[#94a3b8]">Reference Ticket ID: {ticket}</p>
                <button onClick={reset} className="cursor-pointer rounded-[9px] border-none bg-[#0c1c2b] px-[20px] py-[11px] font-inter text-[13px] font-semibold text-white hover:bg-[#16283a]">Submit Another Request</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-[18px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  <label className="flex flex-col gap-[7px]">
                    <span className={FLABEL}>REQUEST TYPE</span>
                    <select value={requestType} onChange={(e) => setRequestType(e.target.value)} className={`${FIELD} font-medium`}>
                      <option value="access">Right of Access (Download my data)</option>
                      <option value="rectification">Right of Rectification (Correct errors)</option>
                      <option value="erasure">Right of Erasure (Delete my records)</option>
                      <option value="objection">Right of Objection (Stop processing)</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-[7px]">
                    <span className={FLABEL}>FULL NAME *</span>
                    <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jina Lako" className={FIELD} />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  <label className="flex flex-col gap-[7px]">
                    <span className={FLABEL}>EMAIL ADDRESS *</span>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.co.ke" className={FIELD} />
                  </label>
                  <label className="flex flex-col gap-[7px]">
                    <span className={FLABEL}>TELEPHONE NUMBER</span>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 000 000" className={FIELD} />
                  </label>
                </div>
                <label className="flex flex-col gap-[7px]">
                  <span className={FLABEL}>DETAILS OF REQUEST</span>
                  <textarea rows={4} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Please specify details of data you would like to access, correct, or erase to assist our DPO team in processing..." className={`${FIELD} resize-none`} />
                </label>
                <label className="flex cursor-pointer items-start gap-[10px]">
                  <input type="checkbox" required checked={declaration} onChange={(e) => setDeclaration(e.target.checked)} className="mt-[2px] h-[15px] w-[15px] flex-shrink-0 [accent-color:#0a8f28]" />
                  <span className="font-inter text-[11.5px] leading-[1.6] text-[#64748b]">I declare that I am the authorized data subject (or legal representative) and the information supplied in this request form is accurate under the penalty of perjury as specified in the Kenya DPA, 2019.</span>
                </label>
                <div className="flex justify-end">
                  <button type="submit" disabled={sending} className="inline-flex cursor-pointer items-center gap-[8px] rounded-[9px] border-none bg-[#0a8f28] px-[24px] py-[12px] font-inter text-[13px] font-bold text-white hover:bg-[#087a22] disabled:opacity-60">{sending ? "Submitting…" : "Submit Request Form"} <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
                  {error && <p className="mt-[8px] font-inter text-[13px] text-[#c0392b]">{error}</p>}
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
