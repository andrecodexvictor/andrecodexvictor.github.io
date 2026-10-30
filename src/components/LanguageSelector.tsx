'use client';

import React from 'react';
import { Language } from '@/config/i18n';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string; title: string }[] = [
  { code: 'en', label: 'EN', title: 'English (Default)' },
  { code: 'pt', label: 'PT-BR', title: 'Português (Brasil)' },
];

export default function LanguageSelector({ currentLang, onSelect }: LanguageSelectorProps) {
  return (
    <div
      role="group"
      aria-label={currentLang === 'pt' ? 'Seletor de idioma' : 'Language selector'}
      className="inline-flex h-9 items-center rounded-full border border-line bg-subtle p-1 font-mono text-xs"
    >
      {LANGUAGES.map((lang) => {
        const active = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            aria-pressed={active}
            title={lang.title}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer font-medium ${
              active
                ? 'bg-inverted text-inverted-ink shadow-2xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
