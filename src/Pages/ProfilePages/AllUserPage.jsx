import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push, set } from "firebase/database";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllUserPage = () => {
  const reduxUser = useSelector((state) => state.currentUser.value);
  const db = getDatabase();

  const handelAdd = (data) => {
    set(push(ref(db, "friendreq/")), {
      senderId: reduxUser.uid,
      senderName: reduxUser.displayName,
      senderPhoto: reduxUser.photoURL,
      recieverId: data.key,
      recieverName: data.userName,
      recieverPhoto: data.userPhoto,
    });
  };

  const [items, setitems] = useState([]);

  useEffect(() => {
    onValue(ref(db, "allusers/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key !== reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setitems(arr);
    });
  }, [reduxUser.uid]);

  return (
    <div className="min-h-screen ml-[115px] md:ml-[120px] lg:ml-[250px] bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-500 text-white px-4 py-3 shadow-lg flex flex-col md:flex-row md:justify-between items-center">
        <h1 className="text-sm md:text-lg font-bold mb-3 md:mb-0">
          All Users
        </h1>
        <input
          type="text"
          placeholder="Search items..."
          className="w-full md:w-80 px-3 py-2 rounded-lg shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </header>

      {/* Item List */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-lg shadow-md p-3 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3"
            >
              {/* User Photo */}
              <img
                src={item.userPhoto || "/default-avatar.jpg"}
                alt="User Avatar"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-500 shadow-sm"
              />
              {/* User Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.userName}
                </h3>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                <button
                  onClick={() => handelAdd(item)}
                  className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow hover:bg-green-600 transition active:scale-105"
                >
                  Add
                </button>
                <Link
                  to="/messages"
                  className="bg-blue-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition active:scale-105"
                >
                  Message
                </Link>
                <button className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow hover:bg-red-600 transition active:scale-105">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUserPage;
