'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG, LiveUpdate, Certification, Project } from '@/config/portfolio';
import { verifySuperuserLogin, isSuperuserAuthenticated, logoutSuperuser } from '@/utils/security';
import { Settings, X, Eye, EyeOff, Save, Check, Lock, LogOut, Plus, Trash2, Radio, Award, Download } from 'lucide-react';

export interface AdminPortfolioConfig {
  showLiveNews: boolean;
  showEvolutionCharts: boolean;
  showCaseStudies: boolean;
  showSecondaryRepos: boolean;
  showCertifications: boolean;
  liveUpdates: LiveUpdate[];
  certifications: Certification[];
  featuredProjects: Project[];
}

export const useAdminPortfolioConfig = () => {
  const [config, setConfig] = useState<AdminPortfolioConfig>({
    showLiveNews: true,
    showEvolutionCharts: true,
    showCaseStudies: true,
    showSecondaryRepos: true,
    showCertifications: PORTFOLIO_CONFIG.certificationsEnabled,
    liveUpdates: PORTFOLIO_CONFIG.liveUpdates,
    certifications: PORTFOLIO_CONFIG.certifications,
    featuredProjects: PORTFOLIO_CONFIG.featuredProjects,
  });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_admin_full_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed);
      } catch (e) {
        console.error('Failed to parse admin config from localStorage', e);
      }
    }
  }, []);

  const updateConfig = (newConfig: AdminPortfolioConfig) => {
    setConfig(newConfig);
    localStorage.setItem('portfolio_admin_full_config', JSON.stringify(newConfig));
  };

  return { config, updateConfig };
};

