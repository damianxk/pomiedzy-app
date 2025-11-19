
import React, { useRef, useEffect } from 'react';
import { SectionTitle } from './SectionTitle';
import { Quote } from 'lucide-react';
import gsap from 'gsap';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation - Faster
      gsap.to(".gsap-fade-up", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        onStart: () => gsap.set(".gsap-fade-up", { visibility: "visible" })
      });

      gsap.to(".gsap-scale-up", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        width: 96, duration: 0.6, ease: "power3.out", delay: 0.1
      });

      // Cards Animation - Snappier
      gsap.fromTo(".story-card",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: ".stories-grid", start: "top 85%" },
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stories = [
    {
      title: "Odzyskaliśmy ciszę w domu",
      author: "Marta, mama 16-letniego Kuby",
      story: "Kiedy Kuba przestał wychodzić z pokoju, myśleliśmy, że to 'taki wiek'. Ale potem doszły problemy z ocenami i agresja słowna. Czuliśmy, że tracimy syna. Próbowaliśmy terapii stacjonarnej, ale Kuba odmawiał wyjścia z domu. Pomiędzy okazało się ratunkiem. Mediator połączył się z Kubą online, w jego bezpiecznej strefie (przy wyłączonej kamerze na początku!). Po 3 miesiącach pracy, po raz pierwszy od roku zjedliśmy wspólnie obiad bez kłótni. To nie stało się z dnia na dzień, ale odzyskaliśmy nadzieję.",
      tag: "Mediacje Rodzinne"
    },
    {
      title: "Matura bez paniki",
      author: "Zosia, 19 lat",
      story: "Zawsze byłam dobrą uczennicą, ale presja przed maturą mnie sparaliżowała. Przestałam spać, bałam się otworzyć książkę. Pan Piotr, trener nauki, nie uczył mnie matematyki. Uczył mnie, jak opanować lęk. Pokazał mi techniki oddechowe i sposób organizacji pracy, który sprawił, że materiał przestał mnie przytłaczać. Zdałam lepiej niż myślałam, ale najważniejsze, że odzyskałam wiarę w siebie. Teraz wiem, że moja wartość nie zależy od cyferek na świadectwie.",
      tag: "Coaching Edukacyjny"
    },
    {
      title: "Rozwód z szacunkiem",
      author: "Tomasz, tata 10-letniej Mai",
      story: "Rozstanie z żoną było burzliwe. Nie potrafiliśmy rozmawiać bez krzyku, a Maja cierpiała pośrodku. Mecenas Wiśniewska pomogła nam stworzyć Plan Wychowawczy online. Spotkaliśmy się na wideo, każdy w swoim domu, co obniżyło emocje. Pani Mecenas przeprowadziła nas przez kwestie prawne prostym językiem, skupiając się na dobru Mai. Dziś potrafimy ustalić grafik wakacji bez udziału prawników. Pomiędzy dało nam narzędzia do bycia rodzicami po rozstaniu.",
      tag: "Wsparcie Prawne"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-brand-light/30 relative">
      <div className="container mx-auto px-6 relative z-10">
         <SectionTitle 
           subtitle="Historie Zmian" 
           title="Oni znaleźli drogę" 
         />

        <div className="stories-grid grid lg:grid-cols-3 gap-8 mt-16">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="story-card bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group rounded-none"
            >
              <div className="mb-6 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                <Quote size={48} className="rotate-180" />
              </div>
              
              <h4 className="font-serif text-2xl font-bold text-brand-dark mb-4 tracking-tight group-hover:text-brand-primary transition-colors">
                {story.title}
              </h4>
              
              <div className="mb-6">
                 <span className="inline-block px-3 py-1 bg-brand-light text-brand-dark text-xs font-bold tracking-wider uppercase rounded-sm">
                    {story.tag}
                 </span>
              </div>

              <p className="text-gray-600 font-sans font-light leading-relaxed mb-8 flex-grow">
                "{story.story}"
              </p>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <p className="font-serif font-bold text-brand-dark">{story.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
