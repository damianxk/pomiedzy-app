import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-rose-500 border-2 border-transparent",
    secondary: "bg-brand-dark text-white hover:bg-teal-900 border-2 border-transparent",
    outline: "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};