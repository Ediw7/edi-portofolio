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
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
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

      <div className="relative container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 py-20 md:py-0">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full text-center md:text-left z-10 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
            Edi Wicoro
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-float">
            <span className="text-blue-400">Web Developer</span> | 
            <span className="text-purple-400"> UI/UX Designer</span> | 
            <span className="text-pink-400"> Graphic Designer</span>
          </p>
          
          <p className="w-full text-lg md:text-xl text-gray-400 mb-8 animate-typing" data-aos="fade-up" data-aos-delay="200">
            Mahasiswa Teknik Komputer - Universitas Diponegoro
          </p>

          <div className="max-w-xs mx-auto sm:max-w-none sm:mx-0 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* PERUBAHAN KUNCI: Membuat lebar tombol responsif */}
            <a
                href="https://wa.me/6282325720215"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-center"
            >
                Kontak Saya
            </a>
            
            <a
                href="https://drive.google.com/drive/u/0/folders/17-CuYQHDdHo6lf9ZjQv8CMtEcvTVXorT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-center"
            >
                Lihat CV
            </a>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative w-60 h-60 md:w-80 md:h-80 mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <img
            src="./images/edi.png"
            alt="Foto Edi Wicoro"
            className="absolute inset-0 rounded-full w-full h-full object-cover border-4 border-white/10"
          />
        </div>
      </div>

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

          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3s steps(40, end);
            margin-left: auto;
            margin-right: auto;
          }

          @media (min-width: 768px) { /* md breakpoint */
            .animate-typing {
              margin-left: 0;
              margin-right: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;