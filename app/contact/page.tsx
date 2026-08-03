import type { Metadata } from "next";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import ContactBody from "@/components/forms/ContactBody";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a senior consultant at Binary One Solutions. Book a Free IT Assessment or send a general enquiry — a response within one business day, triaged personally.",
};

export default function ContactPage() {
  return (
    <div data-skin="corporate" className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-[#F8FAFB] font-inter text-[#1c1b1b]">
      <SiteHeader sticky />

      {/* Hero strip */}
      <section className="border-b border-[#E5E7EB] px-5 sm:px-8 lg:px-[64px] pb-[48px] pt-[72px]">
        <h1 className="mb-[16px] font-sora text-[28px] sm:text-[36px] lg:text-[46px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1c1b1b]">Talk to a senior consultant.</h1>
        <p className="max-w-[760px] font-inter text-[15px] lg:text-[17px] leading-[1.65] text-[#3e4947] [text-wrap:pretty]">Not a bot, not a junior. A response within one business day. Every enquiry triaged personally by our Business Development Lead.</p>
      </section>

      <ContactBody />

      <SiteFooter />
    </div>
  );
}
