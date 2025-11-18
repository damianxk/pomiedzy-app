import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, Wifi } from 'lucide-react';

export const Hero: React.FC = () => {
  const phrases = ["Masz znaczenie.", "W lęku nie jesteś sam.", "Twój głos jest ważny.", "Jesteśmy dla Ciebie."];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-soft/20 rounded-l-[300px] translate-x-1/4 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <div className="reveal reveal-left inline-flex items-center gap-2 px-4 py-2 rounded-none border-l-4 border-brand-primary bg-white shadow-sm text-brand-dark text-sm font-semibold">
            <Wifi size={16} className="text-brand-primary" />
            <span>Wsparcie online - bez wychodzenia z domu</span>
          </div>
          
          <h1 className="reveal reveal-left delay-100 font-serif text-6xl lg:text-8xl text-brand-dark font-bold tracking-tight leading-[1.05]">
            Jesteśmy tu, <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-primary">Pomiędzy</span>
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-brand-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
              </svg>
            </span>
            <br />
            Tobą a Światem.
          </h1>
          
          <p className="reveal reveal-left delay-200 text-xl text-gray-600 font-light leading-relaxed max-w-lg">
            Wirtualna przestrzeń dialogu. Mediacje, coaching, prawo i nauka. 
            Łączymy się z Tobą online, byś mógł odnaleźć równowagę w bezpiecznym otoczeniu.
          </p>

          <div className="reveal reveal-left delay-300 flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-dark text-white px-8 py-4 text-base font-bold hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-brand-primary/30 flex items-center justify-center gap-3">
              Umów spotkanie online <ArrowRight size={20} />
            </button>
            <button className="bg-transparent text-brand-dark border border-brand-dark px-8 py-4 text-base font-bold hover:bg-brand-dark hover:text-white transition-all duration-300">
              Poznaj Nasz Zespół
            </button>
          </div>
        </div>

        <div className="relative reveal reveal-right delay-200">
          <div className="relative overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://picsum.photos/id/338/800/1000" 
              alt="Spokojna młodzież w rozmowie" 
              className="w-full h-[650px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
            
            {/* Rotator Text Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
               <div className="overflow-hidden h-12">
                 {phrases.map((phrase, idx) => (
                   <p 
                    key={idx}
                    className={`font-serif text-3xl md:text-4xl text-white font-bold italic transition-all duration-700 absolute top-0 left-0 w-full
                      ${idx === currentPhrase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                   >
                     "{phrase}"
                   </p>
                 ))}
               </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-primary/20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};