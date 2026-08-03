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
      knowsAbout: [
        "Managed IT services",
        "Virtual CIO",
        "ERP consulting",
        "Digital loyalty",
        "Agentic AI",
        "Custom software development",
      ],
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
