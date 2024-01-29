import React, { useState } from "react";
import ProfileButton from "./profilebar/ProfileButton";
import loginIcon from "./Icon/login.svg";
import Popup_Login from "./Popup_Login";

const LoginButton = (props) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopupVisibility = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const onClick = () => {
    togglePopupVisibility();
    
  };

  return (
    <div>
      <div onClick={onClick} role="button">
        <ProfileButton Detail="ลงชื่อเข้าใช้" Img={loginIcon} />
      </div>
      <Popup_Login
        isPopupVisible={isPopupVisible}
        togglePopupVisibility={togglePopupVisibility}
        LoginState={props.LoginState}
      />
    </div>
  );
};

export default LoginButton;
