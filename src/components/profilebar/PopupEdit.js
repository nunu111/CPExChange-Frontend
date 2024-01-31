import React from "react";
import ReactDOM from "react-dom";
import unknowIcon from "../Icon/unknow.svg";
import XIcon from "../Icon/X.svg";

const PopupEdit = ({ visible, onClose, onEdit }) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="mainContainer">
          <div className="profileContainer">
            <img src={unknowIcon} className="profile" alt="profile" />
          </div>
          <div className="textContainer">
            <p className="text">ชื่อผู้ใช้ : Username99</p>
            <p className="text">รหัสผ่าน : 123456</p>
            <p className="text">Profile image : nunu111.png</p>
            <p className="text">Role : ผู้ใช้ทั่วไป</p>
            <p className="text">แก้ไข Profile</p>
          </div>
          <div></div>
          <div className="buttonContainer">
            <input
              className="viewButton"
              type="button"
              onClick={onEdit}
              value={"บันทึก"}
            />
            <img
              src={XIcon}
              alt="Exit"
              className="exitButton1"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupEdit;
