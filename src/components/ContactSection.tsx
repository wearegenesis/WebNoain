import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="w-full bg-slate-900 py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Centered */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF6B95] text-slate-950 text-xs font-black px-3 py-1 uppercase tracking-widest mb-6 -skew-x-12">
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
            DÓNDE ESTAMOS
          </h2>
        </div>

        {/* Info Grid - 3 Columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1: Location */}
            <div className="flex flex-col items-center text-center group bg-slate-950 p-8 border border-slate-800 rounded-sm hover:border-[#FF6B95] transition-all duration-300">
               <div className="w-16 h-16 bg-slate-900 border border-slate-800 flex items-center justify-center text-[#FF6B95] mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20 rounded-full">
                 <MapPin className="w-7 h-7" />
               </div>
               <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-lg">Polideportivo Municipal</h4>
               <p className="text-slate-400 text-sm leading-relaxed font-medium">
                 Calle Inmaculada, 2<br />
                 31110 Noáin (Valle de Elorz)<br />Navarra
               </p>
            </div>

            {/* Item 2: Email */}
            <div className="flex flex-col items-center text-center group bg-slate-950 p-8 border border-slate-800 rounded-sm hover:border-[#FF6B95] transition-all duration-300">
               <div className="w-16 h-16 bg-slate-900 border border-slate-800 flex items-center justify-center text-[#FF6B95] mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20 rounded-full">
                 <Mail className="w-7 h-7" />
               </div>
               <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-lg">Email</h4>
               <a href="mailto:info@cvnoain.com" className="text-slate-400 text-sm leading-relaxed font-medium hover:text-[#FF6B95] transition-colors">
                 info@cvnoain.com<br />
                 secretaria@cvnoain.com
               </a>
            </div>

             {/* Item 3: Phone */}
             <div className="flex flex-col items-center text-center group bg-slate-950 p-8 border border-slate-800 rounded-sm hover:border-[#FF6B95] transition-all duration-300">
               <div className="w-16 h-16 bg-slate-900 border border-slate-800 flex items-center justify-center text-[#FF6B95] mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20 rounded-full">
                 <Phone className="w-7 h-7" />
               </div>
               <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-lg">Teléfono</h4>
               <a href="tel:+34600123456" className="text-slate-400 text-sm leading-relaxed font-medium hover:text-[#FF6B95] transition-colors">
                 +34 600 123 456<br />
                 Lunes a Viernes (17h - 20h)
               </a>
            </div>
        </div>

      </div>
    </section>
  );
};