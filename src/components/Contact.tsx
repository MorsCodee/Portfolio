import React from 'react'
import { IoMail } from "react-icons/io5";

const Components = () => {
  return (
    <div id='Contact' className='pt-32 container'>
      {/* Flexbox to align sections */}
      <div className='flex flex-col md:flex-row gap-10'>
        
        {/* Left Section: Call Section */}
        <div className='space-y-8 md:w-1/2 font-bold'>
          <h2 className='bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent text-5xl'>Let's get in Touch</h2>
          <p  className='text-white-600 text-[18px] pt-2 font-normal '>
            Lets have a call and get in touch.
          </p>
          <div className='flex gap-3 items-center text-2xl font-normal'>
            <IoMail size={30}/> mehakfaheem1234@gmail.com
          </div>
        </div>
        {/* Right Section: Form */}
        <div className='space-y-8 md:w-1/2 px-10'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent rounded-2xl' id='name' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent rounded-2xl' id='email' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Message</label>
            <textarea className='bg-transparent border border-accent rounded-2xl' id='msg' rows={8}></textarea>
          </div>
          <button className='rounded-full p-2 px-6 bg-gradient-to-r from-purple-400 to-pink-400'>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Components;
