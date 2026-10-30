'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { animate } from 'animejs';
import { useReducedMotion } from 'motion/react';
import {
  GraduationCap,
  MessageSquare,
  Cpu,
  Wrench,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Calendar,
  Building,
  Gauge,
  Flag,
  Activity,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Language } from '@/config/i18n';

interface MyJourneyProps {
  lang: Language;
}

interface Milestone {
  id: string;
  number: string;
  turnName: { en: string; pt: string };
  sectorNumber: 1 | 2 | 3;
  sectorName: { en: string; pt: string };
  period: { en: string; pt: string };
  yearDisplay: { en: string; pt: string };
  title: { en: string; pt: string };
  organization: { en: string; pt: string };
  role: { en: string; pt: string };
  summary: { en: string; pt: string };
  skills: string[];
  link?: {
    href: string;
    label: { en: string; pt: string };
    isExternal?: boolean;
  };
  icon: React.ComponentType<{ className?: string }>;
  telemetry: {
    speed: number;
    gear: string;
    delta: string;
    drs: boolean;
    rpm: string;
    flag: 'GREEN' | 'PURPLE' | 'CHECKERED';
  };
  checkpointPos: { x: number; y: number };
}

const TRACK_SVG_PATH =
  'M 140 310 L 520 310 C 580 310 630 280 620 220 C 610 160 670 120 740 120 C 810 120 840 70 800 45 C 750 20 660 50 580 50 L 320 50 C 240 50 180 80 180 140 C 180 200 240 220 220 250 C 200 280 140 310 140 310 Z';

