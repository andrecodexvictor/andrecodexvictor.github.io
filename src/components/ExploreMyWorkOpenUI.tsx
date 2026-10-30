'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  createLibrary,
  defineComponent,
  Renderer,
  type OpenUIError,
} from '@openuidev/react-lang';
import { z } from 'zod/v4';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';

/**
 * Real OpenUI Component Library (@openuidev/react-lang v1.0)
 * Defined at module scope so the parser and JSON Schema are cached once per session.
 */
const OpenUIProjectCard = defineComponent({
  name: 'ProjectNodeCard',
  description:
    'Displays a verified portfolio project or framework pillar with role, architectural summary, stack tags, and case study route.',
  props: z.object({
    code: z.string(),
    title: z.string(),
    badge: z.string(),
    summary: z.string(),
    stackCsv: z.string(),
    caseStudyHref: z.string(),
    externalUrl: z.string().optional(),
  }),
  component: ({ props }) => {
    const tags = props.stackCsv
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <div className="editorial-card rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
            <span className="font-semibold text-accent-ink">{props.code}</span>
            <span className="editorial-pill">{props.badge}</span>
          </div>
          <h4 className="mt-3 text-lg font-semibold text-ink">{props.title}</h4>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {props.summary}
          </p>
        </div>

        <div className="mt-4 border-t border-line pt-3">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line bg-subtle px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between font-mono text-xs">
            <Link
              href={
                props.caseStudyHref.endsWith('/')
                  ? props.caseStudyHref
                  : `${props.caseStudyHref}/`
              }
              prefetch={false}
              className="inline-flex items-center gap-1 font-medium text-accent-ink hover:underline"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            {props.externalUrl && (
              <a
                href={props.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-ink"
              >
                <span>Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
});

const OpenUIArchitectureStep = defineComponent({
  name: 'ArchitectureStep',
  description:
    'Displays a deterministic step in an architectural pipeline or governance control loop.',
  props: z.object({
    stepNumber: z.string(),
    stageTitle: z.string(),
    mechanism: z.string(),
    guardrail: z.string(),
  }),
  component: ({ props }) => (
    <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="font-bold text-accent">STAGE {props.stepNumber}</span>
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
        </div>
        <h5 className="mt-1.5 text-sm font-semibold text-ink">
          {props.stageTitle}
        </h5>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {props.mechanism}
        </p>
      </div>
      <div className="mt-3 border-t border-line pt-2 font-mono text-[10px] text-accent-ink">
        Guardrail: {props.guardrail}
      </div>
    </div>
  ),
});

const OpenUIExplorerCanvas = defineComponent({
  name: 'ExplorerCanvas',
  description:
    'Root container for the interactive OpenUI portfolio explorer, combining a header summary, architecture steps, and project node cards.',
  props: z.object({
    lensName: z.string(),
    headline: z.string(),
    rationale: z.string(),
    steps: z.array(OpenUIArchitectureStep.ref),
    cards: z.array(OpenUIProjectCard.ref),
    synthesisNote: z.string(),
  }),
  component: ({ props, renderNode }) => (
    <div className="space-y-6">
      <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
            {props.lensName}
          </span>
          <span className="editorial-pill">
            <Cpu className="h-3.5 w-3.5 text-accent" />
            <span>OpenUI Lang AST → React</span>
          </span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">
          {props.headline}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {props.rationale}
        </p>
      </div>

      {/* Rendered Architecture / Governance Steps */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {renderNode(props.steps)}
      </div>

      {/* Rendered Project Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {renderNode(props.cards)}
      </div>

      <div className="rounded-xl border border-line bg-subtle px-4 py-3 font-mono text-xs text-muted">
        <strong className="text-ink">Synthesis: </strong>
        {props.synthesisNote}
      </div>
    </div>
  ),
});

export const portfolioOpenUILibrary = createLibrary({
  id: 'andre-victor-portfolio-2026',
  root: 'ExplorerCanvas',
  components: [OpenUIExplorerCanvas, OpenUIProjectCard, OpenUIArchitectureStep],
  componentGroups: [
    {
      name: 'PortfolioExploration',
      components: ['ExplorerCanvas', 'ProjectNodeCard', 'ArchitectureStep'],
      notes: [
        '- Always start with root = ExplorerCanvas(...)',
        '- Define each ArchitectureStep and ProjectNodeCard as its own line reference.',
      ],
    },
  ],
});

type ExplorationMode = 'competency' | 'architecture' | 'gear';
type SubLens = 'ai' | 'tooling' | 'cloud';

function buildOpenUILangProgram(
  mode: ExplorationMode,
  subLens: SubLens,
  lang: Language
): string {
  if (mode === 'competency') {
    if (subLens === 'tooling') {
      return lang === 'pt'
        ? `root = ExplorerCanvas("LENTE DE COMPETÊNCIA · DEVELOPER TOOLING & MCP", "Servidores MCP, Ratchets de Qualidade e Compiladores de Stack", "Ferramentas determinísticas para impedir que agentes de IA degradem a arquitetura ou vazem segredos.", [s1, s2, s3], [c1, c2, c3], "Todos os servidores MCP separam estritamente ferramentas de leitura/verificação das ações que exigem aprovação humana.")
s1 = ArchitectureStep("01", "Protocolo MCP Dual", "Exposição de ferramentas via Streamable HTTP (7420) e stdio para Claude Code, Cursor e Antigravity.", "Zero mutação de baseline pelo agente")
s2 = ArchitectureStep("02", "Análise Estática & Grafos", "SonarJS cognitive ratchet, ESLint estrutural, Tarjan SCC e busca vetorial TF-IDF offline.", "Execução 100% determinística e local")
s3 = ArchitectureStep("03", "Auditoria e Regras Adaptativas", "Log criptográfico SHA-256 em Rust (Script Kitty) e regras aprendidas por repositório (ZenPR).", "Aprovação humana em gates críticos")
c1 = ProjectNodeCard("P3 · MCP GATE", "Quality Engine", "Invokta Action Engine", "Enforça ratchet de complexidade cognitiva e ausência de ciclos em runtime sobre código de agentes via MCP HTTP.", "TypeScript, Invokta, MCP HTTP, SonarJS, Tarjan SCC", "/work/quality-engine", "https://github.com/andrecodexvictor/Quality-engine")
c2 = ProjectNodeCard("A3 · CODE REVIEW", "ZenPR", "Dual MCP Workbench", "Agente de code review que aprende regras permanentes por repositório a partir de decisões Aplicado/Rejeitado/Ajustado.", "Next.js 15, React 19, TypeScript, MCP Stdio/HTTP", "/work/zenpr", "https://github.com/andrecodexvictor/ZenPR")
c3 = ProjectNodeCard("A4 · STACK COMPILER", "dotstack", "Offline TF-IDF & MCP", "Compilador determinístico de recomendações de stack em 13 categorias com busca semântica TF-IDF offline.", "TypeScript, MCP Server, TF-IDF, Vitest", "/work/dotstack", "https://github.com/andrecodexvictor/dotstack")`
        : `root = ExplorerCanvas("COMPETENCY LENS · DEVELOPER TOOLING & MCP", "MCP Servers, Quality Ratchets & Deterministic Stack Compilers", "Deterministic developer tooling designed to keep AI coding agents aligned with repository architecture and security boundaries.", [s1, s2, s3], [c1, c2, c3], "Every MCP tool surface separates read/verify agent operations from privileged human sign-off.")
s1 = ArchitectureStep("01", "Dual-Transport MCP Surface", "Streamable HTTP (:7420/mcp) and stdio servers for Claude Code, Cursor, and Antigravity.", "Agents cannot mutate baselines or waivers")
s2 = ArchitectureStep("02", "Static & Graph Analysis", "SonarJS cognitive complexity ratchet, Tarjan SCC cycle detection, and offline TF-IDF cosine search.", "100% deterministic local execution")
s3 = ArchitectureStep("03", "Cryptographic Audit & Learning", "Rust SHA-256 Merkle audit logs (Script Kitty) and adaptive repository rules (ZenPR).", "Human approval required for active checks")
c1 = ProjectNodeCard("P3 · MCP GATE", "Quality Engine", "Invokta Action Engine", "Enforces cognitive complexity ratchets and Tarjan runtime cycle checks over MCP Streamable HTTP.", "TypeScript, Invokta, MCP HTTP, SonarJS, Tarjan SCC", "/work/quality-engine", "https://github.com/andrecodexvictor/Quality-engine")
c2 = ProjectNodeCard("A3 · CODE REVIEW", "ZenPR", "Dual MCP Workbench", "Adaptive PR review workbench that synthesizes permanent repo guidance from Applied/Rejected/Adjusted developer decisions.", "Next.js 15, React 19, TypeScript, MCP Stdio/HTTP", "/work/zenpr", "https://github.com/andrecodexvictor/ZenPR")
c3 = ProjectNodeCard("A4 · STACK COMPILER", "dotstack", "Offline TF-IDF & MCP", "Deterministic stack recommendation engine across 13 categories with zero-dependency local TF-IDF code search.", "TypeScript, MCP Server, TF-IDF, Vitest", "/work/dotstack", "https://github.com/andrecodexvictor/dotstack")`;
    }

    if (subLens === 'cloud') {
      return lang === 'pt'
        ? `root = ExplorerCanvas("LENTE DE COMPETÊNCIA · BACKEND, STREAMING & CLOUD", "Infraestrutura OCI, Event Streaming Kafka/Flink e Produtos Web", "Arquiteturas orientadas a eventos, implantações na Oracle Cloud (OCI) e interfaces financeiras de alta precisão.", [s1, s2, s3], [c1, c2, c3], "Combina infraestrutura cloud verificada (OCI sa-saopaulo-1) com processamento determinístico de eventos.")
s1 = ArchitectureStep("01", "Ingestão & Schemas", "Tópicos Kafka com validação Avro Schema Registry e ingestão documental multiformato.", "Contratos tipados na entrada")
s2 = ArchitectureStep("02", "Processamento Determinístico", "Joins temporais em Apache Flink SQL (FOR SYSTEM_TIME AS OF) e StateGraphs em LangGraph.", "Zero dependência de LLM para detectar incidentes")
s3 = ArchitectureStep("03", "Edge & Controle Operacional", "Oracle API Gateway HTTPS na OCI e console WebSocket com rollback aprovado por humano.", "Terminação TLS e confirmação humana")
c1 = ProjectNodeCard("P5 · STREAMING", "LaunchGuard", "Kafka + Flink SQL", "Inteligência preditiva para releases de checkout correlacionando telemetria em janelas de 10s com metadados de versão.", "Kafka, Avro, Apache Flink SQL, FastAPI, WebSockets", "/work/launchguard", "https://github.com/andrecodexvictor/Lauchguard")
c2 = ProjectNodeCard("P4 · FINTECH WEB", "SimPay", "Next.js 16 + Solana SPL", "Experiência web de pagamentos com conversor PIX-para-Solana, simulador de terminal POS físico e portal lojista.", "Next.js 16, React 19, Tailwind v4, Motion, Anime.js", "/work/simpay", "https://simpay.tech/")
c3 = ProjectNodeCard("A1 · MULTIPLAYER SIM", "24 Podiums", "Vercel + Upstash Redis", "Simulador de draft e corridas de Fórmula 1 com salas online para 4 jogadores persistidas no Upstash Redis.", "React, TypeScript, Upstash Redis, Express, Motion", "/work/24podiums", "https://github.com/andrecodexvictor/24Podiums")`
        : `root = ExplorerCanvas("COMPETENCY LENS · BACKEND, STREAMING & CLOUD", "OCI Deployments, Kafka/Flink Event Streaming & Interactive Web Products", "Event-driven backend pipelines, Oracle Cloud Infrastructure deployments, and tactile product interfaces.", [s1, s2, s3], [c1, c2, c3], "Pairs verified Oracle Cloud infrastructure (sa-saopaulo-1) with deterministic stream processing and responsive UI craft.")
s1 = ArchitectureStep("01", "Typed Ingestion & Contracts", "Avro-validated Confluent Kafka streams and 9-format corporate document parsers.", "Schema-first validation at the boundary")
s2 = ArchitectureStep("02", "Deterministic Processing", "Apache Flink SQL temporal joins (FOR SYSTEM_TIME AS OF) and LangGraph StateGraphs.", "No LLM guessing in incident detection")
s3 = ArchitectureStep("03", "Cloud Edge & Human Control", "Oracle API Gateway HTTPS routing on OCI Compute and operator-approved canary rollback.", "Managed TLS and human-in-the-loop safety")
c1 = ProjectNodeCard("P5 · STREAMING", "LaunchGuard", "Kafka + Flink SQL", "Predictive checkout release intelligence correlating high-velocity telemetry against release metadata in 10s windows.", "Kafka, Avro, Apache Flink SQL, FastAPI, WebSockets", "/work/launchguard", "https://github.com/andrecodexvictor/Lauchguard")
c2 = ProjectNodeCard("P4 · FINTECH WEB", "SimPay", "Next.js 16 + Solana SPL", "Interactive payment platform with PIX-to-Solana token converter, POS terminal showcase, and merchant calculator.", "Next.js 16, React 19, Tailwind v4, Motion, Anime.js", "/work/simpay", "https://simpay.tech/")
c3 = ProjectNodeCard("A1 · MULTIPLAYER SIM", "24 Podiums", "Vercel + Upstash Redis", "Formula 1 team draft and race simulator with 4-player online rooms backed by Upstash Redis.", "React, TypeScript, Upstash Redis, Express, Motion", "/work/24podiums", "https://github.com/andrecodexvictor/24Podiums")`;
    }

    // Default competency: Applied AI & Agent Orchestration
    return lang === 'pt'
      ? `root = ExplorerCanvas("LENTE DE COMPETÊNCIA · IA APLICADA & AGENTES", "RAG Fundamentado em Fontes, Action Engines e Roteamento TypeSafe Jev", "Sistemas de IA construídos para produção: citam fontes exatas, abstêm-se quando falta evidência e usam modelos rápidos de decisão para seleção de ferramentas.", [s1, s2, s3], [c1, c2, c3], "Em todos os projetos de IA, modelos probabilísticos operam cercados por validação determinística de estado e evidência.")
s1 = ArchitectureStep("01", "Recuperação Fundamentada", "Indexação vetorial no ChromaDB e recuperação híbrida com rastreio de página e documento.", "Abstensão explícita (grounded=false) sem evidência")
s2 = ArchitectureStep("02", "Orquestração Governada", "Grafos de estado em LangGraph e Action Engines tipadas com @invokta/core.", "Contratos estritos de entrada e saída")
s3 = ArchitectureStep("03", "Julgamento Rápido (Jev)", "Roteamento local de ferramentas e avaliação pedagógica com o modelo System One Jev da TypeSafe.", "Redução de latência e validação sem regressão")
c1 = ProjectNodeCard("P1 · OCI RAG", "Axiom Tech", "Deployed on OCI", "Assistente corporativo de documentos (RH, LGPD, Engenharia) com LangGraph, ChromaDB e abstensão explícita na OCI.", "Python, FastAPI, LangGraph, ChromaDB, React, OCI", "/work/axiom-tech", "https://github.com/andrecodexvictor/Axiom-Tech")
c2 = ProjectNodeCard("P2 · STUDY STUDIO", "NovaMente Atlas", "Oracle + Alura ONE G10", "Estúdio que transforma PDFs e notas em guias citados, flashcards e tutoria com 5 personas e Invokta Action Engines.", "Next.js, NestJS, @invokta/core, FastAPI, TypeSafe Jev", "/work/novamente-atlas", "https://github.com/Oracle-hackatom-g10-team-4/Nova-mente-Solution")
c3 = ProjectNodeCard("P6 · OPEN SOURCE", "Jev Gateway", "Tool-Routing Proxy", "Gateway local para agentes de código (jev-codex, jev-claude) que delega a seleção de ferramentas ao modelo Jev.", "TypeScript, Node.js, TypeSafe Jev, OpenAI/Anthropic", "/work/jev-gateway", "https://github.com/andrecodexvictor/jev-gateway")`
      : `root = ExplorerCanvas("COMPETENCY LENS · APPLIED AI & AGENT SYSTEMS", "Source-Grounded RAG, Invokta Action Engines & TypeSafe Jev Routing", "Applied AI systems engineered for reliability: citing exact sources, abstaining when evidence is missing, and decoupling fast tool routing from heavy generation.", [s1, s2, s3], [c1, c2, c3], "Across every AI project, probabilistic LLMs are wrapped inside deterministic state machines and explicit evidence gates.")
s1 = ArchitectureStep("01", "Evidence-Grounded Retrieval", "ChromaDB persistent vector indexing and hybrid chunk retrieval with exact source attribution.", "Explicit abstention (grounded=false) when unsupported")
s2 = ArchitectureStep("02", "Governed Orchestration", "LangGraph StateGraphs and typed @invokta/core Action Engines for multi-agent workflows.", "Deterministic schema contracts at every hop")
s3 = ArchitectureStep("03", "System One Judgment (Jev)", "Tool selection routing and pedagogical adequacy checks via TypeSafe's Jev model.", "Low-latency tool filtering and zero-regression evals")
c1 = ProjectNodeCard("P1 · OCI RAG", "Axiom Tech", "Deployed on OCI", "Corporate document assistant (HR, LGPD, Engineering) with LangGraph, ChromaDB, and explicit abstention on Oracle Cloud.", "Python, FastAPI, LangGraph, ChromaDB, React, OCI", "/work/axiom-tech", "https://github.com/andrecodexvictor/Axiom-Tech")
c2 = ProjectNodeCard("P2 · STUDY STUDIO", "NovaMente Atlas", "Oracle + Alura ONE G10", "Turns PDFs and notes into cited study guides, flashcards, and 5-persona tutoring with Invokta Action Engines.", "Next.js, NestJS, @invokta/core, FastAPI, TypeSafe Jev", "/work/novamente-atlas", "https://github.com/Oracle-hackatom-g10-team-4/Nova-mente-Solution")
c3 = ProjectNodeCard("P6 · OPEN SOURCE", "Jev Gateway", "Tool-Routing Proxy", "Local LLM gateway for coding agents (jev-codex, jev-claude) routing tool selection through TypeSafe's Jev model.", "TypeScript, Node.js, TypeSafe Jev, OpenAI/Anthropic", "/work/jev-gateway", "https://github.com/andrecodexvictor/jev-gateway")`;
  }

  if (mode === 'architecture') {
    return lang === 'pt'
      ? `root = ExplorerCanvas("LENTE ARQUITETURAL · PADRÕES DE SISTEMAS 2026", "Como Dados, Agentes e Controles Humanos se Conectam", "Comparação direta entre quatro padrões arquiteturais implementados no portfólio: RAG fundamentado, Ratchet MCP, Streaming Flink SQL e Simulação Híbrida.", [s1, s2, s3], [c1, c2, c3], "Padrão unificador: separar o plano de controle determinístico (regras, schemas, matemática, CLI humana) do plano de inferência assistida.")
s1 = ArchitectureStep("01", "Fronteira de Entrada Tipada", "Parsers multiformato, schemas Zod/Avro ou especificações YAML (.stack / scope.md) validam tudo antes da execução.", "Rejeição imediata de entradas fora do contrato")
s2 = ArchitectureStep("02", "Núcleo Determinístico vs. IA", "Flink SQL, Tarjan SCC e modelos financeiros Curva J calculam métricas exatas; LLMs apenas sintetizam ou sugerem.", "O LLM nunca inventa ROI nem aprova rollback")
s3 = ArchitectureStep("03", "Superfície Auditável", "Logs SHA-256 em Rust, banco de ratchet em SQLite e citações rastreáveis por trecho documental.", "Rastreabilidade ponta a ponta")
c1 = ProjectNodeCard("ARQ 01 · OCI + RAG", "Axiom Tech StateGraph", "LangGraph + OCI Gateway", "Fluxo retrieve_context → evaluate → invoke_llm → build_response servido em OCI Compute atrás de API Gateway HTTPS.", "FastAPI, LangGraph, ChromaDB, OCI Block Volume", "/work/axiom-tech", "https://github.com/andrecodexvictor/Axiom-Tech")
c2 = ProjectNodeCard("ARQ 02 · PRIVILEGE SPLIT", "Quality Engine MCP", "Agent HTTP vs Human CLI", "Agentes consultam 127.0.0.1:7420/mcp; apenas humanos executam quality-admin para alterar baselines ou exceções.", "TypeScript, Invokta, MCP HTTP, SQLite Ratchet", "/work/quality-engine", "https://github.com/andrecodexvictor/Quality-engine")
c3 = ProjectNodeCard("ARQ 03 · HYBRID SIM", "Frame-sim Kernel v8", "EmployeeBrain + Math ROI", "350 personas hidratadas via RAG com estado determinístico de estresse/memória e cálculo financeiro Curva J / CoNQ.", "React 19, Express, ChromaDB, Deterministic Math", "/work/frame-sim", "https://github.com/andrecodexvictor/Frame-sim")`
      : `root = ExplorerCanvas("ARCHITECTURE LENS · 2026 SYSTEM PATTERNS", "How Data, Agents, and Deterministic Controls Connect", "Direct architectural comparison across four implemented patterns: Grounded Cloud RAG, Privilege-Separated MCP, Flink SQL Streaming, and Hybrid Simulation.", [s1, s2, s3], [c1, c2, c3], "Unifying architectural rule: separate the deterministic control plane (schemas, math kernels, ratchets, human CLI) from the probabilistic AI plane.")
s1 = ArchitectureStep("01", "Typed Ingress Boundary", "Multi-format parsers, Zod/Avro schemas, and YAML specs (.stack / scope.md) validate inputs before execution.", "Immediate rejection of out-of-contract payloads")
s2 = ArchitectureStep("02", "Deterministic Core vs. LLM", "Flink SQL windows, Tarjan SCC, and J-Curve financial math compute exact metrics; LLMs only synthesize or draft.", "LLMs never invent ROI or self-approve rollbacks")
s3 = ArchitectureStep("03", "Auditable Persistence", "Rust SHA-256 Merkle logs, SQLite complexity ratchets, and chunk-level document citations.", "End-to-end operational traceability")
c1 = ProjectNodeCard("ARCH 01 · OCI + RAG", "Axiom Tech StateGraph", "LangGraph + OCI Gateway", "retrieve_context → evaluate → invoke_llm → build_response served on OCI Compute behind Oracle API Gateway HTTPS.", "FastAPI, LangGraph, ChromaDB, OCI Block Volume", "/work/axiom-tech", "https://github.com/andrecodexvictor/Axiom-Tech")
c2 = ProjectNodeCard("ARCH 02 · PRIVILEGE SPLIT", "Quality Engine MCP", "Agent HTTP vs Human CLI", "Coding agents query 127.0.0.1:7420/mcp read-only tools; only humans invoke quality-admin for baselines and waivers.", "TypeScript, Invokta, MCP HTTP, SQLite Ratchet", "/work/quality-engine", "https://github.com/andrecodexvictor/Quality-engine")
c3 = ProjectNodeCard("ARCH 03 · HYBRID SIM", "Frame-sim Kernel v8", "EmployeeBrain + Math ROI", "350 RAG-hydrated personas with seeded stress/memory state and deterministic J-Curve & CoNQ financial calculation.", "React 19, Express, ChromaDB, Deterministic Math", "/work/frame-sim", "https://github.com/andrecodexvictor/Frame-sim")`;
  }

  // Mode 3: GEAR Framework Explorer
  return lang === 'pt'
    ? `root = ExplorerCanvas("LENTE GEAR · GOVERNANÇA MÍNIMA VIÁVEL (MVG)", "3 Pilares Essenciais + Camada Transversal Opcional de IA (Edição 2026.10)", "Evolução consolidada do GP-PME em livro técnico de 10 capítulos e TCC no IFBA: governança enxuta, fila única com WIP=3, restauração testada e IA sob verificação humana.", [s1, s2, s3], [c1, c2, c3], "Regra de ouro do GEAR: uma PME pode atingir maturidade máxima no diagnóstico IM-TI (10/10, Nível 4) com 0% de IA. A IA é sempre transversal, opcional e subordinada à Autoridade humana (A).")
s1 = ArchitectureStep("01", "Pilar 1 · Governança Essencial", "Ciclo ADM-Lite (Avaliar, Dirigir, Monitorar), RACI-Lite com Autoridade única (A) e reunião quinzenal CD-TI Lite de 30 min.", "Nenhuma decisão crítica sem dono único (A)")
s2 = ArchitectureStep("02", "Pilar 2 · Execução Ágil", "Fila única oficial em quadro de 4 colunas (A Fazer, Em Andamento, Em Teste, Concluído) com WIP=3 por pessoa.", "Urgência (Expedite) exige pausar outro item")
s3 = ArchitectureStep("03", "Pilar 3 · Segurança Crítica", "Inventário de dependências, teste real de restauração 3-2-1 dentro de RTO/RPO e roteiro PRI de 1 página.", "Backup sem teste de restauração = inexistente")
c1 = ProjectNodeCard("GEAR · TRANSVERSAL", "Catalisador de IA Opcional", "5 Etapas com Verificação Humana", "Contexto sanitizado → Rascunho assistido → Verificação humana → Autoridade (A) → Ação e registro auditável.", "Human-in-the-Loop, LGPD Sanitization, RACI-Lite", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")
c2 = ProjectNodeCard("GEAR · 30 DIAS", "Roteiro Progressivo (Semanas 1–4)", "Adoção Sem Paralisia Operacional", "Semana 1: Fila Única + IM-TI; Semana 2: WIP=3 + Inventário; Semana 3: CD-TI Lite + Teste de Restore; Semana 4: PRI + Métricas.", "Kanban WIP=3, CD-TI Lite, 3-2-1 Restore Drill", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")
c3 = ProjectNodeCard("GEAR · DSR TCC", "Protocolo Metodológico IFBA", "Casos Sintéticos Pareados", "Demonstração em Software House B2B (18 pessoas) e Clínica Médica Regional (35 colaboradores), separando design normativo de validação empírica futura.", "Design Science Research, IM-TI 0-10, ISO 38500 / NIST CSF 2.0", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")`
    : `root = ExplorerCanvas("GEAR LENS · MINIMUM VIABLE GOVERNANCE (MVG)", "3 Essential Pillars + Transversal Optional AI Layer (2026.10 Edition)", "Consolidated evolution of GP-PME into a 10-chapter technical book and IFBA undergraduate thesis: lean governance, single queue with WIP=3, tested backup recovery, and human-verified AI.", [s1, s2, s3], [c1, c2, c3], "Core GEAR rule: an SME can achieve 10/10 (Level 4 — Governed) on the binary IM-TI diagnostic with 0% AI adoption. AI is strictly transversal, optional, and subordinate to human Authority (A).")
s1 = ArchitectureStep("01", "Pillar 1 · Essential Governance", "ADM-Lite loop (Evaluate, Direct, Monitor), RACI-Lite single Accountable (A) owner, and 30-min biweekly CD-TI Lite review.", "Zero critical services without a single owner (A)")
s2 = ArchitectureStep("02", "Pillar 2 · Agile Execution", "Single official intake queue across 4 states (To Do, In Progress, In Test, Done) with hard local WIP=3 per executor.", "Expedite emergencies must displace an active item")
s3 = ArchitectureStep("03", "Pillar 3 · Critical Security", "Essential dependency map, scheduled 3-2-1 backup restoration drills within RTO/RPO, and 1-page PRI incident plan.", "Untested backup = non-existent backup")
c1 = ProjectNodeCard("GEAR · TRANSVERSAL", "Optional Governed AI Catalyst", "5-Step Human Verification Chain", "Sanitized context → Assisted draft → Human verification → Accountable sign-off (A) → Auditable action.", "Human-in-the-Loop, LGPD Sanitization, RACI-Lite", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")
c2 = ProjectNodeCard("GEAR · 30 DAYS", "Progressive Adoption (Weeks 1–4)", "Zero-Ceremony Rollout", "Week 1: Single Queue + IM-TI; Week 2: WIP=3 + Inventory; Week 3: First CD-TI Lite + Restore Drill; Week 4: PRI + Metrics.", "Kanban WIP=3, CD-TI Lite, 3-2-1 Restore Drill", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")
c3 = ProjectNodeCard("GEAR · DSR THESIS", "IFBA Methodological Protocol", "Paired Synthetic SME Cases", "Evaluated on a B2B Software House (18 staff) and Regional Medical Clinic (35 staff), distinguishing normative design from prospective field studies.", "Design Science Research, IM-TI 0-10, ISO 38500 / NIST CSF 2.0", "/work/gear", "https://github.com/andrecodexvictor/gp-pme")`;
}

interface ExploreMyWorkOpenUIProps {
  lang: Language;
}

export default function ExploreMyWorkOpenUI({ lang }: ExploreMyWorkOpenUIProps) {
  const t = TRANSLATIONS[lang].openuiSection;
  const [mode, setMode] = useState<ExplorationMode>('competency');
  const [subLens, setSubLens] = useState<SubLens>('ai');
  const [showSource, setShowSource] = useState(false);
  const [useStaticFallback, setUseStaticFallback] = useState(false);
  const [runtimeErrors, setRuntimeErrors] = useState<OpenUIError[]>([]);

  const openuiProgram = useMemo(
    () => buildOpenUILangProgram(mode, subLens, lang),
    [mode, subLens, lang]
  );

  const generatedPromptSnippet = useMemo(() => {
    try {
      return portfolioOpenUILibrary.prompt({
        preamble:
          'You are the portfolio architecture explorer for André Victor (2026). Output valid OpenUI Lang starting with root = ExplorerCanvas(...).',
      });
    } catch {
      return 'root = ExplorerCanvas(lensName, headline, rationale, steps, cards, synthesisNote)';
    }
  }, []);

  return (
    <section
      id="explore-openui"
      className="border-b border-line bg-canvas py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="sector-rule pt-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
                <span>{t.sectionNumber}</span>
                <span>·</span>
                <span>{t.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="editorial-pill">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>{t.runtimeBadge}</span>
              </span>
              <button
                type="button"
                onClick={() => setShowSource((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-ink hover:border-accent transition-colors cursor-pointer"
              >
                <Code2 className="h-3.5 w-3.5 text-accent" />
                <span>
                  {showSource ? t.hidePromptToggle : t.inspectPromptToggle}
                </span>
              </button>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t.subtitle}
          </p>

          {/* Primary Mode Selector (3 Required Modes) */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
            <div
              role="tablist"
              aria-label="OpenUI Exploration Modes"
              className="flex flex-wrap items-center gap-2"
            >
              {(
                [
                  { id: 'competency', label: t.modeCompetency },
                  { id: 'architecture', label: t.modeArchitecture },
                  { id: 'gear', label: t.modeGear },
                ] as { id: ExplorationMode; label: string }[]
              ).map((tab) => {
                const active = mode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setMode(tab.id);
                      setRuntimeErrors([]);
                    }}
                    className={`rounded-full px-4 py-2.5 font-mono text-xs transition-all cursor-pointer ${
                      active
                        ? 'bg-inverted text-inverted-ink font-semibold shadow-2xs'
                        : 'border border-line bg-surface text-muted hover:text-ink hover:border-accent'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Sub-lens selector when in Competency mode */}
            {mode === 'competency' && (
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    {
                      id: 'ai',
                      label:
                        lang === 'pt' ? 'IA Aplicada & RAG' : 'Applied AI & RAG',
                    },
                    {
                      id: 'tooling',
                      label:
                        lang === 'pt' ? 'MCP & Tooling' : 'MCP & Dev Tooling',
                    },
                    {
                      id: 'cloud',
                      label:
                        lang === 'pt'
                          ? 'Cloud, Streaming & Web'
                          : 'Cloud, Streaming & Web',
                    },
                  ] as { id: SubLens; label: string }[]
                ).map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSubLens(sub.id)}
                    className={`rounded-full px-3 py-1 font-mono text-[11px] transition-colors cursor-pointer ${
                      subLens === sub.id
                        ? 'bg-accent text-white font-medium'
                        : 'border border-line bg-subtle text-muted hover:text-ink'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Optional Source & Schema Inspector Drawer */}
        {showSource && (
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-line bg-surface p-5 lg:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center justify-between font-mono text-xs text-accent-ink">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Active OpenUI Lang Program (`response` prop)</span>
                </span>
                <span>@openuidev/react-lang</span>
              </div>
              <pre className="max-h-60 overflow-auto rounded-xl border border-line bg-canvas p-3.5 font-mono text-[11px] leading-relaxed text-ink">
                <code>{openuiProgram}</code>
              </pre>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between font-mono text-xs text-accent-ink">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Generated `portfolioOpenUILibrary.prompt()`</span>
                </span>
                <button
                  type="button"
                  onClick={() => setUseStaticFallback((prev) => !prev)}
                  className="underline text-[11px] text-muted hover:text-ink cursor-pointer"
                >
                  {useStaticFallback
                    ? 'Switch to Live <Renderer />'
                    : 'Test Static Fallback'}
                </button>
              </div>
              <pre className="max-h-60 overflow-auto rounded-xl border border-line bg-canvas p-3.5 font-mono text-[11px] leading-relaxed text-muted">
                <code>{generatedPromptSnippet}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Live OpenUI <Renderer /> Surface with Static Fallback */}
        <div className="mt-8 rounded-[22px] border border-line bg-surface p-6 sm:p-8">
          {!useStaticFallback ? (
            <Renderer
              library={portfolioOpenUILibrary}
              response={openuiProgram}
              isStreaming={false}
              onError={(errs) => {
                const critical = errs.filter((e) => e.severity !== 'warning');
                if (critical.length > 0) {
                  setRuntimeErrors(critical);
                }
              }}
            />
          ) : (
            <div className="space-y-4">
              <p className="font-mono text-xs text-accent-ink">
                {t.fallbackNotice}
              </p>
              <pre className="overflow-auto rounded-xl border border-line bg-canvas p-4 font-mono text-xs text-ink">
                <code>{openuiProgram}</code>
              </pre>
            </div>
          )}

          {runtimeErrors.length > 0 && (
            <div className="mt-4 rounded-xl border border-line bg-subtle p-3 font-mono text-xs text-muted">
              OpenUI Parser Diagnostic: {runtimeErrors[0].message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
