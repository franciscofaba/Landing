function Bottomfooter() {
  return (
    <>
    
      <footer className="py-12 border-t border-gray-100 bg-gray-900/70">
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
