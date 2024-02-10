import React, { useState } from "react";
import ReactDOM from "react-dom";
import unknowIcon from "../Icon/unknow.svg";
import XIcon from "../Icon/X.svg";

const PopupEdit = ({ visible, onClose, onEdit }) => {
  const [newdisplayname, setNewdisplayname] = useState("");
  const [newusername, setNewusername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword1, setNewpassword1] = useState("");
  const [newemailError, setNewEmailError] = useState("");
  const [newpasswordError, setNewPasswordError] = useState("");
  const [newdisplaynameError, setNewDisplaynameError] = useState("");
  const [displaynameText, setDisplaynameText] = useState("Name99");
  const [usernameText, setUsernameText] = useState("Username99");
  const [passwordText, setPasswordText] = useState("123456");
  const [profileImageText, setProfileImageText] = useState("nunu111.png");
  const [roleText, setRoleText] = useState("ผู้ใช้ทั่วไป");

  const validateInputs = () => {
    // Set initial error values to empty
    setNewEmailError("");
    setNewPasswordError("");
    setNewDisplaynameError("");

    // Check if the user has entered both fields correctly
    if ("" === newusername) {
      setNewEmailError("Please enter your username");
      return false;
    }

    if ("" === newpassword) {
      setNewPasswordError("Please enter a password");
      return false;
    }

    if ("" === newdisplayname) {
      setNewDisplaynameError("Please enter your name");
      return false;
    }

    if (newpassword.length < 8) {
      setNewPasswordError("The password must be 8 characters or longer");
      return false;
    }

    if (newpassword !== newpassword1) {
      setNewPasswordError("Password does not match");
      return false;
    }

    // Inputs are valid
    return true;
  };

  const handleEdit = () => {
    // Validate inputs
    const isValid = validateInputs();

    // Directly execute the code when inputs are valid
    if (isValid) {
      onEdit({
        newdisplayname,
        newusername,
        newpassword,
        newpassword1,
      });
      setNewdisplayname("");
      setNewusername("");
      setNewpassword("");
      setNewpassword1("");

      setDisplaynameText(newdisplayname || "Name99");
      setUsernameText(newusername || "Username99");
      setPasswordText(newpassword || "123456");
      setProfileImageText(newdisplayname || "nunu111.png");
      setRoleText(roleText || "ผู้ใช้ทั่วไป");
    }
  };

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="mainContainer">
          <div className="profileContainer">
            <img src={unknowIcon} className="profile" alt="profile" />
          </div>
          <div className="textContainer">
            <p className="text">Displayname : {displaynameText}</p>
            <p className="text">Username : {usernameText}</p>
            <p className="text">Password : {passwordText}</p>
            <p className="text">Profile image : {profileImageText}</p>
            <p className="text">Role :{roleText}</p>
            <p className="text">Edit Profile</p>
          </div>
          <div className="inputContainer">
            <label>Displayname</label>
            <input
              value={newdisplayname}
              placeholder="Enter your Displayname here"
              onChange={(ev) => setNewdisplayname(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{newdisplaynameError}</label>
          </div>
          <div className="inputContainer">
            <label>Username</label>
            <input
              value={newusername}
              placeholder="Enter your new username here"
              onChange={(ev) => setNewusername(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{newemailError}</label>
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
            <label className="errorLabel">{newpasswordError}</label>
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
            <label className="errorLabel">{newpasswordError}</label>
          </div>

          <input
            className="viewButton"
            type="button"
            onClick={() => handleEdit()}
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
