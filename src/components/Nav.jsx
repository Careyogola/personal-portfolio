import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

const Nav =() =>{
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className="bg-purple-300 text-white h-20">
            <div className="p-4 items-center flex flex-row justify-between">
            <div className="text-2xl font-medium">
                <h3 className="text-purple-100">Carey<span className="text-purple-100">.com</span></h3>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-purple-100">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <div className={`${ 
                menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row gap-4 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-purple-300 lg:bg-transparent p-4 lg:p-0`}>
            <a className="hover:text-white active:text-gray-700" href="/">Home</a>
            <a className="hover:text-white" href="/About">About</a>
            <a className="hover:text-white" href="/Projects">Projects</a>
            <a className="hover:text-white" href="/Contact">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Nav;