import React from 'react';

// --- COMPONENTE PRINCIPAL (HERO) ---
function AppHero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans pt-24 pb-12 md:pt-0 md:pb-0">
      
      {/* Fondo Ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-emerald-500/30 to-blue-600/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* --- SECCIÓN DE TEXTO --- */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Captura, organiza, recuerda y actúa, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
             todo en un solo lugar.
          </span>
        </h1>
        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
          Transforma tus pensamientos dispersos en memorias estructuradas que te ayudan a actuar y sentir alivio.
        </p>
      </div>

      {/* --- SECCIÓN CENTRAL (TELÉFONO + ETIQUETAS) --- */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl">
        
        {/* --- ETIQUETAS IZQUIERDA --- 
            Corrección: 
            1. z-20 para que estén por encima del nivel del teléfono.
            2. right-1/2 mr-[170px]: Se posicionan desde el centro hacia la izquierda (160px de medio teléfono + 10px margen).
        */}
        <div className="hidden md:flex flex-col gap-16 absolute right-1/2 mr-[175px] w-48 items-end text-right z-20">
          <FloatingLabel text="No más listas mentales" delay="0" />
          <FloatingLabel text="No más post-its" delay="100" />
          <FloatingLabel text="No más retrasos" delay="200" />
        </div>

        {/* --- EL TELÉFONO (Centro) --- */}
        <div className="transform scale-[0.85] sm:scale-100 transition-transform duration-300 relative z-10">
            <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-[10px] shadow-2xl shadow-emerald-500/20 border-4 border-gray-800 ring-1 ring-gray-900/50">
                
                {/* Botones físicos */}
                <div className="absolute top-24 -left-[6px] w-[6px] h-10 bg-gray-800 rounded-l-md"></div>
                <div className="absolute top-40 -left-[6px] w-[6px] h-16 bg-gray-800 rounded-l-md"></div>
                <div className="absolute top-32 -right-[6px] w-[6px] h-20 bg-gray-800 rounded-r-md"></div>

                {/* Pantalla */}
                <div className="w-full h-full bg-blue-50 rounded-[40px] overflow-hidden relative flex flex-col shadow-inner">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex justify-end items-center pr-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-1"></div>
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* Contenido Pantalla */}
                    <div className="pt-20 px-6 flex flex-col items-center h-full relative text-center">
                        <p className="text-slate-700 font-medium text-lg leading-snug mb-8">
                            "No te estás volviendo un desastre: estás intentando hacerlo todo tú solo."
                        </p>

                        {/* --- LA MASCOTA HAROLDIA --- */}
                        <div className="flex-1 w-full flex items-center justify-center pb-20">
                            <div className="relative w-48 h-48 animate-float-slow">
                                <img 
                                    src="/HaroldIA.jpg" 
                                    alt="Harold IA Mascota" 
                                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl shadow-blue-200"
                                />
                                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></div>
                            </div>
                        </div>

                        {/* Decoración pantalla */}
                        <div className="absolute bottom-[-20px] left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- ETIQUETAS DERECHA --- 
            Corrección: 
            1. z-20 igual que la izquierda.
            2. left-1/2 ml-[170px]: Desde el centro hacia la derecha.
        */}
        <div className="hidden md:flex flex-col gap-16 absolute left-1/2 ml-[175px] w-48 items-start z-20">
          <FloatingLabel text="Citas organizadas" delay="50" isRight />
          <FloatingLabel text="Plantas vivas" delay="150" isRight />
          <FloatingLabel text="Mente tranquila" delay="250" isRight />
        </div>

      </div>
    </div>
  );
}

// Componente Etiqueta
function FloatingLabel({ text, isRight = false, delay }) {
  return (
    <div
      className={`relative bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg shadow-purple-500/10 text-sm font-semibold text-slate-800 animate-fade-in-up whitespace-nowrap border border-white/50`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
      {/* Triángulo indicador */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white/90 border-r border-b border-white/50 transform rotate-45 ${
          isRight ? "-left-1.5 border-r-0 border-b-0 border-l border-t" : "-right-1.5"
        }`}
      ></div>
    </div>
  );
}

// Estilos inyectados
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    .animate-float-slow {
      animation: float-slow 4s ease-in-out infinite;
    }

    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
    }
  `;
  if (!document.getElementById("custom-hero-styles")) {
    style.id = "custom-hero-styles";
    document.head.appendChild(style);
  }
}

export default AppHero;