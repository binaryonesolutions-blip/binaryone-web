import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/content/nav";
import logoDark from "@/public/assets/b1s-logo-dark-crisp.webp";

// Standalone company-profile viewer (19AUG design "Company Profile Viewer"):
// branded header + Download PDF button over the profile embedded inline.
export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Binary One Solutions company profile — Managed IT, Virtual CIO, ERP consulting and digital products for Kenyan and East African organisations.",
  alternates: { canonical: "/company-profile" },
  robots: { index: false, follow: true },
};

const PDF = "/binaryone-company-profile.pdf";

export default function CompanyProfile() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#0b1b19] font-inter">
      {/* Header */}
      <div className="sticky top-0 z-[5] flex flex-shrink-0 items-center justify-between gap-[16px] border-b border-[rgba(56,224,196,0.22)] bg-[#04211e] px-[20px] py-[14px] sm:gap-[24px] sm:px-[28px] sm:py-[16px]">
        <div className="flex min-w-0 items-center gap-[12px] sm:gap-[16px]">
          <Link href={routes.home} className="inline-flex flex-shrink-0 items-center">
            <Image src={logoDark} alt="Binary One Solutions — Towards Digital Transformation" height={46} className="block h-[36px] w-auto flex-shrink-0 [image-rendering:-webkit-optimize-contrast] sm:h-[46px]" />
          </Link>
          <span className="hidden h-[26px] w-[1px] flex-shrink-0 bg-white/[0.16] sm:block" />
          <span className="hidden min-w-0 flex-col gap-[2px] sm:flex">
            <span className="whitespace-nowrap font-sora text-[14.5px] font-bold text-white">Company Profile</span>
            <span className="whitespace-nowrap font-jet text-[9.5px] font-semibold tracking-[0.18em] text-[#38e0c4]">A4 · 4 PAGES · 2026</span>
          </span>
        </div>
        <a href={PDF} download className="inline-flex flex-shrink-0 items-center gap-[10px] rounded-[999px] bg-[#9EFF5A] px-[18px] py-[10px] font-inter text-[13px] font-bold text-[#04211e] shadow-[0_2px_14px_rgba(158,255,90,0.24)] transition-[background,box-shadow] hover:bg-[#b6ff7d] hover:shadow-[0_3px_20px_rgba(158,255,90,0.36)] sm:px-[20px] sm:py-[11px]">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11" /><path d="M7.5 11.5 12 16l4.5-4.5" /><path d="M5 19.5h14" /></svg>
          Download PDF
        </a>
      </div>

      {/* Profile document (the designed A4 profile, matching the zip's viewer) */}
      <div className="flex min-h-0 flex-1 justify-center">
        <iframe src="/company-profile-document.html" title="Binary One Solutions company profile" className="block h-full w-full border-0 bg-[#0b1b19]" />
      </div>

      {/* Back */}
      <div className="flex flex-shrink-0 items-center justify-center border-t border-[rgba(56,224,196,0.18)] bg-[#04211e] px-[28px] py-[12px]">
        <Link href={routes.home} className="inline-flex items-center gap-[8px] font-inter text-[13px] font-medium text-[#c7d0dc] hover:text-[#9EFF5A]">
          <span className="text-[15px] leading-none">←</span>Back to binaryone.co.ke
        </Link>
      </div>
    </div>
  );
}
