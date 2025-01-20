import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { FiSearch,  FiUserX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { ImBlocked } from 'react-icons/im';

const FriendList = () => {
  // Redux selector to get the current user details
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Initialize Firebase Realtime Database
  const db = getDatabase();

  // State to hold the list of friends
  const [allfriend, setAllfriend] = useState([]);

  // ========= Handle Unfriend =========
  const handleRemove = (friendData) => {
    // Remove friend from the database
    remove(ref(db, `friends/${friendData.key}`))
      .then(() => console.log('Friend removed successfully'))
      .catch((error) => console.error('Error removing friend:', error));
  };

  // ========= Handle Block =========
  const handelBlock = (blockUserData) => {
    // Add the user to the block list and remove from friends
    set(push(ref(db, 'blockUserData/')), {
      blockUserId: blockUserData.friendId,
      blockUserName: blockUserData.friendName,
      blockUserPhoto: blockUserData.friendPhoto,
      currentUserId: sliceUser.uid,
    })
      .then(() => {
        console.log('User blocked successfully');
        return remove(ref(db, `friends/${blockUserData.key}`));
      })
      .catch((error) => console.error('Error blocking user:', error));
  };

  // ========= Realtime Database Fetch =========
  useEffect(() => {
    const friendMap = new Map();

    // Fetch friend data from the database
    onValue(ref(db, 'friends/'), (snapshot) => {
      snapshot.forEach((item) => {
        const data = item.val();
        // Check if the current user is involved
        if (data.currentUserId === sliceUser.uid) {
          friendMap.set(data.friendId, {
            friendId: data.friendId,
            friendName: data.friendName,
            friendPhoto: data.friendPhoto,
            key: item.key,
          });
        } else if (data.friendId === sliceUser.uid) {
          friendMap.set(data.currentUserId, {
            friendId: data.currentUserId,
            friendName: data.currentUserName,
            friendPhoto: data.currentUserPhoto,
            key: item.key,
          });
        }
      });

      // Update state with friend list
      setAllfriend(Array.from(friendMap.values()));
    });
  }, [sliceUser.uid, db]);

  return (
    <div className="min-h-screen bg-gray-100 lg:w-full">
      {/* Header Section */}
      <header className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Manage Friend List</h1>
        {/* Search Input */}
        <div className="relative w-full max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-500 text-white placeholder-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </header>
      
      {/* Friends List Section */}
      <div className="container mx-auto p-6 space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            All Friends List
          </h2>
          {/* Friends Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allfriend.map((item) => (
              <div
                key={item.key}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Friend Photo */}
                <img
                  src={item.friendPhoto || '/default-avatar.jpg'}
                  alt="Sender Avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                {/* Friend Name */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.friendName}
                  </h3>
                </div>
                {/* Action Buttons */}
                <div className="space-x-1 p-3 flex">
                  <button
                    onClick={() => handleRemove(item)}
                    className="py-2 px-4 bg-red-500 transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-white rounded-full hover:bg-red-600 shadow-md"
                  >
                    <FiUserX /> Unfriend
                  </button>
                  <button
                    onClick={() => handelBlock(item)}
                    className="py-2 px-4 bg-red-500 transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-white rounded-full hover:bg-red-600 shadow-md"
                  >
                    <ImBlocked />
                    Block
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

export default FriendList;
