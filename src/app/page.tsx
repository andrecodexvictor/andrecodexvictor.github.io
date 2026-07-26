'use client';

import React from 'react';
import { LanguageProvider } from '@/components/LanguageSelector';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveNewsFeed } from '@/components/LiveNewsFeed';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { EvolutionCharts } from '@/components/EvolutionCharts';
import { CaseStudies } from '@/components/CaseStudies';
import { Certifications } from '@/components/Certifications';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AdminPanel, useAdminPortfolioConfig } from '@/components/AdminPanel';

function PortfolioContent() {
  const { config, updateConfig } = useAdminPortfolioConfig();

  return (
    <main className="min-h-screen bg-[#07080a] text-[#f4f5f8] selection:bg-[#00f0ff] selection:text-black relative">
      <Navbar />
      <Hero />
      
      {config.showLiveNews && <LiveNewsFeed items={config.liveUpdates} />}
      
      <Projects />
      <Skills />
      
      {config.showEvolutionCharts && <EvolutionCharts />}
      {config.showCaseStudies && <CaseStudies />}
      {config.showCertifications && <Certifications items={config.certifications} />}
      
      <About />
      <Contact />
      <Footer />

      {/* Admin Panel Drawer Trigger & Superuser Authenticated Controls */}
      <AdminPanel config={config} onUpdate={updateConfig} />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
