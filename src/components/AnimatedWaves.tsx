import React from 'react';

const AnimatedWaves = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Wave 1 - Primary color */}
      <div className="absolute bottom-0 w-full h-32 opacity-40">
        <svg className="absolute bottom-0 w-[200%] h-full animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" className="fill-primary" />
        </svg>
      </div>
      
      {/* Wave 2 - Accent color */}
      <div className="absolute bottom-0 w-full h-32 opacity-50">
        <svg className="absolute bottom-0 w-[200%] h-full animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C200,40 400,100 600,80 C800,60 1000,120 1200,80 L1200,120 L0,120 Z" className="fill-accent" />
        </svg>
      </div>
      
      {/* Wave 3 - Secondary color */}
      <div className="absolute bottom-0 w-full h-32 opacity-70">
        <svg className="absolute bottom-0 w-[200%] h-full animate-wave-slower" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C200,90 400,30 600,70 C800,110 1000,50 1200,70 L1200,120 L0,120 Z" className="fill-secondary" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedWaves;
