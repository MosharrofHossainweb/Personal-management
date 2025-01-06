import React from 'react';
import { Link } from 'react-router-dom';

const Navber2 = () => {
  return (
    <>
      <div className="min-h-screen w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col py-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Messaging App</h2>
        <nav className="flex-1 space-y-4">
          <Link
            to="/friendrequest"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Friends
          </Link>
          <Link
            to="/messages"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Messages
          </Link>
          <Link
            to="/friend-requests"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Friend Requests
          </Link>
          <Link
            to="/sent-requests"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sent Requests
          </Link>
          <Link
            to="/blocked"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Blocked
          </Link>
        </nav>
        <div className="mt-6 px-4">
          <button className="w-full bg-red-600 text-white py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navber2;
