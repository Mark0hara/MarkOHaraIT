import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
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

  const getTechnologyImage = (tech: string) => {
    const images: { [key: string]: string } = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'AWS CloudWatch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'AWS Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'Zabbix': 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'GNS3': 'https://www.gns3.com/assets/custom/gns3/images/logo-colour.png',
      'Networking': 'https://cdn-icons-png.flaticon.com/512/1183/1183621.png',
      'Redes': 'https://cdn-icons-png.flaticon.com/512/1183/1183621.png',
      'Cisco': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg',
      'OSPF': 'https://cdn-icons-png.flaticon.com/512/1183/1183621.png',
      'Boto3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'Lovable': 'https://lovable.app/favicon.ico',
    };
    
    return images[tech] || '';
  };

  return (
    <section id="portfolios" className="py-20 px-4 relative overflow-hidden">
      
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

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.portfolios.projects.map((project, index) => {
            const projectAnimation = useScrollAnimation();
            
            return (
              <Card 
                key={index}
                ref={projectAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card card-hover overlay-gradient group scroll-scale ${projectAnimation.isVisible ? 'visible' : ''}`}
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
                  <h4 className="text-sm font-semibold mb-3 text-foreground">{t.portfolios.technologiesUsed}</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => {
                      const techImage = getTechnologyImage(tech);
                      return (
                        <div 
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-all duration-300 pop-hover border-glow-animate"
                        >
                          {techImage ? (
                            <img 
                              src={techImage} 
                              alt={tech} 
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : null}
                          <span className="text-xs font-medium">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 btn-hover-effect btn-shine arrow-hover group/btn transition-all duration-300 hover:-translate-y-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    {t.portfolios.viewCode}
                    <ArrowRight className="w-4 h-4 ml-auto arrow-icon" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="btn-hover-effect ripple-effect transition-all duration-300 hover:-translate-y-1"
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