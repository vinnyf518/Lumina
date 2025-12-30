
import React from 'react';
import InteractiveButton from './InteractiveButton';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-7xl px-6 py-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-full pointer-events-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
            <div className="w-4 h-4 border-2 border-black rotate-45 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <span className="font-bold text-lg tracking-tight">Nick Ferrante</span>
        </div>

        <div>
          <InteractiveButton variant="primary" className="!px-6 !py-2 text-xs">
            Build Now
          </InteractiveButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
