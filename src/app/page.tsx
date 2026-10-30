'use client';

import React, { useEffect } from 'react';
import { Language } from '@/config/i18n';
import {
  AccentTone,
  ThemeMode,
  useStoredAccent,
  useStoredLang,
  useStoredTheme,
} from '@/utils/security';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import CaseStudies from '@/components/CaseStudies';
import ExploreMyWorkOpenUI from '@/components/ExploreMyWorkOpenUI';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useStoredLang();
  const [theme, setTheme] = useStoredTheme();
  const [accent, setAccent] = useStoredAccent();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', accent);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [theme, accent, lang]);

  const handleSetLang = (nextLang: Language) => {
    setLang(nextLang);
  };

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const handleToggleAccent = () => {
    const next: AccentTone = accent === 'sage' ? 'bronze' : 'sage';
    setAccent(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <a href="#main-content" className="skip-link">
        {lang === 'pt' ? 'Pular para o conteúdo principal' : 'Skip to main content'}
      </a>

      <Navbar
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        accent={accent}
        onToggleAccent={handleToggleAccent}
      />

      <main id="main-content" className="flex-1">
        <Hero lang={lang} />
        <Projects lang={lang} />
        <CaseStudies lang={lang} />
        <ExploreMyWorkOpenUI lang={lang} />
        <Experience lang={lang} />
        <Certifications lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
