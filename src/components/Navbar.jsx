import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'prestasi', label: 'Prestasi' },
    { to: 'pengalaman', label: 'Pengalaman' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto relative flex justify-between items-center p-4">
        <div className="text-xl font-semibold text-white">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-blue-400">Edi</span><span className="text-purple-500">Wicoro</span>
          </Link>
        </div>

        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`relative text-white hover:text-purple-500 transition-all duration-300 cursor-pointer ${activeLink === link.to ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActive(link.to)}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform transition-transform duration-300 ${activeLink === link.to ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div 
          className={`
            lg:hidden 
            fixed 
            top-16 
            left-0 
            w-full 
            bg-gray-900 
            transform 
            transition-transform 
            duration-300 
            ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}
        >
          <ul className="flex flex-col space-y-4 p-4 items-center">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full text-center">
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`
                    block 
                    w-full 
                    py-2 
                    text-white 
                    hover:text-purple-500 
                    transition-all 
                    duration-300 
                    ${activeLink === link.to ? 'text-purple-500 font-bold' : ''}
                  `}
                  onClick={() => handleSetActive(link.to)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;