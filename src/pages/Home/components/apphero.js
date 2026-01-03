import React from "react";

// --- COMPONENTE PRINCIPAL (HERO) ---
function AppHero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans pt-20 pb-12 md:pt-20 md:pb-0 bg-slate-950/10">
      {/* Fondo Ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-emerald-500/20 to-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* --- SECCIÓN DE TEXTO (CORREGIDA) --- */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-6 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
          Con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Harold
          </span>
          , no hay excusas para olvidar lo importante.
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
          Deja de intentar recordarlo todo. Transforma tus pensamientos dispersos en 
          acciones concretas y recupera tu tranquilidad mental.
        </p>
      </div>

      {/* --- SECCIÓN CENTRAL (TELÉFONO + ETIQUETAS) --- */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl">
        
        {/* --- ETIQUETAS IZQUIERDA --- */}
        <div className="hidden md:flex flex-col gap-16 absolute right-1/2 mr-[180px] w-48 items-end text-right z-20">
          <FloatingLabel text="No más listas mentales" delay="0" />
          <FloatingLabel text="No más post-its" delay="100" />
          <FloatingLabel text="Adiós a los retrasos" delay="200" />
        </div>

        {/* --- EL TELÉFONO (Centro) --- */}
        <div className="transform scale-[0.85] sm:scale-100 transition-transform duration-300 relative z-10">
          <div className="relative w-[320px] h-[650px] bg-neutral-900 rounded-[50px] p-[10px] shadow-2xl shadow-emerald-500/10 border-4 border-gray-800 ring-1 ring-white/10">
            {/* Botones físicos */}
            <div className="absolute top-24 -left-[6px] w-[6px] h-10 bg-gray-800 rounded-l-md"></div>
            <div className="absolute top-40 -left-[6px] w-[6px] h-16 bg-gray-800 rounded-l-md"></div>
            <div className="absolute top-32 -right-[6px] w-[6px] h-20 bg-gray-800 rounded-r-md"></div>

            {/* Pantalla */}
            <div className="w-full h-full bg-slate-50 rounded-[40px] overflow-hidden relative flex flex-col shadow-inner">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex justify-end items-center pr-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
              </div>

              {/* Contenido Pantalla */}
              <div className="pt-24 px-8 flex flex-col items-center h-full relative text-center bg-gradient-to-r from-emerald-200 to-blue-300">
                <p className="text-slate-600 font-medium text-lg leading-snug mb-10 italic">
                  "No te estás volviendo un desastre: estás intentando hacerlo todo tú solo."
                </p>

                {/* --- LA MASCOTA HAROLDIA --- */}
                <div className="flex-1 w-full flex items-center justify-center pb-24">
                  <div className="relative w-44 h-44 animate-float-slow">
                    {/* Glow detrás de la imagen */}
                    <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 rounded-full"></div>
                    <img
                      src="/HaroldIA.jpg"
                      alt="Harold IA Mascota"
                      className="relative w-full h-full rounded-full object-cover border-[6px] border-white shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ETIQUETAS DERECHA --- */}
        <div className="hidden md:flex flex-col gap-16 absolute left-1/2 ml-[180px] w-48 items-start z-20">
          <FloatingLabel text="Citas organizadas" delay="50" isRight />
          <FloatingLabel text="Calendarios unificados" delay="150" isRight />
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
      className={`relative bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl text-sm font-medium text-slate-200 animate-fade-in-up whitespace-nowrap hover:bg-white/10 transition-colors`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
      {/* Línea conectora visual (opcional) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/20 ${
          isRight ? "-left-4" : "-right-4"
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
      50% { transform: translateY(-10px); }
    }
    .animate-float-slow {
      animation: float-slow 5s ease-in-out infinite;
    }

    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
  `;
  if (!document.getElementById("custom-hero-styles")) {
    style.id = "custom-hero-styles";
    document.head.appendChild(style);
  }
}

export default AppHero;