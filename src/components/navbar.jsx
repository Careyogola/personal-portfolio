import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-full flex flex-row items-center justify-between p-4 bg-white'>
      <div className='h-auto'>
        <img src='/carey-no-bg.png' className='h-15 w-25' alt='Logo' />
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-gray-600'>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row gap-4 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}>
        <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4' href='/'>Home</a>
        <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4' href='/about'>About</a>
        <a className='text-normal font-light border border-gray-100 border-solid rounded-sm py-2 px-4' href='/projects'>Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
