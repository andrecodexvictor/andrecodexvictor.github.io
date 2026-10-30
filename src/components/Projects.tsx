'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { animate } from 'animejs';
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GitBranch,
  Layers,
  ShieldAlert,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import {
  ARCHIVE_PROJECTS,
  CATEGORY_LABELS,
  PRIMARY_PROJECTS,
  PortfolioProject,
  ProjectCategory,
} from '@/content/projects';

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const t = TRANSLATIONS[lang].work;
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [expandedSlug, setExpandedSlug] = useState<string | null>('gear');
  const shouldReduceMotion = useReducedMotion();

  const trackPathRef = useRef<SVGPathElement | null>(null);
  const apexPulseRef = useRef<SVGCircleElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);

  // Anime.js v4 choreographed F1 circuit line draw on scroll into view
  useEffect(() => {
    if (shouldReduceMotion) return;
    const pathEl = trackPathRef.current;
    const pulseEl = apexPulseRef.current;
    const containerEl = dividerRef.current;
    if (!pathEl || !containerEl) return;

    const totalLen = pathEl.getTotalLength ? pathEl.getTotalLength() : 1600;
    pathEl.style.strokeDasharray = `${totalLen}`;
    pathEl.style.strokeDashoffset = `${totalLen}`;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animate(pathEl, {
              strokeDashoffset: [totalLen, 0],
              duration: 1800,
              ease: 'inOutQuad',
            });
            if (pulseEl) {
              animate(pulseEl, {
                scale: [0.6, 1.35, 1],
                opacity: [0.2, 1, 0.85],
                duration: 1200,
                delay: 900,
                ease: 'outBack',
              });
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(containerEl);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const filterProjects = (list: PortfolioProject[]) => {
    if (selectedCategory === 'all') return list;
    return list.filter((item) => item.categories.includes(selectedCategory));
  };

  const filteredPrimary = filterProjects(PRIMARY_PROJECTS);
  const filteredArchive = filterProjects(ARCHIVE_PROJECTS);

  const categories: ProjectCategory[] = [
    'all',
    'ai-agents',
    'architecture-tooling',
    'governance-ops',
    'product-web',
    'open-source',
  ];

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="work" className="border-b border-line bg-canvas py-20 sm:py-28">
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
                {t.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter Bar */}
          <div
            role="tablist"
            aria-label={
              lang === 'pt'
                ? 'Filtrar projetos por domínio de engenharia'
                : 'Filter projects by engineering domain'
            }
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 font-mono text-xs transition-all cursor-pointer ${
                    active
                      ? 'bg-inverted text-inverted-ink font-medium shadow-2xs'
                      : 'border border-line bg-surface text-muted hover:text-ink hover:border-accent'
                  }`}
                >
                  {CATEGORY_LABELS[cat][lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Featured Work Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {filteredPrimary.map((project) => {
            const isHeroProject = project.slug === 'gear' && selectedCategory === 'all';
            const isExpanded = expandedSlug === project.slug;

            return (
              <motion.article
                key={project.slug}
                layout={!shouldReduceMotion}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`editorial-card rounded-[22px] p-6 sm:p-8 flex flex-col justify-between ${
                  isHeroProject ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div>
                  {/* Card Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                      {project.code}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="editorial-pill">
                        {project.stageBadge[lang]}
                      </span>
                      <span className="rounded-full border border-line bg-canvas px-2.5 py-1 font-mono text-[11px] text-muted">
                        {project.roleBadge[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Title & Eyebrow */}
                  <div className="mt-5">
                    <p className="font-mono text-xs text-muted">
                      {project.eyebrow[lang]}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      <Link
                        href={`/work/${project.slug}/`}
                        prefetch={false}
                        className="hover:text-accent-ink transition-colors inline-flex items-center gap-2"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="h-5 w-5 text-accent shrink-0" />
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                      {project.tagline[lang]}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {project.summary[lang]}
                    </p>
                  </div>

                  {/* Optional Preview Image for Axiom Tech / Dotstack */}
                  {project.previewImage && (
                    <div className="mt-5 overflow-hidden rounded-xl border border-line bg-subtle">
                      <Image
                        src={project.previewImage}
                        alt={
                          lang === 'pt'
                            ? `Prévia da interface e arquitetura do projeto ${project.title}`
                            : `${project.title} interface and architecture preview`
                        }
                        width={1200}
                        height={675}
                        unoptimized
                        className="max-h-60 w-full object-cover object-top"
                      />
                    </div>
                  )}

                  {/* Verified Key Facts Strip */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {project.verifiedFacts.map((fact) => (
                      <div
                        key={fact.label.en}
                        className="rounded-xl border border-line bg-canvas p-3"
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                          {fact.label[lang]}
                        </span>
                        <span className="mt-1 block text-xs font-semibold text-ink">
                          {fact.value[lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Case Study Architecture Drawer */}
                  {isExpanded && (
                    <div className="mt-6 space-y-5 rounded-2xl border border-line bg-canvas p-5">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                            {t.problemLabel}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            {project.problem[lang]}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                            {t.solutionLabel}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            {project.solution[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Architecture Flow Nodes */}
                      <div>
                        <h4 className="mb-2.5 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                          <Layers className="h-3.5 w-3.5 text-accent" />
                          <span>{t.architectureLabel}</span>
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                          {project.architectureFlow.map((step, sIdx) => (
                            <div
                              key={step.node.en}
                              className="rounded-xl border border-line bg-surface p-3.5"
                            >
                              <div className="flex items-center justify-between font-mono text-[11px] text-accent-ink">
                                <span className="font-semibold">{step.node[lang]}</span>
                                <span>0{sIdx + 1}</span>
                              </div>
                              <p className="mt-1 font-mono text-[11px] text-ink">
                                {step.role[lang]}
                              </p>
                              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                                {step.detail[lang]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Contribution & Decisions */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                            {t.contributionLabel}
                          </h4>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
                            {project.myContribution[lang].map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                            {t.decisionsLabel}
                          </h4>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
                            {project.decisionsAndTradeoffs[lang].map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Scope & Verification Transparency Callout */}
                      <div className="flex items-start gap-2.5 rounded-xl border border-line bg-subtle p-3.5 text-xs text-muted">
                        <ShieldAlert className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-ink">
                            {t.scopeNoteLabel}:{' '}
                          </span>
                          <span>{project.honestyAndScopeNote[lang]}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stack Tags & Action Footer */}
                <div className="mt-6 border-t border-line pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line bg-subtle px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Link
                        href={`/work/${project.slug}/`}
                        prefetch={false}
                        className="inline-flex items-center gap-1.5 rounded-full bg-inverted px-4 py-2 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>{t.viewCaseStudy}</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleExpand(project.slug)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3.5 py-2 font-mono text-xs text-ink hover:border-accent transition-colors cursor-pointer"
                      >
                        <span>
                          {isExpanded
                            ? lang === 'pt'
                              ? 'Recolher Resumo'
                              : 'Collapse Summary'
                            : lang === 'pt'
                            ? 'Resumo Técnico'
                            : 'Quick Spec'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                      {project.links.branchNote && (
                        <span
                          title={
                            lang === 'pt'
                              ? 'Branch ativa de engenharia'
                              : 'Active engineering branch'
                          }
                          className="inline-flex items-center gap-1 text-[11px] text-muted"
                        >
                          <GitBranch className="h-3.5 w-3.5 text-accent" />
                          <span>{project.links.branchNote}</span>
                        </span>
                      )}

                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted hover:text-ink transition-colors"
                        >
                          <GitHubIcon className="h-3.5 w-3.5" />
                          <span>{t.viewRepo}</span>
                        </a>
                      )}

                      {project.links.upstreamRepo && (
                        <a
                          href={project.links.upstreamRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted hover:text-ink transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>{t.viewUpstream}</span>
                        </a>
                      )}

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-accent-ink hover:underline"
                        >
                          <span>{t.viewLive}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Subtle F1 Circuit Racing Line Divider (Choreographed via Anime.js v4) */}
        <div
          ref={dividerRef}
          className="my-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {t.racingLineCaption}
            </span>
          </div>
          <svg
            viewBox="160 30 720 370"
            className="h-16 w-48 sm:w-64 text-ink shrink-0"
            role="img"
            aria-label={
              lang === 'pt'
                ? 'Traçado minimalista de circuito de Fórmula 1 com marcador de ápice'
                : 'Minimalist Formula 1 circuit racing line with sage apex marker'
            }
          >
            <path
              ref={trackPathRef}
              d="M470 380C480 286 558 256 616 279S719 288 721 222 832 149 847 106 784 42 740 65 689 166 604 152 518 74 461 97 419 175 354 168 248 100 206 140 176 256 270 283 391 237 459 192"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              ref={apexPulseRef}
              cx="603"
              cy="152"
              r="11"
              fill="var(--accent)"
            />
          </svg>
        </div>

        {/* Secondary / Archive Engineering Projects */}
        {filteredArchive.length > 0 && (
          <div>
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {t.archiveTitle}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {t.archiveSubtitle}
                </p>
              </div>
              <span className="font-mono text-xs text-muted">
                {filteredArchive.length}{' '}
                {lang === 'pt' ? 'repositórios verificados' : 'verified repositories'}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArchive.map((item) => (
                <article
                  key={item.slug}
                  className="editorial-card rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-muted">
                      <span className="text-accent-ink font-semibold">{item.code}</span>
                      <span>{item.stageBadge[lang]}</span>
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-ink">
                      <Link
                        href={`/work/${item.slug}/`}
                        prefetch={false}
                        className="hover:text-accent-ink transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.tagline[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-line pt-4">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded border border-line bg-subtle px-2 py-0.5 font-mono text-[10px] text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between font-mono text-xs">
                      <Link
                        href={`/work/${item.slug}/`}
                        prefetch={false}
                        className="font-medium text-accent-ink hover:underline"
                      >
                        {t.viewCaseStudy} →
                      </Link>
                      {item.links.repo && (
                        <a
                          href={item.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted hover:text-ink"
                        >
                          <GitHubIcon className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
