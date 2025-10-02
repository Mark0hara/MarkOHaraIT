import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.education.title}
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-lg p-8 hover-glow animate-fade-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg gradient-primary flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {t.education.degree}
                </h3>
                <p className="text-lg font-semibold mb-3">
                  {t.education.university}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {t.education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t.education.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;