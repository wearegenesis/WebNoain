import React, { useState, useMemo, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Trophy,
  Users,
  Clock,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Medal,
} from "lucide-react";

// --- MOCK DATA (Añade más noticias si quieres probar la paginación) ---
const ALL_NEWS = [
  {
    id: 1,
    title: "VICTORIA ÉPICA DEL SENIOR A",
    category: "CRÓNICA",
    date: "12 OCT 2024",
    image: "https://www.errea.com/media/wysiwyg/1200x800_egonu.jpg",
    excerpt:
      "Nuestras chicas remontaron un 0-2 en contra para llevarse el derbi.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "INSCRIPCIONES 2024/25",
    category: "CLUB",
    date: "01 SEP 2024",
    image:
      "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2069&auto=format&fit=crop",
    excerpt: "¿Quieres formar parte del Rayo? Apúntate ya.",
    icon: Users,
  },
  {
    id: 3,
    title: "NUEVOS HORARIOS",
    category: "AVISOS",
    date: "28 AGO 2024",
    image:
      "https://www.mistralchronicles.com/wp-content/uploads/2020/12/Haikyuu-00.jpg",
    excerpt: "Consulta la asignación de pistas y horas.",
    icon: Clock,
  },
  {
    id: 4,
    title: "TORNEO DE REYES",
    category: "ESCUELA",
    date: "07 ENE 2025",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
    excerpt: "Gran actuación de nuestra cantera en el torneo navideño.",
    icon: Medal,
  },
  {
    id: 5,
    title: "ASAMBLEA GENERAL",
    category: "CLUB",
    date: "15 DIC 2024",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
    excerpt: "Resumen de los puntos tratados en la asamblea anual.",
    icon: Users,
  },
  {
    id: 6,
    title: "CAMBIO PARTIDO MUTILVA",
    category: "AVISOS",
    date: "10 NOV 2024",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
    excerpt: "El encuentro se traslada al domingo a las 12:00h.",
    icon: Megaphone,
  },
  {
    id: 7,
    title: "CAMBIO PARTIDO MUTILVA",
    category: "AVISOS",
    date: "10 NOV 2024",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
    excerpt: "El encuentro se traslada al domingo a las 12:00h.",
    icon: Megaphone,
  },
];

const CATEGORIES = ["TODAS", "CRÓNICA", "CLUB", "ESCUELA", "AVISOS"];
const ITEMS_PER_PAGE = 6;

export const AllNewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<(typeof ALL_NEWS)[0] | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState("TODAS");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect para diseño sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Volver a página 1 si cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  // 1. Filtrado
  const filteredNews = useMemo(() => {
    return ALL_NEWS.filter((news) => {
      const matchesCategory =
        activeCategory === "TODAS" || news.category === activeCategory;
      const matchesSearch =
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // 2. Paginación
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const displayedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full min-h-screen bg-slate-950">
      {/* Navbar y Footer se manejan en App.tsx para no duplicar */}

      {/* --- HEADER COMPACTO --- */}
      {/* Ajustado padding para reducir espacio */}
      <header className="relative w-full pt-32 pb-12 bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950 pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <div className="inline-block bg-[#FF6B95] text-white text-[10px] md:text-xs font-black px-3 py-1 uppercase tracking-widest mb-4 rounded-sm shadow-lg shadow-[#FF6B95]/20">
            Blog & Actualidad
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-2 drop-shadow-xl">
            ACTUALIDAD Y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B95] to-purple-500">
              CRÓNICAS
            </span>
          </h1>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">
            Todas las novedades del Club Voleibol Noáin.
          </p>
        </div>
      </header>

      {/* --- TOOLBAR (STICKY FIX) --- */}
      {/* CAMBIO: top-[60px] ajustado matemáticamente a la altura del Navbar contraído */}
      <div
        className={`sticky top-[60px] z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-4"
            : "bg-slate-950 border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#FF6B95] border-[#FF6B95] text-white shadow-[0_0_15px_rgba(255,107,149,0.4)]"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="relative w-full lg:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#FF6B95] transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#FF6B95] focus:ring-1 focus:ring-[#FF6B95] transition-all placeholder:text-slate-600 font-medium"
            />
          </div>
        </div>
      </div>

      {/* --- GRID DE NOTICIAS --- */}
      {/* Reducido padding superior a py-8 para quitar espacio extra */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8 min-h-[50vh]">
        {displayedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedNews.map((news) => (
              <article
                key={news.id}
                className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-[#FF6B95] transition-all duration-300 shadow-lg hover:shadow-[#FF6B95]/10 cursor-pointer hover:-translate-y-1"
                onClick={() => setSelectedNews(news)}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-[#FF6B95] text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest shadow-md">
                    {news.category}
                  </div>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 text-[#FF6B95] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold tracking-wider">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF6B95] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-medium">
                    {news.excerpt}
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                      Leer artículo
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B95] transition-colors">
                      <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
            <div className="bg-slate-900 p-6 rounded-full mb-4 border border-slate-800">
              <Search className="w-12 h-12 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No se encontraron noticias
            </h3>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("TODAS");
              }}
              className="mt-6 text-[#FF6B95] font-bold uppercase text-sm hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* --- PAGINACIÓN DINÁMICA --- */}
        {filteredNews.length > ITEMS_PER_PAGE && (
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              className="w-10 h-10 flex items-center justify-center rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-[#FF6B95] disabled:opacity-50 disabled:hover:border-slate-700 transition-colors"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Genera botones según número de páginas */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold text-sm transition-all ${
                  currentPage === page
                    ? "bg-[#FF6B95] text-white shadow-lg shadow-[#FF6B95]/20"
                    : "bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              className="w-10 h-10 flex items-center justify-center rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-[#FF6B95] disabled:opacity-50 transition-colors"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>

      {/* --- MODAL (POPUP) --- */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-[#FF6B95] transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-72 md:h-96 shrink-0">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:left-10 right-6">
                <span className="bg-[#FF6B95] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-widest mb-3 inline-block shadow-lg">
                  {selectedNews.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-none drop-shadow-md">
                  {selectedNews.title}
                </h2>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 text-slate-400 mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FF6B95]" />
                  <span className="text-sm font-bold tracking-wider">
                    {selectedNews.date}
                  </span>
                </div>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                <p className="lead text-xl font-medium text-white mb-6">
                  {selectedNews.excerpt}
                </p>
                <p>Contenido completo de la noticia simulado...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
