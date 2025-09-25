import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createLine = (delay: number, angle: number, length: number, color: string) => {
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.top = '50%';
      line.style.left = '50%';
      line.style.width = '2px';
      line.style.height = `${length}px`;
      line.style.background = `linear-gradient(transparent, ${color}, transparent)`;
      line.style.transformOrigin = 'center top';
      line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      line.style.opacity = '0';
      line.style.animation = `vite-lines 4s ease-out ${delay}s infinite`;
      return line;
    };

    if (linesRef.current) {
      // Clear existing lines
      linesRef.current.innerHTML = '';
      
      // Create multiple lines with different angles and delays
      const lines = [
        createLine(0, 0, 800, 'hsl(var(--primary) / 0.4)'),
        createLine(0.2, 30, 600, 'hsl(var(--accent) / 0.3)'),
        createLine(0.4, 60, 700, 'hsl(var(--primary) / 0.2)'),
        createLine(0.6, 90, 650, 'hsl(var(--accent) / 0.4)'),
        createLine(0.8, 120, 750, 'hsl(var(--primary) / 0.3)'),
        createLine(1.0, 150, 600, 'hsl(var(--accent) / 0.2)'),
        createLine(1.2, -30, 680, 'hsl(var(--primary) / 0.3)'),
        createLine(1.4, -60, 720, 'hsl(var(--accent) / 0.3)'),
      ];

      lines.forEach(line => linesRef.current?.appendChild(line));
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Vite-inspired converging lines */}
      <div ref={linesRef} className="absolute inset-0 pointer-events-none z-10" />
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 background-pattern opacity-70" />
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      
      {/* Floating elements with enhanced effects */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-floating animate-radial-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-floating animate-magnetic" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 via-accent/8 to-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Additional glow effects */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-floating" style={{animationDelay: '4s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/8 rounded-full blur-2xl animate-floating" style={{animationDelay: '6s'}} />
      </div>

      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-60 animate-pulse-glow z-20" />
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-shimmer">
              {t.hero.title}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
            {t.hero.subtitle}
          </h2>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base animate-fade-up" style={{animationDelay: '0.4s'}}>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover-lift magnetic-hover">
              <MapPin className="w-4 h-4" />
              {t.hero.location}
            </a>
            <a 
              href="https://linkedin.com/in/markoharasba580" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover-lift magnetic-hover"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="mailto:marco.antonio.jc2000@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover-lift magnetic-hover">
              <Mail className="w-4 h-4" />
              marco.antonio.jc2000@gmail.com
            </a>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{animationDelay: '0.6s'}}>
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex justify-center animate-fade-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="gradient-primary hover-glow group relative overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">
                {t.hero.contactMe}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;