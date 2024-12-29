
import { Link } from 'react-router-dom';

const Banner = () => {

    

  return (
    <>
      <div className="relative bg-blue-950  from-blue-900 to-purple-700 text-white overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl text-yellow-300 lg:text-6xl  font-extrabold animate-fade-in">
              Build Stunning{' '}
              <span className="text-blue-200">Web Experiences</span>
            </h1>
            <p className="text-lg text-blue-200 lg:text-xl animate-slide-in pt-5">
              Hi, I'm a skilled React.js Front-End Developer. I craft
              responsive, elegant, and modern websites tailored to your needs.
            </p>
            <h3 className="text-3xl lg:text-6xl  font-extrabold animate-fade-in">
            Your requirement is {' '}
              <span className="text-yellow-300">our priority</span>
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
                src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=" // Replace with your image
                alt="Web Development"
                className="rounded-full shadow-lg"
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
