import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { BiSend } from "react-icons/bi";

const MassageBox = () => {
  const ChatuserSlceData = useSelector((state) => state.chatuser.value);
  const sliceUser = useSelector((state) => state.currentUser.value);

  const [text, setText] = useState("");
  const [allmsg, setAllMsg] = useState([]);

  const handleOnEnter = () => {
    const db = getDatabase();
    set(push(ref(db, "msg/")), {
      senderId: sliceUser.uid,
      recieverId: ChatuserSlceData.friendId,
      msg: text,
    });
    setText("");
  };

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "/msg"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().senderId === sliceUser.uid &&
          item.val().recieverId === ChatuserSlceData.friendId
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
        if (
          item.val().senderId === ChatuserSlceData.friendId &&
          item.val().recieverId === sliceUser.uid
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllMsg(arr);
    });
  }, [ChatuserSlceData]);

  return (
    <section className="flex flex-col w-[280px]  md:w-[760px] lg:w-[1000px] xl:w-[1280px] h-screen overflow-x-scroll bg-slate-100">
      {/* Header */}
      <div className="py-3 px-4 flex items-center gap-3 bg-blue-600">
        <div className="flex-shrink-0">
          <img
            src={ChatuserSlceData?.friendPhoto}
            alt="user_photo"
            className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-slate-300"
          />
        </div>
        <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-white truncate">
          {ChatuserSlceData?.friendName || "Select a user to chat"}
        </h2>
      </div>

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-200 rounded-xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {allmsg.length > 0 ? (
          allmsg.map((item) =>
            item.senderId === sliceUser.uid ? (
              <div
                key={item.key}
                className="bg-blue-500 text-white px-3 py-2 mt-3 rounded-lg ml-auto max-w-[75%] md:max-w-[60%] lg:max-w-[50%] text-sm md:text-base break-words"
              >
                {item.msg}
              </div>
            ) : (
              <div
                key={item.key}
                className="bg-gray-300 text-black px-3 py-2 mt-3 rounded-lg max-w-[75%] md:max-w-[60%] lg:max-w-[50%] text-sm md:text-base break-words"
              >
                {item.msg}
              </div>
            )
          )
        ) : (
          <p className="text-center text-gray-500 w-full py-5">
            No messages yet. Start a conversation!
          </p>
        )}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2 px-3 py-2 bg-white shadow-md">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
          className="flex-1 text-sm md:text-base lg:text-lg"
        />
        <BiSend
          onClick={handleOnEnter}
          className="text-3xl md:text-4xl lg:text-5xl text-blue-500 cursor-pointer hover:scale-110"
        />
      </div>
    </section>
  );
};

export default MassageBox;
