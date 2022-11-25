import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message__info">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
