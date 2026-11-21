import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-ink/5 pt-6 text-sm text-ink/50 dark:border-white/10 dark:text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Renato Arouche. Feito com cuidado.</p>
        <div className="flex items-center gap-4">
          <a
            className="transition-colors hover:text-accent"
            href="https://github.com/Renato682"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            className="transition-colors hover:text-accent"
            href="https://www.linkedin.com/in/renato-arouche-405841327/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a className="project-link" href="#sobre">
            Voltar ao topo <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
