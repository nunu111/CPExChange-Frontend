import React from "react";
import { Link } from "react-router-dom";

const PopupDelPost = ({ onConfirm, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="mainContainer">
          <p>Are you sure you want to go delete post.</p>
          <Link to="/" onClick={onConfirm} className="viewButton">
            Delete
          </Link>
          <div className="viewButton" onClick={onClose}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDelPost;
