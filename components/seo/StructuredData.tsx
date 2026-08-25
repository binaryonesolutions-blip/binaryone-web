// Site-wide JSON-LD (schema.org). Rendered once in the root layout so every
// page carries the Organization + WebSite graph for search + AI engines.
const BASE = "https://binaryone.co.ke";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#organisation`,
      name: "Binary One Solutions Ltd",
      url: BASE,
      logo: `${BASE}/assets/b1s-logo-light.png`,
      image: `${BASE}/assets/it-icons-banner.png`,
      description:
        "Nairobi-based Managed IT, Virtual CIO, ERP consulting and NAWIRI loyalty solutions for growing Kenyan and East African organisations.",
      email: "info@binaryone.co.ke",
      telephone: "+254787990220",
      address: {
        "@type": "PostalAddress",
        streetAddress: "St Charles Lwanga House, 1st Floor, Ngong Road",
        addressLocality: "Nairobi",
        postalCode: "00100",
        addressCountry: "KE",
      },
      areaServed: ["Kenya", "East Africa"],
      foundingDate: "2014",
      slogan: "Possibilities Realised",
      priceRange: "$$",
      knowsAbout: [
        "Managed IT services",
        "Virtual CIO",
        "ERP consulting",
        "ERP implementation governance",
        "Digital loyalty",
        "Agentic AI",
        "Custom software development",
        "Cybersecurity",
        "Microsoft 365",
        "Odoo ERP",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254787990220",
        email: "info@binaryone.co.ke",
        contactType: "sales",
        areaServed: ["KE", "East Africa"],
        availableLanguage: ["English", "Swahili"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Binary One Solutions services",
        itemListElement: [
          { service: "Managed IT & Virtual CIO", url: `${BASE}/managed-it`, desc: "Structured Managed IT led by a Virtual CIO with a named IT Operations Lead — helpdesk, cybersecurity, Microsoft 365, networks and technology governance for medium and larger organisations." },
          { service: "ERP Consulting", url: `${BASE}/erp-consulting`, desc: "Vendor-neutral ERP readiness, selection and implementation governance across Odoo, SAP, Microsoft Dynamics and Sage — advice independent of any licence sale." },
          { service: "NAWIRI Digital Loyalty", url: `${BASE}/digital-products/nawiri`, desc: "Mobile-first last-mile loyalty platform connecting manufacturers to the mechanics, fundis, farmers and shopkeepers who choose their brand, with instant M-PESA and airtime rewards." },
          { service: "Agentic AI Workflows", url: `${BASE}/digital-products/agentic-ai`, desc: "Autonomous AI agents that act on your existing ERP and business systems — invoice capture, reconciliation, support triage — with a human approving every high-stakes step." },
          { service: "Custom Software Development", url: `${BASE}/digital-products/custom-software`, desc: "Bespoke high-performance enterprise web platforms, mobile apps and secure system integrations built on open standards." },
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.service,
            description: s.desc,
            url: s.url,
            provider: { "@id": `${BASE}/#organisation` },
            areaServed: ["Kenya", "East Africa"],
          },
        })),
      },
      sameAs: [
        "https://www.linkedin.com/company/binary1solutions/",
        "https://twitter.com/Binary_One_Sol",
        "https://www.facebook.com/binary1solutions/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Binary One Solutions",
      publisher: { "@id": `${BASE}/#organisation` },
      inLanguage: "en-GB",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
