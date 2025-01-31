// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Prestasi from './components/Prestasi';
import Pengalaman from './components/Pengalaman';
import Footer from './components/Footer';

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
