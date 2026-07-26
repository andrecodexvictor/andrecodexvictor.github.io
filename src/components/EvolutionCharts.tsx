'use client';

import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useLanguage } from './LanguageSelector';
import { TrendingUp } from 'lucide-react';

export const EvolutionCharts: React.FC = () => {
  const { t } = useLanguage();
  const [activeMetric, setActiveMetric] = useState<'all' | 'ai' | 'fullstack'>('all');

  const timeline = PORTFOLIO_CONFIG.evolutionTimeline;

  return (
    <section className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span>{t.charts.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.charts.title}
            </h2>
            <p className="text-[#8b95ad] text-sm mt-2 max-w-xl font-sans">
              {t.charts.subtitle}
            </p>
          </div>

          {/* Metric Selector */}
          <div className="flex gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveMetric('all')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeMetric === 'all'
                  ? 'bg-[#00f0ff] text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'bg-[#0e1017] text-[#8b95ad] border border-[#1e2436] hover:text-white'
              }`}
            >
              {t.charts.overviewTab}
            </button>
            <button
              onClick={() => setActiveMetric('ai')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeMetric === 'ai'
                  ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'bg-[#0e1017] text-[#8b95ad] border border-[#1e2436] hover:text-white'
              }`}
            >
              {t.charts.aiTab}
            </button>
          </div>
        </div>

        {/* HUD Chart Card */}
        <div className="bg-[#0e1017] rounded-xl border border-[#00f0ff]/30 p-6 sm:p-8 hud-border">
          
          <div className="flex items-center justify-between border-b border-[#1e2436] pb-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-white font-bold">
              <TrendingUp className="w-4 h-4 text-[#00f0ff]" />
              <span>{t.charts.chartTitle}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-[#00f0ff]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]"></span> {t.charts.fullstackLegend}
              </span>
              <span className="flex items-center gap-1.5 text-[#00ff66]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]"></span> {t.charts.aiLegend}
              </span>
            </div>
          </div>

          {/* SVG Telemetry Line Chart */}
          <div className="relative h-56 sm:h-64 w-full flex items-end justify-between gap-4 pt-8 pb-4 px-2">
            
            {/* Grid background lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-[#00f0ff]"></div>
              <div className="border-b border-[#00f0ff]"></div>
              <div className="border-b border-[#00f0ff]"></div>
              <div className="border-b border-[#00f0ff]"></div>
            </div>

            {/* Bars for each quarter */}
            {timeline.map((item) => (
              <div key={item.quarter} className="flex-1 flex flex-col items-center gap-2 relative group z-10">
                
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-[#131622] border border-[#00f0ff] px-2.5 py-1 rounded font-mono text-[10px] text-white whitespace-nowrap shadow-lg pointer-events-none">
                  <div>FS: {item.fullstackSkill}% | AI: {item.aiIntegration}%</div>
                  <div className="text-[#00ff66]">Projects: {item.projectsCompleted}</div>
                </div>

                <div className="w-full flex items-end justify-center gap-1.5 h-44">
                  {/* Fullstack Bar */}
                  {(activeMetric === 'all' || activeMetric === 'fullstack') && (
                    <div
                      style={{ height: `${item.fullstackSkill}%` }}
                      className="w-3.5 sm:w-5 bg-gradient-to-t from-[#00f0ff]/20 to-[#00f0ff] rounded-t border-t border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-500"
                    />
                  )}

                  {/* AI Integration Bar */}
                  {(activeMetric === 'all' || activeMetric === 'ai') && (
                    <div
                      style={{ height: `${item.aiIntegration}%` }}
                      className="w-3.5 sm:w-5 bg-gradient-to-t from-[#00ff66]/20 to-[#00ff66] rounded-t border-t border-[#00ff66] shadow-[0_0_10px_rgba(0,255,102,0.4)] transition-all duration-500"
                    />
                  )}
                </div>

                <span className="font-mono text-[11px] text-[#8b95ad] group-hover:text-white transition-colors">
                  {item.quarter}
                </span>
              </div>
            ))}

          </div>

          {/* Quick Metrics Footer */}
          <div className="mt-6 pt-4 border-t border-[#1e2436] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 rounded bg-[#07080a] border border-[#1e2436]">
              <div className="text-[#8b95ad] text-[10px]">{t.charts.metricEfficiency}</div>
              <div className="text-white font-bold text-base mt-0.5">98.4%</div>
            </div>
            <div className="p-3 rounded bg-[#07080a] border border-[#1e2436]">
              <div className="text-[#8b95ad] text-[10px]">{t.charts.metricAi}</div>
              <div className="text-[#00ff66] font-bold text-base mt-0.5">95.0%</div>
            </div>
            <div className="p-3 rounded bg-[#07080a] border border-[#1e2436]">
              <div className="text-[#8b95ad] text-[10px]">{t.charts.metricProjects}</div>
              <div className="text-[#00f0ff] font-bold text-base mt-0.5">11+</div>
            </div>
            <div className="p-3 rounded bg-[#07080a] border border-[#1e2436]">
              <div className="text-[#8b95ad] text-[10px]">{t.charts.metricBuildTime}</div>
              <div className="text-white font-bold text-base mt-0.5">7.4s</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
