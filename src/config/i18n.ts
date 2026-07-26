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
    whatsapp: string;
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
    readArticle: string;
    closeArticle: string;
    pillarsTitle: string;
    takeawaysTitle: string;
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
    fastChannel: string;
    whatsappDirect: string;
    openChat: string;
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
      contact: '07. CONTACT',
      whatsapp: 'WHATSAPP'
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
      title: 'Stack & Technical Skills',
      subtitle: 'Technology ecosystem focused on stability, delivery speed, and Artificial Intelligence integration.',
      categories: {
        frontend: 'FRONTEND & INTERFACE',
        backend: 'BACKEND & APIS',
        ai: 'ARTIFICIAL INTELLIGENCE',
        devtools: 'DEVTOOLS & EMBEDDED'
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
      subtitle: 'Structured practical insights on applying lean engineering, AI automation, and rapid prototyping in Small and Medium Enterprises.',
      readArticle: 'READ FULL ARTICLE',
      closeArticle: 'CLOSE READING',
      pillarsTitle: 'STRUCTURAL PILLARS OF THE GP-PME FRAMEWORK',
      takeawaysTitle: 'KEY TAKEAWAYS'
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
      fastChannel: 'FAST CHANNEL',
      whatsappDirect: 'WhatsApp Direct',
      openChat: 'OPEN CHAT',
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
      contact: '07. CONTATO',
      whatsapp: 'WHATSAPP'
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
      categories: {
        frontend: 'FRONTEND & INTERFACE',
        backend: 'BACKEND & APIS',
        ai: 'INTELIGÊNCIA ARTIFICIAL',
        devtools: 'DEVTOOLS & EMBARCADOS'
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
      subtitle: 'Visão prática e estruturada sobre como aplicar engenharia enxuta, automação com IA e prototipagem rápida em Pequenas e Médias Empresas.',
      readArticle: 'LER ARTIGO COMPLETO',
      closeArticle: 'FECHAR LEITURA',
      pillarsTitle: 'PILARES ESTRUTURAIS DO FRAMEWORK GP-PME',
      takeawaysTitle: 'PONTOS CHAVE (KEY TAKEAWAYS)'
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
      fastChannel: 'CANAL RÁPIDO',
      whatsappDirect: 'WhatsApp Direct',
      openChat: 'ABRIR CHAT',
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
      contact: '07. CONTACTO',
      whatsapp: 'WHATSAPP'
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
      categories: {
        frontend: 'FRONTEND E INTERFAZ',
        backend: 'BACKEND Y APIS',
        ai: 'INTELIGENCIA ARTIFICIAL',
        devtools: 'HERRAMIENTAS Y EMBEBIDOS'
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
      subtitle: 'Visión práctica sobre cómo aplicar ingeniería ágil, automatización con IA y prototipado rápido en PYMEs.',
      readArticle: 'LEER ARTÍCULO COMPLETO',
      closeArticle: 'CERRAR LECTURA',
      pillarsTitle: 'PILARES ESTRUCTURALES DEL FRAMEWORK GP-PME',
      takeawaysTitle: 'PUNTOS CLAVE'
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
      fastChannel: 'CANAL RÁPIDO',
      whatsappDirect: 'WhatsApp Directo',
      openChat: 'ABRIR CHAT',
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
      contact: '07. 联系方式',
      whatsapp: 'WHATSAPP'
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
      categories: {
        frontend: '前端与界面',
        backend: '后端与 API',
        ai: '人工智能',
        devtools: '开发工具与嵌入式'
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
      subtitle: '关于在中小型企业中应用精益工程、AI 自动化与快速原型设计的实践洞察。',
      readArticle: '阅读全文',
      closeArticle: '关闭阅读',
      pillarsTitle: 'GP-PME 框架的核心支柱',
      takeawaysTitle: '核心要点'
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
      fastChannel: '快速通道',
      whatsappDirect: 'WhatsApp 直连',
      openChat: '打开聊天',
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
