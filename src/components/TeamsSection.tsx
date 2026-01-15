import React, { useState } from 'react';
import { Users, Clock, MapPin, ChevronRight, Hash, X, Crown, Shield } from 'lucide-react';

// --- TYPES ---
interface Player {
  number: number;
  name: string;
  position: string;
  captain?: boolean;
  image: string;
}

interface Team {
  id: string;
  category: string;
  league: string;
  coach: string;
  location: string;
  schedule: { day: string; time: string }[];
  roster: Player[];
}

// --- MOCK DATA ---
const PLACEHOLDER_AVATAR = "https://i.pinimg.com/564x/6e/d9/37/6ed937968c58d0c2f575baa4100c7ddd.jpg";

const TEAMS: Team[] = [
  {
    id: "SEN-FEM-A",
    category: "SENIOR FEMENINO A",
    league: "1ª DIVISIÓN NACIONAL",
    coach: "Iñaki",
    location: "Polideportivo Noáin",
    schedule: [
      { day: "Lunes", time: "20:00 - 22:00" },
      { day: "Miércoles", time: "20:00 - 22:00" },
      { day: "Viernes", time: "19:30 - 21:30" }
    ],
    roster: [
      { number: 4, name: "Leire Martínez", position: "Líbero", image: PLACEHOLDER_AVATAR },
      { number: 7, name: "Amaia Oroz", position: "Colocadora", captain: true, image: PLACEHOLDER_AVATAR },
      { number: 9, name: "Nerea Iturria", position: "Receptora", image: PLACEHOLDER_AVATAR },
      { number: 11, name: "Maite Zudaire", position: "Central", image: PLACEHOLDER_AVATAR },
      { number: 12, name: "Irati Goñi", position: "Opuesta", image: PLACEHOLDER_AVATAR },
      { number: 5, name: "Ane Beriáin", position: "Receptora", image: PLACEHOLDER_AVATAR },
      { number: 15, name: "Oihane Pérez", position: "Central", image: PLACEHOLDER_AVATAR },
      { number: 2, name: "Uxue Arrieta", position: "Colocadora", image: PLACEHOLDER_AVATAR },
      { number: 18, name: "Laura Sánchez", position: "Receptora", image: PLACEHOLDER_AVATAR },
      { number: 10, name: "Patricia Ruiz", position: "Opuesta", image: PLACEHOLDER_AVATAR }
    ]
  },
  {
    id: "JUV-MAS",
    category: "JUVENIL MASCULINO",
    league: "JUEGOS DEPORTIVOS DE NAVARRA",
    coach: "Javier",
    location: "Polideportivo Noáin",
    schedule: [
      { day: "Martes", time: "18:30 - 20:30" },
      { day: "Jueves", time: "18:30 - 20:30" }
    ],
    roster: [
      { number: 1, name: "Mikel Etxeberria", position: "Colocador", image: PLACEHOLDER_AVATAR },
      { number: 5, name: "Jon García", position: "Receptor", captain: true, image: PLACEHOLDER_AVATAR },
      { number: 8, name: "Iker López", position: "Central", image: PLACEHOLDER_AVATAR },
      { number: 13, name: "Unai Torres", position: "Líbero", image: PLACEHOLDER_AVATAR },
      { number: 14, name: "Aimar Jiménez", position: "Opuesto", image: PLACEHOLDER_AVATAR },
      { number: 6, name: "Xabier Huarte", position: "Receptor", image: PLACEHOLDER_AVATAR },
      { number: 22, name: "Pablo Sanz", position: "Central", image: PLACEHOLDER_AVATAR },
      { number: 9, name: "Julen Azcona", position: "Receptor", image: PLACEHOLDER_AVATAR },
      { number: 3, name: "Asier Munarriz", position: "Colocador", image: PLACEHOLDER_AVATAR }
    ]
  },
  {
    id: "ESC-MIX",
    category: "ESCUELA DE VOLEY",
    league: "INICIACIÓN (8-12 AÑOS)",
    coach: "Maite & Ane",
    location: "Colegio Público",
    schedule: [
      { day: "Sábados", time: "10:00 - 12:00" },
      { day: "Domingos", time: "Partidos Escolares" }
    ],
    roster: [
      { number: 1, name: "Lucía Fernández", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 2, name: "Marcos Pérez", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 3, name: "Sofía Aranguren", position: "Benjamín", image: PLACEHOLDER_AVATAR },
      { number: 4, name: "Hugo Ruiz", position: "Benjamín", image: PLACEHOLDER_AVATAR },
      { number: 5, name: "Carla Echeverría", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 6, name: "Daniel Sola", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 7, name: "Noa Iribarren", position: "Benjamín", image: PLACEHOLDER_AVATAR },
      { number: 8, name: "Mateo González", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 9, name: "Irune Zabalza", position: "Alevín", image: PLACEHOLDER_AVATAR },
      { number: 10, name: "Adrián Romero", position: "Benjamín", image: PLACEHOLDER_AVATAR }
    ]
  }
];

