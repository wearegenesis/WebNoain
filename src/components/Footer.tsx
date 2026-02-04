import React from "react";
import {
  Instagram,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  FileText,
  Cookie,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* COLUMNA 1: BRANDING */}
          <div className="flex flex-col gap-6">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <div className="flex flex-col">
                <h2 className="text-4xl font-black italic tracking-tighter leading-none group-hover:text-slate-200 transition-colors">
                  CV <span className="text-[#FF6B95]">NOÁIN</span>
                </h2>
                {/* CAMBIO: Texto "Somos El Rayo" en blanco */}
                <span className="text-xs uppercase tracking-[0.3em] text-white font-bold mt-2">
                  Somos El Rayo
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Formando jugadores y personas desde la base hasta la competición.
              Pasión, respeto y garra en cada punto.
            </p>
          </div>

          {/* COLUMNA 2: CONTACTO + INSTAGRAM */}
          <div className="flex flex-col gap-6">
            {/* CAMBIO: Recuperada la rayita rosa lateral */}
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-l-4 border-[#FF6B95] pl-3 mb-2">
              Contacto
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#FF6B95] shrink-0 mt-0.5" />
                <span className="text-sm">
                  Calle Real, 24, 31110
                  <br />
                  Noáin (Valle de Elorz), Navarra
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-[#FF6B95] shrink-0" />
                <a
                  href="mailto:cvnoain@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  cvnoain@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-[#FF6B95] shrink-0" />
                <a
                  href="tel:+34620467367"
                  className="text-sm hover:text-white transition-colors"
                >
                  +34 620 467 367
                </a>
              </li>
            </ul>

            {/* BOTÓN INSTAGRAM "CARD" */}
            <a
              href="https://www.instagram.com/cvnoain/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 group flex items-center gap-4 bg-white/5 hover:bg-[#FF6B95] border border-white/10 hover:border-[#FF6B95] p-4 rounded-xl transition-all duration-300 w-full sm:w-fit"
            >
              <div className="bg-slate-950 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-white/90">
                  Síguenos en
                </span>
                <span className="font-bold text-white">@cvnoain</span>
              </div>
              <ExternalLink className="w-4 h-4 ml-2 text-slate-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div className="flex flex-col gap-6">
            {/* CAMBIO: Recuperada la rayita rosa lateral */}
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-l-4 border-[#FF6B95] pl-3 mb-2">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/aviso-legal"
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#FF6B95] transition-colors w-fit group"
              >
                <ShieldCheck className="w-4 h-4 group-hover:text-[#FF6B95] transition-colors" />{" "}
                Aviso Legal
              </Link>
              <Link
                to="/privacidad"
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#FF6B95] transition-colors w-fit group"
              >
                <FileText className="w-4 h-4 group-hover:text-[#FF6B95] transition-colors" />{" "}
                Política de Privacidad
              </Link>
              <Link
                to="/cookies"
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#FF6B95] transition-colors w-fit group"
              >
                <Cookie className="w-4 h-4 group-hover:text-[#FF6B95] transition-colors" />{" "}
                Política de Cookies
              </Link>
            </nav>
          </div>
        </div>

        {/* COPYRIGHT & UP */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-medium">
            © {currentYear} Club Voleibol Noáin.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-[#FF6B95] transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">
              Subir
            </span>
            <ArrowUp className="w-3 h-3 text-[#FF6B95] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};
