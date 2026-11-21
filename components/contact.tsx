"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowUpRight, LoaderCircle, Mail } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmissionMessage("");
    setSubmissionError(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result: { message?: string; error?: string } = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? "Não foi possível enviar sua mensagem.");
      }
      setSubmissionMessage(result.message ?? "Mensagem enviada com sucesso.");
      reset();
    } catch (error) {
      setSubmissionError(true);
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem. Tente novamente.",
      );
    }
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="section-wrap scroll-mt-24 bg-white/70 dark:bg-white/[0.02]"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Vamos conversar?"
            title="Tem um projeto em mente?"
            description="Conte um pouco sobre a sua ideia. Vou adorar saber mais."
            centered
          />
        </Reveal>

        <Reveal>
          <div className="mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-ink/5 bg-paper shadow-soft dark:border-white/10 dark:bg-[#15151b] md:grid-cols-[0.8fr_1.2fr]">
            <aside className="bg-[#efedff] p-7 dark:bg-accent/10 sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-accent shadow-sm dark:bg-white/10">
                <Mail size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink dark:text-white">
                Canais diretos
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">
                Prefere escrever direto? Também estou por aqui:
              </p>
              <a
                href="mailto:renatoarouche3@gmail.com"
                className="mt-5 inline-flex items-center gap-2 break-all text-sm font-medium text-accent hover:underline"
              >
                renatoarouche3@gmail.com <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/renato-arouche-405841327/"
                target="_blank"
                rel="noreferrer"
                className="project-link mt-4"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </aside>

            <form className="space-y-5 p-7 sm:p-9" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="contact-name" className="form-label">
                  Nome
                </label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  className="form-input"
                  placeholder="Seu nome"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="contact-name-error" className="form-error">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="form-label">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  className="form-input"
                  placeholder="voce@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="contact-email-error" className="form-error">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-message" className="form-label">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="form-input resize-y"
                  placeholder="Como posso ajudar?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message")}
                />
                {errors.message && (
                  <p id="contact-message-error" className="form-error">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button type="submit" className="button-primary w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem <ArrowUpRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>
              <p
                className={`text-sm ${submissionError ? "text-red-600 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400"}`}
                role="status"
                aria-live="polite"
              >
                {submissionMessage}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
