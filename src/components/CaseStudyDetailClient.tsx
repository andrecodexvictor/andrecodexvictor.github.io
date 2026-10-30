'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileCheck2,
  GitBranch,
  GitPullRequest,
  Layers,
  Moon,
  ShieldAlert,
  Sparkles,
  Sun,
  Wrench,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { ALL_PROJECTS, PortfolioProject } from '@/content/projects';
import { GEAR_DATA } from '@/content/gear';
import {
  ThemeMode,
  useStoredLang,
  useStoredTheme,
} from '@/utils/security';
import LanguageSelector from './LanguageSelector';
import Footer from './Footer';

interface CaseStudyDetailClientProps {
  project: PortfolioProject;
}

export default function CaseStudyDetailClient({
  project,
}: CaseStudyDetailClientProps) {
  const [lang, setLang] = useStoredLang();
  const [theme, setTheme] = useStoredTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [theme, lang]);

  const handleSetLang = (next: Language) => {
    setLang(next);
  };

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const t = TRANSLATIONS[lang].work;
  const navT = TRANSLATIONS[lang].nav;
  const gearT = TRANSLATIONS[lang].gearSection;
  const related = ALL_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      {/* Top Case Study Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link
            href="/#work"
            prefetch={false}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-ink hover:text-accent-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-accent" />
            <span>
              {lang === 'pt' ? 'Voltar ao Portfólio' : 'Back to Portfolio'}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSelector currentLang={lang} onSelect={handleSetLang} />
            <button
              type="button"
              onClick={handleToggleTheme}
              title={theme === 'light' ? navT.themeDark : navT.themeLight}
              aria-label={theme === 'light' ? navT.themeDark : navT.themeLight}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
        {/* Layer 1: Above-the-Fold Synthesis & Evidence Header */}
        <div className="editorial-card rounded-[24px] p-6 sm:p-10 border border-line bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4 font-mono text-xs">
            <span className="font-semibold text-accent-ink uppercase tracking-wider">
              {project.code}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="editorial-pill">
                {project.stageBadge[lang]}
              </span>
              <span className="rounded-full border border-line bg-canvas px-2.5 py-1 text-muted">
                {project.roleBadge[lang]}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <span className="font-mono text-xs text-muted">
              {project.eyebrow[lang]}
            </span>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-base font-medium leading-relaxed text-ink sm:text-lg">
              {project.tagline[lang]}
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {project.summary[lang]}
          </p>

          {/* Collaboration & Verification Metadata Bar */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <span>
              <strong className="text-ink">
                {lang === 'pt' ? 'Autoria / Modelo:' : 'Authorship / Collaboration:'}
              </strong>{' '}
              {project.collaboration[lang]}
            </span>
            <span>
              <strong className="text-ink">
                {lang === 'pt' ? 'Verificado em:' : 'Last Verified:'}
              </strong>{' '}
              {project.lastVerifiedAt}
            </span>
          </div>

          {/* Primary Action Links & PR Attribution */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>{t.viewRepo}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.links.upstreamRepo && (
              <a
                href={project.links.upstreamRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 font-mono text-xs text-ink hover:border-accent"
              >
                <ExternalLink className="h-3.5 w-3.5 text-accent" />
                <span>{t.viewUpstream}</span>
              </a>
            )}

            {project.links.prGemini && (
              <a
                href={project.links.prGemini}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 font-mono text-xs text-ink hover:border-accent"
              >
                <GitPullRequest className="h-3.5 w-3.5 text-accent" />
                <span>
                  {lang === 'pt'
                    ? 'PR #5: Gemini API (Merged)'
                    : 'PR #5: Gemini API (Merged)'}
                </span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            {project.links.prAntigravity && (
              <a
                href={project.links.prAntigravity}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 font-mono text-xs text-muted hover:text-ink hover:border-accent"
              >
                <GitPullRequest className="h-3.5 w-3.5 text-muted" />
                <span>
                  {lang === 'pt'
                    ? 'PR #16: Antigravity CLI (Aberta)'
                    : 'PR #16: Antigravity CLI (Open PR)'}
                </span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 font-mono text-xs font-medium text-accent-ink hover:border-accent"
              >
                <span>{t.viewLive}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.links.branchNote && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-3 py-1.5 font-mono text-xs text-muted">
                <GitBranch className="h-3.5 w-3.5 text-accent" />
                <span>{project.links.branchNote}</span>
              </span>
            )}
          </div>
        </div>

        {/* Verified Facts Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.verifiedFacts.map((fact) => (
            <div
              key={fact.label.en}
              className="editorial-card rounded-2xl p-4 border border-line bg-surface"
            >
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                {fact.label[lang]}
              </span>
              <span className="mt-1 block text-sm font-semibold text-ink">
                {fact.value[lang]}
              </span>
            </div>
          ))}
        </div>

        {/* Evidence / Preview Screenshots (Above the fold) */}
        {(project.previewImage || project.secondaryImage) && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.previewImage && (
              <figure className="editorial-card overflow-hidden rounded-2xl p-3 border border-line bg-surface">
                <Image
                  src={project.previewImage}
                  alt={
                    lang === 'pt'
                      ? `Visão geral do projeto ${project.title}`
                      : `${project.title} overview`
                  }
                  width={1200}
                  height={675}
                  unoptimized
                  className="w-full h-auto rounded-xl border border-line object-cover"
                />
              </figure>
            )}
            {project.secondaryImage && (
              <figure className="editorial-card overflow-hidden rounded-2xl p-3 border border-line bg-surface">
                <Image
                  src={project.secondaryImage}
                  alt={
                    lang === 'pt'
                      ? `Visão complementar do projeto ${project.title}`
                      : `${project.title} secondary view`
                  }
                  width={1200}
                  height={675}
                  unoptimized
                  className="w-full h-auto rounded-xl border border-line object-cover"
                />
              </figure>
            )}
          </div>
        )}

        {/* My Direct Contribution (Always prominent above disclosures) */}
        <section className="mt-8 editorial-card rounded-2xl p-6 sm:p-8 border border-line bg-surface">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            <span>{t.contributionLabel}</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
            {project.myContribution[lang].map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Layer 2: On-Demand Technical Disclosures (Native <details>) */}
        <div className="mt-8 space-y-4">
          {/* Disclosure 1: Problem & Architectural Solution */}
          <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
              <span className="flex items-center gap-2">
                <span>{t.problemLabel} &amp; {t.solutionLabel}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-5 border-t border-line pt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  {t.problemLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.problem[lang]}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  {t.solutionLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.solution[lang]}
                </p>
              </div>
            </div>
          </details>

          {/* Disclosure 2: System Architecture Flow */}
          <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-accent" />
                <span>{t.architectureLabel}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-5 border-t border-line pt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.architectureFlow.map((step, idx) => (
                <div
                  key={step.node.en}
                  className="rounded-xl border border-line bg-canvas p-4"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-accent-ink">
                    <span className="font-semibold">{step.node[lang]}</span>
                    <span>0{idx + 1}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs font-medium text-ink">
                    {step.role[lang]}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {step.detail[lang]}
                  </p>
                </div>
              ))}
            </div>
          </details>

          {/* Full GEAR (GP-PME) Editorial Deep Dives (When viewing /work/gear/) */}
          {project.slug === 'gear' && (
            <>
              {/* GEAR Deep Dive 1: Architectural Diagram & 3 Operational Pillars */}
              <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span>{gearT.pillarsHeading} (ADM-Lite, RACI-Lite, CD-TI)</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-5 border-t border-line pt-5 space-y-6">
                  {/* SVG Diagram */}
                  <div className="rounded-xl border border-line bg-canvas p-4">
                    <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted">
                      <span>{lang === 'pt' ? 'ARQUITETURA GMV GEAR' : 'GEAR MVG ARCHITECTURE'}</span>
                      <span className="text-accent-ink">{lang === 'pt' ? '3 PILARES + IA OPCIONAL' : '3 PILLARS + OPTIONAL AI'}</span>
                    </div>
                    <svg
                      viewBox="0 0 420 220"
                      className="w-full h-auto"
                      role="img"
                      aria-label="GEAR architecture diagram"
                    >
                      <g>
                        <rect x="10" y="16" width="124" height="112" rx="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
                        <text x="22" y="38" fill="var(--accent)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                          {lang === 'pt' ? 'PILAR 01' : 'PILLAR 01'}
                        </text>
                        <text x="22" y="58" fill="var(--ink)" fontSize="12" fontWeight="bold">
                          {lang === 'pt' ? 'Governança' : 'Governance'}
                        </text>
                        <text x="22" y="78" fill="var(--muted)" fontSize="10">ADM-Lite</text>
                        <text x="22" y="94" fill="var(--muted)" fontSize="10">RACI-Lite (1 A)</text>
                        <text x="22" y="110" fill="var(--muted)" fontSize="10">CD-TI 30m / 15d</text>
                      </g>
                      <g>
                        <rect x="148" y="16" width="124" height="112" rx="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
                        <text x="160" y="38" fill="var(--accent)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                          {lang === 'pt' ? 'PILAR 02' : 'PILLAR 02'}
                        </text>
                        <text x="160" y="58" fill="var(--ink)" fontSize="12" fontWeight="bold">
                          {lang === 'pt' ? 'Execução Ágil' : 'Agile Execution'}
                        </text>
                        <text x="160" y="78" fill="var(--muted)" fontSize="10">{lang === 'pt' ? 'Fila Única' : 'Single Queue'}</text>
                        <text x="160" y="94" fill="var(--muted)" fontSize="10">{lang === 'pt' ? 'Kanban 4 Estados' : 'Kanban 4 States'}</text>
                        <text x="160" y="110" fill="var(--muted)" fontSize="10">{lang === 'pt' ? 'WIP Rígido = 3' : 'Hard WIP = 3'}</text>
                      </g>
                      <g>
                        <rect x="286" y="16" width="124" height="112" rx="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
                        <text x="298" y="38" fill="var(--accent)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                          {lang === 'pt' ? 'PILAR 03' : 'PILLAR 03'}
                        </text>
                        <text x="298" y="58" fill="var(--ink)" fontSize="12" fontWeight="bold">
                          {lang === 'pt' ? 'Segurança' : 'Security'}
                        </text>
                        <text x="298" y="78" fill="var(--muted)" fontSize="10">Restore 3-2-1</text>
                        <text x="298" y="94" fill="var(--muted)" fontSize="10">RTO / RPO</text>
                        <text x="298" y="110" fill="var(--muted)" fontSize="10">PRI 1 Página</text>
                      </g>
                      <g>
                        <rect x="10" y="142" width="400" height="66" rx="10" fill="var(--canvas)" stroke="var(--line)" strokeDasharray="3 3" />
                        <text x="22" y="164" fill="var(--accent)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                          {lang === 'pt' ? 'CAMADA TRANSVERSAL OPCIONAL' : 'OPTIONAL TRANSVERSAL LAYER'}
                        </text>
                        <text x="22" y="184" fill="var(--ink)" fontSize="11">
                          {lang === 'pt'
                            ? 'IA com Verificação Humana Obrigatória · Guardrails Determinísticos'
                            : 'AI under Mandatory Human Verification · Deterministic Guardrails'}
                        </text>
                        <text x="22" y="198" fill="var(--muted)" fontSize="9">
                          {lang === 'pt' ? 'RACI-Lite: IA só atua como R/C, nunca como A.' : 'RACI-Lite: AI can only act as R/C, never as A.'}
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* 3 Pillars Details */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {GEAR_DATA.pillars.map((pillar) => (
                      <div
                        key={pillar.id}
                        className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="font-semibold text-accent-ink">
                              {lang === 'pt' ? 'PILAR' : 'PILLAR'} {pillar.number}
                            </span>
                            <span className="text-muted">{pillar.standardsRef}</span>
                          </div>
                          <h4 className="mt-2 text-base font-semibold text-ink">
                            {pillar.title[lang]}
                          </h4>
                          <p className="mt-1 text-xs text-muted leading-relaxed">
                            {pillar.summary[lang]}
                          </p>
                          <ul className="mt-3 space-y-1 text-xs text-ink">
                            {pillar.mechanisms[lang].map((mech) => (
                              <li key={mech} className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                                <span>{mech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-3 border-t border-line pt-2 font-mono text-[11px] text-muted">
                          <strong>{lang === 'pt' ? 'Artefato: ' : 'Artifact: '}</strong>
                          {pillar.artifactName[lang]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* GEAR Deep Dive 2: Transversal AI Layer */}
              <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span>{GEAR_DATA.transversalAi.title[lang]}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-5 border-t border-line pt-5 space-y-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {GEAR_DATA.transversalAi.description[lang]}
                  </p>
                  <p className="rounded-xl border border-line bg-canvas p-3 text-xs text-ink font-mono">
                    {GEAR_DATA.transversalAi.imTiRule[lang]}
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-5">
                    {GEAR_DATA.transversalAi.steps.map((s) => (
                      <div key={s.step} className="rounded-xl border border-line bg-canvas p-3">
                        <span className="font-mono text-[10px] font-bold text-accent">
                          {lang === 'pt' ? 'ETAPA' : 'STEP'} {s.step}
                        </span>
                        <h5 className="mt-1 text-xs font-semibold text-ink">{s.label[lang]}</h5>
                        <p className="mt-1 text-[11px] text-muted">{s.detail[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* GEAR Deep Dive 3: 10-Chapter Book Architecture */}
              <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span>{lang === 'pt' ? 'Arquitetura do Livro (10 Capítulos)' : '10-Chapter Book Architecture'}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-5 border-t border-line pt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {GEAR_DATA.chapters.map((ch) => (
                    <div key={ch.number} className="rounded-xl border border-line bg-canvas p-3 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-accent-ink">
                          {lang === 'pt' ? 'CAP.' : 'CH.'} {ch.number}
                        </span>
                        <h5 className="mt-1 text-xs font-semibold text-ink">{ch.title[lang]}</h5>
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-muted">{ch.focus[lang]}</p>
                    </div>
                  ))}
                </div>
              </details>

              {/* GEAR Deep Dive 4: 30-Day Adoption Roadmap & IM-TI Scale */}
              <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
                  <span className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4 text-accent" />
                    <span>{gearT.roadmapHeading} &amp; {gearT.diagnosticHeading}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-5 border-t border-line pt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                      {gearT.roadmapHeading}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {GEAR_DATA.adoption30Days.map((w) => (
                        <div key={w.week.en} className="rounded-xl border border-line bg-canvas p-3">
                          <span className="font-mono text-xs font-semibold text-accent-ink">{w.week[lang]}</span>
                          <h5 className="mt-0.5 text-xs font-semibold text-ink">{w.title[lang]}</h5>
                          <ul className="mt-1.5 space-y-1 text-[11px] text-muted">
                            {w.deliverables[lang].map((d) => (
                              <li key={d} className="flex items-start gap-1">
                                <span className="mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 space-y-3">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                      {gearT.diagnosticHeading}
                    </h4>
                    <div className="space-y-2">
                      {GEAR_DATA.imTiDiagnostic.levels.map((lvl) => (
                        <div key={lvl.range} className="rounded-xl border border-line bg-canvas p-2.5">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="font-semibold text-ink">{lvl.label[lang]}</span>
                            <span className="rounded bg-subtle px-1.5 py-0.5 text-accent-ink">{lvl.range} pts</span>
                          </div>
                          <p className="mt-1 text-[11px] text-muted">{lvl.summary[lang]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </>
          )}

          {/* Disclosure: Decisions & Trade-offs */}
          <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
              <span className="flex items-center gap-2">
                <span>{t.decisionsLabel}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-5 border-t border-line pt-5">
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                {project.decisionsAndTradeoffs[lang].map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {/* Disclosure: Technical Challenges & Next Steps */}
          <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
              <span className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-accent" />
                <span>
                  {lang === 'pt'
                    ? 'Desafios Técnicos & Próximos Passos'
                    : 'Technical Challenges & Next Steps'}
                </span>
              </span>
              <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-sm leading-relaxed text-muted">
                {project.challengesAndNextSteps[lang]}
              </p>
            </div>
          </details>

          {/* Disclosure: Scope Note & Transparency */}
          <details className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-ink select-none py-1">
              <span className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-accent" />
                <span>{t.scopeNoteLabel}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-accent transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-sm leading-relaxed text-muted">
                {project.honestyAndScopeNote[lang]}
              </p>
            </div>
          </details>
        </div>

        {/* Stack Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Related Case Studies */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            {lang === 'pt' ? 'Outros Estudos de Caso' : 'More Case Studies'}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/work/${rel.slug}/`}
                prefetch={false}
                className="editorial-card rounded-2xl p-5 block border border-line bg-surface hover:border-accent transition-colors"
              >
                <span className="font-mono text-[11px] font-semibold text-accent-ink">
                  {rel.code}
                </span>
                <h3 className="mt-1.5 text-base font-semibold text-ink">
                  {rel.title}
                </h3>
                <p className="mt-1 text-xs text-muted line-clamp-2">
                  {rel.tagline[lang]}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
