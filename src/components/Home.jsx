import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
    
        AOS.refresh();
      }, []);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>
      </div>

      <div className="relative container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 md:py-0">
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-center md:text-left z-10 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
            Edi Wicoro
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-float">
            <span className="text-blue-400">Web Developer</span> | 
            <span className="text-purple-400"> UI/UX Designer</span> | 
            <span className="text-pink-400"> Graphic Designer</span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-6 animate-typing" data-aos="fade-up" data-aos-delay="200">
            Mahasiswa Teknik Komputer - Universitas Diponegoro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
                href="https://wa.me/6282325720215"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-center"
            >
                Kontak Saya
            </a>

            <a
                href="https://drive.google.com/drive/u/0/folders/17-CuYQHDdHo6lf9ZjQv8CMtEcvTVXorT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-center"
            >
                Lihat CV
            </a>
          </div>
        </div>

        {/* Right Section: Foto dengan animasi fade-right */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative w-60 h-60 md:w-80 md:h-80 mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <img
              src="./images/edi.png"
              alt="Your Photo"
              className="absolute inset-0 rounded-full w-full h-full object-cover border-4 border-white/10"
          />
        </div>
      </div>

      {/* Custom CSS untuk animasi */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          .animate-blink {
            animation: blink 2s infinite;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3s steps(40, end) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Home;