function Navbar () {
    return(
               <nav className="fixed w-full z-50 mt-5 ">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between backdrop-blur-md  rounded-3xl shadow-md shadow-cyan-300  border-b border-white bg-white">
            <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-emerald-400 to-blue-400 p-1 px-2 rounded-md">Kadet</div>
            <div className="flex gap-6 items-center ">
              <a
                href="#features"
                className="hidden md:block text-sm font-medium text-gray-900 hover:text-black transition-colors"
              >
                Características
              </a>
              <a
                href="#pricing"
                className="hidden md:block text-sm font-medium text-gray-900 hover:text-black transition-colors"
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