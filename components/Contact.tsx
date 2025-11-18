import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Globe, Clock, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-brand-darker text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <a href="#" className="font-serif text-4xl font-bold text-white tracking-tight block">
              Pomiędzy<span className="text-brand-primary">.</span>
            </a>
            <p className="text-teal-100/80 text-base leading-relaxed font-light max-w-sm">
              Centrum wsparcia psychologicznego, mediacyjnego i edukacyjnego online. 
              Jesteśmy blisko Ciebie, niezależnie od tego, gdzie się znajdujesz. 
              Wsparcie bez barier i dojazdów.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-soft text-sm font-medium">
              <Globe size={16} />
              <span>Działamy w całej Polsce (Online)</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif text-lg font-bold text-white mb-6 tracking-wide">Nawigacja</h4>
            <ul className="space-y-4 text-teal-100/70 font-light">
              <li><a href="#o-nas" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">O nas <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#oferta" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">Oferta <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#zespol" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">Specjaliści <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">FAQ <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-6 tracking-wide">Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-primary shrink-0 border border-white/10">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-teal-100/50 uppercase tracking-wider font-bold mb-1">Infolinia</p>
                  <p className="text-white font-medium">+48 123 456 789</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-primary shrink-0 border border-white/10">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-teal-100/50 uppercase tracking-wider font-bold mb-1">Email</p>
                  <p className="text-white font-medium">kontakt@pomiedzy.pl</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-white/10 text-teal-100">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-white/10 text-teal-100">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-white/10 text-teal-100">
                <Linkedin size={18} />
              </a>
          </div>
          
          <p className="text-sm text-teal-100/40 font-light order-3 md:order-2">
            &copy; {new Date().getFullYear()} Pomiędzy. Centrum Wsparcia Online.
          </p>

          <div className="flex gap-8 text-sm text-teal-100/60 font-light order-2 md:order-3">
            <a href="#" className="hover:text-brand-primary transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Regulamin Usług Online</a>
          </div>
        </div>
      </div>
    </footer>
  );
};