import React from 'react';

const Navbar = () => {
  return (
    <div className="container fixed bg-black w-full z-10">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-5xl font-bold hidden md:block">Mehak</div>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap gap-5 sm:gap-10 font-bold text-sm sm:text-base">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#About">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#Skills">Skills</a></li>
          <li className="menuLink"><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
