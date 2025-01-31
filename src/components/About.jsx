import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    return (
      <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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

        <div className="relative container mx-auto min-h-screen flex flex-col items-center justify-center px-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
              About Me
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Saya adalah seorang Web Developer dan UI/UX Designer dengan pengalaman lebih dari 5 tahun. 
              Saya memiliki passion dalam menciptakan aplikasi web yang indah dan fungsional.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-2">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-pink-400 mb-2">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;
