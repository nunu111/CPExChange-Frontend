import React, { useState } from "react";
import "../pages/Mainpage.css";
import Popup_Login from "./Popup_Login";

const LoginButton = (props) => {
  const { disabled } = props;
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const onClick = () => {
    setPopupVisibility((prevIsPopupVisible) => !prevIsPopupVisible);
    console.log("ass");
  };

  return (
    <div>
      <div
        onClick={onClick}
        role="button"
        tabIndex={disabled || isPopupVisible ? "-1" : "0"}
        className={`button ${
          disabled || isPopupVisible ? "button--disabled" : ""
        }`}
        aria-disabled={disabled || isPopupVisible}
      >
        Login
      </div>

      {isPopupVisible && <Popup_Login />}
    </div>
  );
};

export default LoginButton;
