import React, { useState } from "react";
import ProfileButton from "./profilebar/ProfileButton";
import registerIcon from "./Icon/register.svg";
import Popup_Signin from "./Popup_Signin";

const SigninButton = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopupVisibility = () => {
    setPopupVisibility((prevIsPopupVisible) => !prevIsPopupVisible);
  };

  const onClick = () => {
    togglePopupVisibility();
    console.log("ass");
  };

  return (
    <div>
      <div onClick={onClick} role="button">
        <ProfileButton Detail="สมัครบัญชี" Img={registerIcon} />
      </div>
      <Popup_Signin
        isPopupVisible={isPopupVisible}
        togglePopupVisibility={togglePopupVisibility}
      />
    </div>
  );
};

export default SigninButton;
