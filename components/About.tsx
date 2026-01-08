
import React from 'react';
import { Target, Search } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-light/10 rounded-full z-0"></div>
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

          <div className="text-right">
            <div className="inline-block px-4 py-1 bg-brand-light/10 text-brand-dark font-bold rounded-lg mb-4">من نحن</div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
              MEDFITOUT: الريادة في الهندسة الطبية المتكاملة
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              نحن لسنا مجرد شركة تصميم داخلي أو مقاولات تقليدية؛ نحن شركة استشارات هندسية متخصصة تتقن لغة الطب والهندسة معاً. نهدف لسد الفجوة بين المتطلبات الطبية الدقيقة والتنفيذ الهندسي على أرض الواقع.
            </p>

            <div className="grid gap-6">
              <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-brand-light/20 transition-all">
                <div className="flex-shrink-0 bg-brand-dark p-4 rounded-2xl text-brand-light h-fit">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">رؤيتنا</h4>
                  <p className="text-slate-600 text-lg">ضمان إنشاء عيادات ومراكز طبية حديثة، عملية، ومجدية اقتصادياً بأعلى المعايير العالمية.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-brand-light/20 transition-all">
                <div className="flex-shrink-0 bg-brand-dark p-4 rounded-2xl text-brand-light h-fit">
                  <Search size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">دراسة الأجهزة الطبية</h4>
                  <p className="text-slate-600 text-lg">نحن لا نبيع الأجهزة، بل نكون مستشارك الأمين لنخبرك أي جهاز هو الأنسب لاختصاصك وميزانيتك.</p>
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
