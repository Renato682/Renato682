import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="habilidades" aria-labelledby="skills-title" className="section-wrap scroll-mt-24">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Caixa de ferramentas"
            title="Skills em evolução constante."
            description="As áreas e tecnologias com que trabalho atualmente. Os níveis são uma referência pessoal."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.08}>
              <article className="surface-card h-full p-5 sm:p-6">
                <h3 className="mb-6 text-base font-semibold text-ink dark:text-white">
                  {category.name}
                </h3>
                <div className="space-y-5">
                  {category.skills.map(({ name, level, icon: Icon }) => (
                    <div key={name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-sm text-ink/75 dark:text-white/75">
                          <Icon size={16} className="text-accent" aria-hidden="true" />
                          {name}
                        </span>
                        <span className="text-xs tabular-nums text-ink/45 dark:text-white/45">
                          {level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 overflow-hidden rounded-full bg-ink/5 dark:bg-white/10"
                        role="progressbar"
                        aria-label={`${name}: ${level}%`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={level}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-[#a498ff]"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
