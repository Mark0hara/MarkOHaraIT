import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';
import { db, analytics } from '@/lib/firebase';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedWaves from '@/components/AnimatedWaves';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const titleAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'new' 
      });

      logEvent(analytics, 'form_submit', {
        form_name: 'contact_form',
        success: true
      });

      toast({
        title: t.contact.form.success,
        description: 'Tu mensaje ha sido enviado exitosamente.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      
      logEvent(analytics, 'form_submit', {
        form_name: 'contact_form',
        success: false,
        error: error.message
      });

      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSocialClick = (platform: string, url: string) => {
    logEvent(analytics, 'social_link_click', {
      platform: platform,
      url: url
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated star background */}
      <div className="absolute inset-0 background-pattern" />
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-floating" style={{animationDelay: '3s'}} />
      </div>
      
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedWaves />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-4 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.contact.title}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            ref={formAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`glass-card rounded-lg p-6 md:p-8 card-hover scroll-scale ${formAnimation.isVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
              <Input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
              <Input
                type="text"
                name="subject"
                placeholder={t.contact.form.subject}
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
              <Textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/50"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gradient-primary btn-hover-effect transition-all duration-300 hover:-translate-y-1"
              >
                {isSubmitting ? (
                  t.contact.form.sending
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.form.send}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {(() => {
              const emailAnimation = useScrollAnimation();
              return (
                <div 
                  ref={emailAnimation.ref as React.RefObject<HTMLDivElement>}
                  className={`glass-card rounded-lg p-6 card-hover scroll-scale ${emailAnimation.isVisible ? 'visible' : ''}`}
                >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:marco.antonio.jc2000@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => handleSocialClick('email', 'marco.antonio.jc2000@gmail.com')}
                  >
                    marco.antonio.jc2000@gmail.com
                  </a>
                </div>
              </div>
            </div>
              );
            })()}

            {(() => {
              const linkedinAnimation = useScrollAnimation();
              return (
                <div 
                  ref={linkedinAnimation.ref as React.RefObject<HTMLDivElement>}
                  className={`glass-card rounded-lg p-6 card-hover scroll-scale ${linkedinAnimation.isVisible ? 'visible' : ''}`}
                  style={{transitionDelay: '0.1s'}}
                >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                   <a 
                     href="https://linkedin.com/in/markoharasba580" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-foreground hover:text-primary transition-colors"
                     onClick={() => handleSocialClick('linkedin', 'https://linkedin.com/in/markoharasba580')}
                   >
                     /in/Mark_O'Hara
                   </a>
                </div>
              </div>
            </div>
              );
            })()}

            {(() => {
              const githubAnimation = useScrollAnimation();
              return (
                <div 
                  ref={githubAnimation.ref as React.RefObject<HTMLDivElement>}
                  className={`glass-card rounded-lg p-6 card-hover scroll-scale ${githubAnimation.isVisible ? 'visible' : ''}`}
                  style={{transitionDelay: '0.2s'}}
                >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                   <a 
                     href="https://github.com/Mark0hara/MarkOHaraIT" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-foreground hover:text-primary transition-colors"
                     onClick={() => handleSocialClick('github', 'https://github.com/Mark0hara/MarkOHaraIT')}
                   >
                     MarkOHaraIT
                   </a>
                </div>
              </div>
            </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;