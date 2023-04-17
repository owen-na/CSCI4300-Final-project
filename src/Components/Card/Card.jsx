import "../../styles/card.css";
import React, { useState, useEffect } from "react";

export default function Card({ isLoggedIn }) {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    if (isLoggedIn) {
      setEditing(true);
    } else {
      alert("Please log in to edit the card.");
    }
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

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
        {isLoggedIn && !editing && (
          <button className="editBtn" onClick={handleEditClick}>
            Edit
          </button>
        )}
        {editing && (
          <>
            <button className="addBtn" onClick={() => console.log("Add")}>
              Add
            </button>
            <button
              className="deleteBtn"
              onClick={() => console.log("Delete")}
            >
              Delete
            </button>
            <button className="saveBtn" onClick={handleSaveClick}>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
