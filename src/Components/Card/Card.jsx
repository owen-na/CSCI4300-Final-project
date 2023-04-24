import "../../styles/card.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ isLoggedIn, handleLogout }) {
  const [editing, setEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState("Name: ");
  const [description, setDescription] = useState("What's it about?");
  const navigate = useNavigate();

  const sendData = async () => {
    try {
      await fetch("/api/cardsdata", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          image: imageUrl,
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
    sendData();
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="parent">
      <div className="imageHolder">
        <div className="nameHolder">
          {editing ? (
            <input type="text" value={name} onChange={handleNameChange} />
          ) : (
            <h2>{name}</h2>
          )}
        </div>
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
        <div className="placeHolder">
          <textarea
            className="descriptionInput"
            value={description}
            onChange={handleDescriptionChange}
            rows="10"
            cols="50"
            maxLength="1000"
            disabled={!editing}
          />
        </div>
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
