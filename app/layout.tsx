import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Renato Arouche | Desenvolvedor & Analista de Dados",
    template: "%s | Renato Arouche",
  },
  description:
    "Portfólio de Renato Arouche, desenvolvedor de software e analista de dados. Conheça projetos, habilidades e trajetória.",
  openGraph: {
    title: "Renato Arouche | Desenvolvedor & Analista de Dados",
    description:
      "Código bem pensado, dados que contam histórias e automações que simplificam o dia a dia.",
    type: "website",
    locale: "pt_BR",
    images: ["/profile.png"],
  },
  twitter: {
    card: "summary",
    title: "Renato Arouche | Desenvolvedor & Analista de Dados",
    description: "Portfólio de desenvolvimento de software e análise de dados.",
    images: ["/profile.png"],
  },
};

const themeScript = `
  // Apply the saved preference before hydration to prevent a flash of the wrong theme.
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
