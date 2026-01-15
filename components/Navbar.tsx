import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onHome }) => {
  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 bg-brand-dark/90 backdrop-blur-md shadow-xl ${
      isScrolled ? 'py-4' : 'py-10 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20 md:h-16">
          <button 
            className="cursor-pointer hover:scale-105 transition-transform outline-none border-none bg-transparent" 
            onClick={onHome}
            aria-label="?????? ????????"
          >
            <Logo light={true} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
