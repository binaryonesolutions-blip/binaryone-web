"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav, productsDropdown, routes } from "@/content/nav";

// Slide-in drawer nav for the corporate/product header below the lg breakpoint.
// Structural positioning is inline-styled so it never depends on Tailwind having
// generated new utilities (dev HMR can lag on new files); Tailwind handles cosmetics.
export default function MobileNav({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkCls = (href: string) =>
    `block rounded-[10px] px-[14px] py-[12px] font-inter text-[14.5px] lg:text-[16px] font-medium ${
      active === href ? "bg-[#d9f5ef] text-[#06332e]" : "text-[#1c1b1b] hover:bg-black/[0.04]"
    }`;

  return (
    <div className="min-[1180px]:hidden">
      {/* Hamburger only in the mobile bar; the Book CTA lives inside the drawer. */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-[10px] text-[#1c1b1b] hover:bg-black/[0.05]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(0,0,0,0.45)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 300ms ease",
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="flex flex-col overflow-y-auto bg-[#F4F7F8]"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "320px",
          maxWidth: "85vw",
          zIndex: 100,
          boxShadow: "-8px 0 30px rgba(6,35,30,0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-out",
        }}
      >
        <div className="flex items-center justify-between border-b border-[#E0E5E6] px-[20px] py-[16px]">
          <span className="font-sora text-[15px] font-bold tracking-[0.02em] text-[#06332e]">MENU</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] text-[#1c1b1b] hover:bg-black/[0.05]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-[2px] px-[12px] py-[14px]" onClick={() => setOpen(false)}>
          {primaryNav.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className={linkCls(item.href)}>
              {item.label}
            </Link>
          ))}

          <span className="mt-[12px] px-[14px] pb-[4px] font-jet text-[11px] font-medium uppercase tracking-[0.14em] text-[#6e7977]">
            Digital Products
          </span>
          {productsDropdown.map((row) => (
            <Link key={row.href} href={row.href} className={linkCls(row.href)}>
              {row.title}
            </Link>
          ))}

          {primaryNav.slice(3).map((item) => (
            <Link key={item.href} href={item.href} className={`mt-[2px] ${linkCls(item.href)}`}>
              {item.label}
            </Link>
          ))}

          <Link
            href={routes.assessment}
            className="mt-[18px] inline-flex items-center justify-center gap-[10px] rounded-[11px] border border-[rgba(56,224,196,0.75)] bg-[#d9f5ef] px-[20px] py-[13px] font-inter text-[15px] font-semibold text-[#06332e] shadow-[0_1px_2px_rgba(6,35,30,0.10)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M8 3v4" />
              <path d="M16 3v4" />
              <path d="M3 10h18" />
            </svg>
            Book a Free IT Assessment
          </Link>

          <a
            href={routes.companyProfile}
            target="_blank"
            rel="noopener"
            className="mt-[10px] inline-flex items-center justify-center gap-[8px] rounded-[11px] px-[20px] py-[12px] font-inter text-[14px] font-medium text-[#0b3d38] underline underline-offset-[3px] [text-decoration-thickness:1px] hover:text-[#17a892]"
          >
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] flex-shrink-0" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" stroke="#3e4947" />
              <path d="M14 3v5h5" stroke="#3e4947" />
              <path d="M12 11.5v5.5" stroke="#EC1C24" strokeWidth="2" />
              <path d="M9.4 14.6 12 17.2l2.6-2.6" stroke="#EC1C24" strokeWidth="2" />
            </svg>
            Download Company Profile
          </a>
        </nav>
      </aside>
    </div>
  );
}
