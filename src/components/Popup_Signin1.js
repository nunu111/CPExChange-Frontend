import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import "./index.css";
import "../pages/Mainpage.css";
import ReactDOM from "react-dom";

const Signin1 = (props) => {
  const { isPopupVisible, togglePopupVisibility } = props;

  const navigate = useNavigate();

  const onButtonClick2 = () => {
    togglePopupVisibility();
  };

  console.log("Rendering Popup:", isPopupVisible);

  return isPopupVisible
    ? ReactDOM.createPortal(
        <div className="popup-overlay">
          <div className="popup-container1">
            <div className="popup-content">
              <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                  <div>สมัครบัญชีผู้ใช้</div>
                  <button
                    className="exitButton1"
                    onClick={() => {
                      console.log("Exit button clicked!");
                      togglePopupVisibility();
                    }}
                  >
                    X
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClick2}
              value={"Log in"}
            />
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Signin1;