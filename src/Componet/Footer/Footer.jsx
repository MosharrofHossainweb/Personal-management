import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-10 pb-8 lg:pt-[100px] lg:pb-[100px] bg-gray-900 text-gray-300 border-t-1 border-grey-100 animate-fade-in">
      <div className="container lg:pb-[50px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo Section */}
        <div className="logo text-center md:text-left">
          <div className="text-4xl flex justify-center it font-bold text-yellow-500 mb-4 animate-slide-in">
            <Link className="text-5xl" to="/">
              M<span className="text-white text-3xl">Dev</span>
            </Link>
          </div>

          <p className="detail text-sm">Your requirement is our priority.</p>
          
        </div>

        {/* Links Section */}
        <div className="link text-center md:text-left">
          <h2 className="text-xl text-blue-300 font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li className="relative group">
              <Link
                to="/"
                className="relative inline-block hover:text-yellow-400"
              >
                Home
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/shop"
                className="relative inline-block hover:text-yellow-400"
              >
                Shop
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/about"
                className="relative inline-block hover:text-yellow-400"
              >
                About
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/contact"
                className="relative inline-block hover:text-yellow-400"
              >
                Contact
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="help text-center md:text-left">
          <h2 className="text-xl text-blue-300 font-semibold mb-4">Help</h2>
          <ul className="space-y-2">
            <li className="relative group">
              <Link
                to="/help"
                className="relative inline-block hover:text-yellow-400"
              >
                Help
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/payment"
                className="relative inline-block hover:text-yellow-400"
              >
                Payment Options
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/consultancy"
                className="relative inline-block hover:text-yellow-400"
              >
                Consultancy
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/privacy"
                className="relative inline-block hover:text-yellow-400"
              >
                Privacy Policy
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter text-center md:text-left">
          <h2 className="text-xl text-blue-300 font-semibold mb-4">
            Newsletter
          </h2>
          <p className="mb-4 text-sm">Subscribe to get the latest updates.</p>
          <form className="flex flex-col md:flex-row items-center gap-2">
            <input
              className="w-full md:w-auto px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 lg:pt-[100px] border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
