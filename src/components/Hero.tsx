import React from 'react';
import { MapPin, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated adaptive background */}
      <div className="absolute inset-0 background-pattern" />
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-floating" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            {t.hero.subtitle}
          </h2>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MapPin className="w-4 h-4" />
              {t.hero.location}
            </a>
            <a 
              href="https://linkedin.com/in/markoharasba580" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="mailto:marco.antonio.jc2000@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              marco.antonio.jc2000@gmail.com
            </a>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="gradient-primary hover-glow group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.contactMe}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;