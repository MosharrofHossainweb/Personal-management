import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-yellow-400 text-3xl font-bold tracking-wide">
            <Link className="text-5xl" to="/">
              M<span className="text-white text-3xl">Dev</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6 items-center text-gray-300">
            <Link to="/" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                Home
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="/service" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                Service
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                About
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                Contact
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="/porfoliopage" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                Gallery
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="/shop" className="relative group">
              <span className="hover:text-yellow-400 transition duration-300">
                Shop
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 bg-gray-800 text-yellow-100 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              Login
            </Link>

            <button
              onClick={() => navigate('/register')}
              className="px-4 py-2 bg-slate-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 hover:shadow-lg transition duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/layouttwo')}
              className="px-4 py-2 bg-slate-200 text-gray-900 rounded-full flex items-center gap-2 font-semibold hover:bg-yellow-300 hover:shadow-lg transition duration-300"
            >
             <FaUserTie /> Profile
            </button>
          </div>

          {/* Hamburger Menu */}
          <div
            className="md:hidden text-gray-300 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <Link
              to="/service"
              className="block py-3 px-4 text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              Service
            </Link>
            <Link
              to="/porfoliopage"
              className="block py-3 px-4 text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              Gelary
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="block py-3 px-4 text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/login"
              className="block py-3 px-4 text-yellow-400 mb-2 mt-2 bg-gray-500 hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block py-3 px-4 text-center bg-blue-100 text-gray-900 font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/register"
              className="block py-3 px-4 text-center bg-blue-100 text-gray-900 font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/layouttwo"
              className="block py-3 px-4 text-center bg-blue-100 text-gray-900 font-semibold hover:bg-blue-700 transition duration-300"
            >
              Profile
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navber;
