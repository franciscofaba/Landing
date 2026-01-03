import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Un alivio para el día a día",
    text: "Entre la pega, los niños y la casa, siempre se me olvidaba algo. Con esta herramienta tengo todo ordenado y mi cabeza mucho más tranquila.",
    author: "Carolina Muñoz",
    role: "Mamá, 38 años",
    avatar: "Avatar_1.png",
  },
  {
    id: 2,
    title: "Me cambió la rutina",
    text: "Antes vivía anotando cosas en cualquier parte. Ahora tengo todo en un solo lugar y no se me pasa nada importante.",
    author: "Felipe Rojas",
    role: "Papá, ingeniero",
    avatar: "Avatar_2.png",
  },
  {
    id: 3,
    title: "Ideal para mamás multitask",
    text: "Es como tener una asistente personal. Recordatorios del colegio, médicos, pagos… todo a tiempo.",
    author: "Natalia Soto",
    role: "Mamá de dos",
    avatar: "Avatar_3.png",
  },
  {
    id: 4,
    title: "Orden mental total",
    text: "Tengo mil ideas al día y siempre se me olvidaban. Esto me ayudó a ordenar mi cabeza y avanzar de verdad.",
    author: "Tomás Vergara",
    role: "25 años, diseñador",
    avatar: "Avatar_4.png",
  },
  {
    id: 5,
    title: "Un antes y un después",
    text: "No pensé que algo tan simple pudiera ayudar tanto. Ahora estoy mucho más organizado y menos estresado.",
    author: "Rodrigo León",
    role: "Papá, 42 años",
    avatar: "Avatar_5.png",
  },
  {
    id: 6,
    title: "Perfecta para la vida adulta real",
    text: "Es simple, rápida y realmente funciona. No es otra app más que uno deja botada.",
    author: "Camila Fuentes",
    role: "Marketing Manager, 27 años.",
    avatar: "Avatar_6.png",
  },
];


function Testimonials() {
  return (
    <section className=" py-20 px-6 font-sans text-slate-100">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
           Una comunidad
          </span>
          <br />
         que no deja de crecer 
        </h2>
        <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto">
         Da el siguiente paso con Harold AI y descubre por qué tantos usuarios han decidido confiar en un asistente que realmente ayuda.
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