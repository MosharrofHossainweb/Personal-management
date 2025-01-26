import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 font-poppin">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-14">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
          About Me
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-slide-right">
          Hi, I'm <span className="font-bold text-primary">Mosharrof Hossain</span>, 
          a passionate Front-End Web Developer specializing in creating responsive, interactive, and visually appealing web applications.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="animate-slide-in">
          <img
            src="/minSharp.png1 - Copy.png"
            alt="Mosharrof Hossain"
            className="rounded-lg shadow-lg hover:shadow-2xl transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 animate-slide-right">
          <h2 className="text-3xl font-bold text-white">Who I Am</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a highly motivated Front-End Web Developer with a strong focus on modern web technologies like 
            <span className="font-bold text-blue-400"> React.js</span>, 
            <span className="font-bold text-blue-400"> Tailwind CSS</span>, and 
            <span className="font-bold text-blue-400"> JavaScript</span>. 
            My mission is to turn ideas into exceptional digital experiences.
          </p>
          <p className="text-gray-400 leading-relaxed pb-9">
            From building e-commerce platforms to crafting seamless user interfaces, I thrive on delivering innovative solutions 
            that not only meet but exceed client expectations. I believe in lifelong learning and staying updated with the latest trends in technology.
          </p>
          
          <Link 
            to="/porfoliopage" 
            className="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-purple-500 transition">
            View My Projects
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto text-center mt-16">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"].map((skill, index) => (
            <div
              key={index}
              className="py-3 px-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-sm font-semibold text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Let's Build Something Great Together!
        </h2>
        <p className="text-gray-300 mb-8">
          I'm always excited to collaborate on innovative projects. Whether you need a modern website or a complete front-end solution, 
          I'm here to help.
        </p>
        <Link 
          to="/contact" 
          className="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-purple-500 transition">
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
