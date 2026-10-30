'use client';

import React from 'react';
import { Flag, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang].aboutSection;

  return (
    <section
      id="about"
      className="border-b border-line bg-subtle/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="sector-rule pt-6">
          <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent">
            <span>{t.sectionNumber}</span>
            <span>·</span>
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 max-w-4xl space-y-6">
          {/* Narrative & Human Interests */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-4">
            <p className="font-editorial italic text-xl leading-relaxed text-ink sm:text-2xl">
              “{t.lead}”
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {t.body1}
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {t.body2}
            </p>
          </div>

          {/* F1 & Storytelling Craft Notes */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="editorial-card rounded-2xl p-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent">
                <Flag className="h-3.5 w-3.5 text-accent" />
                <span>{t.f1NoteTitle}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t.f1NoteBody}
              </p>
            </div>

            <div className="editorial-card rounded-2xl p-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>{t.animeNoteTitle}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t.animeNoteBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
