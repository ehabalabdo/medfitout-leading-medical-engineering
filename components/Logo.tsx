
import React, { useState } from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
}

/**
 * MEDFITOUT Logo Component
 * Fixed: Added return statement and default export to resolve TS and import errors.
 */
const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-3 ${className}`}>
      {!imageError && (
        <img 
          src="/medfitout-logo.png" 
          alt="MEDFITOUT Logo" 
          className="h-10 w-10 md:h-14 md:w-14 object-contain" 
          onError={() => setImageError(true)}
          loading="lazy"
          width={56}
          height={56}
        />
      )}
      <div className={`flex flex-col leading-none ${light ? 'text-white' : 'text-brand-dark'} text-center md:text-right`}>
        <span className="text-2xl md:text-3xl font-black tracking-tighter">
          MED<span className="text-brand-light">FITOUT</span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-70">
          Medical Engineering Consultancy
        </span>
      </div>
    </div>
  );
};

export default Logo;
