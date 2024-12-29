import React from 'react';

const Portfolio = () => {
  return (
    <section className='portfolio lg:pt-[100px] lg:pb-[100px] pt-6 pb-5'>
      <div className="container mx-auto px-4">
        <h2 className='title text-center text-5xl lg:text-4xl font-bold mb-8 text-blue-800'>
          Our Recent Developments
        </h2>
        <h3 className='detail text-center text-lg pt-5 pb-5 lg:pb-9 text-gray-500'>Share your setup with</h3>
        
        <div className="portfolio_images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/furnioShop.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">E-commerce Furnio Shop</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/furniture1.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">E-commerce website Furniture 1</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/lasvas1.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Lasvas Project</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/lasvase2.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Lasvas Project part-2</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/Login.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Login Screen</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/mobileShop.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Mobile Shop</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/procduct1.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Product Showcase</p>
            </div>
          </div>

          <div className="portfolio_item relative overflow-hidden rounded-lg shadow-lg group">
            <img className='w-full h-72 object-cover transform group-hover:scale-105 transition duration-300' src="/furnioShop.png" alt="portfolio" />
            <div className="portfolio_overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Furnio Shop Part-2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
