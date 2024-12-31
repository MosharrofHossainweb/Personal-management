import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 font-poppin">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-fade-in">
          About Us
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-slide-right">
          We are a dynamic team of professionals dedicated to providing
          top-notch IT solutions to help businesses thrive in the digital era.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="animate-slide-in">
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="rounded-lg shadow-lg hover:shadow-2xl transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 animate-slide-right">
          <h2 className="text-3xl font-bold text-white">
            Who We Are
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At our agency, we specialize in delivering tailored solutions that
            cater to the unique needs of businesses across various industries.
            With years of experience, our team is committed to excellence,
            innovation, and customer satisfaction.
          </p>
          <p className="text-gray-400 leading-relaxed pb-9">
            Our services range from web designing and development to digital
            marketing, graphics designing, video editing, and IT business
            solutions. We strive to empower businesses to achieve their goals
            through cutting-edge technology and creative strategies.
          </p>
          
          <Link to='/contact' className="py-3 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
