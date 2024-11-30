import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image';

const Hero = () => {
  return (
      <div>
       <Navbar />
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
       <div className='text-[80px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="zoom-in-up">Hi,</p>
              <p data-aos="zoom-in-up">I'm <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Mehak</span></p>
              </div>
            </div>
          
          <div id="hero" className='min-h-screen flex justify-center items-center'>
          <div className= 'w-64 h-64 rounded-full overflow-hidden shadow-lg'>
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
