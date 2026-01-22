import React from 'react';
import { Languages } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  isScrolled: boolean;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onHome }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 bg-brand-dark/90 backdrop-blur-md shadow-xl ${
      isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-14">
          <button 
            className="cursor-pointer hover:scale-105 transition-transform outline-none border-none bg-transparent" 
            onClick={onHome}
            aria-label="الصفحة الرئيسية"
          >
            <Logo light={true} />
          </button>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-brand-light/10 hover:bg-brand-light/20 text-brand-light rounded-xl transition-all font-bold border border-brand-light/20"
            aria-label="تبديل اللغة"
          >
            <Languages size={20} />
            <span className="text-sm">{language === 'ar' ? 'EN' : 'AR'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
