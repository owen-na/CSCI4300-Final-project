import "../../styles/card.css";
import React, { useState } from 'react';

export default function Card(props) {
  const [loggedIn, setLoggedIn] = useState(false); 

  return (
    <div className="parent">
      <div className="imageHolder">
        <h2>Name holder</h2>
        <div className="image"></div>
      </div>
      <div className="stats">
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        {loggedIn && (
          <button className="editButton">Edit</button>
        )}
      </div>
    </div>
  );
}
