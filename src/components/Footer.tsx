import { Container } from "@/components/Container";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-black/[0.01] py-12 dark:border-white/10 dark:bg-white/[0.02] sm:py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-3 text-base font-semibold text-black dark:text-white">
              Diego Spagnolo
            </div>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-black/60 dark:text-white/60">
              Dottore Commercialista e Revisore Contabile · ODCEC Monza e Brianza · Consulenza finanziaria aziendale
            </p>
          </div>
          
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
              Contatti
            </div>
            <div className="space-y-2 text-sm">
              <a href="tel:+393394217253" className="flex items-center gap-2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                +39 339 4217253
              </a>
              <a href="mailto:diego.spagnolo.mi@gmail.com" className="flex items-center gap-2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Piazza%20Roma%2C%2030%20-%2020833%20Giussano%20(MB)" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                <MapPin className="h-3.5 w-3.5" />
                Giussano (MB)
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
              Link
            </div>
            <div className="space-y-2 text-sm">
              <a href="https://www.linkedin.com/in/diego-spagnolo/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a href="/privacy" className="block text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                Privacy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 dark:border-white/10">
          <p className="text-xs text-black/50 dark:text-white/50">
            © {new Date().getFullYear()} Diego Spagnolo — Dottore Commercialista · Tutti i diritti riservati
          </p>
        </div>
      </Container>
    </footer>
  );
}
