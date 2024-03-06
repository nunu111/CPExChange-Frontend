import React, { useState, useEffect } from "react";
import "./popup.css";
import "./index.css";
import "../../pages/Mainpage.css";
import ReactDOM from "react-dom";
import XIcon from "../Icon/X.svg";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";
const Signin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password1, setPassword1] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [displaynameError, setDisplaynameError] = useState("");
  const { isPopupVisible, togglePopupVisibility } = props;
  const [isSignin, setIsSignin] = useState(false);
  const { getIP } = IPconfig();
  const SigninAPI = async () => {
    const serverIP = getIP();
    const sending = {
      username: username,
      profileName: displayname,
      password,
    };

    const LoginAPI = async () => {
      const sending = {
        username: username,
        password,
      };
      // console.log(JSON.stringify(sending));
      // console.log(serverIP)
      await axios
        .post(serverIP + "/guests/login", sending)
        .then((res) => {
          if (res.status === 200) props.LoginState(res.data.profileName);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setPasswordError("Username or password is incorrect.");
          }
          console.error("Error:", err);
        });
    };

    await axios
      .post(serverIP + "/guests/signup", sending)
      .then((res) => {
        console.log("res", res.data);
        if (res.status === 201) {
          props.LoginState(displayname);
          // alert("Signup successful!");
          LoginAPI();
          togglePopupVisibility();
        } else {
          // alert("Signup unsuccessful!");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const onButtonClick1 = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");
    setDisplaynameError("");

    // Check if the user has entered both fields correctly
    if ("" === username) {
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
    SigninAPI();
  };

  const handleKeyPress1 = (event) => {
    if (event.key === "Enter") {
      onButtonClick1();
    } else if (event.key === "Escape") {
      togglePopupVisibility();
    }
  };

  // Add an event listener for the Escape key when the component mounts
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
                    Displayname
                    <input
                      value={displayname}
                      placeholder="Enter your Displayname here"
                      onChange={(ev) => setDisplayname(ev.target.value)}
                      onKeyPress={handleKeyPress1}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{displaynameError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    Username
                    <input
                      value={username}
                      placeholder="Enter your username here"
                      onChange={(ev) => setUsername(ev.target.value)}
                      onKeyPress={handleKeyPress1}
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
                      onKeyPress={handleKeyPress1}
                      className={"inputBox"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                  </div>
                  <br />
                  <div className={"inputContainer"}>
                    Confirm Password
                    <input
                      type="password"
                      value={password1}
                      placeholder="Enter your Confirm password here"
                      onChange={(ev) => setPassword1(ev.target.value)}
                      onKeyPress={handleKeyPress1}
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
    </>
  );
};

export default Signin;
