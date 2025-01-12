import React from 'react'
import { FiSearch, FiMessageCircle, FiUser, FiXCircle } from "react-icons/fi";

const FriendListPage = () => {
    const friends = [
    { id: 1, name: "John Doe", location: "New York, USA", online: true },
    { id: 2, name: "Jane Smith", location: "Los Angeles, USA", online: false },
    { id: 3, name: "Michael Johnson", location: "Chicago, USA", online: true },
    { id: 4, name: "Emily Davis", location: "San Francisco, USA", online: false },
  ];
  return (
    <>
   <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-500 text-white px-6 py-4 shadow-lg flex justify-between items-center">
        <h1 className="text-lg font-bold">Friend List</h1>
        <input
          type="text"
          placeholder="Search friends..."
          className="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </header>

      {/* Friend List */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
            >
              <img
                src="https://via.placeholder.com/80"
                alt="Friend Avatar"
                className="w-16 h-16 rounded-full border-2 border-indigo-500 shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {friend.name}
                </h3>
                <p className="text-gray-500 text-sm">{friend.location}</p>
              </div>
              <div className="space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition">
                  View
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition">
                  Message
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default FriendListPage