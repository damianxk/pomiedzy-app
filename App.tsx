
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

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom of screen
    });

    // Select all elements with 'reveal' class
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 antialiased selection:bg-brand-primary selection:text-white">
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
