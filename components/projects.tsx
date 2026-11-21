import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="section-wrap scroll-mt-24 bg-white/70 dark:bg-white/[0.02]"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Trabalhos selecionados"
            title="Projetos que saíram do papel."
            description="Um pouco do que venho construindo entre desenvolvimento, dados e automação."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <article className="project-card group">
                <div className="relative aspect-[1.85/1] overflow-hidden bg-[#f0effa] dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur dark:bg-black/50 dark:text-white/80">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-ink dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">
                        {project.description}
                      </p>
                    </div>
                    {project.featured && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="badge">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 border-t border-ink/5 pt-4 dark:border-white/10">
                    <a
                      className="project-link"
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver repositório de ${project.title}`}
                    >
                      <Github size={16} aria-hidden="true" /> Repositório
                    </a>
                    {project.demoUrl && (
                      <a
                        className="project-link"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver demonstração de ${project.title}`}
                      >
                        Demo <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
