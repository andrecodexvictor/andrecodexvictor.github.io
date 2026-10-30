'use client';

import React, { useEffect } from 'react';
import { Language } from '@/config/i18n';
import {
  ThemeMode,
  useStoredLang,
  useStoredTheme,
} from '@/utils/security';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStackCarousel from '@/components/TechStackCarousel';
import Projects from '@/components/Projects';
import GearSynthesis from '@/components/GearSynthesis';
import MyJourney from '@/components/MyJourney';
import Certifications from '@/components/Certifications';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useStoredLang();
  const [theme, setTheme] = useStoredTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [theme, lang]);

  const handleSetLang = (nextLang: Language) => {
    setLang(nextLang);
  };

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
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
      />

      <main id="main-content" className="flex-1">
        <Hero lang={lang} />
        <TechStackCarousel lang={lang} />
        <Projects lang={lang} />
        <GearSynthesis lang={lang} />
        <MyJourney lang={lang} />
        <Certifications lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
