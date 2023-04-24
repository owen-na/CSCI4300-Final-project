import "../../styles/card.css";
import React, { useState, useEffect, useRef } from "react";

export default function Card({ isLoggedIn }) {
  const [editing, setEditing] = useState(false); // For edit
  const [selectedImage, setSelectedImage] = useState(null); // For image
  const fileInputRef = useRef(null); // For image, get file.
  const [imageUrl, setImageUrl] = useState(null); // For image

  const sendData = async () => {
    try {
      await fetch("/api/cardsdata", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "foo",
          description: "bar",
          image: "foobar",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditClick = () => {
    if (isLoggedIn) {
      setEditing(true);
    } else {
      alert("Please log in to edit the card.");
    }
  }; // Handle the edit button.

  const handleAddClick = () => {
    fileInputRef.current.click();
  }; // Handle the add button.

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(file);
    setImageUrl(imageUrl);
  }; // Add button click => add image.

  const handleDeleteClick = () => {
    if (!imageUrl) {
      alert("There is no image added to the card!");
      return;
    }
    setSelectedImage(null);
    setImageUrl(null);
  }; // Handle the delete button. Click => delete image.

  const handleSaveClick = () => {
    setEditing(false);
    sendData();
  }; /* Handle save button. 
  (Need to change this to save image even if we reload page.) */

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
              <button className="deleteBtn" onClick={handleDeleteClick}>
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
