'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface ContactProps {
  lang: Language;
}

const DIRECT_EMAIL = PORTFOLIO_CONFIG.personal.email;

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang].contactSection;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DIRECT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${DIRECT_EMAIL}`;
    }
  };

  return (
    <section id="contact" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="editorial-card rounded-[24px] p-8 sm:p-12 border border-line bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
              <span>{t.sectionNumber}</span>
              <span>·</span>
              <span>{t.eyebrow}</span>
            </div>
            <span className="editorial-pill">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <span>{t.availabilityBadge}</span>
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {t.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {t.subtitle}
              </p>

              {/* Primary Direct Email Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={`mailto:${DIRECT_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-inverted px-6 py-3.5 text-sm font-medium text-inverted-ink hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-4 w-4" />
                  <span>{t.sendEmailCta}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-5 py-3.5 font-mono text-xs font-medium text-ink hover:border-accent transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent" />
                      <span>{t.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-accent" />
                      <span>
                        {t.copyEmail}: {DIRECT_EMAIL}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Conversion Channels (5 cols, 100% focused) */}
            <div className="lg:col-span-5 space-y-3 rounded-2xl border border-line bg-canvas p-6">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-3">
                {lang === 'pt' ? 'Canais Oficiais de Contato' : 'Official Conversion Channels'}
              </span>

              <div className="space-y-2.5">
                <a
                  href={`mailto:${DIRECT_EMAIL}`}
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>{DIRECT_EMAIL}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <GitHubIcon className="h-4 w-4 text-ink" />
                    <span>GitHub · @andrecodexvictor</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <LinkedInIcon className="h-4 w-4 text-ink" />
                    <span>LinkedIn · André Victor Andrade</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
