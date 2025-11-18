import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getSupportiveAdvice } from '../services/geminiService';
import { AiStatus } from '../types';

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<AiStatus>(AiStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(AiStatus.LOADING);
    try {
      const advice = await getSupportiveAdvice(input);
      setResponse(advice);
      setStatus(AiStatus.SUCCESS);
    } catch (err) {
      setResponse("Wystąpił błąd. Spróbuj ponownie później.");
      setStatus(AiStatus.ERROR);
    }
  };

  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="bg-brand-accent p-4 rounded-full shrink-0 animate-pulse">
              <Sparkles size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">Nie wiesz od czego zacząć?</h3>
              <p className="text-teal-100 mb-8 text-lg font-light leading-relaxed">
                Wpisz, co Cię martwi (np. "stres przed maturą", "kłótnie z rodzicami"). 
                Nasz wirtualny asystent podpowie Ci pierwsze kroki i skieruje do odpowiedniego specjalisty.
              </p>

              <form onSubmit={handleSubmit} className="relative max-w-2xl">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Co Ci leży na sercu?"
                  className="w-full py-4 px-6 pr-16 rounded-xl bg-white/90 text-brand-dark placeholder-gray-500 font-medium focus:outline-none focus:ring-4 focus:ring-brand-primary/50 shadow-lg"
                  disabled={status === AiStatus.LOADING}
                />
                <button 
                  type="submit"
                  disabled={status === AiStatus.LOADING}
                  className="absolute right-2 top-2 bg-brand-primary p-2 rounded-lg hover:bg-brand-accent transition-colors text-white disabled:opacity-50"
                >
                  {status === AiStatus.LOADING ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>

              {response && (
                <div className="mt-8 p-6 bg-white/95 rounded-xl text-brand-dark shadow-lg border-l-4 border-brand-accent animate-fade-in">
                  <p className="text-lg italic font-medium font-serif">"{response}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};