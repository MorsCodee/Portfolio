import React from 'react';
import { Icon } from '@iconify/react';

const skills = [
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "React", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Javascript", icon: "logos:javascript" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Python", icon: "logos:python" }
];

const Skills = () => {
  return (
    <div id="Skills" className="relative min-h-[70vh] py-8 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <h2 data-aos="fade-up" data-aos-duration="600" className="text-xl md:text-2xl font-bold text-white mb-2">
            Technical{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-gray-400 text-xs max-w-2xl">
            Technologies and tools I work with to create modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={150 * index}
              data-aos-duration="500"
              className="group relative bg-black/40 backdrop-blur-sm rounded-lg border border-pink-500/10 hover:border-pink-400/30 transition-all duration-100 p-4 flex flex-col items-center justify-center"
            >
              <Icon 
                icon={skill.icon} 
                className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 mb-2" 
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
