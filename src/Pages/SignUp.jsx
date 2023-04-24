import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../src/firebase";
import { Link } from "react-router-dom";
import "../styles/signUp.css";

export default function SignUp({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Thanks for registering!")
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Email already registered!");
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="YourId@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password should be at least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/Pages/Login">Log in</Link>
      </p>
    </div>
  );
}
