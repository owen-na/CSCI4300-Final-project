import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import "./App.css";
import arrow from "./assets/arrow.svg";
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    // Implement your logout logic here, e.g. clear the session or token
    setIsLoggedIn(false);
    navigate("/Pages/Login");
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/Pages/Login"
          element={<Login setLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Pages/SignIn" element={<SignIn />} />
        <Route
          path="/"
          element={
            <>
              <div className="mainParent">
                <button type="button">
                  <img src={arrow} alt="Backarrow" className="barrow" />
                </button>
                <div className="horizontalScroll">
                  <Card />
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
