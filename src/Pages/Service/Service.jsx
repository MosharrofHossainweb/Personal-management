import React from "react";

const services = [
  {
    title: "Web Designing",
    description:
      "We create visually stunning, user-friendly websites tailored to your brand identity. From wireframes to final design, we ensure a seamless experience.",
    icon: "🌐",
    details:
      "Our web designing services include UI/UX design, responsive layouts, and innovative concepts to enhance user engagement. Perfect for startups, SMEs, and large enterprises.",
  },
  {
    title: "Web Development",
    description:
      "Our development team builds scalable, secure, and performance-driven web applications that meet the latest industry standards.",
    icon: "💻",
    details:
      "We specialize in front-end, back-end, and full-stack development. Technologies include React, Node.js, and more for robust solutions.",
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your online presence with data-driven marketing strategies designed to drive traffic, engagement, and conversions.",
    icon: "📈",
    details:
      "Our digital marketing services cover SEO, SEM, social media management, and analytics to maximize your ROI and audience reach.",
  },
  {
    title: "Graphics Designing",
    description:
      "Transform your brand with creative, high-quality graphics that leave a lasting impression on your audience.",
    icon: "🎨",
    details:
      "We offer logo design, branding materials, infographics, and custom illustrations tailored to your vision and goals.",
  },
  {
    title: "Video Editing",
    description:
      "Bring your stories to life with professional video editing services that captivate and engage your viewers.",
    icon: "🎥",
    details:
      "From promotional videos to YouTube content, we provide cutting-edge editing, color grading, and motion graphics.",
  },
  {
    title: "Business IT Solutions",
    description:
      "End-to-end IT solutions tailored to optimize and grow your online business efficiently.",
    icon: "🛠️",
    details:
      "Our solutions include cloud hosting, CRM systems, e-commerce setups, and technical support for smooth operations.",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 font-poppin">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-fade-in">
          My Services
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-slide-right">
          Explore a wide range of IT and digital solutions tailored to elevate
          your business.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-secondary hover:to-gray-800"
          >
            {/* Icon */}
            <div className="flex items-center justify-center text-6xl mb-6 text-primary">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-white">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-4">
              {service.description}
            </p>
            {/* Details */}
            <p className="text-gray-300 leading-relaxed text-sm italic mb-6">
              {service.details}
            </p>
            {/* CTA Button */}
            <button className="mt-auto py-2 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
