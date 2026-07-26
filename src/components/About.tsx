'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { Terminal, Shield, Zap, Sparkles, Flag, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span>// SEÇÃO 05</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sobre mim & Filosofia de Trabalho
            </h2>

            <p className="text-base text-[#8b95ad] leading-relaxed">
              Sou desenvolvedor full-stack e builder focado em criar produtos web modernos, interfaces marcantes e integrações com Inteligência Artificial. Minha abordagem combina o rigor da arquitetura de software com uma estética inspirada em cockpits de alta performance como a Fórmula 1.
            </p>

            <p className="text-sm text-[#8b95ad] leading-relaxed">
              Acredito que o diferencial de um excelente desenvolvedor não está apenas em escrever código limpo, mas na velocidade de prototipagem, na atenção extrema aos detalhes visuais e no valor imediato entregue ao usuário.
            </p>

            {/* Core Values / Pillar Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-3 rounded bg-[#0e1017] border border-[#1e2436] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-white">Execução Rápida & Pragmática</span>
              </div>
              <div className="p-3 rounded bg-[#0e1017] border border-[#1e2436] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                <span className="text-white">Identidade Visual Forte (Dark Neon)</span>
              </div>
              <div className="p-3 rounded bg-[#0e1017] border border-[#1e2436] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffcc00]" />
                <span className="text-white">Integração Prática de IA</span>
              </div>
              <div className="p-3 rounded bg-[#0e1017] border border-[#1e2436] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff3366]" />
                <span className="text-white">Arquitetura Limpa & Código Organizado</span>
              </div>
            </div>

          </div>

          {/* Right Side: Tactical Cockpit Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e1017] rounded-xl border border-[#00f0ff]/30 p-6 font-mono space-y-5 hud-border">
              
              <div className="flex items-center justify-between border-b border-[#1e2436] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#131622] border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] font-bold text-lg">
                    AV
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{PORTFOLIO_CONFIG.profile.name}</h3>
                    <p className="text-[11px] text-[#00f0ff]">@{PORTFOLIO_CONFIG.profile.handle}</p>
                  </div>
                </div>
                <Flag className="w-5 h-5 text-[#00ff66]" />
              </div>

              <div className="space-y-2.5 text-xs text-[#8b95ad]">
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-1.5">
                  <span>SPECIALIZATION</span>
                  <span className="text-white font-semibold">Full-Stack & AI Builder</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-1.5">
                  <span>LOCATION</span>
                  <span className="text-white font-semibold">Brasil (Remote Ready)</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-1.5">
                  <span>PREFERRED STACK</span>
                  <span className="text-[#00f0ff] font-semibold">Next.js + TS + Python + IA</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-1.5">
                  <span>AESTHETIC</span>
                  <span className="text-[#00ff66] font-semibold">Cyberpunk / F1 Cockpit HUD</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-[#535c73] flex items-center justify-between">
                <span>VERCEL DEPLOY READY</span>
                <span className="text-[#00ff66] font-bold">100% EXECUTÁVEL</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
