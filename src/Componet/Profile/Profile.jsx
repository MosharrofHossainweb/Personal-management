import React from 'react';
import Navber2 from '../Navber/Navber2';
// import Navber2 from '../Navber/Navber2';

const Profile = () => {
  return (
    <>
    <Navber2/>

  
    <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
        <div className=" max-w-lg bg-white rounded-lg shadow-2xl p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">johndoe@example.com</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Phone:</span>
              <span className="text-gray-800">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Location:</span>
              <span className="text-gray-800">New York, USA</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-105">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    
      
    </>
  );
};

export default Profile;