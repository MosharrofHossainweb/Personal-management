import React from "react";
import { FiSearch, FiRepeat, FiXCircle } from "react-icons/fi";

const SendReq = () => {
  const sentRequests = [
    { id: 1, name: "John Doe", location: "New York, USA" },
    { id: 2, name: "Jane Smith", location: "Los Angeles, USA" },
    { id: 3, name: "Michael Johnson", location: "Chicago, USA" },
    { id: 4, name: "Emily Davis", location: "San Francisco, USA" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 lg:w-full">
      {/* Header */}
      <header className="bg-indigo-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Sent Friend Requests</h1>
        <div className="relative w-full max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search requests..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-indigo-500 text-white placeholder-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </header>

      {/* Friend Request List */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sentRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            >
              {/* Profile Picture */}
              <img
                src="https://via.placeholder.com/80"
                alt={`${request.name}'s Avatar`}
                className="w-16 h-16 rounded-full border-2 border-indigo-500"
              />

              {/* Friend Info */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {request.name}
                </h3>
                <p className="text-sm text-gray-500">{request.location}</p>
              </div>

              {/* Actions */}
              <div className="space-x-2">
                <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 shadow-md">
                  <FiRepeat />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md">
                  <FiXCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendReq;
