import React, { useState } from 'react';
import { Calendar, ArrowRight, Trophy, Users, Clock, X } from 'lucide-react';

// Definición del tipo para las noticias
interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  icon: React.ElementType;
}

const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "VICTORIA ÉPICA DEL SENIOR A ANTE NAVARVOLEY",
    category: "CRÓNICA",
    date: "12 OCT 2024",
    image: "https://www.errea.com/media/wysiwyg/1200x800_egonu.jpg",
    excerpt: "Nuestras chicas remontaron un 0-2 en contra para llevarse el derbi en un tie-break de infarto. El pabellón vibró con el punto final.",
    icon: Trophy
  },
  {
    id: 2,
    title: "ABIERTO EL PLAZO DE INSCRIPCIÓN 2024/25",
    category: "CLUB",
    date: "01 SEP 2024",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2069&auto=format&fit=crop",
    excerpt: "¿Quieres formar parte del Rayo? Ya puedes apuntarte a nuestras escuelas deportivas y equipos federados. ¡Plazas limitadas!",
    icon: Users
  },
  {
    id: 3,
    title: "NUEVOS HORARIOS DE ENTRENAMIENTO",
    category: "AVISOS",
    date: "28 AGO 2024",
    image: "https://www.mistralchronicles.com/wp-content/uploads/2020/12/Haikyuu-00.jpg",
    excerpt: "Consulta la asignación de pistas y horas para todas las categorías. Los cambios serán efectivos a partir del próximo lunes.",
    icon: Clock
  }
];

export const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="actualidad" className="w-full bg-slate-900 py-20 px-6 md:px-12 lg:px-24 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-2">
            ÚLTIMAS <span className="text-[#FF6B95]">NOTICIAS</span>
          </h2>
          <p className="text-slate-400 font-medium">
            Mantente al día de todo lo que ocurre en el CV Noáin.
          </p>
        </div>
        
        <button className="hidden md:flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#FF6B95] transition-colors group">
          Ver todas las noticias
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_NEWS.map((news) => (
          <article 
            key={news.id} 
            className="group relative flex flex-col h-full bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-[#FF6B95] transition-all duration-300 shadow-lg hover:shadow-[#FF6B95]/10 cursor-pointer"
            onClick={() => setSelectedNews(news)}
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute top-4 left-4 z-20 bg-[#FF6B95] text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                {news.category}
              </div>
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Meta Data */}
              <div className="flex items-center gap-2 text-[#FF6B95] mb-3">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider">{news.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF6B95] transition-colors line-clamp-2">
                {news.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {news.excerpt}
              </p>

              {/* Footer / Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNews(news);
                  }}
                  className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors"
                >
                  Leer más
                </button>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B95] transition-colors">
                  <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile only button */}
      <div className="mt-12 text-center md:hidden">
         <button className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#FF6B95] transition-colors">
          Ver todas las noticias
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* MODAL / POPUP */}
      {selectedNews && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Close Button */}
             <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-[#FF6B95] transition-colors"
             >
                <X className="w-6 h-6" />
             </button>

             {/* Header Image */}
             <div className="relative w-full h-64 md:h-80 shrink-0">
               <img 
                 src={selectedNews.image} 
                 alt={selectedNews.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               <div className="absolute bottom-4 left-6 md:left-8">
                  <span className="bg-[#FF6B95] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-widest mb-2 inline-block">
                    {selectedNews.category}
                  </span>
               </div>
             </div>

             {/* Content */}
             <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-[#FF6B95] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wider">{selectedNews.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-6">
                  {selectedNews.title}
                </h2>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {selectedNews.excerpt}
                  </p>
                  <br/>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <br/>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
             </div>
          </div>
        </div>
      )}

    </section>
  );
};