import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Lógica Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Función de Navegación Inteligente
  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Actualidad", id: "actualidad" },
    { name: "Equipos", id: "equipos" },
    { name: "Inscripciones", id: "inscripciones" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0 cursor-pointer group z-50"
          >
            <img
              src="/LogoSinFondo.png"
              alt="Logo CV Noáin"
              className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg -mr-2 md:-mr-3"
            />
            <div className="flex flex-col leading-none pl-1">
              <span className="font-black text-lg md:text-2xl tracking-tighter text-white group-hover:text-[#FF6B95] transition-colors uppercase">
                CV NOÁIN
              </span>
            </div>
          </Link>

          {/* Desktop Links: 
            He cambiado 'md:flex' por 'lg:flex' para que en tablets o móviles rotados 
            no intente meter los links y use siempre la hamburguesa.
          */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavigation(e, link.id)}
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF6B95] transition-colors relative cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle: 
            Visible hasta que llegamos a resolución 'lg' (1024px), 
            asegurando que en móviles rotados salga la hamburguesa.
          */}
          <button
            className="lg:hidden text-white hover:text-[#FF6B95] transition-colors relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Menú Móvil - Soporte para scroll si el móvil está rotado */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center animate-fadeIn overflow-y-auto py-10">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#FF6B95] transition-colors p-2"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="flex flex-col items-center gap-6 md:gap-8 my-auto">
            <Link
              to="/"
              className="text-3xl font-black uppercase tracking-tighter text-[#FF6B95] mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CV NOÁIN
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavigation(e, link.id)}
                className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white hover:text-[#FF6B95] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
