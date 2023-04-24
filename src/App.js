import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "./App.css";
import arrow from "./assets/arrow.svg";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /* global google */;
    google.accounts.id.initialize({
      client_id: "320560195543-3aemf0f6p9o3e7ulctorgump9fu99797.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);

  function handleLogout() {
    // Log out of your app
    setIsLoggedIn(false);
    navigate("/Pages/Login");
  
    // Log out of Google account
    google.accounts.id.disableAutoSelect();
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/Pages/Login" element={<Login setLoggedIn={setIsLoggedIn} />} />
        <Route path="/Pages/SignUp" element={<SignUp />} />
        <Route
          path="/"
          element={
            <>
              <div className="mainParent">
                <button type="button">
                  <img src={arrow} alt="Backarrow" className="barrow" />
                </button>
                <div className="horizontalScroll">
                <Card isLoggedIn={isLoggedIn} />
                </div>
                <button type="button">
                  <img src={arrow} alt="arrow" className="farrow" />
                </button>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}
