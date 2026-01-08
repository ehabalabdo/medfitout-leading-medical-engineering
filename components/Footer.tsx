
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f2a2e] text-slate-400 py-20 border-t border-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-right">
          
          <div className="lg:col-span-1">
            <div className="mb-8 flex justify-end">
              <Logo light />
            </div>
            <p className="leading-relaxed mb-8 text-lg">
              الشريك الهندسي الأول لتأسيس المنشآت الطبية. نحن نتقن لغة الطب والهندسة معاً.
            </p>
            <div className="flex justify-end gap-5">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/medfitout/', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585265275754', label: 'Facebook' }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-brand-dark/50 border border-brand-light/10 flex items-center justify-center hover:bg-brand-light hover:text-brand-dark transition-all duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xl mb-8">لماذا MEDFITOUT؟</h4>
            <ul className="space-y-5 text-lg">
              <li>متخصصون حصرياً في القطاع الطبي</li>
              <li>خبراء بمعايير الجودة العالمية</li>
              <li>توفير في تكاليف التأسيس</li>
              <li>إدارة مشاريع واحترافية عالية</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xl mb-8">تواصل معنا</h4>
            <div className="p-6 bg-brand-dark/50 rounded-2xl border border-brand-light/10 shadow-inner">
              <p className="text-sm font-bold text-brand-light mb-2 uppercase tracking-widest">تواصل مباشر</p>
              <p className="text-white text-xl font-black tracking-wider mb-2 font-mono" dir="ltr">00962797973766</p>
              <p className="text-brand-light/70 text-sm font-mono lowercase mb-2">info@med-fitout.com</p>
              <p className="text-slate-400 text-sm border-t border-white/5 pt-2 mt-2">عمان، الأردن</p>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-brand-light/5 text-center text-sm font-medium tracking-wide">
          <p>© {new Date().getFullYear()} MEDFITOUT. كافة الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
