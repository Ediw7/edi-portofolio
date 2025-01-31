import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prestasi = () => {
  const achievements = [
    {
      id: 1,
      title: "Finalist Web Design",
      year: "2025",
      description: "Lomba Techomfest 2025 di POLINES"
    },
    {
      id: 2,
      title: "Finalist Web Design",
      year: "2024",
      description: "Lomba Techomfest 2024 di POLINES"
    },
    {
      id: 3,
      title: "Pendanaan PPK ORMAWA",
      year: "2024",
      description: "Pengabdian ke Desa Branjang"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-16"
        >
          Prestasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
              className="group"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">
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
