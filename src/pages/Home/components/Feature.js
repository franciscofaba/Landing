import React from "react";
import {
  ChevronLeft,
  Check,
  Plus,
  Camera,
  Mic,
  Smile,
  CheckCheck,
  Delete,
  Zap,
  Layout,
  Clock,
  CheckSquare,
  Brain,
  Smartphone
} from "lucide-react";

function Feature() {
  return (
    <div className="min-h-screen font-sans text-slate-100  selection:bg-blue-500/30 p-6 md:p-12 flex flex-col items-center">
      
      {/* --- HEADER --- */}
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Reúne, ordena y utiliza tus ideas <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            todo en un solo lugar.
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Convierte pensamientos dispersos en memorias estructuradas. 
          Tu asistente de IA se encarga del desorden para que tú puedas avanzar.
        </p>
      </div>

      {/* --- CONTENEDOR PRINCIPAL (Lado a Lado en Desktop) --- */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 max-w-7xl w-full">
        
        {/* IZQUIERDA: GRID DE FEATURES (2 Columnas) */}
        <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 xl:order-1">
            
            {/* Feature 1 */}
            <FeatureCard 
                icon={<Zap className="w-6 h-6 text-yellow-400" />}
                title="Captura al instante"
                desc="Envía un mensaje, una nota de voz o una captura de pantalla. Harold lo recuerda por ti al momento."
            />

            {/* Feature 2 */}
            <FeatureCard 
                icon={<Layout className="w-6 h-6 text-blue-400" />}
                title="Organiza automaticamente"
                desc="Tus ideas, enlaces y conversaciones se agrupan automáticamente por contexto, personas e intención."
            />

            {/* Feature 3 */}
            <FeatureCard 
                icon={<Clock className="w-6 h-6 text-red-400" />}
                title="Recuerda justo a tiempo"
                desc="Harold detecta qué es importante y te lo trae de vuelta cuando lo necesitas: ideas clave o compromisos."
            />

            {/* Feature 4 */}
            <FeatureCard 
                icon={<CheckSquare className="w-6 h-6 text-emerald-400" />}
                title="Ideas en acciones"
                desc="Transforma notas sueltas en tareas claras y próximos pasos. Menos pensar qué hacer, más hacerlo."
            />

            {/* Feature 5 */}
            <FeatureCard 
                icon={<Smartphone className="w-6 h-6 text-slate-200" />}
                title="Aprende de ti"
                desc="Cuanto más lo usas, mejor te entiende. Se adapta a tu forma de pensar, a tus prioridades y a tu ritmo."
            />

            {/* Feature 6 */}
            <FeatureCard 
                icon={<Brain className="w-6 h-6 text-purple-400" />}
                title="Segundo cerebro"
                desc="Todo tu contexto en un solo lugar, accesible siempre contigo, para que tu mente pueda descansar."
            />
        </div>

        {/* DERECHA: TELÉFONO (Sticky o fijo) */}
        <div className="w-full xl:w-1/3 flex justify-center order-1 xl:order-2">
            <div className="relative transform scale-[0.85] sm:scale-100 origin-center transition-transform duration-300">
                
                {/* Glow Effect detrás del teléfono */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-blue-500/20 blur-[80px] rounded-full -z-10"></div>

                {/* MARCO DEL TELÉFONO */}
                <div className="relative w-[340px] h-[700px] bg-white rounded-[45px] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex flex-col ring-1 ring-white/10">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50"></div>

                    {/* HEADER DEL CHAT */}
                    <div className="bg-[#F5F5F5] pt-12 pb-3 px-4 flex items-center justify-between border-b border-slate-200 z-40 relative">
                    <div className="flex items-center gap-2">
                        <ChevronLeft className="text-blue-500 w-6 h-6 cursor-pointer" />
                        <div className="relative">
                        <img
                            src="/HaroldIA.jpg"
                            alt="Mascota HaroldIA"
                            className="w-9 h-9 rounded-full object-cover border border-slate-300 shadow-sm"
                        />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#F5F5F5] rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-sm font-semibold flex items-center gap-1 text-slate-800">
                            HaroldIA
                            <div className="bg-blue-500 rounded-full p-[2px]">
                            <Check className="w-1.5 h-1.5 text-white" strokeWidth={4} />
                            </div>
                        </span>
                        <span className="text-[10px] text-slate-500 -mt-0.5">
                            En línea
                        </span>
                        </div>
                    </div>
                    </div>

                    {/* ÁREA DE MENSAJES */}
                    <div className="flex-1 bg-[#FDFCF8] p-4 flex flex-col gap-4 overflow-y-auto text-[13px] leading-snug">
                    {/* Mensaje 1 */}
                    <div className="self-start max-w-[85%]">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-slate-700">
                        <p>He agrupado todo bajo el contexto <strong>Campañas Q4</strong>. Ya está junto a tus notas del Black Friday 😉</p>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 ml-1 block">8:26 PM</span>
                    </div>

                    {/* Mensaje 2 */}
                    <div className="self-end max-w-[85%] flex flex-col items-end">
                        <div className="bg-[#E7FFDB] p-3 rounded-lg rounded-tr-none shadow-sm border border-green-100 text-slate-800">
                        <p>¿Cuál era el enlace de la reunión con el equipo de diseño?</p>
                        </div>
                        <div className="flex items-center gap-1 mt-1 mr-1">
                        <span className="text-[10px] text-slate-400">8:26 PM</span>
                        <CheckCheck className="w-3 h-3 text-blue-500" />
                        </div>
                    </div>

                    {/* Mensaje 3 */}
                    <div className="self-start max-w-[85%]">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-slate-700">
                        <p>Aquí lo tienes: <span className="text-blue-500 underline cursor-pointer">meet.google.com/design</span> Recuerda que es el lunes a las 10:30.</p>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 ml-1 block">8:26 PM</span>
                    </div>

                 
                    </div>

                    {/* INPUT BAR */}
                    <div className="bg-[#F6F6F6] px-3 py-2 flex items-center gap-3">
                    <Plus className="text-blue-500 w-6 h-6" />
                    <div className="flex-1 bg-white rounded-full border border-slate-300 px-3 py-1.5 flex items-center justify-between">
                        <div className="w-full h-4"></div>
                        <Smile className="text-slate-400 w-5 h-5" />
                    </div>
                    <Camera className="text-blue-500 w-6 h-6" />
                    <Mic className="text-blue-500 w-6 h-6" />
                    </div>

                    {/* TECLADO */}
                    <div className="bg-[#CFD3D9] p-2 pt-3 pb-6 flex flex-col gap-3">
                     {/* Sugerencias */}
                     <div className="flex justify-center gap-8 text-xs text-slate-600 mb-1">
                        <span>Si</span>
                        <span className="font-semibold">Claro</span>
                        <span>No</span>
                    </div>
                    <KeyboardRow keys={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]} />
                    <KeyboardRow keys={["A", "S", "D", "F", "G", "H", "J", "K", "L"]} px="px-4" />
                    <div className="flex justify-center gap-1.5 px-1">
                        <div className="bg-[#B5BCC5] rounded w-10 flex items-center justify-center shadow-sm">
                            <div className="w-4 h-4 bg-slate-600 rounded-full opacity-50"></div>
                        </div>
                        {["Z", "X", "C", "V", "B", "N", "M"].map((k) => (
                        <div key={k} className="bg-white rounded h-10 w-[8.5%] flex items-center justify-center text-lg font-medium shadow-sm text-slate-900">{k}</div>
                        ))}
                        <div className="bg-[#B5BCC5] rounded w-10 flex items-center justify-center shadow-sm">
                            <Delete className="w-5 h-5 text-slate-700" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

// --- SUBCOMPONENTES ---

// 1. Tarjeta de Característica
function FeatureCard({ icon, title, desc }) {
    return (
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 group">
            <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    )
}

// 2. Fila del Teclado
function KeyboardRow({ keys, px = "px-1" }) {
  return (
    <div className={`flex justify-center gap-1.5 ${px}`}>
      {keys.map((key) => (
        <div
          key={key}
          className="bg-white rounded h-10 w-[8.5%] flex items-center justify-center text-lg font-medium shadow-sm text-slate-900"
        >
          {key}
        </div>
      ))}
    </div>
  );
}

export default Feature;