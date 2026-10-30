import type { Metadata } from 'next';
import { Inter, Newsreader, Geist_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://andrecodexvictor.github.io'),
  title: {
    default: 'André Victor — Software Engineer · Applied AI, Agent Systems & IT Governance',
    template: '%s · André Victor',
  },
  description:
    'Portfolio of André Victor Andrade Oliveira Santos: Applied AI & Full-Stack Engineer (VittalWeb), Information Systems finalist at IFBA, creator of Axiom Tech (OCI RAG), Quality Engine (MCP), and the GEAR (GP-PME) IT governance book & framework.',
  keywords: [
    'André Victor',
    'André Victor Andrade Oliveira Santos',
    'AI Engineer',
    'Applied AI',
    'Software Engineer',
    'LangGraph',
    'Model Context Protocol',
    'MCP',
    'Oracle Cloud Infrastructure',
    'RAG',
    'GEAR Framework',
    'GP-PME',
    'IFBA',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
  ],
  authors: [{ name: 'André Victor Andrade Oliveira Santos', url: 'https://andrecodexvictor.github.io/' }],
  creator: 'André Victor Andrade Oliveira Santos',
  alternates: {
    canonical: 'https://andrecodexvictor.github.io/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: 'https://andrecodexvictor.github.io/',
    siteName: 'André Victor · Engineering Portfolio',
    title: 'André Victor — Applied AI, Agent Systems & IT Governance',
    description:
      'Selected 2026 engineering work: GEAR (GP-PME) Book & TCC Framework, Axiom Tech (Grounded RAG on OCI), NovaMente Atlas, Quality Engine (MCP), SimPay, LaunchGuard, and Jev Gateway.',
    images: [
      {
        url: '/images/andre-portrait-apex.png',
        width: 1536,
        height: 1024,
        alt: 'Portrait of André Victor Andrade Oliveira Santos with Apex Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'André Victor — Software Engineer · Applied AI & IT Governance',
    description:
      'Applied AI & Full-Stack Engineering portfolio featuring GEAR (GP-PME), Axiom Tech on OCI, Quality Engine MCP, NovaMente Atlas, and Jev Gateway.',
    images: ['/images/andre-portrait-apex.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo-cdx.png', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/logo-cdx.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://andrecodexvictor.github.io/#person',
      name: 'André Victor Andrade Oliveira Santos',
      alternateName: 'André Victor',
      jobTitle: 'Software Engineer — Applied AI, Agent Systems & Full-Stack',
      url: 'https://andrecodexvictor.github.io/',
      image: 'https://andrecodexvictor.github.io/images/andre-portrait-apex.png',
      email: 'mailto:andrevictorandrade@gmail.com',
      sameAs: [
        'https://github.com/andrecodexvictor',
        'https://www.linkedin.com/in/andr%C3%A9-victor-andrade-oliveira-santos-22b142208/',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Instituto Federal da Bahia (IFBA) — Campus Vitória da Conquista',
      },
      knowsAbout: [
        'Applied Artificial Intelligence',
        'Retrieval-Augmented Generation (RAG)',
        'LangGraph',
        'Model Context Protocol (MCP)',
        'TypeScript',
        'Python',
        'FastAPI',
        'Next.js',
        'Oracle Cloud Infrastructure (OCI)',
        'IT Governance for SMEs (GEAR / GP-PME)',
      ],
    },
    {
      '@type': 'Book',
      '@id': 'https://andrecodexvictor.github.io/work/gear/#book',
      name: 'GEAR — Gestão, Execução, Agilidade e Risco: Guia Operacional de TI para Pequenas e Médias Empresas',
      author: { '@id': 'https://andrecodexvictor.github.io/#person' },
      bookEdition: '2026.10',
      inLanguage: ['pt-BR', 'en'],
      url: 'https://github.com/andrecodexvictor/gp-pme',
      about:
        'Minimum Viable Governance (MVG) framework for SMEs built on three pillars (Essential Governance, Agile Execution, Critical Security) and a transversal optional AI layer under human verification.',
    },
  ],
};

const preferenceBootstrapScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('av_editorial_theme')||localStorage.getItem('andre-design-theme');var theme=(t==='light')?'light':'dark';d.setAttribute('data-theme',theme);d.classList.toggle('dark',theme==='dark');d.removeAttribute('data-accent');var l=localStorage.getItem('av_editorial_lang');if(l==='pt'||l==='en'){d.lang=l==='pt'?'pt-BR':'en';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceBootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
