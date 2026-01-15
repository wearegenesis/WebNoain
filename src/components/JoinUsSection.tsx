import React from 'react';
import { ArrowRight, CheckCircle, Download, UserPlus, ClipboardList, Shield } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "RELLENA TUS DATOS",
    desc: "Completa el formulario de pre-inscripción online en menos de 2 minutos.",
    icon: ClipboardList
  },
  {
    id: 2,
    title: "PRUEBA UN ENTRENO",
    desc: "Ven a conocernos. Tienes 2 sesiones de prueba sin compromiso.",
    icon: UserPlus
  },
  {
    id: 3,
    title: "¡YA ERES DEL RAYO!",
    desc: "Formaliza la ficha y recoge tu equipación oficial. Bienvenido al equipo.",
    icon: Shield
  }
];

const BENEFITS = [
  "Entrenadores Titulados Nivel I y II",
  "Equipación Oficial de Juego incluida",
  "Seguro Médico Deportivo",
  "Participación en Liga Navarra",
  "Descuentos en Campus de Verano"
];

export const JoinUsSection: React.FC = () => {
  return (
    <section id="inscripciones" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-950 scroll-mt-20">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Electric Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF6B95]/10 to-transparent"></div>
      
      {/* Giant Decorative Lightning Bolt (Watermark) */}
      <svg className="absolute top-10 right-[-10%] md:right-10 w-[40rem] h-[40rem] text-white/5 -rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT COLUMN: PERSUASION --- */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B95]/10 border border-[#FF6B95]/30 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B95] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B95]"></span>
            </span>
            <span className="text-[#FF6B95] font-bold text-xs uppercase tracking-widest">Plazas limitadas 24/25</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[0.9] mb-6 drop-shadow-lg">
            NO JUEGUES <br />
            SOLO, <br />
            {/* Fix clipping: Added pr-2 and py-1 to ensure italic text isn't cut off by overflow/clip */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B95] to-purple-500 pr-2 py-1">ÚNETE AL RAYO</span>
          </h2>

          <p className="text-lg text-slate-300 font-medium mb-10 max-w-lg leading-relaxed">
            Buscamos gente con pasión, garra y compromiso. Da igual tu nivel, tenemos un hueco para ti en nuestra familia. ¿Te atreves?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href="https://forms.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-[#FF6B95] text-white px-8 py-5 font-black uppercase tracking-widest text-lg hover:bg-white hover:text-[#FF6B95] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,107,149,0.3)] flex items-center justify-center gap-3 group rounded-sm text-center"
            >
              Formulario Inscripción
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#"
              className="px-8 py-5 border-2 border-white/10 text-slate-300 font-bold uppercase tracking-wider hover:border-white hover:text-white transition-all flex items-center justify-center gap-2 rounded-sm bg-slate-900/50 backdrop-blur-sm text-center"
            >
              <Download className="w-5 h-5" />
              Dossier Info
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: INFO & STEPS --- */}
        <div className="flex flex-col gap-8">
          
          {/* Steps Card */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-xl relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B95]/10 rounded-full blur-3xl"></div>

             <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="text-[#FF6B95]">3 Pasos</span> para jugar
             </h3>

             <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-800 -z-10"></div>

                {STEPS.map((step) => (
                  <div key={step.id} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shrink-0 text-white font-bold z-10 group-hover:border-[#FF6B95] transition-colors">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1 flex items-center gap-2">
                        {step.title} 
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Pricing / Value Card */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950/50 border border-[#FF6B95]/20 p-8 rounded-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative">
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Tu cuota incluye:
              </h3>
              <ul className="space-y-2">
                {BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#FF6B95]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-lg border border-white/5 text-center min-w-[140px]">
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Cuota Desde</p>
              <div className="text-4xl font-black text-white tracking-tighter">
                25<span className="text-xl">€</span>
              </div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">/ mes</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};