import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <IoMail size={24} />,
      link: "mailto:mehakfaheem1234@gmail.com",
      value: "mehakfaheem1234@gmail.com"
    },
  ];

  return (
    <div id='Contact' className='relative min-h-[70vh] py-8 overflow-hidden'>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <h2 data-aos="fade-up" data-aos-duration="500" className="text-xl md:text-2xl font-bold text-white mb-2">
            Let's{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" className="text-gray-400 text-xs max-w-2xl">
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={20 * index}
              data-aos-duration="400"
              className="group relative bg-black/40 backdrop-blur-sm rounded-lg border border-pink-500/10 hover:border-pink-400/30 transition-all duration-300 p-4 flex items-center gap-4"
            >
              <div className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                {social.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  {social.value}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact;
