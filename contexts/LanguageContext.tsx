// ...existing code...
  'contact.form.whatsapp.text': 'الاسم: {name}\nرقم الهاتف: {phone}\nالخدمة المطلوبة: {service}',
  'contact.form.whatsapp.text': 'Name: {name}\nPhone: {phone}\nService: {service}',
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Social Media Marketing
    'services.smm.title': 'التسويق على مواقع التواصل الاجتماعي (إدارة شاملة)',
    'services.smm.subtitle': 'SMM',
    'services.smm.description': 'نركز على بناء حضور رقمي قوي للمراكز الطبية عبر (Instagram, Facebook, Google):',
    'services.smm.feature1': 'إدارة الصفحات: جدولة المنشورات، التفاعل مع استفسارات المرضى، وتحسين صورة العيادة.',
    'services.smm.feature2': 'إنشاء المحتوى البصري: تصميم "جرافيك ديزاين" احترافي يعكس نظافة واحترافية المركز الطبي.',
    'services.smm.feature3': 'التصوير والمونتاج: إنتاج فيديوهات (Reels) وتصوير واقعي للعيادة والأطباء لزيادة المصداقية.',
    'services.smm.feature4': 'الخطط التسويقية: رسم خارطة طريق شهرية تضمن الوصول للجمهور المستهدف وتحويل المتابعين إلى مراجعين حقيقيين.',

    // Software Solutions
    'services.software.title': 'الحلول البرمجية (الأتمتة والأنظمة)',
    'services.software.subtitle': 'Software Solutions',
    'services.software.description': 'تحويل العيادة إلى "عيادة ذكية" لتقليل الجهد البشري وزيادة الكفاءة:',
    'services.software.feature1': 'أنظمة إدارة العيادات: سجلات طبية رقمية وحلول برمجية مخصصة لتنظيم المواعيد.',
    'services.software.feature2': 'الربط الذكي والأتمتة: ربط العمليات ببرامج الأتمتة (مثل n8n و WhatsApp API) لتأكيد المواعيد آلياً.',
    'services.software.feature3': 'تطوير الويب: إنشاء مواقع تعريفية تتيح للمرضى الحجز المباشر عبر الإنترنت.',
    // Hero
    'hero.title.part1': 'نجمع بين دقة',
    'hero.title.medicine': 'الطب',
    'hero.title.part2': 'وعبقرية',
    'hero.title.engineering': 'الهندسة',
    'hero.subtitle': 'تأسست MEDFITOUT لتكون الشريك الهندسي للأطباء والمستثمرين في القطاع الصحي.',
    'hero.cta1': 'اطلب استشارة فوراً',
    'hero.cta2': 'خدماتنا المتخصصة',
    'hero.feature1': 'دراسة مخططات هندسية',
        'contact.form.whatsapp.greeting': 'مرحباً،',
    'hero.feature2': 'استشارات فنية مستقلة',
    'hero.feature3': 'حلول "تسليم مفتاح"',
    
    // About
    'about.badge': 'من نحن',
    'about.title': 'MEDFITOUT: الريادة في الهندسة الطبية المتكاملة',
    'about.description': 'نحن لسنا مجرد شركة تصميم داخلي أو مقاولات تقليدية؛ نحن شركة استشارات هندسية متخصصة تتقن لغة الطب والهندسة معاً. نهدف لسد الفجوة بين المتطلبات الطبية الدقيقة والتنفيذ الهندسي على أرض الواقع.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'ضمان إنشاء عيادات ومراكز طبية حديثة، عملية، ومجدية اقتصادياً بأعلى المعايير العالمية.',
    'about.equipment.title': 'دراسة الأجهزة الطبية',
    'about.equipment.description': 'نحن لا نبيع الأجهزة، بل نكون مستشارك الأمين لنخبرك أي جهاز هو الأنسب لاختصاصك وميزانيتك.',
        'contact.form.whatsapp.greeting': 'Hello,',
    
    // Services
    'services.back': 'العودة للرئيسية',
    'services.badge': 'خدماتنا',
    'services.title': 'حلول شاملة ومتكاملة',
    'services.description': 'ندرك التحديات التي يواجهها الطبيب عند التأسيس، لذا نقدم خدمات متكاملة تغطي كافة الجوانب الفنية والهندسية.',
    'services.service1.title': 'استشارات ما قبل التأسيس',
    'services.service1.subtitle': 'Technical Consultancy',
    'services.service1.description': 'نساعدك في البداية الصحيحة لتجنب الأخطاء المكلفة لاحقاً.',
    'services.service1.feature1': 'دراسة العروض الفنية للأجهزة الطبية',
    'services.service1.feature2': 'مستشارك الأمين لاختيار الأجهزة الأنسب لميزانيتك',
    'services.service2.title': 'التصميم الهندسي المتخصص',
    'services.service2.subtitle': 'Specialized Design',
    'services.service2.description': 'توزيع يجمع بين الجمالية والوظيفة الطبية.',
    'services.service2.feature1': 'مراعاة رحلة المريض (Patient Journey)',
    'services.service2.feature2': 'مخططات كهروميكانيكية (MEP) دقيقة جداً',
    'services.service2.feature3': 'توزيع فراغي مدروس يضمن كفاءة التشغيل',
    'services.service3.title': 'إدارة المشاريع والإشراف',
    'services.service3.subtitle': 'Project Management',
    'services.service3.description': 'نحن عينك التقنية وممثلك الفني أمام المقاولين.',
    'services.service3.feature1': 'ضبط الجودة والجدول الزمني للتنفيذ',
    'services.service3.feature2': 'الهندسة القيمية (Value Engineering) لضبط التكاليف',
    'services.service3.feature3': 'الإشراف الميداني لضمان تنفيذ المخططات بدقة',
    'services.service3.feature4': 'تسليم مفتاح العيادة جاهزة للعمل تماماً',
    
    // Why Choose Us
    'why.badge': 'لماذا نحن؟',
    'why.title': 'ندمج الخبرة الهندسية بالمعرفة الطبية',
    'why.description': 'في MEDFITOUT، ندرك أن العيادة ليست مجرد جدران وأثاث، بل هي بيئة تشغيلية تتطلب فهماً عميقاً للمعايير الطبية وراحة المريض.',
    'why.reason1.title': 'توفير الجهد والوقت',
    'why.reason1.description': 'نوفر عليك عناء التنسيق بين عشرات الجهات والمقاولين والموردين.',
    'why.reason2.title': 'دقة المواعيد',
    'why.reason2.description': 'نلتزم بجدول زمني صارم لضمان افتتاح عيادتك في الوقت المحدد.',
    'why.reason3.title': 'كفاءة التكلفة',
    'why.reason3.description': 'نحقق لك أعلى جودة بأقل ميزانية ممكنة عبر الهندسة القيمية.',
    'why.reason4.title': 'تفرغ لرسالتك',
    'why.reason4.description': 'نسلمك المفتاح جاهزاً، لكي تتفرغ أنت لرسالتك الإنسانية ومرضاك.',
    'why.badge2': 'مطابقة للمعايير',
    
    // Contact
    'contact.back': 'العودة للرئيسية',
    'contact.badge': 'تواصل معنا',
    'contact.title': 'لنبدأ رحلة نجاحك',
    'contact.description': 'نحن هنا لنكون مستشارك الفني الأول. تواصل معنا لمناقشة مشروعك الطبي القادم.',
    'contact.phone.title': 'اتصل بنا',
    'contact.email.title': 'البريد الإلكتروني',
    'contact.location.title': 'موقعنا',
    'contact.location.text': 'عمان، الأردن',
    'contact.form.title': 'احجز موعد استشارة فنية',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.name.placeholder': 'د. ....',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.phone.placeholder': '000 xxxxxxx',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.service.placeholder': 'اختر الخدمة المطلوبة',
    'contact.form.service1': 'استدراج عروض اسعار لكافة الامور (مدني، ميكانيك، كهرباء، أثاث طبي وغير طبي، الأجهزة الطبية)',
    'contact.form.service2': 'دراسة عروض اسعار',
    'contact.form.service3': 'دراسة عروض فنية',
    'contact.form.service4': 'دراسة جدوى',
    'contact.form.service5': 'إشراف على الاستلام حسب مواصفات وتركيب',
    'contact.form.service6': 'إشراف أو إبداء الرأي ومقترح على تصاميم داخلي من ناحية هندسية طبية',
    'contact.form.service7': 'الإشراف على التشطيبات الداخلية',
    'contact.form.service8': 'الإشراف على تمديدات الكهروميكانيكية',
    'contact.form.whatsapp': 'إرسال عبر واتساب',
    'contact.form.email': 'إرسال عبر البريد',
    
    // Footer
    'footer.description': 'الشريك الهندسي لتأسيس المنشآت الطبية. نحن نتقن لغة الطب والهندسة معاً.',
    'footer.why.title': 'لماذا MEDFITOUT؟',
    'footer.why.item1': 'متخصصون حصرياً في القطاع الطبي',
    'footer.why.item2': 'خبراء بمعايير العالمية',
    'footer.why.item3': 'توفير في تكاليف التأسيس',
    'footer.why.item4': 'إدارة مشاريع واحترافية عالية',
    'footer.contact.title': 'تواصل معنا',
    'footer.contact.direct': 'تواصل مباشر',
  },
  en: {
    // Social Media Marketing
    // Social Media Marketing
    'services.smm.title': 'التسويق على مواقع التواصل الاجتماعي (إدارة شاملة)',
    'services.smm.subtitle': 'SMM',
    'services.smm.description': 'نركز على بناء حضور رقمي قوي للمراكز الطبية عبر (Instagram, Facebook, Google):',
    'services.smm.feature1': 'إدارة الصفحات: جدولة المنشورات، التفاعل مع استفسارات المرضى، وتحسين صورة العيادة.',
    'services.smm.feature2': 'إنشاء المحتوى البصري: تصميم "جرافيك ديزاين" احترافي يعكس نظافة واحترافية المركز الطبي.',
    'services.smm.feature3': 'التصوير والمونتاج: إنتاج فيديوهات (Reels) وتصوير واقعي للعيادة والأطباء لزيادة المصداقية.',
    'services.smm.feature4': 'الخطط التسويقية: رسم خارطة طريق شهرية تضمن الوصول للجمهور المستهدف وتحويل المتابعين إلى مراجعين حقيقيين.',

    // Software Solutions
    'services.software.title': 'الحلول البرمجية (الأتمتة والأنظمة)',
    'services.software.subtitle': 'Software Solutions',
    'services.software.description': 'تحويل العيادة إلى "عيادة ذكية" لتقليل الجهد البشري وزيادة الكفاءة:',
    'services.software.feature1': 'أنظمة إدارة العيادات: سجلات طبية رقمية وحلول برمجية مخصصة لتنظيم المواعيد.',
    'services.software.feature2': 'الربط الذكي والأتمتة: ربط العمليات ببرامج الأتمتة (مثل n8n و WhatsApp API) لتأكيد المواعيد آلياً.',
    'services.software.feature3': 'تطوير الويب: إنشاء مواقع تعريفية تتيح للمرضى الحجز المباشر عبر الإنترنت.',
    'services.smm.title': 'Social Media Marketing (Comprehensive Management)',
    'services.smm.subtitle': 'SMM',
    'services.smm.description': 'We focus on building a strong digital presence for medical centers via (Instagram, Facebook, Google):',
    'services.smm.feature1': 'Page management: scheduling posts, interacting with patient inquiries, and improving the clinic’s image.',
    // Social Media Marketing
    'services.smm.title': 'Social Media Marketing (Comprehensive Management)',
    'services.smm.subtitle': 'SMM',
    'services.smm.description': 'We focus on building a strong digital presence for medical centers via (Instagram, Facebook, Google):',
    'services.smm.feature1': 'Page management: scheduling posts, interacting with patient inquiries, and improving the clinic’s image.',
    'services.smm.feature2': 'Visual content creation: professional graphic design reflecting the cleanliness and professionalism of the medical center.',
    'services.smm.feature3': 'Photography and editing: producing Reels videos and real-life shoots of the clinic and doctors to increase credibility.',
    'services.smm.feature4': 'Marketing plans: drawing a monthly roadmap to reach the target audience and convert followers into real patients.',

    // Software Solutions
    'services.software.title': 'Software Solutions (Automation & Systems)',
    'services.software.subtitle': 'Software Solutions',
    'services.software.description': 'Transform your clinic into a “smart clinic” to reduce manual effort and increase efficiency:',
    'services.software.feature1': 'Clinic management systems: digital medical records and custom software solutions for appointment organization.',
    'services.software.feature2': 'Smart integration & automation: connect operations with automation tools (like n8n and WhatsApp API) for automatic appointment confirmation.',
    'services.software.feature3': 'Web development: create informative websites that allow patients to book directly online.',
    'services.smm.feature2': 'Visual content creation: professional graphic design reflecting the cleanliness and professionalism of the medical center.',
    'services.smm.feature3': 'Photography and editing: producing Reels videos and real-life shoots of the clinic and doctors to increase credibility.',
    'services.smm.feature4': 'Marketing plans: drawing a monthly roadmap to reach the target audience and convert followers into real patients.',

    // Software Solutions
    'services.software.title': 'Software Solutions (Automation & Systems)',
    'services.software.subtitle': 'Software Solutions',
    'services.software.description': 'Transform your clinic into a “smart clinic” to reduce manual effort and increase efficiency:',
    'services.software.feature1': 'Clinic management systems: digital medical records and custom software solutions for appointment organization.',
    'services.software.feature2': 'Smart integration & automation: connect operations with automation tools (like n8n and WhatsApp API) for automatic appointment confirmation.',
    'services.software.feature3': 'Web development: create informative websites that allow patients to book directly online.',
    // Hero
    'hero.title.part1': 'Combining precision of',
    'hero.title.medicine': 'Medicine',
    'hero.title.part2': 'with genius of',
    'hero.title.engineering': 'Engineering',
    'hero.subtitle': 'MEDFITOUT was founded to be the engineering partner for doctors and investors in the healthcare sector.',
    'hero.cta1': 'Request Consultation Now',
    'hero.cta2': 'Our Specialized Services',
    'hero.feature1': 'Engineering Plans Study',
    'hero.feature2': 'Independent Technical Consulting',
    'hero.feature3': 'Turnkey Solutions',
    
    // About
    'about.badge': 'About Us',
    'about.title': 'MEDFITOUT: Leadership in Integrated Medical Engineering',
    'about.description': 'We are not just an interior design or traditional contracting company; we are a specialized engineering consultancy that masters both medical and engineering languages. We aim to bridge the gap between precise medical requirements and practical engineering execution.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'Ensuring the establishment of modern, functional, and economically viable clinics and medical centers with the highest international standards.',
    'about.equipment.title': 'Medical Equipment Study',
    'about.equipment.description': 'We do not sell equipment, but rather be your trusted advisor to tell you which device is best suited for your specialty and budget.',
    
    // Services
    'services.back': 'Back to Home',
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive and Integrated Solutions',
    'services.description': 'We understand the challenges doctors face during establishment, so we provide integrated services covering all technical and engineering aspects.',
    'services.service1.title': 'Pre-Establishment Consulting',
    'services.service1.subtitle': 'Technical Consultancy',
    'services.service1.description': 'We help you start correctly to avoid costly mistakes later.',
    'services.service1.feature1': 'Technical evaluation of medical equipment proposals',
    'services.service1.feature2': 'Your trusted advisor for choosing the most suitable equipment for your budget',
    'services.service2.title': 'Specialized Engineering Design',
    'services.service2.subtitle': 'Specialized Design',
    'services.service2.description': 'Distribution that combines aesthetics and medical functionality.',
    'services.service2.feature1': 'Consideration of Patient Journey',
    'services.service2.feature2': 'Very precise MEP (Mechanical, Electrical, Plumbing) plans',
    'services.service2.feature3': 'Studied spatial distribution ensuring operational efficiency',
    'services.service3.title': 'Project Management and Supervision',
    'services.service3.subtitle': 'Project Management',
    'services.service3.description': 'We are your technical eye and representative before contractors.',
    'services.service3.feature1': 'Quality and timeline control for execution',
    'services.service3.feature2': 'Value Engineering to control costs',
    'services.service3.feature3': 'Field supervision to ensure precise plan implementation',
    'services.service3.feature4': 'Turnkey delivery of fully operational clinic',
    
    // Why Choose Us
    'why.badge': 'Why Us?',
    'why.title': 'We Integrate Engineering Expertise with Medical Knowledge',
    'why.description': 'At MEDFITOUT, we understand that a clinic is not just walls and furniture, but an operational environment requiring deep understanding of medical standards and patient comfort.',
    'why.reason1.title': 'Saving Effort and Time',
    'why.reason1.description': 'We save you the hassle of coordinating between dozens of parties, contractors, and suppliers.',
    'why.reason2.title': 'Punctuality',
    'why.reason2.description': 'We commit to a strict schedule to ensure your clinic opens on time.',
    'why.reason3.title': 'Cost Efficiency',
    'why.reason3.description': 'We achieve the highest quality with the lowest possible budget through value engineering.',
    'why.reason4.title': 'Focus on Your Mission',
    'why.reason4.description': 'We deliver the key ready, so you can focus on your humanitarian mission and patients.',
    'why.badge2': 'Standards Compliant',
    
    // Contact
    'contact.back': 'Back to Home',
    'contact.badge': 'Contact Us',
    'contact.title': "Let's Begin Your Success Journey",
    'contact.description': 'We are here to be your primary technical consultant. Contact us to discuss your upcoming medical project.',
    'contact.phone.title': 'Call Us',
    'contact.email.title': 'Email',
    'contact.location.title': 'Our Location',
    'contact.location.text': 'Amman, Jordan',
    'contact.form.title': 'Book a Technical Consultation',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Dr. ....',
    'contact.form.phone': 'Phone Number',
    'contact.form.phone.placeholder': '000 xxxxxxx',
    'contact.form.service': 'Required Service',
    'contact.form.service.placeholder': 'Select Required Service',
    'contact.form.service1': 'Request quotes for all matters (civil, mechanical, electrical, medical and non-medical furniture, medical devices)',
    'contact.form.service2': 'Price quotation study',
    'contact.form.service3': 'Technical quotation study',
    'contact.form.service4': 'Feasibility study',
    'contact.form.service5': 'Supervision of delivery according to specifications and installation',
    'contact.form.service6': 'Supervision or opinion and proposal on interior designs from a medical engineering perspective',
    'contact.form.service7': 'Supervision of interior finishes',
    'contact.form.service8': 'Supervision of electromechanical installations',
    'contact.form.whatsapp': 'Send via WhatsApp',
    'contact.form.email': 'Send via Email',
    
    // Footer
    'footer.description': 'The engineering partner for establishing medical facilities. We master both medical and engineering languages.',
    'footer.why.title': 'Why MEDFITOUT?',
    'footer.why.item1': 'Exclusively specialized in the medical sector',
    'footer.why.item2': 'Experts in international standards',
    'footer.why.item3': 'Savings in establishment costs',
    'footer.why.item4': 'High professional project management',
    'footer.contact.title': 'Contact Us',
    'footer.contact.direct': 'Direct Contact',
  },
};
