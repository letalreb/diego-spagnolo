import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Diego Spagnolo
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="mailto:hello@diegospagnolo.com"
            className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          >
            Email
          </a>
          <a
            href="/privacy"
            className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          >
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
}
