import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Necesitamos estos iconos

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Añadí px-4 para que en móviles no toque los bordes de la pantalla
    <nav className="fixed w-full z-50 mt-5 px-4">
      <div 
        className={`
          max-w-6xl mx-auto bg-black/20 backdrop-blur-md 
          shadow-md shadow-cyan-300/50 border border-white 
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'rounded-[32px]' : 'rounded-xl'} // Cambia la forma al abrir
        `}
      >
        <div className="px-6 h-16 flex items-center justify-between">
            
          {/* LOGO */}
          <div className="text-2xl font-bold text-white tracking-tighter bg-gradient-to-r from-emerald-400 to-blue-400 p-1 px-2 rounded-md text-slate-900 select-none cursor-pointer">
            HaroldIA
          </div>

          {/* DESKTOP MENU (Hidden on mobile) */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-sm font-medium text-gray-50 hover:text-gray-200 transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-50 hover:text-gray-200 transition-colors">
              Precios
            </a>
            <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all active:scale-95">
              Empezar
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON (Visible on mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-100 hover:text-gray-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU CONTENT (Dropdown) */}
        {/* Se muestra solo si isOpen es true */}
        <div className={`md:hidden flex flex-col gap-4 px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
          <hr className="border-gray-100" />
          <a 
            href="#features" 
            className="text-base font-medium text-gray-200 hover:text-white hover:translate-x-1 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Características
          </a>
          <a 
            href="#pricing" 
            className="text-base font-medium text-gray-200 hover:text-white hover:translate-x-1 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Precios
          </a>
          <button className="w-full py-3 text-sm font-bold bg-black text-white rounded-xl hover:bg-gray-800 transition-all active:scale-95">
            Empezar ahora
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;