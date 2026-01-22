
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactProps {
  onBack?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget as HTMLFormElement;
    new FormData(form);
    setStatus('sending');

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      // هنا يمكن ربط استدعاء API حقيقي
      setStatus('success');
      form.reset();

      timeoutRef.current = window.setTimeout(() => {
        setStatus(null);
      }, 2000);
    }, 1200);
  };

  const readFields = () => {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);
    const fullName = (data.get('fullName') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const service = (data.get('service') || '').toString().trim();
    if (!fullName || !phone || !service) return null;
    return { fullName, phone, service };
  };

  const buildMessageLines = (fields: { fullName: string; phone: string; service: string }) => [
    t('contact.form.whatsapp.greeting'),
    t('contact.form.whatsapp.text'),
    '',
    `${t('contact.form.whatsapp.name')} ${fields.fullName}`,
    `${t('contact.form.whatsapp.phone')} ${fields.phone}`,
    `${t('contact.form.whatsapp.service')} ${fields.service}`
  ];

  const handleWhatsApp = () => {
    const fields = readFields();
    if (!fields) {
      alert(t('contact.form.alert'));
      return;
    }
    const message = encodeURIComponent(buildMessageLines(fields).join('\n'));
    const url = `https://wa.me/962785085077?text=${message}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const fields = readFields();
    if (!fields) {
      alert(t('contact.form.alert'));
      return;
    }
    const subject = encodeURIComponent(t('contact.form.email.subject'));
    const body = encodeURIComponent(buildMessageLines(fields).join('\n'));
    const url = `mailto:info@med-fitout.com?subject=${subject}&body=${body}`;
    window.location.href = url;
  };

  return (
    <section id="contact" className="pt-32 pb-20 bg-brand-dark text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 text-brand-light font-bold mb-12 hover:text-white transition-all bg-white/5 px-6 py-3 rounded-xl border border-white/10 group ${language === 'en' ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <ArrowRight size={20} className={`group-hover:transition-transform ${language === 'en' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            {t('contact.back')}
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className={language === 'en' ? 'text-left' : 'text-right'}>
            <div className="inline-block px-4 py-1 bg-brand-light/20 text-brand-light font-bold rounded-lg mb-6">{t('contact.badge')}</div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{t('contact.title')}</h3>
            <p className="text-slate-300 text-xl mb-12 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-10">
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <Phone size={32} />
                </div>
                <div className={language === 'en' ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-bold mb-2">{t('contact.phone.title')}</h4>
                  <a
                    href="tel:00962785085077"
                    className="block text-slate-400 text-lg font-mono tracking-wider hover:text-brand-light transition-colors"
                    dir="ltr"
                  >
                    00962785085077
                  </a>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <Mail size={32} />
                </div>
                <div className={language === 'en' ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-bold mb-2">{t('contact.email.title')}</h4>
                  <a href="mailto:info@med-fitout.com" className="block text-slate-400 text-lg font-mono hover:text-brand-light transition-colors">info@med-fitout.com</a>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <MapPin size={32} />
                </div>
                <div className={language === 'en' ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-bold mb-2">{t('contact.location.title')}</h4>
                  <p className="text-slate-400 text-lg">{t('contact.location.text')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 text-slate-900 shadow-2xl">
            <h4 className={`text-3xl font-black mb-10 leading-tight ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('contact.form.title')}</h4>
            
            <form ref={formRef} onSubmit={handleSubmit} className={`space-y-8 ${language === 'en' ? 'text-left' : 'text-right'}`}>
              <div>
                <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required
                  placeholder={t('contact.form.name.placeholder')}
                  name="fullName"
                  className={`w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all font-medium ${language === 'en' ? 'text-left' : 'text-right'}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    required
                    placeholder={t('contact.form.phone.placeholder')}
                    name="phone"
                    className={`w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all font-medium ${language === 'en' ? 'text-left' : 'text-right'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">{t('contact.form.service')}</label>
                  <select
                    required
                    name="service"
                    className={`w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all font-medium ${language === 'en' ? 'text-left' : 'text-right'}`}
                    defaultValue=""
                  >
                    <option value="" disabled>{t('contact.form.service.placeholder')}</option>
                    <option>{t('contact.form.service1')}</option>
                    <option>{t('contact.form.service2')}</option>
                    <option>{t('contact.form.service3')}</option>
                    <option>{t('contact.form.service4')}</option>
                    <option>{t('contact.form.service5')}</option>
                    <option>{t('contact.form.service6')}</option>
                    <option>{t('contact.form.service7')}</option>
                    <option>{t('contact.form.service8')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-4 rounded-[1.25rem] font-black text-lg bg-[#25D366] text-white hover:opacity-90 transition-all shadow-md"
                  >
                    {t('contact.form.whatsapp')}
                  </button>
                  <button
                    type="button"
                    onClick={handleEmail}
                    className="w-full py-4 rounded-[1.25rem] font-black text-lg bg-brand-dark text-white hover:bg-brand-light transition-all shadow-md"
                  >
                    {t('contact.form.email')}
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;




