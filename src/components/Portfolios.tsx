import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PortfolioNavbar from './PortfolioNavbar';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolios: React.FC = () => {
  const { t } = useLanguage();

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
    // Simple icon mapping - you can expand this
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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground">
        <PortfolioNavbar />
        
        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 background-pattern opacity-30" />
            <div className="absolute inset-0 gradient-hero animate-gradient" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient-shimmer">
                    {t.portfolios.title}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.portfolios.subtitle}
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {t.portfolios.projects.map((project, index) => (
                  <Card 
                    key={index} 
                    className="glass-card hover-glow transition-all duration-300 hover:scale-105 hover-lift magnetic-hover group animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
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
                          className="flex-1 hover-glow group/btn"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Code
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="hover-glow"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center">
                <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto hover-glow">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {t.portfolios.cta.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t.portfolios.cta.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="gradient-primary hover-glow group"
                      onClick={() => {
                        window.location.href = '/#contact';
                      }}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {t.portfolios.cta.button}
                      </span>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="hover-glow group"
                      onClick={() => {
                        window.open('https://github.com/Mark0hara/MarkOHaraIT', '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Portfolios;