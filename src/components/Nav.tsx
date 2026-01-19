import Link from "next/link";
import { navLinks } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-col gap-0.5 font-semibold tracking-tight text-black dark:text-white"
        >
          <span className="text-base sm:text-lg">Diego Spagnolo</span>
          <span className="text-[10px] font-normal uppercase tracking-wide text-black/50 dark:text-white/50 sm:text-xs">
            Dottore Commercialista
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-black/90 hover:shadow-md active:scale-100 dark:bg-white dark:text-black dark:hover:bg-white/90 sm:inline-flex"
          >
            Contatti
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
