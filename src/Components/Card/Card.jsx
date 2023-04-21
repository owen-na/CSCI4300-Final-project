import "../../styles/card.css";
import React, { useState, useEffect, useRef } from "react";

export default function Card({ isLoggedIn }) {
  const [editing, setEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleEditClick = () => {
    if (isLoggedIn) {
      setEditing(true);
    } else {
      alert("Please log in to edit the card.");
    }
  };

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(file);
    setImageUrl(imageUrl);
  };

  const handleDeleteClick = () => {
    if (!imageUrl) {
      alert("There is no image added to the card!");
      return;
    }
    setSelectedImage(null);
    setImageUrl(null);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="parent">
      <div className="imageHolder">
        <h2>Name holder</h2>
        <div className="image">
          {imageUrl ? (
            <img src={imageUrl} alt="Selected" />
          ) : (
            <p>No image selected</p>
          )}
          <input
            className="imgInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="stats">
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <p>placeHolder</p>
        <div className="Edit_Btn">
          {isLoggedIn && !editing && (
            <button className="editBtn" onClick={handleEditClick}>
              Edit
            </button>
          )}
          {editing && (
            <>
              <button className="addBtn" onClick={handleAddClick}>
                Add
              </button>
              <button
                className="deleteBtn"
                onClick={handleDeleteClick}
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
    </div>
  );
}
