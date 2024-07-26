"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 z-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center">
                <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Volumize Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Volumize</span>
            </a>
            
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-4 justify-between items-center w-max m-auto lg:flex lg:w-auto lg:order-1">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
            <Link href="/team" className="block hover:text-blue-200" onClick={toggleMenu}>Team</Link>
          </nav>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
            {
                isMenuOpen ? (
                    // <X size={24} />
                    <svg 
                        className="w-6 h-6 block" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    // <Menu size={24} />
                    <svg className="w-6 h-6 block"
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                            clipRule="evenodd"
                        />
                    </svg>
                )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 justify-between items-center w-max m-auto lg:hidden">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li><Link 
                    href="/" 
                    className="block py-2 pr-4 pl-3 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700" 
                    onClick={toggleMenu}
                    >
                        Home
                    </Link></li>
                <hr />
                <li><Link 
                    href="/about" 
                    className="block py-2 pr-4 pl-3 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700" 
                    onClick={toggleMenu}
                    >
                        About
                    </Link></li>
                <hr />
                <li><Link 
                    href="/team" 
                    className="block py-2 pr-4 pl-3 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700" 
                    onClick={toggleMenu}
                    >
                        Team
                </Link></li>
                <hr />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
