import Link from "next/link";
import Image from "next/image";
import { primaryNav, routes } from "@/content/nav";
import ProductsDropdown from "./ProductsDropdown";
import MobileNav from "./MobileNav";
import logoLight from "@/public/assets/b1s-logo-light.png";

// Product routes that light up the Digital Products dropdown as active.
const PRODUCT_ROUTES: string[] = [
  routes.digitalProducts,
  routes.nawiri,
  routes.agenticAi,
  routes.customSoftware,
];

// Corporate header / nav pane (Developer Guide §6.1). `active` = route href of the
// current page; the matching link gets the 2px #006e1b active rule.
// `sticky` uses the blurred translucent variant (e.g. Managed IT page).
export default function SiteHeader({ active = "", sticky = false, solid = false }: { active?: string; sticky?: boolean; solid?: boolean }) {
  const productActive = PRODUCT_ROUTES.includes(active);
  const gutters = "px-5 sm:px-8 lg:px-[64px]";
  const base = `flex h-[76px] items-center justify-between border-b border-[#E0E5E6] ${gutters}`;
  const headerClass = solid
    ? `sticky top-0 z-50 ${base} bg-[#EDF1F2]`
    : sticky
      ? `sticky top-0 z-50 ${base} bg-[rgba(237,241,242,0.94)] [backdrop-filter:blur(12px)]`
      : `${base} bg-[#EDF1F2]`;
  return (
    <header className={headerClass}>
      <Link href={routes.home} className="flex items-center">
        <Image
          src={logoLight}
          alt="Binary One Solutions — Towards Digital Transformation"
          height={45}
          priority
          className="block h-[36px] w-auto sm:h-[45px]"
        />
      </Link>

      {/* Mobile drawer (< lg) */}
      <MobileNav active={active} />

      {/* Desktop nav (>= lg) */}
      <nav className="hidden items-center gap-[32px] font-inter text-[14.5px] font-medium lg:flex">
        {primaryNav.slice(0, 3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[#1c1b1b] ${active === item.href ? "border-b-2 border-[#006e1b] pb-[3px]" : ""}`}
          >
            {item.label}
          </Link>
        ))}

        <ProductsDropdown active={productActive} />

        {primaryNav.slice(3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[#1c1b1b] ${active === item.href ? "border-b-2 border-[#006e1b] pb-[3px]" : ""}`}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={routes.assessment}
          className="inline-flex items-center gap-[10px] rounded-[11px] border border-[rgba(56,224,196,0.75)] bg-[#d9f5ef] px-[20px] py-[11px] font-inter text-[14.5px] font-semibold text-[#06332e] shadow-[0_1px_2px_rgba(6,35,30,0.10),0_4px_14px_rgba(6,35,30,0.08)] transition-[background,border-color,box-shadow,transform] duration-[250ms] ease-in-out hover:-translate-y-[2px] hover:border-[#38e0c4] hover:bg-[#bfeee4] hover:shadow-[0_0_0_1px_rgba(56,224,196,0.6),0_0_22px_rgba(56,224,196,0.42),0_8px_20px_rgba(6,35,30,0.26)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M8 3v4" />
            <path d="M16 3v4" />
            <path d="M3 10h18" />
          </svg>
          Book a Free IT Assessment
        </Link>
      </nav>
    </header>
  );
}
