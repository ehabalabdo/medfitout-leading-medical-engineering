
import React from 'react';
import { UserCheck, Clock, BadgeDollarSign, HeartPulse } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t, language } = useLanguage();
  
  const reasons = [
    {
      titleKey: "why.reason1.title",
      descriptionKey: "why.reason1.description",
      icon: <UserCheck size={32} />
    },
    {
      titleKey: "why.reason2.title",
      descriptionKey: "why.reason2.description",
      icon: <Clock size={32} />
    },
    {
      titleKey: "why.reason3.title",
      descriptionKey: "why.reason3.description",
      icon: <BadgeDollarSign size={32} />
    },
    {
      titleKey: "why.reason4.title",
      descriptionKey: "why.reason4.description",
      icon: <HeartPulse size={32} />
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-20 ${language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`lg:w-1/2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="inline-block px-4 py-1 bg-brand-light/10 text-brand-dark font-bold rounded-lg mb-4">{t('why.badge')}</div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">{t('why.title')}</h3>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed">
              {t('why.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="p-8 border border-slate-100 rounded-[2rem] hover:border-brand-light/30 hover:bg-brand-light/5 transition-all group shadow-sm">
                  <div className="text-brand-light mb-5 group-hover:scale-110 transition-transform">{reason.icon}</div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-3">{t(reason.titleKey)}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{t(reason.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-brand-dark rounded-[4rem] p-1.5 shadow-2xl overflow-hidden aspect-[4/5] relative group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Medical Engineering Consultation" 
                className="w-full h-full object-cover rounded-[3.8rem] opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-dark/10"></div>
            </div>
            {/* Floating Info Card */}
            <div className={`absolute -bottom-10 ${language === 'ar' ? '-right-10' : '-left-10'} bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(26,83,92,0.2)] border border-brand-light/10 max-w-sm ${language === 'ar' ? 'text-right' : 'text-left'} z-20`}>
              <p className="text-brand-dark font-black text-6xl mb-3 tracking-tighter">100%</p>
              <p className="text-slate-900 font-extrabold text-2xl mb-2">{t('why.badge2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
