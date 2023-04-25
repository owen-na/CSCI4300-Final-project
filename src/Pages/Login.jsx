import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../src/firebase";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Components/Card/Card";
import "../styles/login.css";

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoggedIn) {
    return <Card isLoggedIn={true} loggedIn={true} />;
  }
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <p>
        Need an account? <Link to="/Pages/SignUp">Sign Up</Link>
      </p>
    </div>
  );
}

// need onSession checker
// need to make sure form connects to db later
