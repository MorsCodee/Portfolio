import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id="abt-sec" className='min-h-screen flex justify-center items-center'>
    <div data-aos="zoom-in-up" className= 'w-full md:w-1/2 flex justify-center items-center'>
          <Image
          src="/pink.jpeg" 
          alt="Animated Girl"
          className="object-cover"
          width={450}
          height={450}
        />
    </div>
    <div id='About' className='w-full md:w-1/2 p-8'>
      <h2 data-aos="zoom-in-up" className='text-4xl md:text-5xl font-bold-300'>About Me</h2>
      <p data-aos="zoom-in-up" className='text-white-500 pt-4 text-[10px] sm:text-[20px]'>
      I'm currently studying at GIAIC with a focus on Artificial Intelligence. My core skills span across web development and programming, including expertise in Tailwind CSS, HTML, TypeScript, C++, Python, JavaScript, Node.js, Next.js, and React. Passionate about turning ideas into digital reality, I love crafting clean and efficient code that powers innovative solutions. Always eager to learn, I’m continually expanding my skill set to keep up with the fast-evolving tech world.
      </p>
    </div>
    </div>
  )
}

export default About
