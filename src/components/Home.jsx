import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>
      </div>

      <div className="relative container mx-auto min-h-screen flex items-center justify-between px-6">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-left z-10"
        >
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 animate-blink">
            Edi Wicoro
          </h1>
          <p className="text-2xl text-gray-300 mb-6 animate-float">
            <span className="text-blue-400">Web Developer</span> | 
            <span className="text-purple-400"> UI/UX Designer</span> | 
            <span className="text-pink-400"> Graphic Designer</span>
          </p>
          <p className="text-xl text-gray-400 mb-6" data-aos="fade-up" data-aos-delay="200">
            Mahasiswa Teknik Komputer - Universitas Diponegoro
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              Contact Me
            </button>
            <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative"
        >
          <div className="w-80 h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <img
              src="/api/placeholder/400/400"
              alt="Your Photo"
              className="absolute inset-2 rounded-full w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;