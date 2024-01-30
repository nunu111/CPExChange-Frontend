import React from "react";
import { Link } from "react-router-dom";

const PopupExitPost = ({ onConfirm, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="mainContainer">
          <p>
            Are you sure you want to go back? Any unsaved changes will be lost.
          </p>
          <Link to="/" onClick={onConfirm} className="viewButton">
            Yes, go back
          </Link>
          <Link to="/Create-Post" className="viewButton" onClick={onClose}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupExitPost;
