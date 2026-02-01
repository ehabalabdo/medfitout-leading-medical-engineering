
import React from 'react';
import { ClipboardCheck, Layout, Settings2, ShieldCheck, ArrowRight, Globe, MonitorSmartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  onBack?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      titleKey: "services.service1.title",
      subtitleKey: "services.service1.subtitle",
      icon: <ClipboardCheck size={36} />,
      descriptionKey: "services.service1.description",
      featureKeys: [
        "services.service1.feature1",
        "services.service1.feature2"
      ]
    },
    {
      titleKey: "services.service2.title",
      subtitleKey: "services.service2.subtitle",
      icon: <Layout size={36} />,
      descriptionKey: "services.service2.description",
      featureKeys: [
        "services.service2.feature1",
        "services.service2.feature2",
        "services.service2.feature3"
      ]
    },
    {
      titleKey: "services.service3.title",
      subtitleKey: "services.service3.subtitle",
      icon: <Settings2 size={36} />,
      descriptionKey: "services.service3.description",
      featureKeys: [
        "services.service3.feature1",
        "services.service3.feature2",
        "services.service3.feature3",
        "services.service3.feature4"
      ]
    },
  ];

  return (
    <section id="services" className="pt-32 pb-20 bg-slate-50 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 text-brand-dark font-bold mb-12 hover:text-brand-light transition-all bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 group ${language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <ArrowRight size={20} className={`group-hover:${language === 'ar' ? 'translate-x-1' : '-translate-x-1'} transition-transform ${language === 'en' ? 'rotate-180' : ''}`} />
            {t('services.back')}
          </button>
        )}

        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-brand-dark/5 text-brand-dark font-bold rounded-lg mb-4">{t('services.badge')}</div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 text-center">{t('services.title')}</h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed text-center">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.titleKey} 
              className={`bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-light/10 transition-all duration-500 border border-slate-100 group hover:-translate-y-3 ${language === 'ar' ? 'text-right' : 'text-left'} flex flex-col h-full`}
            >
              <div className="w-20 h-20 bg-brand-light/10 text-brand-dark rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-brand-dark mb-2">{t(service.titleKey)}</h4>
              <p className="text-brand-light font-bold text-sm tracking-wider uppercase mb-6">{t(service.subtitleKey)}</p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{t(service.descriptionKey)}</p>
              
              <ul className="space-y-4 mt-auto">
                {service.featureKeys.map((featureKey, fIndex) => (
                  <li key={fIndex} className={`flex items-start gap-4 text-slate-700 font-medium ${language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <ShieldCheck size={20} className="text-brand-light mt-1 flex-shrink-0" />
                    <span>{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
