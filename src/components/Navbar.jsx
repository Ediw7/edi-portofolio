import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full mx-auto">
        <div className="text-xl font-semibold text-white">
          <span className="text-blue-400">Edi</span> <span className="text-purple-500">Wicoro</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className={`relative text-white hover:text-purple-500 transition-all duration-300 ${activeLink === 'home' ? 'text-purple-500' : ''}`}
              onSetActive={() => handleSetActive('home')}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === 'home' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className={`relative text-white hover:text-purple-500 transition-all duration-300 ${activeLink === 'about' ? 'text-purple-500' : ''}`}
              onSetActive={() => handleSetActive('about')}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === 'about' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500} 
              className={`relative text-white hover:text-purple-500 transition-all duration-300 ${activeLink === 'portfolio' ? 'text-purple-500' : ''}`}
              onSetActive={() => handleSetActive('portfolio')}
            >
              Portfolio
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === 'portfolio' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="prestasi" 
              smooth={true} 
              duration={500} 
              className={`relative text-white hover:text-purple-500 transition-all duration-300 ${activeLink === 'prestasi' ? 'text-purple-500' : ''}`}
              onSetActive={() => handleSetActive('prestasi')}
            >
              Prestasi
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === 'prestasi' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="pengalaman" 
              smooth={true} 
              duration={500} 
              className={`relative text-white hover:text-purple-500 transition-all duration-300 ${activeLink === 'pengalaman' ? 'text-purple-500' : ''}`}
              onSetActive={() => handleSetActive('pengalaman')}
            >
              Pengalaman
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${activeLink === 'pengalaman' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
