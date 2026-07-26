'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { ShieldCheck, Award, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = PORTFOLIO_CONFIG.certifications;

  return (
    <section id="certificacoes" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66]"></span>
            <span>// CREDENCIAIS & BADGES DE CERTIFICAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificações & Reconhecimento Técnico
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-xl">
            Credenciais verificadas em arquitetura de software, engenharia de inteligência artificial e sistemas embarcados.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0e1017] rounded-xl border border-[#1e2436] p-6 font-mono flex flex-col justify-between hud-border-hover group"
            >
              <div>
                {/* Badge Top Header */}
                <div className="flex items-center justify-between border-b border-[#1e2436] pb-3 mb-4">
                  <div className="w-10 h-10 rounded bg-[#00ff66]/10 border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#00ff66] font-bold block flex items-center justify-end gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> {cert.status}
                    </span>
                    <span className="text-[10px] text-[#535c73]">{cert.badgeCode}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#8b95ad] mt-1">{cert.issuer} • {cert.date}</p>

                {/* Skills Covered list */}
                <div className="mt-4 pt-3 border-t border-[#1e2436] space-y-1.5 text-xs text-[#8b95ad]">
                  {cert.skillsCovered.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                      <span className="text-white font-sans text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="mt-6 pt-3 border-t border-[#1e2436] flex items-center justify-between text-[10px] text-[#535c73]">
                <span>BADGE VERIFICADO</span>
                <span className="text-[#00ff66]">VALIDADO ENGENHARIA</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
