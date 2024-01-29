import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import "./index.css";
import "../pages/Mainpage.css";
import ReactDOM from "react-dom";
import Signin1 from "./Popup_Signin1";
import XIcon from "./Icon/X.svg";
import { SigninFunc } from "./function/Signinfunc";
const Signin = (props) => {
  const { SigninState1 } = SigninFunc();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password1, setPassword1] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [displaynameError, setDisplaynameError] = useState("");
  const { isPopupVisible, togglePopupVisibility } = props;
  const [isSignin, setIsSignin] = useState(false);
  const navigate = useNavigate();

  const onButtonClick1 = (props) => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");
    setDisplaynameError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if ("" === displayname) {
      setDisplaynameError("Please enter your name");
      return;
    }

    if (password.length < 1) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    if (password !== password1) {
      setPasswordError("Password does not match");
      return;
    }
    // Assuming login is successful, you can close the popup
    setIsSignin(SigninState1(email, password, displayname));
    togglePopupVisibility();
  };

  return (
    <>
      {isPopupVisible &&
        ReactDOM.createPortal(
          <div className="popup-overlay">
            <div
              style={{ width: "100%", height: "100%" }}
              onClick={togglePopupVisibility}
            />
            <div className="popup-container1">
              <div className="popup-content">
                <div className={"mainContainer"}>
                  <div className={"titleContainer"}>
                    <div>สมัครบัญชีผู้ใช้</div>
                  </div>
                  <img
                    src={XIcon}
                    alt="Exit"
                    className="exitButton1"
                    onClick={togglePopupVisibility}
                  />
                  <br />
                  <div className={"inputContainer"}>
                    displayname
                    <input
                      value={displayname}
                      placeholder="Enter your Displayname here"
                      onChange={(ev) => setDisplayname(ev.target.value)}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{displaynameError}</label>
                  </div>
                  <br />
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
                      type="password"
                      value={password}
                      placeholder="Enter your password here"
                      onChange={(ev) => setPassword(ev.target.value)}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    Comfirm Password
                    <input
                      type="password"
                      value={password1}
                      placeholder="Enter your Confirm password here"
                      onChange={(ev) => setPassword1(ev.target.value)}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    <input
                      className={"inputButton"}
                      type="button"
                      onClick={onButtonClick1}
                      value={"ต่อไป"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      {isSignin ? (
        <>
          <Signin1 />
        </>
      ) : (
        <>1150</>
      )}
    </>
  );
};

export default Signin;
