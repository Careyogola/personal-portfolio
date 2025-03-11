import React from 'react';
import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

const MainContent = () => {
  return (
    <div className='w-full min-h-screen p-4'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center py-12 px-6 lg:px-20'>
        <div className='flex flex-col gap-7 items-start'>
          <p className='text-3xl lg:text-5xl font-medium'>Hi, I'm<span className='text-3xl lg:text-5xl text-gray-500'> Carey Ogola</span></p>
          <h1 className='text-5xl lg:text-7xl'><span className='text-5xl lg:text-7xl text-purple-700'>Soft</span>ware</h1>
          <h1 className='text-4xl lg:text-6xl'>Developer | Engineer</h1>

          <p className='text-xl lg:text-2xl font-medium'>
            I'm a <span className='text-purple-700 uppercase'>Software</span> Developer based in Nairobi, Kenya<br />
            I'll help you build beautiful applications and websites.
          </p>

          <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
            <button className='bg-purple-500 border-2 border-solid p-4 shadow-2xl hover:bg-black text-white'>Browse projects</button>
            <button className='bg-black border-2 border-solid text-white p-4 shadow-2xl hover:bg-purple-500'>Contact Me</button>
          </div>

          <div className='flex flex-row items-center justify-center gap-6 lg:gap-10'>
            <a href='https://github.com/Careyogola'><FaGithub size={30} /></a>
            <a href='https://gitlab.com/careyogawo'><FaGitlab size={30} /></a>
            <a href='https://www.linkedin.com/in/carey-ogola/'><FaLinkedin size={30} /></a>
          </div>
        </div>

        <div className='hidden lg:block mt-10 lg:mt-0'>
          <img
            className='rounded-sm shadow-sm border border-gray-500'
            src='/Carey.jpeg'
            width={350}
            height={480}
            alt='Carey Ogola'
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
