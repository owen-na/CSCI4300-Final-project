import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "./App.css";
import arrow from "./assets/arrow.svg";
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}  handleLogin={handleLogin}/>
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
