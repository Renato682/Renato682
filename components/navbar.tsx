"use client";

import { useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Skills" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("portfolio-theme-change", onChange);
  return () => window.removeEventListener("portfolio-theme-change", onChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101014]/85">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#sobre"
          className="font-semibold tracking-tight text-ink dark:text-white"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          RA<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button"
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="icon-button md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-ink/5 bg-paper px-5 py-3 dark:border-white/10 dark:bg-[#101014] md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                className="nav-link border-b border-ink/5 py-3 last:border-0 dark:border-white/10"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
