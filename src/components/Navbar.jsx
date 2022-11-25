import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChiChat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
