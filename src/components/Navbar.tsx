import React from 'react'

const Navbar = () => {
  return (
    <div className='container fixed bg-black'>
        <div className='flex justify-between items-center align-middle px-10'>
            <div className='text-5xl font-bold'>Mehak</div>
            <ul className='flex gap-10 lg:gap-15 md-flex font-bold py-5'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar
