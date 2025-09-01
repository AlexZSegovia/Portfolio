import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoLink: string; // Renombrado para claridad
  demoLink?: string; // Opcional para el demo
}

const projects: Project[] = [
  {
    title: 'AgroTrack (Proyecto Grupal)',
    description: 'Plataforma integral para la gestión agropecuaria. Desarrollé funcionalidades clave en el frontend (Next.js) y backend (NestJS), incluyendo autenticación, optimización de consultas y un chatbot inteligente.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'OpenAI API'],
    repoLink: 'https://github.com/AgroTrackP/AgroTrack',
    demoLink: 'https://agrotrack-project-henry.vercel.app', // <-- TU DEMO AQUÍ
  },
  {
    title: 'Backend para E-commerce',
    description: 'API RESTful escalable y segura para una tienda en línea. Implementé la gestión de productos, usuarios, carrito de compras y pedidos con NestJS, TypeORM y PostgreSQL, con autenticación JWT.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'Swagger'],
    repoLink: 'https://github.com/AlexZSegovia/E-comerce',
  },
  {
    title: 'Sistema de Turnos',
    description: 'Aplicación full-stack para la gestión de turnos en servicios. Permite a los usuarios registrarse, iniciar sesión y reservar citas, con una interfaz intuitiva en React y un backend robusto con Node.js y MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Context API'],
    repoLink: 'https://github.com/AlexZSegovia/Sistem-Turns',
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-700/50">
    <div>
      <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-base">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span key={tech} className="bg-cyan-900 text-cyan-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-auto flex items-center gap-4">
      <a 
        href={project.repoLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-gray-600 text-white font-bold py-2 px-5 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-center"
      >
        Ver Código
      </a>
      {project.demoLink && ( // <-- Muestra el botón solo si existe el link
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-cyan-600 text-white font-bold py-2 px-5 rounded-full hover:bg-cyan-700 transition duration-300 ease-in-out text-center"
        >
          Ver Demo
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 mb-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Mis Proyectos Destacados</h2>
      <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
        Explora una selección de mis trabajos, donde aplico mi expertise Full-Stack para construir soluciones innovadoras y funcionales.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};
export default Projects;