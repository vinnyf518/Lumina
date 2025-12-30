
import React from 'react';

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const FeatureCard: React.FC<Props> = ({ title, description, icon, image }) => {
  return (
    <div className="group relative p-[1.5px] rounded-[3rem] overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-1000 border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
      {/* Animated Gradient Border on Hover */}
      <div className="absolute inset-[-100%] group-hover:animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,#3b82f6_360deg)] opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />
      
      <div className="relative bg-[#060606] rounded-[calc(3rem-1.5px)] p-14 h-full flex flex-col gap-12 z-10">
        <div className="p-6 bg-gradient-to-br from-neutral-800 to-black border border-white/10 rounded-2xl w-fit text-blue-400 shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:text-blue-300 group-hover:shadow-blue-500/20 transition-all duration-700">
          {icon}
        </div>
        
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-neutral-100 group-hover:text-white transition-colors tracking-tighter leading-none">
            {title}
          </h3>
          <p className="text-neutral-500 leading-relaxed text-lg font-light group-hover:text-neutral-300 transition-colors">
            {description}
          </p>
        </div>

        <div className="mt-auto rounded-[2rem] overflow-hidden border border-white/5 relative aspect-video shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
