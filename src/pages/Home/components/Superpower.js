import { useState } from "react";
import {
  Mic,
  CalendarDays,
  StickyNote,
  Users,
  ArrowRight,
  Play,
  ChevronLeft,
  Check,
} from "lucide-react";

// Datos de los "Superpoderes"
const features = [
  {
    id: 0,
    title: "Notas que no se pierden",
    desc: "Recados, ideas o lo que sea. Solo hay que dictarlas o escribirlas. Tu lista queda guardada.",
    icon: StickyNote,
    color: "bg-emerald-500",
    chat: {
      user: "Añade Stranger Things a la lista de series",
      bot: "¡Hecho! He añadido 'Stranger Things' a tu lista de series por ver.",
      time: "17:48",
    },
  },
  {
    id: 1,
    title: "Calendarios unificados",
    desc: "Google, Outlook. Tus citas y eventos conectados. Así no se te escapa nada.",
    icon: CalendarDays,
    color: "bg-pink-500",
    chat: {
      user: "Cancela cualquier evento el jueves a las 18:00",
      bot: "Entendido. He cancelado tus eventos del jueves a las 6:00 p.m. en todos tus calendarios.",
      time: "09:30",
    },
  },
  {
    id: 2,
    title: "Voz a Tareas",
    desc: "Tu voz es suficiente. Memorae escucha, transcribe y organiza lo que dices.",
    icon: Mic,
    color: "bg-purple-500",
    chat: {
      user: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
            <Play className="w-3 h-3 fill-white text-white" />
          </div>
          <div className="h-4 w-24 flex items-center gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-slate-800 rounded-full"
                style={{ height: Math.random() * 16 + 4 + "px" }}
              ></div>
            ))}
          </div>
        </div>
      ),
      bot: "Recordatorio creado: Comida con tía Luisa el próximo domingo a la 1:00 PM.",
      time: "14:15",
    },
  },
];

function SuperpowersSection() {
  const [activeTab, setActiveTab] = useState(0);

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
    <section className="min-h-screen  text-white py-20 px-6 flex flex-col items-center justify-center font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Superpoderes para gente que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              no llega a todo.
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Deja de intentar recordarlo todo. Delega tu memoria y recupera tu
            tranquilidad.
          </p>
        </div>

        {/* Layout Principal: Grid de 2 Columnas */}
        <div className="grid lg:grid-cols-12 gap-12 items-center bg-gray-950/80 p-5 rounded-xl">
          {/* COLUMNA IZQUIERDA: Navegación / Lista */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, index) => {
              const isActive = activeTab === index;
              const Icon = feature.icon;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`group text-left p-6 rounded-2xl transition-all duration-300 border border-transparent
                    ${
                      isActive
                        ? "bg-slate-900 border-slate-800 shadow-2xl shadow-purple-900/10 ring-1 ring-slate-700/50"
                        : "hover:bg-slate-900/40 hover:border-slate-800/50"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${
                        isActive
                          ? feature.color
                          : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-white" : ""}`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold mb-2 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* COLUMNA DERECHA: Visualización Dinámica */}
          <div className="lg:col-span-7 relative h-[500px] bg-slate-900 rounded-[40px] border border-slate-800 shadow-2xl flex items-center justify-center p-8 overflow-hidden">
            {/* Elementos decorativos de fondo (Glow) */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] opacity-20 transition-colors duration-700 ${features[activeTab].color}`}
            ></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            {/* Mockup del Chat */}
            <div className="relative w-full max-w-md bg-slate-100 rounded-3xl border border-slate-800 p-6 shadow-xl z-10 transition-all duration-500 transform key={activeTab}">
              {/* HEADER DEL CHAT */}
              <div className="bg-[#F5F5F5 mb-3 pb-3  flex items-center justify-between border-b border-slate-200 z-40 relative">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="text-blue-500 w-6 h-6 cursor-pointer" />

                  {/* CORRECCIÓN 2: Aquí integramos la Mascota correctamente */}
                  <div className="relative">
                    <img
                      src="/HaroldIA.jpg"
                      alt="Mascota HaroldIA"
                      className="w-9 h-9 rounded-full object-cover border border-slate-300 shadow-sm"
                    />
                    {/* Indicador de estado online */}
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#F5F5F5] rounded-full"></div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold flex items-center gap-1 text-slate-800">
                      HaroldIA
                      <div className="bg-blue-500 rounded-full p-[2px]">
                        <Check
                          className="w-1.5 h-1.5 text-white"
                          strokeWidth={4}
                        />
                      </div>
                    </span>
                    <span className="text-[10px] text-slate-500 -mt-0.5">
                      En línea
                    </span>
                  </div>
                </div>
              </div>

              {/* Mensajes */}
              <div className="space-y-6">
                {/* Mensaje Usuario (Derecha) */}
                <div className="flex justify-end animate-fade-in-right">
                  <div
                    className={`max-w-[85%] rounded-2xl rounded-tr-sm p-4 text-sm shadow-lg ${features[activeTab].color}`}
                  >
                    {features[activeTab].chat.user}
                    <div className="mt-2 text-[10px] text-right flex items-center justify-end gap-1">
                      {features[activeTab].chat.time}
                      <span className="opacity-80">✓✓</span>
                    </div>
                  </div>
                </div>

                {/* Mensaje Bot (Izquierda) */}
                <div
                  className="flex justify-start animate-fade-in-left"
                  style={{ animationDelay: "150ms" }}
                >
                  <div className="max-w-[85%] bg-slate-100  text-gray-700 rounded-2xl rounded-tl-sm p-4  text-sm shadow-lg border border-slate-300">
                    <p>{features[activeTab].chat.bot}</p>
                    <div className="mt-2 text-[10px] text-slate-400">
                      Justo ahora
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-20 text-center">
          <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")}>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 active:scale-95">
              Descubre todos los superpoderes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Brillo sutil en el botón */}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-pulse"></div>
            </button>
          </a>
        </div>
      </div>

      {/* Estilos para animaciones simples sin config extra */}
      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right { animation: fadeInRight 0.5s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.5s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}

export default SuperpowersSection;
