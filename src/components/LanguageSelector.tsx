'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS, Translations } from '@/config/i18n';
import { Globe } from 'lucide-react';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'EN',
  setLang: () => {},
  t: TRANSLATIONS.EN,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('EN');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved && (saved === 'EN' || saved === 'PT' || saved === 'ES' || saved === 'ZH')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.EN;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageSelector: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const languages: Language[] = ['EN', 'PT', 'ES', 'ZH'];

  return (
    <div className="inline-flex items-center gap-1 bg-[#0e1017] p-1 rounded border border-[#00f0ff]/30 font-mono text-[10px] shadow-[0_0_10px_rgba(0,240,255,0.1)]">
      <Globe className="w-3.5 h-3.5 text-[#00f0ff] ml-1.5 mr-0.5" />
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-0.5 rounded transition-all uppercase font-bold ${
            lang === l
              ? 'bg-[#00f0ff] text-black shadow-[0_0_8px_rgba(0,240,255,0.4)]'
              : 'text-[#8b95ad] hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
