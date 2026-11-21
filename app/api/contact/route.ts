import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "O corpo da solicitação não é válido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Confira os dados enviados." },
      { status: 400 },
    );
  }

  // Keep the email provider credentials exclusively in this server-side route.
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return Response.json(
      { error: "O envio de mensagens ainda não está configurado. Tente novamente mais tarde." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;
  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Contato pelo portfólio de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
    });
    if (error) {
      console.error("Falha ao enviar mensagem de contato:", error);
      return Response.json(
        { error: "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde." },
        { status: 502 },
      );
    }
  } catch (sendError) {
    console.error("Falha ao enviar mensagem de contato:", sendError);
    return Response.json(
      { error: "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Mensagem enviada com sucesso." });
}
