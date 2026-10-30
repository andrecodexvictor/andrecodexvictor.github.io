'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'motion/react';
import { Flag, Sparkles, VolumeX } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang].aboutSection;
  const systemReducedMotion = useReducedMotion();
  const [buddyState, setBuddyState] = useState<'idle' | 'telemetry' | 'governance'>('idle');
  const [pauseBuddyMotion, setPauseBuddyMotion] = useState(false);

  const isStaticBuddy = Boolean(systemReducedMotion || pauseBuddyMotion);

  return (
    <section
      id="about"
      className="border-b border-line bg-subtle/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="sector-rule pt-6">
          <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-ink">
            <span>{t.sectionNumber}</span>
            <span>·</span>
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Narrative & Human Interests (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
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

            {/* Subtle F1 & Storytelling Craft Notes */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="editorial-card rounded-2xl p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent-ink">
                  <Flag className="h-3.5 w-3.5 text-accent" />
                  <span>{t.f1NoteTitle}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t.f1NoteBody}
                </p>
              </div>

              <div className="editorial-card rounded-2xl p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent-ink">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>{t.animeNoteTitle}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t.animeNoteBody}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Discreet 3D-Styled Mascot Buddy "Apex" (5 cols) */}
          <div className="lg:col-span-5">
            <aside
              aria-label={t.buddyName}
              className="editorial-card rounded-[22px] p-6 sm:p-7 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {t.buddyName}
                    </h3>
                    <p className="font-mono text-[11px] text-muted">
                      {t.buddyRole}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPauseBuddyMotion((prev) => !prev)}
                    aria-pressed={isStaticBuddy}
                    className="inline-flex items-center gap-1 rounded-full border border-line bg-canvas px-2.5 py-1 font-mono text-[10px] text-muted hover:text-ink cursor-pointer"
                  >
                    <VolumeX className="h-3 w-3 text-accent" />
                    <span>
                      {isStaticBuddy
                        ? lang === 'pt'
                          ? '2D Estático'
                          : 'Static 2D'
                        : lang === 'pt'
                        ? 'Pausar Movimento'
                        : 'Pause Motion'}
                    </span>
                  </button>
                </div>

                {/* Mascot Visual Container */}
                <div className="my-5 flex flex-col items-center justify-center rounded-2xl border border-line bg-canvas py-6 px-4">
                  <Image
                    src={
                      isStaticBuddy
                        ? '/images/apex-buddy-flat.svg'
                        : '/images/apex-buddy.svg'
                    }
                    alt="Apex — Original matte ivory and sage editorial desk companion"
                    width={128}
                    height={128}
                    unoptimized
                    className={`h-28 w-28 select-none ${
                      isStaticBuddy ? '' : 'apex-float'
                    }`}
                  />
                  <p className="mt-3 text-center font-mono text-xs text-ink max-w-xs">
                    {t.buddyStates[buddyState]}
                  </p>
                </div>
              </div>

              {/* Interactive Sector Lens Buttons for Apex */}
              <div>
                <p className="mb-2.5 text-xs text-muted">{t.buddyGreeting}</p>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'idle', label: 'S1 · Paper' },
                      { id: 'telemetry', label: 'S2 · RAG/WIP' },
                      { id: 'governance', label: 'S3 · GEAR' },
                    ] as const
                  ).map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setBuddyState(btn.id)}
                      aria-pressed={buddyState === btn.id}
                      className={`rounded-xl px-2.5 py-2 font-mono text-[11px] transition-colors cursor-pointer ${
                        buddyState === btn.id
                          ? 'bg-inverted text-inverted-ink font-medium'
                          : 'border border-line bg-canvas text-muted hover:text-ink'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
