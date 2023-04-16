import "../../styles/card.css";
import React, { useState } from 'react';

export default function Card(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
    setShowAddBtn(false);
    setShowDeleteBtn(false);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setShowAddBtn(false);
    setShowDeleteBtn(false);
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
        {loggedIn && !editing && (
          <button className="editBtn" onClick={handleEditClick}>
            Edit
          </button>
        )}
        {loggedIn && editing && (
          <div>
            {showAddBtn && <button className="addBtn">Add Image</button>}
            {showDeleteBtn && <button className="deleteBtn">Delete Image</button>}
            {!showAddBtn && !showDeleteBtn && (
              <button onClick={() => setShowAddBtn(true)}>Add Image</button>
            )}
            <button onClick={handleSaveClick}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
}