export const TeamsSection: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  return (
    <section id="equipos" className="w-full bg-slate-950 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden scroll-mt-20">
      
      {/* Background Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto mb-16 text-center md:text-left">
        <div className="inline-block bg-[#FF6B95] text-slate-950 text-xs font-black px-3 py-1 uppercase tracking-widest mb-4 transform -skew-x-12">
          Temporada 24/25
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase leading-none">
          NUESTROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">EQUIPOS</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
          <div 
            key={team.id} 
            className="group relative bg-slate-900/80 backdrop-blur-sm border-2 border-slate-800 p-6 sm:p-8 hover:border-[#FF6B95] transition-all duration-300 flex flex-col rounded-sm"
          >
            {/* Hover Stripes Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(45deg, #FF6B95 0, #FF6B95 1px, transparent 0, transparent 50%)',
                   backgroundSize: '10px 10px'
                 }}
            />

            {/* Header Card */}
            <div className="mb-6 relative z-10 border-b border-white/10 pb-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest flex items-center gap-1">
                  <Hash className="w-3 h-3" /> {team.id}
                </span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2 group-hover:text-[#FF6B95] transition-colors">
                {team.category}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {team.league}
              </p>
            </div>

            {/* Body Card - Specs */}
            <div className="flex-1 relative z-10 space-y-4 mb-8">
              
              {/* Entrenador */}
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center border border-slate-700 text-[#FF6B95]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Entrenador/a</p>
                  <p className="text-sm font-bold uppercase">{team.coach}</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center border border-slate-700 text-[#FF6B95]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Pista</p>
                  <p className="text-sm font-bold uppercase">{team.location}</p>
                </div>
              </div>

              {/* Horarios */}
              <div className="mt-4 bg-slate-950/50 p-4 border border-slate-800 rounded-sm">
                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2 flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Horarios de Pista
                </p>
                <ul className="space-y-2">
                  {team.schedule.map((slot, idx) => (
                    <li key={idx} className="flex justify-between text-sm text-slate-300 font-mono border-b border-dashed border-slate-800 pb-1 last:border-0 last:pb-0">
                      <span className="font-bold text-white">{slot.day}</span>
                      <span className="opacity-80">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="relative z-10 mt-auto">
              <button 
                onClick={() => setSelectedTeam(team)}
                className="w-full py-3 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#FF6B95] hover:border-[#FF6B95] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                Ver Plantilla
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* --- MODAL ROSTER (PLANTILLA) --- */}
      {selectedTeam && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedTeam(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 w-full max-w-lg max-h-[90vh] flex flex-col rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-slate-950 p-6 border-b border-white/10 shrink-0">
              {/* Pattern Header */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, #FF6B95 0, #FF6B95 1px, transparent 0, transparent 20px)',
                   }}
              />
              <button 
                onClick={() => setSelectedTeam(null)}
                className="absolute top-4 right-4 z-50 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10 pr-8">
                <span className="text-[10px] text-[#FF6B95] font-black uppercase tracking-widest mb-1 block">
                  Plantilla 2024/25
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                  {selectedTeam.category}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {selectedTeam.league}
                </p>
              </div>
            </div>

            {/* Modal Body (Scrollable List) */}
            <div className="flex-1 overflow-y-auto p-0">
              <ul className="divide-y divide-white/5">
                {selectedTeam.roster.map((player) => (
                  <li key={player.number} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-5">
                      
                      {/* Avatar & Dorsal (Gaming/Card Style) */}
                      <div className="relative">
                        <img 
                          src={player.image} 
                          alt={player.name} 
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-[#FF6B95] transition-colors"
                        />
                        {/* Dorsal Badge Overlay */}
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black border-2 ${
                            player.position === 'Líbero' 
                              ? 'bg-emerald-900 text-emerald-400 border-emerald-500'
                              : 'bg-slate-800 text-white border-slate-600 group-hover:bg-[#FF6B95] group-hover:border-[#FF6B95]'
                          } transition-all`}>
                          {player.number}
                        </div>
                      </div>
                      
                      {/* Nombre y Rol */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm md:text-base uppercase ${player.position === 'Líbero' ? 'text-emerald-400' : 'text-white'}`}>
                            {player.name}
                          </span>
                          {player.captain && (
                            <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-500 text-[9px] px-1.5 py-0.5 rounded border border-yellow-500/30 font-bold uppercase tracking-wider">
                              <Crown className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                          {player.position}
                        </span>
                      </div>
                    </div>
                    
                    {/* Visual Decorator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Shield className="w-4 h-4 text-[#FF6B95]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
             {/* Modal Footer */}
             <div className="p-4 border-t border-white/5 bg-slate-950 shrink-0 text-center">
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                  Club Voleibol Noáin • El Rayo
                </p>
             </div>

          </div>
        </div>
      )}

    </section>
  );
};