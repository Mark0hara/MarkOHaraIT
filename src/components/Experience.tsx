import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.experience.title}
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {t.experience.jobs.map((job, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg p-6 md:p-8 hover-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
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
                <Briefcase className="w-8 h-8 text-primary mt-4 md:mt-0" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;