'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { TelemetryWidget } from './TelemetryWidget';
import { Terminal, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hud-grid-pattern">
      
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#00ff66]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Telemetry Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0e1017] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
              <span className="font-semibold">{PORTFOLIO_CONFIG.profile.status.label}</span>
              <span className="text-[#535c73]">|</span>
              <span className="text-white font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#00ff66]" /> Entusiasta de IA
              </span>
            </div>

            {/* Developer Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                {PORTFOLIO_CONFIG.profile.name}
              </h1>
              <p className="font-mono text-sm sm:text-base text-[#00f0ff] mt-2 tracking-wide">
                {PORTFOLIO_CONFIG.profile.role}
              </p>
            </div>

            {/* Value Proposition Statement */}
            <div className="relative pl-4 border-l-2 border-[#00f0ff] py-1">
              <p className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                “{PORTFOLIO_CONFIG.profile.valueProp}”
              </p>
            </div>

            {/* Narrative Context */}
            <p className="text-sm sm:text-base text-[#8b95ad] leading-relaxed max-w-2xl">
              Desenvolvo aplicações full-stack, interfaces de alta velocidade e sistemas inteligentes com IA. Unindo precisão de código, velocidade de entrega e apelo visual inspirado em cockpits de alta performance.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              
              <a
                href="#projetos"
                className="flex items-center gap-2 px-6 py-3 rounded bg-[#00f0ff] text-black font-bold hover:bg-[#33f3ff] transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>VER PROJETOS</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.profile.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded bg-[#0e1017] border border-[#00ff66]/40 text-[#00ff66] font-bold hover:bg-[#00ff66]/10 hover:border-[#00ff66] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CONTATO DIRETO</span>
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={PORTFOLIO_CONFIG.profile.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-[#0e1017] border border-[#1e2436] text-[#8b95ad] hover:text-white hover:border-[#00f0ff]/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_CONFIG.profile.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-[#0e1017] border border-[#1e2436] text-[#8b95ad] hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-[#1e2436] grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <div className="text-white font-bold text-base">6+</div>
                <div className="text-[#8b95ad] text-[11px]">Projetos Forte Valor</div>
              </div>
              <div>
                <div className="text-[#00f0ff] font-bold text-base">Vercel Ready</div>
                <div className="text-[#8b95ad] text-[11px]">Demos Online</div>
              </div>
              <div>
                <div className="text-[#00ff66] font-bold text-base">Full-Stack + IA</div>
                <div className="text-[#8b95ad] text-[11px]">Foco em Execução</div>
              </div>
            </div>

          </div>

          {/* Right Column: Telemetry & Terminal Widget */}
          <div className="lg:col-span-5">
            <TelemetryWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
