import { ArrowUpRight, GraduationCap, Medal } from "lucide-react";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Journey() {
  return (
    <section
      id="trajetoria"
      aria-labelledby="journey-title"
      className="section-wrap scroll-mt-24 bg-white/70 dark:bg-white/[0.02]"
    >
      <div className="section-inner grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              id="journey-title"
              eyebrow="Aprendizado"
              title="Minha trajetória."
              description="Uma jornada construída com estudo, prática e curiosidade."
            />
          </Reveal>
          <div className="relative ml-2 border-l border-accent/20 pl-7">
            {education.map((item, index) => (
              <Reveal key={item.course} delay={index * 0.08}>
                <article className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[2.13rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/20 bg-paper text-accent dark:bg-[#101014]">
                    <GraduationCap size={15} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 font-semibold text-ink dark:text-white">{item.course}</h3>
                  <p className="mt-1 text-sm text-ink/55 dark:text-white/55">{item.institution}</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-ink/60 dark:text-white/60">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Conquistas
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">
                Certificados.
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/60 dark:text-white/60">
                Cursos e reconhecimentos que fazem parte do caminho.
              </p>
            </div>
          </Reveal>
          <div className="space-y-3">
            {certificates.map((certificate, index) => (
              <Reveal key={certificate.name} delay={index * 0.07}>
                <article className="surface-card flex items-start gap-4 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Medal size={19} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-ink dark:text-white">
                      {certificate.name}
                    </h3>
                    <p className="mt-1 text-xs text-ink/55 dark:text-white/55">
                      {certificate.issuer} · {certificate.date}
                    </p>
                    {certificate.url ? (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link mt-3"
                      >
                        Ver certificado <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="mt-2 text-xs text-ink/45 dark:text-white/45">
                        Adicione o link em data/certificates.ts
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
