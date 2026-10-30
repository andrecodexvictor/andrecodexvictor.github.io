'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  Layers,
  Scale,
  Sparkles,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { GEAR_DATA } from '@/content/gear';

interface CaseStudiesProps {
  lang: Language;
}

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const t = TRANSLATIONS[lang].gearSection;
  const [activePillarId, setActivePillarId] = useState<'governance' | 'execution' | 'security'>(
    'governance'
  );

  const selectedPillar =
    GEAR_DATA.pillars.find((p) => p.id === activePillarId) ?? GEAR_DATA.pillars[0];

  return (
    <section id="gear" className="border-b border-line bg-subtle/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="sector-rule pt-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
                <span>{t.sectionNumber}</span>
                <span>·</span>
                <span>{t.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {GEAR_DATA.fullTitle[lang]}
              </h2>
              <p className="mt-2 font-mono text-xs text-muted">
                {GEAR_DATA.edition[lang]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/work/gear/"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{t.readCaseStudyCta}</span>
              </Link>
              <a
                href={GEAR_DATA.links.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-mono text-xs font-medium text-ink hover:border-accent transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>{t.viewRepoCta}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
              </a>
            </div>
          </div>

          {/* Executive Summary & Evolution Banner */}
          <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-3">
              <span className="editorial-pill">
                <Scale className="h-3.5 w-3.5 text-accent" />
                <span>{GEAR_DATA.thesisNote[lang]}</span>
              </span>
              <p className="text-base leading-relaxed text-ink">
                {GEAR_DATA.executiveSummary[lang]}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {GEAR_DATA.problemStatement[lang]}
              </p>
            </div>

            {/* Clean Architectural SVG Diagram: 3 Core Pillars + Transversal Optional AI */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-line bg-canvas p-4 sm:p-5">
              <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>GEAR MVG ARCHITECTURE</span>
                <span className="text-accent-ink">3 PILLARS + OPTIONAL AI</span>
              </div>

              <svg
                viewBox="0 0 420 220"
                className="w-full h-auto"
                role="img"
                aria-label="GEAR architecture diagram showing 3 foundational pillars and the transversal optional AI layer with human verification"
              >
                {/* Three Pillars */}
                <g>
                  <rect
                    x="10"
                    y="16"
                    width="124"
                    height="112"
                    rx="10"
                    fill="var(--surface)"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="22"
                    y="38"
                    fill="var(--accent)"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    PILLAR 01
                  </text>
                  <text
                    x="22"
                    y="58"
                    fill="var(--ink)"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {lang === 'pt' ? 'Governança' : 'Governance'}
                  </text>
                  <text x="22" y="78" fill="var(--muted)" fontSize="10">
                    ADM-Lite
                  </text>
                  <text x="22" y="94" fill="var(--muted)" fontSize="10">
                    RACI-Lite (1 A)
                  </text>
                  <text x="22" y="110" fill="var(--muted)" fontSize="10">
                    CD-TI 30m / 15d
                  </text>
                </g>

                <g>
                  <rect
                    x="148"
                    y="16"
                    width="124"
                    height="112"
                    rx="10"
                    fill="var(--surface)"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="160"
                    y="38"
                    fill="var(--accent)"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    PILLAR 02
                  </text>
                  <text
                    x="160"
                    y="58"
                    fill="var(--ink)"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {lang === 'pt' ? 'Execução Ágil' : 'Agile Execution'}
                  </text>
                  <text x="160" y="78" fill="var(--muted)" fontSize="10">
                    {lang === 'pt' ? 'Fila Única' : 'Single Queue'}
                  </text>
                  <text x="160" y="94" fill="var(--muted)" fontSize="10">
                    Kanban 4 States
                  </text>
                  <text x="160" y="110" fill="var(--muted)" fontSize="10">
                    Hard WIP = 3
                  </text>
                </g>

                <g>
                  <rect
                    x="286"
                    y="16"
                    width="124"
                    height="112"
                    rx="10"
                    fill="var(--surface)"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="298"
                    y="38"
                    fill="var(--accent)"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    PILLAR 03
                  </text>
                  <text
                    x="298"
                    y="58"
                    fill="var(--ink)"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {lang === 'pt' ? 'Segurança' : 'Security'}
                  </text>
                  <text x="298" y="78" fill="var(--muted)" fontSize="10">
                    3-2-1 Restore Test
                  </text>
                  <text x="298" y="94" fill="var(--muted)" fontSize="10">
                    RTO / RPO &amp; MFA
                  </text>
                  <text x="298" y="110" fill="var(--muted)" fontSize="10">
                    PRI 1-Page Plan
                  </text>
                </g>

                {/* Connectors */}
                <line
                  x1="72"
                  y1="128"
                  x2="72"
                  y2="148"
                  stroke="var(--accent)"
                  strokeDasharray="3 3"
                />
                <line
                  x1="210"
                  y1="128"
                  x2="210"
                  y2="148"
                  stroke="var(--accent)"
                  strokeDasharray="3 3"
                />
                <line
                  x1="348"
                  y1="128"
                  x2="348"
                  y2="148"
                  stroke="var(--accent)"
                  strokeDasharray="3 3"
                />

                {/* Transversal Optional AI Bar */}
                <rect
                  x="10"
                  y="148"
                  width="400"
                  height="58"
                  rx="10"
                  fill="var(--subtle)"
                  stroke="var(--line)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text
                  x="24"
                  y="170"
                  fill="var(--accent-ink)"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {lang === 'pt'
                    ? 'CAMADA TRANSVERSAL OPCIONAL · IA CATALISADORA (NÃO É 4º PILAR)'
                    : 'TRANSVERSAL OPTIONAL LAYER · AI CATALYST (NOT A 4TH PILLAR)'}
                </text>
                <text
                  x="24"
                  y="190"
                  fill="var(--ink)"
                  fontSize="10.5"
                  fontFamily="monospace"
                >
                  {lang === 'pt'
                    ? 'Contexto → Rascunho → Verificação Humana → Autoridade (A) → Ação'
                    : 'Context → Assisted Draft → Human Verify → Authority (A) → Action'}
                </text>
              </svg>

              <p className="mt-2 font-mono text-[11px] text-muted">
                {GEAR_DATA.evolutionNote[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive 3 Core Pillars Selector & Detail */}
        <div className="mt-12">
          <h3 className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink">
            <Layers className="h-4 w-4 text-accent" />
            <span>{t.pillarsHeading}</span>
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {GEAR_DATA.pillars.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePillarId(pillar.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={`editorial-card rounded-2xl p-6 text-left cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-accent border-accent' : ''
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-accent-ink">
                      PILLAR {pillar.number}
                    </span>
                    <span className="text-muted">{pillar.standardsRef}</span>
                  </div>

                  <h4 className="mt-3 text-xl font-semibold text-ink">
                    {pillar.title[lang]}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-accent-ink">
                    {pillar.subtitle[lang]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.summary[lang]}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-line pt-4 text-xs leading-relaxed text-ink">
                    {pillar.mechanisms[lang].map((mech) => (
                      <li key={mech} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{mech}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-2 flex items-center justify-between font-mono text-[11px] text-muted">
                    <span>{lang === 'pt' ? 'Artefato:' : 'Artifact:'}</span>
                    <span className="font-medium text-ink">
                      {pillar.artifactName[lang]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transversal & Optional AI Layer Section */}
        <div className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>{GEAR_DATA.transversalAi.badge[lang]}</span>
            </div>
            <span className="editorial-pill">
              {selectedPillar.title[lang]} + AI Guardrail
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-2xl font-semibold text-ink">
                {GEAR_DATA.transversalAi.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {GEAR_DATA.transversalAi.description[lang]}
              </p>
              <div className="rounded-xl border border-line bg-subtle p-4 text-xs leading-relaxed text-ink">
                {GEAR_DATA.transversalAi.imTiRule[lang]}
              </div>
            </div>

            {/* 5-Step Human-in-the-Loop Verification Chain */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                {GEAR_DATA.transversalAi.steps.map((s) => (
                  <div
                    key={s.step}
                    className="rounded-xl border border-line bg-canvas p-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[11px] font-bold text-accent">
                        STEP {s.step}
                      </span>
                      <h4 className="mt-1 text-xs font-semibold text-ink">
                        {s.label[lang]}
                      </h4>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-muted">
                      {s.detail[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Practical AI Use Cases Across the 3 Pillars */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {GEAR_DATA.transversalAi.useCasesByPillar[lang].map((item) => (
                  <div
                    key={item.pillar}
                    className="rounded-xl border border-line bg-canvas p-3.5"
                  >
                    <p className="font-mono text-[11px] font-semibold text-accent-ink">
                      {item.pillar}
                    </p>
                    <p className="mt-1 text-xs text-ink">{item.useCase}</p>
                    <p className="mt-1.5 font-mono text-[10px] text-muted">
                      Guardrail: {item.guardrail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Progressive Adoption & IM-TI 0-10 Diagnostic */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* 30-Day Roadmap (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
              {t.roadmapHeading}
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {GEAR_DATA.adoption30Days.map((w) => (
                <div
                  key={w.week}
                  className="rounded-xl border border-line bg-canvas p-4"
                >
                  <span className="font-mono text-xs font-semibold text-accent-ink">
                    {w.week}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-ink">
                    {w.title[lang]}
                  </h4>
                  <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-muted">
                    {w.deliverables[lang].map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* IM-TI 0-10 Maturity & DSR Methodological Transparency (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
                {t.diagnosticHeading}
              </h3>
              <p className="mt-1 text-xs text-muted">
                {GEAR_DATA.imTiDiagnostic.subtitle[lang]}
              </p>
              <div className="mt-4 space-y-2.5">
                {GEAR_DATA.imTiDiagnostic.levels.map((lvl) => (
                  <div
                    key={lvl.range}
                    className="rounded-xl border border-line bg-canvas p-3"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-semibold text-ink">
                        {lvl.label[lang]}
                      </span>
                      <span className="rounded bg-subtle px-2 py-0.5 text-accent-ink">
                        {lvl.range} pts
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      {lvl.summary[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Honesty / DSR Callout */}
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-ink">
                <FileCheck2 className="h-4 w-4 text-accent" />
                <span>{GEAR_DATA.academicHonesty.badge[lang]}</span>
              </div>
              <h4 className="mt-2 text-sm font-semibold text-ink">
                {GEAR_DATA.academicHonesty.title[lang]}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {GEAR_DATA.academicHonesty.body[lang]}
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                {GEAR_DATA.academicHonesty.syntheticCases[lang].map((sc) => (
                  <div
                    key={sc.name}
                    className="rounded-lg border border-line bg-canvas p-2.5 text-[11px]"
                  >
                    <span className="font-semibold text-ink">{sc.name}: </span>
                    <span className="text-muted">{sc.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
