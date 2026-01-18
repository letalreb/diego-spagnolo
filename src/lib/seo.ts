const fallbackSiteUrl = "https://www.diegospagnolo.com";

export const site = {
  name: "Diego Spagnolo",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl,
  locale: "it_IT",
  description:
    "Sito personale e portfolio: progetti, servizi e contatti. Realizzato con Next.js e ottimizzato per SEO.",
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
  };
}
