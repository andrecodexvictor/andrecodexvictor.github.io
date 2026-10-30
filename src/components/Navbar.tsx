'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const t = TRANSLATIONS[lang].nav;
  const resumeHref =
    lang === 'pt'
      ? PORTFOLIO_CONFIG.personal.resumePtUrl
      : PORTFOLIO_CONFIG.personal.resumeEnUrl;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { href: '#work', label: t.work },
    { href: '#gear', label: t.gear },
    { href: '#explore-openui', label: t.openui },
    { href: '#experience', label: t.experience },
    { href: '#credentials', label: t.credentials },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  const accentLabel =
    lang === 'pt'
      ? accent === 'sage'
        ? 'sálvia'
        : 'bronze'
      : accent;

  return (
    <header
      data-scrolled={isScrolled ? 'true' : 'false'}
      className={`sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md transition-all duration-200 ${
        isScrolled ? 'shadow-2xs' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 transition-all duration-200 ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-ink no-underline shrink-0"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-xs font-semibold tracking-tight text-ink transition-colors group-hover:border-accent">
            AV
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-ink leading-tight whitespace-nowrap">
              André Victor
            </span>
            <span className="hidden xl:block font-mono text-[10px] uppercase tracking-widest text-muted whitespace-nowrap">
              {lang === 'pt' ? 'IA Aplicada & Sistemas' : 'Applied AI & Systems'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label={lang === 'pt' ? 'Navegação principal' : 'Primary navigation'}
          className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 2xl:gap-6"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs 2xl:text-sm font-medium text-muted hover:text-ink transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language, Accent, Theme, Resume */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          <LanguageSelector currentLang={lang} onSelect={setLang} />

          <button
            type="button"
            onClick={onToggleAccent}
            title={accent === 'sage' ? t.accentBronze : t.accentSage}
            aria-label={accent === 'sage' ? t.accentBronze : t.accentSage}
            className="inline-flex h-9 w-9 xl:w-auto shrink-0 items-center justify-center gap-1.5 rounded-full border border-line bg-surface xl:px-3 font-mono text-[11px] text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
          >
            <Palette className="h-3.5 w-3.5 text-accent" />
            <span className="hidden xl:inline uppercase">{accentLabel}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            title={theme === 'light' ? t.themeDark : t.themeLight}
            aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
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
            title={t.resume}
            aria-label={t.resume}
            className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-inverted px-2.5 xl:px-3.5 font-mono text-xs font-medium text-inverted-ink hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <FileText className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">{t.resume}</span>
            <span className="xl:hidden">PDF</span>
          </a>
        </div>

        {/* Mobile / Tablet Menu Trigger (< 1024px) */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageSelector currentLang={lang} onSelect={setLang} />
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
          <button
            ref={mobileMenuButtonRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              lang === 'pt'
                ? mobileOpen
                  ? 'Fechar menu de navegação'
                  : 'Abrir menu de navegação'
                : mobileOpen
                  ? 'Close navigation menu'
                  : 'Toggle navigation menu'
            }
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-line bg-surface px-5 py-4 lg:hidden"
        >
          <nav
            className="flex flex-col gap-3"
            aria-label={lang === 'pt' ? 'Navegação móvel' : 'Mobile navigation'}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
              <button
                type="button"
                onClick={onToggleAccent}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-subtle px-3.5 py-1.5 font-mono text-xs text-ink"
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
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-inverted px-4 py-1.5 font-mono text-xs font-medium text-inverted-ink"
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
