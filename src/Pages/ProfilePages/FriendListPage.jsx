import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const itemListPage = () => {
 
  // ===================Redux data======================
  const reduxUser =useSelector((state) => state.currentUser.value);
  
  // ===================Redux data======================
  // =====================firebase variable======================
  const db = getDatabase();
  // =====================firebase variable======================
  // ============================function========================
  const handelAdd = (data) => {
    set(push(ref(db, 'friendreq/' )), {
      senderId:reduxUser.uid,
      senderName:reduxUser.displayName,
      senderPhoto:reduxUser.photoURL,
      recieverId:data.key,
      recieverName:data.userName,
      recieverPhoto:data.userPhoto
    });
  };
  // ============================function========================
  // ======================state variable=====================
  const [items, setitems] = useState([]);
  // ======================state variable=====================
  // ==========================Realtime databage =================
  useEffect(() => {
    onValue(ref(db, 'allusers/'), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key !== reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setitems(arr);
    });
  }, []);

  // ==========================Realtime databage =================
  return (
    <>
      <div className="min-h-screen lg:w-full bg-gray-100">
        {/* Header */}
        <header className="bg-indigo-500 text-white px-6 py-4 shadow-lg flex justify-between items-center">
          <h1 className="text-lg font-bold">All Users</h1>
          <input
            type="text"
            placeholder="Search items..."
            className="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </header>

        {/* item List */}
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.key}
                className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-2"
              >
                <img
                  src={item.userPhoto}
                  alt="item Avatar"
                  className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.userName}
                  </h3>
                </div>
                <div className="flex gap-3 m-5">
                  <button
                    onClick={() => handelAdd(item)}
                    className="bg-green-500 text-white px-3 py-1 active:scale-[1.1] rounded-lg shadow hover:bg-green-600 transition"
                  >
                    Add
                  </button>
                  <Link
                    to="/messages"
                    className="bg-blue-500 text-white px-3 py-1 active:scale-[1.1] rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Message
                  </Link>
                  <button className="bg-red-500 text-white px-3 active:scale-[1.1] py-1 rounded-lg shadow hover:bg-red-600 transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default itemListPage;
