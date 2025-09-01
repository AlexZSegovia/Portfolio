import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#inicio" className="text-xl font-bold text-cyan-400 hover:text-cyan-300">
          Alex Segovia
        </Link>
        <div className="flex space-x-6">
          <Link href="#sobre-mi" className="text-gray-300 hover:text-cyan-400 transition">Sobre Mí</Link>
          <Link href="#experiencia" className="text-gray-300 hover:text-cyan-400 transition">Experiencia</Link> {/* <-- Nuevo enlace */}
          <Link href="#habilidades" className="text-gray-300 hover:text-cyan-400 transition">Habilidades</Link>
          <Link href="#proyectos" className="text-gray-300 hover:text-cyan-400 transition">Proyectos</Link>
          <Link href="#contacto" className="text-gray-300 hover:text-cyan-400 transition">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;