
import React from 'react';
import { ClipboardCheck, Layout, Settings2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onBack?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBack }) => {
  const services = [
    {
      title: "استشارات ما قبل التأسيس",
      subtitle: "Technical Consultancy",
      icon: <ClipboardCheck size={36} />,
      description: "نساعدك في البداية الصحيحة لتجنب الأخطاء المكلفة لاحقاً.",
      features: [
        "دراسة العقارات وتقييم صلاحيتها للترخيص",
        "دراسة العروض الفنية للأجهزة الطبية",
        "مستشارك الأمين لاختيار الأجهزة الأنسب لميزانيتك"
      ]
    },
    {
      title: "التصميم الهندسي المتخصص",
      subtitle: "Specialized Design",
      icon: <Layout size={36} />,
      description: "توزيع يجمع بين الجمالية والوظيفة الطبية المعقدة.",
      features: [
        "مراعاة رحلة المريض (Patient Journey)",
        "مخططات كهروميكانيكية (MEP) دقيقة جداً",
        "توزيع فراغي مدروس يضمن كفاءة التشغيل"
      ]
    },
    {
      title: "إدارة المشاريع والإشراف",
      subtitle: "Project Management",
      icon: <Settings2 size={36} />,
      description: "نحن عينك التقنية وممثلك الفني أمام المقاولين.",
      features: [
        "ضبط الجودة والجدول الزمني للتنفيذ",
        "الهندسة القيمية (Value Engineering) لضبط التكاليف",
        "الإشراف الميداني لضمان تنفيذ المخططات بدقة",
        "تسليم مفتاح العيادة جاهزة للعمل تماماً"
      ]
    }
  ];

  return (
    <section id="services" className="pt-32 pb-20 bg-slate-50 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-dark font-bold mb-12 hover:text-brand-light transition-all bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            العودة للرئيسية
          </button>
        )}

        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-brand-dark/5 text-brand-dark font-bold rounded-lg mb-4">خدماتنا</div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 text-center">حلول شاملة ومتكاملة</h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed text-center">
            ندرك التحديات التي يواجهها الطبيب عند التأسيس، لذا نقدم خدمات متكاملة تغطي كافة الجوانب الفنية والهندسية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-light/10 transition-all duration-500 border border-slate-100 group hover:-translate-y-3 text-right flex flex-col h-full"
            >
              <div className="w-20 h-20 bg-brand-light/10 text-brand-dark rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-brand-dark mb-2">{service.title}</h4>
              <p className="text-brand-light font-bold text-sm tracking-wider uppercase mb-6">{service.subtitle}</p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-4 mt-auto">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4 text-slate-700 font-medium">
                    <ShieldCheck size={20} className="text-brand-light mt-1 flex-shrink-0" />
                    <span>{feature}</span>
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
