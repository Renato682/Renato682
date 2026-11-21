import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome (mínimo de 2 caracteres).").max(100),
  email: z.string().trim().email("Informe um e-mail válido.").max(254),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres.")
    .max(5000, "A mensagem deve ter no máximo 5.000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
