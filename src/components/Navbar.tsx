'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText, Palette } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/config/i18n';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { AccentTone, ThemeMode } from '@/utils/security';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  accent: AccentTone;
  onToggleAccent: () => void;
}

export default function Navbar({
  lang,
  setLang,
  theme,
  onToggleTheme,
  accent,
  onToggleAccent,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;
  const resumeHref =
    lang === 'pt'
      ? PORTFOLIO_CONFIG.personal.resumePtUrl
      : PORTFOLIO_CONFIG.personal.resumeEnUrl;

  const navItems = [
    { href: '#work', label: t.work },
    { href: '#gear', label: t.gear },
    { href: '#explore-openui', label: t.openui },
    { href: '#experience', label: t.experience },
    { href: '#credentials', label: t.credentials },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        {/* Brand Monogram */}
        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-ink no-underline"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface font-mono text-xs font-semibold tracking-tight text-ink transition-colors group-hover:border-accent">
            AV
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-ink leading-tight">
              André Victor
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Applied AI &amp; Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language, Accent, Theme, Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          <LanguageSelector currentLang={lang} onSelect={setLang} />

          <button
            type="button"
            onClick={onToggleAccent}
            title={accent === 'sage' ? t.accentBronze : t.accentSage}
            aria-label={accent === 'sage' ? t.accentBronze : t.accentSage}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1.5 font-mono text-[11px] text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
          >
            <Palette className="h-3.5 w-3.5 text-accent" />
            <span className="uppercase">{accent}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            title={theme === 'light' ? t.themeDark : t.themeLight}
            aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-inverted px-3.5 py-1.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{t.resume}</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector currentLang={lang} onSelect={setLang} />
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-line bg-surface px-5 py-4 xl:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
              <button
                type="button"
                onClick={onToggleAccent}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-3 py-1.5 font-mono text-xs text-ink"
              >
                <Palette className="h-3.5 w-3.5 text-accent" />
                <span>
                  {accent === 'sage' ? t.accentSage : t.accentBronze}
                </span>
              </button>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-inverted px-4 py-1.5 font-mono text-xs font-medium text-inverted-ink"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>{t.resume}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
