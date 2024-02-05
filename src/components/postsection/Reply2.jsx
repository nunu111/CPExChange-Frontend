import React, { useState } from "react";
import ProfileButton from "../profilebar/ProfileButton";
import ReplyButton1 from "./ReplyButton1";

const Reply2 = (props) => {
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
        <ProfileButton Detail="Reply" />
      </div>
      <ReplyButton1
        isPopupVisible={isPopupVisible}
        togglePopupVisibility={togglePopupVisibility}
        LoginState={props.LoginState}
      />
    </div>
  );
};

export default Reply2;
