function Navbar () {
    return(
               <nav className="fixed w-full z-50 bg-neutral-50 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter">minima.</div>
            <div className="flex gap-6 items-center">
              <a
                href="#features"
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Características
              </a>
              <a
                href="#pricing"
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Precios
              </a>
              <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all">
                Empezar
              </button>
            </div>
          </div>
        </nav>
    )
}
export default Navbar;