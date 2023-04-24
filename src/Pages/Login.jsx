import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../Components/Card/Card";
import Header from "../Components/Header/Header";

export default function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Card isLoggedIn={true} />;
  }

  return (
    <>
      <div className="loginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          ></input>
          <button type="submit">Login</button>
        </form>
        <p>
          Need an account? <Link to="/Pages/SignUp">Sign Up</Link>
        </p>
      </div>
    </>
  );
}