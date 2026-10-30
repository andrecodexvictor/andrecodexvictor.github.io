'use client';

import React from 'react';
import { Briefcase, CheckCircle2, Compass, Lock } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { ENGINEERING_PRINCIPLES, EXPERIENCE_ITEMS } from '@/content/experience';

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const t = TRANSLATIONS[lang].experienceSection;

  return (
    <section
      id="experience"
      className="border-b border-line bg-subtle/40 py-20 sm:py-28"
    >
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
        </div>

        {/* Experience Timeline Cards */}
        <div className="mt-10 space-y-6">
          {EXPERIENCE_ITEMS.map((item) => (
            <article
              key={item.id}
              className="editorial-card rounded-[22px] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-subtle text-accent-ink">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">
                      {item.role[lang]}{' '}
                      <span className="font-normal text-muted">
                        · {item.company}
                      </span>
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      {item.period[lang]} · {item.location[lang]}
                    </p>
                  </div>
                </div>
                <span className="editorial-pill">{item.typeBadge[lang]}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink sm:text-base">
                {item.summary[lang]}
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                {item.highlights[lang].map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas p-3.5 text-xs leading-relaxed text-muted"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Confidentiality Notice for VittalWeb */}
              {item.confidentialityNotice && (
                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-line bg-subtle p-3.5 text-xs text-muted">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item.confidentialityNotice[lang]}</span>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-subtle px-2.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Operating & Engineering Principles */}
        <div className="mt-14">
          <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink">
            <Compass className="h-4 w-4 text-accent" />
            <span>{t.principlesHeading}</span>
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGINEERING_PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="editorial-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-accent">
                    PRINCIPLE {p.number}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold text-ink">
                    {p.title[lang]}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                    {p.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
