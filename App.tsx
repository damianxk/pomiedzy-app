
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Values } from './components/Values';
import { TargetAudience } from './components/TargetAudience';
import { Testimonials } from './components/Testimonials';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin globally
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Global setup or cleanups if needed
  useEffect(() => {
    // Ensure ScrollTrigger refreshes on resize for accurate positioning
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Services />
        <TargetAudience />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Newsletter />
      </main>
      <Contact />
    </div>
  );
};

export default App;