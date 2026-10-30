'use client';

import React from 'react';
import { Language, TRANSLATIONS } from '@/config/i18n';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="border-t border-line bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="space-y-1">
          <p className="font-mono text-xs text-ink">{t.colophon}</p>
          <p className="text-xs text-muted">{t.rights}</p>
        </div>

        <a
          href="#top"
          className="rounded-full border border-line bg-canvas px-4 py-2 font-mono text-xs text-ink hover:border-accent transition-colors"
        >
          {t.backToTop}
        </a>
      </div>
    </footer>
  );
}
