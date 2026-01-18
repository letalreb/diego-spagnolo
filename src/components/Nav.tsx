import Link from "next/link";
import { navLinks } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-black dark:text-white"
        >
          Diego Spagnolo
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 sm:inline-flex"
          >
            Contattami
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
