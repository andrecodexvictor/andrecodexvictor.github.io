'use client';

import React from 'react';
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
import { AdminPanel, useAdminConfig } from '@/components/AdminPanel';

export default function Home() {
  const { config, updateConfig } = useAdminConfig();

  return (
    <main className="min-h-screen bg-[#07080a] text-[#f4f5f8] selection:bg-[#00f0ff] selection:text-black relative">
      <Navbar />
      <Hero />
      
      {config.showLiveNews && <LiveNewsFeed />}
      
      <Projects />
      <Skills />
      
      {config.showEvolutionCharts && <EvolutionCharts />}
      {config.showCaseStudies && <CaseStudies />}
      {config.showCertifications && <Certifications />}
      
      <About />
      <Contact />
      <Footer />

      {/* Admin Panel Drawer Trigger & Controls */}
      <AdminPanel config={config} onUpdate={updateConfig} />
    </main>
  );
}
