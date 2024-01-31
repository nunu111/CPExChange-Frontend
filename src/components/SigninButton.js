import React, { useState } from "react";
import ProfileButton from "./profilebar/ProfileButton";
import registerIcon from "./Icon/register.svg";
import Popup_Signin from "./Popup_Signin";

const SigninButton = (props) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopupVisibility = () => {
    setPopupVisibility((prevIsPopupVisible) => !prevIsPopupVisible);
  };

  const onClick = () => {
    togglePopupVisibility();
    
  };

  return (
    <div>
      <div onClick={onClick} role="button">
        <ProfileButton Detail="สมัครบัญชี" Img={registerIcon} />
      </div>
      <Popup_Signin
        isPopupVisible={isPopupVisible}
        togglePopupVisibility={togglePopupVisibility}
        LoginState={props.LoginState}
      />
    </div>
  );
};

export default SigninButton;
