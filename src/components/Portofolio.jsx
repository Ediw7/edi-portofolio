import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedItems, setDisplayedItems] = useState([]);

  const portfolioItems = {
    web: [
      { id: 1, title: 'Taniku', description: 'Website platform digital untuk petani dan dinas.', image: '/images/taniku.jpg', link: 'https://taniku.vercel.app/' },
        { id: 2, title: 'RiverClean', description: 'Website untuk kampanye dan edukasi pelestarian sungai.', image: '/images/river.jpg', link: 'https://river-clean.vercel.app/' },
        { id: 3, title: 'IMADIBA', description: 'Website profil untuk organisasi daerah IMADIBA Batang.', image: '/images/imadiba.png', link: 'https://imadiba.vercel.app' },
        { id: 4, title: 'BIOFUN', description: 'Platform e-learning interaktif untuk pembelajaran biologi.', image: '/images/biofun.png', link: 'https://biofun.vercel.app' },
        { id: 5, title: 'KAMPUNG KREATIF', description: 'Website promosi dan informasi untuk desa wisata.', image: '/images/kampungKreatif.jpg', link: 'https://kampungkreatif.netlify.app/' },
        { id: 6, title: 'PORTOFOLIO', description: 'Website portofolio pribadi untuk menampilkan karya.', image: '/images/porto.png', link: 'https://edi-portofolio.vercel.app/' },
    ],
    uiux: [
        { id: 6, title: 'NUTRICHECK', description: 'Desain aplikasi mobile untuk menghitung gizi makanan.', image: '/images/nutricheck.png', prototypeLink: 'https://www.figma.com/proto/zf40ATQFb3QpgmsTfjjrmZ/nutricheck?node-id=3-2' },
        { id: 7, title: 'LINGKARBUMI', description: 'Desain aplikasi mobile untuk gerakan pelestarian lingkungan.', image: '/images/lingkarbumi.png', prototypeLink: 'https://www.figma.com/proto/TMeZqzzzr1tMKAV7U2R7P7/lingkarbumi?node-id=410-2' },
        { id: 8, title: 'SUCOFINDO', description: 'Desain ulang website untuk monitoring dokumen TOR.', image: '/images/sucofindo.png', prototypeLink: 'https://www.figma.com/proto/ybrOUciGZ3a9X33oOckBXT/Untitled?node-id=202-31' },
    ],
    design: [
        { id: 9, title: 'Graphic Design Collection', description: 'Kumpulan karya desain grafis untuk berbagai kebutuhan.', image: '/images/desain.png', portfolioLink: 'https://drive.google.com/drive/u/0/folders/1JHZZNEJrOH3Xh2Yj8n_lJTIIjJ2m4D9t' },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
    setDisplayedItems(portfolioItems[selectedCategory]);
  }, []);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setDisplayedItems(portfolioItems[category]);
      setIsLoading(false);
    }, 400);
  };
  
  return (
    <section id="portfolio" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative container mx-auto py-20 px-4 md:px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 md:mb-12"
        >
          My Portfolio
        </h2>

        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8 md:mb-12" data-aos="fade-up">
          {['web', 'uiux', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          {displayedItems.map((item, index) => {
            const link = item.link || item.prototypeLink || item.portfolioLink;
            const buttonText = item.link ? 'View Website' : item.prototypeLink ? 'View Prototype' : 'View Portfolio';

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-600/20"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{item.description}</p>
                  {link && (
                     <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
                      >
                        {buttonText}
                      </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;