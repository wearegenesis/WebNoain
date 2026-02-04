import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div
      id="inicio"
      className="relative min-h-[100dvh] w-full bg-slate-950 flex flex-col overflow-x-hidden"
    >
      {/* --- FONDO --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Balon.png"
          alt="Voleibol Noáin"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
        {/* Etiqueta Temporada */}
        <div className="mb-6 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B95] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B95]"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-white">
            Temporada 2026/27
          </span>
        </div>

        {/* Título CORREGIDO */}
        {/* CAMBIO: he puesto 'leading-[1.1]' en móvil para separar las líneas y evitar que la tilde toque.
            En desktop (md:) vuelve a 'leading-[0.9]' porque ahí el texto va en una sola línea. */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 uppercase drop-shadow-2xl">
          C.V. <br className="md:hidden" />
          <span className="text-[#FF6B95]">NOÁIN</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-md md:max-w-2xl text-sm md:text-xl text-slate-300 font-medium tracking-wide mb-10 px-4 opacity-90 leading-relaxed">
          Pasión, garra y voleibol en estado puro.{" "}
          <br className="hidden md:block" />
          Bienvenidos a la casa del Club Voleibol Noáin.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[280px] sm:max-w-none justify-center items-center">
          <a
            href="#inscripciones"
            className="w-full sm:w-auto group relative px-8 py-4 bg-[#FF6B95] text-white font-bold text-xs md:text-sm tracking-widest uppercase transition-all active:scale-95 flex items-center justify-center shadow-lg shadow-[#FF6B95]/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              ÚNETE AL CLUB{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="relative pb-8 w-full hidden md:flex flex-col items-center justify-center opacity-40 animate-bounce pointer-events-none">
        <ChevronDown className="w-6 h-6 text-[#FF6B95]" />
      </div>

      {/* Borde inferior Neón */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B95] shadow-[0_0_15px_rgba(255,107,149,0.6)] z-20"></div>
    </div>
  );
};
