import React, { useState } from "react";
import ReactDOM from "react-dom";
import unknowIcon from "../Icon/unknow.svg";
import XIcon from "../Icon/X.svg";
import { SigninFunc } from "../function/Signinfunc";

const PopupEdit = ({ visible, onClose, onEdit }) => {
  const [newdisplayname, setNewdisplayname] = useState("");
  const [newusername, setNewusername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword1, setNewpassword1] = useState("");

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
          <div className="inputContainer">
            <label>Displayname</label>
            <input
              value={newdisplayname}
              placeholder="Enter your Displayname here"
              onChange={(ev) => setNewdisplayname(ev.target.value)}
              className="inputBox"
            />
          </div>
          <div className="inputContainer">
            <label>Username</label>
            <input
              value={newusername}
              placeholder="Enter your new username here"
              onChange={(ev) => setNewusername(ev.target.value)}
              className="inputBox"
            />
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input
              value={newpassword}
              placeholder="Enter your new password here"
              onChange={(ev) => setNewpassword(ev.target.value)}
              className="inputBox"
              type="password"
            />
          </div>
          <div className="inputContainer">
            <label>Confirm Password</label>
            <input
              type="password"
              value={newpassword1}
              placeholder="Enter your Confirm new password here"
              onChange={(ev) => setNewpassword1(ev.target.value)}
              className="inputBox"
            />
          </div>

          <input
            className="viewButton"
            type="button"
            onClick={onEdit}
            value="บันทึก"
          />
          <img
            src={XIcon}
            alt="Exit"
            className="exitButton1"
            style={{ top: "10px", right: "10px" }}
            onClick={onClose}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupEdit;
