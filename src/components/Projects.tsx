'use client';

import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { ExternalLink, Terminal, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Web Application', 'DevTools & CI/CD', 'Interactive Physics Engine', 'Robotics & Firmware', 'Automation & Bots'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PORTFOLIO_CONFIG.featuredProjects
    : PORTFOLIO_CONFIG.featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 relative bg-[#07080a] border-t border-[#1e2436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span>// SEÇÃO 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos em Destaque
            </h2>
            <p className="text-[#8b95ad] text-sm mt-2 max-w-xl">
              Uma seleção refinada de produtos web, ferramentas de automação e engenharia robótica projetados com foco em alta performance e narrativa visual.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00f0ff] text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-[#0e1017] text-[#8b95ad] border border-[#1e2436] hover:text-white hover:border-[#00f0ff]/40'
                }`}
              >
                {cat === 'ALL' ? 'TODOS' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0e1017] rounded-lg border border-[#1e2436] p-6 flex flex-col justify-between hud-border-hover group relative overflow-hidden"
            >
              
              {/* Top Card Badge & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[11px]">
                  <span className="px-2.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[#00ff66] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse"></span>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.highlightBadge && (
                    <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-[#131622] text-[#8b95ad] border border-[#1e2436]">
                      {project.highlightBadge}
                    </span>
                  )}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#8b95ad] mt-3 leading-relaxed">
                  {project.shortDescription}
                </p>
                <p className="text-xs text-[#535c73] mt-2 leading-relaxed font-sans">
                  {project.fullDescription}
                </p>
              </div>

              {/* Tech Stack Badges & Links */}
              <div className="mt-6 pt-4 border-t border-[#1e2436] space-y-4">
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#131622] text-[#8b95ad] border border-[#1e2436]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-2 font-mono text-xs gap-2">
                  
                  {/* GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131622] border border-[#1e2436] text-[#8b95ad] hover:text-white hover:border-[#00f0ff]/40 transition-all text-xs font-semibold"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>REPOSITÓRIO</span>
                  </a>

                  {/* 24podiums Live Demo Link ONLY */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/40 hover:bg-[#00ff66]/20 font-bold transition-all text-xs"
                    >
                      <span>24PODIUMS.COM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Secondary Section */}
        <div className="mt-20 pt-12 border-t border-[#1e2436]">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00ff66]"></span>
              <span>// MAIS REPOSITÓRIOS & EXPERIMENTOS</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Arquitetura, Automação & Scripting
            </h3>
            <p className="text-xs text-[#8b95ad] mt-1">
              Ferramentas secundárias e bibliotecas de utilitários mantidas para otimização de fluxo de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_CONFIG.secondaryRepos.map((repo) => (
              <div
                key={repo.name}
                className="bg-[#0e1017] p-5 rounded-lg border border-[#1e2436] hover:border-[#00ff66]/40 transition-all font-mono"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-base flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00ff66]" />
                    {repo.name}
                  </span>
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b95ad] hover:text-[#00ff66]"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#8b95ad] font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  {repo.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#131622] text-[#8b95ad]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
