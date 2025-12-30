
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const InteractiveButton: React.FC<Props> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-10 py-4 rounded-full font-bold transition-all duration-500 active:scale-95 group overflow-hidden tracking-tight";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    secondary: "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]",
    outline: "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-tr from-blue-500 via-violet-500 to-cyan-500" />
      {/* Subtle shine sweep */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]" />
    </button>
  );
};

export default InteractiveButton;
