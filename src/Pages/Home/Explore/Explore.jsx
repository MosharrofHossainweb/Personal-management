import React from 'react';
import Button from '../../../Componet/Button/Button';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    '/furnioShop.png',
    '/furniture1.png',
    '/lasvas1.png',
    '/vaccin1.png',
  ];

  return (
    <section className="Explore py-[100px] bg-blue-900 ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            50+ Beautiful Website
          </h2>
          <p className="text-base lg:text-lg mb-6">
            Our designer has crafted beautiful Website prototypes to inspire you.
          </p>
          <Button buttonTitle="Explore More" path="/shop" />
        </div>

        {/* Slider Section */}
        <div className="w-full lg:w-2/3">
          <Slider {...settings}>
            {slides.map((src, index) => (
              <div key={index} className="p-2">
                <img
                  src={src}
                  className="w-full h-[400px] object-cover rounded-lg" // Increased height
                  alt={`Room ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