export const AdminPanel: React.FC<{
  config: AdminPortfolioConfig;
  onUpdate: (newConfig: AdminPortfolioConfig) => void;
}> = ({ config, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'visibility' | 'news' | 'certs' | 'projects' | 'export'>('visibility');

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);

  // Editable config state
  const [localConfig, setLocalConfig] = useState<AdminPortfolioConfig>(config);
  const [saveMessage, setSaveMessage] = useState('');

  // Form states for adding items
  const [newNews, setNewNews] = useState<Partial<LiveUpdate>>({
    type: 'LINKEDIN_POST',
    title: '',
    date: 'HOJE',
    summary: '',
    link: '',
    tag: 'LinkedIn Post'
  });

  const [newCert, setNewCert] = useState<Partial<Certification>>({
    title: '',
    issuer: '',
    date: new Date().getFullYear().toString(),
    badgeCode: `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
    status: 'VERIFIED / ACTIVE',
    skillsCovered: []
  });
  const [certSkillInput, setCertSkillInput] = useState('');

  useEffect(() => {
    setLocalConfig(config);
    setIsAuthenticated(isSuperuserAuthenticated());

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [config]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsSubmittingLogin(true);

    try {
      const success = await verifySuperuserLogin(username, password);
      if (success) {
        setIsAuthenticated(true);
        setUsername('');
        setPassword('');
      } else {
        setLoginError('Credenciais inválidas. Verifique o usuário e a senha.');
      }
    } catch (err) {
      setLoginError('Erro ao autenticar. Tente novamente.');
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  const handleLogout = () => {
    logoutSuperuser();
    setIsAuthenticated(false);
  };

  const handleToggleVisibility = (key: keyof AdminPortfolioConfig) => {
    setLocalConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddLiveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNews.title || !newNews.summary) return;

    const newItem: LiveUpdate = {
      id: `up-${Date.now()}`,
      type: newNews.type || 'LINKEDIN_POST',
      title: newNews.title,
      date: newNews.date || 'HOJE',
      summary: newNews.summary,
      link: newNews.link || '',
      tag: newNews.tag || 'Update'
    };

    setLocalConfig(prev => ({
      ...prev,
      liveUpdates: [newItem, ...prev.liveUpdates]
    }));

    setNewNews({ type: 'LINKEDIN_POST', title: '', date: 'HOJE', summary: '', link: '', tag: 'LinkedIn Post' });
  };

  const handleDeleteLiveNews = (id: string) => {
    setLocalConfig(prev => ({
      ...prev,
      liveUpdates: prev.liveUpdates.filter(item => item.id !== id)
    }));
  };

  const handleAddCertSkill = () => {
    if (!certSkillInput.trim()) return;
    setNewCert(prev => ({
      ...prev,
      skillsCovered: [...(prev.skillsCovered || []), certSkillInput.trim()]
    }));
    setCertSkillInput('');
  };

  const handleAddCertification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.title || !newCert.issuer) return;

    const newCertification: Certification = {
      id: `cert-${Date.now()}`,
      title: newCert.title,
      issuer: newCert.issuer,
      date: newCert.date || new Date().getFullYear().toString(),
      badgeCode: newCert.badgeCode || `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'VERIFIED / ACTIVE',
      skillsCovered: newCert.skillsCovered || []
    };

    setLocalConfig(prev => ({
      ...prev,
      certifications: [newCertification, ...prev.certifications]
    }));

    setNewCert({
      title: '',
      issuer: '',
      date: new Date().getFullYear().toString(),
      badgeCode: `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'VERIFIED / ACTIVE',
      skillsCovered: []
    });
  };

  const handleDeleteCertification = (id: string) => {
    setLocalConfig(prev => ({
      ...prev,
      certifications: prev.certifications.filter(item => item.id !== id)
    }));
  };

  const handleSaveAll = () => {
    onUpdate(localConfig);
    setSaveMessage('✓ Alterações salvas com sucesso no portfólio!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(localConfig, null, 2));
    setSaveMessage('✓ Configuração em JSON copiada para a área de transferência!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#0e1017] border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          title="Painel Admin de Edição (Alt + A)"
        >
          <Settings className="w-4 h-4" />
          <span className="font-bold">HUD ADMIN [⚙]</span>
        </button>
      </div>

      {/* Admin Panel Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1017] border border-[#00f0ff]/50 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 font-mono text-xs space-y-5 relative shadow-[0_0_35px_rgba(0,240,255,0.2)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#1e2436] pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Settings className="w-4 h-4 text-[#00f0ff]" />
                <span>PAINEL ADMIN DE CONTROLE // SUPERUSER</span>
              </div>
              <div className="flex items-center gap-2">
                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#ff3366]/10 text-[#ff3366] border border-[#ff3366]/30 hover:bg-[#ff3366]/20 transition-all text-[11px]"
                  >
                    <LogOut className="w-3 h-3" /> LOGOUT
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded bg-[#131622] text-[#8b95ad] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* If NOT Authenticated: Show Secure Superuser Login Form */}
            {!isAuthenticated ? (
              <form onSubmit={handleLoginSubmit} className="py-6 space-y-4 max-w-md mx-auto">
                <div className="text-center space-y-1">
                  <Lock className="w-8 h-8 text-[#00f0ff] mx-auto" />
                  <h3 className="text-base font-bold text-white">Autenticação de Superusuário</h3>
                  <p className="text-[#8b95ad] text-[11px]">
                    Autenticação encriptada com auditoria Script-Kitty SHA-256. Insira suas credenciais.
                  </p>
                </div>

                {loginError && (
                  <div className="p-2.5 rounded bg-[#ff3366]/10 border border-[#ff3366]/30 text-[#ff3366] text-center text-xs">
                    {loginError}
                  </div>
                )}

                <div>
                  <label className="block text-[#8b95ad] mb-1">USUÁRIO SUPERUSER</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuário"
                    className="w-full bg-[#131622] border border-[#1e2436] rounded px-3 py-2 text-white focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#8b95ad] mb-1">SENHA</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
                    className="w-full bg-[#131622] border border-[#1e2436] rounded px-3 py-2 text-white focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingLogin}
                  className="w-full py-2.5 rounded bg-[#00f0ff] text-black font-bold hover:bg-[#33f3ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                >
                  {isSubmittingLogin ? 'VALIDANDO...' : 'ENTRAR NO PAINEL ADMIN'}
                </button>
              </form>
            ) : (
              /* If Authenticated: Show Full Interactive Admin Dashboard */
              <div className="space-y-5">
                
                {/* Admin Tabs */}
                <div className="flex flex-wrap gap-1 bg-[#131622] p-1 rounded border border-[#1e2436]">
                  <button
                    onClick={() => setActiveTab('visibility')}
                    className={`px-3 py-1.5 rounded transition-all text-xs ${
                      activeTab === 'visibility' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
                    }`}
                  >
                    VISIBILIDADE DA PÁGINA
                  </button>
                  <button
                    onClick={() => setActiveTab('news')}
                    className={`px-3 py-1.5 rounded transition-all text-xs flex items-center gap-1 ${
                      activeTab === 'news' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" /> POSTAR NOTÍCIAS / LINKEDIN
                  </button>
                  <button
                    onClick={() => setActiveTab('certs')}
                    className={`px-3 py-1.5 rounded transition-all text-xs flex items-center gap-1 ${
                      activeTab === 'certs' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" /> BADGES & CERTIFICADOS
                  </button>
                  <button
                    onClick={() => setActiveTab('export')}
                    className={`px-3 py-1.5 rounded transition-all text-xs flex items-center gap-1 ${
                      activeTab === 'export' ? 'bg-[#00f0ff] text-black font-bold' : 'text-[#8b95ad] hover:text-white'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" /> SYNC & JSON EXPORT
                  </button>
                </div>

                {saveMessage && (
                  <div className="p-2.5 rounded bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] font-bold text-center">
                    {saveMessage}
                  </div>
                )}

                {/* TAB 1: Visibility Toggles */}
                {activeTab === 'visibility' && (
                  <div className="space-y-3">
                    <h4 className="text-white font-bold text-xs uppercase border-b border-[#1e2436] pb-2">
                      Alternar Exibição de Seções no Portfólio
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <div className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                        <span className="text-white font-semibold">Live News & Feed LinkedIn</span>
                        <button
                          onClick={() => handleToggleVisibility('showLiveNews')}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1 ${
                            localConfig.showLiveNews ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                          }`}
                        >
                          {localConfig.showLiveNews ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                        </button>
                      </div>

                      <div className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                        <span className="text-white font-semibold">Gráfico de Telemetria</span>
                        <button
                          onClick={() => handleToggleVisibility('showEvolutionCharts')}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1 ${
                            localConfig.showEvolutionCharts ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                          }`}
                        >
                          {localConfig.showEvolutionCharts ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                        </button>
                      </div>

                      <div className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                        <span className="text-white font-semibold">Case Study GP-PME</span>
                        <button
                          onClick={() => handleToggleVisibility('showCaseStudies')}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1 ${
                            localConfig.showCaseStudies ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                          }`}
                        >
                          {localConfig.showCaseStudies ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                        </button>
                      </div>

                      <div className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                        <span className="text-white font-semibold">Mais Repositórios</span>
                        <button
                          onClick={() => handleToggleVisibility('showSecondaryRepos')}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1 ${
                            localConfig.showSecondaryRepos ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                          }`}
                        >
                          {localConfig.showSecondaryRepos ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                        </button>
                      </div>

                      <div className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between col-span-1 sm:col-span-2">
                        <span className="text-white font-semibold">Aba de Certificações & Badges</span>
                        <button
                          onClick={() => handleToggleVisibility('showCertifications')}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold flex items-center gap-1 ${
                            localConfig.showCertifications ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40' : 'bg-[#07080a] text-[#8b95ad]'
                          }`}
                        >
                          {localConfig.showCertifications ? <><Eye className="w-3 h-3" /> VISÍVEL</> : <><EyeOff className="w-3 h-3" /> OCULTO</>}
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* TAB 2: Post Live News & LinkedIn Updates */}
                {activeTab === 'news' && (
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-xs uppercase border-b border-[#1e2436] pb-2">
                      Adicionar Nova Notícia / Post do LinkedIn
                    </h4>

                    <form onSubmit={handleAddLiveNews} className="space-y-3 bg-[#131622] p-4 rounded border border-[#1e2436]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[#8b95ad] mb-1">TÍTULO DA PUBLICAÇÃO</label>
                          <input
                            type="text"
                            required
                            value={newNews.title}
                            onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                            placeholder="Título do post"
                            className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#8b95ad] mb-1">TAG DO POST</label>
                          <input
                            type="text"
                            value={newNews.tag}
                            onChange={(e) => setNewNews({ ...newNews, tag: e.target.value })}
                            placeholder="LinkedIn Post / Release"
                            className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#8b95ad] mb-1">LINK DE DESTINO</label>
                        <input
                          type="url"
                          value={newNews.link}
                          onChange={(e) => setNewNews({ ...newNews, link: e.target.value })}
                          placeholder="https://..."
                          className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[#8b95ad] mb-1">RESUMO DA NOTÍCIA</label>
                        <textarea
                          rows={2}
                          required
                          value={newNews.summary}
                          onChange={(e) => setNewNews({ ...newNews, summary: e.target.value })}
                          placeholder="Resumo..."
                          className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-2 rounded bg-[#00ff66] text-black font-bold flex items-center gap-1.5 hover:bg-[#33ff85]"
                      >
                        <Plus className="w-3.5 h-3.5" /> ADICIONAR AO FEED DA PÁGINA
                      </button>
                    </form>

                    {/* Current Live Updates List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[#8b95ad] font-bold block text-[11px]">POSTS ATUAIS NO FEED:</span>
                      {localConfig.liveUpdates.map((item) => (
                        <div key={item.id} className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold block">{item.title}</span>
                            <span className="text-[10px] text-[#8b95ad]">{item.tag} • {item.date}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteLiveNews(item.id)}
                            className="p-1.5 rounded bg-[#ff3366]/10 text-[#ff3366] hover:bg-[#ff3366]/30"
                            title="Remover post"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: Certifications & Badges */}
                {activeTab === 'certs' && (
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-xs uppercase border-b border-[#1e2436] pb-2">
                      Adicionar Nova Certificação / Badge
                    </h4>

                    <form onSubmit={handleAddCertification} className="space-y-3 bg-[#131622] p-4 rounded border border-[#1e2436]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[#8b95ad] mb-1">TÍTULO DA CERTIFICAÇÃO</label>
                          <input
                            type="text"
                            required
                            value={newCert.title}
                            onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                            placeholder="Título"
                            className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#8b95ad] mb-1">INSTITUIÇÃO EMISSORA</label>
                          <input
                            type="text"
                            required
                            value={newCert.issuer}
                            onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                            placeholder="Emissora"
                            className="w-full bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={certSkillInput}
                          onChange={(e) => setCertSkillInput(e.target.value)}
                          placeholder="Adicionar habilidade validada"
                          className="flex-1 bg-[#07080a] border border-[#1e2436] rounded px-3 py-1.5 text-white focus:border-[#00f0ff] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleAddCertSkill}
                          className="px-3 py-1.5 rounded bg-[#131622] border border-[#1e2436] text-white hover:border-[#00f0ff]"
                        >
                          + HABILIDADE
                        </button>
                      </div>

                      {newCert.skillsCovered && newCert.skillsCovered.length > 0 && (
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          {newCert.skillsCovered.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-[#07080a] text-[#00ff66]">
                              ✓ {s}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="px-4 py-2 rounded bg-[#00ff66] text-black font-bold flex items-center gap-1.5 hover:bg-[#33ff85]"
                      >
                        <Plus className="w-3.5 h-3.5" /> ADICIONAR CERTIFICADO
                      </button>
                    </form>

                    {/* Current Certifications */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[#8b95ad] font-bold block text-[11px]">CERTIFICADOS CADASTRADOS:</span>
                      {localConfig.certifications.map((item) => (
                        <div key={item.id} className="p-3 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold block">{item.title}</span>
                            <span className="text-[10px] text-[#00ff66]">{item.issuer} • {item.badgeCode}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteCertification(item.id)}
                            className="p-1.5 rounded bg-[#ff3366]/10 text-[#ff3366] hover:bg-[#ff3366]/30"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: Sync & JSON Export */}
                {activeTab === 'export' && (
                  <div className="space-y-3 font-mono text-xs">
                    <h4 className="text-white font-bold text-xs uppercase border-b border-[#1e2436] pb-2">
                      Sincronização Nativa com GitHub & Exportação
                    </h4>

                    <p className="text-[#8b95ad] text-xs leading-relaxed">
                      As alterações salvas abaixo se aplicam imediatamente no seu navegador. Para persistir permanentemente no repositório GitHub, você pode salvar e copiar a configuração JSON atualizada.
                    </p>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={handleSaveAll}
                        className="flex-1 py-2.5 rounded bg-[#00f0ff] text-black font-bold flex items-center justify-center gap-1.5 hover:bg-[#33f3ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                      >
                        <Save className="w-4 h-4" /> SALVAR LOCALMENTE
                      </button>
                      <button
                        onClick={handleCopyJSON}
                        className="flex-1 py-2.5 rounded bg-[#131622] border border-[#00ff66]/40 text-[#00ff66] font-bold flex items-center justify-center gap-1.5 hover:bg-[#00ff66]/10"
                      >
                        <Download className="w-4 h-4" /> COPIAR JSON ATUALIZADO
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Global Save */}
                <div className="pt-4 border-t border-[#1e2436] flex justify-end">
                  <button
                    onClick={handleSaveAll}
                    className="px-6 py-2.5 rounded bg-[#00f0ff] text-black font-bold flex items-center gap-1.5 hover:bg-[#33f3ff]"
                  >
                    <Save className="w-4 h-4" /> SALVAR TODAS AS ALTERAÇÕES
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};
