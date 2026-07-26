import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "André Victor — Full-Stack Developer & Entusiasta de IA",
  description: "Portfólio pessoal de André Victor (andrecodexvictor). Desenvolvedor Full-Stack, IA Builder & Criador de Produtos Digitais com estética Cyberpunk F1 Cockpit HUD.",
  keywords: ["André Victor", "andrecodexvictor", "Full-Stack Developer", "AI Builder", "Entusiasta de IA", "Next.js", "React", "TypeScript", "Portfólio", "ZenPR", "24podiums"],
  authors: [{ name: "André Victor", url: "https://github.com/andrecodexvictor" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "André Victor — Full-Stack Developer & Entusiasta de IA",
    description: "Construo produtos web, interfaces e sistemas com IA, foco em execução e identidade visual forte.",
    url: "https://andrecodexvictor.github.io",
    siteName: "André Victor Portfolio",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "André Victor CDX Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Victor — Full-Stack Developer & Entusiasta de IA",
    description: "Portfólio de alta performance com estética Cyberpunk F1 Cockpit HUD.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="antialiased bg-[#07080a] text-[#f4f5f8]">
        {children}
      </body>
    </html>
  );
}
