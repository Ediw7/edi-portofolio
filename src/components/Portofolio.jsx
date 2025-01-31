import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [isLoading, setIsLoading] = useState(false);

  const portfolioItems = {
    web: [
      {
        id: 1,
        title: 'IMADIBA',
        description: 'Website organisasi daerah',
        image: '/images/imadiba.png',
        link: 'https://imadiba.vercel.app',
      },
      {
        id: 2,
        title: 'BIOFUN',
        description: 'Website belajar biologi',
        image: '/images/biofun.png',
        link: 'https://biofun.vercel.app',
      },
      {
        id: 3,
        title: 'PORTOFOLIO',
        description: 'Social media dashboard',
        image: '/images/portfolio.jpg',
        link: 'https://portfolio.vercel.app',
      },
    ],
    uiux: [
      {
        id: 4,
        title: 'NUTRICHECK',
        description: 'Aplikasi menghitung gizi makanan',
        image: '/images/nutricheck.png',
        prototypeLink: 'https://www.figma.com/proto/some-link',
      },
      {
        id: 5,
        title: 'LINGKARBUMI',
        description: 'Aplikasi',
        image: '/images/lingkarbumi.png',
        prototypeLink: 'https://www.figma.com/proto/some-link',
      },
      {
        id: 6,
        title: 'SUCOFINDO',
        description: 'Website',
        image: '/images/sucofindo.png',
        prototypeLink: 'https://www.figma.com/proto/some-link',
      },
    ],
    design: [
      {
        id: 7,
        title: 'Design Project 1',
        description: 'Brand identity',
        image: '/images/design1.jpg',
        link: 'https://www.behance.net/some-link',
      },
      {
        id: 8,
        title: 'Design Project 2',
        description: 'Marketing materials',
        image: '/images/design2.jpg',
        link: 'https://www.behance.net/some-link',
      },
      {
        id: 9,
        title: 'Design Project 3',
        description: 'Social media kit',
        image: '/images/design3.jpg',
        link: 'https://www.behance.net/some-link',
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/0 to-transparent"></div>
      </div>

      <div className="relative container mx-auto py-20 px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12"
        >
          My Portfolio
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {['web', 'uiux', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}
              `}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems[selectedCategory].map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={`${item.id * 100}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1"
            >
              <div className="relative p-6 bg-gray-900/90 rounded-lg">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
                    <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm hover:opacity-90 transition-opacity"
                    >
                      View Website
                    </a>
                  ) : item.prototypeLink ? (
                    <a
                      href={item.prototypeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm hover:opacity-90 transition-opacity"
                    >
                      View Prototype
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;