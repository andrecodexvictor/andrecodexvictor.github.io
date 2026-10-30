export type Locale = 'en' | 'pt';

export interface GearPillar {
  id: 'governance' | 'execution' | 'security';
  number: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  summary: Record<Locale, string>;
  mechanisms: Record<Locale, string[]>;
  artifactName: Record<Locale, string>;
  standardsRef: string;
}

export interface GearAiStep {
  step: string;
  label: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export interface GearWeek {
  week: Record<Locale, string>;
  title: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
}

export interface GearChapter {
  number: string;
  title: Record<Locale, string>;
  focus: Record<Locale, string>;
}

export interface GearContent {
  code: string;
  acronym: string;
  fullTitle: Record<Locale, string>;
  edition: Record<Locale, string>;
  evolutionNote: Record<Locale, string>;
  thesisNote: Record<Locale, string>;
  executiveSummary: Record<Locale, string>;
  problemStatement: Record<Locale, string>;
  pillars: GearPillar[];
  transversalAi: {
    badge: Record<Locale, string>;
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    description: Record<Locale, string>;
    imTiRule: Record<Locale, string>;
    steps: GearAiStep[];
    useCasesByPillar: Record<Locale, { pillar: string; useCase: string; guardrail: string }[]>;
  };
  adoption30Days: GearWeek[];
  imTiDiagnostic: {
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    levels: { range: string; label: Record<Locale, string>; summary: Record<Locale, string> }[];
  };
  academicHonesty: {
    badge: Record<Locale, string>;
    title: Record<Locale, string>;
    body: Record<Locale, string>;
    syntheticCases: Record<Locale, { name: string; profile: string; focus: string }[]>;
  };
  chapters: GearChapter[];
  links: {
    repoUrl: string;
    caseStudySlug: string;
  };
}

export const GEAR_DATA: GearContent = {
  code: 'P0 · TCC / AUTHORIAL FRAMEWORK',
  acronym: 'GEAR',
  fullTitle: {
    en: 'GEAR — Governance, Execution, Agility & Risk for SMEs',
    pt: 'GEAR — Gestão, Execução, Agilidade e Risco para PMEs',
  },
  edition: {
    en: '2026.10 Book & Operational Guide · Evolution of GP-PME',
    pt: 'Livro e Guia Operacional Edição 2026.10 · Evolução do GP-PME',
  },
  evolutionNote: {
    en: 'GEAR is the consolidated editorial and architectural evolution of the GP-PME framework (originally published at github.com/andrecodexvictor/gp-pme), restructured into a 10-chapter technical book and field guide.',
    pt: 'O GEAR é a evolução editorial e arquitetural consolidada do framework GP-PME (publicado originalmente em github.com/andrecodexvictor/gp-pme), reestruturado em um livro técnico e guia prático de 10 capítulos.',
  },
  thesisNote: {
    en: 'Undergraduate Thesis (TCC) artifact in Information Systems at the Federal Institute of Bahia (IFBA — Vitória da Conquista), structured under Design Science Research (DSR).',
    pt: 'Artefato de Trabalho de Conclusão de Curso (TCC) em Sistemas de Informação no Instituto Federal da Bahia (IFBA — Campus Vitória da Conquista), estruturado sob Design Science Research (DSR).',
  },
  executiveSummary: {
    en: 'Traditional enterprise frameworks (COBIT, ITIL, SAFe, ISO 27001) assume dedicated compliance teams and multi-layered committees that Small and Medium Enterprises (SMEs) do not have. GEAR distills IT management to the Minimum Viable Governance (MVG) threshold: three essential operational pillars—Essential Governance, Agile Execution, and Critical Security—paired with a transversal, strictly optional AI catalyst layer governed by human verification.',
    pt: 'Frameworks corporativos tradicionais (COBIT, ITIL, SAFe, ISO 27001) pressupõem equipes dedicadas de conformidade e múltiplos comitês que Pequenas e Médias Empresas (PMEs) não possuem. O GEAR reduz a gestão de TI ao limiar de Governança Mínima Viável (MVG): três pilares operacionais essenciais — Governança Essencial, Execução Ágil e Segurança Crítica — acompanhados por uma camada transversal e estritamente opcional de IA sob verificação humana.',
  },
  problemStatement: {
    en: 'In Brazilian SMEs (responsible for roughly 27% of national GDP and over half of formal employment), IT teams of 1 to 15 people suffer from chronic reactive firefighting, fragmented WhatsApp/email demand intake, untested backups, and opaque priority decisions—while heavy corporate methodologies fail due to excessive ceremony.',
    pt: 'Nas PMEs brasileiras (responsáveis por cerca de 27% do PIB nacional e mais da metade dos empregos formais), equipes de TI de 1 a 15 pessoas enfrentam apagão de prioridades, demandas pulverizadas por WhatsApp/e-mail, backups nunca testados em restauração e falta de dono claro por decisão — enquanto metodologias pesadas fracassam pelo excesso de cerimônia.',
  },
  pillars: [
    {
      id: 'governance',
      number: '01',
      title: {
        en: 'Essential Governance',
        pt: 'Governança Essencial',
      },
      subtitle: {
        en: 'Decision clarity, single accountability, and lightweight cadence',
        pt: 'Clareza decisória, autoridade única e cadência leve',
      },
      summary: {
        en: 'Replaces bureaucratic steering committees with ADM-Lite (Evaluate, Direct, Monitor), unambiguous single-owner accountability, and a 30-minute biweekly decision cadence.',
        pt: 'Substitui comitês burocráticos pelo ciclo ADM-Lite (Avaliar, Dirigir, Monitorar), responsabilidade final única e uma cadência decisória quinzenal de 30 minutos.',
      },
      mechanisms: {
        en: [
          'ADM-Lite Loop: Evaluate current bottlenecks, Direct priority trade-offs, Monitor 3–5 pragmatic indicators.',
          'RACI-Lite Matrix: Exactly one Accountable (A) owner per critical service, asset, or decision.',
          '4-Purpose Classification: Corrective Fix, Operational Continuity, Security & Compliance, or Improvement/Expansion.',
          'CD-TI Lite Ritual: 30-minute biweekly review (10m delivered/incidents, 10m risks/blockers, 10m next cycle priorities).',
        ],
        pt: [
          'Ciclo ADM-Lite: Avaliar gargalos reais, Dirigir escolhas de prioridade e Monitorar 3 a 5 indicadores simples.',
          'Matriz RACI-Lite: Exatamente uma pessoa com Autoridade final (A) por serviço crítico, ativo ou decisão.',
          'Matriz de 4 Propósitos: Correção, Continuidade operacional, Segurança/conformidade ou Melhoria/expansão.',
          'Ritual CD-TI Lite: Reunião quinzenal de 30 minutos (10m entregas/incidentes, 10m riscos/bloqueios, 10m prioridades).',
        ],
      },
      artifactName: {
        en: 'RACI-Lite Charter & CD-TI Decision Log',
        pt: 'Mapa RACI-Lite e Ata Decisória CD-TI',
      },
      standardsRef: 'ISO/IEC 38500 · COBIT 2019 (Adapted MVG)',
    },
    {
      id: 'execution',
      number: '02',
      title: {
        en: 'Agile Execution',
        pt: 'Execução Ágil',
      },
      subtitle: {
        en: 'Single intake queue, visual flow, and hard local WIP limits',
        pt: 'Fila única oficial, fluxo visual e limite explícito de WIP',
      },
      summary: {
        en: 'Eliminates invisible side-channel work by enforcing a single official queue, a 4-stage Kanban board, and a strict local Work-In-Progress limit of 3 items per person.',
        pt: 'Elimina o trabalho invisível de corredor ao impor uma fila única oficial, um quadro Kanban de 4 colunas e limite estrito de WIP de 3 itens por pessoa.',
      },
      mechanisms: {
        en: [
          'Single Official Queue: Every request (WhatsApp, hallway, email) must enter the unified board before execution.',
          '4 Canonical States: To Do (A Fazer) → In Progress (Em Andamento) → In Test (Em Teste) → Done (Concluído).',
          'Hard WIP = 3 per Executor: Counts items in active work, testing, or blocked—forcing finishing over starting.',
          'Expedite Displacement Rule: An urgent P1 incident only enters if a current item is paused or returned to To Do.',
        ],
        pt: [
          'Fila Única Oficial: Toda demanda (WhatsApp, corredor, e-mail) precisa entrar no quadro único antes de iniciar.',
          '4 Colunas Canônicas: A Fazer → Em Andamento → Em Teste → Concluído.',
          'Limite WIP = 3 por Executor: Soma itens em execução, em teste e bloqueados — priorizando terminar antes de começar.',
          'Regra de Urgência (Expedite): Uma emergência só entra se outro item em andamento for pausado ou devolvido.',
        ],
      },
      artifactName: {
        en: 'Unified Kanban Flow & WIP=3 Policy',
        pt: 'Quadro de Fila Única e Política WIP=3',
      },
      standardsRef: 'Kanban Method · Little’s Law · Lean Flow',
    },
    {
      id: 'security',
      number: '03',
      title: {
        en: 'Critical Security',
        pt: 'Segurança Crítica',
      },
      subtitle: {
        en: 'Tested restoration, minimum privilege, and incident readiness',
        pt: 'Restauração testada, privilégio mínimo e resposta a incidentes',
      },
      summary: {
        en: 'Treats operational resilience as survival rather than paperwork: mapping essential dependencies, proving backup recovery with real drills, and maintaining a 1-page Incident Response Plan (PRI).',
        pt: 'Trata a resiliência operacional como sobrevivência e não burocracia: mapeamento de dependências críticas, teste real de restauração de backup e Plano de Resposta a Incidentes (PRI) de 1 página.',
      },
      mechanisms: {
        en: [
          'Essential Dependency Map: Connects critical business services to supporting systems, credentials, and vendors.',
          'Backup ≠ Restoration (3-2-1 Rule): Backups are considered invalid until a scheduled restoration test succeeds within RTO/RPO.',
          'Access & MFA Hygiene: Multi-factor authentication on admin/cloud accounts and immediate offboarding revocation.',
          'PRI Playbook: Identify → Contain → Communicate → Recover → Record Lesson Learned.',
        ],
        pt: [
          'Inventário Essencial de Dependências: Conecta serviços de negócio críticos aos sistemas, acessos e fornecedores.',
          'Backup ≠ Restauração (Regra 3-2-1): Backup sem teste periódico de restauração dentro do RTO/RPO é tratado como inexistente.',
          'Higiene de Acesso e MFA: Autenticação multifator em contas críticas e revogação imediata em desligamentos.',
          'Roteiro PRI: Identificar → Conter → Comunicar → Recuperar → Registrar lição aprendida.',
        ],
      },
      artifactName: {
        en: '3-2-1 Restore Drill Record & PRI Playbook',
        pt: 'Registro de Restauração 3-2-1 e Roteiro PRI',
      },
      standardsRef: 'NIST CSF 2.0 (GV/ID/PR/DE/RS/RC) · CISA CPGs',
    },
  ],
  transversalAi: {
    badge: {
      en: 'TRANSVERSAL & OPTIONAL LAYER · NEVER A 4TH PILLAR',
      pt: 'CAMADA TRANSVERSAL E OPCIONAL · NUNCA UM 4º PILAR',
    },
    title: {
      en: 'AI as a Governed Operational Catalyst',
      pt: 'IA como Catalisador Operacional Governado',
    },
    subtitle: {
      en: 'Accelerates drafting and triage across the 3 pillars while preserving human accountability',
      pt: 'Acelera rascunhos e triagem nos 3 pilares preservando a autoridade e verificação humana',
    },
    description: {
      en: 'In GEAR, Artificial Intelligence never replaces basic process discipline and never acts as an autonomous decision-maker. It operates as an optional accelerator across Governance, Execution, and Security under a strict five-step human-in-the-loop verification chain.',
      pt: 'No GEAR, a Inteligência Artificial nunca substitui a disciplina básica de processo nem atua como decisor autônomo. Ela opera como acelerador opcional sobre Governança, Execução e Segurança sob uma cadeia estrita de cinco etapas com verificação humana obrigatória.',
    },
    imTiRule: {
      en: 'Zero AI Dependency for Maximum Maturity: The IM-TI diagnostic (0 to 10 points) awards up to 10/10 (Level 4 — Governed) with zero AI adoption. AI only amplifies teams that already maintain a single queue, clear owners, and tested backups.',
      pt: 'Zero Dependência de IA para Maturidade Máxima: O diagnóstico IM-TI (0 a 10 pontos) permite atingir 10/10 (Nível 4 — Governado) sem adotar nenhuma ferramenta de IA. A IA apenas amplifica equipes que já possuem fila única, donos claros e backups testados.',
    },
    steps: [
      {
        step: '01',
        label: { en: 'Context & Sources', pt: 'Contexto e Fontes' },
        detail: {
          en: 'Sanitized operational context (anonymized tickets, runbooks, meeting notes).',
          pt: 'Contexto operacional sanitizado (chamados anonimizados, runbooks, pautas).',
        },
      },
      {
        step: '02',
        label: { en: 'Assisted Draft', pt: 'Rascunho Assistido' },
        detail: {
          en: 'LLM structures acceptance criteria, summarizes logs, or drafts an incident post-mortem.',
          pt: 'LLM estrutura critérios de aceite, resume logs ou rascunha ata/post-mortem.',
        },
      },
      {
        step: '03',
        label: { en: 'Human Verification', pt: 'Verificação Humana' },
        detail: {
          en: 'Engineer inspects factual grounding, security boundaries, and local feasibility.',
          pt: 'Profissional revisa aderência factual, limites de segurança e viabilidade.',
        },
      },
      {
        step: '04',
        label: { en: 'Accountable Sign-Off (A)', pt: 'Autoridade Final (A)' },
        detail: {
          en: 'The designated RACI-Lite Accountable owner explicitly approves or rejects the artifact.',
          pt: 'O responsável com Autoridade (A) na RACI-Lite aprova ou rejeita explicitamente.',
        },
      },
      {
        step: '05',
        label: { en: 'Action & Audit Trail', pt: 'Ação e Registro' },
        detail: {
          en: 'Change enters the official Kanban board or decision log with full traceability.',
          pt: 'Decisão entra no quadro oficial ou registro de governança com rastreabilidade.',
        },
      },
    ],
    useCasesByPillar: {
      en: [
        {
          pillar: '01 · Essential Governance',
          useCase: 'Synthesize raw tickets into a 1-page CD-TI Lite briefing and draft decision minutes.',
          guardrail: 'Priority ranking and trade-offs remain exclusively with the human Accountable (A).',
        },
        {
          pillar: '02 · Agile Execution',
          useCase: 'Turn vague WhatsApp requests into structured cards with clear acceptance criteria and test checklists.',
          guardrail: 'AI cannot bypass the Single Queue or override the local WIP = 3 limit.',
        },
        {
          pillar: '03 · Critical Security',
          useCase: 'Draft incident communication templates, post-mortem timelines, and backup verification checklists.',
          guardrail: 'Never paste raw credentials, private keys, or unmasked PII into external prompts (LGPD compliance).',
        },
      ],
      pt: [
        {
          pillar: '01 · Governança Essencial',
          useCase: 'Sintetizar demandas da quinzena em pauta enxuta para o CD-TI Lite e rascunhar ata decisória.',
          guardrail: 'A definição de prioridades e cortes permanece exclusivamente com a Autoridade humana (A).',
        },
        {
          pillar: '02 · Execução Ágil',
          useCase: 'Transformar pedidos vagos de WhatsApp em cartões claros com critérios de aceite e checklist de teste.',
          guardrail: 'A IA não fura a Fila Única nem altera o limite local de WIP = 3.',
        },
        {
          pillar: '03 · Segurança Crítica',
          useCase: 'Rascunhar comunicados de incidente, linhas do tempo de post-mortem e roteiros de verificação.',
          guardrail: 'Proibido inserir credenciais, chaves privadas ou dados pessoais não anonimizados em prompts externos (LGPD).',
        },
      ],
    },
  },
  adoption30Days: [
    {
      week: { en: 'W1 · Days 1–7', pt: 'S1 · Dias 1–7' },
      title: {
        en: 'Visibility & Single Intake Queue',
        pt: 'Visibilidade e Fila Única Oficial',
      },
      deliverables: {
        en: [
          'Run the 10-question binary IM-TI baseline diagnostic (15 minutes).',
          'Set up the 4-column Kanban board (To Do, In Progress, In Test, Done) and route all requests through it.',
          'Assign a single Accountable (A) owner for the top 5 business-critical services (RACI-Lite).',
        ],
        pt: [
          'Aplicar o diagnóstico binário IM-TI de 10 perguntas (15 minutos).',
          'Criar o quadro de 4 colunas (A Fazer, Em Andamento, Em Teste, Concluído) e centralizar a entrada.',
          'Definir a Autoridade única (A) para os 5 serviços mais críticos do negócio (RACI-Lite).',
        ],
      },
    },
    {
      week: { en: 'W2 · Days 8–14', pt: 'S2 · Dias 8–14' },
      title: {
        en: 'Flow Protection & Essential Inventory',
        pt: 'Proteção de Fluxo e Inventário Essencial',
      },
      deliverables: {
        en: [
          'Enforce the local WIP = 3 limit per executor (including testing and blocked items).',
          'Catalog critical assets, cloud accounts, and external vendor dependencies.',
          'Enable MFA on all administrative accounts and verify 3-2-1 backup schedules.',
        ],
        pt: [
          'Ativar o limite de WIP = 3 por executor (contando itens em teste e bloqueados).',
          'Mapear ativos críticos, contas administrativas e dependências de fornecedores.',
          'Habilitar MFA nas contas críticas e auditar a rotina de backup 3-2-1.',
        ],
      },
    },
    {
      week: { en: 'W3 · Days 15–21', pt: 'S3 · Dias 15–21' },
      title: {
        en: 'First CD-TI Lite & Real Restore Drill',
        pt: 'Primeiro CD-TI Lite e Teste Real de Restauração',
      },
      deliverables: {
        en: [
          'Hold the first 30-minute CD-TI Lite biweekly governance review using the 4-Purpose Matrix.',
          'Execute at least one end-to-end backup restoration test in an isolated environment and measure RTO/RPO.',
          'Document any restoration gap as a prioritized Security & Compliance card.',
        ],
        pt: [
          'Realizar a primeira reunião quinzenal CD-TI Lite de 30 minutos com a Matriz de 4 Propósitos.',
          'Executar ao menos um teste real de restauração de backup ponta a ponta medindo RTO e RPO.',
          'Registrar eventuais falhas de restauração como demanda prioritária de Segurança no quadro.',
        ],
      },
    },
    {
      week: { en: 'W4 · Days 22–30', pt: 'S4 · Dias 22–30' },
      title: {
        en: 'PRI Incident Playbook & Cycle Consolidation',
        pt: 'Roteiro PRI e Consolidação do Ciclo',
      },
      deliverables: {
        en: [
          'Publish the 1-page Incident Response Plan (PRI) and run a 20-minute tabletop simulation.',
          'Review first-month Lead Time, Throughput, and Restoration Pass Rate.',
          'Optionally pilot governed AI drafting on sanitized ticket triage if core habits are stable.',
        ],
        pt: [
          'Publicar o Plano de Resposta a Incidentes (PRI) de 1 página e simular um incidente em 20 minutos.',
          'Consolidar métricas do primeiro mês: Lead Time, Vazão (Throughput) e Taxa de Sucesso de Restauração.',
          'Opcionalmente testar IA governada na triagem de chamados sanitizados se o fluxo base estiver estável.',
        ],
      },
    },
  ],
  imTiDiagnostic: {
    title: {
      en: 'IM-TI — 0 to 10 Binary Maturity Diagnostic',
      pt: 'IM-TI — Diagnóstico Binário de Maturidade (0 a 10)',
    },
    subtitle: {
      en: 'Auditable yes/no questions across Governance (3), Execution (3), Security (3), and Operational Review (1)',
      pt: 'Perguntas binárias auditáveis (Sim = 1, Não = 0) em Governança (3), Execução (3), Segurança (3) e Revisão (1)',
    },
    levels: [
      {
        range: '0–2',
        label: { en: 'Level 1 · Ad-hoc / Reactive', pt: 'Nível 1 · Ad-hoc / Reativo' },
        summary: {
          en: 'Work arrives via scattered messages; no tested backup recovery; priorities shift hourly.',
          pt: 'Demandas chegam pulverizadas; sem teste de restauração de backup; prioridades mudam a cada hora.',
        },
      },
      {
        range: '3–5',
        label: { en: 'Level 2 · Basic Visibility', pt: 'Nível 2 · Visibilidade Básica' },
        summary: {
          en: 'Initial board and asset inventory exist, but WIP limits and biweekly reviews are still inconsistent.',
          pt: 'Quadro inicial e inventário existem, mas limites de WIP e rituais quinzenais ainda oscilam.',
        },
      },
      {
        range: '6–8',
        label: { en: 'Level 3 · Defined & Stable', pt: 'Nível 3 · Definido e Estável' },
        summary: {
          en: 'Single queue, WIP=3, RACI-Lite, and regular backup restore drills operate predictably.',
          pt: 'Fila única, WIP=3, RACI-Lite e testes periódicos de restauração operam de forma previsível.',
        },
      },
      {
        range: '9–10',
        label: { en: 'Level 4 · Governed & Auditable', pt: 'Nível 4 · Governado e Auditável' },
        summary: {
          en: 'Full MVG loop with measurable lead time, tested PRI readiness, and continuous improvement—achievable with 0% AI.',
          pt: 'Ciclo MVG completo com lead time medido, PRI exercitado e melhoria contínua — atingível com 0% de IA.',
        },
      },
    ],
  },
  academicHonesty: {
    badge: {
      en: 'METHODOLOGICAL TRANSPARENCY · DSR PROTOCOL',
      pt: 'TRANSPARÊNCIA METODOLÓGICA · PROTOCOLO DSR',
    },
    title: {
      en: 'Normative Architecture vs. Prospective Field Validation',
      pt: 'Arquitetura Normativa vs. Validação Empírica Prospectiva',
    },
    body: {
      en: 'In strict adherence to Design Science Research (Hevner et al., 2004; Peffers et al., 2007), GEAR distinguishes between its completed normative artifact (the 10-chapter book, operational templates, and paired synthetic demonstration cases) and future empirical field observation in live companies. No unverified field metrics are claimed.',
      pt: 'Em estrita aderência à Design Science Research (Hevner et al., 2004; Peffers et al., 2007), o GEAR distingue claramente o artefato normativo concluído (o livro de 10 capítulos, templates operacionais e casos sintéticos pareados de demonstração) da validação empírica futura em campo. Nenhuma métrica empírica não verificada é alegada.',
    },
    syntheticCases: {
      en: [
        {
          name: 'Synthetic Case A — B2B Software House (18 staff)',
          profile: 'High feature churn, concurrent client escalations, untracked hotfixes.',
          focus: 'Demonstrates Single Queue intake, WIP=3 enforcement, and Expedite displacement rules.',
        },
        {
          name: 'Synthetic Case B — Regional Medical Clinic (35 staff)',
          profile: '2-person IT support team, legacy scheduling database, high LGPD/availability sensitivity.',
          focus: 'Demonstrates RACI-Lite accountability, 3-2-1 backup restoration testing, and PRI incident playbook.',
        },
      ],
      pt: [
        {
          name: 'Caso Sintético A — Software House B2B (18 pessoas)',
          profile: 'Alta troca de contexto, escaladas simultâneas de clientes e hotfixes sem registro.',
          focus: 'Demonstra a Fila Única oficial, limite WIP=3 e regra de deslocamento para urgências (Expedite).',
        },
        {
          name: 'Caso Sintético B — Clínica Médica Regional (35 colaboradores)',
          profile: 'Equipe enxuta de 2 profissionais de TI, sistema legado de agendamento e alta sensibilidade LGPD.',
          focus: 'Demonstra RACI-Lite, teste real de restauração 3-2-1 e Plano de Resposta a Incidentes (PRI).',
        },
      ],
    },
  },
  chapters: [
    {
      number: '01',
      title: {
        en: 'GEAR to Start: Three Pillars, One Routine',
        pt: 'GEAR para começar: três pilares, uma rotina',
      },
      focus: {
        en: 'Scope, Minimum Viable Governance principles, and accessible entry path for SME teams.',
        pt: 'Escopo, princípios de Governança Mínima Viável e entrada acessível para equipes enxutas.',
      },
    },
    {
      number: '02',
      title: {
        en: 'Essential Governance: Deciding with Direction',
        pt: 'Governança Essencial: decidir com direção',
      },
      focus: {
        en: 'ADM-Lite decision loop, RACI-Lite single Accountable (A), and the 30-min CD-TI Lite ritual.',
        pt: 'Ciclo ADM-Lite, matriz RACI-Lite com Autoridade única (A) e condução da revisão quinzenal CD-TI Lite.',
      },
    },
    {
      number: '03',
      title: {
        en: 'Agile Execution: From Demand to Delivery',
        pt: 'Execução Ágil: da demanda à entrega',
      },
      focus: {
        en: 'Single official intake queue, 4-state Kanban flow, demand prioritization, and hard WIP = 3.',
        pt: 'Fila única oficial, fluxo Kanban de 4 estados, priorização de demandas e limite WIP = 3.',
      },
    },
    {
      number: '04',
      title: {
        en: 'Critical Security: Protect and Recover',
        pt: 'Segurança Crítica: proteger e recuperar',
      },
      focus: {
        en: 'Essential dependency map, incident containment (PRI), and 3-2-1 backup restoration verification.',
        pt: 'Segurança e continuidade, resposta a incidentes (PRI) e teste prático de restauração 3-2-1.',
      },
    },
    {
      number: '05',
      title: {
        en: 'Transversal AI: Assistance Across the Method',
        pt: 'IA transversal: assistência que atravessa o método',
      },
      focus: {
        en: 'Optional AI catalyst, tool selection, LGPD sanitization, and the 5-step human verification chain.',
        pt: 'Catalisador opcional de IA, escolha de ferramentas, sanitização LGPD e revisão humana em 5 etapas.',
      },
    },
    {
      number: '06',
      title: {
        en: 'Adoption & Maturity: Starting and Sustaining',
        pt: 'Adoção e maturidade: começar e sustentar',
      },
      focus: {
        en: 'First 30 days progressive roadmap, operational readiness, and the 0–10 binary IM-TI diagnostic.',
        pt: 'Roteiro dos primeiros 30 dias, preparação operacional e diagnóstico binário de maturidade IM-TI (0 a 10).',
      },
    },
    {
      number: '07',
      title: {
        en: 'Measuring to Decide and Learn',
        pt: 'Medir para decidir e aprender',
      },
      focus: {
        en: 'Pragmatic operational, business, and financial indicators (Lead Time, Throughput, Restore Pass Rate).',
        pt: 'Indicadores operacionais, de negócio e financeiros (Lead Time, Vazão, Taxa de Sucesso de Restauração).',
      },
    },
    {
      number: '08',
      title: {
        en: 'Application Workshop: One Problem, Three Pillars',
        pt: 'Oficina de aplicação: um problema, três pilares',
      },
      focus: {
        en: 'Didactic cases, historical scenarios, and paired synthetic SME evaluations (Software House & Clinic).',
        pt: 'Caso didático, cenários históricos e avaliação em minimundo (Software House B2B e Clínica Médica).',
      },
    },
    {
      number: '09',
      title: {
        en: 'Artifact Playbook: PRDs, Prompts & Tools',
        pt: 'Caderno de artefatos: PRDs, prompts e ferramentas',
      },
      focus: {
        en: '18 operational templates in sequence of use (PRDs, user stories, prompts, test checklists, and MCP/manual modes).',
        pt: 'Os 18 documentos de templates em sequência de uso (PRDs, histórias, prompts, testes e modo MCP/manual).',
      },
    },
    {
      number: '10',
      title: {
        en: 'Foundations, Vocabulary & Sources',
        pt: 'Fundamentos, vocabulário e fontes',
      },
      focus: {
        en: 'Theoretical origins and SME adaptations (ISO/IEC 38500, COBIT 2019, Kanban, NIST CSF 2.0), glossary, and references.',
        pt: 'Origens teóricas e adaptações para PMEs (ISO/IEC 38500, COBIT 2019, Kanban, NIST CSF 2.0), glossário e fontes.',
      },
    },
  ],
  links: {
    repoUrl: 'https://github.com/andrecodexvictor/gp-pme',
    caseStudySlug: 'gear',
  },
};
