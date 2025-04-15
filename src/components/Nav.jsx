import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import {Link } from 'react-router-dom';

const Nav =() =>{
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className="dark:bg-gray-950 text-gray-400 w-full">
            <div className="py-7 mx-40 items-center flex flex-row justify-between">
            <div className="text-2xl font-medium">
                <Link to="/"><h3 className="text-gray-400">Carey<span className="text-gray-400">.com</span></h3></Link>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-gray-200">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <div className={`${ 
                menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row gap-4 items-center absolute lg:static top-16 left-0 w-full lg:w-auto dark:bg-gray-950lg:bg-transparent p-4 lg:p-0`}>
            <Link to='/' className="group text-gray-400 transition duration-300">Home.
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
            <Link to='/about' className="group text-gray-400 transition duration-300">Get to know me.
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
            <Link to='/projects' className="group text-gray-400 transition duration-300">Have a peep.
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
            <Link to='/contact' className="group text-gray-400 transition duration-300">Lets get in touch.
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
            </div>
            </div>
        </nav>
    )
}

export default Nav;