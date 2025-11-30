
// --- 1. COMPONENTE DE LA NAVE 2D (Estilo Vectorial) ---
const Rocket2D = () => {
  return (
    <div className="relative w-48 h-48 animate-float-slow group">
      {/* Rotamos todo el contenedor para que vuele en diagonal como la imagen */}
      <svg
        viewBox="-20 10 200 200"
        className="w-full h-full drop-shadow-xl transform rotate-45 transition-transform duration-500 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- GRUPO: FUEGO (Detrás de la nave) --- */}
        <g
          className="animate-flicker origin-top"
          style={{ transformBox: "fill-box" }}
        >
          {/* Llama Externa (Naranja claro) */}
          <path
            d="M70 150 Q 100 220 130 150 Q 115 150 100 160 Q 85 150 70 150 Z"
            className="fill-yellow-400"
          />
          {/* Llama Interna (Naranja oscuro/Rojo) */}
          <path
            d="M80 150 Q 100 200 120 150 Q 100 155 80 150 Z"
            className="fill-orange-500"
          />
        </g>

        {/* --- GRUPO: CUERPO DE LA NAVE --- */}

        {/* Aleta Izquierda (Roja) */}
        <path d="M50 120 Q 20 150 20 180 L 70 140 Z" className="fill-red-600" />

        {/* Aleta Derecha (Roja) */}
        <path
          d="M150 120 Q 180 150 180 180 L 130 140 Z"
          className="fill-red-600"
        />

        {/* Aleta Central/Trasera (Roja Oscura - para profundidad) */}
        <path d="M90 140 L 110 140 L 100 180 Z" className="fill-red-700" />

        {/* Cuerpo Principal (Blanco/Azulado) */}
        {/* Forma de huevo alargado */}
        <ellipse cx="100" cy="100" rx="50" ry="80" className="fill-slate-100" />

        {/* Sombra lateral del cuerpo (Para darle volumen 2D) */}
        <path
          d="M100 20 Q 150 20 150 100 Q 150 160 120 175 L 100 180 Z"
          className="fill-blue-100 opacity-50"
        />

        {/* Punta de la nave (Roja) */}
        {/* Usamos un clip o simplemente dibujamos la forma superior */}
        <path
          d="M68 55 Q 100 0 132 55 Q 100 65 68 55 Z"
          className="fill-red-600"
        />
        {/* Brillo en la punta */}
        <ellipse
          cx="115"
          cy="40"
          rx="5"
          ry="10"
          transform="rotate(-30 115 40)"
          className="fill-red-400 opacity-50"
        />

        {/* Base del motor (Gris oscuro) */}
        <path
          d="M65 160 Q 100 180 135 160 L 135 150 Q 100 170 65 150 Z"
          className="fill-slate-700"
        />

        {/* --- VENTANA (Ojo de buey) --- */}
        {/* Borde exterior */}
        <circle cx="100" cy="90" r="28" className="fill-slate-300" />
        {/* Vidrio (Espacio oscuro) */}
        <circle cx="100" cy="90" r="22" className="fill-indigo-900" />
        {/* Brillo en el vidrio */}
        <circle cx="110" cy="80" r="5" className="fill-white opacity-20" />
        <circle cx="108" cy="76" r="2" className="fill-white opacity-40" />

        {/* Estrellitas en la ventana */}
        <circle cx="95" cy="95" r="1" className="fill-white animate-pulse" />
        <circle
          cx="110"
          cy="98"
          r="1"
          className="fill-white animate-pulse delay-75"
        />
      </svg>
    </div>
  );
};

// --- 2. COMPONENTE PRINCIPAL (HERO) ---
function AppHero() {
  return (
    <div className="h-screen bg-neutral-950 ">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight text-center pt-10">
          todo en un solo lugar
  
        <span className="text-transparent bg-clip-text bg-gradient-to-r ml-5 from-blue-500 to-green-500">
          todo en un solo lugar
        </span>
      </h1>

      <div className="flex min-h-screen items-center justify-center overflow-hidden relative font-sans">
        {/* Fondo Ambiental */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-200 to-blue-600 rounded-full blur-[120px] opacity-70 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center">
          {/* Etiquetas Izquierda */}
          <div className="hidden md:flex flex-col gap-16 absolute right-full mr-8 w-48 items-end text-right">
            <FloatingLabel text="No más listas mentales" delay="0" />
            <FloatingLabel text="No más post-its" delay="100" />
            <FloatingLabel text="No más retrasos" delay="200" />
          </div>

          {/* --- EL TELÉFONO --- */}
          <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-[10px] shadow-2xl shadow-emerald-500 border-4 border-gray-800 ring-1 ring-gray-900/50 transform transition-transform hover:scale-[1.01] duration-500">
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
              <div className="pt-20 px-4 flex flex-col items-center h-full relative">
                <p className="text-center text-slate-800 font-medium text-lg leading-tight ">
                  No te estás volviendo un desastre: estás intentando hacerlo
                  todo tú solo.
                </p>

                {/* --- AQUÍ ESTÁ EL PERSONAJE 2D (ROCKET) --- */}
                <div className="flex-1 flex items-center justify-center w-full ">
                  <Rocket2D />
                </div>

                {/* Nubes decorativas de fondo (Opcional, estilo vector) */}
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-white rounded-full opacity-40 blur-xl"></div>
                <div className="absolute bottom-20 -left-10 w-24 h-24 bg-white rounded-full opacity-40 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Etiquetas Derecha */}
          <div className="hidden md:flex flex-col gap-16 absolute left-full ml-8 w-48 items-start">
            <FloatingLabel text="Citas organizadas" delay="50" isRight />
            <FloatingLabel text="Plantas vivas" delay="150" isRight />
            <FloatingLabel text="Mente tranquila" delay="250" isRight />
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Etiqueta
function FloatingLabel({ text, isRight = false, delay }) {
  return (
    <div
      className={`relative bg-white px-4 py-3 rounded-2xl shadow-xl shadow-purple-100/50 text-xs md:text-sm font-semibold text-slate-700 animate-fade-in-up whitespace-nowrap`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 ${
          isRight ? "-left-1" : "-right-1"
        }`}
      ></div>
    </div>
  );
}

// Estilos inyectados (Animaciones del fuego y flotación)
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

    @keyframes flicker {
      0% { transform: scaleY(1); opacity: 0.9; }
      25% { transform: scaleY(1.1) scaleX(0.95); opacity: 1; }
      50% { transform: scaleY(0.9) scaleX(1.05); opacity: 0.8; }
      75% { transform: scaleY(1.15) scaleX(0.9); opacity: 1; }
      100% { transform: scaleY(1); opacity: 0.9; }
    }
    .animate-flicker {
      animation: flicker 0.3s infinite;
    }
    
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
    }
  `;
  if (!document.getElementById("custom-2d-styles")) {
    style.id = "custom-2d-styles";
    document.head.appendChild(style);
  }
}

export default AppHero;
