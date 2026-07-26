'use client';

import React, { useState, useEffect } from 'react';
import { Settings, X, Eye, EyeOff, Save, Check, ShieldAlert } from 'lucide-react';

export interface AdminVisibilityConfig {
  showLiveNews: boolean;
  showEvolutionCharts: boolean;
  showCaseStudies: boolean;
  showSecondaryRepos: boolean;
  showCertifications: boolean;
}

const DEFAULT_CONFIG: AdminVisibilityConfig = {
  showLiveNews: true,
  showEvolutionCharts: true,
  showCaseStudies: true,
  showSecondaryRepos: true,
  showCertifications: false, // Disabled by default as requested
};

export const useAdminConfig = () => {
  const [config, setConfig] = useState<AdminVisibilityConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_admin_config');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved admin config', e);
      }
    }
  }, []);

  const updateConfig = (newConfig: AdminVisibilityConfig) => {
    setConfig(newConfig);
    localStorage.setItem('portfolio_admin_config', JSON.stringify(newConfig));
  };

  return { config, updateConfig };
};

export const AdminPanel: React.FC<{
  config: AdminVisibilityConfig;
  onUpdate: (newConfig: AdminVisibilityConfig) => void;
}> = ({ config, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempConfig, setTempConfig] = useState<AdminVisibilityConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setTempConfig(config);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [config]);

  const handleToggle = (key: keyof AdminVisibilityConfig) => {
    setTempConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onUpdate(tempConfig);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <>
      {/* HUD Admin Trigger Button */}
      <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded bg-[#0e1017] border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          title="Abrir Painel Admin de Exibição (Alt + A)"
        >
          <Settings className="w-4 h-4 animate-spin-slow" />
          <span className="hidden sm:inline font-bold">HUD ADMIN [⚙]</span>
        </button>
      </div>

      {/* Admin Panel Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1017] border border-[#00f0ff]/50 rounded-xl max-w-lg w-full p-6 font-mono text-xs space-y-5 relative shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            
            <div className="flex items-center justify-between border-b border-[#1e2436] pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Settings className="w-4 h-4 text-[#00f0ff]" />
                <span>PAINEL ADMIN // CONTROLE DE VISIBILIDADE</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-[#131622] text-[#8b95ad] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[#8b95ad] text-[11px]">
              Selecione quais seções e blocos devem aparecer no seu portfólio. As configurações são salvas instantaneamente.
            </p>

            {/* Toggles list */}
            <div className="space-y-2.5">
              
              <div className="flex items-center justify-between p-3 rounded bg-[#131622] border border-[#1e2436]">
                <span className="text-white font-semibold">Live Updates & News Feed</span>
                <button
                  onClick={() => handleToggle('showLiveNews')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold ${
                    tempConfig.showLiveNews ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                  }`}
                >
                  {tempConfig.showLiveNews ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#131622] border border-[#1e2436]">
                <span className="text-white font-semibold">Evolução & Telemetria</span>
                <button
                  onClick={() => handleToggle('showEvolutionCharts')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold ${
                    tempConfig.showEvolutionCharts ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                  }`}
                >
                  {tempConfig.showEvolutionCharts ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#131622] border border-[#1e2436]">
                <span className="text-white font-semibold">Case Study GP-PME</span>
                <button
                  onClick={() => handleToggle('showCaseStudies')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold ${
                    tempConfig.showCaseStudies ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                  }`}
                >
                  {tempConfig.showCaseStudies ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#131622] border border-[#1e2436]">
                <span className="text-white font-semibold">Mais Repositórios & Experimentos</span>
                <button
                  onClick={() => handleToggle('showSecondaryRepos')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold ${
                    tempConfig.showSecondaryRepos ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                  }`}
                >
                  {tempConfig.showSecondaryRepos ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#131622] border border-[#1e2436]">
                <span className="text-white font-semibold">Certificações & Badges</span>
                <button
                  onClick={() => handleToggle('showCertifications')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold ${
                    tempConfig.showCertifications ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                  }`}
                >
                  {tempConfig.showCertifications ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                </button>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#1e2436] flex items-center justify-between">
              {savedSuccess ? (
                <span className="text-[#00ff66] font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Configurações Salvas!
                </span>
              ) : (
                <span className="text-[#535c73] text-[10px]">Atalho: Alt + A</span>
              )}

              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-[#00f0ff] text-black font-bold flex items-center gap-1.5 hover:bg-[#33f3ff] transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)]"
              >
                <Save className="w-3.5 h-3.5" />
                <span>SALVAR PREFERÊNCIAS</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