const MILESTONES: Milestone[] = [
  {
    id: 'ifba-foundation',
    number: '01',
    turnName: {
      en: 'T1 · Senna S & Grid Launch',
      pt: 'T1 · S do Senna & Início de Grid',
    },
    sectorNumber: 1,
    sectorName: { en: 'Sector 1 · Academic Foundations', pt: 'Setor 1 · Base Acadêmica Formal' },
    period: { en: '2022 – Dec 2026', pt: '2022 – Dez 2026' },
    yearDisplay: { en: 'Dec 2026', pt: 'Dez 2026' },
    title: {
      en: 'Academic Foundations & Information Systems (IFBA)',
      pt: 'Graduação em Sistemas de Informação (IFBA)',
    },
    organization: {
      en: 'Instituto Federal da Bahia (IFBA)',
      pt: 'Instituto Federal da Bahia (IFBA)',
    },
    role: {
      en: 'Information Systems Finalist (Graduation Dec 2026) & Student Council',
      pt: 'Concluinte em Sistemas de Informação (Formatura Dezembro de 2026) & Liderança Discente',
    },
    summary: {
      en: 'Information Systems degree at IFBA finishing now in December 2026, software engineering fundamentals, Design Science Research methodology, and institutional student governance.',
      pt: 'Bacharelado em Sistemas de Informação no IFBA com formatura em Dezembro de 2026, fundamentos de engenharia de software, metodologia DSR e representação discente no DA.',
    },
    skills: ['Software Engineering', 'Design Science Research', 'Data Structures', 'Student Leadership'],
    link: {
      href: '#credentials',
      label: { en: 'View Academic Credentials', pt: 'Ver Credenciais Acadêmicas' },
    },
    icon: GraduationCap,
    telemetry: {
      speed: 295,
      gear: 'G6',
      delta: '-0.142s',
      drs: false,
      rpm: '11,400',
      flag: 'GREEN',
    },
    checkpointPos: { x: 500, y: 310 },
  },
  {
    id: 'wiseup-sales',
    number: '02',
    turnName: {
      en: 'T2 · Back Straight & Consultative Discovery',
      pt: 'T2 · Reta Oposta & Descoberta Consultiva',
    },
    sectorNumber: 1,
    sectorName: { en: 'Sector 1 · Stakeholder Negotiation', pt: 'Setor 1 · Negociação e Descoberta' },
    period: { en: '2021 – 2025', pt: '2021 – 2025' },
    yearDisplay: { en: '2021–2025', pt: '2021–2025' },
    title: {
      en: 'Consultative Communication & Negotiation',
      pt: 'Comunicação, Vendas e Negociação Consultiva',
    },
    organization: {
      en: 'WiseUp Online',
      pt: 'WiseUp Online',
    },
    role: {
      en: 'Commercial Executive & Consultative Sales (2021–2025)',
      pt: 'Executivo Comercial & Vendas Consultivas (2021–2025)',
    },
    summary: {
      en: 'Four years of high-accountability remote consultative communication (2021–2025), stakeholder discovery, and peer mentoring—shaping the ability to translate ambiguous business problems into crisp software specs.',
      pt: 'Quatro anos de comunicação consultiva de alta performance em ambiente remoto (2021–2025), diagnóstico de necessidades e mentoria de equipes — base essencial para transformar problemas de negócio em especificações determinísticas de software.',
    },
    skills: ['Stakeholder Discovery', 'Consultative Negotiation', 'Remote Execution', 'Active Listening'],
    icon: MessageSquare,
    telemetry: {
      speed: 332,
      gear: 'G8',
      delta: '-0.218s',
      drs: true,
      rpm: '12,100',
      flag: 'PURPLE',
    },
    checkpointPos: { x: 620, y: 220 },
  },
  {
    id: 'vittalweb-ai',
    number: '03',
    turnName: {
      en: 'T3 · Infield Technical Apex & Agent Orchestration',
      pt: 'T3 · Miolo Técnico & Orquestração de Agentes',
    },
    sectorNumber: 2,
    sectorName: { en: 'Sector 2 · Production AI Engineering', pt: 'Setor 2 · Engenharia de IA em Produção' },
    period: { en: '2026', pt: '2026' },
    yearDisplay: { en: '2026', pt: '2026' },
    title: {
      en: 'Production AI & Full-Stack Engineering',
      pt: 'Estágio em Engenharia Full-Stack & Soluções de IA',
    },
    organization: {
      en: 'VittalWeb',
      pt: 'VittalWeb',
    },
    role: {
      en: 'Full Stack & Applied AI Engineering Intern',
      pt: 'Estagiário de Engenharia Full Stack & IA Aplicada',
    },
    summary: {
      en: 'Production AI agent engineering, LLM tool-calling orchestration, refactored 1,532-line message handler down to 378 modular lines, and deterministic runtime guardrails with LLM-as-judge evaluation.',
      pt: 'Desenvolvimento de agentes de IA em produção, orquestração de tool calling com LLMs, refatoração de handler crítico de 1.532 para 378 linhas modulares com testes de caracterização e guardrails sem regressão.',
    },
    skills: ['LangGraph', 'RabbitMQ', 'OpenAI Tool Calling', 'FastAPI', 'Dokploy', 'Guardrails'],
    icon: Cpu,
    telemetry: {
      speed: 235,
      gear: 'G4',
      delta: '-0.305s',
      drs: false,
      rpm: '10,200',
      flag: 'PURPLE',
    },
    checkpointPos: { x: 740, y: 120 },
  },
  {
    id: 'authorial-products',
    number: '04',
    turnName: {
      en: 'T4 · Hairpin Precision & Authorial Tooling',
      pt: 'T4 · Hairpin de Alta Precisão & Ferramentas Autorais',
    },
    sectorNumber: 2,
    sectorName: { en: 'Sector 2 · Developer Tooling & OCI Cloud', pt: 'Setor 2 · Ferramentas Autorais & Cloud' },
    period: { en: '2026', pt: '2026' },
    yearDisplay: { en: '2026', pt: '2026' },
    title: {
      en: 'Authorial Systems & Developer Tools',
      pt: 'Produtos Autorais: Axiom Tech, Quality Engine & LaunchGuard',
    },
    organization: {
      en: 'Autonomous Engineering',
      pt: 'Engenharia Autoral Autônoma',
    },
    role: {
      en: 'Creator & Systems Architect',
      pt: 'Criador & Arquiteto de Sistemas',
    },
    summary: {
      en: 'Engineered authorial systems: source-grounded OCI RAG with TLS routing (Axiom Tech), cognitive quality ratchets via Model Context Protocol (Quality Engine MCP), and real-time deployment telemetry (LaunchGuard).',
      pt: 'Criação de ferramentas autorais: RAG fundamentado na Oracle Cloud com roteamento TLS (Axiom Tech), ratchets de qualidade cognitiva via MCP (Quality Engine) e observabilidade de deploy em tempo real (LaunchGuard).',
    },
    skills: ['Oracle OCI GenAI', 'ChromaDB', 'MCP Protocol', 'Kafka', 'Flink SQL', 'FastAPI'],
    link: {
      href: '/work/axiom-tech/',
      label: { en: 'Inspect Axiom Tech Case Study', pt: 'Ver Estudo de Caso Axiom Tech' },
    },
    icon: Wrench,
    telemetry: {
      speed: 288,
      gear: 'G6',
      delta: '-0.420s',
      drs: false,
      rpm: '11,350',
      flag: 'GREEN',
    },
    checkpointPos: { x: 680, y: 50 },
  },
  {
    id: 'hackathons-awards',
    number: '05',
    turnName: {
      en: 'T5 · Parabolica Sweep & Open-Source Acceleration',
      pt: 'T5 · Curva Parabólica & Aceleração Open Source',
    },
    sectorNumber: 3,
    sectorName: { en: 'Sector 3 · Hackathons & Upstream Impact', pt: 'Setor 3 · Hackathons e Upstream' },
    period: { en: '2026', pt: '2026' },
    yearDisplay: { en: '2026', pt: '2026' },
    title: {
      en: 'Hackathons & Community Contributions (2026)',
      pt: 'Hackathons & Conquistas 2026: SimPay, Atlas & Upstream',
    },
    organization: {
      en: 'Solana, Oracle & Open Source Ecosystems',
      pt: 'Ecossistemas Solana, Oracle & Open Source',
    },
    role: {
      en: 'Lead Frontend & Open Source Contributor',
      pt: 'Engenheiro Frontend & Contribuidor Open Source',
    },
    summary: {
      en: 'Collaborative hackathon platforms created in 2026: Solana SimPay (payment and POS simulator), Oracle + Alura ONE G10 NovaMente Atlas (study studio with Invokta engines), and upstream PR #5 and PR #16 contributions to Jev Gateway.',
      pt: 'Plataformas em hackathons desenvolvidas em 2026: Solana SimPay (ecossistema de pagamentos e simulador POS), Oracle NovaMente Atlas (estúdio multisserviço com Invokta) e contribuições upstream ao Jev Gateway (PR #5 incorporado e PR #16).',
    },
    skills: ['Next.js 16', 'Solana SPL', 'Jev Gateway PR #5', 'Gemini API', 'NestJS', 'Tailwind v4'],
    link: {
      href: '/work/simpay/',
      label: { en: 'Explore SimPay Case Study', pt: 'Ver Estudo de Caso SimPay' },
    },
    icon: Trophy,
    telemetry: {
      speed: 342,
      gear: 'G8',
      delta: '-0.510s',
      drs: true,
      rpm: '12,250',
      flag: 'PURPLE',
    },
    checkpointPos: { x: 320, y: 50 },
  },
  {
    id: 'gear-research',
    number: '06',
    turnName: {
      en: 'T6 · Main Straight & Finish Line P1',
      pt: 'T6 · Reta Principal & Linha de Chegada P1',
    },
    sectorNumber: 3,
    sectorName: { en: 'Sector 3 · Authorial Book & Thesis', pt: 'Setor 3 · Livro Técnico e TCC' },
    period: { en: '2026', pt: '2026' },
    yearDisplay: { en: '2026', pt: '2026' },
    title: {
      en: 'GEAR Framework: DSR Research, Book & Autonomous Agents',
      pt: 'GEAR Framework: Pesquisa DSR, Livro e Agentes em Produção',
    },
    organization: {
      en: 'IFBA Thesis & Technical Book (2026.10)',
      pt: 'TCC IFBA & Livro Técnico Autoral (Edição 2026.10)',
    },
    role: {
      en: 'Sole Author & Researcher',
      pt: 'Autor Principal & Pesquisador',
    },
    summary: {
      en: '10-chapter technical book and thesis synthesizing Minimum Viable IT Governance (MVG) for SMEs under Design Science Research. Structures 3 core pillars and an optional transversal AI layer under non-delegable human authority.',
      pt: 'Livro de 10 capítulos e Trabalho de Conclusão de Curso (TCC) no IFBA estruturando Governança Mínima Viável de TI (MVG) para PMEs sob Design Science Research. Consolida 3 pilares essenciais e camada transversal opcional de IA sob autoridade humana.',
    },
    skills: ['Governance MVG', 'ADM-Lite', 'RACI-Lite', 'DSR Methodology', 'IM-TI Scale', 'ISO 38500'],
    link: {
      href: '/work/gear/',
      label: { en: 'Open Full GEAR Case Study', pt: 'Abrir Estudo de Caso GEAR' },
    },
    icon: BookOpen,
    telemetry: {
      speed: 348,
      gear: 'G8',
      delta: '-0.680s',
      drs: true,
      rpm: '12,450',
      flag: 'CHECKERED',
    },
    checkpointPos: { x: 140, y: 310 },
  },
];

