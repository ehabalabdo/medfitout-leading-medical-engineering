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
    <div className={`flex flex-row items-center gap-2 md:gap-3 flex-shrink-0 ${className}`}>
      {!imageError && (
        <img 
          src="/medfitout-logo.png" 
          alt="MEDFITOUT Logo" 
          className="h-8 w-8 md:h-14 md:w-14 object-contain flex-shrink-0" 
          onError={() => setImageError(true)}
          loading="lazy"
          width={56}
          height={56}
        />
      )}
      <div className={`flex flex-col leading-tight ${light ? 'text-white' : 'text-brand-dark'} text-right whitespace-nowrap`}>
        <span className="text-base md:text-3xl font-black tracking-tighter">
          MED<span className="text-brand-light">FITOUT</span>
        </span>
        <span className="hidden md:block text-[9px] font-bold tracking-[0.2em] uppercase opacity-70">
          Medical Engineering Consultancy
        </span>
      </div>
    </div>
  );
};

export default Logo;
