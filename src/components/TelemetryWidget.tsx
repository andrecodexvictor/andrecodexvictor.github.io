'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Radio, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TelemetryWidget: React.FC = () => {
  const [rpm, setRpm] = useState(11400);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'terminal' | 'stack'>('telemetry');
  const [typedText, setTypedText] = useState('');
  const commandText = "init --mode=builder --ai=enabled --aesthetic=cyberpunk_hud";

  useEffect(() => {
    // Dynamic RPM telemetry simulation (F1 V6 Turbo Hybrid vibe)
    const interval = setInterval(() => {
      setRpm(prev => {
        const delta = Math.floor(Math.random() * 400) - 200;
        const next = prev + delta;
        return next > 12400 ? 11800 : next < 10500 ? 11200 : next;
      });
    }, 600);

    // Terminal typing effect
    let idx = 0;
    const typeInterval = setInterval(() => {
      if (idx <= commandText.length) {
        setTypedText(commandText.slice(0, idx));
        idx++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <div className="w-full bg-[#0e1017] rounded-lg border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.08)] overflow-hidden font-mono text-xs hud-grid-dots">
      
      {/* HUD Header Bar */}
      <div className="bg-[#131622] px-4 py-2.5 border-b border-[#1e2436] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffcc00]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]"></span>
          </div>
          <span className="text-[#8b95ad] text-[11px] font-bold tracking-wider ml-2">
            TELEMETRY // F1 COCKPIT HUD
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#07080a] p-1 rounded border border-[#1e2436]">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase transition-all ${
              activeTab === 'telemetry' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
            }`}
          >
            TELEMETRIA
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase transition-all ${
              activeTab === 'terminal' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
            }`}
          >
            TERMINAL
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-5 space-y-4">
        {activeTab === 'telemetry' && (
          <div className="space-y-4">
            
            {/* RPM / Engine Telemetry */}
            <div className="bg-[#07080a] p-3 rounded border border-[#1e2436]">
              <div className="flex items-center justify-between mb-2 text-[#8b95ad] text-[10px]">
                <span className="flex items-center gap-1.5 text-[#00f0ff]">
                  <Activity className="w-3.5 h-3.5" /> MOTOR V6 HYBRID // POWER UNIT
                </span>
                <span className="font-bold text-white">{rpm} RPM</span>
              </div>
              
              {/* RPM Bar visual */}
              <div className="w-full h-2.5 bg-[#1e2436] rounded-full overflow-hidden flex gap-0.5 p-0.5">
                {[...Array(20)].map((_, i) => {
                  const filled = (i / 20) <= (rpm - 9000) / 3500;
                  const isRed = i >= 16;
                  const isGreen = i >= 10 && i < 16;
                  return (
                    <div
                      key={i}
                      className={`flex-1 h-full rounded-sm transition-all duration-300 ${
                        filled
                          ? isRed
                            ? 'bg-[#ff3366] shadow-[0_0_8px_#ff3366]'
                            : isGreen
                            ? 'bg-[#00ff66] shadow-[0_0_8px_#00ff66]'
                            : 'bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]'
                          : 'bg-[#131622]'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              
              <div className="bg-[#07080a] p-3 rounded border border-[#1e2436] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8b95ad] text-[10px]">
                  <span>SETOR 1</span>
                  <Zap className="w-3 h-3 text-[#00ff66]" />
                </div>
                <div className="mt-1 font-bold text-white text-sm tracking-tight text-right">
                  <span className="text-[#00ff66]">21.412s</span> (PURPLE)
                </div>
              </div>

              <div className="bg-[#07080a] p-3 rounded border border-[#1e2436] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8b95ad] text-[10px]">
                  <span>IA LATENCY</span>
                  <Cpu className="w-3 h-3 text-[#00f0ff]" />
                </div>
                <div className="mt-1 font-bold text-[#00f0ff] text-sm tracking-tight text-right">
                  14.2 ms
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-[#07080a] p-3 rounded border border-[#1e2436] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#8b95ad] text-[10px]">
                  <span>DEPLOY STATUS</span>
                  <Radio className="w-3 h-3 text-[#00ff66] animate-pulse" />
                </div>
                <div className="mt-1 font-bold text-[#00ff66] text-xs tracking-tight text-right uppercase">
                  READY FOR VERCEL
                </div>
              </div>

            </div>

            {/* Tactical Strategy Box */}
            <div className="bg-[#07080a] p-3 rounded border border-[#00f0ff]/20 text-[11px] text-[#8b95ad] space-y-1">
              <div className="text-white font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>PILOT PHILOSOPHY</span>
              </div>
              <p className="text-[#8b95ad] leading-relaxed">
                Execute fast, validate with precision, and deliver strong aesthetic identity.
              </p>
            </div>

          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="bg-[#07080a] p-4 rounded border border-[#1e2436] font-mono text-xs space-y-3 min-h-[190px]">
            <div className="text-[#535c73]">// ANDRÉ VICTOR TERMINAL CLI v2.4</div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#00ff66]">$</span>
              <span>{typedText}</span>
              <span className="w-2 h-4 bg-[#00f0ff] animate-pulse inline-block"></span>
            </div>
            
            {typedText.length >= commandText.length && (
              <div className="space-y-1.5 pt-2 text-[#8b95ad] border-t border-[#1e2436]/60 animate-fadeIn">
                <div className="text-[#00ff66] flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5" /> System initialized successfully.
                </div>
                <div>&gt; Stack: React, Next.js, TypeScript, Tailwind, Python, LLM APIs</div>
                <div>&gt; Specialization: Web Products & AI Automation Systems</div>
                <div>&gt; Location: Brasil • Open for Global Remote & Projects</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* HUD Footer Status */}
      <div className="bg-[#131622] px-4 py-2 border-t border-[#1e2436] flex items-center justify-between text-[10px] text-[#535c73]">
        <span>MODE: FULL-STACK BUILDER</span>
        <span className="text-[#00ff66] font-bold">100% EXECUTABILIDADE</span>
      </div>

    </div>
  );
};
