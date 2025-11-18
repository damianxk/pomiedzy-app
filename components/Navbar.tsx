import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Zespół', href: '#zespol' },
    { name: 'Kontakt', href: '#formularz' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-3xl font-bold text-brand-dark tracking-tight">
          Pomiędzy<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="px-6 py-2 text-sm flex items-center gap-2">
            <Laptop size={16} />
            Strefa Online
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xl font-serif text-brand-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full justify-center gap-2">
             <Laptop size={16} />
             Strefa Online
          </Button>
        </div>
      )}
    </nav>
  );
};