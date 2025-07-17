import Script from "next/script";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayyaan Nauman",
    alternateName: "Rayyaan",
    url: "https://rayyaan.dev",
    image: "https://rayyaan.dev/profile.png",
    sameAs: [
      "https://github.com/rayyaan",
      "https://linkedin.com/in/rayyaan-nauman",
      "https://twitter.com/rayyaan",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
      "Web Development",
      "Mobile App Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Computer Science University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan",
    },
  };

  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rayyaan Nauman - Full Stack Developer",
    alternateName: ["Rayyaan Developer", "Rayyaan Portfolio"],
    url: "https://rayyaan.dev",
    description:
      "Portfolio website of Rayyaan Nauman, a full stack developer specializing in Next.js, React Native, and Node.js with 175+ international clients.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://rayyaan.dev/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}