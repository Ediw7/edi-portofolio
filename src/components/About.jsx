import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
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
     
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-10 left-10 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse md:w-96 md:h-96 md:top-20 md:left-20"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse md:w-96 md:h-96 md:bottom-20 md:right-20"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>
      </div>

     
      <div className="relative container mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-20 md:px-6 md:py-0">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-3xl text-center"
        >
          
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 md:text-4xl md:mb-8">
            About Me
          </h2>
          
         
          <p className="text-lg text-gray-300 leading-relaxed md:text-xl">
            Saya adalah mahasiswa S1 Teknik Komputer di Universitas Diponegoro yang memiliki minat besar dalam pengembangan web dan UI/UX design. Sejak awal perkuliahan, saya aktif mengembangkan keterampilan di bidang web development dengan fokus pada teknologi frontend dan backend. Selain itu, saya telah mengikuti beberapa program magang yang memberikan pengalaman berharga dalam membangun aplikasi web yang responsif dan interaktif. Saya selalu tertarik untuk mengeksplorasi teknologi baru dan menciptakan solusi digital yang inovatif.
          </p>

         
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {/* Kartu Skill 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">HTML & CSS</h3>
              <p className="text-base text-gray-400">Fundamental Web Development</p>
            </div>

            {/* Kartu Skill 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">React.js & JavaScript</h3>
              <p className="text-base text-gray-400">Frontend Development</p>
            </div>

            
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 sm:col-span-2 md:col-span-1"
            >
              <h3 className="text-xl font-bold text-pink-400 mb-2">Codeigniter4 & PHP</h3>
              <p className="text-base text-gray-400">Backend Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;