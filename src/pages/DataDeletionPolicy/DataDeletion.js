import React, { useState } from 'react';
import { Trash2, AlertTriangle, CheckCircle, Clock, Download, ChevronRight, HelpCircle } from 'lucide-react';

export default function DataDeletion() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulación de envío a API
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- HERO HEADER: Tono de advertencia suave --- */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 text-rose-600 rounded-full mb-6">
            <Trash2 size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Gestión y Eliminación de Datos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tienes el derecho total sobre tu huella digital. Aquí te explicamos cómo eliminar tu cuenta y qué sucede con tu información una vez inicias el proceso.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* --- SECCIÓN 1: MÉTODO AUTOSERVICIO (APP) --- */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">1</span>
            Eliminación desde la Aplicación (Recomendado)
          </h2>
          
          {/* Stepper Visual */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Inicia Sesión", desc: "Entra a tu perfil en la app o web." },
              { title: "Ve a Configuración", desc: "Busca la sección 'Privacidad y Seguridad'." },
              { title: "Zona de Peligro", desc: "Selecciona la opción 'Eliminar mi cuenta'." }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0 md:text-center border-l-2 md:border-l-0 md:border-t-2 border-slate-200 md:pt-4">
                <div className="absolute -left-[9px] top-0 md:left-1/2 md:-top-[9px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white"></div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN 2: FORMULARIO DE SOLICITUD (SIN LOGIN) --- */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          {formStatus === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitud Recibida</h3>
              <p className="text-slate-600">
                Hemos enviado un correo de confirmación. Por seguridad, deberás confirmar la eliminación haciendo clic en el enlace enviado.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-rose-600 font-semibold hover:underline"
              >
                Nueva solicitud
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">2</span>
                 ¿No tienes acceso a la app?
              </h2>
              <p className="text-slate-600 mb-6 ml-10">
                Si perdiste el acceso a tu cuenta, completa este formulario para iniciar el proceso manual.
              </p>

              <form onSubmit={handleSubmit} className="ml-0 md:ml-10 max-w-lg space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico asociado</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">Motivo (Opcional)</label>
                    <select id="reason" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white">
                        <option value="">Selecciona una opción...</option>
                        <option value="privacy">Preocupaciones de privacidad</option>
                        <option value="not_useful">Ya no uso el servicio</option>
                        <option value="duplicate">Tengo otra cuenta</option>
                    </select>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-rose-600 text-white font-bold py-3 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Procesando...' : 'Solicitar Eliminación'}
                  {!formStatus && <ChevronRight size={18} />}
                </button>
                <p className="text-xs text-slate-400 text-center mt-3">
                  Esta acción es irreversible una vez confirmada por correo.
                </p>
              </form>
            </>
          )}
        </section>

        {/* --- SECCIÓN 3: TIMELINE DE RETENCIÓN (Visualización de datos) --- */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-slate-900">¿Qué sucede después de solicitarlo?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Fase 1 */}
            <div className="bg-slate-100 p-6 rounded-xl border border-transparent hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <Clock className="text-rose-500" size={20} />
                <span>Día 0 (Inmediato)</span>
              </div>
              <p className="text-sm text-slate-600">
                Tu cuenta se desactiva. Tu perfil, fotos y comentarios dejan de ser visibles públicamente.
              </p>
            </div>
            {/* Fase 2 */}
            <div className="bg-slate-100 p-6 rounded-xl border border-transparent hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <AlertTriangle className="text-amber-500" size={20} />
                <span>Día 1-30 (Gracia)</span>
              </div>
              <p className="text-sm text-slate-600">
                Periodo de gracia. Los datos permanecen en "soft-delete" por si cambias de opinión o fue un error.
              </p>
            </div>
            {/* Fase 3 */}
            <div className="bg-slate-100 p-6 rounded-xl border border-transparent hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <Trash2 className="text-slate-500" size={20} />
                <span>Día 30+ (Permanente)</span>
              </div>
              <p className="text-sm text-slate-600">
                Borrado definitivo de servidores y copias de seguridad. El proceso es irreversible.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: PORTABILIDAD (Antes de irte) --- */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg shrink-0">
                <Download size={24} />
            </div>
            <div>
                <h3 className="font-bold text-indigo-900">Descarga tus datos antes de irte</h3>
                <p className="text-indigo-700 text-sm mt-1">
                    Según el GDPR, tienes derecho a la portabilidad. Puedes descargar un archivo JSON con tu historial.
                </p>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
            Solicitar Archivo
          </button>
        </div>

      </div>
    </div>
  );
}