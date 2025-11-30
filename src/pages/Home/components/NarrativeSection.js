function NarrativeSection() {
  return (
    <section className="min-h-screen space flex items-center justify-center py-24 px-6 font-sans">
      
      <div className="max-w-2xl mx-auto">
        
        {/* Contenedor de texto con ritmo vertical amplio */}
        <div className="space-y-16 text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-yellow-500">
          
          {/* Bloque 1 */}
          <p className="text-cyan-500">
            Has normalizado vivir con la cabeza a punto de explotar.
            <br />
            <span className=" transition-colors hover:text-neutral-500 duration-500">
              Y ya ni lo notas.
            </span>
          </p>

          {/* Bloque 2 */}
          <div className="space-y-4">
            <p className="">
              Siempre hay algo pendiente. Algo que se te olvida. 
              Algo que deberías estar haciendo ahora mismo.
            </p>
            <p className="font-medium ">
              ...pero no sabes qué.
            </p>
          </div>

          {/* Bloque 3 */}
          <p>
            Apuntas cosas para no olvidarlas. Pero acabas olvidando por qué las apuntaste.
            <span className="block mt-4 ">
              Como si la organización fuera el objetivo, y no la solución.
            </span>
          </p>

          {/* Bloque 4 - Cierre / Solución */}
          <div className="pt- opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '0.5s' }}>
            <p className="text-3xl md:text-4xl  mb-2">
              Hasta que decides soltar.
            </p>
            <p className="text-3xl md:text-4xl font-bold ">
              Y recuperas tu paz mental.
            </p>
          </div>

        </div>
      </div>

      {/* Estilos para una animación de entrada muy sutil */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}

export default NarrativeSection;