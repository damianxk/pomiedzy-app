import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-soft/30 last:border-none">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
        onClick={onClick}
      >
        <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-gray-700 group-hover:text-brand-primary'}`}>
          {question}
        </span>
        <span className={`ml-6 p-2 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed pr-8 pl-2 border-l-2 border-brand-accent/50 font-sans text-lg font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Jak odbywają się spotkania online?",
      answer: "Korzystamy z bezpiecznych, szyfrowanych platform wideo (np. Google Meet, Zoom). Przed spotkaniem otrzymasz od nas link na maila. Wystarczy komputer lub telefon z dostępem do internetu. Nie musisz instalować dodatkowego oprogramowania."
    },
    {
      question: "Czy korepetycje online są skuteczne?",
      answer: "Tak! Używamy interaktywnych tablic wirtualnych i narzędzi do współdzielenia ekranu. Dzięki temu uczeń widzi dokładnie to samo, co nauczyciel. Forma online oszczędza czas na dojazdy i pozwala uczyć się w bezpiecznym, domowym otoczeniu."
    },
    {
      question: "Jak wygląda pierwsza konsultacja?",
      answer: "To krótka, 30-minutowa wideorozmowa wstępna. Poznajemy się, omawiamy Twoje potrzeby i dobieramy odpowiedniego specjalistę. To czas dla Ciebie, by sprawdzić, czy czujesz się z nami komfortowo."
    },
    {
      question: "Czy mediacje online są poufne?",
      answer: "Absolutnie tak. Obowiązuje nas tajemnica zawodowa. Platformy, z których korzystamy, zapewniają bezpieczeństwo połączenia. Prosimy również uczestników, aby podczas rozmowy przebywali w pomieszczeniu, gdzie nikt inny ich nie słyszy."
    },
    {
      question: "Co jeśli zerwie mi się połączenie?",
      answer: "Spokojnie, to tylko technologia. W takiej sytuacji nasz specjalista poczeka lub zadzwoni do Ciebie telefonicznie, aby dokończyć sesję lub ustalić nowy termin. Jesteśmy wyrozumiali."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-light relative">
      {/* Decorative pastel blotches */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left column: Title & Info */}
          <div className="lg:w-1/3">
            <SectionTitle 
              subtitle="Warto wiedzieć" 
              title="Pytania o e-wizyty" 
              align="left"
            />
            <p className="mt-6 text-gray-700 leading-relaxed text-lg font-light">
              Działamy w pełni zdalnie, abyś mógł otrzymać wsparcie bez wychodzenia z domu. 
              Oto jak to działa w praktyce.
            </p>
            <div className="mt-8 p-6 bg-white shadow-sm border border-brand-soft/20 rounded-xl">
              <h4 className="font-serif text-xl font-bold tracking-tight text-brand-dark mb-2">Masz inne pytanie?</h4>
              <p className="text-sm text-gray-500 mb-4 font-light">Napisz do nas, chętnie wyjaśnimy jak działa nasze wirtualne centrum.</p>
              <a href="mailto:kontakt@pomiedzy.pl" className="text-brand-primary font-bold hover:text-brand-dark transition-colors text-sm flex items-center gap-2">
                Napisz wiadomość <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right column: Accordion */}
          <div className="lg:w-2/3 bg-white p-8 md:p-10 shadow-xl shadow-brand-dark/5 border border-white rounded-none md:rounded-sm">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};