import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import "./index.css";
import "../pages/Mainpage.css";
import ReactDOM from "react-dom";
import logo from "./Icon/logo.svg";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { isPopupVisible, togglePopupVisibility } = props;

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    // Assuming login is successful, you can close the popup
    console.log("Login successful!");
  };

  console.log("Rendering Popup:", isPopupVisible);

  return isPopupVisible
    ? ReactDOM.createPortal(
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                  <img src={logo} className="logo" alt="logo" />
                  <div>logging in...</div>
                  <button
                    className="exitButton"
                    onClick={() => {
                      console.log("Exit button clicked!");
                      togglePopupVisibility();
                    }}
                  >
                    X
                  </button>
                </div>
                <br />
                <div className={"inputContainer"}>
                  Username
                  <input
                    value={email}
                    placeholder="Enter your username here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={"inputBox"}
                  />
                  <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                  Password
                  <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={"inputBox"}
                  />
                  <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                  <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Log in"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Signin;
