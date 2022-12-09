import React, { useEffect, useRef } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { ChiChatContext } from "../contexts/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  const { data } = ChiChatContext();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${currentUser.uid === message.senderID && "owner"}`}
    >
      <div className="message__info">
        <img
          src={
            currentUser.uid === message.senderID
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just</span>
      </div>
      <div className="message__content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
