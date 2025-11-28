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

function Feature() {
  return (
    <div className="min-h-screen bg-[#F0F4F5] font-sans text-slate-900 selection:bg-blue-100 p-6 md:p-12 flex flex-col items-center">
      
      {/* --- HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Captura, organiza, recuerda y actúa, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            todo en un solo lugar.
          </span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          transforma tus pensamientos dispersos en memorias estructuradas que 
          te ayudan a actuar, concentrarte y, por fin, sentir alivio.
        </p>
      </div>

      {/* --- GRID DE CONTENIDO --- */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        
        {/* COLUMNA IZQUIERDA (Texto / Features) */}
        <div className="space-y-16 pl-4 md:pl-10 order-2 md:order-1">
          {/* Item Activo */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-slate-800">Captura al instante</h3>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md">
              Envía un mensaje, una nota de voz o una captura de pantalla.  lo recuerda por ti.
            </p>
          </div>

          {/* Item Inactivo (Efecto faded como en la imagen) */}
          <div className="space-y-4  hover:opacity-100 transition-opacity duration-500 cursor-default">
            <h3 className="text-3xl font-bold text-slate-800">Organiza automáticamente</h3>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md">
              Tus ideas, enlaces y conversaciones se agrupan por contexto, personas e intención.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA (Teléfono) */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          
          {/* MARCO DEL TELÉFONO */}
          <div className="relative w-[340px] h-[700px] bg-white rounded-[45px] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex flex-col">
            
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50"></div>

            {/* HEADER DEL CHAT */}
            <div className="bg-[#F5F5F5] pt-12 pb-3 px-4 flex items-center justify-between border-b border-slate-200 z-40">
              <div className="flex items-center gap-2">
                <ChevronLeft className="text-blue-500 w-6 h-6" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                  M
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold flex items-center gap-1">
                         
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

          </div>
        </div>

      </div>
    </div>
  );
}

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

export default Feature;