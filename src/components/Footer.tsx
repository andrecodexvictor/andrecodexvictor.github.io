'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useLanguage } from './LanguageSelector';
import { Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-[#1e2436] py-12 font-mono text-xs text-[#8b95ad]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1e2436]">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0e1017] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">
                {PORTFOLIO_CONFIG.profile.name}
              </span>
              <span className="text-[11px] text-[#535c73]">
                {PORTFOLIO_CONFIG.profile.role}
              </span>
            </div>
          </div>

          {/* Telemetry Status badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0e1017] border border-[#1e2436] text-[11px] text-[#00ff66]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
            <span>{t.footer.deploymentReady}</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0e1017] border border-[#1e2436] text-xs text-[#8b95ad] hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all"
          >
            <span>{t.footer.topButton}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#535c73]">
          <p>© {new Date().getFullYear()} André Victor (andrecodexvictor). {t.footer.rightsReserved}</p>
          <p className="flex items-center gap-2">
            <span>Cyberpunk Minimalist + F1 Cockpit HUD Architecture</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
