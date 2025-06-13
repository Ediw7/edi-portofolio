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
          Saya adalah mahasiswa S1 Teknik Komputer dengan minat dan keahlian dalam pengembangan web. Saya sangat antusias menggabungkan pengetahuan teknis dengan kreativitas untuk merancang solusi digital yang inovatif dan responsif. Selama studi, saya telah mengembangkan pemahaman mendalam tentang pengembangan aplikasi berbasis web menggunakan teknologi seperti CodeIgniter, React.js, HTML, CSS, dan JavaScript. Saya juga memiliki pengalaman dalam menggunakan Figma untuk merancang antarmuka pengguna yang menarik dan intuitif. Saat ini, saya juga sedang mengembangkan teknologi blockchain menggunakan Hyperledger Fabric dan Node.js, sebagai bagian dari upaya saya untuk memperluas wawasan dan mengaplikasikan teknologi terkini dalam pengembangan sistem terdistribusi yang aman dan transparan.
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
              <h3 className="text-xl font-bold text-purple-400 mb-2">React.js</h3>
              <p className="text-base text-gray-400">Frontend Development</p>
            </div>

            
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 sm:col-span-2 md:col-span-1"
            >
              <h3 className="text-xl font-bold text-pink-400 mb-2">Codeigniter4, Node JS</h3>
              <p className="text-base text-gray-400">Backend Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;