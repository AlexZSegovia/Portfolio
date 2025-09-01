import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Henry Bootcamp",
      date: "2025",
      description: "Programa intensivo de +800 horas enfocado en el desarrollo de aplicaciones web full-stack.",
    },
    {
      role: "Analista de Sistemas Funcionales",
      company: "Educación Superior",
      date: "2017 - Cursando",
      description: "Título de carrera enfocado en el análisis, diseño y optimización de sistemas de información.",
      inProgress: true,
    },
    {
      role: "Programación Web Desde Cero",
      company: "Egg",
      date: "Septiembre 2024",
      description: "Certificado en HTML, CSS y JavaScript.",
      certificateUrl: "/certificado-egg.pdf",
    },
    {
      role: "Curso de HTML5",
      company: "Ademass",
      date: "2024",
      description: "Certificado por superar la formación en HTML5.",
      certificateUrl: "/certificado-ademass.pdf",
    }
  ];

  return (
    <section className="py-20 bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 mb-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Experiencia y Educación</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* La línea vertical del timeline */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-cyan-700"></div>

        {experiences.map((exp, index) => (
          // Contenedor de cada item del timeline
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            
            {/* Contenido (sin el fondo de tarjeta, como en la versión original) */}
            <div className={`w-[calc(50%-2rem)] ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
              <h3 className={`text-xl font-bold text-white flex items-center ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                {exp.role}
                {exp.inProgress && (
                  <span className="relative flex h-3 w-3 ml-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                )}
              </h3>
              <p className="text-cyan-400">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-2">{exp.date}</p>
              <p className="text-gray-400 mb-3">{exp.description}</p>
              
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-gray-700 text-cyan-300 text-xs font-semibold py-1 px-3 rounded-full hover:bg-gray-600 transition"
                >
                  Ver Certificado
                </a>
              )}
            </div>
            
            {/* Espaciador */}
            <div className="w-8 flex-shrink-0"></div>

            {/* El punto en la línea del timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;