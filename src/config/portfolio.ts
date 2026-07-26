export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  status: 'ONLINE / PROD' | 'ONLINE / DEMO READY' | 'ONLINE / INTERACTIVE' | 'FIRMWARE / HARDWARE' | 'ONLINE / BOT';
  githubUrl: string;
  demoUrl?: string;
  isFeatured: boolean;
  highlightBadge?: string;
}

export interface SecondaryRepo {
  name: string;
  icon: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  date: string;
  summary: string;
  content: string[];
  pillars: { name: string; description: string }[];
  keyTakeaways: string[];
}

export interface EvolutionMetric {
  quarter: string;
  fullstackSkill: number;
  aiIntegration: number;
  projectsCompleted: number;
}

export interface LiveUpdate {
  id: string;
  type: 'PROJECT_RELEASE' | 'LINKEDIN_POST' | 'ARTICLE' | 'MILESTONE';
  title: string;
  date: string;
  summary: string;
  link?: string;
  tag: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeCode: string;
  status: 'VERIFIED / ACTIVE' | 'IN_PROGRESS';
  credentialUrl?: string;
  skillsCovered: string[];
}

export const PORTFOLIO_CONFIG = {
  profile: {
    name: "André Victor",
    handle: "andrecodexvictor",
    role: "Full-Stack Developer, AI Builder & Entusiasta de IA",
    valueProp: "Construo produtos web, interfaces e sistemas com IA, foco em execução e identidade visual forte.",
    bioShort: "Desenvolvedor Full-Stack, Entusiasta de Inteligência Artificial e solucionador de problemas com forte foco em velocidade de entrega, arquitetura limpa e experiência visual marcante.",
    bioHuman: {
      headline: "Estudante contínuo, entusiasta de IA e ex-vendedor com paixão por tecnologia.",
      paragraphs: [
        "Sou um verdadeiro entusiasta de Inteligência Artificial e apaixonado por estudar e aprender coisas novas diariamente. Acredito que a tecnologia deve ser usada para resolver problemas reais de forma rápida, eficiente e elegante.",
        "Tive uma experiência enriquecedora no setor de Vendas, o que me trouxe uma bagagem essencial: visão de negócios, escuta ativa, empatia com a dor do cliente e foco total em gerar valor perceptível desde o primeiro momento.",
        "No tempo livre, sou fã de animes, leitor assíduo de livros, apaixonado pela estratégia da Fórmula 1 e fascinado por transformar ideias complexas em código funcional e bonito."
      ],
      interests: ["Inteligência Artificial", "Engenharia de Software", "Livros & Aprendizado", "Vendas & Negócios", "Animes & Pop Culture", "Fórmula 1 & Estratégia"]
    },
    contacts: {
      emailPrimary: "andrevictorandrade@hotmail.com",
      emailAlt: "andrevictorandrade@gmail.com",
      whatsapp: "https://wa.me/5577999095690",
      whatsappDisplay: "+55 (77) 99909-5690",
      linkedin: "https://www.linkedin.com/in/andré-victor-andrade-oliveira-santos-22b142208",
      github: "https://github.com/andrecodexvictor",
    },
    status: {
      label: "SYSTEM STATUS: ONLINE",
      sublabel: "DISPONÍVEL PARA PROJETOS & OPORTUNIDADES",
      telemetry: "F1 COCKPIT HUD v2.4 • LATENCY: 12ms",
    }
  },

  skills: {
    frontend: [
      { name: "React / Next.js", level: "Avançado", icon: "LayoutCode" },
      { name: "TypeScript", level: "Avançado", icon: "Code2" },
      { name: "Tailwind CSS", level: "Avançado", icon: "Palette" },
      { name: "HTML5 Canvas / WebGL", level: "Intermediário", icon: "Boxes" },
      { name: "Framer Motion", level: "Intermediário", icon: "Zap" },
    ],
    backend: [
      { name: "Node.js / Express", level: "Avançado", icon: "Server" },
      { name: "Python", level: "Avançado", icon: "Terminal" },
      { name: "REST APIs & Webhooks", level: "Avançado", icon: "Webhook" },
      { name: "PostgreSQL / MongoDB", level: "Intermediário", icon: "Database" },
    ],
    ai: [
      { name: "Engenharia de Prompt", level: "Avançado", icon: "Sparkles" },
      { name: "Integração de LLMs (OpenAI/Gemini)", level: "Avançado", icon: "Cpu" },
      { name: "Agentes de Automação & RAG", level: "Intermediário", icon: "Bot" },
    ],
    devtools: [
      { name: "Shell / Bash (script-kitty)", level: "Avançado", icon: "Terminal" },
      { name: "Git & GitHub Actions", level: "Avançado", icon: "GitBranch" },
      { name: "C++ & Arduino / ESP32", level: "Intermediário", icon: "CircuitBoard" },
      { name: "Docker & Linux CLI", level: "Intermediário", icon: "Container" },
    ]
  },

  featuredProjects: [
    {
      id: "24podiums",
      title: "24podiums",
      category: "Web Simulation & F1 Game",
      shortDescription: "Simulador de estratégia e gerenciamento de equipe de Fórmula 1 em 24 corridas.",
      fullDescription: "Jogo web interativo em que o usuário assume a liderança de uma equipe de F1, gerencia orçamento, contratação de pilotos e táticas de box ao longo de uma temporada.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Storage API"],
      status: "ONLINE / DEMO READY",
      githubUrl: "https://github.com/andrecodexvictor/24podiums",
      demoUrl: "https://24podiums.com",
      isFeatured: true,
      highlightBadge: "Destaque F1 HUD — 24podiums.com"
    },
    {
      id: "zenpr",
      title: "ZenPR",
      category: "DevTools & CI/CD",
      shortDescription: "Automação inteligente de Pull Requests e governança de código no GitHub.",
      fullDescription: "Sistema automatizado para triagem de PRs, verificação de padrões de código, rotulagem inteligente e geração automática de changelog.",
      tags: ["TypeScript", "Node.js", "GitHub Octokit API", "GitHub Actions", "Webhooks"],
      status: "ONLINE / PROD",
      githubUrl: "https://github.com/andrecodexvictor/ZenPR",
      isFeatured: true,
      highlightBadge: "Produtividade Dev"
    },
    {
      id: "creator-kit-hub",
      title: "Creator-kit-Hub",
      category: "Web Application",
      shortDescription: "Hub de ferramentas de mídia e utilitários visuais client-side para criadores.",
      fullDescription: "Aplicação web offline-first para otimização de imagens, conversão de arquivos e preview de safe-zones de redes sociais com zero latência de servidor.",
      tags: ["React", "Next.js", "Tailwind CSS", "HTML5 Canvas", "Web Workers"],
      status: "ONLINE / PROD",
      githubUrl: "https://github.com/andrecodexvictor/Creator-kit-Hub",
      isFeatured: true,
      highlightBadge: "Creator Utility"
    },
    {
      id: "frame-sim",
      title: "Frame-sim",
      category: "Interactive Physics Engine",
      shortDescription: "Simulador físico e visualizador cinemático 2D interativo em tempo real.",
      fullDescription: "Engine visual em HTML5 Canvas para modelagem de forças, vetorização de movimento cinemático e física em passos de quadro a quadro.",
      tags: ["TypeScript", "HTML5 Canvas", "Physics Engine", "WebGL", "Math Kinematics"],
      status: "ONLINE / INTERACTIVE",
      githubUrl: "https://github.com/andrecodexvictor/Frame-sim",
      isFeatured: true,
      highlightBadge: "Interactive Canvas"
    },
    {
      id: "arm-claw-bot",
      title: "Arm-Claw-bot",
      category: "Robotics & Firmware",
      shortDescription: "Firmware e controlador web para braço robótico articulado com garra.",
      fullDescription: "Firmware embarcado em C++/Arduino para acionamento de servos multi-eixo, curvas de aceleração suave e interface web de telemetria.",
      tags: ["C++", "Arduino Framework", "ESP32", "Python", "IoT Controller"],
      status: "FIRMWARE / HARDWARE",
      githubUrl: "https://github.com/andrecodexvictor/Arm-Claw-bot",
      isFeatured: true,
      highlightBadge: "Robótica Embarcada"
    },
    {
      id: "sinistrinha",
      title: "Sinistrinha",
      category: "Automation & Bots",
      shortDescription: "Bot de automação e gerenciamento de comunidades no Discord & Telegram.",
      fullDescription: "Utilitário completo com suporte a webhooks personalizados, sistema de eventos, moderação e integrações dinâmicas de alertas.",
      tags: ["Node.js", "Python", "Discord.js", "Telegraf API", "MongoDB"],
      status: "ONLINE / BOT",
      githubUrl: "https://github.com/andrecodexvictor/Sinistrinha",
      isFeatured: true,
      highlightBadge: "Automação Community"
    }
  ] as Project[],

  secondaryRepos: [
    {
      name: "script-kitty",
      icon: "Terminal",
      description: "Gerenciador de scripts e automações em Shell/Bash para produtividade de terminal e tarefas de segurança.",
      tags: ["Bash", "Shell", "CLI", "Automation"],
      githubUrl: "https://github.com/andrecodexvictor/script-kitty"
    },
    {
      name: "dot-architecture",
      icon: "Network",
      description: "Conjunto de padrões e scripts de diagramação de arquitetura de sistemas utilizando arquivos DOT e Graphviz.",
      tags: ["Graphviz", "DOT", "Mermaid", "Diagrams"],
      githubUrl: "https://github.com/andrecodexvictor/dot-architecture"
    },
    {
      name: "dotstack",
      icon: "Layers",
      description: "Visualizador de stack de infraestrutura e protocolos leves para inspecionar fluxos de dados e microsserviços.",
      tags: ["C", "Python", ".NET", "Protocol Stack"],
      githubUrl: "https://github.com/andrecodexvictor/dotstack"
    }
  ] as SecondaryRepo[],

  caseStudies: [
    {
      id: "gp-pme",
      title: "GP-PME: Gestão de Projetos e Engenharia Enxuta em PMEs",
      subtitle: "Estrutura completa de governança ágil, arquitetura de software limpa e automação com IA para Pequenas e Médias Empresas.",
      readTime: "7 min de leitura",
      category: "Artigo & Case Study",
      date: "2026",
      summary: "Análise profunda do framework GP-PME (Gestão de Projetos em Pequenas e Médias Empresas), abordando como equilibrar velocidade de lançamento, custo reduzido, governança técnica e alta percepção de valor visual.",
      content: [
        "Em Pequenas e Médias Empresas (PMEs), o maior desafio do desenvolvimento de software não é a escassez de ideias, mas a execução lenta e a falta de padronização técnica. Muitas vezes, projetos demoram meses para sair do papel ou chegam ao mercado com um visual amador que compromete a credibilidade da empresa.",
        "O framework GP-PME foi criado justamente para resolver esse gargalo. Ele combina metodologias ágeis simplificadas com ferramentas modernas de engenharia, integração contínua (CI/CD), componentes de UI reutilizáveis e o uso estratégico de Inteligência Artificial em cada etapa do ciclo de vida do produto.",
        "Ao implementar ciclos curtos de prototipagem e validação prática, as PMEs conseguem reduzir o Time-To-Market de semanas para poucos dias, enquanto mantêm um padrão estético e arquitetural refinado que transmite autoridade imediata a clientes, investidores e parceiros."
      ],
      pillars: [
        {
          name: "1. Ciclos Curtos de Prototipagem & Validação Rápida",
          description: "Entregas em iterações de poucas horas ou dias, focando 100% no MVP executável com alto valor percebido."
        },
        {
          name: "2. Pipelines CI/CD & Governança Enxuta (Ex: ZenPR)",
          description: "Automação de triagem de código, testes e rotulagem automatizada no GitHub, garantindo qualidade sem burocracia."
        },
        {
          name: "3. Design System Modular & Estética de Alta Performance",
          description: "Uso de componentes React/Tailwind pré-estruturados com linguagem visual marcante (Dark Neon / HUD) que encanta o visitante."
        },
        {
          name: "4. Aceleração Contínua com Agentes de IA",
          description: "Integração de LLMs e automações para auxílio em revisão de código, geração de documentação e testes automatizados."
        }
      ],
      keyTakeaways: [
        "Velocidade técnica aliada a rigor arquitetural sem gerar retrabalho.",
        "Uso prático de IA como acelerador direto da capacidade produtiva.",
        "Identidade visual forte como vetor de conversão de clientes e autoridade técnica."
      ]
    }
  ] as CaseStudy[],

  // Telemetry Evolution & Growth Timeline Chart Data
  evolutionTimeline: [
    { quarter: "Q1 2025", fullstackSkill: 75, aiIntegration: 50, projectsCompleted: 2 },
    { quarter: "Q2 2025", fullstackSkill: 82, aiIntegration: 68, projectsCompleted: 4 },
    { quarter: "Q3 2025", fullstackSkill: 88, aiIntegration: 80, projectsCompleted: 6 },
    { quarter: "Q4 2025", fullstackSkill: 92, aiIntegration: 90, projectsCompleted: 8 },
    { quarter: "Q1 2026", fullstackSkill: 96, aiIntegration: 95, projectsCompleted: 11 },
  ] as EvolutionMetric[],

  // Real Live Updates & News Feed
  liveUpdates: [
    {
      id: "up-script-kitty",
      type: "LINKEDIN_POST",
      title: "Novo Post no LinkedIn: Automações com script-kitty & produtividade no terminal",
      date: "RECENTE",
      summary: "Post recente sobre como o repositório script-kitty otimiza rotinas de terminal e Shell/Bash no dia a dia dev.",
      link: "https://www.linkedin.com/in/andré-victor-andrade-oliveira-santos-22b142208",
      tag: "LinkedIn Update"
    },
    {
      id: "up-24podiums",
      type: "PROJECT_RELEASE",
      title: "Lançamento Oficial: 24podiums.com online!",
      date: "DESTAQUE",
      summary: "O simulador de estratégia de F1 já está ao vivo no domínio próprio 24podiums.com.",
      link: "https://24podiums.com",
      tag: "Project Live"
    },
    {
      id: "up-gppme",
      type: "ARTICLE",
      title: "Publicação do Framework GP-PME no Portfólio",
      date: "JUL 2026",
      summary: "Artigo completo sobre Engenharia Enxuta e Gestão de Projetos para Pequenas e Médias Empresas.",
      link: "#artigos",
      tag: "Case Study"
    }
  ] as LiveUpdate[],

  // Certifications (Disabled by default as requested, can be toggled via Admin Panel)
  certificationsEnabled: false,
  certifications: [
    {
      id: "cert-1",
      title: "Full-Stack Software Engineering & Architecture",
      issuer: "Advanced Engineering Program",
      date: "2025 / 2026",
      badgeCode: "FS-ARCH-9982",
      status: "VERIFIED / ACTIVE",
      skillsCovered: ["Next.js App Router", "TypeScript", "REST APIs", "Clean Architecture"]
    },
    {
      id: "cert-2",
      title: "AI Systems & LLM Integration Builder",
      issuer: "AI Product Engineering",
      date: "2026",
      badgeCode: "AI-BUILDER-7712",
      status: "VERIFIED / ACTIVE",
      skillsCovered: ["Prompt Engineering", "OpenAI / Gemini APIs", "Autonomous Agents", "RAG"]
    }
  ] as Certification[]
};
