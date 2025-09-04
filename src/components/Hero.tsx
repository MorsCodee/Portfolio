import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, href: "https://github.com/MorsCodee" },
    { icon: <FaLinkedin className="text-xl" />, href: "https://www.linkedin.com/in/mehak-f-219993278/" },
    { icon: <FaTwitter className="text-xl" />, href: "https://x.com/MorsCodee" }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="container mx-auto px-4 max-w-5xl pt-10">
        <div className="grid lg:grid-cols-1 justify-center text-center min-h-[calc(100vh-60px)] items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div data-aos="fade-up" className="space-y-2">
              <p className="text-6xl md:text-6xl font-bold text-white">Hi,</p>
              <p className="text-5xl md:text-7xl font-bold">
                I'm <span className="text-pink-600 bg-clip-text">Mehak</span>
              </p>
            </div>
            
            <p data-aos="fade-up" data-aos-delay="100" className="text-white text-lg max-w-lg mx-auto">
              A Frontend Web developer building websites using nextjs and tailwindcss.
            </p>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4 justify-center text-center mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-pink-900 hover:border-pink-500 transition-all duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-pink-300 transition-colors duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
