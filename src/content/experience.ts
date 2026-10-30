import type { Locale } from './gear';

export interface ExperienceItem {
  id: string;
  company: string;
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  location: Record<Locale, string>;
  typeBadge: Record<Locale, string>;
  summary: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  technologies: string[];
  confidentialityNotice?: Record<Locale, string>;
}

export interface EngineeringPrinciple {
  number: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'vittalweb',
    company: 'VittalWeb',
    role: {
      en: 'Full Stack & Applied AI Engineering Intern',
      pt: 'Estagiário de Engenharia Full Stack e IA Aplicada',
    },
    period: {
      en: 'Jun 2026 — Present',
      pt: 'Jun 2026 — Presente',
    },
    location: {
      en: 'Brazil · Hybrid / Remote Workflows',
      pt: 'Brasil · Fluxos Híbridos / Remotos',
    },
    typeBadge: {
      en: 'Production Applied AI & Full-Stack',
      pt: 'IA Aplicada em Produção & Full-Stack',
    },
    summary: {
      en: 'Building and hardening production AI agents, LLM tool-calling pipelines, and backend integrations for real operational workflows under strict reliability and evaluation guardrails.',
      pt: 'Desenvolvimento e endurecimento de agentes de IA em produção, pipelines de tool-calling com LLMs e integrações backend para fluxos operacionais reais sob guardrails estritos de avaliação e confiabilidade.',
    },
    highlights: {
      en: [
        'Led engineering of a production conversational scheduling agent handling availability checks, bookings, rescheduling, cancellations, and structured human handoff.',
        'Implemented deterministic LLM safeguards, versioned prompts, and feature-flagged RAG; validated changes across 30 end-to-end conversation flows and LLM-as-judge evaluations with zero regression.',
        'Refactored a core 1,532-line message orchestration handler down to 378 modular lines backed by characterization tests.',
        'Designed a multi-agent messaging architecture (4 specialized production agents) integrating ERP and CRM workflows via OpenAI tool calling, RabbitMQ queues, GitHub Actions, and Dokploy.',
        'Built an internal data hub and LangGraph planning agent with scoped role-based access controls and automated evaluation suites.',
      ],
      pt: [
        'Liderei o desenvolvimento de um agente conversacional de agendamento em produção cobrindo consulta de disponibilidade, marcação, reagendamento, cancelamento e transbordo assistido para equipe humana.',
        'Implementei salvaguardas determinísticas para LLMs, prompts versionados e RAG controlado por feature flags; validei mudanças com 30 fluxos ponta a ponta e avaliações LLM-as-judge sem regressão.',
        'Refatorei o handler principal de mensagens de 1.532 para 378 linhas modulares com cobertura de testes de caracterização.',
        'Projetei uma plataforma com 4 agentes especializados em produção integrando sistemas ERP e CRM via OpenAI tool calling, filas RabbitMQ, GitHub Actions e Dokploy.',
        'Construí um hub interno de dados e agente com planejamento em LangGraph, controle de acesso escopado e suítes de avaliação.',
      ],
    },
    technologies: [
      'TypeScript',
      'Bun / Node.js',
      'Python / FastAPI',
      'LangGraph',
      'OpenAI Tool Calling',
      'RAG & LLM-as-Judge',
      'RabbitMQ',
      'PostgreSQL / Prisma / Drizzle',
      'Docker & Dokploy',
      'GitHub Actions',
    ],
    confidentialityNotice: {
      en: 'Client & Corporate Confidentiality Note: Detailed architectural diagrams, client names, and internal operational metrics from VittalWeb engagements are intentionally omitted or generalized here pending formal client publication approval.',
      pt: 'Nota de Confidencialidade Corporativa: Diagramas internos detalhados, nomes de clientes e métricas operacionais privadas de projetos na VittalWeb foram intencionalmente omitidos ou mantidos em nível arquitetural genérico, aguardando aprovação formal de publicação.',
    },
  },
  {
    id: 'wiseup-online',
    company: 'WiseUp Online',
    role: {
      en: 'Sales Executive & Peer Mentor',
      pt: 'Executivo de Vendas Consultivas e Mentor de Equipe',
    },
    period: {
      en: 'Aug 2021 — Nov 2025',
      pt: 'Ago 2021 — Nov 2025',
    },
    location: {
      en: 'Remote · Brazil',
      pt: 'Remoto · Brasil',
    },
    typeBadge: {
      en: 'Communication, Negotiation & Leadership',
      pt: 'Comunicação, Negociação e Liderança',
    },
    summary: {
      en: 'Four years of high-accountability consultative communication, stakeholder discovery, and colleague mentoring in a fast-paced remote environment—shaping how I translate ambiguous business problems into clear software specs today.',
      pt: 'Quatro anos de comunicação consultiva de alta responsabilidade, diagnóstico de necessidades e mentoria de colegas em ambiente remoto — base direta para traduzir problemas de negócio ambíguos em especificações claras de engenharia.',
    },
    highlights: {
      en: [
        'Conducted structured consultative discovery and negotiation with hundreds of clients in a 100% remote workflow.',
        'Mentored new team members and designed practical communication and onboarding training sessions.',
      ],
      pt: [
        'Conduzi conversas consultivas estruturadas, diagnóstico de necessidades e negociação em ambiente 100% remoto.',
        'Orientei e mentorei colegas de equipe, preparando treinamentos práticos de comunicação e rotina operacional.',
      ],
    },
    technologies: [
      'Consultative Discovery',
      'Stakeholder Alignment',
      'Team Mentoring',
      'Remote Operations',
    ],
  },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: '01',
    title: {
      en: 'Deterministic Guardrails Around Probabilistic Models',
      pt: 'Guardrails Determinísticos ao Redor de Modelos Probabilísticos',
    },
    description: {
      en: 'Whether in Axiom Tech (`grounded=false`), Quality Engine (Tarjan SCC & cognitive ratchets), or production WhatsApp agents, LLMs should propose and synthesize while deterministic code enforces schemas, boundaries, and permissions.',
      pt: 'Seja no Axiom Tech (`grounded=false`), no Quality Engine (Tarjan SCC e ratchets cognitivos) ou em agentes de produção, o LLM propõe e sintetiza enquanto código determinístico valida schemas, fronteiras e permissões.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Minimum Viable Governance Over Bureaucracy',
      pt: 'Governança Mínima Viável Acima da Burocracia',
    },
    description: {
      en: 'Process only matters if a lean team can sustain it on a stressful Tuesday. Single intake queues, explicit WIP limits, and tested backup restoration beat 200-page compliance binders.',
      pt: 'Processo só tem valor se uma equipe enxuta conseguir sustentá-lo em uma terça-feira crítica. Fila única, limite explícito de WIP e restauração de backup testada superam manuais burocráticos de 200 páginas.',
    },
  },
  {
    number: '03',
    title: {
      en: 'Human Accountability Is Non-Delegable',
      pt: 'A Autoridade Humana é Indelegável',
    },
    description: {
      en: 'AI accelerates triage, drafting, and tool routing—but high-impact actions (production rollbacks, quality baseline waivers, governance sign-off) always require an accountable human owner.',
      pt: 'A IA acelera triagem, rascunhos e roteamento de ferramentas — mas decisões de impacto (rollback de release, exceção de baseline, aprovação de governança) exigem sempre um responsável humano.',
    },
  },
];
