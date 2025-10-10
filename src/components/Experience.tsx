import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import censoLogo from '@/lib/censo.jpg';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  const getCompanyLogo = (logo: string) => {
    if (logo === 'censo') return censoLogo;
    return logo;
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.experience.title}
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {t.experience.jobs.map((job, index) => {
            const cardAnimation = useScrollAnimation();
            
            return (
              <div 
                key={index}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-6 md:p-8 card-hover scroll-animate ${cardAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {job.companyLogo && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-white">
                      <img 
                        src={getCompanyLogo(job.companyLogo)} 
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {job.position}
                    </h3>
                    <p className="text-lg font-semibold text-foreground mb-2">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                  </div>
                </div>
                <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
              </div>

              <div className="space-y-2 mt-4">
                {job.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;