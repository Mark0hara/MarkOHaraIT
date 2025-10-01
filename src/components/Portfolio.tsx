import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'completado':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'in progress':
      case 'en progreso':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'planned':
      case 'planeado':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTechnologyIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      'Python': '🐍',
      'AWS': '☁️',
      'Kaspersky': '🛡️',
      'MySQL': '🗄️',
      'JavaScript': '⚡',
      'React': '⚛️',
      'Node.js': '🟢',
      'Docker': '🐳',
    };
    
    return icons[tech] || '⚙️';
  };

  return (
    <section id="portfolio" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 background-pattern opacity-30" />
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 
            ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-6xl font-bold mb-6 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="text-gradient-shimmer">
              {t.portfolios.title}
            </span>
          </h2>
          <p 
            ref={subtitleAnimation.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-xl text-muted-foreground mb-8 leading-relaxed scroll-animate ${subtitleAnimation.isVisible ? 'visible' : ''}`}
            style={{transitionDelay: '0.2s'}}
          >
            {t.portfolios.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.portfolios.projects.map((project, index) => {
            const projectAnimation = useScrollAnimation();
            
            return (
              <Card 
                key={index}
                ref={projectAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card card-hover group scroll-scale ${projectAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg group-hover:text-gradient-shimmer transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center gap-1 px-3 py-1 bg-secondary/50 rounded-full text-xs hover:bg-secondary transition-colors duration-300"
                      >
                        <span>{getTechnologyIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 btn-hover-effect group/btn transition-all duration-300 hover:-translate-y-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="btn-hover-effect transition-all duration-300 hover:-translate-y-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;