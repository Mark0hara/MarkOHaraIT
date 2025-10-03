import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      {/* Unified star background for entire page */}
      <div className="fixed inset-0 background-pattern opacity-40 dark:opacity-80 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
