import { Apple, Play, Search, CheckCircle2, Triangle } from "lucide-react";
import { 
  ChevronLeft, 
  Check, 
  Plus, 
  Camera, 
  Mic, 
  Smile, 
  CheckCheck,
  Delete
} from "lucide-react";

// Componente helper para las teclas
function KeyboardRow({ keys, px = "px-1" }) {
  return (
    <div className={`flex justify-center gap-1.5 ${px}`}>
      {keys.map((key) => (
        <div key={key} className="bg-white rounded h-10 w-[8.5%] flex items-center justify-center text-lg font-medium shadow-sm text-slate-900">
          {key}
        </div>
      ))}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
   

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 pt-10 md:pt-0 mb-16 md:mb-0 space-y-8 z-10 text-slate-300">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Simplifica tu día <br className="m-1"/>
            con  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> Kadet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed">
            Kadet es el asistente personal que necesitas las 24 horas. Déjalo gestionar tu agenda, contratar servicios, hacer reservas y recordarte tus pendientes importantes. Además, recibirás las noticias cada mañana. Todo fácil, rápido y gratis.
          </p>

     
        </div>

        {/* RIGHT CONTENT (PHONE MOCKUP) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            
          {/* Sombra dramática detrás del teléfono (como en la imagen original) */}
          <div className="absolute top-10 right-0 w-[80%] h-[90%] bg-slate-200/50 rounded-full blur-[60px] -z-10 transform translate-x-10" />

          {/* EL TELÉFONO */}
          <div className="relative w-[320px] h-[680px] bg-white rounded-[50px] border-[12px] border-slate-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-2xl z-30"></div>
            
            {/* Botones físicos laterales */}
            <div className="absolute top-24 -left-[15px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-36 -left-[15px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-28 -right-[15px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

                        

            {/* HEADER DEL CHAT */}
            <div className="bg-[#F5F5F5] pt-12 pb-3 px-4 flex items-center justify-between border-b border-slate-200 z-40">
              <div className="flex items-center gap-2">
                <ChevronLeft className="text-blue-500 w-6 h-6" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                  K
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold flex items-center gap-1"> Kadet
                         
                        <div className="bg-green-500 rounded-full p-[1px]">
                            <Check className="w-2 h-2 text-white" strokeWidth={4} />
                        </div>
                    </span>
                </div>
              </div>
            </div>

            {/* ÁREA DE MENSAJES (Fondo beige claro) */}
            <div className="flex-1 bg-[#FDFCF8] p-4 flex flex-col gap-4 overflow-y-auto text-[13px] leading-snug">
              
              {/* Mensaje 1 (Recibido) */}
              <div className="self-start max-w-[85%]">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100">
                  <p>He agrupado todo bajo el contexto Campañas Q4. Ya está junto a tus notas del Black Friday 😉</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 ml-1 block">8:26 PM</span>
              </div>

              {/* Mensaje 2 (Enviado) */}
              <div className="self-end max-w-[85%] flex flex-col items-end">
                <div className="bg-[#E7FFDB] p-3 rounded-lg rounded-tr-none shadow-sm border border-green-100">
                  <p>Cuál era el enlace de la reunión con el equipo de diseño?</p>
                </div>
                <div className="flex items-center gap-1 mt-1 mr-1">
                    <span className="text-[10px] text-slate-400">8:26 PM</span>
                    <CheckCheck className="w-3 h-3 text-blue-500" />
                </div>
              </div>

              {/* Mensaje 3 (Recibido - Link) */}
              <div className="self-start max-w-[85%]">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100">
                  <p>Aquí lo tienes: <span className="text-blue-500 underline cursor-pointer">meet.google.com/design</span> Recuerda que la reunión es el próximo lunes a las 10:30.</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 ml-1 block">8:26 PM</span>
              </div>

               {/* Mensaje 4 (Recibido - Pregunta) */}
               <div className="self-start max-w-[85%]">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100">
                  <p>¿Quieres que le mande un recordatorio a Jorge media hora antes de la reunión para que te mande los gráficos?</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 ml-1 block">8:28 PM</span>
              </div>
            </div>

            {/* INPUT BAR */}
            <div className="bg-[#F6F6F6] px-3 py-2 flex items-center gap-3">
               <Plus className="text-blue-500 w-6 h-6" />
               <div className="flex-1 bg-white rounded-full border border-slate-300 px-3 py-1.5 flex items-center justify-between">
                  <div className="w-full h-4"></div> {/* Placeholder input */}
                  <Smile className="text-slate-400 w-5 h-5" />
               </div>
               <Camera className="text-blue-500 w-6 h-6" />
               <Mic className="text-blue-500 w-6 h-6" />
            </div>

            {/* TECLADO VIRTUAL SIMULADO */}
            <div className="bg-[#CFD3D9] p-2 pt-3 pb-6 flex flex-col gap-3">
                {/* Sugerencias */}
                <div className="flex justify-center gap-8 text-xs text-slate-600 mb-1">
                    <span>I</span>
                    <span className="font-semibold">The</span>
                    <span>I'm</span>
                </div>
                
                {/* Filas de teclas */}
                <KeyboardRow keys={['Q','W','E','R','T','Y','U','I','O','P']} />
                <KeyboardRow keys={['A','S','D','F','G','H','J','K','L']} px="px-4" />
                
                <div className="flex justify-center gap-1.5 px-1">
                    <div className="bg-[#B5BCC5] rounded w-10 flex items-center justify-center shadow-sm">
                         <div className="w-4 h-4 bg-slate-600 rounded-full opacity-50"></div>
                    </div>
                    {['Z','X','C','V','B','N','M'].map(k => (
                        <div key={k} className="bg-white rounded h-10 w-[8.5%] flex items-center justify-center text-lg font-medium shadow-sm text-slate-900">
                        {k}
                        </div>
                    ))}
                    <div className="bg-[#B5BCC5] rounded w-10 flex items-center justify-center shadow-sm">
                        <Delete className="w-5 h-5 text-slate-700" />
                    </div>
                </div>

                {/* Botones inferiores teclado */}
                <div className="flex justify-between px-4 mt-1">
                    <div className="text-xs font-semibold text-slate-600">123</div>
                    <div className="text-xs font-semibold text-slate-600">espacio</div>
                    <div className="text-xs font-semibold text-slate-600">intro</div>
                </div>
            </div>



            {/* Bottom Nav App */}
         

            {/* Home Indicator */}

          </div>
        </div>

      </main>
    </div>
  );
}

// --- SUBCOMPONENTES ---

function AppCard({ title, bgImage, textColor = "text-white" }) {
    return (
        <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm shrink-0 group cursor-pointer">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${textColor}`}>
                {title}
            </div>
        </div>
    )
}

function NavItem({ icon: Icon, label, active }) {
    return (
        <div className={`flex flex-col items-center gap-1 ${active ? 'text-slate-800' : 'text-slate-400'}`}>
            <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{label}</span>
        </div>
    )
}

function StoreButton({ type }) {
    const isApple = type === 'apple';
    const Icon = isApple ? Apple : Play;
    const text1 = isApple ? 'Download on the' : 'GET IT ON';
    const text2 = isApple ? 'App Store' : 'Google Play';

    return (
        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-slate-200">
            <Icon className={`fill-current ${isApple ? 'w-8 h-8' : 'w-7 h-7'}`} strokeWidth={0} />
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium tracking-wide opacity-80">{text1}</span>
                <span className="text-lg font-bold font-sans">{text2}</span>
            </div>
        </button>
    )
}

export default LandingPage;