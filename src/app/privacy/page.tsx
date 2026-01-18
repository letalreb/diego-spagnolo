import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { canonicalUrl, site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa privacy (placeholder).",
  alternates: { canonical: canonicalUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
          Privacy
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
          Questa è una pagina placeholder. Inserisci qui la tua informativa (cookie, analytics,
          contatti, basi giuridiche, ecc.).
        </p>
        <p className="mt-4 text-sm text-black/60 dark:text-white/60">
          Contatto: hello@diegospagnolo.com · {site.url}
        </p>
      </Container>
    </Section>
  );
}
