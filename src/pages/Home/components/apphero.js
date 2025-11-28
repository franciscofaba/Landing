import { Zap } from "lucide-react"; // Solo decorativo si se necesita

function AppHero() {
  return (
    <div className="min-h-screen bg-neutral-300 flex items-center justify-center overflow-hidden relative font-sans">
      
      {/* --- FONDO AMBIENTAL --- */}
      {/* Círculo difuminado central (El aura) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 via-pink-100 to-blue-100 rounded-full blur-[120px] opacity-70 pointer-events-none" />



      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* ETIQUETAS FLOTANTES (IZQUIERDA) */}
        <div className="hidden md:flex flex-col gap-16 absolute right-full mr-8 w-48 items-end text-right">
            <FloatingLabel text="No más listas mentales" delay="0" />
            <FloatingLabel text="No más post-its en el retrovisor" delay="100" />
            <FloatingLabel text="No más entregas pasadas" delay="200" />
        </div>

        {/* --- EL TELÉFONO --- */}
        <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-[10px] shadow-2xl border-4 border-gray-800 ring-1 ring-gray-900/50 transform transition-transform hover:scale-[1.01] duration-500">
          
          {/* Botones laterales físicos */}
          <div className="absolute top-24 -left-[6px] w-[6px] h-10 bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-40 -left-[6px] w-[6px] h-16 bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-32 -right-[6px] w-[6px] h-20 bg-gray-800 rounded-r-md"></div>

          {/* Pantalla interna */}
          <div className="w-full h-full bg-blue-50 rounded-[40px] overflow-hidden relative flex flex-col">
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex justify-end items-center pr-2">
                 <div className="w-2 h-2 bg-gray-800 rounded-full mr-1"></div>
                 <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
            </div>

            {/* Contenido de la pantalla */}
            <div className="pt-20 px-6 flex flex-col items-center h-full relative">
              
              {/* Texto superior */}
              <p className="text-center text-slate-800 font-medium text-lg leading-tight mb-8 z-10">
                No te estás volviendo un desastre: estás intentando hacerlo todo tú solo.
              </p>

              {/* --- PERSONAJE 3D (CSS PURO) --- */}
              {/* Usamos gradientes radiales y sombras para simular la esfera 3D */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-64 h-64">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-300 via-blue-400 to-blue-500 shadow-[0_20px_50px_-12px_rgba(168,85,247,0.4)] relative animate-float">
                  
                  {/* Brillo especular (luz) */}
                  <div className="absolute top-4 left-8 w-32 h-20 bg-white opacity-20 blur-xl rounded-full rotate-[-45deg]"></div>
                  
                  {/* Cara del personaje */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 flex justify-between items-center px-4 mt-2">
                     {/* Ojo Izquierdo */}
                     <div className="w-5 h-7 bg-slate-900 rounded-full rotate-[-10deg]">
                        <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1"></div>
                     </div>
                     
                     {/* Sonrisa (Borde inferior de un div transparente) */}
                     <div className="w-6 h-3 border-b-4 border-slate-900 rounded-full absolute left-1/2 -translate-x-1/2 top-6"></div>

                     {/* Ojo Derecho */}
                     <div className="w-5 h-7 bg-slate-900 rounded-full rotate-[10deg]">
                        <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1"></div>
                     </div>
                  </div>

                  {/* Cachetes rosados */}
                  <div className="absolute top-[55%] left-6 w-6 h-4 bg-pink-300 blur-sm rounded-full opacity-60"></div>
                  <div className="absolute top-[55%] right-6 w-6 h-4 bg-pink-300 blur-sm rounded-full opacity-60"></div>
                </div>

                {/* Elementos de fondo "paisaje" dentro del teléfono */}
                <div className="absolute -bottom-20 -left-10 w-[120%] h-32 bg-emerald-700 blur-xl opacity-30 rounded-t-[100%] -z-10"></div>
              </div>

            </div>
          </div>
        </div>

        {/* ETIQUETAS FLOTANTES (DERECHA) */}
        <div className="hidden md:flex flex-col gap-16 absolute left-full ml-8 w-48 items-start">
            <FloatingLabel text="No más citas olvidadas" delay="50" isRight />
            <FloatingLabel text="No más plantas muertas" delay="150" isRight />
            <FloatingLabel text="No más recordatorios en servilletas" delay="250" isRight />
        </div>

      </div>
    </div>
  );
}

// Subcomponente para las etiquetas con "pico" de dialogo
function FloatingLabel({ text, isRight = false, delay }) {
  return (
    <div 
      className={`relative bg-white px-4 py-3 rounded-2xl shadow-xl shadow-purple-100/50 text-xs md:text-sm font-semibold text-slate-700 animate-fade-in-up whitespace-nowrap`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
      {/* Triangulito del chat bubble */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 ${isRight ? '-left-1' : '-right-1'}`}
      ></div>
    </div>
  );
}

// Estilos globales necesarios para la animación personalizada (o agregar en tailwind.config)
// Nota: Tailwind por defecto tiene 'animate-bounce', aquí simulamos una flotación suave.
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default AppHero;