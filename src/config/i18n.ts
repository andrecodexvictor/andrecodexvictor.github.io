import type { Locale } from '@/content/gear';

export type Language = Locale;

export interface UIStrings {
  nav: {
    work: string;
    journey: string;
    gear?: string;
    experience?: string;
    credentials: string;
    about: string;
    contact: string;
    resume: string;
    themeLight: string;
    themeDark: string;
    accentSage?: string;
    accentBronze?: string;
  };
  hero: {
    sectorTag: string;
    eyebrow: string;
    headlinePrefix: string;
    headlineEmphasis: string;
    headlineSuffix: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    portraitCaptionTitle: string;
    portraitCaptionSub: string;
    quickFacts: { label: string; value: string }[];
  };
  work: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    featuredLabel: string;
    archiveTitle: string;
    archiveSubtitle: string;
    problemLabel: string;
    solutionLabel: string;
    contributionLabel: string;
    architectureLabel: string;
    decisionsLabel: string;
    scopeNoteLabel: string;
    viewCaseStudy: string;
    viewRepo: string;
    viewUpstream: string;
    viewLive: string;
    racingLineCaption: string;
  };
  gearSection: {
    sectionNumber: string;
    eyebrow: string;
    readCaseStudyCta: string;
    viewRepoCta: string;
    pillarsHeading: string;
    transversalHeading: string;
    roadmapHeading: string;
    diagnosticHeading: string;
  };
  openuiSection: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    runtimeBadge: string;
    modeCompetency: string;
    modeArchitecture: string;
    modeGear: string;
    inspectPromptToggle: string;
    hidePromptToggle: string;
    fallbackNotice: string;
  };
  experienceSection: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    principlesHeading: string;
  };
  credentialsSection: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    verifyCta: string;
    educationHeading: string;
    complementaryHeading: string;
  };
  aboutSection: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
    f1NoteTitle: string;
    f1NoteBody: string;
    animeNoteTitle: string;
    animeNoteBody: string;
    buddyName: string;
    buddyRole: string;
    buddyGreeting: string;
    buddyStates: { idle: string; telemetry: string; governance: string };
  };
  contactSection: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    sendEmailCta: string;
    availabilityBadge: string;
  };
  footer: {
    colophon: string;
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  en: {
    nav: {
      work: 'Selected Work',
      journey: 'Journey',
      gear: 'GEAR Framework',
      experience: 'Experience',
      credentials: 'Credentials',
      about: 'About',
      contact: 'Contact',
      resume: 'Resume PDF',
      themeLight: 'Paper Light',
      themeDark: 'Carbon Dark',
      accentSage: 'Sage Accent',
      accentBronze: 'Bronze Accent',
    },
    hero: {
      sectorTag: 'S1 · BAHIA, BRAZIL · 2026 EDITION',
      eyebrow: 'Software Engineer · Applied AI, Agent Systems & IT Governance',
      headlinePrefix: 'Engineering reliable AI systems, developer tools, and ',
      headlineEmphasis: 'minimum viable governance',
      headlineSuffix: '.',
      subheadline:
        'Full Stack & Applied AI Intern at VittalWeb and Information Systems finalist at IFBA. I build source-grounded RAG pipelines on Oracle Cloud, MCP quality gates for coding agents, and the GEAR (GP-PME) operational framework.',
      ctaPrimary: 'Explore Selected Work',
      ctaSecondary: 'Inspect GEAR Framework',
      ctaResume: 'Download Resume (EN)',
      portraitCaptionTitle: 'André Victor Andrade',
      portraitCaptionSub: 'Applied AI & Software Engineering · IFBA & VittalWeb',
      quickFacts: [
        { label: 'Focus', value: 'Applied AI, Agents (LangGraph / MCP) & Full-Stack' },
        { label: 'Current Role', value: 'Full Stack & Applied AI Intern @ VittalWeb' },
        { label: 'Thesis / Book', value: 'GEAR Framework (2026.10 · Evolution of GP-PME)' },
        { label: 'Cloud & Certs', value: 'Oracle OCI Certified AI Foundations' },
      ],
    },
    work: {
      sectionNumber: '01',
      eyebrow: 'CURATED PORTFOLIO & CASE STUDIES (2026)',
      title: 'Selected Engineering Work',
      subtitle:
        'Every project below is documented from its real repository, architecture, and deployment state—distinguishing live cloud systems, developer tooling, open-source contributions, and academic research.',
      featuredLabel: 'Primary Case Study',
      archiveTitle: 'Additional Engineering & Open-Source Archive',
      archiveSubtitle:
        'Complementary tools, simulators, and MCP servers built across security validation, code review, stack compilation, and Formula 1 strategy.',
      problemLabel: 'Problem & Context',
      solutionLabel: 'Architectural Solution',
      contributionLabel: 'My Direct Contribution',
      architectureLabel: 'System Flow',
      decisionsLabel: 'Key Decisions & Trade-offs',
      scopeNoteLabel: 'Verification & Scope Note',
      viewCaseStudy: 'Read Full Case Study',
      viewRepo: 'GitHub Repository',
      viewUpstream: 'Upstream Repo',
      viewLive: 'Live Deployment',
      racingLineCaption: 'SECTOR TRANSITION · CIRCUIT APEX TELEMETRY LINE (INSPIRED BY 24 PODIUMS)',
    },
    gearSection: {
      sectionNumber: '02',
      eyebrow: 'P0 · AUTHORIAL BOOK & UNDERGRADUATE THESIS (TCC — IFBA)',
      readCaseStudyCta: 'Open Full GEAR Case Study',
      viewRepoCta: 'Inspect GP-PME / GEAR Repository',
      pillarsHeading: 'Three Essential Operational Pillars',
      transversalHeading: 'Transversal & Optional Layer: Governed AI Catalyst',
      roadmapHeading: '30-Day Progressive Adoption Protocol',
      diagnosticHeading: 'IM-TI Binary Maturity Scale (0 to 10)',
    },
    openuiSection: {
      sectionNumber: '03',
      eyebrow: 'INTERACTIVE GENERATIVE UI MODULE · @openuidev/react-lang',
      title: 'Explore My Work via OpenUI',
      subtitle:
        'An interactive architectural explorer powered by a real OpenUI component library (`defineComponent` + `createLibrary` + `<Renderer />`). Switch lenses to inspect how competencies, system architectures, and the GEAR framework connect.',
      runtimeBadge: 'OpenUI Lang v1.0 Runtime Active',
      modeCompetency: '1. Explore by Competency',
      modeArchitecture: '2. Explore by Architecture',
      modeGear: '3. Explore GEAR Framework',
      inspectPromptToggle: 'View OpenUI Lang Source & Library Spec',
      hidePromptToggle: 'Hide OpenUI Lang Source',
      fallbackNotice: 'Accessible static fallback view active.',
    },
    experienceSection: {
      sectionNumber: '04',
      eyebrow: 'PROFESSIONAL TRAJECTORY & OPERATING PRINCIPLES',
      title: 'Experience & How I Work',
      subtitle:
        'Production engineering experience combined with four years of consultative client communication—prioritizing deterministic guardrails, clean handoffs, and measurable evaluation.',
      principlesHeading: 'Core Engineering Principles',
    },
    credentialsSection: {
      sectionNumber: '05',
      eyebrow: 'VERIFIED CERTIFICATIONS & ACADEMIC FORMATION',
      title: 'Credentials & Education',
      subtitle:
        'Official Oracle University cloud AI certifications with direct CertView verification links, alongside academic research at the Federal Institute of Bahia (IFBA).',
      verifyCta: 'Verify Official Credential',
      educationHeading: 'Academic Degree & Institutional Leadership',
      complementaryHeading: 'Complementary Verified Certificates',
    },
    aboutSection: {
      sectionNumber: '06',
      eyebrow: 'HUMAN CONTEXT, CRAFTSMANSHIP & INTERESTS',
      title: 'Beyond the Terminal',
      lead: 'I care about software that stays understandable six months after launch—and processes that real people can follow without burning out.',
      body1:
        'My path into software engineering combines formal Information Systems training at IFBA with years of remote consultative sales and peer mentoring. That background shaped a simple habit: listen carefully to the operational bottleneck first, then design the smallest deterministic system that solves it.',
      body2:
        'Whether refactoring a 1,532-line production message handler down to 378 tested lines at VittalWeb, deploying grounded RAG on Oracle Cloud, or writing the 10 chapters of GEAR, my goal is clarity over hype.',
      f1NoteTitle: 'Formula 1 & Telemetry Precision',
      f1NoteBody:
        'Longtime F1 enthusiast and creator of the 24 Podiums simulator. I admire how race engineering balances high-speed intuition with pit-wall discipline, clean sector deltas, and zero-redundancy design.',
      animeNoteTitle: 'Storytelling & Visual Craft',
      animeNoteBody:
        'Inspired by the pacing and visual warmth of classic anime and editorial print design—reflected in this page’s paper-and-ink palette and in Apex, the quiet desk companion below.',
      buddyName: 'Apex · Desk Companion',
      buddyRole: 'Discreet Telemetry & Editorial Buddy',
      buddyGreeting: 'All sectors nominal. Click a lens to cycle my status note—or toggle reduced motion anytime.',
      buddyStates: {
        idle: 'Sector 1: Calm paper-and-ink mode. Zero neon, 100% readable.',
        telemetry: 'Sector 2: Checking RAG grounding (`grounded=true`) and WIP=3 limits.',
        governance: 'Sector 3: Remember—Backup ≠ Restoration until you test the recovery.',
      },
    },
    contactSection: {
      sectionNumber: '07',
      eyebrow: 'DIRECT CHANNELS & CONTACT',
      title: 'Let’s Build Something Reliable',
      subtitle:
        'Open to AI Engineer, Backend, and Full-Stack opportunities, research collaborations on governed AI/MCP tooling, and technical conversations.',
      emailLabel: 'Direct Email',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied to Clipboard',
      sendEmailCta: 'Send Email Directly',
      availabilityBadge: 'Available for AI Engineering & Full-Stack Roles · Bahia, Brazil / Remote',
    },
    footer: {
      colophon: 'Designed with Graphite, Slate & Desaturated Blue. Built with Next.js 16, React 19 & Tailwind CSS.',
      rights: '© 2026 André Victor Andrade Oliveira Santos. All repositories and case studies reflect verified engineering artifacts.',
      backToTop: 'Back to Top ↑',
    },
  },
  pt: {
    nav: {
      work: 'Projetos',
      journey: 'Trajetória',
      gear: 'Framework GEAR',
      experience: 'Experiência',
      credentials: 'Certificações',
      about: 'Sobre',
      contact: 'Contato',
      resume: 'Currículo PDF',
      themeLight: 'Modo Papel (Claro)',
      themeDark: 'Modo Carbono (Escuro)',
      accentSage: 'Tom Sálvia',
      accentBronze: 'Tom Bronze',
    },
    hero: {
      sectorTag: 'S1 · BAHIA, BRASIL · EDIÇÃO 2026',
      eyebrow: 'Engenheiro de Software · IA Aplicada, Agentes & Governança de TI',
      headlinePrefix: 'Construindo sistemas de IA confiáveis, ferramentas para desenvolvedores e ',
      headlineEmphasis: 'governança mínima viável',
      headlineSuffix: '.',
      subheadline:
        'Estagiário Full Stack e IA Aplicada na VittalWeb e concluinte de Sistemas de Informação no IFBA. Desenvolvo pipelines RAG fundamentados em fontes na Oracle Cloud, gates de qualidade MCP para agentes de código e o livro/framework operacional GEAR (evolução do GP-PME).',
      ctaPrimary: 'Ver Projetos e Cases',
      ctaSecondary: 'Conhecer o Framework GEAR',
      ctaResume: 'Baixar Currículo (PT)',
      portraitCaptionTitle: 'André Victor Andrade',
      portraitCaptionSub: 'IA Aplicada & Engenharia de Software · IFBA & VittalWeb',
      quickFacts: [
        { label: 'Foco Técnico', value: 'IA Aplicada, Agentes (LangGraph / MCP) & Full-Stack' },
        { label: 'Atuação Atual', value: 'Estagiário Full Stack & IA Aplicada @ VittalWeb' },
        { label: 'TCC / Livro Autoral', value: 'Framework GEAR (2026.10 · Evolução do GP-PME)' },
        { label: 'Cloud & Certificações', value: 'Oracle OCI Certified AI Foundations' },
      ],
    },
    work: {
      sectionNumber: '01',
      eyebrow: 'PORTFÓLIO CURADO E ESTUDOS DE CASO (2026)',
      title: 'Projetos Selecionados de Engenharia',
      subtitle:
        'Cada projeto abaixo é documentado a partir do seu repositório real, arquitetura e estágio de implantação — distinguindo com transparência sistemas em nuvem, developer tooling, contribuições open source e pesquisa acadêmica.',
      featuredLabel: 'Estudo de Caso Principal',
      archiveTitle: 'Arquivo Complementar de Engenharia & Open Source',
      archiveSubtitle:
        'Ferramentas adicionais, simuladores e servidores MCP desenvolvidos para validação de segurança, revisão de código, recomendação de stack e estratégia de Fórmula 1.',
      problemLabel: 'Problema e Contexto',
      solutionLabel: 'Solução Arquitetural',
      contributionLabel: 'Minha Contribuição Direta',
      architectureLabel: 'Fluxo do Sistema',
      decisionsLabel: 'Decisões Técnicas e Trade-offs',
      scopeNoteLabel: 'Nota de Escopo e Verificação',
      viewCaseStudy: 'Ler Estudo de Caso Completo',
      viewRepo: 'Repositório GitHub',
      viewUpstream: 'Repositório Upstream',
      viewLive: 'Deploy Publicado',
      racingLineCaption: 'TRANSIÇÃO DE SETOR · LINHA DE TELEMETRIA E APEX (INSPIRADA NO 24 PODIUMS)',
    },
    gearSection: {
      sectionNumber: '02',
      eyebrow: 'P0 · LIVRO AUTORAL E TRABALHO DE CONCLUSÃO DE CURSO (TCC — IFBA)',
      readCaseStudyCta: 'Abrir Estudo de Caso Completo do GEAR',
      viewRepoCta: 'Ver Repositório GP-PME / GEAR',
      pillarsHeading: 'Os Três Pilares Operacionais Essenciais',
      transversalHeading: 'Camada Transversal e Opcional: IA como Catalisador Governado',
      roadmapHeading: 'Roteiro Progressivo de Adoção em 30 Dias',
      diagnosticHeading: 'Diagnóstico Binário de Maturidade IM-TI (0 a 10)',
    },
    openuiSection: {
      sectionNumber: '03',
      eyebrow: 'MÓDULO INTERATIVO DE GENERATIVE UI · @openuidev/react-lang',
      title: 'Explore Meu Trabalho com OpenUI',
      subtitle:
        'Um explorador arquitetural interativo construído com a biblioteca oficial OpenUI (`defineComponent` + `createLibrary` + `<Renderer />`). Alterne entre os modos para inspecionar competências, arquiteturas e o framework GEAR.',
      runtimeBadge: 'Runtime OpenUI Lang v1.0 Ativo',
      modeCompetency: '1. Explorar por Competência',
      modeArchitecture: '2. Explorar por Arquitetura',
      modeGear: '3. Explorar Framework GEAR',
      inspectPromptToggle: 'Inspecionar Código OpenUI Lang & Schema',
      hidePromptToggle: 'Ocultar Código OpenUI Lang',
      fallbackNotice: 'Modo estático acessível ativo.',
    },
    experienceSection: {
      sectionNumber: '04',
      eyebrow: 'TRAJETÓRIA PROFISSIONAL E PRINCÍPIOS DE ENGENHARIA',
      title: 'Experiência e Como Eu Trabalho',
      subtitle:
        'Engenharia de software e IA aplicada em produção somadas a quatro anos de comunicação consultiva — priorizando guardrails determinísticos, código legível e avaliação sem regressão.',
      principlesHeading: 'Princípios Fundamentais de Engenharia',
    },
    credentialsSection: {
      sectionNumber: '05',
      eyebrow: 'CERTIFICAÇÕES VERIFICADAS E FORMAÇÃO ACADÊMICA',
      title: 'Certificações e Formação',
      subtitle:
        'Certificações oficiais Oracle University em IA e Cloud com links diretos de verificação, acompanhadas pela formação em Sistemas de Informação no IFBA.',
      verifyCta: 'Verificar Credencial Oficial',
      educationHeading: 'Formação Acadêmica e Liderança Institucional',
      complementaryHeading: 'Certificados Complementares Verificados',
    },
    aboutSection: {
      sectionNumber: '06',
      eyebrow: 'CONTEXTO HUMANO, OFÍCIO E INTERESSES',
      title: 'Além do Terminal',
      lead: 'Acredito em software que continua compreensível seis meses após o deploy — e em processos que equipes reais conseguem sustentar sem exaustão.',
      body1:
        'Minha trajetória une a graduação em Sistemas de Informação no IFBA à experiência prática em vendas consultivas remotas e mentoria de equipes. Essa combinação criou um hábito simples: ouvir primeiro onde está o gargalo operacional real e depois projetar o menor sistema determinístico capaz de resolvê-lo.',
      body2:
        'Seja refatorando um handler de mensagens em produção de 1.532 para 378 linhas testadas na VittalWeb, implantando RAG fundamentado na Oracle Cloud ou escrevendo os 10 capítulos do livro GEAR, meu objetivo é clareza técnica acima de modismos.',
      f1NoteTitle: 'Fórmula 1 & Precisão de Telemetria',
      f1NoteBody:
        'Entusiasta de Fórmula 1 e criador do simulador 24 Podiums. Admiro como a engenharia de corrida equilibra velocidade com disciplina de pit-wall, leitura limpa de dados e ausência de excessos.',
      animeNoteTitle: 'Narrativa & Direção de Arte Editorial',
      animeNoteBody:
        'Inspirado pelo ritmo narrativo dos animes clássicos e pelo design editorial impresso — refletidos na paleta papel-e-nanquim desta página e no Apex, o discreto companheiro de bancada abaixo.',
      buddyName: 'Apex · Companheiro de Bancada',
      buddyRole: 'Mascote Discreto de Telemetria e Leitura',
      buddyGreeting: 'Todos os setores nominais. Clique em uma nota para alternar o status — ou ative movimento reduzido quando preferir.',
      buddyStates: {
        idle: 'Setor 1: Modo editorial papel e nanquim. Zero neon, 100% legibilidade.',
        telemetry: 'Setor 2: Verificando aderência factual (`grounded=true`) e limite WIP=3.',
        governance: 'Setor 3: Lembrete do GEAR — Backup ≠ Restauração até que o teste funcione.',
      },
    },
    contactSection: {
      sectionNumber: '07',
      eyebrow: 'CANAIS DIRETOS E CONTATO',
      title: 'Vamos Construir Algo Confiável',
      subtitle:
        'Aberto a oportunidades como Engenheiro de IA, Backend ou Full-Stack, colaborações em ferramentas governadas para agentes/MCP e boas conversas técnicas.',
      emailLabel: 'E-mail Direto',
      copyEmail: 'Copiar E-mail',
      copiedEmail: 'E-mail Copiado',
      sendEmailCta: 'Enviar E-mail Agora',
      availabilityBadge: 'Disponível para Engenharia de IA, Backend & Full-Stack · Bahia / Remoto',
    },
    footer: {
      colophon: 'Projetado em Grafite, Slate e Azul Dessaturado. Construído com Next.js 16, React 19 & Tailwind CSS.',
      rights: '© 2026 André Victor Andrade Oliveira Santos. Todos os repositórios e estudos de caso refletem artefatos verificados.',
      backToTop: 'Voltar ao Topo ↑',
    },
  },
};
