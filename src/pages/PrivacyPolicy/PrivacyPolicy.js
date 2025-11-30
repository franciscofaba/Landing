import React, { useState, useEffect } from 'react';
import { Lock, Eye, Database, Cookie, ShieldCheck, Server, Mail } from 'lucide-react';

// --- DATA: Estructura de la política ---
const privacySections = [
  {
    id: 'info-collection',
    title: '1. Información que Recopilamos',
    icon: <Database size={20} />,
    type: 'table', // Renderizado especial
    content: [
      { dato: 'Identificación', detalle: 'Nombre, Email, Teléfono', proposito: 'Creación de cuenta y soporte.' },
      { dato: 'Financiero', detalle: 'Historial de transacciones (no guardamos tarjetas completas)', proposito: 'Procesamiento de pagos.' },
      { dato: 'Técnico', detalle: 'Dirección IP, Tipo de navegador, SO', proposito: 'Seguridad y análisis de errores.' },
    ]
  },
  {
    id: 'usage',
    title: '2. Cómo Usamos sus Datos',
    icon: <Eye size={20} />,
    type: 'text',
    content: `Utilizamos su información personal para proporcionar y mantener nuestro servicio, notificarle sobre cambios, permitir funciones interactivas, brindar atención al cliente y recopilar análisis valiosos para mejorar nuestra plataforma.`
  },
  {
    id: 'third-parties',
    title: '3. Terceros y Procesadores',
    icon: <Server size={20} />,
    type: 'cards', // Renderizado de tarjetas
    content: [
      { name: 'Amazon Web Services', role: 'Hosting e Infraestructura', country: 'EE.UU.' },
      { name: 'Stripe', role: 'Procesamiento de Pagos', country: 'EE.UU.' },
      { name: 'Google Analytics', role: 'Analítica Web', country: 'EE.UU.' },
    ]
  },
  {
    id: 'cookies',
    title: '4. Política de Cookies',
    icon: <Cookie size={20} />,
    type: 'text',
    content: `Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y mantener cierta información. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se envía una cookie.`
  },
  {
    id: 'rights',
    title: '5. Sus Derechos (GDPR/CCPA)',
    icon: <ShieldCheck size={20} />,
    type: 'list',
    content: [
      'Derecho de Acceso: Solicitar una copia de sus datos.',
      'Derecho de Rectificación: Corregir datos inexactos.',
      'Derecho al Olvido: Solicitar la eliminación de su cuenta.',
      'Derecho a la Portabilidad: Recibir sus datos en formato estructurado.'
    ]
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('info-collection');

  // --- Scroll Spy Logic (Reutilizable) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    privacySections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-6">
              <Lock size={14} />
              <span>Centro de Privacidad</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nos tomamos su privacidad en serio. Esta política describe de forma transparente qué datos recopilamos, por qué lo hacemos y cómo los protegemos.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* --- SIDEBAR NAVIGATION --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              {privacySections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-200'
                      : 'text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <span className={activeSection === section.id ? 'text-emerald-600' : 'text-slate-400'}>
                    {section.icon}
                  </span>
                  {section.title.split('. ')[1]} {/* Muestra solo el nombre sin el número */}
                </button>
              ))}
            </nav>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="lg:col-span-9 space-y-16">
            
            {privacySections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                {/* LOGICA DE RENDERIZADO SEGÚN TIPO */}
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  
                  {/* CASO: TABLA DE DATOS */}
                  {section.type === 'table' && (
                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white not-prose">
                      <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo de Dato</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Detalle</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Propósito</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {section.content.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 text-sm font-semibold text-slate-900">{row.dato}</td>
                              <td className="px-6 py-4 text-sm text-slate-600">{row.detalle}</td>
                              <td className="px-6 py-4 text-sm text-slate-600">{row.proposito}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASO: TARJETAS DE TERCEROS */}
                  {section.type === 'cards' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                      {section.content.map((provider, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col">
                          <h4 className="font-bold text-slate-900">{provider.name}</h4>
                          <span className="text-sm text-emerald-600 font-medium mb-2">{provider.role}</span>
                          <span className="text-xs text-slate-400 mt-auto">Ubicación de datos: {provider.country}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CASO: LISTA */}
                  {section.type === 'list' && (
                    <ul className="grid gap-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CASO: TEXTO STANDARD */}
                  {section.type === 'text' && <p>{section.content}</p>}
                
                </div>
              </section>
            ))}

            {/* --- CONTACT BOX --- */}
            <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">¿Dudas sobre su privacidad?</h3>
                <p className="text-slate-300 mb-6 md:mb-0 max-w-md">
                  Nuestro Oficial de Protección de Datos (DPO) está disponible para responder sus inquietudes.
                </p>
              </div>
              <a 
                href="mailto:privacy@midominio.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                <Mail size={18} />
                privacy@midominio.com
              </a>
            </div>

            <div className="text-center text-sm text-slate-400 pt-8 border-t border-slate-200">
              Política vigente desde el 1 de Enero, 2025
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}