import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatuserData } from "../../../Slice/ChatUserSlice";

const MassageSideBar = () => {
  const sliceUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();
  const db = getDatabase();

  const [allFriends, setAllFriends] = useState([]);

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
      setAllFriends(Array.from(friendMap.values()));
    });
  }, [sliceUser.uid, db]);

  const handleUser = (userData) => {
    dispatch(ChatuserData(userData));
    localStorage.setItem("chatuser", JSON.stringify(userData));
  };

  return (
    <div className="w-full h-full bg-gray-100 shadow-lg">
      {/* Header */}
      <h2 className="text-lg lg:text-xl font-bold bg-blue-500 text-white text-center py-3">
        Friends
      </h2>

      {/* Friends List */}
      <div className="overflow-y-auto h-full">
        {allFriends.length > 0 ? (
          allFriends.map((friend) => (
            <div
              key={friend.key}
              onClick={() => handleUser(friend)}
              className="flex items-center gap-3 px-4 py-3 border-b hover:bg-blue-400 transition cursor-pointer"
            >
              <img
                src={friend.friendPhoto || "/default-avatar.jpg"}
                alt="friend_photo"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300"
              />
              <h2 className="text-sm lg:text-base font-semibold text-gray-700 truncate">
                {friend.friendName}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-5">No friends found.</p>
        )}
      </div>
    </div>
  );
};

export default MassageSideBar;
