import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { areas, services } from "@/content/site";
import { jsonLdPerson, jsonLdProfessionalService, site } from "@/lib/seo";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdProfessionalService()),
        }}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(900px_circle_at_20%_10%,rgba(37,99,235,0.22),transparent_60%),radial-gradient(700px_circle_at_80%_20%,rgba(245,158,11,0.18),transparent_55%)] dark:opacity-50" />

        <Section className="pt-16 sm:pt-24">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal>
                <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  Dottore Commercialista · Revisore Contabile · Finanza aziendale
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                  Chiarezza, metodo e numeri: supporto per imprese e professionisti.
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-black/70 dark:text-white/70">
                  Dott. Diego Spagnolo — Dottore Commercialista iscritto all’ODCEC di Monza e della
                  Brianza (Sez. A n. 1707), Revisore Contabile iscritto al Registro dei Revisori
                  Legali (n. 170144), Consulente finanziario aziendale.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    Richiedi un contatto
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Vedi servizi
                  </a>
                </div>
                <div className="mt-8 grid gap-2 text-sm text-black/70 dark:text-white/70 sm:grid-cols-2">
                  {[
                    "Consulenza contabile e fiscale",
                    "Bilanci e supporto societario",
                    "Revisione contabile",
                    "Consulenza finanziaria aziendale",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-black/5 p-4 text-sm text-black/80 dark:bg-white/10 dark:text-white/80">
                      <div className="text-xs text-black/60 dark:text-white/60">Studio</div>
                      <div className="mt-1 font-medium">Dott. Diego Spagnolo</div>
                      <div className="mt-2 text-black/60 dark:text-white/60">
                        ODCEC Monza e Brianza — Sez. A n. 1707 · Revisori Legali n. 170144
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Metodo</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Approccio chiaro
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Operatività</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Supporto continuo
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Controllo</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Revisione
                        </div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                        <div className="text-xs text-black/60 dark:text-white/60">Finanza</div>
                        <div className="mt-1 text-sm font-semibold text-black dark:text-white">
                          Pianificazione
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black/70 dark:border-white/10 dark:bg-black dark:text-white/70">
                      <span className="font-medium text-black dark:text-white">Hai una domanda?</span>{" "}
                      Puoi usare l’assistente (in basso a destra) per informazioni generali e per
                      capire come contattare lo Studio.
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
                Lo Studio
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
                Sono Diego Spagnolo, Dottore Commercialista e Revisore Contabile. Affianco
                imprese e professionisti con un approccio pratico: capire i numeri, impostare un
                metodo e prendere decisioni migliori.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
                Le attività includono consulenza contabile e fiscale, supporto societario, revisione
                contabile e consulenza finanziaria aziendale.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section id="areas" className="bg-black/[0.02] dark:bg-white/[0.03]">
          <Container>
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                    Aree di attività
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-black/70 dark:text-white/70">
                    Ambiti principali di intervento e supporto.
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
              {areas.map((p, idx) => (
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
                Interventi concreti e impostazione chiara, in base alle esigenze.
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

        <Section id="credentials">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
                Credenziali
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70">
                Dottore Commercialista iscritto all’ODCEC di Monza e della Brianza — Sezione A
                n. 1707. Revisore Contabile iscritto al Registro dei Revisori Legali con numero
                progressivo 170144.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
                  <div className="text-xs text-black/60 dark:text-white/60">ODCEC</div>
                  <div className="mt-1 text-base font-semibold text-black dark:text-white">
                    Monza e della Brianza · Sezione A
                  </div>
                  <div className="mt-2 text-sm text-black/70 dark:text-white/70">Iscrizione n. 1707</div>
                </div>
                <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
                  <div className="text-xs text-black/60 dark:text-white/60">Revisori Legali</div>
                  <div className="mt-1 text-base font-semibold text-black dark:text-white">
                    Registro dei Revisori Legali
                  </div>
                  <div className="mt-2 text-sm text-black/70 dark:text-white/70">
                    Numero progressivo 170144
                  </div>
                </div>
              </div>
            </Reveal>
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
                  Vuoi fissare un primo contatto o chiedere informazioni? Scrivi due righe:
                  risponderò con indicazioni chiare sul prossimo passo.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:diego.spagnolo.mi@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    diego.spagnolo.mi@gmail.com
                  </a>
                  <a
                    href="mailto:diego.spagnolo@arubapec.it"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/[0.02] dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/10"
                  >
                    PEC: diego.spagnolo@arubapec.it
                  </a>
                  <a
                    href="https://www.linkedin.com/in/diego-spagnolo/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-black/[0.02] dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-black/70 dark:text-white/70 sm:grid-cols-2">
                  <div>
                    <div className="text-xs text-black/50 dark:text-white/50">Mobile</div>
                    <a className="font-medium text-black dark:text-white" href="tel:+393394217253">
                      +39 339 4217253
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-black/50 dark:text-white/50">Ufficio</div>
                    <a
                      className="font-medium text-black dark:text-white"
                      href="https://www.google.com/maps/search/?api=1&query=Piazza%20Roma%2C%2030%20-%2020833%20Giussano%20(MB)"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Piazza Roma, 30 — 20833 Giussano (MB)
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-xs text-black/50 dark:text-white/50">
                  Nota: l’assistente AI fornisce informazioni generali e non sostituisce una
                  consulenza professionale.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </div>
    </>
  );
}
