import React, { useState } from "react";
import ReactDOM from "react-dom";
import unknowIcon from "../Icon/unknow.svg";
import XIcon from "../Icon/X.svg";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";

const PopupEdit = ({ visible, onClose, onEdit, LoginState }) => {
  const [newdisplayname, setNewdisplayname] = useState("");
  const [newusername, setNewusername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword1, setNewpassword1] = useState("");
  const [newemailError, setNewEmailError] = useState("");
  const [newpasswordError, setNewPasswordError] = useState("");
  const [newdisplaynameError, setNewDisplaynameError] = useState("");
  const [roleText, setRoleText] = useState("ผู้ใช้ทั่วไป");
  const { getIP } = IPconfig();

  const EditAPI = async () => {
    const serverIP = getIP();
    const sending = {
      username: newusername,
      profileName: newdisplayname,
      password: newpassword,
    };

    await axios
      .post(serverIP + "/user/edit", sending, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if (response.status === 200) {
          LoginState(response.data.profileName);

          window.location.reload(false);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          if (err.response.data.username === "false") {
            setNewEmailError("Username already exists");
          } else if (err.response.data.profileName === "false") {
            setNewDisplaynameError("Display name already exists");
          } else {
            console.error("Error123:", err);
          }
        } else {
          console.error("Error:", err);
        }
      });
  };

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

      setRoleText(roleText || "ผู้ใช้ทั่วไป");
    }
    EditAPI();
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
            onClick={handleEdit}
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
