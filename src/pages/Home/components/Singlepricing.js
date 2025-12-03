import { Check, Sparkles, ShieldCheck, Zap } from "lucide-react";

function SinglePricing() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-slate-200 selection:bg-purple-500 selection:text-white">
      
      {/* --- FONDO AMBIENTAL (Nebulosa) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Estrellas sutiles (CSS dots) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Header Text */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Tu caos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">tu plan.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Deja de pagar con tu salud mental. Elige la herramienta que se acuerda de todo por ti.
          </p>
        </div>

        {/* --- TARJETA PRINCIPAL (Hero Card) --- */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
          <div className="grid lg:grid-cols-5 min-h-[500px]">
            
            {/* COLUMNA IZQUIERDA: Precio y CTA (2/5 del ancho) */}
            <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/40 relative">
              
              {/* Badge "Más Popular" */}
              <div className="absolute top-8 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Más Popular
              </div>

              <div className="mt-8 mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Plan Supernova</h2>
                <p className="text-sm text-slate-400">Para quienes quieren control total sin esfuerzo.</p>
              </div>

              {/* Precio */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">9.970</span>
                <span className="text-xl text-slate-400 font-medium">CLP / mes</span>
              </div>
              <p className="text-sm text-slate-500 line-through mb-8">Antes 16.617 CLP</p>

              {/* Botón CTA */}
<button
  onClick={() => window.open("https://buy.stripe.com/9B6cN57JgcB61tK9y29ws0o", "_blank")}
  className="group relative w-full py-4 rounded-xl font-bold text-white text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-gradient"></div>
  <span className="relative z-10 flex items-center justify-center gap-2">
    Probar ahora
    <Zap className="w-5 h-5 fill-white" />
  </span>
</button>


              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>7 días de garantía. Sin preguntas.</span>
              </div>
            </div>

            {/* COLUMNA DERECHA: Características (3/5 del ancho) */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-900/50 to-slate-800/20">
              <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-slate-600"></span>
                Todo lo que desbloqueas
              </h3>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <FeatureItem text="Recordatorios ilimitados" />
                <FeatureItem text="Memoria a largo plazo (AI)" />
                <FeatureItem text="Integración multi-calendario" />
                <FeatureItem text="Resumen diario inteligente" />
                <FeatureItem text="Recordatorios entre amigos" />
                <FeatureItem text="Acción desde imágenes" />
                <FeatureItem text="Soporte prioritario" highlighted />
                <FeatureItem text="Panel de Control Total" />
              </div>

              {/* Caja de Bonus (Opcional para rellenar espacio y dar valor) */}
              <div className="mt-10 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-start gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg shrink-0">
                   <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Bonus: Acceso anticipado</h4>
                  <p className="text-xs text-slate-400 mt-1">Sé el primero en probar las nuevas funciones de voz antes que nadie.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-600 text-sm mt-8">
          Puedes cancelar en cualquier momento desde tu panel de usuario.
        </p>

      </div>
      
      {/* Definición de la animación del gradiente del botón */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

// Subcomponente para los items de la lista
function FeatureItem({ text, highlighted = false }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 shrink-0 rounded-full p-0.5 ${highlighted ? 'bg-purple-500/20' : 'bg-slate-800'}`}>
        <Check className={`w-3.5 h-3.5 ${highlighted ? 'text-purple-400' : 'text-slate-400'}`} strokeWidth={3} />
      </div>
      <span className={`text-sm ${highlighted ? 'text-white font-medium' : 'text-slate-300'}`}>
        {text}
      </span>
    </div>
  );
}

export default SinglePricing;