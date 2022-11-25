import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="user__chat">
        <img
          src="https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg"
          alt=""
        />
        <div className="user__chat_info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
