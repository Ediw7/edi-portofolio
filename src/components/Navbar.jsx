import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false); // Close menu after clicking a link on mobile
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
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="relative flex justify-between items-center p-4 w-full mx-auto">
        {/* Logo */}
        <div className="text-xl font-semibold ml-4 lg:ml-10 text-white">
          <span className="text-blue-400">Edi</span> <span className="text-purple-500">Wicoro</span>
        </div>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden mr-4 p-2 hover:bg-gray-800 rounded transition-colors duration-200" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 mr-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                smooth={true} 
                duration={500} 
                className={`relative text-white hover:text-purple-500 transition-all duration-300 cursor-pointer ${activeLink === link.to ? 'text-purple-500' : ''}`}
                onSetActive={() => handleSetActive(link.to)}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === link.to ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  className={`block text-white hover:text-purple-500 transition-all duration-300 ${activeLink === link.to ? 'text-purple-500' : ''}`}
                  onSetActive={() => handleSetActive(link.to)}
                  onClick={() => setIsMenuOpen(false)}
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