export type Language = 'EN' | 'PT' | 'ES' | 'ZH';

export interface Translations {
  nav: {
    hero: string;
    projects: string;
    stack: string;
    caseStudy: string;
    certifications: string;
    about: string;
    contact: string;
  };
  hero: {
    statusLabel: string;
    aiEnthusiast: string;
    role: string;
    valueProp: string;
    description: string;
    viewProjects: string;
    directContact: string;
    projectsCount: string;
    projectsCountLabel: string;
    liveDemos: string;
    liveDemosLabel: string;
    fullstackAi: string;
    fullstackAiLabel: string;
  };
  telemetry: {
    title: string;
    telemetryTab: string;
    terminalTab: string;
    powerUnit: string;
    sector1: string;
    purple: string;
    aiLatency: string;
    deployStatus: string;
    readyForProd: string;
    pilotPhilosophyTitle: string;
    pilotPhilosophyDesc: string;
    modeLabel: string;
    executability: string;
  };
  liveUpdates: {
    title: string;
    badgeLabel: string;
    viewPost: string;
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    allCategory: string;
    codeRepo: string;
    liveDemo: string;
    secondaryTitle: string;
    secondarySubtitle: string;
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    mainFocusLabel: string;
    mainFocusText: string;
    categories: {
      frontend: string;
      backend: string;
      ai: string;
      devtools: string;
    };
  };
  charts: {
    sectionTag: string;
    title: string;
    subtitle: string;
    overviewTab: string;
    aiTab: string;
    chartTitle: string;
    fullstackLegend: string;
    aiLegend: string;
    metricEfficiency: string;
    metricAi: string;
    metricProjects: string;
    metricBuildTime: string;
  };
  caseStudies: {
    sectionTag: string;
    title: string;
    subtitle: string;
    articleTitle: string;
    articleSubtitle: string;
    readTime: string;
    category: string;
    date: string;
    readArticle: string;
    closeArticle: string;
    pillarsTitle: string;
    takeawaysTitle: string;
    content: string[];
    pillars: { name: string; description: string }[];
    keyTakeaways: string[];
  };
  certifications: {
    sectionTag: string;
    title: string;
    subtitle: string;
    verified: string;
    validated: string;
  };
  about: {
    sectionTag: string;
    title: string;
    headline: string;
    paragraphs: string[];
    interestsTitle: string;
    interests: {
      ai: string;
      learning: string;
      sales: string;
      anime: string;
      f1: string;
    };
    card: {
      specialization: string;
      background: string;
      backgroundVal: string;
      location: string;
      locationVal: string;
      preferredStack: string;
      superpower: string;
      superpowerVal: string;
    };
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    primaryEmail: string;
    secondaryEmail: string;
    copy: string;
    copied: string;
    formTitle: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendButton: string;
    successMessage: string;
  };
  footer: {
    deploymentReady: string;
    topButton: string;
    rightsReserved: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  EN: {
    nav: {
      hero: '01. HERO',
      projects: '02. PROJECTS',
      stack: '03. STACK',
      caseStudy: '04. CASE STUDY',
      certifications: '05. CERTIFICATIONS',
      about: '06. ABOUT',
      contact: '07. CONTACT'
    },
    hero: {
      statusLabel: 'SYSTEM STATUS: ONLINE',
      aiEnthusiast: 'AI Enthusiast',
      role: 'Full-Stack Developer, AI Builder & AI Enthusiast',
      valueProp: 'I build web products, interfaces, and AI systems with a focus on fast execution and striking visual identity.',
      description: 'Building full-stack web applications, high-velocity interfaces, and intelligent AI systems. Combining clean code architecture, rapid execution speed, and high-performance cockpit visual appeal.',
      viewProjects: 'VIEW PROJECTS',
      directContact: 'DIRECT CONTACT',
      projectsCount: '6+',
      projectsCountLabel: 'High Perceived Value',
      liveDemos: 'Live Demos',
      liveDemosLabel: 'Online Web Apps',
      fullstackAi: 'Full-Stack + AI',
      fullstackAiLabel: 'Execution Mindset'
    },
    telemetry: {
      title: 'TELEMETRY // F1 COCKPIT HUD',
      telemetryTab: 'TELEMETRY',
      terminalTab: 'TERMINAL',
      powerUnit: 'V6 HYBRID ENGINE // POWER UNIT',
      sector1: 'SECTOR 1',
      purple: '(PURPLE)',
      aiLatency: 'AI LATENCY',
      deployStatus: 'DEPLOY STATUS',
      readyForProd: 'READY FOR PRODUCTION',
      pilotPhilosophyTitle: 'PILOT PHILOSOPHY',
      pilotPhilosophyDesc: 'Execute fast, validate with precision, and deliver strong aesthetic identity.',
      modeLabel: 'MODE: FULL-STACK BUILDER',
      executability: '100% EXECUTABILITY'
    },
    liveUpdates: {
      title: 'LIVE UPDATES // NEWS & LINKEDIN POSTS',
      badgeLabel: 'REAL-TIME FEED',
      viewPost: 'VIEW PUBLICATION'
    },
    projects: {
      sectionTag: '// SECTION 02',
      title: 'Featured Projects',
      subtitle: 'A curated selection of web products, automation tools, and robotics engineering designed for high performance and visual storytelling.',
      allCategory: 'ALL',
      codeRepo: 'REPOSITORY',
      liveDemo: '24PODIUMS.COM',
      secondaryTitle: 'Architecture, Automation & Scripting',
      secondarySubtitle: 'Secondary utility libraries and CLI tools maintained for workflow optimization.'
    },
    skills: {
      sectionTag: '// SECTION 03',
      title: 'Tech Stack & Frameworks',
      subtitle: 'Technology ecosystem focused on stability, delivery speed, and Artificial Intelligence integration.',
      mainFocusLabel: '// MAIN TECH FOCUS:',
      mainFocusText: 'Main focus: TypeScript/Node, Python/Django, data (SQL/NoSQL, vector DBs such as ChromaDB and Pinecone, RAG pipelines) and agent frameworks (LangChain, LangGraph, CrewAI, n8n), exposed via REST APIs.',
      categories: {
        frontend: 'LANGUAGES & FRAMEWORKS',
        backend: 'DATABASES & VECTOR DB',
        ai: 'AI, AGENTS & ML FRAMEWORKS',
        devtools: 'DEVTOOLS & ARCHITECTURE'
      }
    },
    charts: {
      sectionTag: '// TECHNICAL EVOLUTION TELEMETRY',
      title: 'Evolution & Performance Metrics',
      subtitle: 'Continuous growth telemetry in full-stack engineering, AI integration, and quarterly project velocity.',
      overviewTab: 'OVERVIEW',
      aiTab: 'AI EVOLUTION',
      chartTitle: 'QUARTERLY TELEMETRY CHART',
      fullstackLegend: 'FULL-STACK',
      aiLegend: 'AI INTEGRATION',
      metricEfficiency: 'CODE EFFICIENCY',
      metricAi: 'AI INTEGRATION',
      metricProjects: 'PROJECTS DELIVERED',
      metricBuildTime: 'AVG BUILD TIME'
    },
    caseStudies: {
      sectionTag: '// SECTION 04 • TECHNICAL ARTICLE',
      title: 'Case Study & GP-PME Framework',
      subtitle: 'Structured practical insights on applying Lean IT, practical IT governance (ADM-Lite), Kanban (WIP=3), NIST-Lite security, and AI agents in SMEs.',
      articleTitle: 'GP-PME: Practical IT Governance for Small and Medium Enterprises',
      articleSubtitle: 'Complete framework for Lean IT governance, agile execution with strict WIP limits, NIST-Lite security, and AI copilots.',
      readTime: '7 min read',
      category: 'Article & Case Study',
      date: '2026',
      readArticle: 'READ FULL ARTICLE',
      closeArticle: 'CLOSE READING',
      pillarsTitle: 'STRUCTURAL PILLARS OF THE GP-PME FRAMEWORK',
      takeawaysTitle: 'KEY TAKEAWAYS',
      content: [
        "In Small and Medium Enterprises (SMEs), technology is frequently perceived as a reactive cost center. The main challenge is not a lack of demands or ideas, but constant technical disorganization, unmonitored rework, and endless external interruptions that shatter team productivity.",
        "The GP-PME Framework (Practical Governance for SMEs) was specifically engineered to scale IT governance to the actual size of the team — from a solo technician (One-Man-Band) up to teams of 100 people. It merges Lean IT principles, micro-adaptive agile cadences, and pragmatic security to deliver measurable business value from the first 24 hours (Phase Zero).",
        "The transverse AI assistance layer leverages specialized AI copilots (Claude Code Skills, Plug-and-Play Prompts, and MCP/FastAPI servers) under strict Human-in-the-Loop (HITL) supervision to automate technical documentation, PRD generation, and semantic RAG knowledge retrieval."
      ],
      pillars: [
        {
          name: "1. Essential Governance (ADM-Lite & CD-TI Lite)",
          description: "Bi-weekly 30-minute IT Decision Committee (CD-TI Lite), 4-Quadrant Priority Matrix, and Single Entry Channel to block workflow interruptions."
        },
        {
          name: "2. Agile Execution & Micro-Adaptive Cycle (Kanban WIP=3)",
          description: "1-Week Sprints, Canonical Kanban (To Do, Doing, Done) with a strict WIP Limit = 3, and Expedite Swimlane for immediate emergency incident mitigation."
        },
        {
          name: "3. Critical Security & Resilience (NIST-Lite & PRI)",
          description: "NIST-Lite cybersecurity framework, 3-2-1 Backup Policy, Incident Response Plan (PRI-Lite), and critical business asset mapping."
        },
        {
          name: "4. AI Acceleration & Transverse Agents (RAG & MCP)",
          description: "AI copilots with Human-in-the-Loop (HITL) supervision, automated PRD generation, FastAPI/MCP servers, and semantic RAG search."
        }
      ],
      keyTakeaways: [
        "Phase Zero 30-day playbook with Quick Wins measured in the first 24 hours.",
        "Governance right-sized to actual team bandwidth without heavy enterprise overhead.",
        "Artificial Intelligence as a transversal velocity multiplier under human supervision."
      ]
    },
    certifications: {
      sectionTag: '// CREDENTIALS & CERTIFICATION BADGES',
      title: 'Certifications & Recognition',
      subtitle: 'Verified credentials in software architecture, AI engineering, and embedded systems.',
      verified: 'VERIFIED / ACTIVE',
      validated: 'ENGINEERING VALIDATED'
    },
    about: {
      sectionTag: '// SECTION 05 • ABOUT ME',
      title: 'About Me & Journey',
      headline: 'Continuous learner, AI enthusiast, and ex-sales background with a passion for software.',
      paragraphs: [
        "Main focus: TypeScript/Node, Python/Django, data (SQL/NoSQL, vector DBs such as ChromaDB and Pinecone, RAG pipelines) and agent frameworks (LangChain, LangGraph, CrewAI, n8n), exposed via REST APIs.",
        "Data-driven decision making using SQL/NoSQL databases, vector databases (ChromaDB, Pinecone), RAG pipelines (Document QA, business knowledge bases), and REST APIs for integrations.",
        "Currently deepening my studies in Machine Learning, Neural Networks, and recursive learning loops.",
        "Combining background in sales, team leadership, and digital marketing with technical solutions that optimize processes for small and medium enterprises.",
        "In my free time, I am an anime enthusiast, avid reader, Formula 1 strategy lover, and addicted to solving complex problems with code."
      ],
      interestsTitle: 'INTERESTS & PASSIONS:',
      interests: {
        ai: 'Artificial Intelligence',
        learning: 'Books & Learning',
        sales: 'Sales & Communication',
        anime: 'Anime & Pop Culture',
        f1: 'Formula 1 & Strategy'
      },
      card: {
        specialization: 'SPECIALIZATION',
        background: 'BACKGROUND',
        backgroundVal: 'Sales + Web Engineering',
        location: 'LOCATION',
        locationVal: 'Brazil (Remote)',
        preferredStack: 'PREFERRED STACK',
        superpower: 'SUPERPOWER',
        superpowerVal: 'Solving Problems Fast'
      }
    },
    contact: {
      sectionTag: '// SECTION 06',
      title: 'Get In Touch',
      subtitle: 'Ready to build a new web product, automate processes with AI, or discuss technical opportunities? Contact me directly.',
      primaryEmail: 'PRIMARY EMAIL',
      secondaryEmail: 'SECONDARY EMAIL',
      copy: 'COPY',
      copied: 'COPIED!',
      formTitle: '// SEND QUICK MESSAGE',
      yourName: 'YOUR NAME',
      yourEmail: 'YOUR EMAIL',
      yourMessage: 'MESSAGE OR PROPOSAL',
      sendButton: 'DISPATCH MESSAGE',
      successMessage: '✓ Your email client opened with the pre-formatted message!'
    },
    footer: {
      deploymentReady: 'PRODUCTION SYSTEM ONLINE',
      topButton: 'TOP',
      rightsReserved: 'All rights reserved.'
    }
  },

  PT: {
    nav: {
      hero: '01. HERO',
      projects: '02. PROJETOS',
      stack: '03. STACK',
      caseStudy: '04. CASE STUDY',
      certifications: '05. CERTIFICAÇÕES',
      about: '06. SOBRE',
      contact: '07. CONTATO'
    },
    hero: {
      statusLabel: 'SYSTEM STATUS: ONLINE',
      aiEnthusiast: 'Entusiasta de IA',
      role: 'Full-Stack Developer, AI Builder & Entusiasta de IA',
      valueProp: 'Construo produtos web, interfaces e sistemas com IA, foco em execução e identidade visual forte.',
      description: 'Desenvolvo aplicações full-stack, interfaces de alta velocidade e sistemas inteligentes com IA. Unindo precisão de código, velocidade de entrega e apelo visual inspirado em cockpits de alta performance.',
      viewProjects: 'VER PROJETOS',
      directContact: 'CONTATO DIRETO',
      projectsCount: '6+',
      projectsCountLabel: 'Alto Valor Percebido',
      liveDemos: 'Live Demos',
      liveDemosLabel: 'Aplicações Online',
      fullstackAi: 'Full-Stack + IA',
      fullstackAiLabel: 'Foco em Execução'
    },
    telemetry: {
      title: 'TELEMETRIA // F1 COCKPIT HUD',
      telemetryTab: 'TELEMETRIA',
      terminalTab: 'TERMINAL',
      powerUnit: 'MOTOR V6 HYBRID // POWER UNIT',
      sector1: 'SETOR 1',
      purple: '(PURPLE)',
      aiLatency: 'LATÊNCIA IA',
      deployStatus: 'STATUS DE DEPLOY',
      readyForProd: 'PRONTO PARA PRODUÇÃO',
      pilotPhilosophyTitle: 'FILOSOFIA DO PILOTO',
      pilotPhilosophyDesc: 'Execute rápido, valide com precisão e entregue identidade estética marcante.',
      modeLabel: 'MODO: FULL-STACK BUILDER',
      executability: '100% EXECUTABILIDADE'
    },
    liveUpdates: {
      title: 'LIVE UPDATES // NOVIDADES & LINKEDIN POSTS',
      badgeLabel: 'FEED EM TEMPO REAL',
      viewPost: 'ACESSAR PUBLICAÇÃO'
    },
    projects: {
      sectionTag: '// SEÇÃO 02',
      title: 'Projetos em Destaque',
      subtitle: 'Uma seleção refinada de produtos web, ferramentas de automação e engenharia robótica projetados com foco em alta performance e narrativa visual.',
      allCategory: 'TODOS',
      codeRepo: 'REPOSITÓRIO',
      liveDemo: '24PODIUMS.COM',
      secondaryTitle: 'Arquitetura, Automação & Scripting',
      secondarySubtitle: 'Ferramentas secundárias e bibliotecas de utilitários mantidas para otimização de fluxo de trabalho.'
    },
    skills: {
      sectionTag: '// SEÇÃO 03',
      title: 'Stack & Habilidades Técnicas',
      subtitle: 'Ferramentas e ecossistema tecnológico focado em estabilidade, velocidade de entrega e integração de inteligência artificial.',
      mainFocusLabel: '// FOCO PRINCIPAL:',
      mainFocusText: 'Foco principal: TypeScript/Node, Python/Django, dados (SQL/NoSQL, bancos vetoriais como ChromaDB e Pinecone, pipelines de RAG) e frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expostos via APIs REST.',
      categories: {
        frontend: 'LINGUAGENS & FRAMEWORKS',
        backend: 'BANCOS DE DADOS & VETORES',
        ai: 'IA, AGENTES & MACHINE LEARNING',
        devtools: 'DEVTOOLS & ARQUITETURA'
      }
    },
    charts: {
      sectionTag: '// TELEMETRIA DE EVOLUÇÃO TÉCNICA',
      title: 'Evolução & Métricas de Performance',
      subtitle: 'Gráfico de progressão contínua em engenharia full-stack, integração de IA e velocidade de entregas por trimestre.',
      overviewTab: 'VISÃO GERAL',
      aiTab: 'EVOLUÇÃO IA',
      chartTitle: 'GRÁFICO DE TELEMETRIA TRIMESTRAL',
      fullstackLegend: 'FULL-STACK',
      aiLegend: 'INTEGRAÇÃO IA',
      metricEfficiency: 'EFICIÊNCIA DE CÓDIGO',
      metricAi: 'INTEGRAÇÃO IA',
      metricProjects: 'PROJETOS ENTREGUES',
      metricBuildTime: 'TEMPO MÉDIO DE BUILD'
    },
    caseStudies: {
      sectionTag: '// SEÇÃO 04 • ARTIGO TÉCNICO',
      title: 'Case Study & Framework GP-PME',
      subtitle: 'Visão prática sobre como aplicar TI Enxuta (Lean IT), governança prática (ADM-Lite), Kanban com WIP=3, segurança NIST-Lite e agentes de IA em PMEs.',
      articleTitle: 'GP-PME: Governança Prática e Engenharia Enxuta de TI em PMEs',
      articleSubtitle: 'Estrutura completa de governança ágil, execução com WIP=3 rígido, segurança NIST-Lite e copilotos de Inteligência Artificial.',
      readTime: '7 min de leitura',
      category: 'Artigo & Case Study',
      date: '2026',
      readArticle: 'LER ARTIGO COMPLETO',
      closeArticle: 'FECHAR LEITURA',
      pillarsTitle: 'PILARES ESTRUTURAIS DO FRAMEWORK GP-PME',
      takeawaysTitle: 'PONTOS CHAVE (KEY TAKEAWAYS)',
      content: [
        "Em Pequenas e Médias Empresas (PMEs), a TI é frequentemente vista como um centro de custo reativo. O maior desafio não é a escassez de demandas, mas a falta de padronização técnica, retrabalho constante e interrupções desordenadas que quebram o fluxo produtivo da equipe.",
        "O Framework GP-PME (Governança Prática para Pequenas e Médias Empresas) foi desenhado especificamente para dimensionar a governança de TI ao tamanho real do time — desde um profissional solo (One-Man-Band) até equipes de 100 pessoas. Ele funde os princípios da TI Enxuta (Lean IT), cadências ágeis micro-adaptativas e segurança pragmática para gerar valor desde as primeiras 24 horas (Fase Zero).",
        "A camada transversal de IA utiliza assistentes inteligentes (Skills, Prompts Plug-and-Play e servidores MCP/FastAPI) sob supervisão humana estrita (Human-in-the-Loop) para automatizar a burocracia técnica, geração de PRDs e busca semântica em base de conhecimento (RAG)."
      ],
      pillars: [
        {
          name: "1. Governança Essencial (ADM-Lite & CD-TI Lite)",
          description: "Comitê de Decisão de TI quinzenal de 30 min, Matriz de Priorização em 4 Quadrantes e Canal Único para bloqueio de interrupções."
        },
        {
          name: "2. Execução Ágil & Ciclo Micro-Adaptativo (Kanban WIP=3)",
          description: "Sprints de 1 semana, Kanban Kanônico (A Fazer, Em Andamento, Concluído) com limite rígido WIP=3 e Raia de Expedite para emergências."
        },
        {
          name: "3. Segurança Crítica & Resiliência (NIST-Lite & PRI)",
          description: "Segurança cibernética NIST-Lite, Política de Backup 3-2-1, Plano de Resposta a Incidentes (PRI-Lite) e inventário de ativos críticos."
        },
        {
          name: "4. Aceleração por IA & Agentes Transversais (RAG & MCP)",
          description: "Copilotos de IA com supervisão humana (HITL), automação de PRDs, servidor MCP/FastAPI e busca semântica RAG."
        }
      ],
      keyTakeaways: [
        "Fase Zero com playbook de 30 dias e Quick Wins medidos nas primeiras 24 horas.",
        "Governança ajustada ao tamanho real do time sem sobrecarga burocrática.",
        "Inteligência Artificial como acelerador transversal sob supervisão humana."
      ]
    },
    certifications: {
      sectionTag: '// CREDENCIAIS & BADGES DE CERTIFICAÇÃO',
      title: 'Certificações & Reconhecimento Técnico',
      subtitle: 'Credenciais verificadas em arquitetura de software, engenharia de inteligência artificial e sistemas embarcados.',
      verified: 'VERIFICADO / ATIVO',
      validated: 'VALIDADO ENGENHARIA'
    },
    about: {
      sectionTag: '// SEÇÃO 05 • QUEM SOU EU',
      title: 'Sobre Mim & Minha Trajetória',
      headline: 'Estudante contínuo, entusiasta de IA e ex-vendedor com paixão por tecnologia.',
      paragraphs: [
        "Foco principal: TypeScript/Node, Python/Django, dados (SQL/NoSQL, bancos vetoriais como ChromaDB e Pinecone, pipelines de RAG) e frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expostos via APIs REST.",
        "Decisão orientada a dados usando bancos SQL/NoSQL, bancos vetoriais (ChromaDB, Pinecone), pipelines de RAG (QA de documentos, bases de conhecimento de negócio) e APIs REST para integrações.",
        "Atualmente aprofundo meus estudos em Machine Learning, Redes Neurais e loops de aprendizado recursivo.",
        "Combino experiência em vendas, gestão de equipes e marketing digital com soluções técnicas que melhoram processos de pequenas e médias empresas.",
        "No tempo livre, sou fã de animes, leitor assíduo de livros, apaixonado pela estratégia da Fórmula 1 e viciado em resolver problemas complexos com código."
      ],
      interestsTitle: 'INTERESSES & PAIXÕES:',
      interests: {
        ai: 'Inteligência Artificial',
        learning: 'Livros & Aprendizado',
        sales: 'Vendas & Comunicação',
        anime: 'Animes & Pop Culture',
        f1: 'Fórmula 1 & Estratégia'
      },
      card: {
        specialization: 'ESPECIALIZAÇÃO',
        background: 'BAGAGEM',
        backgroundVal: 'Vendas + Engenharia Web',
        location: 'LOCALIZAÇÃO',
        locationVal: 'Brasil (Remoto)',
        preferredStack: 'STACK PREFERIDA',
        superpower: 'SUPERPODER',
        superpowerVal: 'Resolver Problemas Rápido'
      }
    },
    contact: {
      sectionTag: '// SEÇÃO 06',
      title: 'Entrar em Contato',
      subtitle: 'Pronto para construir um novo produto web, automatizar processos com IA ou discutir oportunidades de tecnologia? Entre em contato direto.',
      primaryEmail: 'E-MAIL PRINCIPAL',
      secondaryEmail: 'E-MAIL SECUNDÁRIO',
      copy: 'COPIAR',
      copied: 'COPIADO!',
      formTitle: '// ENVIAR MENSAGEM RÁPIDA',
      yourName: 'SEU NOME',
      yourEmail: 'SEU E-MAIL',
      yourMessage: 'MENSAGEM OU PROPOSTA',
      sendButton: 'DISPARAR MENSAGEM',
      successMessage: '✓ Seu cliente de e-mail foi aberto com a mensagem pronta para envio!'
    },
    footer: {
      deploymentReady: 'SISTEMA DE PRODUÇÃO ONLINE',
      topButton: 'TOPO',
      rightsReserved: 'Todos os direitos reservados.'
    }
  },

  ES: {
    nav: {
      hero: '01. INICIO',
      projects: '02. PROYECTOS',
      stack: '03. STACK',
      caseStudy: '04. CASE STUDY',
      certifications: '05. CERTIFICACIONES',
      about: '06. SOBRE MÍ',
      contact: '07. CONTACTO'
    },
    hero: {
      statusLabel: 'ESTADO DEL SISTEMA: ONLINE',
      aiEnthusiast: 'Entusiasta de IA',
      role: 'Desarrollador Full-Stack, Creador de IA y Entusiasta de IA',
      valueProp: 'Construyo productos web, interfaces y sistemas de IA enfocados en rápida ejecución y fuerte identidad visual.',
      description: 'Construyendo aplicaciones web full-stack, interfaces de alta velocidad y sistemas inteligentes con IA. Combinando arquitectura limpia, rapidez de entrega y diseño HUD de alto rendimiento.',
      viewProjects: 'VER PROYECTOS',
      directContact: 'CONTACTO DIRECTO',
      projectsCount: '6+',
      projectsCountLabel: 'Alto Valor Percibido',
      liveDemos: 'Demos en Vivo',
      liveDemosLabel: 'Apps Web Online',
      fullstackAi: 'Full-Stack + IA',
      fullstackAiLabel: 'Enfoque en Ejecución'
    },
    telemetry: {
      title: 'TELEMETRÍA // F1 COCKPIT HUD',
      telemetryTab: 'TELEMETRÍA',
      terminalTab: 'TERMINAL',
      powerUnit: 'MOTOR V6 HYBRID // UNIDAD DE POTENCIA',
      sector1: 'SECTOR 1',
      purple: '(PURPLE)',
      aiLatency: 'LATENCIA IA',
      deployStatus: 'ESTADO DE DEPLOY',
      readyForProd: 'LISTO PARA PRODUCCIÓN',
      pilotPhilosophyTitle: 'FILOSOFÍA DEL PILOTO',
      pilotPhilosophyDesc: 'Ejecuta rápido, valida con precisión y entrega una identidad estética destacada.',
      modeLabel: 'MODO: FULL-STACK BUILDER',
      executability: '100% EJECUTABILIDAD'
    },
    liveUpdates: {
      title: 'ACTUALIZACIONES EN VIVO // NOTICIAS Y LINKEDIN',
      badgeLabel: 'FEED EN TIEMPO REAL',
      viewPost: 'VER PUBLICACIÓN'
    },
    projects: {
      sectionTag: '// SECCIÓN 02',
      title: 'Proyectos Destacados',
      subtitle: 'Una selección cuidada de productos web, herramientas de automatización y robótica diseñada para alto rendimiento y narrativa visual.',
      allCategory: 'TODOS',
      codeRepo: 'REPOSITORIO',
      liveDemo: '24PODIUMS.COM',
      secondaryTitle: 'Arquitectura, Automatización y Scripting',
      secondarySubtitle: 'Librerías secundarias y herramientas CLI mantenidas para optimización del flujo de trabajo.'
    },
    skills: {
      sectionTag: '// SECCIÓN 03',
      title: 'Stack y Habilidades Técnicas',
      subtitle: 'Ecosistema tecnológico enfocado en estabilidad, velocidad de entrega e integración de Inteligencia Artificial.',
      mainFocusLabel: '// ENFOQUE PRINCIPAL:',
      mainFocusText: 'Enfoque principal: TypeScript/Node, Python/Django, datos (SQL/NoSQL, bases de datos vectoriales como ChromaDB y Pinecone, pipelines de RAG) y frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expuestos mediante APIs REST.',
      categories: {
        frontend: 'LENGUAJES Y FRAMEWORKS',
        backend: 'BASES DE DATOS Y VECTORES',
        ai: 'IA, AGENTES Y MACHINE LEARNING',
        devtools: 'HERRAMIENTAS Y ARQUITECTURA'
      }
    },
    charts: {
      sectionTag: '// TELEMETRÍA DE EVOLUCIÓN TÉCNICA',
      title: 'Evolución y Métricas de Rendimiento',
      subtitle: 'Gráfico de progresión continua en ingeniería full-stack, integración de IA y velocidad de entregas.',
      overviewTab: 'VISIÓN GENERAL',
      aiTab: 'EVOLUCIÓN IA',
      chartTitle: 'GRÁFICO DE TELEMETRÍA TRIMESTRAL',
      fullstackLegend: 'FULL-STACK',
      aiLegend: 'INTEGRACIÓN IA',
      metricEfficiency: 'EFICIENCIA DE CÓDIGO',
      metricAi: 'INTEGRACIÓN IA',
      metricProjects: 'PROYECTOS ENTREGADOS',
      metricBuildTime: 'TIEMPO PROMEDIO BUILD'
    },
    caseStudies: {
      sectionTag: '// SECCIÓN 04 • ARTÍCULO TÉCNICO',
      title: 'Case Study y Framework GP-PME',
      subtitle: 'Visión práctica sobre cómo aplicar Lean IT, gobernanza práctica (ADM-Lite), Kanban con WIP=3, seguridad NIST-Lite y agentes de IA en PYMEs.',
      articleTitle: 'GP-PME: Gobernanza Práctica e Ingeniería Ágil de TI en PYMEs',
      articleSubtitle: 'Estructura completa de gobernanza ágil, ejecución con WIP=3 estricto, seguridad NIST-Lite y copilotos de Inteligencia Artificial.',
      readTime: '7 min de lectura',
      category: 'Artículo & Case Study',
      date: '2026',
      readArticle: 'LEER ARTÍCULO COMPLETO',
      closeArticle: 'CERRAR LECTURA',
      pillarsTitle: 'PILARES ESTRUCTURALES DEL FRAMEWORK GP-PME',
      takeawaysTitle: 'PUNTOS CLAVE',
      content: [
        "En Pequeñas y Medianas Empresas (PYMEs), la tecnología a menudo se percibe como un centro de costos reactivo. El mayor desafío no es la falta de ideas o demandas, sino la desorganización técnica, el retrabajo y las interrupciones constantes.",
        "El Framework GP-PME (Gobernanza Práctica para PYMEs) fue diseñado específicamente para adaptar la gobernanza de TI al tamaño real del equipo, desde un técnico solo hasta equipos de 100 personas. Combina principios de Lean IT, cadencias ágiles y seguridad pragmática para generar valor desde las primeras 24 horas (Fase Cero).",
        "La capa transversal de IA utiliza asistentes inteligentes (Skills, Prompts Plug-and-Play y servidores MCP/FastAPI) bajo supervisión humana estricta (Human-in-the-Loop) para automatizar la documentación técnica, generación de PRDs y búsqueda semántica RAG."
      ],
      pillars: [
        {
          name: "1. Gobernanza Esencial (ADM-Lite y CD-TI Lite)",
          description: "Comité de Decisión de TI quincenal de 30 min, Matriz de Prioridad en 4 Cuadrantes y Canal Único para bloqueo de interrupciones."
        },
        {
          name: "2. Ejecución Ágil y Ciclo Micro-Adaptativo (Kanban WIP=3)",
          description: "Sprints de 1 semana, Kanban Canónico con límite estricto WIP=3 y Carril Rápido de Expedite para emergencias."
        },
        {
          name: "3. Seguridad Crítica y Resiliencia (NIST-Lite y PRI)",
          description: "Ciberseguridad NIST-Lite, Política de Backup 3-2-1, Plan de Respuesta a Incidentes (PRI-Lite) e inventario de activos."
        },
        {
          name: "4. Aceleración por IA y Agentes Transversales (RAG y MCP)",
          description: "Copilotos de IA con supervisión humana (HITL), automatización de PRDs, servidor MCP/FastAPI y búsqueda semántica RAG."
        }
      ],
      keyTakeaways: [
        "Fase Cero con playbook de 30 días y Quick Wins medidos desde las primeras 24 horas.",
        "Gobernanza dimensionada al tamaño real del equipo sin burocracia innecesaria.",
        "Inteligencia Artificial como multiplicador de velocidad bajo supervisión humana."
      ]
    },
    certifications: {
      sectionTag: '// CREDENCIALES Y CERTIFICACIONES',
      title: 'Certificaciones y Reconocimiento',
      subtitle: 'Credenciales verificadas en arquitectura de software, ingeniería de IA y sistemas embebidos.',
      verified: 'VERIFICADO / ACTIVO',
      validated: 'INGENIERÍA VALIDADA'
    },
    about: {
      sectionTag: '// SECCIÓN 05 • SOBRE MÍ',
      title: 'Sobre Mí y Mi Trayectoria',
      headline: 'Estudiante continuo, entusiasta de IA y experiencia en ventas con pasión por el software.',
      paragraphs: [
        "Enfoque principal: TypeScript/Node, Python/Django, datos (SQL/NoSQL, bases de datos vectoriales como ChromaDB y Pinecone, pipelines de RAG) y frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expuestos mediante APIs REST.",
        "Toma de decisiones orientada a datos utilizando bases SQL/NoSQL, bases vectoriales (ChromaDB, Pinecone), pipelines de RAG (QA de documentos, bases de conocimiento) y APIs REST para integraciones.",
        "Actualmente profundizando mis estudios en Machine Learning, Redes Neuronales y bucles de aprendizaje recursivo.",
        "Combinando experiencia en ventas, gestión de equipos y marketing digital con soluciones técnicas que mejoran los procesos de pequeñas y medianas empresas.",
        "En mi tiempo libre, soy fan del anime, lector asiduo, apasionado de la estrategia de la Fórmula 1 y adicto a resolver problemas complejos con código."
      ],
      interestsTitle: 'INTERESES Y PASIONES:',
      interests: {
        ai: 'Inteligencia Artificial',
        learning: 'Libros y Aprendizaje',
        sales: 'Ventas y Comunicación',
        anime: 'Anime y Cultura Pop',
        f1: 'Fórmula 1 y Estrategia'
      },
      card: {
        specialization: 'ESPECIALIZACIÓN',
        background: 'TRAYECTORIA',
        backgroundVal: 'Ventas + Ingeniería Web',
        location: 'UBICACIÓN',
        locationVal: 'Brasil (Remoto)',
        preferredStack: 'STACK PREFERIDO',
        superpower: 'SUPERPODER',
        superpowerVal: 'Resolver Problemas Rápido'
      }
    },
    contact: {
      sectionTag: '// SECCIÓN 06',
      title: 'Contacto Directo',
      subtitle: '¿Listo para construir un nuevo producto web, automatizar procesos con IA o discutir oportunidades técnicas? Contáctame directamente.',
      primaryEmail: 'CORREO PRINCIPAL',
      secondaryEmail: 'CORREO SECUNDARIO',
      copy: 'COPIAR',
      copied: '¡COPIADO!',
      formTitle: '// ENVIAR MENSAJE RÁPIDO',
      yourName: 'TU NOMBRE',
      yourEmail: 'TU CORREO',
      yourMessage: 'MENSAJE O PROPUESTA',
      sendButton: 'ENVIAR MENSAJE',
      successMessage: '✓ ¡Se abrió tu cliente de correo con el mensaje preformateado!'
    },
    footer: {
      deploymentReady: 'SISTEMA DE PRODUCCIÓN ONLINE',
      topButton: 'INICIO',
      rightsReserved: 'Todos los derechos reservados.'
    }
  },

  ZH: {
    nav: {
      hero: '01. 主页',
      projects: '02. 项目',
      stack: '03. 技术栈',
      caseStudy: '04. 案例研究',
      certifications: '05. 认证',
      about: '06. 关于我',
      contact: '07. 联系方式'
    },
    hero: {
      statusLabel: '系统状态: 在线',
      aiEnthusiast: '人工智能狂热爱好者',
      role: '全栈开发者, AI 构建者 & 人工智能爱好者',
      valueProp: '我构建 Web 产品、高级界面和 AI 系统，专注于快速执行与强烈的视觉标识。',
      description: '构建全栈 Web 应用、高速界面和智能 AI 系统。结合干净的代码架构、快速交付速度以及赛车驾驶舱级别的视觉体验。',
      viewProjects: '查看项目',
      directContact: '直接联系',
      projectsCount: '6+',
      projectsCountLabel: '高感知价值项目',
      liveDemos: '在线演示',
      liveDemosLabel: '在线应用',
      fullstackAi: '全栈 + AI',
      fullstackAiLabel: '注重执行'
    },
    telemetry: {
      title: '遥测系统 // F1 驾驶舱 HUD',
      telemetryTab: '遥测',
      terminalTab: '终端',
      powerUnit: 'V6 混合动力发动机 // 动力单元',
      sector1: '第 1 赛段',
      purple: '(紫速)',
      aiLatency: 'AI 延迟',
      deployStatus: '部署状态',
      readyForProd: '生产环境准备就绪',
      pilotPhilosophyTitle: '车手理念',
      pilotPhilosophyDesc: '快速执行、精准验证并交付具有强烈美学特征的产品。',
      modeLabel: '模式: 全栈开发者',
      executability: '100% 可执行性'
    },
    liveUpdates: {
      title: '实时更新 // 动态与 LINKEDIN 帖子',
      badgeLabel: '实时数据流',
      viewPost: '查看发布内容'
    },
    projects: {
      sectionTag: '// 第 02 部分',
      title: '精选项目',
      subtitle: '精选 Web 产品、自动化工具与机器人工程，专注于高性能与视觉叙事。',
      allCategory: '全部',
      codeRepo: '代码仓库',
      liveDemo: '24PODIUMS.COM',
      secondaryTitle: '架构、自动化与脚本',
      secondarySubtitle: '用于工作流优化的辅助工具库与命令行工具。'
    },
    skills: {
      sectionTag: '// 第 03 部分',
      title: '技术栈与专业技能',
      subtitle: '专注于稳定性、交付速度与人工智能集成的技术生态系统。',
      mainFocusLabel: '// 核心专注:',
      mainFocusText: '核心专注: TypeScript/Node, Python/Django, 数据 (SQL/NoSQL, 向量数据库如 ChromaDB 和 Pinecone, RAG 管道) 以及代理框架 (LangChain, LangGraph, CrewAI, n8n)，通过 REST API 提供服务。',
      categories: {
        frontend: '语言与框架',
        backend: '数据库与向量数据库',
        ai: '人工智能与代理框架',
        devtools: '开发工具与架构'
      }
    },
    charts: {
      sectionTag: '// 技术演进遥测',
      title: '演进与性能指标',
      subtitle: '全栈工程、AI 集成与季度项目交付速度的持续增长遥测图表。',
      overviewTab: '概览',
      aiTab: 'AI 演进',
      chartTitle: '季度遥测图表',
      fullstackLegend: '全栈',
      aiLegend: 'AI 集成',
      metricEfficiency: '代码效率',
      metricAi: 'AI 集成度',
      metricProjects: '交付项目数',
      metricBuildTime: '平均构建时间'
    },
    caseStudies: {
      sectionTag: '// 第 04 部分 • 技术文章',
      title: '案例研究与 GP-PME 框架',
      subtitle: '关于在中小型企业中应用精益 IT、实用 IT 治理 (ADM-Lite)、Kanban (WIP=3)、NIST-Lite 安全与 AI 代理的实践洞察。',
      articleTitle: 'GP-PME: 中小型企业实用 IT 治理与精益工程',
      articleSubtitle: '完整的高效 IT 治理框架、严格 WIP=3 限制的敏捷执行、NIST-Lite 安全防护以及 AI 智能助手。',
      readTime: '7 分钟阅读',
      category: '文章与案例研究',
      date: '2026',
      readArticle: '阅读全文',
      closeArticle: '关闭阅读',
      pillarsTitle: 'GP-PME 框架的核心支柱',
      takeawaysTitle: '核心要点',
      content: [
        "在中小型企业 (SME) 中，技术常被视为被动的成本中心。核心挑战不是缺乏需求或想法，而是缺乏技术标准化、频繁的返工以及破坏团队生产力的无序打扰。",
        "GP-PME 框架 (中小型企业实用治理) 专为将 IT 治理扩展至团队的实际规模而设计——从单人技术员 (One-Man-Band) 到 100 人的团队。它融合了精益 IT (Lean IT) 原则、微适应敏捷节奏与务实的安全策略，从前 24 小时 (Phase Zero) 开始交付可衡量的商业价值。",
        "横向 AI 辅助层在严格的人类监督 (Human-in-the-Loop) 下利用专用 AI 助手 (Skills、Plug-and-Play Prompts 及 MCP/FastAPI 服务器) 自动化技术文档、PRD 生成以及语义 RAG 知识检索。"
      ],
      pillars: [
        {
          name: "1. 核心治理 (ADM-Lite & CD-TI Lite)",
          description: "每两周 30 分钟的 IT 决策委员会 (CD-TI Lite)、4 象限优先级矩阵以及用于阻断打扰的单一需求入口通道。"
        },
        {
          name: "2. 敏捷执行与微适应循环 (Kanban WIP=3)",
          description: "1 周 Sprint、规范 Kanban (待办、进行中、已完成) 配合严格 WIP=3 限制，以及用于紧急事故处置的快速通道。"
        },
        {
          name: "3. 关键安全与韧性 (NIST-Lite & PRI)",
          description: "NIST-Lite 网络安全框架、3-2-1 备份策略、事故响应计划 (PRI-Lite) 以及关键资产清单。"
        },
        {
          name: "4. AI 加速与横向代理 (RAG & MCP)",
          description: "带有人类监督 (HITL) 的 AI 助手、PRD 自动生成、FastAPI/MCP 服务器以及语义 RAG 搜索。"
        }
      ],
      keyTakeaways: [
        "Phase Zero 30 天剧本，前 24 小时即可衡量速赢成果 (Quick Wins)。",
        "量体裁衣的治理结构，无冗余的企业级官僚负担。",
        "人类监督下作为横向加速器的人工智能。"
      ]
    },
    certifications: {
      sectionTag: '// 凭证与认证徽章',
      title: '认证与技术认可',
      subtitle: '软件架构、AI 工程与嵌入式系统领域的已验证凭证。',
      verified: '已验证 / 激活',
      validated: '工程验证合格'
    },
    about: {
      sectionTag: '// 第 05 部分 • 关于我',
      title: '关于我与个人经历',
      headline: '终身学习者、AI 爱好者，拥有销售背景并热爱软件工程。',
      paragraphs: [
        "核心专注: TypeScript/Node, Python/Django, 数据 (SQL/NoSQL, 向量数据库如 ChromaDB 和 Pinecone, RAG 管道) 以及代理框架 (LangChain, LangGraph, CrewAI, n8n)，通过 REST API 提供服务。",
        "数据驱动决策: 使用 SQL/NoSQL 数据库、向量数据库 (ChromaDB, Pinecone)、RAG 管道 (文档 QA、业务知识库) 以及 REST API 进行集成。",
        "目前正深入研究机器学习、神经网络与递归学习循环。",
        "将销售、团队领导力与数字营销背景与优化中小型企业流程的技术解决方案相结合。",
        "业余时间，我是动漫爱好者、热心读者、一级方程式策略迷，并热衷于通过代码解决复杂问题。"
      ],
      interestsTitle: '兴趣与热情:',
      interests: {
        ai: '人工智能',
        learning: '阅读与学习',
        sales: '销售与沟通',
        anime: '动漫与流行文化',
        f1: '一级方程式与策略'
      },
      card: {
        specialization: '专业领域',
        background: '背景',
        backgroundVal: '销售 + Web 工程',
        location: '位置',
        locationVal: '巴西 (可远程)',
        preferredStack: '偏好技术栈',
        superpower: '核心优势',
        superpowerVal: '高效解决复杂问题'
      }
    },
    contact: {
      sectionTag: '// 第 06 部分',
      title: '直接联系',
      subtitle: '准备好构建新的 Web 产品、通过 AI 自动化流程或讨论技术合作了吗？请直接联系我。',
      primaryEmail: '主邮箱',
      secondaryEmail: '备用邮箱',
      copy: '复制',
      copied: '已复制!',
      formTitle: '// 发送快速消息',
      yourName: '您的姓名',
      yourEmail: '您的邮箱',
      yourMessage: '消息或合作意向',
      sendButton: '发送消息',
      successMessage: '✓ 已为您打开邮件客户端并准备好预格式化消息！'
    },
    footer: {
      deploymentReady: '生产系统在线',
      topButton: '回到顶部',
      rightsReserved: '保留所有权利。'
    }
  }
};
