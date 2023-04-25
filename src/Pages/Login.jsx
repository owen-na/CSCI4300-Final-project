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
    <>
      <div>
        <Link to="/">
          <button>
            <p> &lt; back</p>
          </button>
        </Link>
      </div>
      <div className="loginForm">
        <form>
          <h1>Login</h1>
          <label for="email">email</label>
          <input type="email" name="email" required></input>
          <label for="password">password</label>
          <input type="password" name="password" requried></input>
          <button type="submit">login</button>
        </form>
        <p>
          need an account? <a href="./SignIn.jsx">sign up</a>
        </p>
      </div>
    </>
  );
}

// need onSession checker
// need to make sure form connects to db later
