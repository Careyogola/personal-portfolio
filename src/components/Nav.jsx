import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Mock Link component for demonstration
    const Link = ({ to, children, onClick, className }) => (
        <a href={to} onClick={onClick} className={className}>
            {children}
        </a>
    );

    return (
        <nav className="dark:bg-gray-950 bg-white text-gray-400 w-full relative z-50">
            <div className="py-4 sm:py-7 px-4 sm:px-8 lg:px-40 items-center flex flex-row justify-between">
                <div className="text-xl sm:text-2xl font-medium">
                    <Link to="/" onClick={closeMenu}>
                        <h3 className="text-gray-400">
                            Carey<span className="text-gray-400">.com</span>
                        </h3>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200 p-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop menu - always visible on lg+ screens */}
                <div className="hidden lg:flex flex-row gap-6 items-center">
                    <Link to='/' className="group text-gray-400 hover:text-gray-200 transition duration-300">
                        Home.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                    <Link to='/about' className="group text-gray-400 hover:text-gray-200 transition duration-300">
                        Get to know me.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                    <Link to='/projects' className="group text-gray-400 hover:text-gray-200 transition duration-300">
                        Have a peep.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                    <Link to='/contact' className="group text-gray-400 hover:text-gray-200 transition duration-300">
                        Let's get in touch.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                </div>
            </div>

            {/* Mobile menu - slides down from top */}
            <div className={`lg:hidden absolute top-full left-0 w-full dark:bg-gray-950 bg-white shadow-lg border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
                menuOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
            }`}>
                <div className="flex flex-col py-4 px-4">
                    <Link 
                        to='/' 
                        className="group text-gray-400 hover:text-gray-200 transition duration-300 py-3 px-2 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                        onClick={closeMenu}
                    >
                        Home.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500 mt-1"></span>
                    </Link>
                    <Link 
                        to='/about' 
                        className="group text-gray-400 hover:text-gray-200 transition duration-300 py-3 px-2 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                        onClick={closeMenu}
                    >
                        Get to know me.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500 mt-1"></span>
                    </Link>
                    <Link 
                        to='/projects' 
                        className="group text-gray-400 hover:text-gray-200 transition duration-300 py-3 px-2 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                        onClick={closeMenu}
                    >
                        Have a peep.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500 mt-1"></span>
                    </Link>
                    <Link 
                        to='/contact' 
                        className="group text-gray-400 hover:text-gray-200 transition duration-300 py-3 px-2 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                        onClick={closeMenu}
                    >
                        Let's get in touch.
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500 mt-1"></span>
                    </Link>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {menuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
                    onClick={closeMenu}
                ></div>
            )}
        </nav>
    );
};

export default Nav;