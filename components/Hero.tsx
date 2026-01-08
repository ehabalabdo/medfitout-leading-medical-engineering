
import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0a1f22]">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=85&w=2200" 
          alt="Advanced Medical Architecture"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          width={2200}
          height={1467}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f22]/95 via-[#0a1f22]/80 to-[#0a1f22]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <h1 className="text-5xl md:text-[84px] font-[900] text-white mb-10 leading-[1.1] tracking-tight">
            نجمع بين دقة <span className="text-brand-light">الطب</span> <br className="hidden md:block" /> 
            وعبقرية <span className="text-brand-light">الهندسة</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
            تأسست MEDFITOUT لتكون الشريك الهندسي الأول للأطباء والمستثمرين في القطاع الصحي.
          </p>
          
          <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-6 w-full sm:w-auto">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-14 py-6 bg-brand-light text-brand-dark rounded-2xl font-black text-xl hover:bg-white transition-all shadow-2xl shadow-brand-light/30 flex items-center justify-center gap-3 group"
            >
              اطلب استشارة فوراً
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={26} />
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-14 py-6 bg-transparent text-white border-2 border-white/20 rounded-2xl font-extrabold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              خدماتنا المتخصصة
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3 text-white/70">
              <CheckCircle2 className="text-brand-light" size={22} />
              <span className="text-lg font-bold text-center">معايير وزارة الصحة</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <CheckCircle2 className="text-brand-light" size={22} />
              <span className="text-lg font-bold text-center">استشارات فنية مستقلة</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <CheckCircle2 className="text-brand-light" size={22} />
              <span className="text-lg font-bold text-center">حلول "تسليم مفتاح"</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-brand-light to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
