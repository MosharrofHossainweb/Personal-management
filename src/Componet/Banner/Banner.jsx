import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "a Full Stack Developer with MERN.",
  "an Expert Front-End Developer with React.",
  "a Passionate Back-End Developer.",
];

const typingSpeed = 150; // Slower typing speed
const deletingSpeed = 100; // Slower deleting speed
const pauseTime = 1500; // Pause before deleting starts

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = phrases[index];

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText((prev) => prev + currentText[displayedText.length]);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [displayedText, isDeleting, index]);

  return (
    <motion.div
      className="relative bg-gray-800 text-white min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16">
        {/* Text Section */}
        <div className="w-full lg:w-1/1 text-center lg:text-left space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl text-yellow-300 font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Build Stunning <span className="text-white">Web Experiences</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl pt-5 mb-5 flex justify-center lg:justify-start items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Hi, I'm Mosharrof Hossain
            <motion.span
              className="text-yellow-300 ml-2 text-3xl inline-block"
              key={displayedText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayedText}
            </motion.span>
          </motion.p>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
            Your requirement is <span className="text-yellow-300">my main priority</span>
          </h3>

          <div className="flex justify-center lg:justify-start gap-4 mt-10 pt-6">
            <Link
              to="/service"
              className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-white transition transform hover:-translate-y-1"
            >
              Our Service
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition transform hover:-translate-y-1"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute bg-gradient-to-r from-yellow-300 to-pink-500 w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>

          <div className="relative z-10">
            <motion.img
              src="/minSharp.png1 - Copy.png"
              alt="Web Development"
              className="rounded-full shadow-lg w-64 md:w-96 lg:w-[500px] lg:h-[630px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
