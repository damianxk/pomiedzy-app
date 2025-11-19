import React, { useRef, useEffect } from 'react';
import { SectionTitle } from './SectionTitle';
import { Scale, Heart, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServicePillar } from '../types';
import gsap from 'gsap';

const services: ServicePillar[] = [
  {
    id: 1,
    title: "Mediacje i Coaching",
    description: "Gdy rozmowa staje się trudna, tworzymy przestrzeń do porozumienia. Wspieramy w rozwiązywaniu konfliktów rodzinnych i budowaniu odporności psychicznej.",
    icon: <Heart strokeWidth={1.5} size={48} />,
    details: ["Mediacje rówieśnicze", "Coaching kryzysowy", "Wsparcie relacji"]
  },
  {
    id: 2,
    title: "Korepetycje i Nauka",
    description: "Problemy w szkole to często wierzchołek góry lodowej. Oferujemy holistyczne wsparcie edukacyjne, które buduje pewność siebie i uczy jak się uczyć.",
    icon: <GraduationCap strokeWidth={1.5} size={48} />,
    details: ["Nadrabianie zaległości", "Techniki efektywnej nauki", "Przygotowanie do egzaminów"]
  },
  {
    id: 3,
    title: "Porady Prawne",
    description: "Tłumaczymy prawo na język zrozumiały dla młodzieży i rodziców. Zapewniamy dyskretne wsparcie w sprawach szkolnych, rodzinnych i cyfrowych.",
    icon: <Scale strokeWidth={1.5} size={48} />,
    details: ["Prawa ucznia", "Sprawy rozwodowe", "Cyberbezpieczeństwo"]
  }
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.to(".gsap-fade-up", {
        scrollTrigger: { trigger: ".section-title-container", start: "top 85%" },
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
        onStart: () => gsap.set(".gsap-fade-up", { visibility: "visible" })
      });
      
      gsap.to(".gsap-scale-up", {
        scrollTrigger: { trigger: ".section-title-container", start: "top 85%" },
        width: 96, duration: 1, ease: "power3.out", delay: 0.3
      });

      // Cards animation
      gsap.fromTo(".service-card", 
        { y: 60, opacity: 0 },
        { 
          scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="oferta" className="py-24 bg-gradient-to-b from-brand-light via-white to-white relative">
       <div className="container mx-auto px-6">
         <SectionTitle 
            subtitle="Nasze Filary" 
            title="Kompleksowe wsparcie w trzech wymiarach" 
         />

         <div className="services-grid grid md:grid-cols-3 gap-8 mt-16">
           {services.map((service, idx) => (
             <div 
                key={service.id} 
                className="service-card group relative bg-white p-10 transition-all duration-500 ease-out border border-gray-100 hover:border-brand-primary/20 hover:shadow-[0_20px_50px_rgba(45,212,191,0.1)] flex flex-col rounded-none overflow-hidden"
             >
               {/* Top Border Animation */}
               <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>

               {/* Icon */}
               <div className="mb-8 text-brand-dark group-hover:text-brand-primary transition-colors duration-300 transform group-hover:-translate-y-1">
                 {service.icon}
               </div>
               
               <h3 className="font-serif text-2xl font-bold tracking-tight text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                 {service.title}
               </h3>
               
               <p className="text-gray-600 mb-8 leading-relaxed font-light font-sans text-base flex-grow border-b border-gray-100 pb-8">
                 {service.description}
               </p>

               <div className="space-y-4 mb-8">
                 {service.details.map((detail, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm text-gray-600 font-normal font-sans group-hover:text-gray-900 transition-colors">
                     <CheckCircle2 size={16} className="text-brand-primary/60 group-hover:text-brand-primary transition-colors" />
                     <span>{detail}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-auto pt-2">
                <button className="group/btn flex items-center gap-3 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors font-sans tracking-wide uppercase">
                   <span className="relative">
                     Dowiedz się więcej
                     <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 group-hover/btn:bg-brand-primary transition-colors"></span>
                   </span>
                   <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};