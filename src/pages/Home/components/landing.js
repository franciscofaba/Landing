import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black ">
   
      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[calc(100vh-80px)] pt-32 pb-12 md:py-0 gap-10 md:gap-0">
        
        {/* LEFT CONTENT (TEXTO) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 z-10">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Simplifica tu día <br className="hidden md:block"/>
            con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-400">HaroldIA</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md leading-relaxed">
            Harold IA es el asistente personal que necesitas las 24 horas. Déjalo gestionar tu agenda, contratar servicios y recordarte tus pendientes importantes.
          </p>

          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-all shadow-lg shadow-white/10 active:scale-95">
            Probar gratis ahora
          </button>
        </div>

        {/* RIGHT CONTENT (PHONE MOCKUP) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
            
          {/* Wrapper para escalar */}
          <div className="transform scale-[0.85] sm:scale-100 origin-top md:origin-center transition-transform duration-300 border border-slate-600 rounded-[50px]">
            
            {/* Sombra dramática */}
            <div className="absolute top-10 right-0 w-[80%] h-[90%] bg-white/30 rounded-full blur-[60px]  -z-10 transform translate-x-4 md:translate-x-10" />

            {/* EL TELÉFONO */}
            <div className="relative w-[320px] h-[680px]  rounded-[50px] border-[12px] border-neutral-800 shadow-2xl shadow-white/50 overflow-hidden ring-1 ring-slate-900/5 flex flex-col">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-neutral-800 rounded-b-2xl z-30"></div>
              
              {/* Botones físicos laterales */}
              <div className="absolute top-24 -left-[12px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
              <div className="absolute top-36 -left-[12px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
              <div className="absolute top-28 -right-[12px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

              {/* --- PANTALLA DEL TELÉFONO --- */}
              {/* CAMBIO: Agregamos flex-col y gap-8 para apilar elementos verticalmente */}
              <div className="flex-1 w-full bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-500 relative z-10 flex flex-col items-center justify-center gap-10">
                
                 {/* 1. TEXTO ARRIBA */}
                 <h2 className="text-white font-bold text-3xl  drop-shadow-xl mt-5 ">
                    Harold IA
                 </h2>

                 {/* 2. IMAGEN DEBAJO */}
                 <img 
                    src="/HaroldIA.jpg" 
                    alt="Mascota HaroldIA" 
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                 />

                 {/* Opcional: Gradiente de fondo */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 pointer-events-none -z-10"></div>
              </div>
              {/* --------------------------------------- */}

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default LandingPage;