import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">GlobalSwapAngola</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
            <a href="#Service" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Contactos</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
            <a href="#Service" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Service</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}