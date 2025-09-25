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
    cloud: 80,
    support: 90,
    programming: 60,
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
                className="glass-card rounded-lg p-6 hover-glow animate-fade-up"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg gradient-primary">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
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
          <div className="glass-card rounded-lg p-6 hover-glow animate-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-primary">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{t.skills.soft.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {t.skills.soft.items.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
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