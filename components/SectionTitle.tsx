import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const textColor = light ? 'text-white' : 'text-brand-dark';
  const subColor = light ? 'text-teal-100' : 'text-teal-600';

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      <span className={`uppercase tracking-widest text-sm font-bold ${subColor} mb-4 block font-sans`}>
        {subtitle}
      </span>
      <h2 className={`font-serif text-4xl md:text-6xl ${textColor} font-bold tracking-tight leading-[1.1]`}>
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-brand-accent mt-8 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};