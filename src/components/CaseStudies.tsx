'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageSelector';
import { BookOpen, CheckCircle2, X, ArrowRight, Layers } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const cs = t.caseStudies;

  return (
    <section id="artigos" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66]"></span>
            <span>{cs.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {cs.title}
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-xl font-sans">
            {cs.subtitle}
          </p>
        </div>

        {/* Featured Case Study Card: Real GP-PME Framework */}
        <div className="bg-[#0e1017] rounded-xl border border-[#00ff66]/30 p-6 sm:p-8 hud-border-green relative overflow-hidden group">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-4 lg:max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/40 font-bold">
                  {cs.category}
                </span>
                <span className="text-[#8b95ad]">{cs.readTime}</span>
                <span className="text-[#535c73]">• {cs.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                {cs.articleTitle}
              </h3>

              <p className="text-sm text-[#8b95ad] leading-relaxed font-sans">
                {cs.articleSubtitle}
              </p>

              {/* Pillars preview */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                {cs.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#131622] border border-[#1e2436] text-[#8b95ad] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                    <span className="text-white text-[11px] font-semibold">{pillar.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="lg:shrink-0">
              <button
                onClick={() => setIsOpenModal(true)}
                className="flex items-center gap-2 px-6 py-3.5 rounded bg-[#00ff66] text-black font-mono font-bold text-xs hover:bg-[#33ff85] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
              >
                <BookOpen className="w-4 h-4" />
                <span>{cs.readArticle}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Article Modal Reader */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1017] border border-[#00ff66]/50 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 font-mono space-y-6 relative shadow-[0_0_40px_rgba(0,255,102,0.15)]">
            
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-6 right-6 p-2 rounded bg-[#131622] text-[#8b95ad] hover:text-white hover:border-[#00ff66]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs text-[#00ff66] uppercase font-bold">{cs.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">{cs.articleTitle}</h2>
              <p className="text-xs text-[#8b95ad]">{cs.readTime} • {cs.date}</p>
            </div>

            {/* Article Content Paragraphs */}
            <div className="border-t border-[#1e2436] pt-4 font-sans text-sm sm:text-base text-[#8b95ad] space-y-4 leading-relaxed">
              {cs.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Pillars Breakdown */}
            <div className="space-y-3 pt-2">
              <span className="text-xs text-[#00ff66] font-mono font-bold uppercase">{cs.pillarsTitle}</span>
              <div className="space-y-3 font-sans">
                {cs.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#131622] border border-[#1e2436] space-y-1">
                    <div className="text-white font-bold text-sm font-mono flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#00ff66]" />
                      <span>{pillar.name}</span>
                    </div>
                    <p className="text-xs text-[#8b95ad] leading-relaxed pl-6">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-[#131622] p-4 rounded border border-[#1e2436] space-y-2">
              <span className="text-xs text-[#00ff66] font-mono font-bold">{cs.takeawaysTitle}</span>
              <ul className="space-y-1 text-xs text-white">
                {cs.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsOpenModal(false)}
                className="px-5 py-2 rounded bg-[#131622] border border-[#1e2436] text-xs text-white hover:border-[#00ff66]"
              >
                {cs.closeArticle}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
