import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      // Add trail point
      const newTrailPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail(prev => [...prev.slice(-8), newTrailPoint]);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] rounded-full bg-primary/20"
          style={{
            left: point.x,
            top: point.y,
            width: '8px',
            height: '8px',
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.5,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2 border-primary transition-all duration-150 ease-out ${
          isPointer ? 'scale-150 bg-primary/20' : 'scale-100 bg-transparent'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: '32px',
          height: '32px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          left: position.x,
          top: position.y,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
