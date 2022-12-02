import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { UserAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser } = UserAuth();

  return (
    <div className="navbar">
      <span className="logo">ChiChat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
