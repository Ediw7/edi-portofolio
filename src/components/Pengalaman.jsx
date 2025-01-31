import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pengalaman = () => {
    const experiences = [
      {
        id: 1,
        year: "2022 - Present",
        role: "Senior Web Developer",
        company: "Tech Company",
        description: "Lead developer for multiple high-impact web projects"
      },
      {
        id: 2,
        year: "2020 - 2022",
        role: "UI/UX Designer",
        company: "Design Studio",
        description: "Created user-centered designs for various clients"
      },
      {
        id: 3,
        year: "2018 - 2020",
        role: "Frontend Developer",
        company: "Startup",
        description: "Developed responsive web applications"
      }
    ];

    return (
      <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
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
            Pengalaman
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 200}`}
                className="relative pl-8 mb-12 group"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-700 group-hover:bg-purple-500 transition-colors duration-300"></div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-sm text-purple-400 font-semibold">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                  <p className="text-gray-400 mt-1">{exp.company}</p>
                  <p className="text-gray-300 mt-4">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Pengalaman;
