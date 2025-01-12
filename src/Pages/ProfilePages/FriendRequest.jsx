import React from "react";
import { FiSearch, FiUserPlus, FiUserCheck, FiUserX } from "react-icons/fi";

const FriendRequest = () => {
  const pendingRequests = [
    { id: 1, name: "John Doe", location: "New York, USA" },
    { id: 2, name: "Jane Smith", location: "Los Angeles, USA" },
  ];

  const potentialFriends = [
    { id: 3, name: "Michael Johnson", location: "Chicago, USA" },
    { id: 4, name: "Emily Davis", location: "San Francisco, USA" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Manage Friend Requests</h1>
        <div className="relative w-full max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-500 text-white placeholder-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-10">
        {/* Pending Requests Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Pending Friend Requests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingRequests.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Profile Picture */}
                <img
                  src="https://via.placeholder.com/80"
                  alt={`${user.name}'s Avatar`}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />

                {/* User Info */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-x-2">
                  <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-md">
                    <FiUserCheck />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md">
                    <FiUserX />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Friends Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Add New Friends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {potentialFriends.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Profile Picture */}
                <img
                  src="https://via.placeholder.com/80"
                  alt={`${user.name}'s Avatar`}
                  className="w-16 h-16 rounded-full border-2 border-gray-400"
                />

                {/* User Info */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>

                {/* Add Friend Button */}
                <div>
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md">
                    <FiUserPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FriendRequest;
