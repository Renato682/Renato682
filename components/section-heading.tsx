type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-ink/60 dark:text-white/60">{description}</p>
      )}
    </div>
  );
}
