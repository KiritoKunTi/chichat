import React from "react";
import { FcAddImage } from "react-icons/fc";

const Register = () => {
  return (
    <div className="form__container">
      <div className="form_wrapper">
        <h1 className="logo">ChiChat</h1>
        <p className="title">Register</p>
        <form>
          <input type="text" tabIndex={1} placeholder="display name" />
          <input type="email" tabIndex={2} placeholder="email" />
          <input type="password" tabIndex={3} placeholder="password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <FcAddImage size={30} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
