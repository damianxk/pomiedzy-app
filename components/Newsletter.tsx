import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-28 bg-brand-dark relative isolate overflow-hidden">
      {/* Premium Background Effect - Darker for better contrast */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.teal.900),theme(colors.brand.darker))] opacity-100" />
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/5 shadow-xl shadow-teal-600/10 ring-1 ring-teal-50/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 drop-shadow-sm">
            Początek czegoś <br/>
            <span className="text-brand-soft">ważnego.</span>
          </h2>
          
          <p className="text-lg leading-8 text-teal-50 font-light mb-12 drop-shadow-md">
            Tworzymy bezpieczną przystań, która połączy profesjonalne wsparcie z ludzką życzliwością. 
            Dołącz do listy oczekujących, a powiadomimy Cię w pierwszej kolejności.
          </p>

          {status === 'success' ? (
            <div className="p-6 bg-teal-900/80 border border-brand-primary/30 rounded-xl text-teal-50 animate-fade-in backdrop-blur-sm">
              <p className="text-xl font-serif italic">"Do zobaczenia wkrótce."</p>
              <p className="text-sm mt-2 opacity-80">Twój adres został zapisany.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative mx-auto max-w-md group">
              {/* Unified Input Container */}
              <div className="relative flex flex-col sm:flex-row items-center p-1.5 bg-white/10 border border-white/20 rounded-none sm:rounded-full backdrop-blur-md transition-all duration-300 focus-within:bg-white/15 focus-within:ring-2 focus-within:ring-brand-primary focus-within:border-brand-primary/50 focus-within:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                <input
                  type="email"
                  required
                  placeholder="Twój adres email"
                  className="w-full bg-transparent border-none px-6 py-3 text-white placeholder:text-teal-200/60 focus:ring-0 focus:outline-none sm:text-base font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex-none rounded-none sm:rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-brand-accent transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-brand-accent/50"
                >
                  {loading ? <Loader2 className="animate-spin h-4 w-4" /> : 'Zapisz mnie'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-4 text-xs leading-5 text-teal-200/70">
                Nie wysyłamy spamu. Szanujemy Twój spokój.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};