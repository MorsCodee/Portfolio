import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4">
        {/* Text Section */}
        <div className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up" className="text-center lg:text-left">Hi,</p>
            <p data-aos="zoom-in-up" className="text-center lg:text-left">
              I'm <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Mehak</span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div 
          id="hero" 
          className="hidden lg:flex justify-center items-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/purple4k.jpeg" 
              alt="Animated Girl"
              className="object-cover"
              width={256}
              height={256}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
