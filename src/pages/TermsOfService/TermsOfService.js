import React, { useState, useEffect } from 'react';
import { Shield, Printer, ArrowRight, Clock } from 'lucide-react';

// 1. DATA: Idealmente esto vendría de un archivo separado (ej: content/terms.js)
const termsSections = [
  {
    id: 'intro',
    title: '1. Introducción',
    content: `Bienvenido a nuestra plataforma. Al acceder a nuestro sitio web, usted acepta estar sujeto a estos términos de servicio, a todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.`
  },
  {
    id: 'license',
    title: '2. Licencia de Uso',
    content: `Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título.`
  },
  {
    id: 'account',
    title: '3. Cuentas y Seguridad',
    content: `Para acceder a ciertos servicios, es posible que deba crear una cuenta. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Acepta asumir la responsabilidad de todas las actividades que ocurran bajo su cuenta.`
  },
  {
    id: 'payments',
    title: '4. Pagos y Reembolsos',
    content: `Los servicios premium se facturan por adelantado. Si no está satisfecho con el servicio, puede solicitar un reembolso completo dentro de los primeros 14 días de su compra inicial. Después de este período, no se ofrecen reembolsos.`
  },
  {
    id: 'termination',
    title: '5. Terminación',
    content: `Podemos terminar o suspender su acceso inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, entre otros, si usted incumple los Términos.`
  },
  {
    id: 'changes',
    title: '6. Modificaciones',
    content: `Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en vigor los nuevos términos.`
  }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('');

  // Lógica para detectar qué sección está visible (Scroll Spy)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' } // Ajusta el punto de activación
    );

    termsSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll suave con offset para el header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* HEADER HERO */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-600 mb-4 font-semibold text-sm tracking-wide uppercase">
              <Shield size={18} />
              <span>Legal y Cumplimiento</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Por favor lea atentamente estos términos antes de utilizar nuestros servicios.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <Clock size={14} />
                <span>Última actualización: 30 de Noviembre, 2025</span>
              </div>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Printer size={14} />
                <span>Imprimir versión</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL CON GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* SIDEBAR DE NAVEGACIÓN (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tabla de Contenidos
              </p>
              {termsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`group flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  {activeSection === section.id && (
                    <ArrowRight size={14} className="ml-auto opacity-100" />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* CONTENIDO DEL TEXTO */}
          <main className="lg:col-span-9">
            <div className="prose prose-slate prose-lg max-w-none">
              {/* Introducción General (Opcional) */}
              <p className="lead">
                Estos Términos y Condiciones ("Términos", "Acuerdo") son un acuerdo entre el Operador del Sitio web ("Operador del Sitio web", "nosotros", "nos" o "nuestro") y usted ("Usuario", "usted" o "su").
              </p>
              
              <hr className="my-8 border-gray-200" />

              {/* Mapeo de Secciones */}
              {termsSections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-24 mb-12" // scroll-mt ayuda a que el sticky header no tape el título
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group cursor-pointer flex items-center gap-2">
                    {section.title}
                    {/* Icono de enlace (Anchor) visible solo en hover */}
                    <span 
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-blue-600 transition-opacity"
                        onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${section.id}`);
                            // Aquí podrías añadir un toast de "Enlace copiado"
                        }}
                        title="Copiar enlace a esta sección"
                    >
                        #
                    </span>
                  </h2>
                  <div className="text-gray-600 leading-7">
                    {/* Renderizamos el contenido. Si tienes HTML en el string, usa dangerouslySetInnerHTML con cuidado */}
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Pie de página del documento */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">¿Tienes preguntas legales?</h3>
                <p className="text-blue-800 mb-4 text-sm">
                  Si tienes dudas sobre estos términos, por favor contáctanos antes de continuar usando el servicio.
                </p>
                <a href="/contact" className="text-blue-600 font-bold hover:underline text-sm">
                  Contactar a Soporte &rarr;
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}