
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

interface ContactProps {
  onBack?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [status, setStatus] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

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

  return (
    <section id="contact" className="pt-32 pb-20 bg-brand-dark text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-light font-bold mb-12 hover:text-white transition-all bg-white/5 px-6 py-3 rounded-xl border border-white/10 group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            العودة للرئيسية
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="text-right">
            <div className="inline-block px-4 py-1 bg-brand-light/20 text-brand-light font-bold rounded-lg mb-6">تواصل معنا</div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">لنبدأ رحلة نجاحك</h3>
            <p className="text-slate-300 text-xl mb-12 leading-relaxed">
              نحن هنا لنكون مستشارك الفني الأول. تواصل معنا لمناقشة مشروعك الطبي القادم.
            </p>

            <div className="space-y-10">
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">اتصل بنا</h4>
                  <p className="text-slate-400 text-lg font-mono tracking-wider" dir="ltr">00962797973766</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">البريد الإلكتروني</h4>
                  <p className="text-slate-400 text-lg font-mono">info@med-fitout.com</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-light/10 border border-brand-light/30 rounded-2xl flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">موقعنا</h4>
                  <p className="text-slate-400 text-lg">عمان، الأردن</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 text-slate-900 shadow-2xl">
            <h4 className="text-3xl font-black mb-10 text-right leading-tight">احجز موعد استشارة فنية</h4>
            
            <form onSubmit={handleSubmit} className="space-y-8 text-right">
              <div>
                <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">الاسم الكامل</label>
                <input 
                  type="text" 
                  required
                  placeholder="د. ...."
                  className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all text-right font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="000 xxxxxxx"
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all text-right font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-brand-dark mb-3 uppercase tracking-wider">نوع المشروع</label>
                  <input 
                    type="text" 
                    placeholder="عيادة، مركز طبي..."
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-brand-light focus:bg-white transition-all text-right font-medium"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full py-6 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-brand-dark text-white hover:bg-brand-light shadow-brand-dark/20'
                }`}
              >
                {status === 'sending' ? 'جاري الإرسال...' : status === 'success' ? 'تم الإرسال بنجاح' : 'إرسال الطلب'}
                <Send size={24} className={status === 'sending' ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
