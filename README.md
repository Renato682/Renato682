# Portfólio pessoal

Portfólio responsivo feito com Next.js 16 (App Router), TypeScript, Tailwind CSS e Framer Motion. Inclui tema claro/escuro, projetos, habilidades, formação, certificados, interesses e formulário de contato integrado ao Resend.

## Requisitos

- Node.js 20.9 ou superior
- npm (ou outro gerenciador compatível)

## Instalação e execução

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para verificar tipos e gerar a versão de produção:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Personalização

- **Perfil, links sociais e e-mail:** atualize `components/hero.tsx`, `components/contact.tsx` e `components/footer.tsx`.
- **Foto:** substitua `public/profile-placeholder.svg` pela sua imagem e ajuste `components/hero.tsx`.
- **Projetos:** edite `data/projects.ts`; imagens locais ficam em `public/projects/`. Substitua os links de demonstração (`https://example.com`) por demos reais ou remova `demoUrl` quando não houver uma.
- **Habilidades, formação, certificados e interesses:** edite `data/skills.ts`, `data/education.ts`, `data/certificates.ts` e `data/hobbies.ts`. Substitua os links de exemplo e dados dos certificados pelos seus.
- **SEO e redes sociais:** ajuste `metadata` em `app/layout.tsx` e os links dos componentes.
- **URL pública:** substitua `NEXT_PUBLIC_SITE_URL` em `.env.local` pela URL do site para metadados Open Graph corretos.
- **Cores e estilos:** edite `tailwind.config.ts` e `app/globals.css`.

Os textos e dados acadêmicos/certificados de exemplo devem ser revisados antes de publicar. As imagens dos projetos incluídas são ilustrações locais substituíveis.

## Configurar o formulário de contato

O formulário valida os campos no cliente e no servidor. Para enviar mensagens de verdade, configure uma conta Resend, verifique o domínio de envio e crie as variáveis de ambiente:

```bash
cp .env.example .env.local
```

Preencha `RESEND_API_KEY`, `CONTACT_EMAIL` (destinatário) e `CONTACT_FROM_EMAIL` (remetente autorizado no Resend). O endereço de exemplo `onboarding@resend.dev` pode ser usado durante a configuração inicial conforme as limitações da sua conta Resend. `NEXT_PUBLIC_SITE_URL` deve conter a URL pública do portfólio. Não publique chaves de API no repositório. Sem as variáveis do Resend, a API retorna uma mensagem clara de que o envio não está configurado.

## Deploy na Vercel

Importe o repositório na Vercel, configure as três variáveis de ambiente do formulário nas configurações do projeto e faça o deploy. O build de produção usa `npm run build`.

## Estrutura

```text
app/
  api/contact/route.ts    # Endpoint de envio do formulário
  globals.css
  layout.tsx              # Layout, fontes e metadados
  page.tsx
components/                # Seções e componentes reutilizáveis
data/                      # Conteúdo tipado do portfólio
lib/contact.ts             # Schema compartilhado de validação
public/                    # Foto e ilustrações locais
```
