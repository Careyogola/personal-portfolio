import React from 'react';

const Header = () => {
  return (
    <div className='w-full h-auto flex items-center justify-between px-8 fixed top-0 right-0'>
      <div className='h-auto'>
        <img src='/carey-no-bg.png' className='h-15 w-25'/>
      </div>
      <div className='flex flex-wrap justify-around gap-4'>
        <a
          className='font-medium text-xl hover:text-blue-400 transition duration-300 ease-in-out'
          href='/'
        >
          About
        </a>
        <a
          className='font-medium text-xl hover:text-blue-400 transition duration-300 ease-in-out'
          href='#'
        >
          Projects
        </a>
        <a
          className='font-medium text-xl hover:text-blue-400 transition duration-300 ease-in-out'
          href='#'
        >
          Tech stacks
        </a>
      </div>
    </div>
  );
};

export default Header;
