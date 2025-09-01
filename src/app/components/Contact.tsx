/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer className="py-20 bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 text-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">¡Conectemos!</h2>
      <p className="mb-10 text-xl text-gray-300 max-w-2xl mx-auto">
        ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y a construir soluciones increíbles.
      </p>
      
      <div className="flex justify-center space-x-6 mb-12">
        <a 
          href="mailto:alexsegovia654@gmail.com" 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          alexsegovia654@gmail.com
        </a>
      </div>

      <div className="flex justify-center space-x-8 mb-12">
        <a 
          href="https://www.linkedin.com/in/alex-segovia-210391291/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
          title="Mi perfil de LinkedIn"
        >
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="h-9" />
        </a>
        <a 
          href="https://github.com/AlexZSegovia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
          title="Mi perfil de GitHub"
        >
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="h-9" />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-16">
        &copy; {new Date().getFullYear()} Alex Segovia. Todos los derechos reservados.
      </p>
    </footer>
  );
};
export default Contact;