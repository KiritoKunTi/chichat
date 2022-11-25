import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user__chat">
        <img
          src="https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg"
          alt=""
        />
        <div className="user__chat_info">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="user__chat">
        <img
          src="https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg"
          alt=""
        />
        <div className="user__chat_info">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="user__chat">
        <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg"
          alt=""
        />
        <div className="user__chat_info">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
