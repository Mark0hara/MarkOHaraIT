import React from 'react';
import { Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();
  const languagesTitleAnimation = useScrollAnimation();

  const certIcons = [
    { icon: Award, color: 'text-primary' },
    { icon: Globe, color: 'text-accent' },
    { icon: Award, color: 'text-primary' },
    { icon: Globe, color: 'text-accent' },
    { icon: Award, color: 'text-primary' },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.certifications.title}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {t.certifications.items.map((cert, index) => {
            const IconComponent = certIcons[index].icon;
            const colorClass = certIcons[index].color;
            const certAnimation = useScrollAnimation();
            
            return (
              <div 
                key={index}
                ref={certAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-6 text-center card-hover group scroll-scale ${certAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4 ${colorClass} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {cert}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="max-w-2xl mx-auto">
          <h3 
            ref={languagesTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-2xl md:text-3xl font-bold text-center mb-8 scroll-animate ${languagesTitleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.languages.title}
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.values(t.languages.items).map((lang, index) => {
              const langAnimation = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={langAnimation.ref as React.RefObject<HTMLDivElement>}
                  className={`glass-card rounded-lg p-4 text-center card-hover scroll-scale ${langAnimation.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <p className="text-foreground font-medium">{lang}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;