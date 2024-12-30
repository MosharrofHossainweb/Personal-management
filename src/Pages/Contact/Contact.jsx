import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 lg:px-12 font-poppin">
        {/* Header Section */}
        <div className="container mx-auto text-center lg:text-left mb-12">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-fade-in">
            Contact <span className="text-yellow-300">Mosharrof Hossain</span>
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl mb-6 animate-slide-in">
            I am a React.js Front-End Developer offering professional web
            development services. Feel free to reach out for collaboration,
            inquiries, or your next big project!
          </p>
          <div className="space-y-4 lg:space-y-0 lg:space-x-8 lg:flex lg:items-center">
            <p>
              Email:{" "}
              <a
                href="mailto:moshorrofhossainpdl@gmail.com"
                className="text-yellow-300 underline hover:text-yellow-400 transition"
              >
                moshorrofhossainpdl@gmail.com
              </a>
            </p>
            <p className="flex gap-3">
              Phone:{" "}
              <a
                href="tel:+8801617555633"
                className="text-yellow-300 underline flex items-center git init gap-1 hover:text-yellow-400 transition"
              >
               <FaWhatsapp className="text-xl " /> +8801617-555633
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-4 mb-12 animate-slide-right">
          <Link
            to="https://www.facebook.com/profile.php?id=61560045834118"
            className="px-2 py-2  rounded-full "
            target="_blank"
          >
           <FaFacebook className="text-5xl rounded-full hover:bg-blue-800 transition" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mosharrof-hossain-927759199"
            className="px-2 py-2  rounded-full"
            target="_blank"
          >
            <IoLogoLinkedin className="text-5xl  hover:bg-blue-800 transition" />
          </Link>
          <Link
            to="https://github.com/MosharrofHossainweb"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-900 transition"
            target="_blank"
          >
           <FaGithub className="text-5xl rounded-full hover:bg-blue-800 transition" />
          </Link>
          <Link
            to="https://mosharrofhossainweb.github.io/HTML-Porfolio/"
            className="px-4 py-2  text-blue-50 text-3xl rounded-full flex items-center"
            target="_blank"
          >
           <TbWorld className="text-5xl rounded-full hover:bg-blue-800 transition" /> Portfolio
          </Link>
        </div>

        {/* Contact Form */}
        <div className="container mx-auto max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Send a Message
          </h2>
          <form>
            <div className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 py-2 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
