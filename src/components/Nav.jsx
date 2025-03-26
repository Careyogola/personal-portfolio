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
            <div className="p-7 items-center flex flex-row justify-between">
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
            <Link to="/" className="hover:px-3 hover:py-1 hover:bg-gray-700 hover:rounded text-xl hover:text-green-400 font-normal">Home</Link>
            <Link to="/About" className="hover:px-3 hover:py-1 hover:bg-gray-700 hover:rounded text-xl hover:text-green-400 font-normal">About</Link>
            <Link to="/Projects" className="hover:px-3 hover:py-1 hover:bg-gray-700 hover:rounded text-xl hover:text-green-400 font-normal">Projects</Link>
            <Link to="/Contact" className="hover:px-3 hover:py-1 hover:bg-gray-700 hover:rounded text-xl hover:text-green-400 font-normal">Contact</Link>
            </div>
            </div>
        </nav>
    )
}

export default Nav;