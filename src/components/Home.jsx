import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, // Animasi muncul setiap kali elemen masuk viewport
          mirror: true, // Animasi muncul saat scrolling naik & turun
        });
    
        AOS.refresh(); // Refresh AOS setiap kali halaman diperbarui
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
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-left z-10"
        >
          {/* Nama dengan animasi berkedip dan glow */}
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 ">
            Edi Wicoro
          </h1>

          {/* Profesi dengan animasi bergerak */}
          <p className="text-2xl text-gray-300 mb-6 animate-float">
            <span className="text-blue-400">Web Developer</span> | 
            <span className="text-purple-400"> UI/UX Designer</span> | 
            <span className="text-pink-400"> Graphic Designer</span>
          </p>

          {/* Informasi tambahan dengan animasi mengetik */}
          <p className="text-xl text-gray-400 mb-6 animate-typing" data-aos="fade-up" data-aos-delay="200">
            Mahasiswa Teknik Komputer - Universitas Diponegoro
          </p>

          {/* Tombol dengan animasi hover */}
            <div className="flex gap-4">
            {/* Tombol WhatsApp */}
            <a
                href="https://wa.me/6282325720215"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
                Contact Me
            </a>

            {/* Tombol View Portfolio */}
            <a
                href="https://drive.google.com/your-portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
                View Portfolio
            </a>
            </div>

        </div>

        {/* Right Section: Foto dengan animasi fade-right */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative"
        >
          <div className="w-80 h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <img
              src="./images/edi.png"
              alt="Your Photo"
              className="absolute inset-2 rounded-full w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover border-4 border-white/10"
            />
          </div>
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