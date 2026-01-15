import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Lógica Sticky Header (Scroll Effect)
  useEffect(() => {
    const handleScroll = () => {
      // Si scroll > 50px, activamos el fondo oscuro
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Links de Navegación (Anchors)
  const navLinks = [
    { name: 'Actualidad', href: '#actualidad' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Inscripciones', href: '#inscripciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex items-center justify-between">
          
          {/* Brand / Logo - Link a Inicio */}
          <a href="#inicio" className="flex items-center gap-2 cursor-pointer group z-50">
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter text-white group-hover:text-[#FF6B95] transition-colors">
                CV NOÁIN
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF6B95] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-[#FF6B95] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-[#FF6B95] transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* 3. Rediseño Menú Móvil (Overlay Fixed) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center animate-fadeIn">
          
          {/* Botón Cerrar (Top Right) */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#FF6B95] transition-colors p-2"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Links Centrados */}
          <div className="flex flex-col items-center gap-8">
            <a 
              href="#inicio" 
              className="text-3xl font-black uppercase tracking-tighter text-[#FF6B95] mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CV NOÁIN
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[#FF6B95] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
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