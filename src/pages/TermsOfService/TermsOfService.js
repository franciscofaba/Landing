import  { useState, useEffect } from 'react';
import { Shield, Printer, ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// 1. DATA: Términos actualizados para HAROLD
const termsSections = [
  {
    id: 'intro',
    title: '1. Introducción',
    content: `Estos Términos y Condiciones regulan el acceso y uso del asistente virtual “Harold”, 
un servicio automatizado que funciona principalmente a través de WhatsApp y que permite 
crear recordatorios, programar llamadas, gestionar listas, contactos y agendar reuniones en Google Calendar.

Al utilizar Harold, usted declara haber leído, comprendido y aceptado plenamente estos Términos. 
Si no está de acuerdo, debe abstenerse de usar el servicio.`
  },

  {
    id: 'service',
    title: '2. Naturaleza del Servicio',
    content: `
Harold es un asistente automatizado basado en inteligencia artificial cuyo propósito es ayudar 
a los usuarios a gestionar tareas personales, recordatorios, listas, reuniones y otros automatismos.

El servicio funciona mediante:
• WhatsApp Cloud API (para comunicación)  
• Firebase (para almacenar datos del usuario)  
• OpenAI (para interpretar y procesar los mensajes)  
• Google Calendar API (para agendar reuniones cuando el usuario lo solicite)  
• Twilio (para ejecutar llamadas programadas)  
• Cloud Tasks (para ejecutar recordatorios en horarios futuros)

Harold NO proporciona asesoría legal, médica, financiera ni de ningún tipo profesional.  
Las respuestas generadas pueden contener errores y no deben considerarse garantías absolutas.`
  },

  {
    id: 'account',
    title: '3. Registro, Identidad y Seguridad',
    content: `
Para utilizar Harold debe contar con un número de WhatsApp válido y activo. 
Al usar el servicio usted confirma que:

• Es el titular del número utilizado o tiene autorización para utilizarlo.  
• La información proporcionada es verídica.  
• No hará un uso indebido del servicio.

Usted es responsable de toda la actividad que ocurra desde su número de WhatsApp 
y de mantener su dispositivo seguro.`
  },

  {
    id: 'user-obligations',
    title: '4. Obligaciones del Usuario',
    content: `
El usuario se compromete a:

• No utilizar Harold para actividades ilegales, fraudulentas o prohibidas.  
• No enviar contenido ofensivo, discriminatorio, violento o que infrinja derechos de terceros.  
• No intentar manipular, atacar o interrumpir el funcionamiento del servicio.  
• No utilizar el servicio para spam, publicidad no autorizada o actividades masivas.  
• Respetar los límites operativos del sistema y sus funciones.

El incumplimiento de estas obligaciones puede resultar en la terminación inmediata del acceso.`
  },

  {
    id: 'payments',
    title: '5. Pagos y Suscripciones',
    content: `
Harold puede ofrecer planes gratuitos y planes de pago.  
El acceso a las funciones premium requiere el pago previo del plan correspondiente.

Política de pagos:
• Los pagos no son reembolsables, salvo que la ley lo exija o se indique lo contrario.  
• El servicio puede ofrecer períodos de prueba opcionales.  
• Si el usuario no paga o cancela su plan, las funciones premium se desactivarán.  
• El pago permite acceso al servicio, pero no otorga propiedad sobre la tecnología utilizada.

Si utiliza un método de suscripción externo (ej. Stripe), se aplican también sus propios términos.`
  },

  {
    id: 'integrations',
    title: '6. Integraciones con Google Calendar',
    content: `
Si el usuario conecta voluntariamente su cuenta de Google, Harold podrá:

• Crear eventos.  
• Agendar reuniones.  
• Añadir recordatorios al calendario.  

Harold NUNCA realiza acciones en Google Calendar sin solicitud explícita del usuario.  
El usuario puede revocar su autorización en cualquier momento enviando “elimina mis datos”.`
  },

  {
    id: 'ai-limitations',
    title: '7. Limitaciones del Servicio y Riesgos Tecnológicos',
    content: `
El usuario reconoce que Harold utiliza inteligencia artificial y, por lo tanto:

• Puede cometer errores, interpretar mal instrucciones o entregar información imprecisa.  
• No garantiza precisión absoluta en fechas, horas o contenidos.  
• Puede depender de servicios externos cuya disponibilidad no controlamos.  
• No se garantiza disponibilidad ininterrumpida del servicio.

El usuario es responsable de verificar información crítica o sensible.`
  },

  {
    id: 'termination',
    title: '8. Suspensión o Terminación del Servicio',
    content: `
Podemos suspender o cancelar el acceso del usuario si:

• Se detecta uso indebido o malintencionado.  
• El usuario incumple estos Términos.  
• Existen motivos técnicos o de seguridad.  
• El usuario solicita la eliminación total de sus datos.

Si el usuario pide “Harold elimina mis datos”, se borrará toda su información almacenada en Firebase 
y se revocarán integraciones activas. Esto es irreversible.`
  },

  {
    id: 'liability',
    title: '9. Responsabilidad y Limitaciones',
    content: `
En la máxima medida permitida por la ley, el operador del servicio no se hace responsable por:

• Pérdidas derivadas del uso de Harold.  
• Fallos técnicos de WhatsApp, Google, OpenAI, Twilio u otros terceros.  
• Errores de interpretación de la IA.  
• Datos ingresados incorrectamente por el usuario.  
• Eventos no ejecutados por fallas externas.

El servicio se ofrece “tal cual” (“as is”) sin garantías de ningún tipo.`
  },

  {
    id: 'changes',
    title: '10. Modificaciones a los Términos',
    content: `
Nos reservamos el derecho de modificar estos términos en cualquier momento.  
Cuando existan cambios relevantes, se notificará al usuario por WhatsApp o en el sitio web.

El uso continuo del servicio después de cambios significa aceptación de los mismos.`
  },

  {
    id: 'contact',
    title: '11. Contacto',
    content: `
Si tiene preguntas, inquietudes o solicitudes legales, puede contactarnos a:

📩 Email: bpesociedad@gmail.com  
📱 WhatsApp: +56954119146`
  }
];


export default function TermsOfService() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
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
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-300 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-100 transition-all"
      >
        ← Volver al inicio
      </button>
      
      {/* HEADER */}
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
              Por favor lea atentamente estos términos antes de utilizar Harold.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <Clock size={14} />
                <span>Última actualización: 1 de Enero, 2025</span>
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

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* SIDEBAR */}
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

          {/* MAIN */}
          <main className="lg:col-span-9">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="lead">
                Estos Términos constituyen un acuerdo legal entre el usuario y el operador del asistente Harold.
              </p>

              <hr className="my-8 border-gray-200" />

              {termsSections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-24 mb-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group flex items-center gap-2">
                    {section.title}
                    <span 
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-blue-600 transition-opacity cursor-pointer"
                      onClick={() => navigator.clipboard.writeText(
                        `${window.location.origin}${window.location.pathname}#${section.id}`
                      )}
                      title="Copiar enlace a esta sección"
                    >
                      #
                    </span>
                  </h2>
                  <div className="text-gray-600 leading-7 whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">¿Tienes preguntas legales?</h3>
                <p className="text-blue-800 mb-4 text-sm">
                  Si tienes dudas sobre estos términos, contáctanos antes de continuar usando el servicio.
                </p>
                <a href="mailto:legal@midominio.com" className="text-blue-600 font-bold hover:underline text-sm">
                  Contactar a Soporte Legal →
                </a>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
