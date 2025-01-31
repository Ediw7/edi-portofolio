import React from 'react';
import { Link } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Prestasi from './components/Prestasi';
import Pengalaman from './components/Pengalaman';
import Footer from './components/Footer';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full mx-auto">
        <div className="text-xl font-semibold text-blue-400">Edi Porto</div>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="relative text-white hover:text-purple-500 transition-all duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="relative text-white hover:text-purple-500 transition-all duration-300"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500} 
              className="relative text-white hover:text-purple-500 transition-all duration-300"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="prestasi" 
              smooth={true} 
              duration={500} 
              className="relative text-white hover:text-purple-500 transition-all duration-300"
            >
              Prestasi
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="pengalaman" 
              smooth={true} 
              duration={500} 
              className="relative text-white hover:text-purple-500 transition-all duration-300"
            >
              Pengalaman
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#242424] text-white">
      <Navbar />
      <div className="w-full">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portofolio />
        </section>
        <section id="prestasi">
          <Prestasi />
        </section>
        <section id="pengalaman">
          <Pengalaman />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;