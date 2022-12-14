import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { ChiChatContext } from "../contexts/ChatContext";

const Chat = () => {
  const { data } = ChiChatContext();

  return (
    <div className="chat">
      <div className="chat__info">
        <span>{data.user?.displayName}</span>
        <div className="chat__icons">
          <BsCameraVideoFill className="icon" size={18} />
          <FaUserPlus className="icon" size={18} />
          <MdOutlineMoreHoriz className="icon" size={18} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
