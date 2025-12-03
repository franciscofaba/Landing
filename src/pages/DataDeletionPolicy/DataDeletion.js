import { useState } from 'react';
import { Trash2, AlertTriangle, CheckCircle, Clock, Download, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function DataDeletion() {
  const navigate = useNavigate();

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulación envío API
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
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
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 text-rose-600 rounded-full mb-6">
            <Trash2 size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Políticas de Eliminación de Datos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Si deseas eliminar toda tu información asociada a nuestros servicios, aquí te explicamos cómo solicitarlo y qué ocurre con tus datos.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* SECCION 1 */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">1</span>
            Cómo solicitar la eliminación de tus datos
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Para proteger tu privacidad y verificar tu identidad, la eliminación de datos se realiza únicamente a través de los canales oficiales de contacto.
          </p>

          <ul className="grid gap-4 mt-6">
            {[
              '📧 Email: bpesociedad@gmail.com',
              '📱 WhatsApp oficial: +56 9 5411 9146',
              '💬 Servidor de Discord: https://discord.gg/QY8Zsxpk'
            ].map((item, idx) => (
              <li key={idx} className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex gap-3">
                <CheckCircle className="text-green-600 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-600 mt-4">
            Una vez verificada la identidad del solicitante, procesamos la eliminación completa e irreversible de los datos asociados.
          </p>
        </section>

        

        {/* SECCION 3 */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-slate-900">¿Qué ocurre una vez aprobada la eliminación?</h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <Clock className="text-rose-500" size={20} />
                <span>Inmediato</span>
              </div>
              <p className="text-sm text-slate-600">
                Se elimina la información almacenada en Firebase asociada al número de WhatsApp o correo verificado.
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <AlertTriangle className="text-amber-500" size={20} />
                <span>Tokens externos</span>
              </div>
              <p className="text-sm text-slate-600">
                Se eliminan tokens de Google Calendar si existían, bloqueando cualquier integración pendiente.
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                <Trash2 className="text-slate-500" size={20} />
                <span>Irreversible</span>
              </div>
              <p className="text-sm text-slate-600">
                La eliminación es permanente. No conservamos respaldos, copias espejo ni versiones archivadas.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
