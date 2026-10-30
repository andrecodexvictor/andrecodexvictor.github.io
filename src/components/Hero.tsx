'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, BookOpen, Download, ShieldCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = TRANSLATIONS[lang].hero;
  const shouldReduceMotion = useReducedMotion();
  const resumeHref =
    lang === 'pt'
      ? PORTFOLIO_CONFIG.personal.resumePtUrl
      : PORTFOLIO_CONFIG.personal.resumeEnUrl;

  const initialFade = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 };
  const animateFade = { opacity: 1, y: 0 };

  return (
    <section
      id="top"
      className="relative border-b border-line bg-canvas pt-10 pb-16 sm:pt-14 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Editorial Sector Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>{t.sectorTag}</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-muted">
            <a
              href={PORTFOLIO_CONFIG.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>github.com/andrecodexvictor</span>
            </a>
            <span aria-hidden="true" className="text-line">|</span>
            <a
              href={PORTFOLIO_CONFIG.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Headline, Copy & CTAs (7 cols) */}
          <motion.div
            initial={initialFade}
            animate={animateFade}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-ink">
                {t.eyebrow}
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                {t.headlinePrefix}
                <span className="font-editorial italic font-normal text-accent-ink">
                  {t.headlineEmphasis}
                </span>
                {t.headlineSuffix}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {t.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-inverted px-6 py-3.5 text-sm font-medium text-inverted-ink transition-opacity hover:opacity-90"
                >
                  <span>{t.ctaPrimary}</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>

                <a
                  href="#gear"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent"
                >
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span>{t.ctaSecondary}</span>
                </a>

                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-4 py-3.5 font-mono text-xs font-medium text-muted transition-colors hover:text-ink hover:border-accent"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{t.ctaResume}</span>
                </a>
              </div>
            </div>

            {/* 4-Cell Key Facts Strip */}
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {t.quickFacts.map((fact, idx) => (
                <div
                  key={fact.label}
                  className="bg-surface p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {fact.label}
                    </span>
                    <span className="font-mono text-[10px] text-accent">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Real Portrait in Warm Editorial Frame (5 cols) */}
          <motion.div
            initial={initialFade}
            animate={animateFade}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <figure className="editorial-card overflow-hidden rounded-[22px] p-3 sm:p-4">
              {/* Top Frame Telemetry Bar */}
              <div className="mb-3 flex items-center justify-between px-1 font-mono text-[11px] text-muted">
                <span>{lang === 'pt' ? 'RETRATO · BAHIA, BR' : 'PORTRAIT · BAHIA, BR'}</span>
                <span className="inline-flex items-center gap-1 text-accent-ink">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  <span>{lang === 'pt' ? 'PERFIL VERIFICADO' : 'VERIFIED PROFILE'}</span>
                </span>
              </div>

              {/* Portrait Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-subtle">
                <Image
                  src={PORTFOLIO_CONFIG.personal.portraitSrc}
                  alt={
                    lang === 'pt'
                      ? 'André Victor Andrade Oliveira Santos — Engenheiro de Software e Pesquisador em IA Aplicada'
                      : 'André Victor Andrade Oliveira Santos — Software Engineer and Applied AI Researcher'
                  }
                  width={960}
                  height={1200}
                  priority
                  unoptimized
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Portrait Caption */}
              <figcaption className="mt-3.5 flex items-center justify-between gap-4 px-1 pt-1">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t.portraitCaptionTitle}
                  </p>
                  <p className="text-xs text-muted">
                    {t.portraitCaptionSub}
                  </p>
                </div>
                <span className="editorial-pill shrink-0">
                  IFBA · 2026
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
