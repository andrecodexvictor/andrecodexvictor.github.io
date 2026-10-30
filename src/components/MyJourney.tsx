'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import { Language } from '@/config/i18n';

interface MyJourneyProps {
  lang: Language;
}

interface Milestone {
  id: string;
  number: string;
  period: string;
  yearDisplay: string;
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
}

const MILESTONES: Milestone[] = [
  {
    id: 'ifba-foundation',
    number: '01',
    period: '2018 – 2022',
    yearDisplay: '2018–2022',
    title: {
      en: 'Foundations & Academic Leadership',
      pt: 'Formação Técnica em Informática & DSR',
    },
    organization: {
      en: 'Instituto Federal da Bahia (IFBA)',
      pt: 'Instituto Federal da Bahia (IFBA)',
    },
    role: {
      en: 'Information Systems Finalist & Student Representative',
      pt: 'Concluinte em Sistemas de Informação & Liderança Discente',
    },
    summary: {
      en: 'Information Systems degree at IFBA, software engineering fundamentals, and institutional student governance.',
      pt: 'Graduação em Sistemas de Informação no IFBA, fundamentos de engenharia e representação discente.',
    },
    skills: ['Software Engineering', 'Design Science Research', 'Data Structures', 'Student Leadership'],
    link: {
      href: '#credentials',
      label: { en: 'View Academic Credentials', pt: 'Ver Credenciais Acadêmicas' },
    },
    icon: GraduationCap,
  },
  {
    id: 'wiseup-sales',
    number: '02',
    period: '2022 – 2023',
    yearDisplay: '2022–2023',
    title: {
      en: 'Consultative Communication & Negotiation',
      pt: 'Comunicação, Vendas e Negociação Consultiva',
    },
    organization: {
      en: 'WiseUp Online',
      pt: 'WiseUp Online',
    },
    role: {
      en: 'Commercial Executive & Consultative Sales',
      pt: 'Executivo Comercial & Vendas Consultivas',
    },
    summary: {
      en: 'Four years of remote consultative communication, translating stakeholder business needs into concrete technical requirements.',
      pt: 'Quatro anos de comunicação consultiva remota, descobrindo necessidades e traduzindo problemas em requisitos técnicos.',
    },
    skills: ['Stakeholder Discovery', 'Consultative Negotiation', 'Remote Execution', 'Active Listening'],
    icon: MessageSquare,
  },
  {
    id: 'vittalweb-ai',
    number: '03',
    period: '2023 – 2024',
    yearDisplay: '2023–2024',
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
      en: 'Production AI agent engineering, LLM tool-calling orchestration, and deterministic runtime guardrails at VittalWeb.',
      pt: 'Desenvolvimento de agentes de IA em produção, orquestração de tool calling e guardrails na VittalWeb.',
    },
    skills: ['LangGraph', 'RabbitMQ', 'OpenAI Tool Calling', 'FastAPI', 'Dokploy', 'Guardrails'],
    icon: Cpu,
  },
  {
    id: 'authorial-products',
    number: '04',
    period: '2024',
    yearDisplay: '2024',
    title: {
      en: 'Authorial Systems & Developer Tools',
      pt: 'Produtos Autorais: Axiom Tech, Quality Engine & LaunchGuard',
    },
    organization: {
      en: 'Autonomous Engineering',
      pt: 'Engenharia Autoral',
    },
    role: {
      en: 'Creator & Systems Architect',
      pt: 'Criador & Arquiteto de Sistemas',
    },
    summary: {
      en: 'Engineered authorial systems: grounded OCI RAG (Axiom), MCP quality ratchets, and streaming deployment telemetry.',
      pt: 'Criação de ferramentas autorais: RAG na OCI (Axiom), Quality Engine via MCP e LaunchGuard.',
    },
    skills: ['Oracle OCI GenAI', 'ChromaDB', 'MCP Protocol', 'Kafka', 'Flink SQL'],
    link: {
      href: '/work/axiom-tech/',
      label: { en: 'Inspect Axiom Tech Case Study', pt: 'Ver Estudo de Caso Axiom Tech' },
    },
    icon: Wrench,
  },
  {
    id: 'hackathons-awards',
    number: '05',
    period: '2024',
    yearDisplay: '2024',
    title: {
      en: 'Hackathons & Community Contributions',
      pt: 'Hackathons & Conquistas: SimPay, Atlas & Upstream',
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
      en: 'Collaborative hackathon platforms (Solana SimPay, Oracle NovaMente) and upstream contributions to Jev Gateway with Gemini.',
      pt: 'Soluções em hackathons (Solana e Oracle/Alura) e contribuições upstream ao Jev Gateway com Gemini.',
    },
    skills: ['Next.js 16', 'Solana SPL', 'Jev Gateway PR #5', 'Gemini API', 'NestJS'],
    link: {
      href: '/work/simpay/',
      label: { en: 'Explore SimPay Case Study', pt: 'Ver Estudo de Caso SimPay' },
    },
    icon: Trophy,
  },
  {
    id: 'gear-research',
    number: '06',
    period: '2025 – 2026',
    yearDisplay: '2025–2026',
    title: {
      en: 'GEAR Framework: DSR Research, Book & Autonomous Agents',
      pt: 'GEAR Framework: Pesquisa DSR, Livro e Agentes em Produção',
    },
    organization: {
      en: 'IFBA Thesis & Technical Book',
      pt: 'TCC IFBA & Livro Técnico Autoral',
    },
    role: {
      en: 'Sole Author & Researcher',
      pt: 'Autor Principal & Pesquisador',
    },
    summary: {
      en: '10-chapter technical book and thesis synthesizing minimum viable IT governance under Design Science Research.',
      pt: 'Livro de 10 capítulos estruturando Governança Mínima Viável de TI sob Design Science Research.',
    },
    skills: ['Governance MVG', 'ADM-Lite', 'RACI-Lite', 'DSR Methodology', 'IM-TI Scale'],
    link: {
      href: '/work/gear/',
      label: { en: 'Open Full GEAR Case Study', pt: 'Abrir Estudo de Caso GEAR' },
    },
    icon: BookOpen,
  },
];

