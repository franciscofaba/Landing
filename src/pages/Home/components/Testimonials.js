import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Herramienta del año",
    text: "Sin duda, es la mejor herramienta a la que me he suscrito este año. ¡Seguid así! Me ha permitido limpiar mi flujo de trabajo de una manera que no creía posible.",
    author: "Christopher Fox",
    role: "Fundador",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
  },
  {
    id: 2,
    title: "Game-changer",
    text: "Tengo TDAH y esta herramienta me ha cambiado la vida por completo. ¡Es como tener un segundo cerebro! 🧠 La capacidad de soltar ideas y que se ordenen solas es mágica.",
    author: "Robbie Lockie",
    role: "Fundador",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=100&h=100",
  },
  {
    id: 3,
    title: "Es un salvavidas",
    text: "¡Gracias a Memorae! Es algo que me ha cambiado y salvado la vida. Ayer descubrí la función de recordatorios de amigos y fue como: ¡wooooooooooooooow!",
    author: "Yukari Aotani",
    role: "Violinista",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=100&h=100",
  },
  {
    id: 4,
    title: "¡Un milagro!",
    text: "Una maravilla. Ahora mi memoria ya tiene nombre y se llama Memorae.",
    author: "Sergio Argüero",
    role: "Asesor financiero",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    id: 5,
    title: "El mejor invento del siglo",
    text: "Desde que la uso ya es imposible que se me olvide algo. ¡Imaginad ahora que también puedo hacer que no se le olvide a los demás! El mejor invento del siglo para gente que vivimos a 200km/h.",
    author: "Fabiola Pérez",
    role: "Dentista",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=100&h=100",
  },
  {
    id: 6,
    title: "Lo mejor que me ha pasado",
    text: "La mejor herramienta a la que me he suscrito. No he vuelto a olvidar una tarea, ni un regalo. Ha sido una de las mejores inversiones de mi vida.",
    author: "Laura Fernández",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
  },
];

function Testimonials() {
  return (
    <section className=" py-20 px-6 font-sans text-slate-100">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
            +60k personas
          </span>
          <br />
          se han olvidado de olvidar
        </h2>
        <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto">
          Únete a la comunidad que ha decidido dejar de confiar en su memoria y empezar a confiar en su sistema.
        </p>
      </div>

      {/* MASONRY GRID */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-slate-100 -z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                "{item.text}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
              <img 
                src={item.avatar} 
                alt={item.author} 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-50"
              />
              <div>
                <p className="font-semibold text-sm text-slate-900">{item.author}</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;