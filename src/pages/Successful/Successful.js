import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // --- RASTREO DE PIXEL ---
    // Esto es el equivalente en React a tu script:
    // fbq(‘track’, ‘Purchase’, {currency: “USD”, value: 30.00});
    
    ReactPixel.track('Purchase', {
      value: 10.00, // He puesto 10 porque es el precio de tu plan, cámbialo a 30.00 si prefieres.
      currency: 'USD',
      content_name: 'Plan Supernova',
      status: 'completed'
    });

  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-slate-200 selection:bg-purple-500 selection:text-white">
      
      {/* --- FONDO AMBIENTAL (Igual que SinglePricing) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-md w-full">
        
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-white/10 p-8 md:p-12 text-center">
          
          {/* Icono Animado */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse"></div>
              <div className="bg-slate-800 p-4 rounded-full relative border border-slate-700">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            ¡Pago realizado con éxito!
          </h1>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Le damos la bienvenida para aprovechar al máximo a <strong className="text-white">Harold</strong>. Tu suscripción ha sido activada correctamente.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => window.open("https://wa.me/56936740614", "_blank")}
              className="group w-full py-3.5 rounded-xl font-bold text-white text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] relative bg-green-600 hover:bg-green-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ir a WhatsApp ahora
                <Sparkles className="w-5 h-5 fill-white/20" />
              </span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-1 w-full"
            >
              Volver al inicio <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}