import React from 'react'
import { FaCode, FaLaptopCode, FaBrain, FaServer } from 'react-icons/fa'

const About = () => {
  const skills = [
    {
      number: "1",
      name: "Frontend Development",
      description: "Experienced in building modern, responsive, and interactive web applications using Next.js, React, and Tailwind CSS. Focused on creating sleek UI/UX with optimized performance."
    },
    {
      number: "2",
      name: "Component-Based Development",
      description: "Proficient in React and TypeScript, ensuring scalable, maintainable, and reusable UI components. Skilled in state management and handling dynamic content efficiently."
    },
    {
      number: "3",
      name: "Performance & Optimization",
      description: "Experienced in optimizing websites for speed, accessibility, and SEO. Implementing best practices for lazy loading, caching, and responsive design to enhance user experience."
    },
    {
      number: "4",
      name: "Web Technologies & Tools",
      description: "Hands-on experience with JavaScript, Python, API integration, and version control (Git/GitHub). Familiar with DevOps practices for deploying and maintaining web applications."
    }
  ];

  return (
    <div id="abt-sec" className='relative min-h-[80vh] py-10 overflow-hidden'>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-bold text-white mb-3">
            Helping companies build modern,{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              responsive, and dynamic websites
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 text-sm max-w-2xl">
            I'm a Frontend Web Developer specializing in Next.js and Tailwind CSS, crafting sleek and efficient user interfaces. 
            I also have experience with TypeScript, JavaScript, Python, and React, allowing me to build scalable and interactive web applications. 
            Passionate about turning ideas into reality with clean, maintainable, and high-performance code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group relative bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-pink-500/10 hover:border-pink-400/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="text-pink-500/20 text-2xl font-bold absolute top-3 right-3 transition-all duration-300 group-hover:text-pink-400/30">
                {skill.number}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-base font-semibold text-white mb-1.5">{skill.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{skill.description}</p>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About