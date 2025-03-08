import React from 'react'
import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className='w-full min-h-screen bg-white my-32'>
      <div className='flex flex-col gap-12 py-20 px-20'>
        <div className='flex flex-row gap-10 h-80 items-center'>
          <div>
            <p className='text-3xl font-medium'>I'm <span className='text-3xl font-medium text-purple-500'> Carey Ogola</span></p>
            <h1 className='text-8xl'><span className='text-8xl text-purple-700'>Soft</span>ware</h1>
            <h1 className='text-8xl'>Developer | Engineer </h1>
            </div>
            <div className=''>
              <img className='rounded-2xl shadow-2xl'
              src='/Carey.jpeg' 
              width={350}
              height={480}
              />
            </div>
            </div>
            <p className='text-2xl text-medium'>I'm a <span className='text-purple-700 uppercase'>Software</span> Developer based in Nairobi, Kenya<br/>I'll help you build beautiful applications and websites.</p>
            <div className='flex flex-row gap-10'>
              <button className='bg-purple-500 border -2 border-solid  p-4 shadow-2xl hover:bg-black text-white'>Browse projects</button>
              <button className='bg-black border-2 border-solid text-white p-4 shadow-2xl hover:bg-purple-500'>Contact Me</button>
            </div>
            <div className='flex flex-row items-center justify-center gap-10'>
              <a href=''><FaGithub size={30}/></a>
              <a href=''><FaGitlab size={30}/></a>
              <a href=''><FaLinkedin size={30}/></a>
            </div>
        </div>
    </div>
  )
}

export default MainContent