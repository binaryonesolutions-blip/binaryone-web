// "Download Company Profile" link shown on form success screens (19AUG design).
// Serves the PDF at /binaryone-company-profile.pdf as a direct download.
export default function CompanyProfileLink({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  const text = isDark ? "text-[#c7d0dc] hover:text-[#9EFF5A]" : "text-[#0b3d38] hover:text-[#17a892]";
  const stroke = isDark ? "#c7d0dc" : "#3e4947";
  return (
    <a
      href="/binaryone-company-profile.pdf"
      download
      target="_blank"
      rel="noopener"
      aria-label="View and download the company profile"
      className={`inline-flex items-center gap-[8px] font-inter text-[13.5px] font-medium underline underline-offset-[3px] [text-decoration-thickness:1px] ${text} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[21px] w-[21px] flex-shrink-0" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" stroke={stroke} />
        <path d="M14 3v5h5" stroke={stroke} />
        <path d="M12 11.5v5.5" stroke="#EC1C24" strokeWidth="2" />
        <path d="M9.4 14.6 12 17.2l2.6-2.6" stroke="#EC1C24" strokeWidth="2" />
      </svg>
      Download Company Profile
    </a>
  );
}
