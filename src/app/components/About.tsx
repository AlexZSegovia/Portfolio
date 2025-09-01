// app/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 mb-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Sobre Mí</h2>
      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg">
        <p className="mb-6">
          Soy <strong>Alex Segovia</strong>, un <strong>Desarrollador Full-Stack</strong> y <strong>Analista de Sistemas</strong> residente en Rosario, Argentina. Mi pasión es transformar ideas complejas en soluciones de software elegantes y eficientes, utilizando las herramientas más modernas del ecosistema web.
        </p>
        <p className="mb-6">
          Cuento con experiencia sólida en el desarrollo de aplicaciones robustas, tanto en el frontend con <strong>React</strong> y <strong>Next.js</strong>, como en el backend con <strong>Node.js</strong> y <strong>NestJS</strong>. Manejo de bases de datos relacionales como <strong>PostgreSQL</strong> y no relacionales como <strong>MongoDB</strong>, aplicando ORMs como <strong>TypeORM</strong> para una gestión de datos eficiente.
        </p>
        <p className="mb-6">
          Mi enfoque se centra en la creación de código limpio, mantenible y escalable. Soy un firme creyente en la metodología <strong>Scrum</strong> para la gestión de proyectos y me adapto rápidamente a nuevos entornos y desafíos técnicos.
        </p>
        <p>
          Constantemente busco expandir mis conocimientos, explorando nuevas tecnologías y mejores prácticas para entregar productos de alto valor. Estoy abierto a nuevas oportunidades donde pueda aplicar mis habilidades y seguir creciendo profesionalmente.
        </p>
      </div>
    </section>
  );
};
export default About;