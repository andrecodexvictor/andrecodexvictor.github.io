import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "André Victor — Full-Stack Developer & Entusiasta de IA",
  description: "Portfólio pessoal de André Victor (andrecodexvictor). Desenvolvedor Full-Stack, IA Builder & Criador de Produtos Digitais com estética Cyberpunk F1 Cockpit HUD.",
  keywords: ["André Victor", "andrecodexvictor", "Full-Stack Developer", "AI Builder", "Entusiasta de IA", "Next.js", "React", "TypeScript", "Portfólio", "ZenPR", "24podiums"],
  authors: [{ name: "André Victor", url: "https://github.com/andrecodexvictor" }],
  openGraph: {
    title: "André Victor — Full-Stack Developer & Entusiasta de IA",
    description: "Construo produtos web, interfaces e sistemas com IA, foco em execução e identidade visual forte.",
    url: "https://andrecodexvictor.github.io",
    siteName: "André Victor Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Victor — Full-Stack Developer & Entusiasta de IA",
    description: "Portfólio de alta performance com estética Cyberpunk F1 Cockpit HUD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#07080a] text-[#f4f5f8]">
        {children}
      </body>
    </html>
  );
}
