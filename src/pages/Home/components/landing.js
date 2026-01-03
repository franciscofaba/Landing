import React from "react";

function LandingPage() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black bg-slate-950/50">
      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[calc(100vh-80px)] pt-32 pb-24 md:py-0 gap-10 md:gap-0">
        {/* LEFT CONTENT (TEXTO) */}
        <div className="w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 z-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Simplifica tu día <br className="hidden md:block" />
            con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-400">
              Harold IA
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md leading-relaxed">
            Harold IA es el asistente personal que necesitas las 24 horas.
            Déjalo gestionar tu agenda, crear listas y recordarte tus pendientes
            importantes.
          </p>
          <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")}>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-all shadow-lg shadow-white/10 active:scale-95">
              Probar ahora
            </button>
          </a>
        </div>

        {/* RIGHT CONTENT (DUAL PHONE MOCKUP) */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-end relative mt-12 md:mt-0 " >
          {/* Wrapper para escalar todo el conjunto en pantallas pequeñas */}
          <div className="transform scale-[0.65] sm:scale-[0.80] lg:scale-100 origin-top md:origin-center transition-transform duration-300 ">
            {/* Efecto de luz de fondo compartido */}
            <div className="absolute top-20 right-20 w-[600px] h-[600px]  -z-10" />

            {/* CONTENEDOR DE POSICIONAMIENTO RELATIVO */}
            <div className="relative w-[550px] h-[750px] flex items-center justify-center">
              {/* --- TELÉFONO 1: FONDO (BRANDING) --- */}
              <div className="absolute left-10 top-0 transform -rotate-6  scale-95 transition-transform hover:-translate-x-20 hover:rotate-[-15deg] duration-500">
                {/* Estructura Física */}
                <div className="relative w-[320px] h-[680px] rounded-[50px] border-[12px] border-neutral-800 shadow-2xl bg-neutral-900 overflow-hidden ring-1 ring-slate-900/5">
                  {/* Botones laterales */}
                  <div className="absolute top-24 -left-[12px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
                  <div className="absolute top-36 -left-[12px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>

                  {/* Pantalla Branding */}
                  <div className="flex-1 w-full h-full bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-500  flex flex-col items-center justify-center gap-6 relative">
                    {/* Overlay oscuro para que no compita con el de al frente */}
                    <div className="absolute inset-0 bg-black/20 z-10"></div>

                    <div className="z-20 flex flex-col items-center gap-10">
                      <h2 className="text-white font-bold text-3xl drop-shadow-xl mt-5 ">
                        Harold IA
                      </h2>

                      <img
                        src="/HaroldIA.jpg"
                        alt="Mascota HaroldIA"
                        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* --- TELÉFONO 2: FRENTE (APP UI) --- */}
              <div className="absolute right-10 bottom-0 transform rotate-0 z-10 hover:scale-[1.02] transition-transform duration-500 border border-gray-700 rounded-[50px]">
                {/* Estructura Física */}
                <div className="relative w-[320px] h-[680px] rounded-[50px] border-[12px] border-neutral-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-white overflow-hidden ring-1 ring-white/10 flex flex-col">
                  {/* Notch (Dynamic Island Style) */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex justify-end items-center pr-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-1"></div>
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Botones laterales */}
                  <div className="absolute top-28 -right-[12px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>
                  
                  {/* --- PANTALLA APP (GIF CORREGIDO) --- */}
                  <div className="w-full h-full bg-black">
                    <img 
                        src="Harold.gif" 
                        alt="" 
                        className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;