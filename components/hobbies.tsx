import { hobbies } from "@/data/hobbies";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Hobbies() {
  return (
    <section id="interesses" aria-labelledby="hobbies-title" className="section-wrap scroll-mt-24">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            id="hobbies-title"
            eyebrow="Fora do teclado"
            title="O que me inspira."
            description="Um pouco das coisas que alimentam a criatividade e a vontade de continuar aprendendo."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="hobby-card">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-ink dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
