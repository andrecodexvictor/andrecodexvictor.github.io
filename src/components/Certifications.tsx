'use client';

import React from 'react';
import { Award, CheckCircle2, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';
import {
  COMPLEMENTARY_CREDENTIALS,
  EDUCATION_DATA,
  ORACLE_CREDENTIALS,
} from '@/content/credentials';

interface CertificationsProps {
  lang: Language;
}

export default function Certifications({ lang }: CertificationsProps) {
  const t = TRANSLATIONS[lang].credentialsSection;

  return (
    <section
      id="credentials"
      className="border-b border-line bg-canvas py-20 sm:py-28"
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

        {/* Primary Oracle University Verified Badges */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {ORACLE_CREDENTIALS.map((cert, index) => (
            <article
              key={cert.id}
              className="editorial-card rounded-[22px] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span>
                      {lang === 'pt'
                        ? `ORACLE UNIVERSITY · CREDENCIAL 0${index + 1}`
                        : `ORACLE UNIVERSITY · BADGE 0${index + 1}`}
                    </span>
                  </span>
                  <span className="editorial-pill">ID: {cert.certificateId}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-ink sm:text-2xl">
                  {cert.title[lang]}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {cert.subtitle[lang]} · {cert.date[lang]}
                </p>

                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {cert.highlights[lang].map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-xs text-muted">
                  {lang === 'pt' ? 'Emissor:' : 'Issuer:'} {cert.issuer}
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-inverted px-4 py-2 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
                >
                  <span>{t.verifyCta}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Academic Degree & Complementary Verified Certificates */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* IFBA Information Systems Degree (7 cols) */}
          <article className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span>{t.educationHeading}</span>
              </span>
              <span className="editorial-pill">
                {EDUCATION_DATA.period[lang]}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              {EDUCATION_DATA.degree[lang]}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              {EDUCATION_DATA.institution} · {EDUCATION_DATA.campus[lang]}
            </p>

            <div className="mt-4 rounded-xl border border-line bg-canvas p-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-ink">
                {lang === 'pt'
                  ? 'Trabalho de Conclusão de Curso (TCC) & Livro:'
                  : 'Undergraduate Thesis (TCC) & Technical Book:'}
              </span>
              <p className="mt-1 text-xs font-medium leading-relaxed text-ink sm:text-sm">
                {EDUCATION_DATA.thesisTitle[lang]}
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted">
              {EDUCATION_DATA.leadership[lang].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Complementary Verified Certificates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
              <Award className="h-4 w-4 text-accent" />
              <span>{t.complementaryHeading}</span>
            </h3>

            {COMPLEMENTARY_CREDENTIALS.map((comp) => (
              <article
                key={comp.id}
                className="editorial-card rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                    <span className="font-semibold text-accent-ink">
                      {comp.issuer}
                    </span>
                    <span>{comp.certificateId}</span>
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    {comp.title[lang]}
                  </h4>
                  <p className="mt-0.5 font-mono text-[11px] text-muted">
                    {comp.subtitle[lang]} · {comp.date[lang]}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {comp.highlights[lang][0]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
