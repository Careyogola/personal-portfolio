import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { MdHtml, MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";


const Projects = () => {
  return (
    <div className='h-screen w-full p-4 flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4 h-auto shadow'>
            <h2 className='text-xl font-medium text-center mt-2'>Tech Stacks</h2>
            <div className='grid grid-cols-2 p-4 gap-4'>
                <h2><MdHtml size={40}/> Hypertext Markup Language</h2>
                <h2><MdCss size={40}/> Cascading Style Sheets</h2>
                <h2><IoLogoJavascript size={40}/>Javascript</h2>

                <h2><FaReact size={40}/> React</h2>
                <h2><RiNextjsFill size={40}/>Nextjs</h2>
                <h2><FaFlutter size={40}/>Flutter</h2>
                
            </div>

        </div>
    </div>
  )
}

export default Projects