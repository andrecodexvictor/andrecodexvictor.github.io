'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { Language } from '@/config/i18n';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

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
            <span>{lang === 'pt' ? 'PORTFÓLIO DE ENGENHARIA · 2026' : 'ENGINEERING PORTFOLIO · 2026'}</span>
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Headline, Copy & 2 CTAs (7 cols) */}
          <motion.div
            initial={initialFade}
            animate={animateFade}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                {lang === 'pt'
                  ? 'Engenheiro de IA Aplicada & Desenvolvedor Full-Stack'
                  : 'Applied AI Engineer & Full-Stack Developer'}
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                {lang === 'pt' ? (
                  <>
                    Construo sistemas de IA que vão{' '}
                    <span className="font-editorial italic font-normal text-accent">
                      além da demonstração
                    </span>
                    .
                  </>
                ) : (
                  <>
                    I build AI systems that work{' '}
                    <span className="font-editorial italic font-normal text-accent">
                      beyond the demo
                    </span>
                    .
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {lang === 'pt'
                  ? 'Desenvolvo aplicações com IA, agentes inteligentes e produtos full-stack, conectando engenharia de software a necessidades reais.'
                  : 'I design and develop AI-powered applications, intelligent agents, and full-stack products, connecting complex engineering to practical use.'}
              </p>

              {/* Action Buttons: Exactly 2 CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-inverted px-6 py-3.5 text-sm font-medium text-inverted-ink transition-opacity hover:opacity-90"
                >
                  <span>{lang === 'pt' ? 'Ver projetos' : 'View work'}</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>{lang === 'pt' ? 'Entrar em contato' : 'Get in touch'}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Portrait with Integrated Apex Companion (5 cols) */}
          <motion.div
            initial={initialFade}
            animate={animateFade}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <figure className="editorial-card overflow-hidden rounded-[22px] p-3 sm:p-4">
              {/* Portrait Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={PORTFOLIO_CONFIG.personal.portraitSrc}
                  alt={
                    lang === 'pt'
                      ? 'André Victor Andrade Oliveira Santos com o mascote robótico Apex'
                      : 'André Victor Andrade Oliveira Santos with robotic companion Apex'
                  }
                  width={1536}
                  height={1024}
                  priority
                  unoptimized
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Portrait Caption */}
              <figcaption className="mt-3.5 flex items-center justify-between gap-4 px-1 pt-1">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    André Victor
                  </p>
                  <p className="text-xs text-muted">
                    {lang === 'pt'
                      ? 'IA Aplicada & Engenharia de Software'
                      : 'Applied AI & Software Engineering'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-accent">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  Apex Buddy
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
