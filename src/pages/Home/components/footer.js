function Bottomfooter() {
  return (
    <>
      {/* --- Social Proof / Stats --- */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">
            Usado por equipos minimalistas en
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos (using text for simple code) */}
            <span className="text-xl font-bold font-serif">ACME Corp</span>
            <span className="text-xl font-bold font-mono">StarkInd</span>
            <span className="text-xl font-bold italic">WayneEnt</span>
            <span className="text-xl font-bold">CyberDy</span>
          </div>
        </div>
      </section>
      <footer className="py-12 border-t border-gray-100 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 ">
          <div className="text-gray-400 text-sm">
            © 2024 Minima Inc. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-gray-400 hover:text-gray-900 text-sm transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-gray-900 text-sm transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="/data-Policy"
              className="text-gray-400 hover:text-gray-900 text-sm transition-colors"
            >
              Política de Eliminación
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Bottomfooter;
