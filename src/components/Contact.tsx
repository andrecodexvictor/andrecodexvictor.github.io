'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
} from 'lucide-react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './BrandIcons';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang].contactSection;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_CONFIG.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PORTFOLIO_CONFIG.personal.email}`;
    }
  };

  return (
    <section id="contact" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="editorial-card rounded-[24px] p-8 sm:p-12">
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

              {/* Primary Email & Resume Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-inverted px-6 py-3.5 text-sm font-medium text-inverted-ink hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-4 w-4" />
                  <span>{t.sendEmailCta}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3.5 font-mono text-xs font-medium text-ink hover:border-accent transition-colors cursor-pointer"
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
                        {t.copyEmail}: {PORTFOLIO_CONFIG.personal.email}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channels & Resume Downloads (5 cols) */}
            <div className="lg:col-span-5 space-y-3 rounded-2xl border border-line bg-canvas p-6">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={PORTFOLIO_CONFIG.personal.resumeEnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-ink hover:border-accent transition-colors"
                >
                  <span>{t.downloadResumeEn}</span>
                  <Download className="h-3.5 w-3.5 text-accent" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.resumePtUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-ink hover:border-accent transition-colors"
                >
                  <span>{t.downloadResumePt}</span>
                  <Download className="h-3.5 w-3.5 text-accent" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-1">
                <a
                  href={PORTFOLIO_CONFIG.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-muted hover:text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitHubIcon className="h-4 w-4 text-ink" />
                    <span>GitHub · @andrecodexvictor</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-muted hover:text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <LinkedInIcon className="h-4 w-4 text-ink" />
                    <span>LinkedIn · André Victor Andrade</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 font-mono text-xs text-muted hover:text-ink hover:border-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <InstagramIcon className="h-4 w-4 text-ink" />
                    <span>Instagram · @dedevictr</span>
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
