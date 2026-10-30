'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Layers,
  Moon,
  ShieldAlert,
  Sun,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { ALL_PROJECTS, PortfolioProject } from '@/content/projects';
import { GEAR_DATA } from '@/content/gear';
import { ThemeMode, useStoredLang, useStoredTheme } from '@/utils/security';
import LanguageSelector from './LanguageSelector';

interface CaseStudyDetailClientProps {
  project: PortfolioProject;
}

export default function CaseStudyDetailClient({
  project,
}: CaseStudyDetailClientProps) {
  const [lang, setLang] = useStoredLang();
  const [theme, setTheme] = useStoredTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [theme, lang]);

  const handleSetLang = (next: Language) => {
    setLang(next);
  };

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const t = TRANSLATIONS[lang].work;
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

          <div className="flex items-center gap-2.5">
            <LanguageSelector currentLang={lang} onSelect={handleSetLang} />
            <button
              type="button"
              onClick={handleToggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink cursor-pointer"
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
              {project.code}
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
                <span>Branch: {project.links.branchNote}</span>
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
                  alt={`${project.title} overview`}
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
                  alt={`${project.title} secondary view`}
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
                key={step.node}
                className="rounded-xl border border-line bg-canvas p-4"
              >
                <div className="flex items-center justify-between font-mono text-xs text-accent-ink">
                  <span className="font-semibold">{step.node}</span>
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

        {/* Special Extended Section if viewing GEAR */}
        {project.slug === 'gear' && (
          <section className="mt-8 editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                {GEAR_DATA.edition[lang]}
              </span>
              <h2 className="mt-1 text-2xl font-semibold text-ink">
                {GEAR_DATA.transversalAi.title[lang]}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {GEAR_DATA.transversalAi.description[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
              {GEAR_DATA.transversalAi.steps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-xl border border-line bg-canvas p-3.5"
                >
                  <span className="font-mono text-[11px] font-bold text-accent">
                    STEP {s.step}
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
          </section>
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

        {/* Scope & Verification Note */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-subtle p-5 text-xs leading-relaxed text-muted sm:text-sm">
          <ShieldAlert className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <strong className="text-ink">{t.scopeNoteLabel}: </strong>
            <span>{project.honestyAndScopeNote[lang]}</span>
          </div>
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
    </div>
  );
}
