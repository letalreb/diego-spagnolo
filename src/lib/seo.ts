const fallbackSiteUrl = "https://www.diegospagnolo.com";

export const site = {
  name: "Diego Spagnolo",
  title: "Diego Spagnolo · Dottore Commercialista",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl,
  locale: "it_IT",
  description:
    "Dottore Commercialista iscritto all’ODCEC di Monza e Brianza (Sez. A n. 1707). Revisore Contabile iscritto al Registro dei Revisori Legali (n. 170144). Consulenza finanziaria aziendale.",
  twitter: "@",
};

export function canonicalUrl(pathname: string) {
  const base = site.url.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function jsonLdPerson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    sameAs: ["https://www.linkedin.com/in/diego-spagnolo/"],
    email: "mailto:diego.spagnolo.mi@gmail.com",
    telephone: "+39 339 4217253",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazza Roma, 30",
      addressLocality: "Giussano",
      addressRegion: "MB",
      postalCode: "20833",
      addressCountry: "IT",
    },
    jobTitle: [
      "Dottore Commercialista",
      "Revisore Contabile",
      "Consulente finanziario aziendale",
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        name: "ODCEC Monza e della Brianza – Sezione A",
        value: "n. 1707",
      },
      {
        "@type": "PropertyValue",
        name: "Registro dei Revisori Legali",
        value: "n. 170144",
      },
    ],
  };
}

export function jsonLdProfessionalService() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.title,
    url: site.url,
    areaServed: "IT",
    provider: jsonLdPerson(),
  };
}
