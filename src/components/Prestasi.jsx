import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prestasi = () => {
  const achievements = [
    {
      id: 1,
      title: "Finalist Web Development",
      year: "2025",
      description: "Berkompetisi di babak final dalam kategori Web Development pada acara SILOGY EXPO 2025 yang diselenggarakan oleh UNSIKA."
    },
    {
      id: 1,
      title: "Finalist Web Design",
      year: "2025",
      description: "Berkompetisi di babak final dalam kategori Web Design pada acara Technofest 2025 yang diselenggarakan oleh POLINES."
    },
    {
      id: 2,
      title: "Finalist Web Design",
      year: "2024",
      description: "Mencapai tahap final pada kompetisi Web Design di ajang Technofest 2024 yang diadakan oleh POLINES."
    },
    {
      id: 3,
      title: "Penerima Pendanaan PPK Ormawa",
      year: "2024",
      description: "Memimpin tim untuk mendapatkan pendanaan Program Penguatan Kapasitas Organisasi Kemahasiswaan untuk pengabdian masyarakat di Desa Branjang."
    }
  ];

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
     });
  }, []);

  return (
    <section id="prestasi" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-24">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute top-10 md:top-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          data-aos="fade-up"
        ></div>
        <div
          className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="300"
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 md:mb-16"
        >
          Prestasi & Pencapaian
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              className="group h-full"
            >
              <div className="flex flex-col p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-purple-500/80 transition-all duration-300 h-full text-center items-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-300">
                  <span className="text-2xl font-bold text-purple-400">{achievement.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-base">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestasi;