"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Renato682",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/renato-arouche-405841327/",
    icon: Linkedin,
  },
  { label: "E-mail", href: "mailto:renatoarouche3@gmail.com", icon: Mail },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="hero-title"
      className="relative flex min-h-[92svh] scroll-mt-24 items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <div aria-hidden="true" className="hero-glow" />
      <motion.div
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-sm text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Aberto a novas oportunidades
          </div>
          <p className="mb-3 text-lg text-ink/60 dark:text-white/60">Olá, eu sou</p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold tracking-[-0.06em] text-ink dark:text-white sm:text-6xl lg:text-7xl"
          >
            Renato
            <br />
            <span className="text-accent">Arouche.</span>
          </h1>
          <p className="mt-6 text-lg font-medium text-ink/80 dark:text-white/80 sm:text-xl">
            Desenvolvedor de Software <span className="text-accent">&</span> Analista de Dados
          </p>
          <p className="mt-4 max-w-xl leading-7 text-ink/60 dark:text-white/60">
            Transformo problemas em soluções digitais: código bem pensado, dados que contam
            histórias e automações que simplificam o dia a dia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#projetos">
              Ver projetos <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contato">
              Entrar em contato <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="mr-2 text-sm text-ink/50 dark:text-white/50">Me encontre</span>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                className="icon-button"
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-accent/15" />
            <div className="absolute -inset-9 rounded-full border border-accent/10" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-[#ece9ff] shadow-soft dark:border-white/10 sm:h-72 sm:w-72">
              <Image
                src="/profile.png"
                alt="Foto de perfil de Renato Arouche"
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-8 rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-soft dark:border-white/10 dark:bg-[#1c1c23]">
              <p className="text-xs text-ink/50 dark:text-white/50">Foco atual</p>
              <p className="mt-0.5 text-sm font-medium text-ink dark:text-white">
                Software & dados
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
