import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatuserData } from '../../Slice/ChatUserSlice';

const Massege = () => {
  // Redux selector to get the current user details
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Initialize Firebase Realtime Database
  const db = getDatabase();
  const dispatch=useDispatch()
  // ======================function pat========================
  const handelUser=(chatuser)=>{
dispatch(ChatuserData(chatuser))
localStorage.setItem('chatuser',JSON.stringify(item))
  }
  // ======================Function part========================

  // State to hold the list of friends
  const [allfriend, setAllfriend] = useState([]);
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
    <>
      <div className="min-h-screen w-full flex flex-col bg-gray-100">
        {/* Chat Header */}
        <header className="bg-indigo-500 text-white px-6 py-4 shadow-lg flex justify-between items-center">
          <h1 className="text-lg font-bold">Messages</h1>
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
            New Chat
          </button>
        </header>

        {/* Chat Body */}
        <div className="flex flex-grow overflow-hidden">
          {/* Chat List Sidebar */}
          <aside className="hidden md:block w-1/4 bg-white shadow-lg overflow-y-auto">
            <ul>
              {allfriend.map((item) => (
                <li onClick={()=>handelUser(item)}
                  key={item}
                  className="border-b px-6 py-4 flex items-center hover:bg-gray-200 transition"
                >
                  <img
                    src={item.friendPhoto}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="text-sm">
                    <h4 className="font-semibold text-xl text-gray-800">
                    {item.friendName} 
                    </h4>
                    <p className="text-gray-500 truncate">
                     
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Chat Area */}
          <main className="flex-grow flex flex-col bg-white shadow-lg">
            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
              <div className="flex">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg max-w-xs shadow">
                  Hi! How are you?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg max-w-xs shadow">
                  I'm good, thank you! How about you?
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t px-4 py-3 bg-gray-50 flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="ml-3 bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
                Send
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Massege;
