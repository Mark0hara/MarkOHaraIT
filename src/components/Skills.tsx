import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SkillsCloud from './SkillsCloud';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.skills.title}
          </span>
        </h2>

        {/* 3D Interactive Skills Cloud */}
        <SkillsCloud />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-4 md:p-6 rounded-lg border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 card-hover">
            <h3 className="font-bold text-cyan-600 mb-2 text-base md:text-lg">{t.skills.categories.cloud.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{t.skills.categories.cloud.description}</p>
          </div>
          <div className="glass-card p-4 md:p-6 rounded-lg border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300 card-hover">
            <h3 className="font-bold text-purple-600 mb-2 text-base md:text-lg">{t.skills.categories.development.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{t.skills.categories.development.description}</p>
          </div>
          <div className="glass-card p-4 md:p-6 rounded-lg border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 card-hover">
            <h3 className="font-bold text-blue-600 mb-2 text-base md:text-lg">{t.skills.categories.soft.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{t.skills.categories.soft.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;