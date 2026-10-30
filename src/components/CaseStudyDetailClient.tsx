'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  GitBranch,
  Layers,
  Moon,
  Palette,
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
  AccentTone,
  ThemeMode,
  useStoredAccent,
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
  const [accent, setAccent] = useStoredAccent();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-accent', accent);
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [theme, accent, lang]);

  const handleSetLang = (next: Language) => {
    setLang(next);
  };

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const handleToggleAccent = () => {
    const next: AccentTone = accent === 'sage' ? 'bronze' : 'sage';
    setAccent(next);
  };

  const t = TRANSLATIONS[lang].work;
  const navT = TRANSLATIONS[lang].nav;
  const gearT = TRANSLATIONS[lang].gearSection;
  const related = ALL_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  const accentLabel =
    lang === 'pt'
      ? accent === 'sage'
        ? 'sálvia'
        : 'bronze'
      : accent;

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
              onClick={handleToggleAccent}
              title={accent === 'sage' ? navT.accentBronze : navT.accentSage}
              aria-label={accent === 'sage' ? navT.accentBronze : navT.accentSage}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3 font-mono text-[11px] text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
            >
              <Palette className="h-3.5 w-3.5 text-accent" />
              <span className="uppercase">{accentLabel}</span>
            </button>
            <button
              type="button"
              onClick={handleToggleTheme}
              title={theme === 'light' ? navT.themeDark : navT.themeLight}
              aria-label={theme === 'light' ? navT.themeDark : navT.themeLight}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink hover:border-accent cursor-pointer"
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

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        {/* Case Study Title Block */}
        <div className="border-b border-line pb-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
              {project.code} · {project.year}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="editorial-pill">{project.stageBadge[lang]}</span>
              <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
                {project.roleBadge[lang]}
              </span>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs text-muted">
            {project.eyebrow[lang]}
          </p>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
            {project.tagline[lang]}
          </p>
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

          {/* Action Links */}
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
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-mono text-xs text-ink hover:border-accent"
              >
                <ExternalLink className="h-3.5 w-3.5 text-accent" />
                <span>{t.viewUpstream}</span>
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-mono text-xs font-medium text-accent-ink hover:border-accent"
              >
                <span>{t.viewLive}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.links.branchNote && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-3 py-1.5 font-mono text-xs text-muted">
                <GitBranch className="h-3.5 w-3.5 text-accent" />
                <span>
                  {lang === 'pt' ? 'Branch:' : 'Branch:'} {project.links.branchNote}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Verified Facts Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.verifiedFacts.map((fact) => (
            <div
              key={fact.label.en}
              className="editorial-card rounded-2xl p-4"
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

        {/* Evidence / Screenshots if present */}
        {(project.previewImage || project.secondaryImage) && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.previewImage && (
              <figure className="editorial-card overflow-hidden rounded-2xl p-3">
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
              <figure className="editorial-card overflow-hidden rounded-2xl p-3">
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

        {/* Problem & Solution Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="editorial-card rounded-2xl p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
              {t.problemLabel}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
              {project.problem[lang]}
            </p>
          </section>

          <section className="editorial-card rounded-2xl p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
              {t.solutionLabel}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
              {project.solution[lang]}
            </p>
          </section>
        </div>

        {/* System Architecture Flow */}
        <section className="mt-8 editorial-card rounded-2xl p-6 sm:p-8">
          <h2 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            <Layers className="h-4 w-4 text-accent" />
            <span>{t.architectureLabel}</span>
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
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
        </section>

        {/* Full GEAR (GP-PME) Editorial Deep Dive when viewing /work/gear/ */}
        {project.slug === 'gear' && (
          <div className="mt-8 space-y-8">
            {/* 1. Architectural Diagram & Evolution */}
            <section className="editorial-card rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                    {GEAR_DATA.edition[lang]}
                  </span>
                  <h2 className="text-2xl font-semibold text-ink">
                    {GEAR_DATA.fullTitle[lang]}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink">
                    {GEAR_DATA.executiveSummary[lang]}
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    {GEAR_DATA.evolutionNote[lang]}
                  </p>
                </div>

                <div className="lg:col-span-6 rounded-xl border border-line bg-canvas p-4">
                  <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted">
                    <span>
                      {lang === 'pt'
                        ? 'ARQUITETURA GMV GEAR'
                        : 'GEAR MVG ARCHITECTURE'}
                    </span>
                    <span className="text-accent-ink">
                      {lang === 'pt'
                        ? '3 PILARES + IA OPCIONAL'
                        : '3 PILLARS + OPTIONAL AI'}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 420 220"
                    className="w-full h-auto"
                    role="img"
                    aria-label={
                      lang === 'pt'
                        ? 'Diagrama arquitetural do GEAR mostrando 3 pilares fundamentais e a camada transversal opcional de IA com verificação humana'
                        : 'GEAR architecture diagram showing 3 foundational pillars and the transversal optional AI layer with human verification'
                    }
                  >
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
                        {lang === 'pt' ? 'PILAR 01' : 'PILLAR 01'}
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
                        {lang === 'pt' ? 'PILAR 02' : 'PILLAR 02'}
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
                        {lang === 'pt' ? 'Kanban 4 Estados' : 'Kanban 4 States'}
                      </text>
                      <text x="160" y="110" fill="var(--muted)" fontSize="10">
                        {lang === 'pt' ? 'WIP Rígido = 3' : 'Hard WIP = 3'}
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
                        {lang === 'pt' ? 'PILAR 03' : 'PILLAR 03'}
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
                        {lang === 'pt' ? 'Teste Restore 3-2-1' : '3-2-1 Restore Test'}
                      </text>
                      <text x="298" y="94" fill="var(--muted)" fontSize="10">
                        RTO / RPO &amp; MFA
                      </text>
                      <text x="298" y="110" fill="var(--muted)" fontSize="10">
                        {lang === 'pt' ? 'PRI de 1 Página' : 'PRI 1-Page Plan'}
                      </text>
                    </g>

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
                </div>
              </div>
            </section>

            {/* 2. The 3 Core Pillars */}
            <section className="editorial-card rounded-2xl p-6 sm:p-8">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
                {gearT.pillarsHeading}
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                {GEAR_DATA.pillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="rounded-xl border border-line bg-canvas p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-semibold text-accent-ink">
                          {lang === 'pt' ? 'PILAR' : 'PILLAR'} {pillar.number}
                        </span>
                        <span className="text-muted">{pillar.standardsRef}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-ink">
                        {pillar.title[lang]}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-accent-ink">
                        {pillar.subtitle[lang]}
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted">
                        {pillar.summary[lang]}
                      </p>
                      <ul className="mt-3 space-y-1.5 border-t border-line pt-3 text-xs text-ink">
                        {pillar.mechanisms[lang].map((mech) => (
                          <li key={mech} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{mech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 border-t border-line pt-2.5 font-mono text-[11px] text-muted">
                      <strong className="text-ink">
                        {lang === 'pt' ? 'Artefato:' : 'Artifact:'}
                      </strong>{' '}
                      {pillar.artifactName[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Transversal Optional AI Layer */}
            <section className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>{GEAR_DATA.transversalAi.badge[lang]}</span>
                </span>
                <h2 className="mt-1 text-2xl font-semibold text-ink">
                  {GEAR_DATA.transversalAi.title[lang]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {GEAR_DATA.transversalAi.description[lang]}
                </p>
                <p className="mt-3 rounded-xl border border-line bg-subtle p-3.5 text-xs text-ink">
                  {GEAR_DATA.transversalAi.imTiRule[lang]}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                {GEAR_DATA.transversalAi.steps.map((s) => (
                  <div
                    key={s.step}
                    className="rounded-xl border border-line bg-canvas p-3.5"
                  >
                    <span className="font-mono text-[11px] font-bold text-accent">
                      {lang === 'pt' ? 'ETAPA' : 'STEP'} {s.step}
                    </span>
                    <h3 className="mt-1 text-xs font-semibold text-ink">
                      {s.label[lang]}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-muted">
                      {s.detail[lang]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {GEAR_DATA.transversalAi.useCasesByPillar[lang].map((item) => (
                  <div
                    key={item.pillar}
                    className="rounded-xl border border-line bg-canvas p-4"
                  >
                    <p className="font-mono text-xs font-semibold text-accent-ink">
                      {item.pillar}
                    </p>
                    <p className="mt-1 text-xs text-ink">{item.useCase}</p>
                    <p className="mt-2 font-mono text-[11px] text-muted">
                      Guardrail: {item.guardrail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. 10-Chapter Book & TCC Architecture Index */}
            <section className="editorial-card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                <h2 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span>
                    {lang === 'pt'
                      ? 'Arquitetura do Livro Técnico & TCC (10 Capítulos)'
                      : 'Technical Book & Thesis Architecture (10 Chapters)'}
                  </span>
                </h2>
                <span className="font-mono text-xs text-muted">
                  {GEAR_DATA.edition[lang]}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {GEAR_DATA.chapters.map((ch) => (
                  <div
                    key={ch.number}
                    className="rounded-xl border border-line bg-canvas p-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[11px] font-bold text-accent-ink">
                        {lang === 'pt' ? 'CAP.' : 'CH.'} {ch.number}
                      </span>
                      <h3 className="mt-1 text-xs font-semibold text-ink">
                        {ch.title[lang]}
                      </h3>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-muted">
                      {ch.focus[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. 30-Day Adoption Roadmap & IM-TI 0-10 + DSR Transparency */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <section className="lg:col-span-7 editorial-card rounded-2xl p-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
                  {gearT.roadmapHeading}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {GEAR_DATA.adoption30Days.map((w) => (
                    <div
                      key={w.week.en}
                      className="rounded-xl border border-line bg-canvas p-4"
                    >
                      <span className="font-mono text-xs font-semibold text-accent-ink">
                        {w.week[lang]}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-ink">
                        {w.title[lang]}
                      </h3>
                      <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
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
              </section>

              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <section className="editorial-card rounded-2xl p-6">
                  <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink">
                    {gearT.diagnosticHeading}
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    {GEAR_DATA.imTiDiagnostic.subtitle[lang]}
                  </p>
                  <div className="mt-3 space-y-2">
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
                </section>

                <section className="editorial-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-ink">
                    <FileCheck2 className="h-4 w-4 text-accent" />
                    <span>{GEAR_DATA.academicHonesty.badge[lang]}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-ink">
                    {GEAR_DATA.academicHonesty.title[lang]}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {GEAR_DATA.academicHonesty.body[lang]}
                  </p>
                  <div className="mt-3 space-y-2">
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
                </section>
              </div>
            </div>
          </div>
        )}

        {/* Direct Contributions & Key Decisions */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="editorial-card rounded-2xl p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
              {t.contributionLabel}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
              {project.myContribution[lang].map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="editorial-card rounded-2xl p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
              {t.decisionsLabel}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
              {project.decisionsAndTradeoffs[lang].map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Technical Challenges & Next Steps */}
        <section className="mt-8 editorial-card rounded-2xl p-6">
          <h2 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            <Wrench className="h-4 w-4 text-accent" />
            <span>
              {lang === 'pt'
                ? 'Desafios Técnicos & Próximos Passos'
                : 'Technical Challenges & Next Steps'}
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.challengesAndNextSteps[lang]}
          </p>
        </section>

        {/* Scope & Verification Note */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-subtle p-5 text-xs leading-relaxed text-muted sm:text-sm">
          <ShieldAlert className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <strong className="text-ink">{t.scopeNoteLabel}: </strong>
            <span>{project.honestyAndScopeNote[lang]}</span>
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
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
                className="editorial-card rounded-2xl p-5 block"
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
