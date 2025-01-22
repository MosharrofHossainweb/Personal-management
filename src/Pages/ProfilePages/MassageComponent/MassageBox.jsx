import InputEmoji from "react-input-emoji";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { BiSend } from "react-icons/bi";

const MassageBox = () => {
  // =====================Redux data==========================
  const ChatuserSlceData = useSelector((state) => state.chatuser.value);
  const sliceUser = useSelector((state) => state.currentUser.value);

  // =====================Redux data==========================
  // ============================Usestate part===============================
  const [text, setText] = useState("");
  const [allmsg, setallmsg] = useState([]);
  // ============================Usestate part===============================
  // ================================function part=======================================
  const handleOnEnter = () => {
    set(push(ref(db, "msg/")), {
      senderId: sliceUser.uid,
      recieverId: ChatuserSlceData.friendId,
      msg: text,
    });
    setText("");
  };
  // ================================function part=======================================
  // ================================firebase variable part=======================================
  const db = getDatabase();

  // ================================firebase variable part=======================================
  // ================================Realtime database part=======================================
  useEffect(() => {
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
      setallmsg(arr);
    });
  }, [ChatuserSlceData]);
  // ================================Realtime database part=======================================

  return (
    <>
      <section className="msgbox flex flex-col h-screen bg-slate-100">
        {/* Header */}
        <div className="masgBar py-3 bg-blue-600 px-5 flex gap-3 items-center">
          <div className="user_photo">
            <img
              src={ChatuserSlceData?.friendPhoto}
              alt="user_photo"
              className="h-[45px] w-[45px] rounded-full bg-slate-300"
            />
          </div>
          <h2 className="text-lg font-semibold text-white">
            {ChatuserSlceData?.friendName}
          </h2>
        </div>

        {/* Message display area */}
        <div className="write_mg flex-1 overflow-y-auto bg-slate-200 p-4 dark:bg-blue-900">
          {allmsg.map((item) =>
            item.senderId === sliceUser.uid ? (
              <div
                key={item.key}
                className="bg-blue-500 text-white px-3 py-2 mt-3 rounded-lg ml-auto max-w-[75%]"
              >
                {item.msg}
              </div>
            ) : (
              <div
                key={item.key}
                className="bg-gray-300 text-black px-3 py-2 mt-3 rounded-lg max-w-[75%]"
              >
                {item.msg}
              </div>
            )
          )}
        </div>

        {/* Input field */}
        <div className="imoji_input flex items-center gap-3 px-4 py-3 bg-white shadow-md">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            className="flex-1"
          />
          <BiSend
            onClick={handleOnEnter}
            className="text-4xl text-blue-500 cursor-pointer hover:scale-110"
          />
        </div>
      </section>
    </>
  );
};

export default MassageBox;
