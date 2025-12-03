import React, { useState, useEffect } from 'react';
import { Lock, Eye, Database, Cookie, ShieldCheck, Server, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// --- DATA: Estructura de la política ---
const privacySections = [
  {
    id: 'info-collection',
    title: '1. Información que Recopilamos',
    icon: <Database size={20} />,
    type: 'table',
    content: [
      { 
        dato: 'Datos Personales',
        detalle: 'Nombre, número de WhatsApp, correo (solo si el usuario lo entrega o conecta Google Calendar).',
        proposito: 'Identificación del usuario y funcionamiento del asistente.'
      },
      {
        dato: 'Contenido del Usuario',
        detalle: 'Mensajes enviados a Harold, imágenes o audios enviados por WhatsApp.',
        proposito: 'Interpretar solicitudes y ejecutar automatizaciones personales.'
      },
      {
        dato: 'Datos Generados en el Servicio',
        detalle: 'Recordatorios, llamadas programadas, reuniones calendarizadas, listas creadas, contactos creados e historial conversacional.',
        proposito: 'Permitir que Harold recuerde, gestione y ejecute las acciones solicitadas.'
      },
      {
        dato: 'Datos Técnicos',
        detalle: 'ID de mensaje de WhatsApp, ID de thread de OpenAI, metadata técnica y logs de ejecución.',
        proposito: 'Seguridad, auditoría interna y diagnóstico de errores.'
      },
      {
        dato: 'Datos Externos',
        detalle: 'Eventos creados en Google Calendar y tokens OAuth (calendar.events + email).',
        proposito: 'Permitir agendar reuniones y recordatorios en el calendario del usuario.'
      }
    ]
  },

  {
    id: 'usage',
    title: '2. Cómo Usamos sus Datos',
    icon: <Eye size={20} />,
    type: 'text',
    content: `
Utilizamos los datos exclusivamente para ejecutar las funciones del asistente Harold, tales como:

• Crear y administrar recordatorios.  
• Agendar llamadas.  
• Crear reuniones en Google Calendar.  
• Crear listas y contactos.  
• Procesar imágenes enviadas por WhatsApp.  
• Mantener un historial para asegurar continuidad en la experiencia.  

No utilizamos los datos para publicidad, no se venden a terceros y no se usan para entrenar modelos externos.`
  },

  {
    id: 'third-parties',
    title: '3. Servicios Externos con los que Compartimos Datos',
    icon: <Server size={20} />,
    type: 'cards',
    content: [
      {
        name: 'Meta – WhatsApp Cloud API',
        role: 'Recepción y envío de mensajes.',
        country: 'Internacional'
      },
      {
        name: 'Firebase – Google Cloud',
        role: 'Almacenamiento de datos del usuario.',
        country: 'EE.UU.'
      },
      {
        name: 'Google Calendar API',
        role: 'Agendamiento de reuniones y recordatorios.',
        country: 'EE.UU.'
      },
      {
        name: 'OpenAI',
        role: 'Procesamiento del contenido del mensaje para interpretar la intención.',
        country: 'EE.UU.'
      },
      {
        name: 'Twilio',
        role: 'Ejecución de llamadas programadas (solo se envía el número del usuario).',
        country: 'EE.UU.'
      },
      {
        name: 'Google Cloud Tasks',
        role: 'Ejecución de recordatorios en horarios futuros.',
        country: 'EE.UU.'
      }
    ]
  },

  {
    id: 'cookies',
    title: '4. Cookies y Tecnologías Similares',
    icon: <Cookie size={20} />,
    type: 'text',
    content: `
Nuestro servicio principal funciona a través de WhatsApp y no utiliza cookies para operar.  
Solo el sitio web informativo puede usar cookies básicas para funcionamiento y métricas internas.`
  },

  {
    id: 'rights',
    title: '5. Derechos del Usuario',
    icon: <ShieldCheck size={20} />,
    type: 'list',
    content: [
      'Derecho a Solicitar Acceso: El usuario puede solicitar una copia de todos los datos almacenados.',
      'Derecho a Rectificación: Se puede corregir cualquier información incorrecta.',
      'Derecho a Eliminación Total (“Derecho al Olvido”): El usuario puede solicitar borrar todos sus datos almacenados en Firebase.',
      'Derecho a Desvincular Google Calendar: Eliminamos los tokens OAuth inmediatamente si el usuario lo solicita.',
      'Derecho a Oposición: El usuario puede dejar de utilizar Harold en cualquier momento.'
    ]
  },

  {
    id: 'deletion',
    title: '6. Conservación y Eliminación de Datos',
    icon: <Database size={20} />,
    type: 'text',
    content: `
Conservamos los datos solo mientras el usuario continúa utilizando Harold.  
Si el usuario solicita “elimina mis datos”, procedemos a:

• Borrar toda la colección del usuario en Firebase.  
• Eliminar recordatorios, listas, reuniones y contactos almacenados.  
• Eliminar tokens de Google Calendar.  
• No almacenamos logs de WhatsApp más allá de la metadata técnica.  

Una vez eliminados, no existe forma de recuperarlos.`
  },

  {
    id: 'security',
    title: '7. Seguridad',
    icon: <ShieldCheck size={20} />,
    type: 'text',
    content: `
Utilizamos medidas de seguridad estándar de la industria, tales como:

• Firestore con reglas de acceso restringidas.  
• Autenticación segura con Google OAuth.  
• Comunicación cifrada con todos los servicios externos.  
• Control de acceso interno y registros de actividad.  

Aun así, ningún sistema es 100% infalible, pero tomamos todas las medidas razonables para proteger sus datos.`
  }
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('info-collection');

  // --- Scroll Spy Logic ---
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
            <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-300 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-100 transition-all"
      >
        ← Volver al inicio
      </button>

      {/* HEADER */}
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
              Esta política describe qué datos recopilamos, por qué lo hacemos y cómo los protegemos dentro del asistente Harold.
            </p>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          {/* SIDEBAR */}
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
                  {section.title.split('. ')[1]}
                </button>
              ))}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
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

                <div className="prose prose-slate prose-lg max-w-none text-slate-600">

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

                  {section.type === 'text' && <p>{section.content}</p>}
                </div>
              </section>
            ))}

            {/* CONTACTO */}
            <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">¿Dudas sobre su privacidad?</h3>
                <p className="text-slate-300 mb-6 md:mb-0 max-w-md">
                  Estamos disponibles para responder cualquier inquietud relacionada con el uso de sus datos.
                </p>
              </div>
              <a 
                href="mailto:privacy@midominio.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                <Mail size={18} />
                bpesociedad@gmail.com
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
