
import { Link } from 'react-router-dom';

const Banner = () => {

    

  return (
    <>
      <div className="relative bg-gray-700 lg:h-[1100px] from-blue-900 to-purple-700 text-white overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl text-yellow-300 lg:text-4xl  font-extrabold animate-fade-in">
              Build Stunning{' '}
              <span className="text-white">Web Experiences</span>
            </h1>
            <p className="text-lg text-blue-300 lg:text-xl animate-slide-in pt-5">
              Hi, I'm a skilled React.js Front-End Developer. I craft
              responsive, elegant, and modern websites tailored to your needs.
            </p>
            <h3 className="text-3xl lg:text-6xl  font-extrabold animate-fade-in">
            Your requirement is {' '}
              <span className="text-yellow-300">my main priority</span>
            </h3>
            <div className="flex justify-center lg:justify-start gap-4 mt-10 pt-6">
            <Link to='/service' className='px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition transform hover:-translate-y-1'>
            Our Service
            </Link>
             <Link to='/contact' className='px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition transform hover:-translate-y-1'>
             Contact us
             </Link>
            
            </div>
          </div>

          {/* Image/Graphic Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative animate-slide-right">
            <div className="absolute bg-gradient-to-r from-yellow-300 to-pink-500 w-60 h-80 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <div className="relative z-10">
              <img
                src="/minSharp.png1 - Copy.png" // Replace with your image
                alt="Web Development"
                className="rounded-full  shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
       
      </div>
    </>
  );
};

export default Banner;
