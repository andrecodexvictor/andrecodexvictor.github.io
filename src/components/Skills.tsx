'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { Server, Sparkles, Terminal, Cpu, Code2, Palette, Boxes, Zap, Webhook, Database, Bot, GitBranch, CircuitBoard, Container, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    LayoutCode: <Layout className="w-4 h-4 text-[#00f0ff]" />,
    Code2: <Code2 className="w-4 h-4 text-[#00f0ff]" />,
    Palette: <Palette className="w-4 h-4 text-[#00f0ff]" />,
    Boxes: <Boxes className="w-4 h-4 text-[#00f0ff]" />,
    Zap: <Zap className="w-4 h-4 text-[#00f0ff]" />,
    Server: <Server className="w-4 h-4 text-[#00ff66]" />,
    Terminal: <Terminal className="w-4 h-4 text-[#00ff66]" />,
    Webhook: <Webhook className="w-4 h-4 text-[#00ff66]" />,
    Database: <Database className="w-4 h-4 text-[#00ff66]" />,
    Sparkles: <Sparkles className="w-4 h-4 text-[#ffcc00]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#ffcc00]" />,
    Bot: <Bot className="w-4 h-4 text-[#ffcc00]" />,
    GitBranch: <GitBranch className="w-4 h-4 text-[#ff3366]" />,
    CircuitBoard: <CircuitBoard className="w-4 h-4 text-[#ff3366]" />,
    Container: <Container className="w-4 h-4 text-[#ff3366]" />
  };

  const categories = [
    { title: "FRONTEND & INTERFACE", items: PORTFOLIO_CONFIG.skills.frontend, borderColor: "border-[#00f0ff]/30", textColor: "text-[#00f0ff]" },
    { title: "BACKEND & APIS", items: PORTFOLIO_CONFIG.skills.backend, borderColor: "border-[#00ff66]/30", textColor: "text-[#00ff66]" },
    { title: "INTELIGÊNCIA ARTIFICIAL", items: PORTFOLIO_CONFIG.skills.ai, borderColor: "border-[#ffcc00]/30", textColor: "text-[#ffcc00]" },
    { title: "DEVTOOLS & EMBARCADOS", items: PORTFOLIO_CONFIG.skills.devtools, borderColor: "border-[#ff3366]/30", textColor: "text-[#ff3366]" },
  ];

  return (
    <section id="stack" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
            <span>// SEÇÃO 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack & Habilidades Técnicas
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-xl">
            Ferramentas e ecossistema tecnológico focado em estabilidade, velocidade de entrega e integração de inteligência artificial.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-[#0e1017] rounded-lg border ${cat.borderColor} p-6 font-mono space-y-4`}
            >
              <h3 className={`text-xs font-bold tracking-wider ${cat.textColor} border-b border-[#1e2436] pb-3`}>
                {cat.title}
              </h3>

              <div className="space-y-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between group hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      {iconMap[skill.icon] || <Code2 className="w-4 h-4 text-white" />}
                      <span className="text-xs font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8b95ad] px-2 py-0.5 rounded bg-[#07080a]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
