import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div id="inicio" className="relative h-screen w-full overflow-hidden bg-slate-950">
      
      {/* --- BLOQUE DE FONDO (IMAGEN + OVERLAY) --- */}
      <div className="absolute inset-0">
          {/* 1. Imagen de Acción */}
          <img
              src="https://i.ibb.co/21xmGYwY/Balon.png"
              alt="Partido de voleibol en pista cubierta"
              className="h-full w-full object-cover"
          />
          {/* 2. Overlay Oscuro */}
          <div className="absolute inset-0 bg-slate-950/70"></div>
      </div>

      {/* 3. Contenido Principal */}
      <div className="relative z-10 h-full border-b-4 border-[#FF6B95] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          
        {/* Decorative Tag */}
        <div className="mb-6 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B95] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B95]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-white">Temporada 2024/25</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-widest leading-none mb-8 drop-shadow-2xl">
          SOY <br className="md:hidden" />EL <span className="text-[#FF6B95]">MEJOR</span>
        </h1>

        {/* Subtitle / Motto */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-medium tracking-wide mb-10">
          Pasión, garra y voleibol en estado puro. Bienvenidos a la casa del Club Voleibol Noáin.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Botón Principal: Únete -> Ancla a #inscripciones */}
          <a 
            href="#inscripciones"
            className="group relative px-8 py-4 bg-[#FF6B95] text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-transform transform active:scale-95 hover:brightness-110 flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              ÚNETE AL CLUB <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Slanted shine effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
          </a>

          {/* Botón Secundario: Equipos -> Ancla a #equipos */}
          <a 
            href="#equipos"
            className="px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-slate-950 transition-colors duration-300 flex items-center justify-center"
          >
            NUESTROS EQUIPOS
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 w-full flex flex-col items-center justify-center opacity-80 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white mb-2">Baja</span>
          <ChevronDown className="w-6 h-6 text-[#FF6B95]" />
        </div>

      </div>
    </div>
  );
};