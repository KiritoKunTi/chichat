import React from "react";

const Login = () => {
  return (
    <div className="form__container">
      <div className="form_wrapper">
        <h1 className="logo">ChiChat</h1>
        <p className="title">Login</p>
        <form>
          <input type="email" tabIndex={2} placeholder="email" />
          <input type="password" tabIndex={3} placeholder="password" />
          <button>Log In</button>
        </form>
        <p>Do not have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
