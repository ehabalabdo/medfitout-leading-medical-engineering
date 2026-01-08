
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type View = 'main' | 'services' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('main');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} onHome={() => navigateTo('main')} />
      
      <main className="flex-grow">
        {currentView === 'main' && (
          <>
            <Hero onNavigate={navigateTo} />
            <About />
            <WhyChooseUs />
          </>
        )}

        {currentView === 'services' && (
          <div className="animate-fade-in">
            <Services onBack={() => navigateTo('main')} />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="animate-fade-in">
            <Contact onBack={() => navigateTo('main')} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
