import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiUserCheck, FiUserX } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const FriendRequest = () => {
  const reduxUser = useSelector((state) => state.currentUser.value);
  const db = getDatabase();

  const handleRemove = (reqData) => {
    remove(ref(db, `friendreq/${reqData.key}`));
  };

  const handleConfirm = (friendData) => {
    set(push(ref(db, 'friends/')), {
      friendId: friendData.senderId,
      friendName: friendData.senderName,
      friendPhoto: friendData.senderPhoto,
      currentUserId: reduxUser.uid,
      currentUserName: reduxUser.displayName,
      currentUserPhoto: reduxUser.photoURL,
    });
    remove(ref(db, `friendreq/${friendData.key}`));
  };

  const [allReq, setAllReq] = useState([]);

  useEffect(() => {
    const arr = [];
    onValue(ref(db, 'friendreq/'), (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().recieverId === reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllReq(arr);
    });
  }, [reduxUser.uid, db]);

  return (
    <div className="min-h-screen bg-gray-100 lg:w-full">
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
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Pending Friend Requests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReq.map((item) => (
              <div
                key={item.key}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.senderPhoto || '/default-avatar.jpg'}
                  alt="Sender Avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.senderName}
                  </h3>
                </div>
                <div className="space-x-1 p-3 flex">
                  <button
                    onClick={() => handleConfirm(item)}
                    className="px-4 py-2 bg-green-500 text-white active:scale-[1.1] flex items-center gap-2 rounded-full hover:bg-green-600 shadow-md"
                  >
                    <FiUserCheck /> Confirm
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    className="py-2 px-4 bg-red-500 flex items-center active:scale-[1.1] gap-2 text-white rounded-full hover:bg-red-600 shadow-md"
                  >
                    <FiUserX /> Remove
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
