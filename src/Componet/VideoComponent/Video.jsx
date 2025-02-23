import React from 'react';

const Video = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-10">
      <div className="w-full max-w-5xl p-6 bg-gray-900 rounded-2xl shadow-xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-400">
          My Introduction Video
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Get to know more about me and my journey in web development.
        </p>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border-4 border-gray-500">
          <video className="w-full h-full" controls>
            <source src="/MERN.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
