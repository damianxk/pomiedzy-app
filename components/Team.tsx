import React, { useRef, useEffect } from 'react';
import { SectionTitle } from './SectionTitle';
import { Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { Specialist } from '../types';
import gsap from 'gsap';

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Mediator Rodzinny & Psycholog",
    description: "Specjalizuję się w budowaniu mostów tam, gdzie zostały one spalone. Pomagam rodzicom i nastolatkom usłyszeć się nawzajem.",
    image: "https://picsum.photos/id/64/800/800",
    socials: { linkedin: "#", facebook: "#" }
  },
  {
    id: 2,
    name: "Piotr Nowak",
    role: "Trener Efektywnej Nauki",
    description: "Edukacja to nie tylko stopnie. Uczę jak się uczyć bez stresu i odnajdywać pasję w zdobywaniu wiedzy.",
    image: "https://picsum.photos/id/91/800/800",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 3,
    name: "Mec. Maria Wiśniewska",
    role: "Radca Prawny",
    description: "Prawo ma chronić, nie straszyć. Zapewniam wsparcie prawne w sprawach szkolnych, rodzinnych i cyfrowych.",
    image: "https://picsum.photos/id/331/800/800",
    socials: { facebook: "#", linkedin: "#" }
  }
];

export const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Re-use title animation logic manually or rely on the global one if scoped correctly.
      // Here we define it explicitly for this section context.
      gsap.to(".gsap-fade-up", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
        onStart: () => gsap.set(".gsap-fade-up", { visibility: "visible" })
      });

      gsap.fromTo(".team-card", 
        { y: 60, opacity: 0 },
        { 
          scrollTrigger: { trigger: ".team-grid", start: "top 75%" },
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="zespol" 
      className="py-20 md:py-32 bg-gradient-to-b from-white via-brand-light/30 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Eksperci Pomiędzy" title="Zespół Wsparcia" />

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 md:mt-20">
          {specialists.map((person, idx) => (
            <div 
              key={person.id} 
              className="team-card group relative bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(45,212,191,0.15)] transition-all duration-500 ease-out border border-gray-100 hover:border-brand-primary/20 w-full flex flex-col rounded-none"
            >
              {/* Image Container - Static, no zoom */}
              <div className="relative h-80 md:h-96 w-full overflow-hidden shrink-0">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Socials - Always visible on mobile, slide in on desktop */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 
                                translate-x-0 opacity-100
                                md:translate-x-10 md:opacity-0 
                                md:group-hover:translate-x-0 md:group-hover:opacity-100 
                                transition-all duration-500 delay-100">
                  {person.socials.facebook && <a href={person.socials.facebook} className="bg-white text-brand-dark p-2 hover:bg-brand-dark hover:text-white transition-colors shadow-lg"><Facebook size={18} /></a>}
                  {person.socials.linkedin && <a href={person.socials.linkedin} className="bg-white text-brand-dark p-2 hover:bg-brand-dark hover:text-white transition-colors shadow-lg"><Linkedin size={18} /></a>}
                  {person.socials.instagram && <a href={person.socials.instagram} className="bg-white text-brand-dark p-2 hover:bg-brand-dark hover:text-white transition-colors shadow-lg"><Instagram size={18} /></a>}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 pt-8 md:pt-10 relative flex flex-col flex-1">
                {/* Decorative line - Full width, thicker, under image */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-2 tracking-tight">{person.name}</h3>
                  <p className="text-brand-primary text-sm font-bold uppercase tracking-widest font-sans">{person.role}</p>
                </div>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-base font-sans flex-grow">
                  {person.description}
                </p>
                
                {/* Discreet Button - positioned at bottom */}
                <button className="group/btn flex items-center gap-3 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors font-sans mt-auto tracking-wide">
                  <span className="relative">
                    Umów konsultację
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