export default function MyJourney({ lang }: MyJourneyProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMilestone = MILESTONES[activeIdx];
  const shouldReduceMotion = useReducedMotion();

  // Animation references
  const carMarkerRef = useRef<SVGGElement | null>(null);
  const tracerPathRef = useRef<SVGPathElement | null>(null);
  const speedTextRef = useRef<HTMLSpanElement | null>(null);
  const throttleBarRef = useRef<HTMLDivElement | null>(null);
  const currentSpeedVal = useRef<number>(MILESTONES[0].telemetry.speed);
  const currentCarPos = useRef<{ x: number; y: number }>(MILESTONES[0].checkpointPos);
  type AnimationInstance = ReturnType<typeof animate>;
  const carAnimRef = useRef<AnimationInstance | null>(null);
  const speedAnimRef = useRef<AnimationInstance | null>(null);

  // Anime.js continuous racing line pulse
  useEffect(() => {
    if (shouldReduceMotion || !tracerPathRef.current) return;

    const anim = animate(tracerPathRef.current, {
      strokeDashoffset: [1600, 0],
      duration: 3200,
      loop: true,
      ease: 'linear',
    });

    return () => {
      try {
        anim.revert();
      } catch {
        // no-op cleanup
      }
    };
  }, [shouldReduceMotion]);

  // Anime.js car position & speed telemetry transitions
  useEffect(() => {
    const target = activeMilestone.checkpointPos;
    const targetSpeed = activeMilestone.telemetry.speed;

    // Halt any running tweens to prevent concurrency race conditions
    if (carAnimRef.current) {
      try {
        carAnimRef.current.pause();
      } catch {}
    }
    if (speedAnimRef.current) {
      try {
        speedAnimRef.current.pause();
      } catch {}
    }

    if (shouldReduceMotion) {
      if (carMarkerRef.current) {
        carMarkerRef.current.setAttribute(
          'transform',
          `translate(${target.x}, ${target.y})`
        );
      }
      if (speedTextRef.current) {
        speedTextRef.current.textContent = `${targetSpeed} KM/H`;
      }
      if (throttleBarRef.current) {
        throttleBarRef.current.style.width = `${Math.min(
          100,
          Math.max(30, (targetSpeed / 350) * 100)
        )}%`;
      }
      currentSpeedVal.current = targetSpeed;
      currentCarPos.current = { x: target.x, y: target.y };
      return;
    }

    // Smooth car translation from current interpolated position to target
    const startPos = { x: currentCarPos.current.x, y: currentCarPos.current.y };
    carAnimRef.current = animate(startPos, {
      x: target.x,
      y: target.y,
      duration: 650,
      ease: 'outQuart',
      onUpdate: () => {
        currentCarPos.current = { x: startPos.x, y: startPos.y };
        if (carMarkerRef.current) {
          carMarkerRef.current.setAttribute(
            'transform',
            `translate(${startPos.x}, ${startPos.y})`
          );
        }
      },
      onComplete: () => {
        currentCarPos.current = { x: target.x, y: target.y };
      },
    });

    // Smooth number ticker for speed telemetry from current speed to target
    const speedObj = { val: currentSpeedVal.current };
    speedAnimRef.current = animate(speedObj, {
      val: targetSpeed,
      duration: 650,
      ease: 'outQuart',
      onUpdate: () => {
        currentSpeedVal.current = speedObj.val;
        if (speedTextRef.current) {
          speedTextRef.current.textContent = `${Math.round(speedObj.val)} KM/H`;
        }
        if (throttleBarRef.current) {
          const pct = Math.min(100, Math.max(25, (speedObj.val / 350) * 100));
          throttleBarRef.current.style.width = `${pct}%`;
        }
      },
      onComplete: () => {
        currentSpeedVal.current = targetSpeed;
      },
    });

    return () => {
      if (carAnimRef.current) {
        try {
          carAnimRef.current.pause();
        } catch {}
      }
      if (speedAnimRef.current) {
        try {
          speedAnimRef.current.pause();
        } catch {}
      }
    };
  }, [activeIdx, activeMilestone, shouldReduceMotion]);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIdx = (idx + 1) % MILESTONES.length;
      setActiveIdx(nextIdx);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIdx = (idx - 1 + MILESTONES.length) % MILESTONES.length;
      setActiveIdx(prevIdx);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveIdx(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveIdx(MILESTONES.length - 1);
    }
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % MILESTONES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  };

  const ActiveIcon = activeMilestone.icon;

  return (
    <section
      id="journey"
      className="border-b border-line bg-subtle/30 py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="sector-rule pt-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
                <span>03</span>
                <span>·</span>
                <span>
                  {lang === 'pt'
                    ? 'CIRCUITO DE CARREIRA · AUTÓDROMO DE ENGENHARIA'
                    : 'CAREER CIRCUIT · ENGINEERING AUTODROME'}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {lang === 'pt' ? 'Minha Trajetória' : 'My Professional Journey'}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {lang === 'pt'
                ? 'Seis setores reais em autódromo simulado via anime.js: formatura em Sistemas de Informação no IFBA (Dez 2026), 4 anos de vendas consultivas (2021–2025), engenharia de IA na VittalWeb e sistemas autorais.'
                : 'Six verified sectors simulated via anime.js: IFBA Information Systems degree (Dec 2026), 4 years of consultative sales (2021–2025), production AI engineering at VittalWeb, and authorial systems.'}
            </p>
          </div>
        </div>

        {/* F1 Autodrome Telemetry HUD Strip */}
        <div className="mt-10 rounded-2xl border border-line bg-surface p-4 sm:p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/70 pb-3">
            <div className="flex items-center gap-3 font-mono text-xs text-muted">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="font-semibold text-ink">
                {lang === 'pt'
                  ? 'AUTÓDROMO CDX GP · 5.412 KM'
                  : 'CDX GP AUTODROME · 5.412 KM'}
              </span>
              <span className="hidden sm:inline text-line">|</span>
              <span className="hidden sm:inline text-accent">
                {activeMilestone.turnName[lang]}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="rounded bg-accent-soft px-2 py-0.5 font-bold text-accent">
                {activeMilestone.telemetry.gear}
              </span>
              <span
                ref={speedTextRef}
                className="font-bold tracking-tight text-ink min-w-[75px] text-right"
              >
                {activeMilestone.telemetry.speed} KM/H
              </span>
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  activeMilestone.telemetry.flag === 'CHECKERED'
                    ? 'bg-inverted text-inverted-ink'
                    : activeMilestone.telemetry.drs
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                }`}
              >
                {activeMilestone.telemetry.flag === 'CHECKERED'
                  ? 'P1 · CHEQUERED'
                  : activeMilestone.telemetry.drs
                  ? 'DRS ACTIVE'
                  : 'APEX SECTOR'}
              </span>
            </div>
          </div>

          {/* Dynamic Throttle / Load Bar */}
          <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-muted">
            <span className="shrink-0 flex items-center gap-1">
              <Gauge className="h-3 w-3 text-accent" />
              <span>THROTTLE</span>
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas border border-line">
              <div
                ref={throttleBarRef}
                className="h-full bg-gradient-to-r from-accent to-emerald-500 transition-all duration-300"
                style={{
                  width: `${(activeMilestone.telemetry.speed / 350) * 100}%`,
                }}
              />
            </div>
            <span className="shrink-0 text-accent font-semibold">
              RPM {activeMilestone.telemetry.rpm}
            </span>
          </div>
        </div>

        {/* F1 Circuit Map Visualizer (Responsive for All Devices) */}
        <div className="mt-6 rounded-2xl border border-line bg-canvas p-4 sm:p-6 relative overflow-hidden">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
              <Activity className="h-3.5 w-3.5 text-accent" />
              <span>{activeMilestone.sectorName[lang]}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={lang === 'pt' ? 'Setor anterior' : 'Previous turn'}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-ink hover:border-accent transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={lang === 'pt' ? 'Próximo setor' : 'Next turn'}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-ink hover:border-accent transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Circuit SVG Graphic */}
          <div className="relative w-full aspect-[22/9] max-h-[300px]">
            <svg
              viewBox="0 0 900 360"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Sector 1 Gradient */}
                <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--line)" stopOpacity="0.4" />
                </linearGradient>

                {/* Filter for glowing car */}
                <filter id="carGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer Track Bed */}
              <path
                d={TRACK_SVG_PATH}
                fill="none"
                stroke="var(--line)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40 dark:opacity-60"
              />

              {/* Asphalt Road Surface */}
              <path
                d={TRACK_SVG_PATH}
                fill="none"
                stroke="var(--surface)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Center Racing Line */}
              <path
                d={TRACK_SVG_PATH}
                fill="none"
                stroke="var(--line)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Anime.js Animated High-Speed Pulse Tracer */}
              <path
                ref={tracerPathRef}
                d={TRACK_SVG_PATH}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3.5"
                strokeDasharray="120 1480"
                strokeLinecap="round"
                className="transition-opacity duration-300"
              />

              {/* Start / Finish Checkered Grid */}
              <g transform="translate(140, 310)">
                <line
                  x1="-3"
                  y1="-10"
                  x2="-3"
                  y2="10"
                  stroke="var(--ink)"
                  strokeWidth="3"
                />
                <line
                  x1="3"
                  y1="-10"
                  x2="3"
                  y2="10"
                  stroke="var(--accent)"
                  strokeWidth="3"
                />
                <text
                  x="-10"
                  y="24"
                  fill="var(--muted)"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  START/FINISH
                </text>
              </g>

              {/* Checkpoint Nodes (T1 - T6) */}
              {MILESTONES.map((item, idx) => {
                const isSelected = idx === activeIdx;
                const pos = item.checkpointPos;

                return (
                  <g
                    key={item.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => setActiveIdx(idx)}
                  >
                    {/* Pulsing ring for selected turn */}
                    {isSelected && (
                      <circle
                        r="18"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        className="animate-ping opacity-60"
                      />
                    )}

                    {/* Checkpoint marker base */}
                    <circle
                      r={isSelected ? '12' : '9'}
                      fill={isSelected ? 'var(--accent)' : 'var(--surface)'}
                      stroke={isSelected ? 'var(--canvas)' : 'var(--line)'}
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />

                    {/* Turn Label */}
                    <text
                      y="3.5"
                      fill={isSelected ? 'var(--on-accent)' : 'var(--muted)'}
                      fontSize={isSelected ? '9' : '8'}
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {item.number}
                    </text>

                    {/* Tooltip / Turn title label */}
                    <text
                      y={pos.y > 180 ? '-16' : '22'}
                      fill={isSelected ? 'var(--ink)' : 'var(--muted)'}
                      fontSize="9"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="select-none transition-colors"
                    >
                      {item.yearDisplay[lang]} · {item.role[lang].slice(0, 18)}...
                    </text>
                  </g>
                );
              })}

              {/* The Animated F1 Car / Telemetry Marker (Controlled by anime.js) */}
              <g
                ref={carMarkerRef}
                transform={`translate(${MILESTONES[0].checkpointPos.x}, ${MILESTONES[0].checkpointPos.y})`}
                filter="url(#carGlow)"
                className="pointer-events-none"
              >
                <circle r="7" fill="var(--accent)" />
                <circle r="3" fill="#ffffff" />
                <line
                  x1="-14"
                  y1="0"
                  x2="-7"
                  y2="0"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Desktop View: Horizontal Timeline with Interactive Milestones (>=768px) */}
        <div className="mt-8 hidden md:block">
          {/* Milestones Tablist Grid */}
          <div
            role="tablist"
            aria-label={lang === 'pt' ? 'Marcos de carreira' : 'Career milestones'}
            className="grid grid-cols-6 gap-2 border-b border-line pb-6"
          >
            {MILESTONES.map((item, idx) => {
              const isActive = idx === activeIdx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`journey-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`journey-panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                >
                  {/* Circle Node with Icon */}
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                      isActive
                        ? 'border-accent bg-accent text-on-accent shadow-md scale-110'
                        : idx < activeIdx
                        ? 'border-accent bg-surface text-accent hover:border-accent-hover'
                        : 'border-line bg-surface text-muted group-hover:border-accent group-hover:text-ink'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  {/* Milestone Year Label */}
                  <span
                    className={`mt-3 font-mono text-xs font-semibold transition-colors ${
                      isActive ? 'text-accent' : 'text-muted group-hover:text-ink'
                    }`}
                  >
                    {item.yearDisplay[lang]}
                  </span>

                  {/* Short Title */}
                  <span
                    className={`mt-1 font-mono text-[11px] leading-tight line-clamp-2 max-w-[120px] transition-colors ${
                      isActive ? 'text-ink font-semibold' : 'text-muted group-hover:text-muted'
                    }`}
                  >
                    {item.title[lang]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Detail Panel */}
          <div
            role="tabpanel"
            id={`journey-panel-${activeMilestone.id}`}
            aria-labelledby={`journey-tab-${activeMilestone.id}`}
            className="mt-8 editorial-card rounded-2xl p-8 border border-line bg-surface transition-all duration-200"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-line pb-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-accent shadow-xs">
                  <ActiveIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-ink">
                      {lang === 'pt' ? 'MARCO' : 'MILESTONE'} {activeMilestone.number}
                    </span>
                    <span className="font-mono text-xs text-muted">·</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent font-semibold">
                      <Flag className="h-3.5 w-3.5 text-accent" />
                      {activeMilestone.turnName[lang]}
                    </span>
                    <span className="font-mono text-xs text-muted">·</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      {activeMilestone.period[lang]}
                    </span>
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                    {activeMilestone.title[lang]}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span className="inline-flex items-center gap-1 font-medium text-ink">
                      <Building className="h-3.5 w-3.5 text-accent" />
                      {activeMilestone.organization[lang]}
                    </span>
                    <span>·</span>
                    <span>{activeMilestone.role[lang]}</span>
                  </div>
                </div>
              </div>

              {activeMilestone.link && (
                <div className="shrink-0">
                  {activeMilestone.link.href.startsWith('/') ? (
                    <Link
                      href={activeMilestone.link.href}
                      prefetch={false}
                      className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
                    >
                      <span>{activeMilestone.link.label[lang]}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={activeMilestone.link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-5 py-2.5 font-mono text-xs font-medium text-ink hover:border-accent transition-colors"
                    >
                      <span>{activeMilestone.link.label[lang]}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-ink font-serif italic sm:text-lg">
                  &ldquo;{activeMilestone.summary[lang]}&rdquo;
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-6">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
                  {lang === 'pt' ? 'Habilidades & Tecnologias' : 'Skills & Technologies'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMilestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Semantic Vertical Timeline (< 768px) */}
        <div className="mt-10 md:hidden">
          <ol
            aria-label={lang === 'pt' ? 'Linha do tempo de carreira' : 'Career timeline'}
            className="relative border-l-2 border-line ml-3.5 space-y-8 pl-6"
          >
            {MILESTONES.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="relative">
                  {/* Timeline Node Badge */}
                  <span className="absolute -left-[35px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent">
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  <article className="editorial-card rounded-2xl p-5 border border-line bg-surface">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-ink">
                        {lang === 'pt' ? 'MARCO' : 'MILESTONE'} {item.number} · {item.turnName[lang].split('·')[0]}
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted">
                        {item.period[lang]}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-accent-ink font-medium">
                      {item.organization[lang]}
                    </p>
                    <p className="font-mono text-xs text-muted">
                      {item.role[lang]}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-ink">
                      {item.summary[lang]}
                    </p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5 pt-2 border-t border-line">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-line bg-canvas px-2 py-0.5 font-mono text-[10px] text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <div className="mt-4 pt-2">
                        {item.link.href.startsWith('/') ? (
                          <Link
                            href={item.link.href}
                            prefetch={false}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent hover:underline"
                          >
                            <span>{item.link.label[lang]}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <a
                            href={item.link.href}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent hover:underline"
                          >
                            <span>{item.link.label[lang]}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
