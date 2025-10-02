import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Shield, Terminal, Network, Box, Activity, Mail, Code, Server, BookOpen, Users, Brain, Globe, Cloud, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsCloud = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const iconMap: Record<string, typeof Cloud> = {
    'AWS': Cloud,
    'Linux': Terminal,
    'Networking': Network,
    'Zabbix': Activity,
    'Microsoft 365': Mail,
    'Windows Server': Server,
    'Cybersecurity': Shield,
    'Ciberseguridad': Shield,
    'Virtualization': Box,
    'Virtualización': Box,
    'Python': Code,
    'PowerShell': Terminal,
    'ITIL': BookOpen,
    'Leadership': Users,
    'Liderazgo': Users,
    'Teamwork': Users,
    'Trabajo en equipo': Users,
    'Analytical Thinking': Brain,
    'Pensamiento analítico': Brain,
    'Advanced English': Globe,
    'Inglés Avanzado': Globe
  };

  const skills = useMemo(() => {
    const cloudSkills = t.skills.cloud.map((skill: { name: string; description: string }) => ({ ...skill, color: '#06b6d4' }));
    const devSkills = t.skills.development.map((skill: { name: string; description: string }) => ({ ...skill, color: '#c084fc' }));
    const softSkills = t.skills.softSkills.map((skill: { name: string; description: string }) => ({ ...skill, color: '#3b82f6' }));
    
    return [...cloudSkills, ...devSkills, ...softSkills];
  }, [t.skills]);

  const [tagPositions, setTagPositions] = useState<Array<{ x: number; y: number; z: number }>>([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const touchRef = useRef({ startX: 0, startY: 0, currentX: 0, currentY: 0, touching: false });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const radius = 160;
    const newPositions = skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      };
    });
    setTagPositions(newPositions);
  }, [skills]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && !touchRef.current.touching) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = (e.clientX - centerX) / rect.width;
        const mouseY = (e.clientY - centerY) / rect.height;
        
        targetRotationRef.current = {
          x: mouseY * 0.5,
          y: mouseX * 0.5
        };
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchRef.current.touching = true;
      touchRef.current.startX = e.touches[0].clientX;
      touchRef.current.startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchRef.current.touching) {
        const deltaX = e.touches[0].clientX - touchRef.current.startX;
        const deltaY = e.touches[0].clientY - touchRef.current.startY;
        
        targetRotationRef.current = {
          x: deltaY * 0.01,
          y: deltaX * 0.01
        };
      }
    };

    const handleTouchEnd = () => {
      touchRef.current.touching = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    let autoRotation = { x: 0, y: 0 };
    
    const animate = () => {
      autoRotation.y += 0.008;
      autoRotation.x += 0.003;
      
      setRotation({
        x: autoRotation.x + targetRotationRef.current.x,
        y: autoRotation.y + targetRotationRef.current.y
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const rotatePoint = (x: number, y: number, z: number, angleX: number, angleY: number) => {
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const x1 = x * cosY - z * sinY;
    const z1 = z * cosY + x * sinY;
    
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const y1 = y * cosX - z1 * sinX;
    const z2 = z1 * cosX + y * sinX;
    
    return { x: x1, y: y1, z: z2 };
  };

  const rotatedPositions = useMemo(() => {
    if (tagPositions.length === 0) return [];
    return tagPositions.map(pos => {
      const rotated = rotatePoint(pos.x, pos.y, pos.z, rotation.x, rotation.y);
      const scale = (rotated.z + 250) / 500;
      const opacity = 0.3 + (scale * 0.7);
      const zIndex = Math.round(rotated.z);
      return { ...rotated, scale, opacity, zIndex };
    });
  }, [tagPositions, rotation]);

  const handleTagHover = (e: React.MouseEvent, index: number) => {
    setHoveredTag(index);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full flex items-center justify-center p-4 md:p-8 relative">
      <div className="text-center relative z-10 w-full">
        <p className="text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          {t.skills.subtitle}
        </p>
        
        <div 
          ref={containerRef}
          className="relative mx-auto touch-none"
          style={{ 
            width: '100%',
            maxWidth: '600px',
            height: 'min(600px, 80vh)',
            perspective: '1000px'
          }}
        >
          {rotatedPositions.map((rotated, i) => {
            const isHovered = hoveredTag === i;
            const skill = skills[i];
            const Icon = iconMap[skill.name] || Code;

            return (
              <div
                key={i}
                className="absolute cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate3d(${rotated.x}px, ${rotated.y}px, 0) scale(${isHovered ? rotated.scale * 1.5 : rotated.scale})`,
                  opacity: hoveredTag !== null ? (isHovered ? 1 : 0.15) : rotated.opacity,
                  filter: hoveredTag !== null && !isHovered ? 'blur(2px)' : 'none',
                  zIndex: isHovered ? 9999 : rotated.zIndex,
                  willChange: 'transform, opacity, filter',
                  transition: 'opacity 0.2s ease-out, filter 0.2s ease-out, transform 0.05s linear'
                }}
                onMouseEnter={(e) => handleTagHover(e, i)}
                onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <div 
                  className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm transition-all duration-200"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    border: `2px solid ${skill.color}`,
                    boxShadow: isHovered ? `0 8px 20px ${skill.color}40` : 'none'
                  }}
                >
                  <Icon 
                    size={isHovered ? 20 : 16} 
                    style={{ color: skill.color }}
                    className="transition-all duration-200"
                  />
                  <span 
                    className="font-semibold whitespace-nowrap transition-all duration-200"
                    style={{ 
                      color: skill.color,
                      fontSize: `${10 + rotated.scale * 6}px`,
                      fontWeight: isHovered ? 'bold' : 'semibold'
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 flex gap-3 md:gap-4 justify-center items-center text-xs md:text-sm text-muted-foreground flex-wrap px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span>{t.skills.categories.cloud.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>{t.skills.categories.development.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>{t.skills.categories.soft.title}</span>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredTag !== null && (
        <div 
          className="fixed z-[10000] pointer-events-none transition-opacity duration-200"
          style={{
            left: `${tooltipPos.x + 20}px`,
            top: `${tooltipPos.y - 40}px`
          }}
        >
          <div 
            className="px-4 py-3 rounded-lg shadow-xl backdrop-blur-md max-w-xs glass-card"
            style={{
              border: `2px solid ${skills[hoveredTag].color}`
            }}
          >
            <div className="font-bold mb-1" style={{ color: skills[hoveredTag].color }}>
              {skills[hoveredTag].name}
            </div>
            <div className="text-sm text-muted-foreground">
              {skills[hoveredTag].description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsCloud;
