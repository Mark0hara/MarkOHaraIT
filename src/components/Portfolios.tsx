import React from 'react';
import { Github, ExternalLink, Code2, Wrench, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import PortfolioNavbar from './PortfolioNavbar';

const Portfolios: React.FC = () => {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    if (status === 'Completed' || status === 'Completado') {
      return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
    }
    return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
  };

  const getTechnologyIcon = (tech: string) => {
    if (tech.toLowerCase().includes('python') || tech.toLowerCase().includes('aws')) {
      return <Code2 className="w-4 h-4" />;
    }
    if (tech.toLowerCase().includes('kaspersky') || tech.toLowerCase().includes('security') || tech.toLowerCase().includes('seguridad')) {
      return <Shield className="w-4 h-4" />;
    }
    return <Wrench className="w-4 h-4" />;
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <PortfolioNavbar />
        <div className="pt-16">
          {/* Background */}
          <div className="absolute inset-0 background-pattern opacity-50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.portfolios.title}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              {t.portfolios.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.portfolios.projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 glass-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                          {getTechnologyIcon(tech)}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View Code
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex items-center gap-2 hover-glow"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Let's Build Something Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to collaborating on interesting projects and exploring new opportunities.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary hover-glow"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Portfolios;