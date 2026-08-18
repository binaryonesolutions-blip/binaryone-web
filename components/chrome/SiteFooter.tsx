import Link from "next/link";
import Image from "next/image";
import { routes } from "@/content/nav";
import logoDark from "@/public/assets/b1s-logo-dark.webp";

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
            <Image src={logoDark} alt="Binary One Solutions — Towards Digital Transformation" height={47} className="block h-[47px] w-auto" />
          </Link>
          <span className="inline-flex items-center gap-[9px] font-inter text-[15px] text-[#c7d0dc]">
            Possibilities
            <span className="b1-decorative h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#7cdc79] shadow-[0_0_4px_rgba(124,220,121,0.95),0_0_10px_rgba(124,220,121,0.55),0_0_18px_rgba(124,220,121,0.28)] [animation:b1-beacon_2.4s_ease-in-out_infinite]" />
            Realised
          </span>
          <div className="mt-[6px] flex items-center gap-[18px]">
            <a href="https://www.linkedin.com/company/binary1solutions/" target="_blank" rel="noopener" aria-label="LinkedIn" className="inline-flex text-[#c7d0dc] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
            </a>
            <a href="https://twitter.com/Binary_One_Sol" target="_blank" rel="noopener" aria-label="X (Twitter)" className="inline-flex text-[#c7d0dc] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" /></svg>
            </a>
            <a href="https://www.facebook.com/binary1solutions/" target="_blank" rel="noopener" aria-label="Facebook" className="inline-flex text-[#c7d0dc] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" /></svg>
            </a>
          </div>
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
          <a href={mapsHref} target="_blank" rel="noopener" className="text-[#8fa0b5] hover:text-white">St Charles Lwanga House,<br />Ngong Road, Nairobi</a>
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
