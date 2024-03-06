import React from "react";
import ReactDOM from "react-dom";

const PopupExit = ({ visible, onClose, onLogout }) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="mainContainer">
          <p>Are you sure you want to logout?</p>
          <div>
            <input
              className="viewButton"
              type="button"
              onClick={onLogout}
              value={"Log out"}
            />
          </div>
          <div>
            <input
              className="viewButton"
              type="button"
              onClick={onClose}
              value={"cancel"}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupExit;
