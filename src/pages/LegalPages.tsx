import React, { useEffect } from "react";
import { ShieldCheck, FileText, Cookie, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Componente Layout para textos legales (Diseño mejorado)
const LegalLayout: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#FF6B95]/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Botón Volver */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wider">
            Volver al inicio
          </span>
        </Link>

        {/* Header de la página */}
        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-8">
          <div className="p-3 bg-[#FF6B95]/10 rounded-xl text-[#FF6B95]">
            {icon}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {title}
          </h1>
        </div>

        {/* Contenido en Tarjeta "Glass" */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div
            className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight
                prose-h3:text-[#FF6B95] prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-white prose-strong:font-bold
                prose-ul:my-6 prose-li:text-slate-300 prose-li:marker:text-[#FF6B95]"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. AVISO LEGAL
export const AvisoLegal: React.FC = () => (
  <LegalLayout title="Aviso Legal" icon={<ShieldCheck className="w-8 h-8" />}>
    <p>
      En cumplimiento del deber de información recogido en artículo 10 de la Ley
      34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
      del Comercio Electrónico (LSSICE), se facilitan a continuación los datos
      de información general del sitio web:
    </p>

    <h3>1. Datos Identificativos</h3>
    <ul>
      <li>
        <strong>Denominación Social:</strong> CLUB VOLEIBOL NOÁIN
      </li>
      <li>
        <strong>NIF:</strong> [EN TRÁMITE]
      </li>
      <li>
        <strong>Domicilio Social:</strong> Calle Real, 24, 31110 Noáin (Valle de
        Elorz), Navarra, España.
      </li>
      <li>
        <strong>Email de contacto:</strong> cvnoain@gmail.com
      </li>
      <li>
        <strong>Teléfono:</strong> +34 620 467 367
      </li>
      <li>
        <strong>Registro:</strong> Club deportivo en proceso de inscripción en
        el Registro de Entidades Deportivas de Navarra.
      </li>
    </ul>

    <h3>2. Objeto</h3>
    <p>
      El presente sitio web ha sido creado para dar a conocer y permitir el
      acceso general de todos los usuarios a la información, actividades,
      productos y servicios diversos ofrecidos por el CLUB VOLEIBOL NOÁIN. El
      acceso a la web implica la aceptación sin reservas de las presentes
      condiciones.
    </p>

    <h3>3. Propiedad Intelectual e Industrial</h3>
    <p>
      Todos los contenidos del sitio web (diseño gráfico, código fuente, logos,
      textos, gráficos, ilustraciones, fotografías y demás elementos que
      aparecen en la Web), salvo que se indique lo contrario, son titularidad
      exclusiva del CLUB VOLEIBOL NOÁIN. Queda prohibida la reproducción,
      distribución, comunicación pública y transformación, total o parcial, sin
      la autorización expresa del Club.
    </p>

    <h3>4. Exención de Responsabilidad</h3>
    <p>
      El Club no se hace responsable de los errores u omisiones que pudieran
      existir en la información facilitada, ni de la aplicación o uso concreto
      que pudiera hacerse de la misma. Tampoco se hace responsable de los
      contenidos de las páginas web de terceros a las que se pueda acceder a
      través de enlaces presentes en la web.
    </p>
  </LegalLayout>
);

// 2. POLÍTICA DE PRIVACIDAD
export const PoliticaPrivacidad: React.FC = () => (
  <LegalLayout title="Privacidad" icon={<FileText className="w-8 h-8" />}>
    <p>
      En el CLUB VOLEIBOL NOÁIN estamos comprometidos con la protección de la
      privacidad y el uso correcto de los datos personales. Tratamos la
      información que nos facilita con el fin de prestarles el servicio
      solicitado.
    </p>

    <h3>1. Responsable del Tratamiento</h3>
    <p>
      Los datos de carácter personal que se pudieran recabar directamente del
      interesado serán tratados de forma confidencial y quedarán incorporados a
      la correspondiente actividad de tratamiento titularidad del CLUB VOLEIBOL
      NOÁIN.
    </p>

    <h3>2. Finalidad del tratamiento</h3>
    <ul>
      <li>Gestión administrativa, contable y fiscal del Club.</li>
      <li>Gestión de inscripciones de socios y deportistas.</li>
      <li>
        Envío de comunicaciones informativas sobre actividades del Club
        (partidos, eventos, noticias).
      </li>
      <li>
        Respuesta a consultas realizadas a través del formulario de contacto o
        email.
      </li>
    </ul>

    <h3>3. Legitimación</h3>
    <p>
      La base legal para el tratamiento de sus datos es el consentimiento del
      interesado (al enviar un formulario o inscribirse) y/o la ejecución de la
      relación contractual/deportiva en el caso de los socios y jugadores.
    </p>

    <h3>4. Derechos del usuario</h3>
    <p>
      Usted tiene derecho a obtener confirmación sobre si en CLUB VOLEIBOL NOÁIN
      estamos tratando sus datos personales por tanto tiene derecho a acceder a
      sus datos personales, rectificar los datos inexactos o solicitar su
      supresión cuando los datos ya no sean necesarios. Puede ejercer estos
      derechos enviando un email a <strong>cvnoain@gmail.com</strong>.
    </p>
  </LegalLayout>
);

// 3. POLÍTICA DE COOKIES
export const PoliticaCookies: React.FC = () => (
  <LegalLayout title="Cookies" icon={<Cookie className="w-8 h-8" />}>
    <p>
      Este sitio web puede utilizar cookies propias y de terceros para mejorar
      la experiencia de usuario y obtener datos estadísticos de navegación.
    </p>

    <h3>1. ¿Qué son las cookies?</h3>
    <p>
      Una cookie es un fichero que se descarga en su ordenador al acceder a
      determinadas páginas web. Las cookies permiten a una página web, entre
      otras cosas, almacenar y recuperar información sobre los hábitos de
      navegación de un usuario o de su equipo y, dependiendo de la información
      que contengan y de la forma en que utilice su equipo, pueden utilizarse
      para reconocer al usuario.
    </p>

    <h3>2. Tipos de cookies utilizadas</h3>
    <ul>
      <li>
        <strong>Cookies técnicas:</strong> Son aquellas imprescindibles para el
        correcto funcionamiento del portal y la utilización de las diferentes
        opciones y servicios que ofrece.
      </li>
      <li>
        <strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por
        nosotros o por terceros, nos permiten cuantificar el número de usuarios
        y así realizar la medición y análisis estadístico de la utilización que
        hacen los usuarios del servicio.
      </li>
    </ul>

    <h3>3. Administración de las cookies</h3>
    <p>
      Puede usted permitir, bloquear o eliminar las cookies instaladas en su
      equipo mediante la configuración de las opciones del navegador instalado
      en su ordenador (Chrome, Firefox, Safari, Edge...). Tenga en cuenta que
      bloquear las cookies puede afectar a la funcionalidad de la web.
    </p>
  </LegalLayout>
);
