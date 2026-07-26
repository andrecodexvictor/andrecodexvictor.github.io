'use client';

import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useLanguage } from './LanguageSelector';
import { Mail, MessageSquare, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    const subject = encodeURIComponent(`Contact from ${formState.name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${PORTFOLIO_CONFIG.profile.contacts.emailPrimary}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-[#07080a] border-t border-[#1e2436] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
            <span>{t.contact.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-[#8b95ad] text-sm mt-2 max-w-xl font-sans">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e1017] p-5 rounded-lg border border-[#00ff66]/40 flex items-center justify-between hud-border-green group transition-all font-mono"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#8b95ad]">{t.contact.fastChannel}</span>
                  <h3 className="text-white font-bold text-base group-hover:text-[#00ff66]">
                    {t.contact.whatsappDirect}
                  </h3>
                  <p className="text-xs text-[#00ff66]">{PORTFOLIO_CONFIG.profile.contacts.whatsappDisplay}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#00ff66] px-3 py-1.5 rounded bg-[#00ff66]/10 border border-[#00ff66]/30">
                {t.contact.openChat}
              </span>
            </a>

            {/* Email Primary Card */}
            <div className="bg-[#0e1017] p-5 rounded-lg border border-[#1e2436] flex items-center justify-between font-mono">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#8b95ad]">{t.contact.primaryEmail}</span>
                  <h3 className="text-white font-bold text-sm">
                    {PORTFOLIO_CONFIG.profile.contacts.emailPrimary}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => handleCopyEmail(PORTFOLIO_CONFIG.profile.contacts.emailPrimary)}
                className="px-3 py-1.5 rounded bg-[#131622] border border-[#1e2436] text-xs text-[#8b95ad] hover:text-[#00f0ff] hover:border-[#00f0ff]/40 flex items-center gap-1.5 transition-all"
              >
                {copiedEmail === PORTFOLIO_CONFIG.profile.contacts.emailPrimary ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                    <span className="text-[#00ff66]">{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.contact.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Secondary Card */}
            <div className="bg-[#0e1017] p-5 rounded-lg border border-[#1e2436] flex items-center justify-between font-mono">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#131622] border border-[#1e2436] flex items-center justify-center text-[#8b95ad]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#8b95ad]">{t.contact.secondaryEmail}</span>
                  <h3 className="text-white font-bold text-sm">
                    {PORTFOLIO_CONFIG.profile.contacts.emailAlt}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => handleCopyEmail(PORTFOLIO_CONFIG.profile.contacts.emailAlt)}
                className="px-3 py-1.5 rounded bg-[#131622] border border-[#1e2436] text-xs text-[#8b95ad] hover:text-[#00f0ff] hover:border-[#00f0ff]/40 flex items-center gap-1.5 transition-all"
              >
                {copiedEmail === PORTFOLIO_CONFIG.profile.contacts.emailAlt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                    <span className="text-[#00ff66]">{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.contact.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <a
                href={PORTFOLIO_CONFIG.profile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#0e1017] border border-[#1e2436] hover:border-[#00f0ff]/50 text-[#8b95ad] hover:text-white flex items-center gap-3 transition-all"
              >
                <LinkedinIcon className="w-5 h-5 text-[#00f0ff]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.profile.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#0e1017] border border-[#1e2436] hover:border-[#00f0ff]/50 text-[#8b95ad] hover:text-white flex items-center gap-3 transition-all"
              >
                <GithubIcon className="w-5 h-5 text-white" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

          {/* Quick Message Form Column */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0e1017] rounded-xl border border-[#1e2436] p-6 sm:p-8 font-mono space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#1e2436] pb-3 text-xs">
                <span className="text-white font-bold">{t.contact.formTitle}</span>
                <span className="text-[#00f0ff]">DIRECT MAIL</span>
              </div>

              <div>
                <label className="block text-xs text-[#8b95ad] mb-1">{t.contact.yourName}</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Ex: Alex Morgan"
                  className="w-full bg-[#131622] border border-[#1e2436] rounded px-3 py-2 text-xs text-white focus:border-[#00f0ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-[#8b95ad] mb-1">{t.contact.yourEmail}</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Ex: alex@company.com"
                  className="w-full bg-[#131622] border border-[#1e2436] rounded px-3 py-2 text-xs text-white focus:border-[#00f0ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-[#8b95ad] mb-1">{t.contact.yourMessage}</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, inquiry or opportunity..."
                  className="w-full bg-[#131622] border border-[#1e2436] rounded px-3 py-2 text-xs text-white focus:border-[#00f0ff] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-[#00f0ff] text-black font-bold text-xs hover:bg-[#33f3ff] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendButton}</span>
              </button>

              {submitted && (
                <p className="text-xs text-[#00ff66] text-center pt-2 font-sans">
                  {t.contact.successMessage}
                </p>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
