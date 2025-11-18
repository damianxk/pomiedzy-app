import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [preferredTime, setPreferredTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const timeOptions = [
    { label: "Rano (9:00 - 12:00)", value: "morning" },
    { label: "Popołudnie (12:00 - 17:00)", value: "afternoon" },
    { label: "Wieczór (17:00 - 20:00)", value: "evening" }
  ];

  return (
    <section id="formularz" className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      {/* Subtle background decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-light/30 -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text */}
          <div className="pt-8 reveal reveal-left">
            <SectionTitle 
              subtitle="Porozmawiajmy" 
              title="Zrób pierwszy krok ku zmianie" 
              align="left" 
            />
            <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-8">
              Rozumiemy, że proszenie o pomoc wymaga odwagi. Nasz formularz to bezpieczna przestrzeń. 
              Zostaw nam swój numer, a oddzwonimy, by wysłuchać i wspólnie znaleźć najlepszą ścieżkę wsparcia dla Ciebie lub Twojego dziecka.
            </p>
            
            <div className="space-y-6 font-sans">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Wypełnij formularz</h4>
                  <p className="text-sm text-gray-500 font-light">Wystarczy imię i numer telefonu. Resztę omówimy osobiście.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Czekaj na telefon</h4>
                  <p className="text-sm text-gray-500 font-light">Nasz koordynator skontaktuje się z Tobą w wybranym terminie.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Plan działania</h4>
                  <p className="text-sm text-gray-500 font-light">Wspólnie ustalimy spotkanie z odpowiednim specjalistą.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="reveal reveal-right delay-200 bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            {formState === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Dziękujemy!</h3>
                <p className="text-gray-600 font-light">
                  Twoje zgłoszenie dotarło do nas bezpiecznie.<br/>
                  Oddzwonimy najszybciej jak to możliwe.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-sm font-bold text-brand-primary hover:text-brand-dark underline decoration-2 underline-offset-4"
                >
                  Wyślij kolejne zgłoszenie
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group relative">
                  <input 
                    type="text" 
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors font-sans"
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary font-medium pointer-events-none">
                    Twoje Imię
                  </label>
                </div>

                <div className="group relative">
                  <input 
                    type="tel" 
                    required
                    placeholder="+48 ... ... ..."
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors font-sans placeholder-gray-300"
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary font-medium pointer-events-none">
                    Numer Telefonu
                  </label>
                </div>

                {/* Time Selection Chips */}
                <div className="space-y-3 pt-2">
                  <label className="block text-sm font-medium text-gray-500 flex items-center gap-2">
                    <Clock size={16} className="text-brand-primary" />
                    Kiedy najlepiej zadzwonić?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {timeOptions.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setPreferredTime(option.value)}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                          ${preferredTime === option.value
                            ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-brand-primary/50 hover:text-brand-primary'}
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="group relative">
                  <textarea 
                    rows={3}
                    placeholder=" "
                    className="peer w-full resize-none border-b-2 border-gray-200 bg-transparent py-3 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors font-sans"
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary font-medium pointer-events-none">
                    W czym możemy Ci pomóc? (Opcjonalne)
                  </label>
                  <p className="mt-2 text-xs text-gray-400 text-right">Max. 300 znaków</p>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="group w-full bg-brand-dark text-white py-4 px-8 flex items-center justify-between hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    <span className="font-serif font-bold text-lg tracking-wide">
                      {formState === 'submitting' ? 'Wysyłanie...' : 'Wyślij Zgłoszenie'}
                    </span>
                    <span className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                      <ArrowRight size={20} />
                    </span>
                  </button>
                  <p className="mt-4 text-xs text-center text-gray-400">
                    Klikając "Wyślij", akceptujesz naszą politykę prywatności.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};