import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const data = [
    {
        id: 0,
        title: "Plateria",
        desc: "A Crockery website designed using Nextjs and Tailwind.",
        img: "/crockerywebsite.png",
        tags: ["Next.Js", "Tailwind css"],
        link: "https://milestone2-assignment-ten.vercel.app/",
    },
    {
        id: 1,
        title: "DevBlog",
        desc: "A Next.js and Typescript based blog website.",
        img: "/blogweb.png",
        tags: ["React", "Node", "CSS", "Typescript"],
        link: "https://milestone3-assignment-51nl2l29g-mehak-s-projects.vercel.app/",
    },
    {
      id: 2,
      title: 'ToDo List',
      desc: "A basic TodoApp for everyday task management.",
      img: '/todoapp.png',
      tags: ['React', 'Node', 'CSS', 'Typescript'],
      link: 'https://to-do-d18yk7s7o-mehak-s-projects.vercel.app/',
    },
    {
      id: 3,
      title: "One",
      desc: "A minimalist aesthetic landing page with metallic gradient background effects using Next.js and Tailwind CSS.",
      img: "/one.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
      link: "https://one-bice.vercel.app/",
  }
]

const Projects = () => {
  return (
    <div id='projects' className='relative min-h-[70vh] py-8 overflow-hidden'>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <h2 data-aos="fade-up" className="text-xl md:text-2xl font-bold text-white mb-2">
            Featured{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 text-xs max-w-2xl">
            A collection of my recent work.
          </p>
        </div>

        <div className='grid gap-3 md:grid-cols-2'>
          {data.map((project, index) => (
            <a 
              href={project.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group relative bg-black/40 backdrop-blur-sm rounded-lg border border-pink-500/10 hover:border-pink-400/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-3">
                <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-pink-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs mb-2">
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-1.5 py-0.5 text-[10px] bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Icon */}
                <div className="absolute bottom-2 right-2 text-pink-500/50 group-hover:text-pink-400 transition-colors duration-300">
                  <FaExternalLinkAlt className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects