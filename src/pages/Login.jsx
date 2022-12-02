import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="form__container">
      <div className="form_wrapper">
        <h1 className="logo">ChiChat</h1>
        <p className="title">Login</p>
        <form onSubmit={handleSubmit}>
          <input type="email" tabIndex={2} placeholder="email" />
          <input type="password" tabIndex={3} placeholder="password" />
          <button>Log In</button>
        </form>
        <p>
          Do not have an account? <Link to="/register">Register</Link>
        </p>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Login;
