import type { Locale } from './gear';

export type ProjectCategory =
  | 'all'
  | 'ai-agents'
  | 'architecture-tooling'
  | 'governance-ops'
  | 'product-web'
  | 'open-source';

export interface ProjectArchitectureStep {
  node: string;
  role: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export interface ProjectMetricOrFact {
  label: Record<Locale, string>;
  value: Record<Locale, string>;
}

export interface PortfolioProject {
  slug: string;
  code: string;
  title: string;
  featured: boolean;
  priorityOrder: number;
  categories: Exclude<ProjectCategory, 'all'>[];
  competencies: ('applied-ai' | 'backend-cloud' | 'dev-tooling' | 'governance-risk' | 'product-frontend')[];
  stageBadge: Record<Locale, string>;
  roleBadge: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  tagline: Record<Locale, string>;
  summary: Record<Locale, string>;
  problem: Record<Locale, string>;
  solution: Record<Locale, string>;
  myContribution: Record<Locale, string[]>;
  architectureFlow: ProjectArchitectureStep[];
  decisionsAndTradeoffs: Record<Locale, string[]>;
  honestyAndScopeNote: Record<Locale, string>;
  verifiedFacts: ProjectMetricOrFact[];
  stack: string[];
  links: {
    repo?: string;
    upstreamRepo?: string;
    live?: string;
    branchNote?: string;
  };
  previewImage?: string;
  secondaryImage?: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, Record<Locale, string>> = {
  all: { en: 'All Selected Work', pt: 'Todos os Projetos' },
  'ai-agents': { en: 'AI & Agents', pt: 'IA & Agentes' },
  'architecture-tooling': { en: 'Architecture & Tooling', pt: 'Arquitetura & Tooling' },
  'governance-ops': { en: 'Governance & Operations', pt: 'Governança & Operações' },
  'product-web': { en: 'Product & Web', pt: 'Produto & Web' },
  'open-source': { en: 'Open Source', pt: 'Open Source' },
};

export const PRIMARY_PROJECTS: PortfolioProject[] = [
  {
    slug: 'gear',
    code: 'P0 · TCC & BOOK',
    title: 'GEAR Framework (GP-PME Evolution)',
    featured: true,
    priorityOrder: 0,
    categories: ['governance-ops', 'architecture-tooling'],
    competencies: ['governance-risk', 'applied-ai'],
    stageBadge: {
      en: 'Authorial Book & TCC Artifact (2026.10)',
      pt: 'Livro Autoral e Artefato de TCC (2026.10)',
    },
    roleBadge: {
      en: 'Sole Author & Researcher · IFBA',
      pt: 'Autor e Pesquisador · IFBA',
    },
    eyebrow: {
      en: 'IT Governance, Execution, Agility & Risk for SMEs',
      pt: 'Gestão, Execução, Agilidade e Risco de TI para PMEs',
    },
    tagline: {
      en: 'A 10-chapter technical book and Minimum Viable Governance (MVG) framework built on 3 essential pillars and a transversal, optional AI layer under human verification.',
      pt: 'Livro técnico de 10 capítulos e framework de Governança Mínima Viável (MVG) estruturado em 3 pilares essenciais e uma camada transversal e opcional de IA sob verificação humana.',
    },
    summary: {
      en: 'Evolved from the GP-PME repository into a comprehensive 2026.10 technical book and undergraduate thesis (TCC) at IFBA. GEAR gives lean IT teams (1–15 people) an auditable 30-day operating system without corporate bureaucracy.',
      pt: 'Evolução consolidada do repositório GP-PME em livro técnico (Edição 2026.10) e Trabalho de Conclusão de Curso (TCC) no IFBA. O GEAR oferece a equipes enxutas de TI (1 a 15 pessoas) um sistema operacional auditável em 30 dias sem burocracia corporativa.',
    },
    problem: {
      en: 'Small and Medium Enterprises face constant priority whiplash, invisible WhatsApp/hallway requests, and backups that have never been tested for restoration—yet heavyweight frameworks (COBIT, ITIL, SAFe) collapse under their own ceremony when applied to small teams.',
      pt: 'Pequenas e Médias Empresas sofrem com troca constante de prioridades, demandas invisíveis via WhatsApp/corredor e backups nunca testados em restauração — enquanto frameworks pesados (COBIT, ITIL, SAFe) fracassam pelo excesso de cerimônia em equipes reduzidas.',
    },
    solution: {
      en: 'Establishes three non-negotiable pillars—(1) Essential Governance (ADM-Lite, RACI-Lite single accountability, 30-min biweekly CD-TI Lite), (2) Agile Execution (Single official queue, 4-state Kanban, hard local WIP=3 limit), and (3) Critical Security (Essential dependency inventory, 3-2-1 backup restoration drills, 1-page PRI)—plus an optional transversal AI catalyst governed by a 5-step human verification chain.',
      pt: 'Estabelece três pilares inegociáveis — (1) Governança Essencial (ADM-Lite, responsabilidade única RACI-Lite, ritual quinzenal CD-TI Lite de 30 min), (2) Execução Ágil (Fila única oficial, Kanban de 4 estados, limite estrito de WIP=3) e (3) Segurança Crítica (Inventário de dependências, teste real de restauração 3-2-1, roteiro PRI de 1 página) — além de uma camada transversal e opcional de IA sob cadeia de verificação humana em 5 etapas.',
    },
    myContribution: {
      en: [
        'Authored the complete 10-chapter technical manuscript (2026.10 edition), operational templates, and vector diagrams.',
        'Designed the binary 0–10 IM-TI maturity diagnostic, proving teams can reach Level 4 (10/10) with zero AI dependency.',
        'Formulated the Design Science Research (DSR) evaluation protocol using paired synthetic SME cases (B2B Software House & Regional Medical Clinic).',
      ],
      pt: [
        'Autoria integral do livro técnico de 10 capítulos (Edição 2026.10), templates operacionais e diagramas vetoriais.',
        'Desenho do diagnóstico binário de maturidade IM-TI (0 a 10), garantindo que o Nível 4 (10/10) seja atingível sem dependência de IA.',
        'Estruturação do protocolo metodológico em Design Science Research (DSR) com casos sintéticos pareados.',
      ],
    },
    architectureFlow: [
      {
        node: '01 · Essential Governance',
        role: { en: 'ADM-Lite + RACI-Lite + CD-TI Lite', pt: 'ADM-Lite + RACI-Lite + CD-TI Lite' },
        detail: {
          en: 'Single Accountable (A) owner per service and a 30-minute biweekly prioritization cadence across 4 demand purposes.',
          pt: 'Autoridade única (A) por serviço e cadência decisória quinzenal de 30 minutos sobre a Matriz de 4 Propósitos.',
        },
      },
      {
        node: '02 · Agile Execution',
        role: { en: 'Single Official Queue + WIP=3', pt: 'Fila Única Oficial + WIP=3' },
        detail: {
          en: '4-column board (To Do, In Progress, In Test, Done) with hard WIP=3 per executor and explicit Expedite displacement.',
          pt: 'Quadro de 4 colunas (A Fazer, Em Andamento, Em Teste, Concluído) com WIP=3 por pessoa e regra de deslocamento para urgências.',
        },
      },
      {
        node: '03 · Critical Security',
        role: { en: '3-2-1 Restore Drills + PRI Playbook', pt: 'Restauração Testada 3-2-1 + PRI' },
        detail: {
          en: 'Backup ≠ Restoration: scheduled recovery verification within RTO/RPO, MFA hygiene, and 1-page incident response.',
          pt: 'Backup ≠ Restauração: verificação prática de recuperação dentro de RTO/RPO, higiene de MFA e resposta a incidentes em 1 página.',
        },
      },
      {
        node: 'Transversal · Optional AI',
        role: { en: 'Context → Draft → Human Verify → Authority → Action', pt: 'Contexto → Rascunho → Verificação → Autoridade → Ação' },
        detail: {
          en: 'Accelerates ticket triage and documentation without ever bypassing human sign-off or exposing sensitive data (LGPD).',
          pt: 'Acelera triagem e documentação sem jamais substituir a aprovação humana ou expor dados sensíveis (LGPD).',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Three pillars instead of four: AI was deliberately kept out of the core pillars so low-budget SMEs can achieve full operational maturity without paid LLM tools.',
        'WIP = 3 includes testing and blocked items: prevents teams from hiding stalled work in downstream columns while starting new tasks.',
        'Binary 0/1 scoring in IM-TI: eliminates subjective Likert scales ("partially implemented") in favor of auditable operational evidence.',
      ],
      pt: [
        'Três pilares em vez de quatro: a IA foi mantida fora dos pilares estruturais para que PMEs com restrição orçamentária atinjam maturidade plena sem depender de LLMs pagos.',
        'WIP = 3 inclui itens em teste e bloqueados: impede que a equipe esconda gargalos abrindo novas tarefas enquanto outras aguardam validação.',
        'Pontuação binária 0/1 no IM-TI: elimina escalas subjetivas em favor de evidências operacionais objetivas e auditáveis.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Methodological status: Complete normative artifact and paired synthetic demonstration cases under Design Science Research (DSR). Empirical multi-company field validation is prospective and scheduled as future work.',
      pt: 'Status metodológico: Artefato normativo completo e demonstração por casos sintéticos pareados sob Design Science Research (DSR). A validação empírica em múltiplas empresas reais permanece como etapa prospectiva.',
    },
    verifiedFacts: [
      { label: { en: 'Core Structure', pt: 'Estrutura Base' }, value: { en: '3 Pillars + Optional AI', pt: '3 Pilares + IA Opcional' } },
      { label: { en: 'Adoption Cycle', pt: 'Ciclo de Adoção' }, value: { en: '30 Days (4 Weeks)', pt: '30 Dias (4 Semanas)' } },
      { label: { en: 'Flow Constraint', pt: 'Regra de Fluxo' }, value: { en: 'Local WIP = 3 / Executor', pt: 'WIP Local = 3 / Executor' } },
      { label: { en: 'Maturity Scale', pt: 'Escala de Maturidade' }, value: { en: 'IM-TI 0–10 Binary', pt: 'IM-TI 0–10 Binário' } },
    ],
    stack: [
      'IT Governance (ISO 38500 / COBIT MVG)',
      'Lean Kanban (WIP=3)',
      'NIST CSF 2.0 & CISA CPGs',
      'Human-in-the-Loop AI Governance',
      'Design Science Research (DSR)',
      'LGPD Privacy Controls',
    ],
    links: {
      repo: 'https://github.com/andrecodexvictor/gp-pme',
    },
  },
  {
    slug: 'axiom-tech',
    code: 'P1 · GROUNDED RAG ON OCI',
    title: 'Axiom Tech',
    featured: true,
    priorityOrder: 1,
    categories: ['ai-agents', 'architecture-tooling'],
    competencies: ['applied-ai', 'backend-cloud'],
    stageBadge: {
      en: 'Deployed on OCI · Grounded RAG',
      pt: 'Implantado na OCI · RAG Fundamentado',
    },
    roleBadge: {
      en: 'Author · AI & Cloud Engineer',
      pt: 'Autor · Engenheiro de IA e Cloud',
    },
    eyebrow: {
      en: 'Evidence-Grounded Corporate Document Assistant',
      pt: 'Assistente Corporativo de Documentos com Abstensão Explícita',
    },
    tagline: {
      en: 'Multi-format RAG assistant orchestrated with LangGraph and ChromaDB on Oracle Cloud Infrastructure—citing exact sources and abstaining when evidence is insufficient.',
      pt: 'Assistente RAG multifomato orquestrado com LangGraph e ChromaDB na Oracle Cloud Infrastructure — citando fontes exatas e abstendo-se quando a evidência é insuficiente.',
    },
    summary: {
      en: 'Built to solve hallucination risk in corporate knowledge bases (HR policies, LGPD compliance, engineering runbooks, and OpenAPI specs). Axiom Tech validates retrieved chunks before synthesis and returns an explicit ungrounded status (`grounded=false`) instead of guessing.',
      pt: 'Construído para mitigar alucinações em bases documentais corporativas (políticas de RH, LGPD, runbooks de engenharia e especificações OpenAPI). O Axiom Tech valida os trechos recuperados antes da síntese e retorna abstensão explícita (`grounded=false`) em vez de improvisar.',
    },
    problem: {
      en: 'Standard RAG pipelines eagerly synthesize plausible-sounding answers even when retrieved chunks have weak relevance, creating compliance and operational risk in enterprise environments.',
      pt: 'Pipelines RAG convencionais tentam gerar respostas plausíveis mesmo quando os trechos recuperados têm baixa aderência, criando risco operacional e jurídico em ambientes corporativos.',
    },
    solution: {
      en: 'Implements a deterministic LangGraph StateGraph (`retrieve_context → build_messages → invoke_llm → build_response`) backed by ChromaDB persistent vectors, multi-format parsers (`.pdf, .docx, .xlsx, .csv, .json, .yaml, .md`), and an OCI Compute + Oracle API Gateway HTTPS deployment.',
      pt: 'Implementa um StateGraph determinístico em LangGraph (`retrieve_context → build_messages → invoke_llm → build_response`) apoiado por ChromaDB persistente, ingestão multiformato (`.pdf, .docx, .xlsx, .csv, .json, .yaml, .md`) e deploy em OCI Compute atrás de Oracle API Gateway HTTPS.',
    },
    myContribution: {
      en: [
        'Designed and implemented the FastAPI + LangGraph RAG pipeline with source attribution and explicit `grounded=false` abstention.',
        'Built the multi-format ingestion pipeline and React/TypeScript workbench with citation inspection.',
        'Provisioned the Oracle Cloud (OCI) deployment with Docker Compose, persistent Block Volume storage, Oracle API Gateway HTTPS routing, and GitHub Actions CI/CD to GHCR.',
      ],
      pt: [
        'Projetei e implementei o pipeline FastAPI + LangGraph com atribuição de fontes e abstensão explícita (`grounded=false`).',
        'Construí a ingestão multiformato e a interface React/TypeScript com inspeção de citações.',
        'Configurei a infraestrutura na Oracle Cloud (OCI) com Docker Compose, Block Volume persistente, roteamento HTTPS via Oracle API Gateway e CI/CD no GitHub Actions para o GHCR.',
      ],
    },
    architectureFlow: [
      {
        node: 'Ingestion & Chunking',
        role: { en: 'PDF / DOCX / XLSX / OpenAPI YAML', pt: 'PDF / DOCX / XLSX / OpenAPI YAML' },
        detail: {
          en: 'Extracts text and metadata across 9 corporate document formats and indexes embeddings into ChromaDB.',
          pt: 'Extrai texto e metadados de 9 formatos corporativos e indexa embeddings no ChromaDB.',
        },
      },
      {
        node: 'LangGraph StateGraph',
        role: { en: 'Retrieve → Evaluate → Synthesize', pt: 'Recuperar → Avaliar → Sintetizar' },
        detail: {
          en: 'Checks evidence threshold; if context does not support a factual answer, sets `grounded=false` and abstains.',
          pt: 'Verifica limiar de evidência; se o contexto não sustenta resposta factual, define `grounded=false` e se abstém.',
        },
      },
      {
        node: 'OCI + API Gateway',
        role: { en: 'HTTPS Edge → FastAPI + Chroma Volume', pt: 'HTTPS Edge → FastAPI + Volume Chroma' },
        detail: {
          en: 'Served from OCI Compute (`sa-saopaulo-1`) behind Oracle API Gateway with automated GHCR image rollout.',
          pt: 'Servido a partir de OCI Compute (`sa-saopaulo-1`) atrás do Oracle API Gateway com deploy automatizado via GHCR.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Explicit abstention over creative fallback: returning `grounded=false` when documents lack the answer is essential for HR/legal trust.',
        'Self-hosted ChromaDB on OCI Block Volume: keeps vector storage co-located with the FastAPI container for low latency and zero external SaaS vector cost.',
        'Oracle API Gateway in front of Compute: provides managed TLS termination and clean route policies in `sa-saopaulo-1`.',
      ],
      pt: [
        'Abstensão explícita em vez de improviso criativo: retornar `grounded=false` quando a base não contém a resposta é essencial para confiança em RH e jurídico.',
        'ChromaDB auto-hospedado em Block Volume na OCI: mantém os vetores co-localizados com o container FastAPI, reduzindo latência e custos externos.',
        'Oracle API Gateway à frente da VM: garante terminação TLS gerenciada e controle de rotas na região `sa-saopaulo-1`.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Production-deployed portfolio system on OCI (`sa-saopaulo-1`). Live gateway availability depends on active OCI tenancy compute credits and NVIDIA NIM / OpenAI upstream quota.',
      pt: 'Sistema implantado na OCI (`sa-saopaulo-1`). A disponibilidade contínua do endpoint ao vivo depende dos créditos ativos da instância OCI e da cota do provedor LLM.',
    },
    verifiedFacts: [
      { label: { en: 'Orchestration', pt: 'Orquestração' }, value: { en: 'LangGraph StateGraph', pt: 'LangGraph StateGraph' } },
      { label: { en: 'Vector Store', pt: 'Banco Vetorial' }, value: { en: 'ChromaDB (Persistent)', pt: 'ChromaDB (Persistente)' } },
      { label: { en: 'Cloud Region', pt: 'Região Cloud' }, value: { en: 'OCI sa-saopaulo-1', pt: 'OCI sa-saopaulo-1' } },
      { label: { en: 'Safety Mechanism', pt: 'Mecanismo de Segurança' }, value: { en: 'Explicit Abstention (grounded=false)', pt: 'Abstensão Explícita (grounded=false)' } },
    ],
    stack: ['Python 3.11', 'FastAPI', 'LangGraph', 'ChromaDB', 'React', 'TypeScript', 'Docker Compose', 'Oracle Cloud (OCI)', 'GitHub Actions'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Axiom-Tech',
      live: 'https://hbdmwrkfrff2rrhsh4myxy2cyu.apigateway.sa-saopaulo-1.oci.customer-oci.com/',
    },
    previewImage: '/images/projects/axiom-overview.png',
    secondaryImage: '/images/projects/axiom-grounded-answer.png',
  },
  {
    slug: 'novamente-atlas',
    code: 'P2 · MULTI-AGENT STUDY STUDIO',
    title: 'NovaMente Atlas',
    featured: true,
    priorityOrder: 2,
    categories: ['ai-agents', 'product-web'],
    competencies: ['applied-ai', 'backend-cloud', 'product-frontend'],
    stageBadge: {
      en: 'In Progress · Team Hackathon (Oracle + Alura ONE G10)',
      pt: 'Em Evolução · Hackathon em Equipe (Oracle + Alura ONE G10)',
    },
    roleBadge: {
      en: 'Co-Creator · Action Engines & AI Quality Gate',
      pt: 'Cocriador · Action Engines e Gate de Qualidade de IA',
    },
    eyebrow: {
      en: 'Source-Grounded Study Studio & Adaptive Pedagogic Agents',
      pt: 'Estúdio de Estudos Fundamentado em Fontes e Tutoria Adaptativa',
    },
    tagline: {
      en: 'Transforms user PDFs, Markdown, and notes into cited study guides, flashcards, quizzes, and adaptive tutoring powered by Invokta Action Engines, FastAPI RAG, and TypeSafe Jev.',
      pt: 'Transforma PDFs, Markdown e notas em guias de estudo citados, flashcards, quizzes e tutoria adaptativa com Invokta Action Engines, FastAPI RAG e TypeSafe Jev.',
    },
    summary: {
      en: 'Developed during the Oracle + Alura ONE G10 hackathon (`Oracle-hackatom-g10-team-4`) and expanded on branch `feat/andre-pos-mvp-quality-20261028`. NovaMente Atlas pairs a Next.js study workspace with three NestJS `@invokta/core` Action Engines and a Python FastAPI cognitive service.',
      pt: 'Desenvolvido no hackathon Oracle + Alura ONE G10 (`Oracle-hackatom-g10-team-4`) e expandido na branch `feat/andre-pos-mvp-quality-20261028`. O NovaMente Atlas combina um workspace Next.js com três Action Engines NestJS (`@invokta/core`) e um serviço cognitivo Python/FastAPI.',
    },
    problem: {
      en: 'Generic chat assistants summarize study material without verifiable source citations, lose track of learner mastery across sessions, and lack structured quality gates for generated flashcards and quizzes.',
      pt: 'Assistentes de chat genéricos resumem materiais sem citação verificável do trecho original, perdem o histórico de domínio do estudante e não possuem validação estruturada para flashcards e quizzes.',
    },
    solution: {
      en: 'Separates responsibilities across specialized services: Next.js UI (`:3000`), NestJS + `@invokta/core` Action Engines (`atlas-learning`, `atlas-research`, `atlas-memory` on `:4000`), Python FastAPI RAG & cognition (`:8000`), Eve agent runtime (`:2000`), TypeSafe Jev judgment gates, and five pedagogical personas (`Nilo, Lumi, Prisma, Fio, Soma`).',
      pt: 'Separa responsabilidades em serviços especializados: interface Next.js (`:3000`), Action Engines NestJS + `@invokta/core` (`atlas-learning`, `atlas-research`, `atlas-memory` na `:4000`), serviço cognitivo e RAG em Python/FastAPI (`:8000`), runtime Eve (`:2000`), julgamento estruturado com TypeSafe Jev e cinco personas pedagógicas (`Nilo, Lumi, Prisma, Fio, Soma`).',
    },
    myContribution: {
      en: [
        'Co-designed the polyglot architecture connecting `@invokta/core` Action Engines (`atlas-learning`, `atlas-research`, `atlas-memory`) with the Python FastAPI cognitive RAG layer.',
        'Integrated TypeSafe Jev judgment checks and post-MVP quality hardening (`feat/andre-pos-mvp-quality-20261028`).',
        'Structured source-grounded study artifact pipelines (summaries, flashcards, quizzes) and pedagogical persona routing.',
      ],
      pt: [
        'Co-projetei a arquitetura poliglota conectando as Action Engines `@invokta/core` (`atlas-learning`, `atlas-research`, `atlas-memory`) ao serviço cognitivo RAG em Python/FastAPI.',
        'Integrei verificações de decisão com TypeSafe Jev e o pacote de endurecimento de qualidade pós-MVP (`feat/andre-pos-mvp-quality-20261028`).',
        'Estruturei fluxos de geração de artefatos de estudo ancorados na fonte (resumos, flashcards, quizzes) e roteamento de personas pedagógicas.',
      ],
    },
    architectureFlow: [
      {
        node: 'Next.js Study Studio (:3000)',
        role: { en: 'Upload, Citations & Persona Workspace', pt: 'Upload, Citações e Workspace de Personas' },
        detail: {
          en: 'Interactive interface for source documents, flashcards, quizzes, and 5 specialized study personas.',
          pt: 'Interface interativa para fontes documentais, flashcards, quizzes e 5 personas pedagógicas.',
        },
      },
      {
        node: 'NestJS Invokta Engines (:4000)',
        role: { en: 'atlas-learning · atlas-research · atlas-memory', pt: 'atlas-learning · atlas-research · atlas-memory' },
        detail: {
          en: 'Governed `@invokta/core` Action Engines managing study workflows, research synthesis, and learner state.',
          pt: 'Action Engines `@invokta/core` governando fluxos de estudo, síntese de pesquisa e memória do aluno.',
        },
      },
      {
        node: 'FastAPI Cognition & Jev (:8000)',
        role: { en: 'Hybrid RAG + TypeSafe Jev + Dream-RSI', pt: 'RAG Híbrido + TypeSafe Jev + Dream-RSI' },
        detail: {
          en: 'Performs chunking, hybrid retrieval, pedagogical adequacy judgment via Jev, and offline policy replay.',
          pt: 'Executa chunking, recuperação híbrida, julgamento de adequação via Jev e replay offline de políticas.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Action Engines over unconstrained agent loops: `@invokta/core` gives explicit input/output contracts and auditability for learning actions.',
        'Dedicated Python cognitive service: keeps embedding, RAG chunking, and Jev evaluation isolated from the Node.js API layer.',
        'Five distinct personas (Nilo, Lumi, Prisma, Fio, Soma): adapts explanation style (Socratic, visual-structural, concise drill) without altering factual grounding.',
      ],
      pt: [
        'Action Engines em vez de loops abertos: `@invokta/core` garante contratos explícitos de entrada/saída e rastreabilidade.',
        'Serviço cognitivo Python dedicado: isola embeddings, chunking RAG e avaliação Jev da camada de API em Node.js.',
        'Cinco personas pedagógicas (Nilo, Lumi, Prisma, Fio, Soma): adapta o estilo didático sem comprometer a fidelidade ao texto-fonte.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Current stage: First functional multi-service increment developed in a team hackathon workspace (`Oracle + Alura ONE G10`), not a public multi-tenant SaaS deployment.',
      pt: 'Estágio atual: Primeiro incremento funcional multisserviço desenvolvido em hackathon em equipe (`Oracle + Alura ONE G10`), não sendo ainda um SaaS público multiusuário.',
    },
    verifiedFacts: [
      { label: { en: 'Action Engines', pt: 'Action Engines' }, value: { en: '3 (@invokta/core)', pt: '3 (@invokta/core)' } },
      { label: { en: 'Study Personas', pt: 'Personas de Estudo' }, value: { en: '5 (Nilo, Lumi, Prisma, Fio, Soma)', pt: '5 (Nilo, Lumi, Prisma, Fio, Soma)' } },
      { label: { en: 'Decision Layer', pt: 'Camada de Julgamento' }, value: { en: 'TypeSafe Jev + Eve Runtime', pt: 'TypeSafe Jev + Eve Runtime' } },
      { label: { en: 'Origin', pt: 'Origem' }, value: { en: 'Oracle + Alura ONE G10 Team 4', pt: 'Oracle + Alura ONE G10 Time 4' } },
    ],
    stack: ['Next.js', 'NestJS', '@invokta/core', 'Python', 'FastAPI', 'TypeSafe Jev', 'Eve Runtime', 'TypeScript', 'PostgreSQL'],
    links: {
      repo: 'https://github.com/Oracle-hackatom-g10-team-4/Nova-mente-Solution',
      branchNote: 'feat/andre-pos-mvp-quality-20261028',
    },
  },
  {
    slug: 'quality-engine',
    code: 'P3 · MCP QUALITY GATE',
    title: 'Quality Engine (Quality Factory v2)',
    featured: true,
    priorityOrder: 3,
    categories: ['architecture-tooling', 'ai-agents'],
    competencies: ['dev-tooling', 'applied-ai', 'backend-cloud'],
    stageBadge: {
      en: 'Developer Tooling · In Progress',
      pt: 'Ferramenta de Engenharia · Em Evolução',
    },
    roleBadge: {
      en: 'Author & Systems Architect',
      pt: 'Autor e Arquiteto de Sistemas',
    },
    eyebrow: {
      en: 'MCP Streamable HTTP Quality & Architecture Ratchet for Coding Agents',
      pt: 'Motor de Qualidade e Ratchet Arquitetural via MCP HTTP para Agentes de Código',
    },
    tagline: {
      en: 'An Invokta Action Engine served over MCP Streamable HTTP (`127.0.0.1:7420/mcp`) that enforces cognitive complexity ratchets, Tarjan cycle detection, and architectural boundaries on AI-generated code.',
      pt: 'Uma Action Engine Invokta servida via MCP Streamable HTTP (`127.0.0.1:7420/mcp`) que aplica ratchet de complexidade cognitiva, detecção de ciclos (Tarjan) e fronteiras arquiteturais sobre código gerado por IA.',
    },
    summary: {
      en: 'AI coding agents frequently introduce subtle architectural drift, circular imports, or bloated functions while making tests pass. Quality Engine exposes deterministic quality gates to agents via MCP while isolating baseline mutations and exceptions inside a human-only CLI (`quality-admin`).',
      pt: 'Agentes de código frequentemente introduzem deriva arquitetural, dependências circulares ou funções inchadas apenas para fazer testes passarem. O Quality Engine expõe gates determinísticos aos agentes via MCP enquanto isola alterações de baseline e exceções em uma CLI exclusiva para humanos (`quality-admin`).',
    },
    problem: {
      en: 'If an AI agent has permission to edit its own linter config or quality baseline, it will often weaken rules to pass a check rather than refactoring the underlying code.',
      pt: 'Se um agente de IA tiver permissão para editar sua própria configuração de lint ou baseline de qualidade, ele frequentemente afrouxa a regra para passar no check em vez de refatorar o código.',
    },
    solution: {
      en: 'Implements strict privilege separation: coding agents connect to `127.0.0.1:7420/mcp` and can only invoke read/verify tools (`quality_check`, `quality_explain`, `quality_status`, `quality_verify_fix`), whereas baseline updates and signed exceptions require the local human-only CLI (`quality-admin`).',
      pt: 'Implementa separação estrita de privilégios: agentes conectam-se a `127.0.0.1:7420/mcp` apenas com ferramentas de verificação (`quality_check`, `quality_explain`, `quality_status`, `quality_verify_fix`), enquanto atualizações de baseline e exceções exigem a CLI humana (`quality-admin`).',
    },
    myContribution: {
      en: [
        'Architected the Invokta Action Engine server over MCP Streamable HTTP (`127.0.0.1:7420/mcp`) and the separate `quality-admin` human CLI.',
        'Implemented JS/TS gates: `CQ-COGNITIVE` (SonarJS complexity ratchet), `CQ-STRUCTURE` (ESLint structural rules), `ARCH-NO-RUNTIME-CYCLES` (dependency-cruiser + Tarjan SCC), `ARCH-BOUNDARIES`, `INTEGRITY`, and `CQ-PARSE`.',
        'Built SQLite ratchet persistence so legacy files cannot regress in cognitive complexity while new files must meet strict thresholds.',
      ],
      pt: [
        'Projetei o servidor Invokta Action Engine sobre MCP Streamable HTTP (`127.0.0.1:7420/mcp`) e a CLI humana separada (`quality-admin`).',
        'Implementei os gates JS/TS: `CQ-COGNITIVE` (ratchet SonarJS), `CQ-STRUCTURE` (ESLint estrutural), `ARCH-NO-RUNTIME-CYCLES` (dependency-cruiser + Tarjan SCC), `ARCH-BOUNDARIES`, `INTEGRITY` e `CQ-PARSE`.',
        'Construí a persistência de ratchet em SQLite para impedir regressão de complexidade em arquivos legados e exigir conformidade estrita em arquivos novos.',
      ],
    },
    architectureFlow: [
      {
        node: 'Agent MCP Surface (:7420/mcp)',
        role: { en: 'check · explain · status · verify_fix', pt: 'check · explain · status · verify_fix' },
        detail: {
          en: 'Read-only verification tools for Claude Code / AI terminals; agents cannot lower thresholds or approve waivers.',
          pt: 'Ferramentas de verificação somente leitura para terminais de IA; agentes não podem reduzir limites ou aprovar exceções.',
        },
      },
      {
        node: 'Deterministic Analyzers',
        role: { en: 'SonarJS + ESLint + Tarjan SCC', pt: 'SonarJS + ESLint + Tarjan SCC' },
        detail: {
          en: 'Evaluates cognitive complexity, structural rules, runtime dependency cycles, and layer boundary violations.',
          pt: 'Avalia complexidade cognitiva, regras estruturais, ciclos de dependência em runtime e violação de camadas.',
        },
      },
      {
        node: 'Human CLI (quality-admin)',
        role: { en: 'Baselines, Waivers & Ratchet Store', pt: 'Baselines, Exceções e Ratchet SQLite' },
        detail: {
          en: 'Out-of-band CLI reserved for human engineers to record baselines or grant time-bounded architectural exceptions.',
          pt: 'CLI fora de banda reservada a engenheiros humanos para gravar baselines ou conceder exceções temporárias.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Physical separation of agent MCP vs. human CLI: prevents prompt-injected or over-eager coding agents from mutating quality baselines.',
        'Cognitive complexity ratchet instead of global freeze: allows gradual refactoring of legacy modules without blocking unrelated PRs.',
        'Tarjan Strongly Connected Components (SCC) on import graphs: catches indirect multi-file runtime cycles deterministically.',
      ],
      pt: [
        'Separação física entre MCP de agentes e CLI humana: impede que agentes alterem baselines ou silenciem alertas por conta própria.',
        'Ratchet de complexidade cognitiva em vez de bloqueio global imediato: viabiliza refatoração incremental de código legado.',
        'Componentes Fortemente Conexos (Tarjan SCC) no grafo de imports: detecta ciclos indiretos de runtime com precisão determinística.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Current stage: Active developer tooling (`v2`). JS/TS structural, cognitive ratchet, and cycle/boundary gates are implemented and tested; external security scanners (`Semgrep`, `Trivy`, `SBOM`) and runtime gates (`G4–G6`) are documented on the roadmap as partial/in-progress.',
      pt: 'Estágio atual: Ferramenta de engenharia em evolução (`v2`). Os gates estruturais, ratchet cognitivo e análise de ciclos/fronteiras para JS/TS estão implementados; scanners externos (`Semgrep`, `Trivy`, `SBOM`) e gates `G4–G6` estão documentados como parciais/em andamento.',
    },
    verifiedFacts: [
      { label: { en: 'Transport', pt: 'Transporte' }, value: { en: 'MCP Streamable HTTP (:7420)', pt: 'MCP Streamable HTTP (:7420)' } },
      { label: { en: 'Core Runtime', pt: 'Runtime Base' }, value: { en: 'Invokta Action Engine', pt: 'Invokta Action Engine' } },
      { label: { en: 'Active Gates', pt: 'Gates Ativos' }, value: { en: '6 JS/TS Structural & Arch Rules', pt: '6 Regras Estruturais e Arq. JS/TS' } },
      { label: { en: 'Privilege Model', pt: 'Modelo de Privilégio' }, value: { en: 'Agent MCP vs. Human CLI', pt: 'MCP Agente vs. CLI Humana' } },
    ],
    stack: ['TypeScript', 'Node.js', '@invokta/core', 'MCP Streamable HTTP', 'ESLint / SonarJS', 'dependency-cruiser', 'SQLite'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Quality-engine',
    },
  },
  {
    slug: 'simpay',
    code: 'P4 · FINTECH & WEB3 PRODUCT',
    title: 'SimPay',
    featured: true,
    priorityOrder: 4,
    categories: ['product-web'],
    competencies: ['product-frontend'],
    stageBadge: {
      en: 'Live Web Platform · Product Showcase',
      pt: 'Plataforma Web Publicada · Produto Digital',
    },
    roleBadge: {
      en: 'Frontend & Interactive Product Engineer',
      pt: 'Engenheiro de Frontend e Produto Interativo',
    },
    eyebrow: {
      en: 'Solana SPL Token Payment Ecosystem, POS Simulator & Merchant Portal',
      pt: 'Ecossistema de Pagamentos Solana SPL, Simulador POS e Portal Lojista',
    },
    tagline: {
      en: 'User-centric fintech web experience featuring an interactive PIX-to-Solana token converter, physical POS terminal simulation, merchant savings calculator, and whitepaper reader.',
      pt: 'Experiência web fintech centrada no usuário com conversor interativo PIX-para-Solana, simulação de maquininha POS física, calculadora de economia para lojistas e leitor de whitepaper.',
    },
    summary: {
      en: 'Built with Next.js 16, React 19, Tailwind CSS v4, Motion, and Anime.js, SimPay presents a cohesive consumer and merchant payment journey—allowing visitors to test wallet connection flows, simulate POS checkout with instant cashback, and compare merchant fee savings.',
      pt: 'Construído com Next.js 16, React 19, Tailwind CSS v4, Motion e Anime.js, o SimPay apresenta a jornada completa de pagamento para consumidores e lojistas — permitindo testar fluxos de carteira, simular checkout em terminal POS com cashback e calcular economia de taxas.',
    },
    problem: {
      en: 'Token-based payment platforms often alienate everyday consumers and local merchants with complex crypto jargon instead of demonstrating tangible checkout utility and fee transparency.',
      pt: 'Plataformas de pagamento baseadas em tokens frequentemente afastam consumidores e lojistas locais pelo excesso de jargão cripto, falhando em demonstrar a utilidade prática no caixa.',
    },
    solution: {
      en: 'Replaces abstract tokenomics tables with tactile interactive modules: an in-hero wallet and currency converter (`R$ 0,11` initial token rate via PIX/USD), an interactive POS hardware showcase, a merchant ROI calculator, and a dedicated institutional portal.',
      pt: 'Substitui tabelas abstratas por módulos interativos táteis: carteira e conversor de moedas no hero (taxa inicial `R$ 0,11` via PIX/USD), vitrine interativa de maquininha POS, calculadora de ROI para lojistas e portal institucional dedicado.',
    },
    myContribution: {
      en: [
        'Engineered the redesigned landing experience (`app/page.tsx`), interactive POS terminal showcase, token converter, and savings calculator.',
        'Implemented the merchant portal flow, whitepaper reader route, and responsive motion polish using Next.js 16, React 19, Motion, and Anime.js.',
        'Synchronized build and typography tokens for clean high-contrast legibility across mobile and desktop viewports.',
      ],
      pt: [
        'Desenvolvi a experiência principal (`app/page.tsx`), o simulador interativo de terminal POS, o conversor de tokens e a calculadora de economia.',
        'Implementei o fluxo do portal de lojistas, a rota de leitura do whitepaper e o polimento de animações com Next.js 16, React 19, Motion e Anime.js.',
        'Padronizei tokens visuais e tipográficos para leitura de alto contraste em dispositivos móveis e desktop.',
      ],
    },
    architectureFlow: [
      {
        node: 'Interactive Hero Wallet',
        role: { en: 'PIX / USD → SPL Token Simulation', pt: 'Simulação PIX / USD → Token SPL' },
        detail: {
          en: 'Lets users test wallet state, balance updates, and instant conversion at the R$ 0.11 phase rate.',
          pt: 'Permite testar estado de carteira, atualização de saldo e conversão imediata na cotação de R$ 0,11.',
        },
      },
      {
        node: 'POS Terminal Showcase',
        role: { en: 'Consumer Checkout & Cashback Flow', pt: 'Fluxo de Checkout e Cashback no POS' },
        detail: {
          en: 'Simulates physical merchant terminal tap/QR payment with real-time balance deduction and reward feedback.',
          pt: 'Simula pagamento em maquininha física via QR/aproximação com dedução de saldo e feedback de cashback.',
        },
      },
      {
        node: 'Merchant Portal & Whitepaper',
        role: { en: 'Fee Calculator & Documentation', pt: 'Calculadora de Taxas e Whitepaper v1.0' },
        detail: {
          en: 'Dedicated B2B onboarding view and structured technical whitepaper reader.',
          pt: 'Visão dedicada para credenciamento B2B de lojistas e leitura estruturada do Whitepaper v1.0.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Interactive simulation before wallet friction: visitors can experience the POS checkout and fee math immediately in the browser without mandatory extension installs.',
        'Dual consumer/merchant IA: keeps everyday shopper benefits on the main canvas while giving business owners a clear path to merchant onboarding.',
      ],
      pt: [
        'Simulação interativa antes da fricção de carteira: visitantes experimentam o pagamento no POS e o cálculo de taxas imediatamente no navegador.',
        'Arquitetura de informação dupla (consumidor e lojista): mantém os benefícios de compra claros na home e oferece caminho direto para empresas.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Interactive web frontend and product experience (`simpay.tech` / `RafaScripts/simpay`). In-page wallet balances and POS terminal transactions on the landing page are interactive client-side simulations.',
      pt: 'Frontend web interativo e experiência de produto (`simpay.tech` / `RafaScripts/simpay`). Os saldos de carteira e transações de maquininha na landing page operam como simulações interativas no cliente.',
    },
    verifiedFacts: [
      { label: { en: 'Framework', pt: 'Framework' }, value: { en: 'Next.js 16 + React 19', pt: 'Next.js 16 + React 19' } },
      { label: { en: 'Motion Stack', pt: 'Stack de Animação' }, value: { en: 'Motion + Anime.js 4', pt: 'Motion + Anime.js 4' } },
      { label: { en: 'Charts & UI', pt: 'Gráficos e UI' }, value: { en: 'Recharts + Tailwind v4', pt: 'Recharts + Tailwind v4' } },
      { label: { en: 'Live Domain', pt: 'Domínio Público' }, value: { en: 'simpay.tech', pt: 'simpay.tech' } },
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion', 'Anime.js', 'Recharts'],
    links: {
      repo: 'https://github.com/RafaScripts/simpay',
      live: 'https://simpay.tech/',
    },
  },
  {
    slug: 'launchguard',
    code: 'P5 · EVENT STREAMING & FLINK SQL',
    title: 'LaunchGuard',
    featured: true,
    priorityOrder: 5,
    categories: ['architecture-tooling', 'governance-ops'],
    competencies: ['backend-cloud', 'governance-risk'],
    stageBadge: {
      en: 'Streaming Prototype · Event Architecture',
      pt: 'Protótipo de Streaming · Arquitetura de Eventos',
    },
    roleBadge: {
      en: 'Author & Event-Streaming Engineer',
      pt: 'Autor e Engenheiro de Event-Streaming',
    },
    eyebrow: {
      en: 'Predictive Checkout Release Intelligence with Kafka, Avro & Apache Flink SQL',
      pt: 'Inteligência Preditiva de Releases de Checkout com Kafka, Avro e Apache Flink SQL',
    },
    tagline: {
      en: 'Correlates high-velocity checkout telemetry against release metadata using Confluent Cloud Kafka, Schema Registry (Avro), and Flink SQL temporal joins—with human-approved rollback.',
      pt: 'Correlaciona telemetria de checkout em tempo real com metadados de deploy usando Confluent Cloud Kafka, Schema Registry (Avro) e joins temporais em Flink SQL — com rollback aprovado por humano.',
    },
    summary: {
      en: 'Canary releases in payment checkouts often degrade silently before static threshold alerts fire. LaunchGuard demonstrates a deterministic streaming pipeline (`checkout.telemetry.raw` + `releases.metadata`) that isolates version regressions and requires explicit operator approval before triggering rollback.',
      pt: 'Deploys canário em fluxos de checkout frequentemente degradam antes que alertas estáticos disparem. O LaunchGuard demonstra um pipeline determinístico de streaming (`checkout.telemetry.raw` + `releases.metadata`) que isola regressões por versão e exige aprovação explícita do operador antes do rollback.',
    },
    problem: {
      en: 'During a canary rollout, global error averages mask localized failures in the new version, while fully automated rollbacks without human confirmation can cause cascading deployment thrashing.',
      pt: 'Durante um rollout canário, médias globais de erro mascaram falhas concentradas na versão nova, enquanto rollbacks 100% automáticos sem confirmação humana podem gerar instabilidade em cascata.',
    },
    solution: {
      en: 'Uses deterministic stream processing—never an LLM—for incident detection: Avro-serialized Kafka topics, Flink SQL `FOR SYSTEM_TIME AS OF` temporal joins, 10-second tumbling window aggregations, `ML_FORECAST` latency projection, and a FastAPI + WebSocket operator console.',
      pt: 'Utiliza processamento determinístico de streams — e não um LLM — para detecção de incidentes: tópicos Kafka serializados em Avro, joins temporais `FOR SYSTEM_TIME AS OF` em Flink SQL, janelas de 10 segundos, projeção `ML_FORECAST` e console FastAPI + WebSocket.',
    },
    myContribution: {
      en: [
        'Authored the event producer/consumer pipeline (`producer.py`, `backend/main.py`) with Confluent Cloud Kafka and Avro Schema Registry support plus local simulation fallback.',
        'Wrote the three-stage Apache Flink SQL pipeline (`temporal_join.sql`, `window_aggregation.sql`, `ml_forecast_anomaly.sql`).',
        'Implemented the FastAPI WebSocket operator dashboard with human-in-the-loop rollback confirmation.',
      ],
      pt: [
        'Desenvolvi o pipeline produtor/consumidor de eventos (`producer.py`, `backend/main.py`) com suporte a Confluent Cloud Kafka e Schema Registry Avro, além de modo de simulação local.',
        'Escrevi o pipeline Apache Flink SQL em três estágios (`temporal_join.sql`, `window_aggregation.sql`, `ml_forecast_anomaly.sql`).',
        'Implementei o painel de operações em FastAPI + WebSockets com confirmação humana obrigatória para rollback.',
      ],
    },
    architectureFlow: [
      {
        node: 'Kafka + Avro Producer',
        role: { en: 'checkout.telemetry.raw & releases.metadata', pt: 'checkout.telemetry.raw & releases.metadata' },
        detail: {
          en: 'Streams baseline (80% v2.4.1) and canary (20% v2.5.0-canary) checkout events with Avro schema validation.',
          pt: 'Transmite eventos de checkout baseline (80% v2.4.1) e canário (20% v2.5.0-canary) validados via schema Avro.',
        },
      },
      {
        node: 'Apache Flink SQL Pipeline',
        role: { en: 'Temporal Join → 10s Window → ML_FORECAST', pt: 'Join Temporal → Janela 10s → ML_FORECAST' },
        detail: {
          en: 'Correlates events with release context (`FOR SYSTEM_TIME AS OF`) and computes 10-second p99 latency & error rates.',
          pt: 'Correlaciona eventos ao contexto da release (`FOR SYSTEM_TIME AS OF`) e calcula latência p99 e taxa de erro a cada 10s.',
        },
      },
      {
        node: 'FastAPI Operator Console',
        role: { en: 'WebSocket Telemetry & Human Rollback Gate', pt: 'Telemetria WebSocket e Gate Humano de Rollback' },
        detail: {
          en: 'Streams health transitions (`HEALTHY → PREDICTIVE_WARNING → CRITICAL_INCIDENT`) and awaits operator-approved rollback.',
          pt: 'Apresenta transições de saúde (`HEALTHY → PREDICTIVE_WARNING → CRITICAL_INCIDENT`) e aguarda aprovação humana de rollback.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Deterministic stream math instead of LLM anomaly guessing: sub-second checkout telemetry requires predictable window aggregations and temporal joins.',
        'Human-in-the-loop rollback confirmation: the system prepares the rollback command and isolates the canary blast radius, but a human operator authorizes execution.',
      ],
      pt: [
        'Matemática determinística de streams em vez de inferência por LLM: telemetria de checkout exige agregações em janela e joins temporais previsíveis.',
        'Rollback sujeito à aprovação humana: o sistema isola o incidente e prepara a reversão, mas a decisão final pertence ao operador humano.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Prototype transparency: Checkout traffic and GMV figures are simulated by `producer.py`. The Flink SQL scripts in `flink_sql/` are documented deployment candidates and were not executed against a live Confluent Cloud Flink workspace during repository verification.',
      pt: 'Transparência de protótipo: O tráfego de checkout e valores de GMV são simulados pelo `producer.py`. As consultas em `flink_sql/` são candidatas de implantação documentadas e não foram validadas contra um workspace Flink ativo na nuvem.',
    },
    verifiedFacts: [
      { label: { en: 'Event Bus', pt: 'Barramento de Eventos' }, value: { en: 'Kafka + Avro Registry', pt: 'Kafka + Avro Registry' } },
      { label: { en: 'Stream Queries', pt: 'Consultas de Stream' }, value: { en: '3 Flink SQL Stages', pt: '3 Estágios Flink SQL' } },
      { label: { en: 'LLM Dependency', pt: 'Dependência de LLM' }, value: { en: 'Zero (Deterministic)', pt: 'Zero (Determinístico)' } },
      { label: { en: 'Control Loop', pt: 'Controle de Risco' }, value: { en: 'Operator-Approved Rollback', pt: 'Rollback Aprovado por Humano' } },
    ],
    stack: ['Python', 'FastAPI', 'Apache Kafka (Confluent)', 'Avro Schema Registry', 'Apache Flink SQL', 'WebSockets'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Lauchguard',
    },
  },
  {
    slug: 'jev-gateway',
    code: 'P6 · OPEN-SOURCE CONTRIBUTION',
    title: 'Jev Gateway',
    featured: true,
    priorityOrder: 6,
    categories: ['open-source', 'ai-agents', 'architecture-tooling'],
    competencies: ['applied-ai', 'dev-tooling'],
    stageBadge: {
      en: 'Open-Source Contribution · Fork',
      pt: 'Contribuição Open Source · Fork',
    },
    roleBadge: {
      en: 'Open-Source Contributor (Upstream: vinilana/jev-gateway)',
      pt: 'Contribuidor Open Source (Upstream: vinilana/jev-gateway)',
    },
    eyebrow: {
      en: 'Local Tool-Routing Gateway for Coding Agents Powered by TypeSafe Jev',
      pt: 'Gateway Local de Roteamento de Ferramentas para Agentes de Código com TypeSafe Jev',
    },
    tagline: {
      en: 'Intercepts OpenAI and Anthropic coding-agent requests (`jev-codex`, `jev-claude`), routes tool selection through TypeSafe’s System One model Jev, and exposes a live localhost telemetry dashboard.',
      pt: 'Intercepta requisições de agentes de código (`jev-codex`, `jev-claude`), roteia a seleção de ferramentas pelo modelo Jev da TypeSafe e expõe um dashboard local de inspeção em tempo real.',
    },
    summary: {
      en: 'Contributed to `jev-gateway` (forked from `vinilana/jev-gateway`), a local proxy that decouples fast tool-calling judgment from heavy reasoning models. Supports five routing modes (`direct`, `forced`, `hint`, `none`, `passthrough`) so developers can benchmark latency and tool accuracy.',
      pt: 'Contribuição ao projeto `jev-gateway` (fork de `vinilana/jev-gateway`), um proxy local que desacopla o julgamento rápido de seleção de ferramentas do modelo principal de geração. Suporta cinco modos (`direct`, `forced`, `hint`, `none`, `passthrough`) com painel de inspeção ao vivo.',
    },
    problem: {
      en: 'Frontier coding agents pass dozens of large MCP and CLI tool schemas on every turn, inflating token consumption and latency when the main LLM has to decide which tool to call.',
      pt: 'Agentes de código enviam dezenas de schemas extensos de ferramentas MCP e CLI a cada turno, inflando o consumo de tokens e a latência na decisão de qual ferramenta acionar.',
    },
    solution: {
      en: 'Places a lightweight local gateway between `codex`/`claude` CLIs and the upstream LLM provider. The gateway converts tool definitions into TypeSafe Jev assertions, evaluates the most relevant tool in milliseconds, and either returns the tool call directly or narrows the upstream schema.',
      pt: 'Posiciona um gateway local leve entre as CLIs (`codex`/`claude`) e o provedor LLM. O gateway converte definições de ferramentas em asserções para o modelo Jev da TypeSafe, identifica a ferramenta relevante rapidamente e retorna a chamada ou restringe o schema enviado ao LLM principal.',
    },
    myContribution: {
      en: [
        'Contributed to the open-source gateway workflow, local CLI wrappers (`jev-codex`, `jev-claude`), and multi-mode routing inspection.',
        'Tested and documented TypeSafe Jev integration patterns across `direct`, `forced`, `hint`, `none`, and `passthrough` execution modes.',
      ],
      pt: [
        'Contribuí com o fluxo do gateway open source, wrappers de CLI local (`jev-codex`, `jev-claude`) e inspeção de roteamento multimodo.',
        'Testei e documentei padrões de integração com o modelo Jev da TypeSafe nos modos `direct`, `forced`, `hint`, `none` e `passthrough`.',
      ],
    },
    architectureFlow: [
      {
        node: 'CLI Wrappers (jev-codex / jev-claude)',
        role: { en: 'OpenAI Responses & Anthropic Messages', pt: 'OpenAI Responses & Anthropic Messages' },
        detail: {
          en: 'Points local coding agents to the localhost gateway without modifying agent source code.',
          pt: 'Redireciona agentes de código locais para o gateway em localhost sem alterar o código-fonte do cliente.',
        },
      },
      {
        node: 'TypeSafe Jev Router',
        role: { en: 'direct · forced · hint · none · passthrough', pt: 'direct · forced · hint · none · passthrough' },
        detail: {
          en: 'Scores candidate tools via TypeSafe Jev and narrows or executes tool selection before forwarding.',
          pt: 'Pontua ferramentas candidatas via TypeSafe Jev e filtra ou executa a seleção antes de encaminhar ao modelo.',
        },
      },
      {
        node: 'Live Localhost Inspector',
        role: { en: 'Turn-by-Turn Tool & Latency Telemetry', pt: 'Telemetria de Ferramentas e Latência por Turno' },
        detail: {
          en: 'Web UI showing Jev probability scores, selected tools, and upstream token savings.',
          pt: 'Interface web exibindo probabilidades do Jev, ferramentas selecionadas e economia de tokens.',
        },
      },
    ],
    decisionsAndTradeoffs: {
      en: [
        'Five configurable routing modes: lets engineers compare `forced` (narrowed tool schema) vs. `direct` (Jev emits the tool call directly) against `passthrough` baseline.',
        'Localhost-first proxy architecture: keeps API keys and coding session transcripts on the developer’s machine.',
      ],
      pt: [
        'Cinco modos configuráveis de roteamento: permite comparar `forced` (schema reduzido) e `direct` (chamada direta pelo Jev) contra o baseline `passthrough`.',
        'Arquitetura de proxy local: mantém chaves de API e transcrições de sessão na própria máquina do desenvolvedor.',
      ],
    },
    honestyAndScopeNote: {
      en: 'Attribution & Independence: Open-source fork/contribution to `vinilana/jev-gateway`. Independent community project; not affiliated with or endorsed by TypeSafe.',
      pt: 'Atribuição e Independência: Fork e contribuição open source para `vinilana/jev-gateway`. Projeto comunitário independente, não afiliado nem endossado oficialmente pela TypeSafe.',
    },
    verifiedFacts: [
      { label: { en: 'Routing Modes', pt: 'Modos de Roteamento' }, value: { en: '5 (direct, forced, hint, none, passthrough)', pt: '5 (direct, forced, hint, none, passthrough)' } },
      { label: { en: 'Agent Protocols', pt: 'Protocolos Suportados' }, value: { en: 'OpenAI & Anthropic APIs', pt: 'APIs OpenAI & Anthropic' } },
      { label: { en: 'Decision Engine', pt: 'Motor de Decisão' }, value: { en: 'TypeSafe System One (Jev)', pt: 'TypeSafe System One (Jev)' } },
      { label: { en: 'Project Type', pt: 'Tipo de Projeto' }, value: { en: 'Open-Source Contribution', pt: 'Contribuição Open Source' } },
    ],
    stack: ['TypeScript', 'Node.js', 'TypeSafe Jev', 'OpenAI API', 'Anthropic API', 'MCP / Tool Calling'],
    links: {
      repo: 'https://github.com/andrecodexvictor/jev-gateway',
      upstreamRepo: 'https://github.com/vinilana/jev-gateway',
    },
  },
];

export const ARCHIVE_PROJECTS: PortfolioProject[] = [
  {
    slug: '24podiums',
    code: 'A1 · F1 STRATEGY & MULTIPLAYER SIM',
    title: '24 Podiums',
    featured: false,
    priorityOrder: 7,
    categories: ['product-web'],
    competencies: ['product-frontend', 'backend-cloud'],
    stageBadge: {
      en: 'Live on Vercel · Multiplayer Sim',
      pt: 'Publicado na Vercel · Simulador Multiplayer',
    },
    roleBadge: {
      en: 'Creator & Full-Stack Developer',
      pt: 'Criador e Desenvolvedor Full-Stack',
    },
    eyebrow: {
      en: 'Formula 1 Draft & Season Simulator (Bridge to the Portfolio’s Motorsport Motif)',
      pt: 'Simulador de Temporadas e Draft de Fórmula 1 (Ponte para a Identidade Visual de F1)',
    },
    tagline: {
      en: 'High-contrast brutalist-editorial F1 team draft and race simulator supporting pass-and-play and 4-player online rooms backed by Upstash Redis.',
      pt: 'Simulador de corridas e recrutamento de equipes de F1 com estilo editorial de alto contraste, modo local pass-and-play e salas online para até 4 jogadores via Upstash Redis.',
    },
    summary: {
      en: 'Inspired by classic tabletop draft games, 24 Podiums lets players draft historic constructors and drivers across classic F1 seasons and simulate full championship calendars.',
      pt: 'Inspirado no jogo clássico 7a0, o 24 Podiums permite sortear equipes e temporadas históricas da Fórmula 1, montar escuderias e disputar o campeonato mundial.',
    },
    problem: {
      en: 'Serverless platforms like Vercel reset in-memory room state between function invocations, breaking real-time multiplayer draft rooms without external state.',
      pt: 'Plataformas serverless como a Vercel reiniciam a memória entre requisições, quebrando salas multiplayer se não houver persistência dedicada.',
    },
    solution: {
      en: 'Uses Upstash Redis REST persistence in production with automatic in-memory fallback for local development, paired with a clean high-contrast light editorial UI.',
      pt: 'Utiliza persistência serverless via Upstash Redis REST em produção com fallback em memória para desenvolvimento local e interface clara de alto contraste.',
    },
    myContribution: {
      en: [
        'Built the race simulation engine, historic season draft mechanics, and Upstash Redis multiplayer room state.',
        'Designed the high-contrast light editorial visual theme.',
      ],
      pt: [
        'Construí o motor de simulação de corridas, a mecânica de draft de temporadas clássicas e a persistência multiplayer com Upstash Redis.',
        'Projetei a interface clara de alto contraste em estilo editorial.',
      ],
    },
    architectureFlow: [
      {
        node: 'React + Motion Draft UI',
        role: { en: 'Pass-and-Play & Online Lobby', pt: 'Pass-and-Play e Lobby Online' },
        detail: { en: 'Drafts drivers and constructors across classic F1 eras.', pt: 'Sorteia pilotos e construtores em temporadas históricas da F1.' },
      },
      {
        node: 'Vercel Serverless + Upstash Redis',
        role: { en: 'Persistent 4-Player Room State', pt: 'Estado Persistente para 4 Jogadores' },
        detail: { en: 'Synchronizes draft picks and championship standings via REST Redis.', pt: 'Sincroniza escolhas de draft e tabela do campeonato via Redis REST.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['Dual Redis/In-Memory adapter so local contributors can run `npm run dev` with zero cloud credentials.'],
      pt: ['Adaptador duplo Redis/Memória para permitir execução local (`npm run dev`) sem exigir credenciais de nuvem.'],
    },
    honestyAndScopeNote: {
      en: 'Completed hobby and game engineering project; directly inspires the subtle motorsport precision linework across this portfolio.',
      pt: 'Projeto autoral concluído de simulação esportiva; inspira diretamente os detalhes gráficos sutis de Fórmula 1 deste portfólio.',
    },
    verifiedFacts: [
      { label: { en: 'Multiplayer', pt: 'Multiplayer' }, value: { en: 'Up to 4 Players (Redis)', pt: 'Até 4 Jogadores (Redis)' } },
      { label: { en: 'Visual Style', pt: 'Estilo Visual' }, value: { en: 'High-Contrast Editorial', pt: 'Editorial de Alto Contraste' } },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Express', 'Upstash Redis', 'Vercel'],
    links: {
      repo: 'https://github.com/andrecodexvictor/24Podiums',
    },
  },
  {
    slug: 'script-kitty',
    code: 'A2 · DEFENSIVE SECURITY & MCP',
    title: 'Script Kitty',
    featured: false,
    priorityOrder: 8,
    categories: ['architecture-tooling', 'ai-agents', 'open-source'],
    competencies: ['dev-tooling', 'applied-ai', 'governance-risk'],
    stageBadge: {
      en: 'Open-Source Polyglot Security Harness',
      pt: 'Plataforma Poliglota de Segurança Defensiva',
    },
    roleBadge: {
      en: 'Author & Security Tooling Engineer',
      pt: 'Autor e Engenheiro de Ferramentas de Segurança',
    },
    eyebrow: {
      en: 'Self-Hosted SAST, AI Guardrail Validator & Rust SHA-256 Audit Logger',
      pt: 'SAST Auto-Hospedado, Validador de Guardrails de IA e Auditoria SHA-256 em Rust',
    },
    tagline: {
      en: 'Polyglot defensive security platform combining a TypeScript CLI & MCP server (`sk`), Python Web2/Web3 and LLM guardrail scanners, and a Rust hash-chained audit engine.',
      pt: 'Plataforma defensiva poliglota combinando CLI e servidor MCP em TypeScript (`sk`), módulos de análise Web2/Web3 e guardrails de IA em Python e motor de auditoria criptográfica em Rust.',
    },
    summary: {
      en: 'Provides authorized security validation across 5 operating modes (`Scout, Verify, Patch, Recheck, Lab`) with human-in-the-loop approval gates and native ZenPR bridge integration.',
      pt: 'Oferece validação defensiva autorizada em 5 modos operacionais (`Scout, Verify, Patch, Recheck, Lab`) com gates de aprovação humana e ponte nativa com o ZenPR.',
    },
    problem: {
      en: 'Security scanners and AI guardrail tests are fragmented across incompatible tools and often lack tamper-evident audit trails or scope enforcement.',
      pt: 'Scanners de segurança e testes de guardrails de IA costumam ficar espalhados em ferramentas desconexas, sem trilha de auditoria imutável nem trava de escopo.',
    },
    solution: {
      en: 'Unifies polyglot SAST, secret detection, HTTP header checks, Solidity smart-contract checks, and 5 LLM guardrail suites under a Zero-Trust policy core and Rust Merkle-tree audit log.',
      pt: 'Unifica SAST poliglota, detecção de segredos, análise de headers HTTP, auditoria Solidity e 5 suítes de guardrails de LLM sob políticas Zero-Trust e log encadeado SHA-256 em Rust.',
    },
    myContribution: {
      en: [
        'Built the TypeScript `sk` TUI/CLI and MCP server, Python scanner harnesses, and Rust SHA-256 hash-chained audit logger.',
      ],
      pt: [
        'Construí a CLI/TUI `sk` e servidor MCP em TypeScript, os módulos de verificação em Python e o logger criptográfico SHA-256 em Rust.',
      ],
    },
    architectureFlow: [
      {
        node: 'TypeScript CLI & MCP (sk)',
        role: { en: 'Interactive TUI & Agent Bridge', pt: 'TUI Interativa e Ponte MCP' },
        detail: { en: 'Orchestrates security suites and exports remediation PRs to ZenPR.', pt: 'Orquestra suítes de segurança e exporta PRs defensivos para o ZenPR.' },
      },
      {
        node: 'Python Scanners + Rust Audit Core',
        role: { en: 'SAST / AI Guardrails + SHA-256 Log', pt: 'SAST / Guardrails IA + Log SHA-256' },
        detail: { en: 'Runs validation suites and records tamper-evident Merkle audit entries.', pt: 'Executa validações e grava registros de auditoria encadeados em Rust.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['Enforces `scope.md` target allowlists and human approval before running active `Verify` or `Lab` checks.'],
      pt: ['Exige lista de alvos autorizados (`scope.md`) e aprovação humana antes de executar verificações ativas.'],
    },
    honestyAndScopeNote: {
      en: 'Open-source defensive validation and educational security engineering harness.',
      pt: 'Ferramenta open source voltada exclusivamente para validação defensiva autorizada e educação em segurança.',
    },
    verifiedFacts: [
      { label: { en: 'Languages', pt: 'Linguagens' }, value: { en: 'TypeScript + Python + Rust', pt: 'TypeScript + Python + Rust' } },
      { label: { en: 'AI Guardrails', pt: 'Guardrails de IA' }, value: { en: '5 Verification Suites', pt: '5 Suítes de Verificação' } },
    ],
    stack: ['TypeScript', 'Python 3.11', 'Rust', 'MCP SDK', 'Vite', 'Zero-Trust Audit Log'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Script-kitty',
    },
  },
  {
    slug: 'zenpr',
    code: 'A3 · ADAPTIVE CODE REVIEW & MCP',
    title: 'ZenPR',
    featured: false,
    priorityOrder: 9,
    categories: ['architecture-tooling', 'ai-agents', 'open-source'],
    competencies: ['dev-tooling', 'applied-ai'],
    stageBadge: {
      en: 'Open-Source MCP Workbench',
      pt: 'Workbench MCP Open Source',
    },
    roleBadge: {
      en: 'Author & Developer Tooling Engineer',
      pt: 'Autor e Engenheiro de Developer Tooling',
    },
    eyebrow: {
      en: 'Adaptive Pull Request Review Agent with Dual Stdio & HTTP MCP Server',
      pt: 'Agente Adaptativo de Code Review com Servidor MCP Stdio e HTTP',
    },
    tagline: {
      en: 'Solves stateless AI code review by recording developer decisions (Applied, Rejected, Adjusted) and synthesizing persistent repository-specific review rules.',
      pt: 'Resolve o problema de revisores de IA sem memória ao registrar decisões do desenvolvedor (Aplicado, Rejeitado, Ajustado) e sintetizar regras persistentes por repositório.',
    },
    summary: {
      en: 'Runs as both a Next.js 15 / React 19 web workbench and a dual-transport MCP server (`stdio` and `/api/mcp` Streamable HTTP) for Claude Desktop, Cursor, and Antigravity.',
      pt: 'Opera tanto como aplicação web Next.js 15 / React 19 quanto como servidor MCP de transporte duplo (`stdio` e `/api/mcp` HTTP) para Claude Desktop, Cursor e Antigravity.',
    },
    problem: {
      en: 'Conventional AI PR bots evaluate every pull request from scratch, repeating noisy suggestions that the team has already rejected.',
      pt: 'Bots convencionais de code review avaliam cada PR isoladamente, repetindo sugestões ruidosas que a equipe já rejeitou anteriormente.',
    },
    solution: {
      en: 'Captures structured developer feedback per finding and derives permanent repository guidance once feedback thresholds are reached, with deterministic offline fallback.',
      pt: 'Captura feedback estruturado por achado e deriva diretrizes permanentes por repositório quando limiares de padrão são atingidos, com fallback determinístico offline.',
    },
    myContribution: {
      en: ['Built the Next.js review workbench, adaptive rule synthesizer, and dual `stdio` / HTTP MCP server.'],
      pt: ['Construí o workbench Next.js, o sintetizador de regras adaptativas e o servidor MCP `stdio` e HTTP.'],
    },
    architectureFlow: [
      {
        node: 'GitHub PR Import & Diff Parser',
        role: { en: 'Web Workbench or MCP Tool Call', pt: 'Workbench Web ou Chamada MCP' },
        detail: { en: 'Imports PR diffs directly via URL and anchors findings to exact lines.', pt: 'Importa diffs de PR via URL e ancora achados às linhas exatas de código.' },
      },
      {
        node: 'Adaptive Feedback Loop',
        role: { en: 'Applied · Rejected · Adjusted → Repo Rules', pt: 'Aplicado · Rejeitado · Ajustado → Regras' },
        detail: { en: 'Synthesizes team decisions into persistent repository review rules.', pt: 'Converte decisões da equipe em regras persistentes de revisão por repositório.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['100% unlocked open-source architecture with deterministic offline demo mode when no LLM key is configured.'],
      pt: ['Arquitetura 100% open source sem bloqueios de plano e com modo determinístico offline quando não há chave de IA.'],
    },
    honestyAndScopeNote: {
      en: 'Self-hosted open-source developer tool with full local persistence.',
      pt: 'Ferramenta open source auto-hospedada com persistência local completa.',
    },
    verifiedFacts: [
      { label: { en: 'MCP Transports', pt: 'Transportes MCP' }, value: { en: 'Stdio + Streamable HTTP', pt: 'Stdio + Streamable HTTP' } },
      { label: { en: 'Stack', pt: 'Stack' }, value: { en: 'Next.js 15 + React 19 + TS', pt: 'Next.js 15 + React 19 + TS' } },
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'MCP (Stdio & HTTP)', 'Tailwind CSS', 'Vitest'],
    links: {
      repo: 'https://github.com/andrecodexvictor/ZenPR',
    },
  },
  {
    slug: 'dotstack',
    code: 'A4 · DETERMINISTIC STACK COMPILER & TF-IDF',
    title: 'dotstack',
    featured: false,
    priorityOrder: 10,
    categories: ['architecture-tooling', 'open-source'],
    competencies: ['dev-tooling', 'backend-cloud'],
    stageBadge: {
      en: 'Open-Source CLI & MCP Server',
      pt: 'CLI e Servidor MCP Open Source',
    },
    roleBadge: {
      en: 'Author & Architecture Tooling Engineer',
      pt: 'Autor e Engenheiro de Ferramentas de Arquitetura',
    },
    eyebrow: {
      en: 'Deterministic Technology Stack Recommendation Engine & Offline Semantic Code Search',
      pt: 'Motor Determinístico de Recomendação de Stack e Busca Semântica Offline de Código',
    },
    tagline: {
      en: 'Evaluates project constraints across 13 architectural categories using a pure TypeScript scoring compiler and provides offline TF-IDF cosine-similarity code search over MCP.',
      pt: 'Avalia restrições de projeto em 13 categorias arquiteturais com um compilador determinístico em TypeScript puro e oferece busca semântica offline via TF-IDF e MCP.',
    },
    summary: {
      en: 'Produces machine-readable `.stack/stack.yaml` specifications, ADR documentation, migration blueprints, and local vector code search for humans and AI coding agents.',
      pt: 'Gera especificações `.stack/stack.yaml` legíveis por máquina, registros de decisão arquitetural (ADRs), planos de migração e busca vetorial local para humanos e agentes.',
    },
    problem: {
      en: 'Every new AI coding session forces developers to re-explain stack constraints, while cloud vector indexes require external API keys just to search local code.',
      pt: 'Cada sessão de agente exige reexplicar restrições arquiteturais do projeto, enquanto índices vetoriais em nuvem exigem chaves externas apenas para buscar código local.',
    },
    solution: {
      en: 'Combines a deterministic rule engine covering 13 categories with a zero-dependency local TF-IDF vector engine and one-command MCP installer (`npx dotstack mcp install all`).',
      pt: 'Combina um motor de regras determinístico em 13 categorias com um indexador vetorial TF-IDF local sem dependências externas e instalador MCP de um comando.',
    },
    myContribution: {
      en: ['Built the TypeScript scoring compiler, offline TF-IDF semantic search engine, CLI (`init, recommend, search, audit, migrate, docs`), and MCP server.'],
      pt: ['Construí o compilador de pontuação em TypeScript, a engine de busca semântica TF-IDF offline, a CLI e o servidor MCP.'],
    },
    architectureFlow: [
      {
        node: 'dotstack-project.yaml',
        role: { en: 'Scale, Budget & Team Constraints', pt: 'Restrições de Escala, Orçamento e Time' },
        detail: { en: 'Standardized project brief input.', pt: 'Especificação padronizada de entrada do projeto.' },
      },
      {
        node: 'Rules Engine + Local TF-IDF',
        role: { en: '13 Stack Categories & Cosine Search', pt: '13 Categorias de Stack e Busca Cosseno' },
        detail: { en: 'Compiles `.stack/` specs, ADRs, and indexes local repository chunks.', pt: 'Compila especificações `.stack/`, ADRs e indexa trechos do repositório localmente.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['Pure TypeScript TF-IDF vector space instead of remote embeddings so semantic search runs 100% offline.'],
      pt: ['Espaço vetorial TF-IDF em TypeScript puro em vez de embeddings remotos para garantir operação 100% offline.'],
    },
    honestyAndScopeNote: {
      en: 'Open-source CLI and MCP package with Vitest test coverage.',
      pt: 'Pacote CLI e MCP open source com suíte de testes automatizados em Vitest.',
    },
    verifiedFacts: [
      { label: { en: 'Categories', pt: 'Categorias' }, value: { en: '13 Architecture Layers', pt: '13 Camadas Arquiteturais' } },
      { label: { en: 'Search Engine', pt: 'Motor de Busca' }, value: { en: 'Offline TF-IDF Cosine', pt: 'TF-IDF Cosseno Offline' } },
    ],
    stack: ['TypeScript', 'Node.js', 'MCP Server', 'TF-IDF Vector Search', 'YAML / ADR Compiler', 'Vitest'],
    links: {
      repo: 'https://github.com/andrecodexvictor/dotstack',
    },
    previewImage: '/images/projects/dotstack-architecture.png',
  },
  {
    slug: 'frame-sim',
    code: 'A5 · ENTERPRISE SIMULATION KERNEL',
    title: 'Frame-sim (v7.1 / v8)',
    featured: false,
    priorityOrder: 11,
    categories: ['ai-agents', 'governance-ops'],
    competencies: ['applied-ai', 'governance-risk', 'product-frontend'],
    stageBadge: {
      en: 'Simulation Kernel · Hybrid Deterministic + Agentic',
      pt: 'Kernel de Simulação · Híbrido Determinístico + Agêntico',
    },
    roleBadge: {
      en: 'Author & Simulation Architect',
      pt: 'Autor e Arquiteto de Simulação',
    },
    eyebrow: {
      en: 'Multi-Agent Organizational Simulator with Deterministic Financial Math & EmployeeBrain',
      pt: 'Simulador Organizacional Multiagente com Matemática Financeira Determinística e EmployeeBrain',
    },
    tagline: {
      en: 'Tests management frameworks (Scrum, SAFe, COBIT, ITIL) against ~350 RAG-hydrated employee personas, seeded behavioral state (`EmployeeBrain`), and deterministic ROI/J-Curve math.',
      pt: 'Testa frameworks de gestão (Scrum, SAFe, COBIT, ITIL) contra ~350 personas reais via RAG, estado comportamental determinístico (`EmployeeBrain`) e cálculo financeiro de Curva J e ROI.',
    },
    summary: {
      en: 'Prevents LLMs from inventing financial numbers: while agents narrate stakeholder reactions, all ROI, Cost of Non-Quality (CoNQ), technical debt interest, and burnout/turnover transitions are computed deterministically.',
      pt: 'Impede que o LLM invente números financeiros: enquanto os agentes narram reações políticas e culturais, todo o ROI, Custo da Não-Qualidade (CoNQ), juros de dívida técnica e burnout são calculados por modelos matemáticos determinísticos.',
    },
    problem: {
      en: 'Prompt-only business simulators hallucinate arbitrary ROI percentages and ignore the J-Curve productivity dip of adopting heavy frameworks.',
      pt: 'Simuladores baseados apenas em prompt inventam percentuais arbitrários de ROI e ignoram a queda inicial de produtividade (Curva J) na adoção de frameworks.',
    },
    solution: {
      en: 'Decouples narrative generation from math: `EmployeeBrain` tracks stress, energy, and 12-event memory across ~350 profiles (`RAG/profiles.json`), while a deterministic financial engine computes ROI (-40% to +35%) and supports optional TypeSafe Jev behavioral judgment.',
      pt: 'Desacopla narrativa e matemática: o `EmployeeBrain` rastreia estresse, energia e memória de 12 eventos em ~350 perfis (`RAG/profiles.json`), enquanto o motor financeiro calcula o ROI (-40% a +35%) com suporte opcional a julgamento via TypeSafe Jev.',
    },
    myContribution: {
      en: ['Built the React 19 simulation studio, Node/Express RAG backend, deterministic J-Curve/CoNQ financial kernel, and `EmployeeBrain` v8 state machine.'],
      pt: ['Construí o estúdio em React 19, o backend Node/Express com RAG, o kernel financeiro determinístico (Curva J / CoNQ) e a máquina de estados `EmployeeBrain` v8.'],
    },
    architectureFlow: [
      {
        node: 'EmployeeBrain v8 + ChromaDB RAG',
        role: { en: '~350 Hydrated Personas & Seeded RNG', pt: '~350 Personas Hidratadas e RNG Semeado' },
        detail: { en: 'Computes morale, burnout, passive resistance, and turnover deterministically per turn.', pt: 'Calcula moral, burnout, resistência passiva e turnover de forma determinística por turno.' },
      },
      {
        node: 'Deterministic Financial Engine',
        role: { en: 'J-Curve · CoNQ · Compound Tech Debt', pt: 'Curva J · CoNQ · Dívida Técnica Composta' },
        detail: { en: 'Calculates financial ROI (-40% to +35%) across regional economic profiles.', pt: 'Calcula o ROI financeiro (-40% a +35%) calibrado por perfil econômico regional.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['Strict separation between LLM narrative and deterministic math so simulations remain reproducible and falsifiable.'],
      pt: ['Separação estrita entre narrativa do LLM e matemática determinística para manter a simulação reproduzível.'],
    },
    honestyAndScopeNote: {
      en: 'Runs in both standalone offline mode and full Node/ChromaDB agentic mode.',
      pt: 'Executa tanto em modo standard offline no navegador quanto em modo agêntico completo com backend Node e ChromaDB.',
    },
    verifiedFacts: [
      { label: { en: 'Personas', pt: 'Personas' }, value: { en: '~350 RAG Profiles', pt: '~350 Perfis no RAG' } },
      { label: { en: 'Math Engine', pt: 'Motor Matemático' }, value: { en: 'Deterministic J-Curve & CoNQ', pt: 'Curva J e CoNQ Determinísticos' } },
    ],
    stack: ['React 19', 'TypeScript', 'Node.js / Express', 'ChromaDB RAG', 'Gemini / GPT-4 / Ollama', 'TypeSafe Jev', 'Recharts'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Frame-sim',
    },
  },
  {
    slug: 'creator-kit-hub',
    code: 'A6 · LOCAL OBSIDIAN RAG STUDIO',
    title: 'Creator Kit Hub',
    featured: false,
    priorityOrder: 12,
    categories: ['ai-agents', 'product-web'],
    competencies: ['applied-ai', 'product-frontend'],
    stageBadge: {
      en: 'Local-First Multi-Agent Studio',
      pt: 'Estúdio Multiagente Local-First',
    },
    roleBadge: {
      en: 'Creator & Full-Stack Developer',
      pt: 'Criador e Desenvolvedor Full-Stack',
    },
    eyebrow: {
      en: 'Shared-Brain Scriptwriting Orchestrator Connected to Local Obsidian Vaults',
      pt: 'Orquestrador de Roteiros com Cérebro Compartilhado Conectado ao Obsidian Local',
    },
    tagline: {
      en: 'Connects multi-persona AI scriptwriting agents directly to a local Obsidian Markdown vault via shared-brain RAG for YouTube, course, and podcast production.',
      pt: 'Conecta agentes de roteirização com múltiplas personas diretamente a um vault local do Obsidian via RAG para produção de vídeos, aulas e podcasts.',
    },
    summary: {
      en: 'Reads local Markdown notes without uploading private vaults to third-party SaaS storage, supporting OpenAI, Gemini, Claude, OpenRouter, and local Ollama models.',
      pt: 'Lê notas Markdown locais sem enviar o acervo privado para bancos de terceiros, suportando OpenAI, Gemini, Claude, OpenRouter e modelos locais via Ollama.',
    },
    problem: {
      en: 'Content creators and educators accumulate research in local Obsidian vaults but lose context when copying fragments into stateless web chats.',
      pt: 'Criadores e educadores acumulam pesquisa em vaults locais do Obsidian, mas perdem contexto ao copiar trechos soltos em chats web sem memória.',
    },
    solution: {
      en: 'Indexes the local Obsidian directory into a shared RAG context so specialized writing personas can co-author structured scripts grounded in the user’s own notes.',
      pt: 'Indexa o diretório local do Obsidian em um contexto RAG compartilhado para que personas especializadas roteirizem com base nas notas reais do autor.',
    },
    myContribution: {
      en: ['Built the React + Vite studio and local Express backend with direct Obsidian filesystem integration and multi-provider AI routing.'],
      pt: ['Construí o estúdio React + Vite e o backend Express local com integração direta ao sistema de arquivos do Obsidian e múltiplos provedores de IA.'],
    },
    architectureFlow: [
      {
        node: 'Local Obsidian Vault',
        role: { en: 'Filesystem Markdown Ingestion', pt: 'Leitura Direta de Notas Markdown' },
        detail: { en: 'Reads `.md` notes and links directly from the user’s machine.', pt: 'Lê notas `.md` e conexões diretamente da máquina do usuário.' },
      },
      {
        node: 'Shared-Brain Multi-Persona Studio',
        role: { en: 'RAG Retrieval + Script Synthesis', pt: 'Recuperação RAG + Síntese de Roteiros' },
        detail: { en: 'Orchestrates specialized personas using local Ollama or cloud LLM keys.', pt: 'Orquestra personas especializadas usando Ollama local ou chaves de nuvem.' },
      },
    ],
    decisionsAndTradeoffs: {
      en: ['Local-first storage of vault paths and API keys so personal knowledge bases remain private.'],
      pt: ['Armazenamento estritamente local do caminho do vault e das chaves de API para preservar a privacidade do acervo.'],
    },
    honestyAndScopeNote: {
      en: 'Local desktop/web companion app (`localhost:3000`) designed for personal knowledge vaults.',
      pt: 'Aplicação local (`localhost:3000`) projetada para operação direta sobre acervos pessoais no computador do autor.',
    },
    verifiedFacts: [
      { label: { en: 'Knowledge Source', pt: 'Fonte de Conhecimento' }, value: { en: 'Local Obsidian Vault', pt: 'Vault Local do Obsidian' } },
      { label: { en: 'Providers', pt: 'Provedores' }, value: { en: 'Cloud LLMs + Local Ollama', pt: 'LLMs Cloud + Ollama Local' } },
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Node.js / Express', 'Obsidian RAG', 'Ollama / OpenAI / Gemini'],
    links: {
      repo: 'https://github.com/andrecodexvictor/Creator-kit-Hub',
    },
  },
];

export const ALL_PROJECTS: PortfolioProject[] = [...PRIMARY_PROJECTS, ...ARCHIVE_PROJECTS];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
