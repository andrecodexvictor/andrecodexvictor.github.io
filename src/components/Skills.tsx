'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useLanguage } from './LanguageSelector';
import { Server, Sparkles, Terminal, Cpu, Code2, Palette, Boxes, Zap, Webhook, Database, Bot, GitBranch, CircuitBoard, Container, Layout, Brain } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, lang } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    LayoutCode: <Layout className="w-4 h-4 text-[#61dafb]" />,
    Code2: <Code2 className="w-4 h-4 text-[#3178c6]" />,
    Palette: <Palette className="w-4 h-4 text-[#4fc08d]" />,
    Boxes: <Boxes className="w-4 h-4 text-[#00f0ff]" />,
    Zap: <Zap className="w-4 h-4 text-[#00f0ff]" />,
    Server: <Server className="w-4 h-4 text-[#339933]" />,
    Terminal: <Terminal className="w-4 h-4 text-[#3776ab]" />,
    Webhook: <Webhook className="w-4 h-4 text-[#ff6584]" />,
    Database: <Database className="w-4 h-4 text-[#4169e1]" />,
    Sparkles: <Sparkles className="w-4 h-4 text-[#00f0ff]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#00ff66]" />,
    Bot: <Bot className="w-4 h-4 text-[#ff3366]" />,
    Brain: <Brain className="w-4 h-4 text-[#9933ff]" />,
    GitBranch: <GitBranch className="w-4 h-4 text-[#f05032]" />,
    CircuitBoard: <CircuitBoard className="w-4 h-4 text-[#00599c]" />,
    Container: <Container className="w-4 h-4 text-[#2496ed]" />
  };

  const categories = [
    { 
      title: lang === 'PT' ? "LINGUAGENS & FRAMEWORKS" : lang === 'ES' ? "LENGUAJES Y FRAMEWORKS" : lang === 'ZH' ? "语言与框架" : "LANGUAGES & FRAMEWORKS", 
      items: PORTFOLIO_CONFIG.skills.languagesFrameworks, 
      borderColor: "border-[#3178c6]/40", 
      textColor: "text-[#3178c6]" 
    },
    { 
      title: lang === 'PT' ? "BANCOS DE DADOS & VETORES" : lang === 'ES' ? "BASES DE DATOS Y VECTORES" : lang === 'ZH' ? "数据库与向量数据库" : "DATABASES & VECTOR DB", 
      items: PORTFOLIO_CONFIG.skills.dataStorage, 
      borderColor: "border-[#4169e1]/40", 
      textColor: "text-[#4169e1]" 
    },
    { 
      title: lang === 'PT' ? "IA, AGENTES & MACHINE LEARNING" : lang === 'ES' ? "IA, AGENTES Y MACHINE LEARNING" : lang === 'ZH' ? "人工智能与代理框架" : "AI, AGENTS & ML FRAMEWORKS", 
      items: PORTFOLIO_CONFIG.skills.aiAgentsML, 
      borderColor: "border-[#00ff66]/40", 
      textColor: "text-[#00ff66]" 
    },
    { 
      title: lang === 'PT' ? "DEVTOOLS & ARQUITETURA" : lang === 'ES' ? "HERRAMIENTAS Y ARQUITECTURA" : lang === 'ZH' ? "开发工具与架构" : "DEVTOOLS & ARCHITECTURE", 
      items: PORTFOLIO_CONFIG.skills.devtoolsArchitecture, 
      borderColor: "border-[#ff3366]/40", 
      textColor: "text-[#ff3366]" 
    },
  ];

  const focusSummary = lang === 'PT'
    ? "Foco principal: TypeScript/Node, Python/Django, dados (SQL/NoSQL, bancos vetoriais como ChromaDB e Pinecone, pipelines de RAG) e frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expostos via APIs REST."
    : lang === 'ES'
    ? "Enfoque principal: TypeScript/Node, Python/Django, datos (SQL/NoSQL, bases de datos vectoriales como ChromaDB y Pinecone, pipelines de RAG) y frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expuestos mediante APIs REST."
    : lang === 'ZH'
    ? "核心专注: TypeScript/Node, Python/Django, 数据 (SQL/NoSQL, 向量数据库如 ChromaDB 和 Pinecone, RAG 管道) 以及代理框架 (LangChain, LangGraph, CrewAI, n8n)，通过 REST API 提供服务。"
    : "Main focus: TypeScript/Node, Python/Django, data (SQL/NoSQL, vector DBs such as ChromaDB and Pinecone, RAG pipelines) and agent frameworks (LangChain, LangGraph, CrewAI, n8n), exposed via REST APIs.";

  return (
    <section id="stack" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
            <span>{t.skills.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & Frameworks
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-2xl font-sans">
            {t.skills.subtitle}
          </p>

          {/* Main Focus Summary Banner */}
          <div className="mt-4 p-4 rounded-lg bg-[#0e1017] border border-[#00f0ff]/30 font-mono text-xs text-white leading-relaxed hud-border">
            <span className="text-[#00f0ff] font-bold block mb-1">// MAIN TECH FOCUS:</span>
            <p className="text-[#8b95ad] font-sans text-xs sm:text-sm">{focusSummary}</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-[#0e1017] rounded-lg border ${cat.borderColor} p-5 font-mono space-y-3`}
            >
              <h3 className={`text-xs font-bold tracking-wider ${cat.textColor} border-b border-[#1e2436] pb-2.5 flex items-center justify-between`}>
                <span>{cat.title}</span>
                <span className="text-[10px] text-[#535c73]">({cat.items.length})</span>
              </h3>

              <div className="space-y-2">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between group hover:border-white/40 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      {iconMap[skill.icon] || <Code2 className="w-4 h-4 text-white" />}
                      <span className="text-xs font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-white/10"
                      style={{ color: skill.badgeColor || '#00f0ff', backgroundColor: `${skill.badgeColor || '#00f0ff'}15` }}
                    >
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
