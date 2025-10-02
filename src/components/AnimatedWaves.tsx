import React from 'react';

const AnimatedWaves = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Wave 1 - Primary color */}
      <div className="absolute bottom-0 w-full h-32 opacity-40">
        <svg className="absolute bottom-0 w-[300%] h-full animate-wave" viewBox="0 0 1800 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1200,100 1500,20 1800,60 C2100,100 2400,20 2700,60 L2700,120 L0,120 Z" className="fill-primary" />
        </svg>
      </div>
      
      {/* Wave 2 - Accent color */}
      <div className="absolute bottom-0 w-full h-32 opacity-50">
        <svg className="absolute bottom-0 w-[300%] h-full animate-wave-slow" viewBox="0 0 1800 120" preserveAspectRatio="none">
          <path d="M0,80 C300,40 600,100 900,80 C1200,60 1500,120 1800,80 C2100,40 2400,100 2700,80 L2700,120 L0,120 Z" className="fill-accent" />
        </svg>
      </div>
      
      {/* Wave 3 - Secondary color */}
      <div className="absolute bottom-0 w-full h-32 opacity-70">
        <svg className="absolute bottom-0 w-[300%] h-full animate-wave-slower" viewBox="0 0 1800 120" preserveAspectRatio="none">
          <path d="M0,50 C300,90 600,30 900,70 C1200,110 1500,50 1800,70 C2100,30 2400,90 2700,70 L2700,120 L0,120 Z" className="fill-secondary" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedWaves;
