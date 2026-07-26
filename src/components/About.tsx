'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { Sparkles, BookOpen, ShoppingBag, Tv, Trophy, CheckCircle2, Heart, Brain, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const bioHuman = PORTFOLIO_CONFIG.profile.bioHuman;

  return (
    <section id="sobre" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Personal Human Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span>// SEÇÃO 05 • QUEM SOU EU</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sobre Mim & Minha Trajetória
            </h2>

            <p className="text-lg font-semibold text-[#00f0ff] font-mono leading-relaxed">
              “{bioHuman.headline}”
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#8b95ad] leading-relaxed font-sans">
              {bioHuman.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Personal Interests Chips */}
            <div className="pt-4 font-mono text-xs space-y-2">
              <span className="text-xs text-[#535c73] uppercase font-bold block">INTERESSES & PAIXÕES:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-[#0e1017] border border-[#00f0ff]/30 text-[#00f0ff] flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5" /> Inteligência Artificial
                </span>
                <span className="px-3 py-1 rounded bg-[#0e1017] border border-[#00ff66]/30 text-[#00ff66] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Livros & Aprendizado
                </span>
                <span className="px-3 py-1 rounded bg-[#0e1017] border border-[#ffcc00]/30 text-[#ffcc00] flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" /> Bagagem em Vendas
                </span>
                <span className="px-3 py-1 rounded bg-[#0e1017] border border-[#ff3366]/30 text-[#ff3366] flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5" /> Animes & Pop Culture
                </span>
                <span className="px-3 py-1 rounded bg-[#0e1017] border border-[#00f0ff]/30 text-[#00f0ff] flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" /> Fórmula 1 & Estratégia
                </span>
              </div>
            </div>

          </div>

          {/* Right Side: Personal Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e1017] rounded-xl border border-[#00f0ff]/30 p-6 font-mono space-y-5 hud-border">
              
              <div className="flex items-center justify-between border-b border-[#1e2436] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded bg-[#131622] border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] font-bold text-lg">
                    AV
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{PORTFOLIO_CONFIG.profile.name}</h3>
                    <p className="text-[11px] text-[#00f0ff]">@{PORTFOLIO_CONFIG.profile.handle}</p>
                  </div>
                </div>
                <Heart className="w-5 h-5 text-[#ff3366] animate-pulse" />
              </div>

              <div className="space-y-3 text-xs text-[#8b95ad]">
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-2">
                  <span>SPECIALIZATION</span>
                  <span className="text-white font-semibold">Full-Stack & AI Builder</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-2">
                  <span>BACKGROUND</span>
                  <span className="text-[#ffcc00] font-semibold">Vendas + Engenharia Web</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-2">
                  <span>LOCATION</span>
                  <span className="text-white font-semibold">Brasil (Remote)</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-2">
                  <span>STACK PREFERIDA</span>
                  <span className="text-[#00f0ff] font-semibold">Next.js + TS + Python + IA</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2436]/60 pb-2">
                  <span>SUPERPODER</span>
                  <span className="text-[#00ff66] font-semibold">Resolver Problemas com Velocidade</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-[#535c73] flex items-center justify-between">
                <span>ESTUDO CONTÍNUO</span>
                <span className="text-[#00ff66] font-bold">100% FOCO EM VALOR</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
