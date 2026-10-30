'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { Language } from '@/config/i18n';

interface GearSynthesisProps {
  lang: Language;
}

export default function GearSynthesis({ lang }: GearSynthesisProps) {
  const synthesisText = {
    pt: 'O Framework GEAR unifica DSR, automação de esteiras de IA e observabilidade sob o diagnóstico binário IM-TI (0 a 10). Desenvolvido como TCC no IFBA e livro de 10 capítulos, estrutura arquiteturas de agentes do protótipo à produção.',
    en: 'The GEAR Framework unifies DSR, automated AI pipelines, and production observability under the IM-TI binary diagnostic (0 to 10). Developed at IFBA across 10 chapters, it scales agentic workflows from prototype to production.',
  };

  const pillars = [
    {
      id: 'im-ti',
      number: '01',
      title: {
        en: 'IM-TI Binary Diagnostic',
        pt: 'Diagnóstico Binário IM-TI',
      },
      subtitle: {
        en: '0 to 10 objective scale',
        pt: 'Escala objetiva de 0 a 10',
      },
      description: {
        en: 'Evaluates real operational maturity without vanity metrics or bureaucratic overhead.',
        pt: 'Mede maturidade operacional real sem métricas infladas ou sobrecarga burocrática.',
      },
      mechanisms: ['ADM-Lite', 'RACI-Lite (1 A)', 'CD-TI (30m/15d)'],
      icon: ShieldCheck,
    },
    {
      id: 'ai-pipeline',
      number: '02',
      title: {
        en: 'Transversal AI Pipeline',
        pt: 'Esteira Transversal de IA',
      },
      subtitle: {
        en: 'Governed agentic automation',
        pt: 'Automação agêntica governada',
      },
      description: {
        en: 'Production AI agents with deterministic tool-calling guardrails and mandatory human authority.',
        pt: 'Agentes em produção com guardrails determinísticos de tool calling e autoridade humana.',
      },
      mechanisms: ['Deterministic Prompts', 'Feature-flagged RAG', 'LLM-as-Judge Gates'],
      icon: Cpu,
    },
    {
      id: 'roadmap-30d',
      number: '03',
      title: {
        en: '30-Day Transition Roadmap',
        pt: 'Roteiro de Adoção em 30 Dias',
      },
      subtitle: {
        en: 'Progressive weekly cadence',
        pt: 'Cadência progressiva semanal',
      },
      description: {
        en: 'Step-by-step transition protocol taking lean software teams from diagnosis to production resilience.',
        pt: 'Protocolo de transição passo a passo levando equipes lean do diagnóstico à resiliência em produção.',
      },
      mechanisms: ['W1: Baseline & Fila Única', 'W2: WIP=3 & Kanban', 'W3-W4: Restore 3-2-1 & PRI'],
      icon: Layers,
    },
  ];

  return (
    <section id="gear" className="border-b border-line bg-subtle/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="sector-rule pt-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
                <span>P0</span>
                <span>·</span>
                <span>
                  {lang === 'pt'
                    ? 'FRAMEWORK AUTORAL / TCC (IFBA)'
                    : 'AUTHORIAL FRAMEWORK / THESIS (IFBA)'}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                GEAR Framework
              </h2>
              <p className="mt-2 font-mono text-xs text-muted">
                {lang === 'pt'
                  ? 'Gestão, Execução, Agilidade e Risco · Edição 2026.10'
                  : 'Governance, Execution, Agility & Risk · 2026.10 Edition'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/work/gear/"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>
                  {lang === 'pt' ? 'Conhecer o Framework GEAR' : 'Explore the GEAR Framework'}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://github.com/andrecodexvictor/gp-pme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-mono text-xs text-muted hover:text-ink hover:border-accent transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>GitHub · gp-pme</span>
              </a>
            </div>
          </div>
        </div>

        {/* Synthesis Highlight Card (<= 60 words verbatim) */}
        <div className="mt-10 editorial-card rounded-2xl p-6 sm:p-8 border border-line bg-surface">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-accent-ink mb-2">
                {lang === 'pt' ? 'Síntese Executiva' : 'Executive Synthesis'}
              </span>
              <p className="text-base leading-relaxed text-ink font-serif italic sm:text-lg">
                &ldquo;{synthesisText[lang]}&rdquo;
              </p>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-6 space-y-2">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
                {lang === 'pt' ? 'Escopo & Rigor DSR' : 'Scope & DSR Rigor'}
              </span>
              <p className="font-mono text-xs text-ink">
                {lang === 'pt'
                  ? '10 Capítulos · Validação DSR · Equipes de 1 a 15 Devs'
                  : '10 Chapters · DSR Validation · 1 to 15 Dev Teams'}
              </p>
              <p className="font-mono text-[11px] text-muted">
                {lang === 'pt'
                  ? 'IA opcional sob autoridade e revisão humana (não é 4º pilar).'
                  : 'Optional AI under human review and authority (not a 4th pillar).'}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Visual Pillars Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                className="editorial-card rounded-2xl p-6 border border-line bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-accent-ink">
                      {lang === 'pt' ? 'PILAR' : 'PILLAR'} {pillar.number}
                    </span>
                    <Icon className="h-4 w-4 text-accent" />
                  </div>

                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                    {pillar.title[lang]}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {pillar.subtitle[lang]}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-ink">
                    {pillar.description[lang]}
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-4 space-y-1.5">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                    {lang === 'pt' ? 'Mecanismos Chave' : 'Key Mechanisms'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.mechanisms.map((mech) => (
                      <span
                        key={mech}
                        className="inline-flex items-center gap-1 rounded bg-canvas px-2 py-0.5 font-mono text-[11px] text-ink border border-line"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-accent" />
                        <span>{mech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
