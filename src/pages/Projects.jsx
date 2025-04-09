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
    <div className='h-screen w-full p-4 flex flex-col gap-6 items-center dark:bg-gray-950'>
      <h2 className='lg:text-4xl font-extrabold text-green-400'>Skills & Technologies</h2>
      
      <div className='bg-white p-4 flex flex-wrap gap-4 items-center justify-center rounded-lg shadow-lg'>
        <MdHtml size={40} className="text-orange-600"/>
        <MdCss size={40} className="text-blue-600"/>
        <IoLogoJavascript size={40} className="text-yellow-500"/>
        <FaReact size={40} className="text-blue-400"/>
        <RiNextjsFill size={40}/>
        <FaFlutter size={40} className="text-blue-500"/>
        <SiTypescript size={40} className="text-blue-600"/>
        <SiTailwindcss size={40} className="text-teal-400"/>
        <FaGitSquare size={40} className="text-red-500"/>
        <BiLogoPostgresql size={40} className="text-blue-800"/>
        <SiMysql size={40} className="text-blue-600"/>
        <FaNodeJs size={40} className="text-green-600"/>
        <SiExpress size={40}/>
        <BiLogoMongodb size={40} className="text-green-700"/>
        <SiPhp size={40} className="text-purple-600"/>
        <FaPython size={40} className="text-yellow-400"/>
      </div>

      <h2 className='lg:text-4xl font-extrabold text-green-400'>Featured Projects</h2>

      <div className='grid grid-cols-3 gap-10'>
        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-5 w-96 hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800'>
          <img src="/portfolio.png" alt="Portfolio Project" className="rounded-lg" />
          <p className='text-2xl font-medium text-green-300'>Professional Portfolio</p>
          <p className="text-gray-400">My own portfolio website built with the following listed technologies:</p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">React</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">FontAwesome</span>
          </div>
        </div>


        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-5 w-96 hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800'>
          <img src="/matiko.png" alt="Matiko" className="rounded" />
          <p className='text-2xl font-medium text-green-300'>Matiko! website(development underway)</p>
          <p className="text-gray-400">Matiko! is a user friendly web application for purchasing tickets and i want to make the best tickets provider in Kenya.</p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">React & vite</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">FontAwesome</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Typescript</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Laravel</span>
          </div>
        </div>

        <div className='border-none border-green-400 rounded-lg flex flex-col text-gray-300 p-5 w-96 hover:scale-105 transition-transform cursor-pointer gap-4 shadow-2xl bg-gray-800'>
          <img src="/art.png" alt="Matiko" className="rounded" />
          <p className='text-2xl font-medium text-green-300'>Okellooregeart</p>
          <p className="text-gray-400">oregeart is a fully functional and responsive web application for commercialising traditional Antiques in United Kingdom check it out <a target="_blank" href="https://okellooregeart.com" className='text-white underline'>okellooregeart</a></p>
          <hr className="border-gray-600" />
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">React</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">FontAwesome</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Typescript</span>
            <span className="px-3 py-1 bg-gray-700 rounded-md text-sm">Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
