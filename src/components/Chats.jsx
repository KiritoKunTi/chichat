import React, { useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { ChiChatContext } from "../contexts/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = UserAuth();
  const { dispatch } = ChiChatContext();

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

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="user__chat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="user__chat_info">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
