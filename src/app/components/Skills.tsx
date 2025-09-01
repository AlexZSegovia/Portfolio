/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Datos de las habilidades con URLs de insignias de shields.io
const skills = [
  { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
  { name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
  { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
  { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white' },
  { name: 'Redux', icon: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
  { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
  { name: 'NestJS', icon: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white' },
  { name: 'Express.js', icon: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
  { name: 'PostgreSQL', icon: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
  { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
  { name: 'TypeORM', icon: 'https://img.shields.io/badge/TypeORM-E0234E?style=for-the-badge&logo=typeorm&logoColor=white' },
  { name: 'HTML5', icon: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
  { name: 'CSS3', icon: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  { name: 'TailwindCSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'Git', icon: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'GitHub', icon: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
  { name: 'Scrum', icon: 'https://img.shields.io/badge/Scrum-0096D6?style=for-the-badge&logo=jira&logoColor=white' },
];

interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon }) => (
  <img src={icon} alt={name} className="h-8 md:h-9 m-2" /> // Altura ajustada
);

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 mb-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Mis Habilidades</h2>
      <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-10">
        Tecnologías y herramientas con las que construyo soluciones robustas y escalables.
      </p>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map(skill => <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />)}
      </div>
    </section>
  );
};
export default Skills;