import React from "react";
import { RiImageAddLine } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <IoMdAttach className="icon" size={24} />
        <input type="file" style={{ display: "none" }} id="image" />
        <label htmlFor="image">
          <RiImageAddLine className="icon" size={24} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
