import React from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { MdHtml, MdCss } from "react-icons/md";
import { FaReact, FaGitSquare, FaNodeJs, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss, SiMysql, SiExpress, SiPhp } from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import {Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='min-h-screen w-full p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 items-center dark:bg-gray-950'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-400 text-center'>Skills & Technologies</h2>
      
      <div className='bg-white p-4 sm:p-6 flex flex-wrap gap-3 sm:gap-4 items-center justify-center rounded-lg shadow-lg w-full max-w-4xl'>
        <MdHtml size={32} className="text-orange-600 sm:w-10 sm:h-10"/>
        <MdCss size={32} className="text-blue-600 sm:w-10 sm:h-10"/>
        <IoLogoJavascript size={32} className="text-yellow-500 sm:w-10 sm:h-10"/>
        <FaReact size={32} className="text-blue-400 sm:w-10 sm:h-10"/>
        <RiNextjsFill size={32} className="sm:w-10 sm:h-10"/>
        <FaFlutter size={32} className="text-blue-500 sm:w-10 sm:h-10"/>
        <SiTypescript size={32} className="text-blue-600 sm:w-10 sm:h-10"/>
        <SiTailwindcss size={32} className="text-teal-400 sm:w-10 sm:h-10"/>
        <FaGitSquare size={32} className="text-red-500 sm:w-10 sm:h-10"/>
        <BiLogoPostgresql size={32} className="text-blue-800 sm:w-10 sm:h-10"/>
        <SiMysql size={32} className="text-blue-600 sm:w-10 sm:h-10"/>
        <FaNodeJs size={32} className="text-green-600 sm:w-10 sm:h-10"/>
        <SiExpress size={32} className="sm:w-10 sm:h-10"/>
        <BiLogoMongodb size={32} className="text-green-700 sm:w-10 sm:h-10"/>
        <SiPhp size={32} className="text-purple-600 sm:w-10 sm:h-10"/>
        <FaPython size={32} className="text-yellow-400 sm:w-10 sm:h-10"/>
      </div>

      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-400 text-center'>Featured Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 w-full max-w-7xl px-2'>
        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-4 sm:p-5 w-full max-w-md mx-auto hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800'>
          <img src="/portfolio.png" alt="Portfolio Project" className="rounded-lg w-full h-48 object-cover" />
          <p className='text-xl sm:text-2xl font-medium text-green-300'>Professional Portfolio</p>
          <p className="text-gray-400 text-sm sm:text-base">My own portfolio website built with the following listed technologies:</p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">React</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">JavaScript</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">Tailwind CSS</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">FontAwesome</span>
          </div>
        </div>

        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-4 sm:p-5 w-full max-w-md mx-auto hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800'>
          <img src="/matiko.png" alt="Matiko" className="rounded w-full h-48 object-cover" />
          <p className='text-xl sm:text-2xl font-medium text-green-300'>Matiko! website</p>
          <p className="text-gray-400 text-sm sm:text-base">
            <span className="block sm:hidden">Matiko! is a user friendly web application for purchasing tickets.</span>
            <span className="hidden sm:block">Matiko! is a user friendly web application for purchasing tickets and I want to make the best tickets provider in Kenya.</span>
            <span className="text-xs text-gray-500 block mt-1">(development underway)</span>
          </p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">React & Vite</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">JavaScript</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">Tailwind CSS</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">FontAwesome</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">TypeScript</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">Laravel</span>
          </div>
        </div>

        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-4 sm:p-5 w-full max-w-md mx-auto hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800 md:col-span-2 xl:col-span-1'>
          <img src="/art.png" alt="Okellooregeart" className="rounded w-full h-48 object-cover" />
          <p className='text-xl sm:text-2xl font-medium text-green-300'>Okellooregeart</p>
          <p className="text-gray-400 text-sm sm:text-base">
            oregeart is a fully functional and responsive web application for commercialising traditional Antiques in United Kingdom. 
            <span className="block mt-2">
              Check it out: <a target="_blank" href="https://okellooregeart.com" className='text-white underline hover:text-green-300 transition-colors'>okellooregeart</a>
            </span>
          </p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">React</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">JavaScript</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">Tailwind CSS</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">FontAwesome</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">TypeScript</span>
            <span className="px-2 py-1 sm:px-3 bg-gray-700 rounded-md text-xs sm:text-sm">Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;