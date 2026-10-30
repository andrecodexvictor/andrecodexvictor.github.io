'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { TechIcon } from '@/components/TechIcons';

export type TechCategory = 'languages' | 'frontend' | 'backend' | 'ai-data' | 'infra';

export interface TechItem {
  id: string;
  name: string;
  category: TechCategory;
  icon: string;
  badge?: string;
  experience: {
    en: string;
    pt: string;
  };
}

export const CURATED_TECH_STACK: TechItem[] = [
  // Row 1 - Languages
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    icon: 'typescript',
    experience: {
      en: 'Strict typing, AST analysis & production safety',
      pt: 'Tipagem estrita, análise AST e segurança em produção',
    },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    icon: 'javascript',
    experience: {
      en: 'ESNext standards, event loop & DOM/V8 optimization',
      pt: 'Padrões ESNext, event loop e otimização no V8',
    },
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    icon: 'python',
    experience: {
      en: 'AsyncIO, data pipelines & agent architectures',
      pt: 'AsyncIO, pipelines de dados e arquitetura de agentes',
    },
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'languages',
    icon: 'kotlin',
    experience: {
      en: 'Coroutines, null safety & multiplatform backends',
      pt: 'Coroutines, null safety e backends multiplataforma',
    },
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'languages',
    icon: 'rust',
    experience: {
      en: 'Memory safety, zero-cost abstractions & high-perf CLI',
      pt: 'Segurança de memória, abstrações de custo zero e CLIs de alta performance',
    },
  },

  // Row 2 - Frontend & Frameworks
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'react',
    experience: {
      en: 'Server components, hooks & reactive interfaces',
      pt: 'Server components, hooks e interfaces reativas',
    },
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    icon: 'nextjs',
    experience: {
      en: 'App Router, SSG static exports & edge optimization',
      pt: 'App Router, exportação estática SSG e edge optimization',
    },
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    icon: 'vue',
    experience: {
      en: 'Composition API, Pinia state & reactive component trees',
      pt: 'Composition API, estado Pinia e árvores reativas de componentes',
    },
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    icon: 'angular',
    experience: {
      en: 'Enterprise SPAs, RxJS signals & modular dependency injection',
      pt: 'SPAs corporativas, sinais RxJS e injeção modular de dependências',
    },
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    icon: 'vite',
    experience: {
      en: 'Lightning-fast HMR, Rollup bundling & modern tooling',
      pt: 'HMR ultrarrápido, bundling Rollup e ferramental moderno',
    },
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'tailwindcss',
    experience: {
      en: 'Design tokens, dark/light themes & fluid layouts',
      pt: 'Tokens de design, temas dark/light e layouts fluidos',
    },
  },

  // Row 3 - Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    experience: {
      en: 'Microservices, CLI tooling & high-efficiency runtimes',
      pt: 'Microsserviços, tooling CLI e runtimes de alta eficiência',
    },
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    icon: 'fastapi',
    badge: 'APIs',
    experience: {
      en: 'High-throughput async APIs & Pydantic validation',
      pt: 'APIs assíncronas de alta vazão e validação Pydantic',
    },
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    icon: 'django',
    experience: {
      en: 'Robust ORM, REST framework & scalable Python backends',
      pt: 'ORM robusto, REST framework e backends Python escaláveis',
    },
  },
  {
    id: 'spring',
    name: 'Spring',
    category: 'backend',
    icon: 'spring',
    experience: {
      en: 'Spring Boot microservices, dependency injection & security',
      pt: 'Microsserviços Spring Boot, injeção de dependências e segurança',
    },
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    icon: 'laravel',
    experience: {
      en: 'Eloquent ORM, robust routing & developer ergonomics',
      pt: 'Eloquent ORM, roteamento robusto e ergonomia de desenvolvimento',
    },
  },

  // Row 4 - AI, Agents, Models & Pipelines
  {
    id: 'llms',
    name: 'LLMs',
    category: 'ai-data',
    icon: 'llms',
    experience: {
      en: 'Prompt engineering, model alignment & structured output validation',
      pt: 'Engenharia de prompts, alinhamento de modelos e saída estruturada',
    },
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'ai-data',
    icon: 'langchain',
    experience: {
      en: 'Chain orchestration, memory stores & multi-model abstraction',
      pt: 'Orquestração de cadeias, stores de memória e abstração multi-modelo',
    },
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    category: 'ai-data',
    icon: 'langgraph',
    experience: {
      en: 'Cyclic state machines & autonomous agent flows',
      pt: 'Máquinas de estado cíclicas e fluxos agênticos autônomos',
    },
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    category: 'ai-data',
    icon: 'crewai',
    experience: {
      en: 'Role-playing multi-agent swarms & collaborative task delegation',
      pt: 'Enxames de agentes por papéis e delegação colaborativa de tarefas',
    },
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'ai-data',
    icon: 'n8n',
    experience: {
      en: 'Workflow automation, webhook triggers & integration nodes',
      pt: 'Automação de workflows, gatilhos de webhooks e nós de integração',
    },
  },
  {
    id: 'rag',
    name: 'RAG',
    category: 'ai-data',
    icon: 'rag',
    badge: 'Document QA & KB',
    experience: {
      en: 'Semantic document search, chunking & grounded QA pipelines',
      pt: 'Busca semântica de documentos, chunking e pipelines de QA fundamentadas',
    },
  },
  {
    id: 'scikit-tensorflow',
    name: 'Machine Learning',
    category: 'ai-data',
    icon: 'scikit-tensorflow',
    badge: 'Scikit Learn & TF',
    experience: {
      en: 'Predictive models, classification, regression & model training',
      pt: 'Modelos preditivos, classificação, regressão e treinamento de redes',
    },
  },
  {
    id: 'neural-networks',
    name: 'Neural Networks',
    category: 'ai-data',
    icon: 'neural-networks',
    badge: 'Custom Specs',
    experience: {
      en: 'Custom architectural specs, deep layers & tensor computations',
      pt: 'Especificações de arquiteturas personalizadas, camadas profundas e tensores',
    },
  },

  // Row 5 - Databases & Data Wrangling
  {
    id: 'chromadb',
    name: 'ChromaDB',
    category: 'ai-data',
    icon: 'chromadb',
    badge: 'Vector DB',
    experience: {
      en: 'Vector embeddings, cosine similarity & hybrid search',
      pt: 'Embeddings vetoriais, similaridade por cosseno e busca híbrida',
    },
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'ai-data',
    icon: 'pinecone',
    badge: 'Vector DB',
    experience: {
      en: 'Managed cloud vector indexing, low latency & namespace filtering',
      pt: 'Indexação vetorial em nuvem gerenciada, baixa latência e filtros por namespace',
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'ai-data',
    icon: 'postgresql',
    experience: {
      en: 'Relational design, indexing & pgvector retrieval',
      pt: 'Modelagem relacional, indexação e busca vetorial pgvector',
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'ai-data',
    icon: 'mysql',
    experience: {
      en: 'ACID compliance, relational queries & schema optimization',
      pt: 'Conformidade ACID, consultas relacionais e otimização de esquemas',
    },
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'ai-data',
    icon: 'mongodb',
    experience: {
      en: 'Document-oriented storage, flexible schemas & aggregation pipelines',
      pt: 'Armazenamento orientado a documentos, esquemas flexíveis e pipelines de agregação',
    },
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'ai-data',
    icon: 'prisma',
    experience: {
      en: 'Type-safe database client, schema migrations & relations',
      pt: 'Cliente de banco tipado, migrações de esquema e relações consistentes',
    },
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'ai-data',
    icon: 'pandas',
    experience: {
      en: 'Dataframe wrangling, feature engineering & exploratory analysis',
      pt: 'Manipulação de dataframes, feature engineering e análise exploratória',
    },
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    category: 'ai-data',
    icon: 'kafka',
    experience: {
      en: 'Event streaming, topic partitions & pub/sub topologies',
      pt: 'Streaming de eventos, partições e topologias pub/sub',
    },
  },

  // Row 6 - Cloud & Infra
  {
    id: 'docker',
    name: 'Docker',
    category: 'infra',
    icon: 'docker',
    experience: {
      en: 'Multi-stage builds, container isolation & compose setups',
      pt: 'Multi-stage builds, isolamento de containers e compose',
    },
  },
  {
    id: 'oracle',
    name: 'Oracle Cloud (OCI)',
    category: 'infra',
    icon: 'oracle',
    experience: {
      en: 'OCI AI Foundations certified & resilient architectures',
      pt: 'Certificado OCI AI Foundations e arquiteturas resilientes',
    },
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'infra',
    icon: 'vercel',
    experience: {
      en: 'Static hosting, edge deployment & CI/CD preview workflows',
      pt: 'Deploy estático, edge computing e pipelines de preview',
    },
  },
];

const CATEGORY_NAMES: Record<TechCategory, { en: string; pt: string }> = {
  languages: { en: 'Language', pt: 'Linguagem' },
  frontend: { en: 'Frontend', pt: 'Frontend' },
  backend: { en: 'Backend', pt: 'Backend' },
  'ai-data': { en: 'AI & Data', pt: 'IA & Dados' },
  infra: { en: 'Cloud & Infra', pt: 'Cloud & Infra' },
};

export interface TechStackCarouselProps {
  lang: 'en' | 'pt';
}

export default function TechStackCarousel({ lang }: TechStackCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScrollBounds = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Allow small 2px threshold for sub-pixel zoom discrepancies
    const atStart = scrollLeft <= 2;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;

    setCanScrollPrev(!atStart);
    setCanScrollNext(!atEnd);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollBounds();

    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds);

    return () => {
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, [checkScrollBounds]);

  const handleScroll = (direction: 'prev' | 'next') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scroll by roughly 70% of the visible container width
    const scrollAmount = Math.max(el.clientWidth * 0.72, 240);
    const targetScrollLeft =
      direction === 'prev' ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount;

    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    el.scrollTo({
      left: targetScrollLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const copy = {
    eyebrow: lang === 'pt' ? 'Stack Tecnológica Curada' : 'Curated Tech Stack',
    title: lang === 'pt' ? 'Ferramentas & Tecnologias em Produção' : 'Production Tools & Technologies',
    subtitle:
      lang === 'pt'
        ? `${CURATED_TECH_STACK.length} tecnologias reais verificadas nos projetos e estudos de caso deste portfólio.`
        : `${CURATED_TECH_STACK.length} authentic technologies verified across projects and case studies in this portfolio.`,
    prevLabel: lang === 'pt' ? 'Tecnologias anteriores' : 'Previous technologies',
    nextLabel: lang === 'pt' ? 'Próximas tecnologias' : 'Next technologies',
    ariaLabel: lang === 'pt' ? 'Carrossel de tecnologias do portfólio' : 'Portfolio tech stack carousel',
    focusPrefix: lang === 'pt' ? 'Foco principal:' : 'Main focus:',
    focusDescription:
      lang === 'pt'
        ? 'TypeScript/Node, Python/Django, dados (SQL/NoSQL, bancos vetoriais como ChromaDB e Pinecone, pipelines de RAG) e frameworks de agentes (LangChain, LangGraph, CrewAI, n8n), expostos via APIs REST.'
        : 'TypeScript/Node, Python/Django, data (SQL/NoSQL, vector DBs such as ChromaDB and Pinecone, RAG pipelines) and agent frameworks (LangChain, LangGraph, CrewAI, n8n), exposed via REST APIs.',
  };

  return (
    <section
      id="tech-stack"
      aria-label={copy.ariaLabel}
      className="border-y border-line/60 bg-surface/40 py-8 md:py-10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Accessible Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-1">
              {copy.eyebrow}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
              {copy.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl">
              {copy.subtitle}
            </p>
          </div>

          {/* Navigation Controls: STRICTLY USER-INITIATED (NO AUTOPLAY/MARQUEE) */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('prev')}
              disabled={!canScrollPrev}
              aria-label={copy.prevLabel}
              aria-disabled={!canScrollPrev}
              className={`p-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                canScrollPrev
                  ? 'border-line bg-surface text-ink hover:border-accent hover:bg-surface-raised active:scale-95 cursor-pointer shadow-xs'
                  : 'border-line/40 bg-surface/30 text-muted-low/40 cursor-not-allowed opacity-40'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('next')}
              disabled={!canScrollNext}
              aria-label={copy.nextLabel}
              aria-disabled={!canScrollNext}
              className={`p-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                canScrollNext
                  ? 'border-line bg-surface text-ink hover:border-accent hover:bg-surface-raised active:scale-95 cursor-pointer shadow-xs'
                  : 'border-line/40 bg-surface/30 text-muted-low/40 cursor-not-allowed opacity-40'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Scroll Container
            - Responsive visible items:
              * Mobile (<768px): 2–3 visible items
              * Tablet (768px–1023px): 3–4 visible items
              * Desktop (>=1024px): 6–8 visible items
            - Scroll snap: snap-x snap-mandatory
            - Horizontal touch swipe & trackpad supported natively
            - Zero marquee / zero ticker / zero autoplay
        */}
        <div
          ref={scrollContainerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={copy.ariaLabel}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 focus:outline-none scrollbar-none select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CURATED_TECH_STACK.map((tech) => (
            <div
              key={tech.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${tech.name} - ${CATEGORY_NAMES[tech.category][lang]}`}
              className="shrink-0 snap-start w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.84rem)] xl:w-[calc(12.5%-0.875rem)] p-3.5 rounded-xl border border-line bg-surface hover:border-accent/60 hover:bg-surface-raised transition-all duration-200 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Header row: Local SVG Icon + Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center p-1 border border-line/60 group-hover:border-accent/40 transition-colors shrink-0">
                    <TechIcon id={tech.icon} size={20} title={tech.name} />
                  </div>
                  <div className="flex items-center gap-1 shrink-0 overflow-hidden">
                    {tech.badge && (
                      <span className="font-mono text-[8px] uppercase tracking-wider text-accent bg-accent/10 px-1 py-0.5 rounded border border-accent/20 truncate">
                        {tech.badge}
                      </span>
                    )}
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted-low bg-surface-raised px-1.5 py-0.5 rounded border border-line/40 truncate">
                      {CATEGORY_NAMES[tech.category][lang]}
                    </span>
                  </div>
                </div>

                {/* Technology Name */}
                <h3 className="font-medium text-ink text-sm tracking-tight group-hover:text-accent transition-colors truncate">
                  {tech.name}
                </h3>
              </div>

              {/* Verified Experience / Capability Summary */}
              <p className="text-[11px] text-muted line-clamp-2 mt-2 leading-relaxed">
                {tech.experience[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Focus note matching user's tech badge spec */}
        <div className="mt-6 pt-4 border-t border-line/40 text-xs text-muted flex flex-col sm:flex-row gap-2 sm:items-baseline">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent shrink-0">
            {copy.focusPrefix}
          </span>
          <p className="text-xs leading-relaxed text-muted font-sans">
            {copy.focusDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
