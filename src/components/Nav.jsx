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
                <h3 className="text-gray-400">Carey<span className="text-gray-400">.com</span></h3>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-gray-200">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <div className={`${ 
                menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row gap-4 items-center absolute lg:static top-16 left-0 w-full lg:w-auto dark:bg-gray-950lg:bg-transparent p-4 lg:p-0`}>
            <Link to="/" className="px-3 py-1 bg-gray-700 rounded-md text-sm">Home</Link>
            <Link to="/About" className="px-3 py-1 bg-gray-700 rounded-md text-sm">About</Link>
            <Link to="/Projects" className="px-3 py-1 bg-gray-700 rounded-md text-sm">Projects</Link>
            <Link to="/Contact" className="px-3 py-1 bg-gray-700 rounded-md text-sm">Contact</Link>
            
{/*             
            <a className="hover:text-green-500 active:text-gray-700" href="/">Home</a>
            <a className="hover:text-green-500 " href="/About">About</a>
            <a className="hover:text-green-500" href="/Projects">Projects</a>
            <a className="hover:text-green-500" href="/Contact">Contact</a> */}
            </div>
            </div>
        </nav>
    )
}

export default Nav;