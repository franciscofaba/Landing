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
              <div className="absolute right-10 bottom-0 transform rotate-0 z-10 hover:scale-[1.02] transition-transform duration-500">
                {/* Estructura Física */}
                <div className="relative w-[320px] h-[680px] rounded-[50px] border-[12px] border-neutral-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-white overflow-hidden ring-1 ring-white/10 flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-30"></div>

                  {/* Botones laterales */}
                  <div className="absolute top-28 -right-[12px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

                  {/* --- PANTALLA APP (Interfaz Simulada) --- */}
                  <div className="flex-1 bg-slate-50 flex flex-col w-full text-slate-800 font-sans">
                    {/* App Header */}
                    <div className="pt-12 pb-4 px-6 bg-white border-b border-slate-100 flex justify-between items-center shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">
                          H
                        </div>
                        <div>
                          <h3 className="font-bold text-lg leading-tight">
                            Harold
                          </h3>
                          <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>{" "}
                            En línea
                          </span>
                        </div>
                      </div>
                      <div className="text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-5 space-y-6 overflow-hidden relative">
                      {/* Mensaje Usuario */}
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md text-sm">
                          <p>
                            Hola Harold, ¿puedes agendar una reunión mañana?
                          </p>
                        </div>
                      </div>

                      {/* Mensaje Harold */}
                      <div className="flex justify-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center border border-emerald-200">
                          <span className="text-xs font-bold text-emerald-700">
                            H
                          </span>
                        </div>
                        <div className="bg-white text-slate-700 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-slate-100 text-sm">
                          <p>¡Claro! 📅 ¿A qué hora te gustaría la reunión?</p>
                        </div>
                      </div>

                      {/* Mensaje Usuario 2 */}
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md text-sm">
                          <p>A las 10:00 AM con el equipo de marketing.</p>
                        </div>
                      </div>

                      {/* Respuesta "Typing" */}
                      <div className="flex justify-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center border border-emerald-200">
                          <span className="text-xs font-bold text-emerald-700">
                            H
                          </span>
                        </div>
                        <div className="bg-white px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                      </div>
                    </div>

                    {/* Input Area (Mockup) */}
                    <div className="p-4 bg-white border-t border-slate-100">
                      <div className="bg-slate-100 h-12 rounded-full flex items-center px-4 justify-between border border-slate-200">
                        <span className="text-slate-400 text-sm">
                          Escribe un mensaje...
                        </span>
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white"
                          >
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full"></div>
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
