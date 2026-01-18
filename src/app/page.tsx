import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects, services } from "@/content/site";
import { jsonLdPerson, site } from "@/lib/seo";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson()) }}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(700px_circle_at_80%_20%,rgba(16,185,129,0.18),transparent_55%)] dark:opacity-50" />

        <Section className="pt-16 sm:pt-24">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal>
                <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  Next.js · SEO · Performance · AI
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                  Un sito veloce, pulito e pronto per crescere.
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-black/70 dark:text-white/70">
                  Creo esperienze web moderne ottimizzate per ricerca, conversione e automazioni.
                  Questo progetto è una base Next.js pensata per SEO e un assistente AI integrato.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    Parliamone
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Vedi progetti
                  </a>
                </div>
                <div className="mt-8 grid gap-2 text-sm text-black/70 dark:text-white/70 sm:grid-cols-2">
                  {[
                    "Core Web Vitals + performance budget",
                    "Metadata e structured data",
                    "Sitemap/robots + canonical",
                    "Assistente AI configurabile",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-black/5 p-4 text-sm text-black/80 dark:bg-white/10 dark:text-white/80">
                      <div className="text-xs text-black/60 dark:text-white/60">
                        AI agent demo
                      </div>
                      <div className="mt-1 font-medium">Chiedi: “Che servizi offri?”</div>
                      <div className="mt-2 text-black/60 dark:text-white/60">
                        Il widget in basso a destra usa /api/agent.
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">SEO</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Struttura
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">DX</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          TS + App Router
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Perf</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Minimal JS
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Deploy</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Vercel-ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section id="about">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                Chi sono
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
                Sono Diego Spagnolo. Mi occupo di sviluppo web e ottimizzazione: costruisco siti
                veloci e mantenibili, con attenzione a SEO tecnico, accessibilità e qualità del
                codice.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
                Questo repository è una base moderna con Next.js + integrazione AI: puoi adattarla
                ai tuoi contenuti e pubblicarla rapidamente.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section id="projects" className="bg-black/[0.02] dark:bg-white/[0.03]">
          <Container>
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                    Progetti
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-black/70 dark:text-white/70">
                    Alcuni esempi (placeholder): sostituiscili con case study reali.
                  </p>
                </div>
                <a
                  href={site.url}
                  className="hidden text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white sm:inline"
                >
                  {site.url.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((p, idx) => (
                <Reveal key={p.title} delay={0.05 * idx}>
                  <a
                    href={p.href}
                    className="group block rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm dark:border-white/10 dark:bg-black dark:hover:border-white/20"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {p.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-black/40 transition group-hover:translate-x-0.5 dark:text-white/40" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="services">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                Servizi
              </h2>
              <p className="mt-3 max-w-2xl text-base text-black/70 dark:text-white/70">
                Interventi concreti e misurabili, dalla base tecnica alla pubblicazione.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((s, idx) => (
                <Reveal key={s.title} delay={0.04 * idx}>
                  <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="contact" className="bg-black/[0.02] dark:bg-white/[0.03]">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-black sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                  Contatti
                </h2>
                <p className="mt-3 max-w-2xl text-base text-black/70 dark:text-white/70">
                  Hai un progetto o vuoi rifare il sito? Scrivimi due righe e ti rispondo con una
                  proposta chiara (tempi, costi e priorità).
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@diegospagnolo.com"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    hello@diegospagnolo.com
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/[0.02] dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/10"
                  >
                    Calendario (opzionale)
                  </button>
                </div>
                <p className="mt-4 text-xs text-black/50 dark:text-white/50">
                  Nota: il widget AI è una demo; in produzione va collegato al tuo knowledge base.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </div>
    </>
  );
}
