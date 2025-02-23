import React, { useState, useEffect } from 'react';
import Button from '../../../Componet/Button/Button';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Explore = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target = 50;
    const increment = 1;
    const duration = 2000;
    const intervalTime = duration / target;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < target) {
          return prev + increment;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on very small screens for better UX
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
    <section className="Explore py-16 bg-gray-600">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center px-4">
        {/* Text Section */}
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-yellow-200 text-4xl md:text-6xl">{counter}+</span> Beautiful Websites
          </h2>
          <p className="text-sm md:text-lg mb-6">
            Our designers have crafted stunning website prototypes to inspire you.
          </p>
          <Button buttonTitle="Explore More" path="/shop" />
        </div>

        {/* Slider Section */}
        <div className="w-full lg:w-2/3">
          <Slider {...settings}>
            {slides.map((src, index) => (
              <div key={index} className="px-2">
                <img
                  src={src}
                  className="w-full h-48 md:h-64 lg:h-96 xl:h-[500px] object-cover rounded-lg"
                  alt={`Website ${index + 1}`}
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
