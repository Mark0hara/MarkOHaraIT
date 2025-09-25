import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#certifications', label: t.nav.certifications },
    { href: '/portfolios', label: t.nav.portfolios },
    { href: '#contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card shadow-2xl backdrop-blur-xl' : 'bg-background/60 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gradient-shimmer">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group animate-fade-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className="hover-glow hover-lift magnetic-hover"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                )}
              </Button>
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="hover-glow hover-lift magnetic-hover group"
              >
                <Globe className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="hover-lift"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="hover-lift"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="hover-lift"
            >
              {isMobileMenuOpen ? <X className="rotate-90 transition-transform duration-300" /> : <Menu className="group-hover:scale-110 transition-transform duration-300" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in glass-card rounded-lg mt-2 mx-4">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 animate-fade-up"
                style={{animationDelay: `${idx * 0.1}s`}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;