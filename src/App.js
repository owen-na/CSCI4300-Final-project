import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import "./App.css";
import arrow from "./assets/arrow.svg";
import React, { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/SignIn" element={<SignIn />} />
        <Route path="/" element={
          <>
          <Header />
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
        } />
    </Routes>
    </>
  );
}
