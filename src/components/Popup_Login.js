import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import "./index.css";
import "../pages/Mainpage.css";
import ReactDOM from "react-dom";
import logo from "./Icon/logo.svg";
import XIcon from "./Icon/X.svg";
import axios from "axios";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { isPopupVisible, togglePopupVisibility } = props;
  const serverIP = "http://192.168.116.101:8080/guest/login";
  const LoginAPI = async()=>  {
    const AUTH_TOKEN = 'Basic'
    const sending = {
      //headers: {
      //  'Content-Type': 'application/json',
      //  'Accept': 'application/json',
      //  'Authorization': AUTH_TOKEN
      //},
      //data: {
        username,
        password
      //},
      //params: {}
      
    };
    console.log(JSON.stringify(sending));
      const resp = await axios.post(serverIP, sending).then((res) => {
        console.log("res", res.data);
      }).catch((err) => {
        console.error("Error:", err);
      });
      console.log("check", resp);
    
  }

  const onButtonClick = (event) => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === username) {
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
    
    props.LoginState();
    LoginAPI();
    console.log("Login successful!");
    togglePopupVisibility();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onButtonClick();
    } else if (event.key === "Escape") {
      togglePopupVisibility();
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isPopupVisible) {
        togglePopupVisibility();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isPopupVisible, togglePopupVisibility]);

  return isPopupVisible ? (
    ReactDOM.createPortal(
      <div>
        <div className="popup-overlay">
          <div
            style={{ width: "100%", height: "100%" }}
            onClick={togglePopupVisibility}
          />
          <div className="popup-container">
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
                  <img src={XIcon} className="ExitIcon" alt="Exit" />
                </button>
              </div>
              <br />
              <div className={"inputContainer"}>
                Username
                <input
                  value={username}
                  placeholder="Enter your username here"
                  onChange={(ev) => setUsername(ev.target.value)}
                  onKeyPress={handleKeyPress}
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
                  onKeyPress={handleKeyPress}
                  className={"inputBox"}
                  type="password"
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
  ) : (
    <></>
  );
};

export default Login;
