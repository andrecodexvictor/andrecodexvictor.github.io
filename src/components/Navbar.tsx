'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_CONFIG } from '@/config/portfolio';
import { useLanguage, LanguageSelector } from './LanguageSelector';
import { MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: t.nav.hero, href: '#hero' },
    { name: t.nav.projects, href: '#projetos' },
    { name: t.nav.stack, href: '#stack' },
    { name: t.nav.caseStudy, href: '#artigos' },
    { name: t.nav.certifications, href: '#certificacoes' },
    { name: t.nav.about, href: '#sobre' },
    { name: t.nav.contact, href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#07080a]/90 backdrop-blur-md border-b border-[#00f0ff]/20 py-3 shadow-lg shadow-[#00f0ff]/5' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Telemetry Identity with User's CDX Favicon Image */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#0e1017] border border-[#00f0ff]/40 flex items-center justify-center overflow-hidden group-hover:border-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all p-0.5">
              <Image
                src="/favicon.png"
                alt="CDX Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-base tracking-wider text-white group-hover:text-[#00f0ff] transition-colors">
                  {PORTFOLIO_CONFIG.profile.handle}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
              </div>
              <p className="font-mono text-[10px] text-[#8b95ad] tracking-widest uppercase">
                HUD COCKPIT • {timeString || 'LIVE'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#8b95ad] hover:text-[#00f0ff] transition-colors py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f0ff] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Selector & Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs">
            <LanguageSelector />

            <a
              href={PORTFOLIO_CONFIG.profile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0e1017] border border-[#1e2436] text-[#8b95ad] hover:text-white hover:border-[#00f0ff]/50 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0e1017] border border-[#1e2436] text-[#8b95ad] hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] hover:bg-[#00ff66]/20 transition-all font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#0e1017] border border-[#1e2436] text-[#8b95ad] hover:text-[#00f0ff]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07080a] border-b border-[#00f0ff]/30 px-4 py-6 font-mono text-sm space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 pb-3 border-b border-[#1e2436] text-xs text-[#00ff66]">
            <ShieldCheck className="w-4 h-4" />
            <span>{PORTFOLIO_CONFIG.profile.status.label}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#8b95ad] hover:text-[#00f0ff] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#1e2436] flex items-center justify-between gap-3">
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded bg-[#0e1017] border border-[#1e2436] text-xs text-white"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded bg-[#0e1017] border border-[#1e2436] text-xs text-[#00f0ff]"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_CONFIG.profile.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded bg-[#00ff66]/10 border border-[#00ff66]/40 text-xs text-[#00ff66] font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
