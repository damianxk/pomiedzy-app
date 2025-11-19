
import React from 'react';
import { SectionTitle } from './SectionTitle';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-0 bg-white relative">
      <div className="grid lg:grid-cols-2">
        
        {/* Youth Column */}
        <div className="bg-brand-dark text-white px-8 py-24 lg:px-20 lg:py-32 reveal reveal-left relative overflow-hidden">
           {/* Texture */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           
           <div className="relative z-10">
             <span className="uppercase tracking-widest text-sm font-bold text-brand-primary mb-4 block">Dla Młodzieży</span>
             <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">
               Czujesz, że nikt Cię nie rozumie?
             </h3>
             
             <div className="space-y-6 font-sans font-light text-teal-50/90 text-lg leading-relaxed">
               <p>
                 Presja w szkole, oczekiwania rodziców, dramaty w mediach społecznościowych. Czasem masz wrażenie, że musisz grać rolę, której wcale nie czujesz. Świat wymaga od Ciebie bycia "jakimś", a Ty wciąż szukasz odpowiedzi na pytanie, kim właściwie jesteś.
               </p>
               <p>
                 Może boisz się matury? A może rodzice się rozwodzą i czujesz się jak karta przetargowa w ich grze? Albo po prostu czujesz lęk, którego nie potrafisz nazwać?
               </p>
               <p className="font-medium text-white pt-4">
                 Nie oceniamy. Nie moralizujemy. Słuchamy.
               </p>
               <ul className="mt-8 space-y-3">
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                   Wsparcie w stanach lękowych i depresyjnych
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                   Mediacje z rodzicami (gdy rozmowa nie wychodzi)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                   Coaching pewności siebie
                 </li>
               </ul>
           </div>
           </div>
        </div>

        {/* Parents Column */}
        <div className="bg-brand-light/50 text-brand-dark px-8 py-24 lg:px-20 lg:py-32 reveal reveal-right">
            <span className="uppercase tracking-widest text-sm font-bold text-brand-dark/50 mb-4 block">Dla Rodziców</span>
             <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">
               Tęsknisz za dzieckiem, które kiedyś znałeś?
             </h3>
             
             <div className="space-y-6 font-sans font-light text-gray-600 text-lg leading-relaxed">
               <p>
                 Widzisz zamknięte drzwi pokoju. Słyszysz zdawkowe odpowiedzi. Czujesz bezradność, gdy Twoje dziecko wycofuje się w świat wirtualny lub wpada w towarzystwo, które budzi Twój niepokój. Chcesz pomóc, ale każde Twoje słowo jest odbierane jako atak.
               </p>
               <p>
                 Rozwód, kryzys finansowy, problemy w szkole – to wszystko wpływa na całą rodzinę. Nie musisz dźwigać tego ciężaru sam. Pomagamy rodzicom odzyskać autorytet oparty na bliskości, a nie na strachu.
               </p>
               <p className="font-medium text-brand-dark pt-4">
                 Wspieramy, nie obwiniając. Szukamy rozwiązań, nie winnych.
               </p>
               <ul className="mt-8 space-y-3">
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-dark rounded-full"></span>
                   Konsultacje wychowawcze
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-dark rounded-full"></span>
                   Mediacje okołorozwodowe (Plan Opiekuńczy)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-brand-dark rounded-full"></span>
                   Wsparcie prawne w sprawach rodzinnych
                 </li>
               </ul>
           </div>
        </div>

      </div>
    </section>
  );
};
