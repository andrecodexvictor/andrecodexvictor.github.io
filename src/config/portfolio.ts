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
  keyTakeaways: string[];
}

export const PORTFOLIO_CONFIG = {
  profile: {
    name: "André Victor",
    handle: "andrecodexvictor",
    role: "Full-Stack Developer, AI Builder & Entusiasta de IA",
    valueProp: "Construo produtos web, interfaces e sistemas com IA, foco em execução e identidade visual forte.",
    bio: "Engenheiro de software e criador de produtos digitais focado em alta performance visual e técnica. Combinando o rigor da arquitetura web moderna, automações inteligentes com IA e a precisão do ecossistema de alta performance estilo cockpit / F1.",
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
      { name: "Git & GitHub Actions", level: "Avançado", icon: "GitBranch" },
      { name: "C++ & Arduino / ESP32", level: "Intermediário", icon: "CircuitBoard" },
      { name: "Docker & Linux Shell", level: "Intermediário", icon: "Container" },
    ]
  },

  featuredProjects: [
    {
      id: "zenpr",
      title: "ZenPR",
      category: "DevTools & CI/CD",
      shortDescription: "Automação inteligente de Pull Requests e governança de código no GitHub.",
      fullDescription: "Sistema automatizado para triagem de PRs, verificação de padrões de código, rotulagem inteligente e geração automática de changelog.",
      tags: ["TypeScript", "Node.js", "GitHub Octokit API", "GitHub Actions", "Webhooks"],
      status: "ONLINE / PROD",
      githubUrl: "https://github.com/andrecodexvictor/ZenPR",
      demoUrl: "https://zenpr.vercel.app",
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
      status: "ONLINE / DEMO READY",
      githubUrl: "https://github.com/andrecodexvictor/Creator-kit-Hub",
      demoUrl: "https://creator-kit-hub.vercel.app",
      isFeatured: true,
      highlightBadge: "Recomendado Vercel"
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
      demoUrl: "https://frame-sim.vercel.app",
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
    },
    {
      id: "24podiums",
      title: "24podiums",
      category: "Web Simulation & F1 Game",
      shortDescription: "Simulador de estratégia e gerenciamento de equipe de Fórmula 1 em 24 corridas.",
      fullDescription: "Jogo web interativo em que o usuário assume a liderança de uma equipe de F1, gerencia orçamento, contratação de pilotos e táticas de box ao longo de uma temporada.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Storage API"],
      status: "ONLINE / DEMO READY",
      githubUrl: "https://github.com/andrecodexvictor/24podiums",
      demoUrl: "https://24podiums.vercel.app",
      isFeatured: true,
      highlightBadge: "Destaque F1 HUD"
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
      subtitle: "Como estruturar desenvolvimento ágil, arquitetura limpa e entregas rápidas com foco em alto valor percebido.",
      readTime: "5 min de leitura",
      category: "Artigo & Case Study",
      date: "2026",
      summary: "Uma análise prática de como pequenas e médias empresas podem implementar governança técnica, automação com IA e prototipagem rápida sem gerar sobrecarga burocrática.",
      content: [
        "No ambiente competitivo de Pequenas e Médias Empresas (PMEs), o maior risco não é a falta de ideias, mas a velocidade de execução aliada à qualidade da entrega visual e técnica.",
        "O framework GP-PME estabelece diretrizes claras: ciclos curtos de prototipagem, automação de testes com CI/CD, padronização de componentes reutilizáveis e uso estratégico de IA para geração de insights e acelerar o desenvolvimento.",
        "Resultado: Redução dramática do tempo de colocação no mercado (Time-To-Market) e criação de produtos que transmitem robustez, credibilidade e apelo visual desde a primeira versão."
      ],
      keyTakeaways: [
        "Velocidade com rigor técnico: priorizar poucos projetos fortes com narrativa clara.",
        "Integração contínua de IA no fluxo de trabalho de desenvolvimento.",
        "Design visual marcante como diferencial de conversão e autoridade."
      ]
    }
  ] as CaseStudy[]
};
