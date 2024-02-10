import React, { useState } from "react";
import loginIcon from "../Icon/login.svg";
import PopupLogin from "./Popup_Login";
import ProfileButton from "./ProfileButton";

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
      <PopupLogin
        isPopupVisible={isPopupVisible}
        togglePopupVisibility={togglePopupVisibility}
        LoginState={props.LoginState}
      />
    </div>
  );
};

export default LoginButton;
