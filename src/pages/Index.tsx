import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import ParticlesBackground from '@/components/ParticlesBackground';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { toast } from 'sonner';

const Index = () => {
  // Easter egg: Konami code
  useKonamiCode(() => {
    toast('🎮 Konami Code Activated!', {
      description: 'You found the secret! 🌟',
      duration: 5000,
    });
    
    // Add confetti effect
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#a855f7'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = 'fall 3s linear forwards';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }, i * 50);
    }
  });
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Unified star background for entire page */}
      <div className="fixed inset-0 background-pattern opacity-30 dark:opacity-60 pointer-events-none" />
      
      {/* Particles background */}
      <ParticlesBackground />
      
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
