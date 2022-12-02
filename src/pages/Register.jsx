import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(response.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", response.user.uid), {
            uid: response.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", response.user.uid), {});

          navigate("/");
        });
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form__container">
      <div className="form_wrapper">
        <h1 className="logo">ChiChat</h1>
        <p className="title">Register</p>
        <form onSubmit={handleSubmit}>
          <input type="text" tabIndex={1} placeholder="display name" required />
          <input type="email" tabIndex={2} placeholder="email" required />
          <input type="password" tabIndex={3} placeholder="password" required />
          <input style={{ display: "none" }} type="file" id="avatar" required />
          <label htmlFor="avatar">
            <FcAddImage size={30} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Register;
