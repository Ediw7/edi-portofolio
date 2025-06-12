import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pengalaman = () => {
  // Inisialisasi AOS di dalam useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  const experiences = [
    {
      id: 1,
      year: "2024",
      role: "Web Developer",
      company: "PT SUCOFINDO - Cabang Utama Semarang",
      description: "Merancang dan membangun sistem informasi berbasis web untuk monitoring dan manajemen dokumen Terms of Reference (TOR) secara efisien."
    },
    {
      id: 2,
      year: "2023 - 2024",
      role: "Graphic Designer",
      company: "Higenncy",
      description: "Membuat berbagai aset visual dan desain grafis untuk konten yang dipublikasikan di platform media sosial LinkedIn milik Higenncy."
    },
    {
      id: 3,
      year: "2023",
      role: "IoT Engineer (Projek)",
      company: "Dinas Kesehatan Kota Semarang",
      description: "Berkontribusi dalam tim untuk membuat robot yang dirancang untuk membantu tugas-tugas operasional di lingkungan Dinas Kesehatan Kota Semarang."
    },
    {
      id: 4,
      year: "2023",
      role: "Graphic Designer (Projek)",
      company: "Kementerian Keuangan RI",
      description: "Mendesain template dan konten visual untuk kampanye email marketing yang ditujukan kepada audiens internal Kementerian Keuangan."
    }
  ];

  return (
    <section id="pengalaman" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-24">
      {/* Efek latar belakang dibuat lebih kecil di mobile */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
        ></div>
        <div
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="300"
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Judul dibuat lebih kecil di mobile (text-3xl) */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 md:mb-16"
        >
          Pengalaman Profesional
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Garis vertikal di tengah timeline */}
          <div className="absolute left-3 md:left-4 top-2 w-0.5 h-full bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              // Jarak antar item diatur untuk mobile dan desktop
              className="relative pl-10 md:pl-12 mb-8"
            >
              {/* Titik pada timeline */}
              <div className="absolute left-0 top-2.5 w-6 h-6 bg-gray-800 rounded-full border-2 border-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>

              {/* Konten Card */}
              <div className="p-4 md:p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-purple-500/80 transition-all duration-300">
                <span className="text-sm font-semibold text-purple-400">{exp.year}</span>
                {/* Ukuran font role dibuat responsif */}
                <h3 className="text-lg md:text-xl font-bold text-white mt-1">{exp.role}</h3>
                <p className="text-base text-gray-400 mt-1">{exp.company}</p>
                <p className="text-base text-gray-300 mt-3">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;