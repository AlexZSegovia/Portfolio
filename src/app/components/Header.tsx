// app/components/Header.tsx
import React from 'react';
import Image from 'next/image'; // <-- 1. Importa el componente Image

const Header: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 md:p-12">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mb-8 border-4 border-cyan-500 shadow-xl">
        
        {/* 2. Reemplaza <img> por <Image> y añade width y height */}
       <Image
  src="/IMG_20250109_015025.jpg" // <-- Esto es incorrecto
  alt="Alex Segovia - Perfil"
  width={200}
  height={200}
  className="w-full h-full object-cover"
/>

      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
        Hola, soy <span className="text-cyan-400">Alex Segovia</span> 👋
      </h1>
      <p className="text-xl md:text-3xl font-medium text-gray-200 mb-6">
        Full-Stack Developer | Analista de Sistemas
      </p>
      <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
        Transformo ideas innovadoras en soluciones web robustas y eficientes, especializándome en el desarrollo de experiencias de usuario fluidas y APIs escalables. Apasionado por la tecnología y la resolución de problemas en Rosario, Argentina.
      </p>
      <div className="mt-10 flex space-x-4">
        <a 
          href="#proyectos" 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Ver Proyectos
        </a>
        <a 
          href="#contacto" 
          className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Contactar
        </a>
      </div>
    </section>
  );
};
export default Header;