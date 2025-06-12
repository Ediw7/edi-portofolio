import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// Nama import dikembalikan agar sesuai dengan nama file Anda: Portofolio.jsx
import Portofolio from './components/Portofolio'; 
import Prestasi from './components/Prestasi';
import Pengalaman from './components/Pengalaman';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gray-900">
      <Navbar /> 
      <main>
        <Home />
        <About />
        {/* Nama komponen yang digunakan di JSX juga disesuaikan */}
        <Portofolio />
        <Prestasi />
        <Pengalaman />
      </main>
      <Footer />
    </div>
  );
};

export default App;