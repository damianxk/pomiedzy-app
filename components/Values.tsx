
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Shield, Eye, Wifi, Clock } from 'lucide-react';

export const Values: React.FC = () => {
  const values = [
    {
      icon: <Shield size={32} />,
      title: "Bezpieczna Przystań",
      text: "Twój pokój to Twoja twierdza. Wierzymy, że najtrudniejsze rozmowy najłatwiej prowadzić tam, gdzie czujesz się bezpiecznie. Eliminujemy stres związany z wizytą w gabinecie, poczekalnią i obcym otoczeniem. Jesteśmy gośćmi w Twoim świecie, na Twoich zasadach."
    },
    {
      icon: <Eye size={32} />,
      title: "Pełna Dyskrecja",
      text: "W małych społecznościach wizyta u psychologa czy mediatora wciąż bywa tematem tabu. Nasza formuła online zapewnia 100% anonimowości. Nikt nie zobaczy Cię wchodzącego do poradni. Twoja praca nad sobą pozostaje sprawą wyłącznie Twoją i Twoich bliskich."
    },
    {
      icon: <Clock size={32} />,
      title: "Czas, który masz",
      text: "Oszczędzasz godziny tracone na dojazdy w korkach. Ten czas możesz poświęcić na relaks po sesji, przemyślenie poruszonych tematów lub po prostu na bycie z rodziną. Oferujemy elastyczne godziny spotkań, dopasowane do rytmu szkoły i pracy."
    },
    {
      icon: <Wifi size={32} />,
      title: "Technologia dla Człowieka",
      text: "Wykorzystujemy nowoczesne narzędzia nie po to, by oddzielać, ale by łączyć. Współdzielone ekrany do nauki, wirtualne tablice do mapowania problemów, bezpieczne pokoje rozmów. Technologia staje się mostem, gdy fizyczny dystans jest przeszkodą."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionTitle 
            subtitle="Dlaczego Online?" 
            title="Filozofia Wsparcia Bez Granic" 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-16">
          {/* Text Column */}
          <div className="reveal reveal-left space-y-8">
            <h3 className="font-serif text-3xl font-bold text-brand-dark tracking-tight leading-tight">
              Wsparcie, które przychodzi do Ciebie. <br/>
              <span className="text-brand-primary">Dosłownie.</span>
            </h3>
            <p className="text-gray-600 font-sans font-light text-lg leading-relaxed">
              W świecie, który pędzi, zatrzymanie się jest aktem odwagi. Stworzyliśmy "Pomiędzy" jako odpowiedź na rosnącą potrzebę dostępności pomocy psychologicznej i edukacyjnej. Zauważyliśmy, że dla wielu młodych ludzi ekran komputera nie jest barierą, lecz oknem, przez które łatwiej im wyrazić emocje.
            </p>
            <p className="text-gray-600 font-sans font-light text-lg leading-relaxed">
              Nasza wirtualna poradnia to nie tylko wygoda. To przede wszystkim nowa jakość relacji terapeutycznej, pozbawiona barier geograficznych. Niezależnie czy mieszkasz w centrum Warszawy, czy w małej miejscowości na Podkarpaciu – masz dostęp do tych samych, wykwalifikowanych ekspertów.
            </p>
            <div className="pt-8">
               <blockquote className="border-l-4 border-brand-primary pl-6 italic text-gray-500 font-serif text-xl">
                  "Nie leczymy przez internet. Pomagamy ludziom, używając internetu jako narzędzia spotkania."
               </blockquote>
            </div>
          </div>

          {/* Grid Column */}
          <div className="grid sm:grid-cols-2 gap-8 reveal reveal-right delay-200">
            {values.map((item, idx) => (
              <div key={idx} className="group p-8 border border-gray-100 bg-brand-light/10 hover:bg-brand-light/30 transition-colors duration-500 rounded-none relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
