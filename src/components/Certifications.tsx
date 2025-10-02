import React from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();
  const languagesTitleAnimation = useScrollAnimation();

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {t.certifications.items.map((cert: any, index: number) => {
            const certAnimation = useScrollAnimation();
            const isInProgress = cert.status.toLowerCase().includes('progress') || cert.status.toLowerCase().includes('progreso');
            
            return (
              <div 
                key={index}
                ref={certAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-6 card-hover group scroll-scale ${certAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-secondary/50">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <Badge 
                        variant={isInProgress ? "secondary" : "default"}
                        className="flex items-center gap-1 whitespace-nowrap"
                      >
                        {isInProgress ? (
                          <>
                            <Clock className="w-3 h-3" />
                            {cert.status}
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            {cert.status}
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Professional Certification</span>
                    </div>
                  </div>
                </div>
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