import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { CaseStudies } from '@/components/CaseStudies';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080a] text-[#f4f5f8] selection:bg-[#00f0ff] selection:text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
