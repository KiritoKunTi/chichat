import React, { useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = UserAuth();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));

  return (
    <div className="chats">
      {Object.entries(chats).map((chat) => (
        <div className="user__chat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="user__chat_info">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
