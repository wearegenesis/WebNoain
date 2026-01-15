import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

export const NewsSection: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "noticia"] | order(fecha desc) [0...3] {
      _id,
      titulo,
      categoria,
      fecha,
      imagenPrincipal,
      contenido
    }`;
    client.fetch(query).then((data) => {
      setNoticias(data);
      setLoading(false);
    });
  }, []);

  const getExcerpt = (blocks: any[]) => {
    if (!blocks) return "";
    const block = blocks.find((b) => b._type === "block");
    return block ? block.children.map((c: any) => c.text).join(" ") : "";
  };

  if (loading) return null;

  return (
    <section
      id="actualidad"
      className="w-full bg-slate-900 py-20 px-6 md:px-12 lg:px-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-2">
            ÚLTIMAS <span className="text-[#FF6B95]">NOTICIAS</span>
          </h2>
          <p className="text-slate-400 font-medium">
            Mantente al día de todo lo que ocurre en el CV Noáin.
          </p>
        </div>
        <Link
          to="/noticias"
          className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#FF6B95] transition-colors group"
        >
          Ver todas las noticias
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((news) => (
          <article
            key={news._id}
            className="group relative flex flex-col h-full bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-[#FF6B95] transition-all duration-300 shadow-lg hover:shadow-[#FF6B95]/10 cursor-pointer"
            onClick={() => setSelectedNews(news)}
          >
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <div className="absolute top-4 left-4 z-20 bg-[#FF6B95] text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                {news.categoria}
              </div>
              {news.imagenPrincipal && (
                <img
                  src={urlFor(news.imagenPrincipal).url()}
                  alt={news.titulo}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-2 text-[#FF6B95] mb-3">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  {news.fecha
                    ? new Date(news.fecha).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Reciente"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF6B95] transition-colors line-clamp-2 uppercase">
                {news.titulo}
              </h3>

              {/* RESUMEN AUTOMÁTICO */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {getExcerpt(news.contenido)}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  Leer más
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B95] transition-colors">
                  <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedNews && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-[#FF6B95] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-64 md:h-80 shrink-0">
              {selectedNews.imagenPrincipal && (
                <img
                  src={urlFor(selectedNews.imagenPrincipal).url()}
                  className="w-full h-full object-cover"
                  alt={selectedNews.titulo}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 md:left-8">
                <span className="bg-[#FF6B95] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-widest mb-2 inline-block shadow-lg">
                  {selectedNews.categoria}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight drop-shadow-md">
                  {selectedNews.titulo}
                </h2>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-[#FF6B95] mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wider uppercase">
                  {selectedNews.fecha
                    ? new Date(selectedNews.fecha).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    : "Reciente"}
                </span>
              </div>
              <div className="prose prose-invert prose-pink max-w-none text-slate-300">
                <PortableText value={selectedNews.contenido} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
