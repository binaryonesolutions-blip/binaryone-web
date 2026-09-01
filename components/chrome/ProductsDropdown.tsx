"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { productsDropdown } from "@/content/nav";

// Icon paths copied verbatim from the design file (Guide §5: no icon libraries).
function DropdownIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 20,
    height: 20,
    fill: "none",
    stroke: "#0f766e",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { display: "block" },
  };
  switch (name) {
    case "nawiri":
      return (
        <svg {...common}>
          <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5 10.1 7.6z" />
          <path d="M18.5 14.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
        </svg>
      );
    case "agentic":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
          <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 14h2M19 9h2M19 14h2" />
        </svg>
      );
    case "custom":
      return (
        <svg {...common}>
          <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
        </svg>
      );
    case "hub":
    default:
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}

export default function ProductsDropdown({ active = false }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex cursor-pointer list-none items-center gap-[6px] font-inter text-[14.5px] font-medium text-[#1c1b1b] ${
          active ? "border-b-2 border-[#006e1b] pb-[3px]" : ""
        }`}
      >
        Digital Products
        <span className={`text-[10px] text-[#3e4947] transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="absolute left-1/2 top-[34px] z-[100] w-[408px] -translate-x-1/2 whitespace-normal rounded-[12px] border border-[#E5E7EB] bg-white pt-[18px] pb-[8px] shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <span className="block border-b border-[#E5E7EB] px-[24px] pb-[14px] pt-[2px] font-jet text-[11px] font-bold tracking-[0.14em] text-[#0f766e]">
            DIGITAL SOLUTIONS &amp; PLATFORMS
          </span>
          <div className="pt-[8px]">
            {productsDropdown.map((row) => (
              <Link
                key={row.title}
                href={row.href}
                onClick={() => setOpen(false)}
                className={`flex items-start gap-[13px] px-[24px] py-[11px] transition-colors hover:bg-[#f1f5f4] ${
                  row.divided ? "mx-[24px] mt-[8px] border-t border-[#E5E7EB] px-0 pt-[18px]" : ""
                }`}
              >
                <span className="mt-[1px] inline-flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#eef4f3]">
                  <DropdownIcon name={row.icon} />
                </span>
                <span className="block">
                  <span className="mb-[2px] block font-inter text-[15px] font-bold text-[#0c1512]">{row.title}</span>
                  <span className="block font-inter text-[13px] leading-[1.4] text-[#6e7977]">{row.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
