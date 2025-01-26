import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiUserCheck } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Block = () => {
  // Redux selector to get the current user details
  const sliceUser = useSelector((state) => state.currentUser.value);

  // ========== Firebase variable =============
  const db = getDatabase();

  // State to hold the list of blocked users
  const [allblockUser, setAllblockUser] = useState([]);

  // ============================= Unblock ============================
  const handelUnblock = (friendData) => {
    set(push(ref(db, 'friends/')), {
      friendId: friendData.blockUserId,
      friendName: friendData.blockUserName,
      friendPhoto: friendData.blockUserPhoto,
      currentUserId: sliceUser.uid,
      currentUserName: sliceUser.displayName,
      currentUserPhoto: sliceUser.photoURL,
    });
    remove(ref(db, `blockUserData/${friendData.key}`));
  };

  // ========== Realtime Database Fetch =========
  useEffect(() => {
    const arr = [];
    // Fetch block user data from Firebase Realtime Database
    const blockUserRef = ref(db, 'blockUserData/');

    onValue(blockUserRef, (snapshot) => {
      snapshot.forEach((item) => {
        // Only push the data if the currentUserId matches the Redux user id
        if (item.val().currentUserId === sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });

      // Update state with the list of blocked users
      setAllblockUser(arr);
    });

    // Clean-up function for when the component unmounts or data changes
    return () => {
      // Firebase automatically unsubscribes from the onValue listener
    };
  }, [sliceUser.uid, db]); // Dependency array ensures useEffect runs on user id or db change

  return (
    <div className="min-h-screen bg-gray-100 lg:w-full">
      {/* ========== Header Section ========== */}
      <header className="bg-red-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Blocked Users</h1>
        <div className="relative w-full max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search blocked users..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-red-500 text-white placeholder-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </header>

      {/* ========== Blocked User List ========== */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allblockUser.map((item) => (
            <div
              key={item.key}
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            >
              {/* ========== Profile Picture ========== */}
              <img
                src={item.blockUserPhoto}
                alt={`${item.blockUserName}'s Avatar`}
                className="w-16 h-16 rounded-full border-2 border-red-500"
              />

              {/* ========== Blocked User Info ========== */}
              <div className="ml-4 flex-1">
                <h3 className="text-[10px] md:text-[14px] lg:text-[18px] font-semibold text-gray-800">
                  {item.blockUserName}
                </h3>
               
              </div>

              {/* ========== Unblock Button ========== */}
              <div>
                <button
                  onClick={() => handelUnblock(item)}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-md"
                >
                  <div className="flex gap-2 text-[10px] md:text-[14px] lg:text-[20px] items-center">
                    <FiUserCheck /> Unblock
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Block;
