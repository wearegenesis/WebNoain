import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-black text-white italic tracking-tighter leading-none">
            CV <span className="text-[#FF6B95]">NOÁIN</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-sm">
            Desde 1995 fomentando el deporte base y la competición de alto nivel en Navarra.
          </p>
        </div>

        {/* Links & Social */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-10 lg:gap-20 w-full lg:w-auto">
          
          {/* Legal Links */}
          <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-[#FF6B95] transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-[#FF6B95] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#FF6B95] transition-colors">Cookies</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
             <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B95] hover:border-[#FF6B95] hover:-translate-y-1 transition-all duration-300">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B95] hover:border-[#FF6B95] hover:-translate-y-1 transition-all duration-300">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B95] hover:border-[#FF6B95] hover:-translate-y-1 transition-all duration-300">
               <Facebook className="w-5 h-5" />
             </a>
          </div>
        </div>

      </div>

      {/* Copyright & Scroll To Top */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600">
        <p>© 2024 Club Voleibol Noáin. El Rayo.</p>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#FF6B95] font-bold hover:text-white transition-colors"
          >
            Subir <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>

    </footer>
  );
};