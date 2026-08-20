import Link from "next/link";
import Image from "next/image";
import { routes } from "@/content/nav";
import logoDark from "@/public/assets/b1s-logo-dark-crisp.webp";

// Corporate footer (Developer Guide §6.4).
const solutions = [
  { label: "Managed IT", href: routes.managedIt },
  { label: "ERP Consulting", href: routes.erp },
  { label: "NAWIRI", href: routes.nawiri },
  { label: "Agentic AI", href: routes.agenticAi },
  { label: "Custom Software", href: routes.customSoftware },
];
const company = [
  { label: "About", href: routes.about },
  { label: "Leadership", href: `${routes.about}#leadership` },
  { label: "Insights", href: routes.insights },
  { label: "Careers", href: routes.enquiry },
];
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Binary+One+Solutions+Ngong+Road+Nairobi";

export default function SiteFooter() {
  return (
    <footer className="bg-[#071e1b] px-5 pb-[32px] pt-[56px] sm:px-8 lg:px-[64px] lg:pt-[64px]">
      <div className="grid grid-cols-1 gap-[40px] pb-[48px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-[48px] lg:pb-[56px]">
        {/* Brand */}
        <div className="flex flex-col items-start gap-[16px]">
          <Link href={routes.home} className="inline-flex items-center">
            <Image src={logoDark} alt="Binary One Solutions — Towards Digital Transformation" height={47} className="block h-[47px] w-auto [image-rendering:-webkit-optimize-contrast]" />
          </Link>
          <span className="inline-flex items-center gap-[9px] font-inter text-[15px] text-[#c7d0dc]">
            Possibilities
            <span className="b1-decorative h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#7cdc79] shadow-[0_0_4px_rgba(124,220,121,0.95),0_0_10px_rgba(124,220,121,0.55),0_0_18px_rgba(124,220,121,0.28)] [animation:b1-beacon_2.4s_ease-in-out_infinite]" />
            Realised
          </span>
          <div className="mt-[6px] flex items-center gap-[18px]">
            <a href="https://www.linkedin.com/company/binary1solutions/" target="_blank" rel="noopener" aria-label="LinkedIn" className="inline-flex text-[#c7d0dc] transition-[color,transform] duration-200 hover:scale-[1.15] hover:text-[#0A66C2]">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM7.12 20.45H3.56V9h3.56v11.45Z" /><path d="M5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Z" fill="#FFFFFF" /></svg>
            </a>
            <a href="https://twitter.com/Binary_One_Sol" target="_blank" rel="noopener" aria-label="X (Twitter)" className="inline-flex text-[#c7d0dc] transition-[color,transform] duration-200 hover:scale-[1.15] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" /></svg>
            </a>
            <a href="https://www.facebook.com/binary1solutions/" target="_blank" rel="noopener" aria-label="Facebook" className="inline-flex text-[#c7d0dc] transition-[color,transform] duration-200 hover:scale-[1.15] hover:text-[#1877F2]">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" /></svg>
            </a>
            <a href="https://wa.me/254787990220" target="_blank" rel="noopener" aria-label="WhatsApp" className="inline-flex text-[#c7d0dc] transition-[color,transform] duration-200 hover:scale-[1.15] hover:text-[#25D366]">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.79.97-.97 1.17-.18.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.15-.15.35-.4.52-.6.13-.15.2-.28.3-.47.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.35 2.98 1.16 3.29.99 3.88.94.6-.05 1.93-.79 2.2-1.56.27-.77.27-1.43.2-1.56-.08-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.21-3.67.96.98-3.58-.23-.37a9.67 9.67 0 0 1-1.48-5.16c0-5.35 4.36-9.7 9.72-9.7 2.6 0 5.03 1.01 6.86 2.85a9.63 9.63 0 0 1 2.84 6.86c0 5.35-4.36 9.7-9.72 9.7Zm8.27-17.98A11.62 11.62 0 0 0 12.05.6C5.63.6.41 5.82.41 12.23c0 2.05.54 4.05 1.56 5.82L.31 24l6.09-1.6a11.66 11.66 0 0 0 5.65 1.44h.01c6.42 0 11.64-5.22 11.64-11.63 0-3.11-1.21-6.03-3.38-8.2Z" /></svg>
            </a>
          </div>
          <a href="/binaryone-company-profile.pdf" download target="_blank" rel="noopener" aria-label="View and download the company profile" className="mt-[14px] inline-flex items-center gap-[8px] font-inter text-[13.5px] font-medium text-[#c7d0dc] underline underline-offset-[3px] [text-decoration-thickness:1px] hover:text-[#9EFF5A]">
            <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] flex-shrink-0" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" stroke="#c7d0dc" /><path d="M14 3v5h5" stroke="#c7d0dc" /><path d="M12 11.5v5.5" stroke="#EC1C24" strokeWidth="2" /><path d="M9.4 14.6 12 17.2l2.6-2.6" stroke="#EC1C24" strokeWidth="2" /></svg>
            Download Company Profile
          </a>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-[14px] font-inter text-[14.5px]">
          <span className="mb-[4px] font-inter text-[12px] font-semibold tracking-[0.12em] text-[#7cdc79]">SOLUTIONS</span>
          {solutions.map((l) => (
            <Link key={l.label} href={l.href} className="text-[#eef2f7] hover:text-white">{l.label}</Link>
          ))}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-[14px] font-inter text-[14.5px]">
          <span className="mb-[4px] font-inter text-[12px] font-semibold tracking-[0.12em] text-[#7cdc79]">COMPANY</span>
          {company.map((l, i) => (
            <Link key={i} href={l.href} className="text-[#eef2f7] hover:text-white">{l.label}</Link>
          ))}
          <Link href={routes.dataProtection} className="text-[#8fae9a] hover:text-[#c7d0dc]">Data Protection Policy</Link>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-[14px] font-inter text-[14.5px] leading-[1.5]">
          <span className="mb-[4px] font-inter text-[12px] font-semibold tracking-[0.12em] text-[#7cdc79]">CONNECT</span>
          <a href="mailto:info@binaryone.co.ke" className="text-[#eef2f7] hover:text-white">info@binaryone.co.ke</a>
          <a href="tel:+254787990220" className="text-[#eef2f7] hover:text-white">+254 787 990 220</a>
          <a href={mapsHref} target="_blank" rel="noopener" className="text-[#8fa0b5] hover:text-white"><svg viewBox="0 0 24 24" className="mr-[6px] inline-block h-[13px] w-[13px] flex-shrink-0 align-[-2px] opacity-75" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="10" r="2.4" /></svg>St Charles Lwanga House,<br />Ngong Road, Nairobi</a>
          <a href={mapsHref} target="_blank" rel="noopener" className="-mt-[6px] text-[13.5px] leading-[1.5] text-[#c7d0dc] underline underline-offset-[3px] hover:text-white">Find us on Google →</a>
        </div>
      </div>

      <div className="flex flex-col gap-[14px] border-t border-white/10 pt-[28px] font-inter text-[14px] text-[#8fa0b5] sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <span>© 2026 Binary One Solutions Ltd · Nairobi, Kenya</span>
        <Link href={routes.enquiry} className="font-semibold text-white hover:text-[#c7d0dc]">Talk to a consultant →</Link>
      </div>
    </footer>
  );
}
