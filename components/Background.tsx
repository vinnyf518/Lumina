
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#010101] overflow-hidden">
      {/* Vibrant Moving Ambient Gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/15 blur-[130px] transition-transform duration-[3000ms] ease-out opacity-80"
        style={{ transform: `translate(${mousePos.x * 0.12}%, ${mousePos.y * 0.12}%)` }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[75%] h-[75%] rounded-full bg-violet-600/15 blur-[150px] transition-transform duration-[4000ms] ease-out opacity-80"
        style={{ transform: `translate(${-mousePos.x * 0.15}%, ${-mousePos.y * 0.15}%)` }}
      />
      <div 
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-400/5 blur-[120px] transition-transform duration-[5000ms] ease-out"
        style={{ transform: `translate(${-mousePos.x * 0.08}%, ${mousePos.y * 0.08}%)` }}
      />
      
      {/* Static Accent Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float absolute top-[15%] left-[10%] w-2 h-2 bg-blue-500/20 rounded-full blur-sm" />
        <div className="animate-float-delayed absolute top-[45%] left-[85%] w-3 h-3 bg-violet-500/20 rounded-full blur-md" />
        <div className="animate-float absolute bottom-[20%] left-[30%] w-2 h-2 bg-cyan-400/20 rounded-full blur-sm" />
      </div>
    </div>
  );
};

export default Background;
