'use client';

import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, CaseStudy } from '@/config/portfolio';
import { BookOpen, Sparkles, CheckCircle2, X, ArrowRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  const study = PORTFOLIO_CONFIG.caseStudies[0];

  return (
    <section id="artigos" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66]"></span>
            <span>// SEÇÃO 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Artigos & Case Studies
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-xl">
            Visão estratégica sobre arquitetura de software, governança técnica e gestão enxuta em produtos digitais.
          </p>
        </div>

        {/* Featured Case Study Card: GP-PME */}
        <div className="bg-[#0e1017] rounded-xl border border-[#00ff66]/30 p-6 sm:p-8 hud-border-green relative overflow-hidden group">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3 lg:max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/40 font-bold">
                  {study.category}
                </span>
                <span className="text-[#8b95ad]">{study.readTime}</span>
                <span className="text-[#535c73]">• {study.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                {study.title}
              </h3>

              <p className="text-sm text-[#8b95ad] leading-relaxed">
                {study.subtitle}
              </p>

              <div className="pt-2 font-mono text-xs text-[#535c73] space-y-1">
                {study.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#8b95ad]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="lg:shrink-0">
              <button
                onClick={() => setActiveModal(study)}
                className="flex items-center gap-2 px-6 py-3.5 rounded bg-[#00ff66] text-black font-mono font-bold text-xs hover:bg-[#33ff85] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
              >
                <BookOpen className="w-4 h-4" />
                <span>LER ARTIGO COMPLETO</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Article Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1017] border border-[#00ff66]/50 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 font-mono space-y-6 relative shadow-[0_0_40px_rgba(0,255,102,0.15)]">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded bg-[#131622] text-[#8b95ad] hover:text-white hover:border-[#00ff66]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs text-[#00ff66] uppercase font-bold">{activeModal.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">{activeModal.title}</h2>
              <p className="text-xs text-[#8b95ad]">{activeModal.readTime} • {activeModal.date}</p>
            </div>

            <div className="border-t border-[#1e2436] pt-4 font-sans text-sm text-[#8b95ad] space-y-4 leading-relaxed">
              {activeModal.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-[#131622] p-4 rounded border border-[#1e2436] space-y-2">
              <span className="text-xs text-[#00ff66] font-mono font-bold">PONTOS CHAVE (KEY TAKEAWAYS)</span>
              <ul className="space-y-1 text-xs text-white">
                {activeModal.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00ff66]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded bg-[#131622] border border-[#1e2436] text-xs text-white hover:border-[#00ff66]"
              >
                FECHAR LEITURA
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
