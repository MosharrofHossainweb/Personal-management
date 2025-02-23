import React, { useState, useEffect } from 'react';
import Button from '../../../Componet/Button/Button';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Explore = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target = 50; // Final number for the counter
    const increment = 1; // Increment value
    const duration = 2000; // Total duration of the animation in milliseconds
    const intervalTime = duration / target;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < target) {
          return prev + increment;
        } else {
          clearInterval(interval); // Stop the counter once it reaches the target
          return target;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
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
    ],
  };

  const slides = [
    '/furnioShop.png',
    '/furniture1.png',
    '/lasvas1.png',
    '/vaccin1.png',
  ];

  return (
    <section className="Explore py-[100px] bg-gray-600 lg:min-h-[90vh]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl  font-bold mb-4">
           <span className='text-yellow-200 text-5xl'>{counter}+</span>  Beautiful Website
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
              <div key={index} className="p-2 ">
                <img
                  src={src}
                  className="w-full h-[700px] object-cover rounded-lg"
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
