import React from 'react';
import { Shield, Cloud, Headphones, Code, Heart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillIcons = {
    cybersecurity: Shield,
    cloud: Cloud,
    support: Headphones,
    programming: Code,
  };

  const skillLevels = {
    cybersecurity: 85,
    cloud: 90,
    support: 95,
    programming: 80,
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.skills.title}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(t.skills.categories).map(([key, category]) => {
            const Icon = skillIcons[key as keyof typeof skillIcons];
            const level = skillLevels[key as keyof typeof skillLevels];
            
            return (
              <div 
                key={key}
                className="glass-card rounded-lg p-6 hover-glow animate-fade-up hover-lift magnetic-hover group"
                style={{animationDelay: `${Object.keys(t.skills.categories).indexOf(key) * 0.2}s`}}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg gradient-primary group-hover:animate-radial-pulse transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-gradient-shimmer transition-all duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{level}%</span>
                  </div>
                  <Progress value={level} className="h-2" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card rounded-lg p-6 hover-glow animate-fade-up hover-lift magnetic-hover group" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-primary group-hover:animate-radial-pulse transition-all duration-300">
                <Heart className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-gradient-shimmer transition-all duration-300">{t.skills.soft.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {t.skills.soft.items.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-up"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;