export default function MyJourney({ lang }: MyJourneyProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMilestone = MILESTONES[activeIdx];

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

  const ActiveIcon = activeMilestone.icon;

  return (
    <section
      id="journey"
      className="border-b border-line bg-subtle/40 py-20 sm:py-28 overflow-hidden"
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
                    ? 'TRAJETÓRIA PROFISSIONAL & MARCOS'
                    : 'CAREER TIMELINE & MILESTONES'}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {lang === 'pt' ? 'Minha Trajetória' : 'My Professional Journey'}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {lang === 'pt'
                ? 'Seis marcos reais conectando base acadêmica formal no IFBA, comunicação consultiva, engenharia de IA em produção e desenvolvimento de sistemas autorais.'
                : 'Six verified milestones connecting formal academic foundations at IFBA, consultative client communication, production AI engineering, and authorial systems.'}
            </p>
          </div>
        </div>

        {/* Desktop View: Horizontal Timeline with Interactive Milestones (>=768px) */}
        <div className="mt-14 hidden md:block">
          {/* Horizontal Track & Milestone Nodes */}
          <div className="relative pb-6">
            {/* Background Track Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-line -z-0" />

            {/* Active Progress Line */}
            <div
              className="absolute top-6 left-0 h-0.5 bg-accent transition-all duration-300 ease-out -z-0"
              style={{
                width: `${(activeIdx / (MILESTONES.length - 1)) * 100}%`,
              }}
            />

            {/* Milestones Button Grid */}
            <div
              role="tablist"
              aria-label={lang === 'pt' ? 'Marcos de carreira' : 'Career milestones'}
              className="relative z-10 grid grid-cols-6 gap-2"
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
                      {item.yearDisplay}
                    </span>

                    {/* Short Title */}
                    <span
                      className={`mt-1 font-mono text-[11px] leading-tight line-clamp-2 max-w-[120px] transition-colors ${
                        isActive ? 'text-ink font-semibold' : 'text-muted-low group-hover:text-muted'
                      }`}
                    >
                      {item.title[lang]}
                    </span>
                  </button>
                );
              })}
            </div>
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-accent">
                  <ActiveIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-ink">
                      {lang === 'pt' ? 'MARCO' : 'MILESTONE'} {activeMilestone.number}
                    </span>
                    <span className="font-mono text-xs text-muted">·</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      {activeMilestone.period}
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
                    <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-ink">
                        {lang === 'pt' ? 'MARCO' : 'MILESTONE'} {item.number}
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted">
                        {item.period}
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
