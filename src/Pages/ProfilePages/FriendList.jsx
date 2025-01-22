import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { FiSearch, FiUserX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ImBlocked } from "react-icons/im";

const FriendList = () => {
  const sliceUser = useSelector((state) => state.currentUser.value);
  const db = getDatabase();
  const [allfriend, setAllfriend] = useState([]);

  const handleRemove = (friendData) => {
    remove(ref(db, `friends/${friendData.key}`))
      .then(() => console.log("Friend removed successfully"))
      .catch((error) => console.error("Error removing friend:", error));
  };

  const handelBlock = (blockUserData) => {
    set(push(ref(db, "blockUserData/")), {
      blockUserId: blockUserData.friendId,
      blockUserName: blockUserData.friendName,
      blockUserPhoto: blockUserData.friendPhoto,
      currentUserId: sliceUser.uid,
    })
      .then(() => {
        console.log("User blocked successfully");
        return remove(ref(db, `friends/${blockUserData.key}`));
      })
      .catch((error) => console.error("Error blocking user:", error));
  };

  useEffect(() => {
    const friendMap = new Map();

    onValue(ref(db, "friends/"), (snapshot) => {
      snapshot.forEach((item) => {
        const data = item.val();
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

      setAllfriend(Array.from(friendMap.values()));
    });
  }, [sliceUser.uid, db]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between shadow-md">
        <h1 className="text-lg md:text-xl font-bold mb-3 md:mb-0">
          Manage Friend List
        </h1>
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-500 text-sm text-white placeholder-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </header>

      {/* Friends List Section */}
      <div className="container mx-auto px-4 py-6 space-y-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-700">
          All Friends List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allfriend.map((item) => (
            <div
              key={item.key}
              className="flex flex-col sm:flex-row items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Friend Photo */}
              <img
                src={item.friendPhoto || "/default-avatar.jpg"}
                alt="Friend Avatar"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-blue-500"
              />
              {/* Friend Info */}
              <div className="mt-3 sm:mt-0 sm:ml-4 flex-1 text-center sm:text-left">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.friendName}
                </h3>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center sm:justify-end gap-2 mt-3 sm:mt-0">
                <button
                  onClick={() => handleRemove(item)}
                  className="py-1 px-3 sm:py-2 sm:px-4 bg-red-500 text-xs sm:text-sm text-white rounded-full hover:bg-red-600 transition shadow-md"
                >
                  <FiUserX className="inline-block mr-1" /> Unfriend
                </button>
                <button
                  onClick={() => handelBlock(item)}
                  className="py-1 px-3 sm:py-2 sm:px-4 bg-yellow-500 text-xs sm:text-sm text-white rounded-full hover:bg-yellow-600 transition shadow-md"
                >
                  <ImBlocked className="inline-block mr-1" /> Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
