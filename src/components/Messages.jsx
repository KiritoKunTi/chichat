import { onSnapshot, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import { useEffect } from "react";
import { ChiChatContext } from "../contexts/ChatContext";
import Message from "./Message";

const Messages = () => {
  const { data } = ChiChatContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatID]);

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
