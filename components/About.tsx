
import React from 'react';
import { Target, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${language === 'en' ? 'lg:grid-flow-col-dense' : ''}`}>
          
          <div className={`relative ${language === 'en' ? 'lg:col-start-2' : ''}`}>
            <div className={`absolute -top-10 ${language === 'ar' ? '-right-10' : '-left-10'} w-72 h-72 bg-brand-light/10 rounded-full z-0`}></div>
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical Engineering Office" 
                  className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover transform translate-y-12"
                  loading="lazy"
                  width={800}
                  height={533}
                />
              </div>
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinic Design Sketch" 
                  className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover"
                  loading="lazy"
                  width={800}
                  height={533}
                />
              </div>
            </div>
          </div>

          <div className={`${language === 'ar' ? 'text-right' : 'text-left'} ${language === 'en' ? 'lg:col-start-1' : ''}`}>
            <div className="inline-block px-4 py-1 bg-brand-light/10 text-brand-dark font-bold rounded-lg mb-4">{t('about.badge')}</div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
              {t('about.title')}
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid gap-6">
              <div className={`flex gap-6 p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-brand-light/20 transition-all ${language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-shrink-0 bg-brand-dark p-4 rounded-2xl text-brand-light h-fit">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">{t('about.vision.title')}</h4>
                  <p className="text-slate-600 text-lg">{t('about.vision.description')}</p>
                </div>
              </div>

              <div className={`flex gap-6 p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-brand-light/20 transition-all ${language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-shrink-0 bg-brand-dark p-4 rounded-2xl text-brand-light h-fit">
                  <Search size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">{t('about.equipment.title')}</h4>
                  <p className="text-slate-600 text-lg">{t('about.equipment.description')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
