import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          Get in Touch with <span className="text-yellow-300">Mosharrof Hossain</span>
        </h1>
        <p className="text-lg lg:text-xl mb-4 animate-slide-in">
          I am a React.js Front-End Developer offering professional web development services. Contact me for your next project!
        </p>
        <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:items-center lg:justify-start">
          <p>Email: <a href="mailto:moshorrofhossainpdl@gmail.com" className="text-yellow-300 underline">moshorrofhossainpdl@gmail.com</a></p>
          <p>Phone: <a href="tel:+8801617555633" className="text-yellow-300 underline">+8801617-555633</a></p>
        </div>
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <Link
            to="https://facebook.com"
            className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            to="https://linkedin.com"
            className="px-4 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            to="https://github.com"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-900 transition"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            to="https://portfolio.com"
            className="px-4 py-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition"
            target="_blank"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact