import React, { useState } from "react";
import "./Profile.css";
import logo from "../Icon/logo.svg";
import ProfileButton from "./ProfileButton";
import homeIcon from "../Icon/home.svg";
import explorIcon from "../Icon/explor.svg";
import LoginButton from "../LoginButton";
import SigninButton from "../SigninButton";
import { Link } from "react-router-dom";
import mybookmarkIcon from "../Icon/mybookmark.svg";
import mypostIcon from "../Icon/mypost.svg";
import unknowIcon from "../Icon/unknow.svg";
import infoIcon from "../Icon/info.svg";
import logoutIcon from "../Icon/logout.svg";
import notiIcon from "../Icon/noti.svg";
import editIcon from "../Icon/edit.svg";
import PopupExit from "./PopupExit";
import PopupEdit from "./PopupEdit";

const ProfileBar = (props) => {
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [editPopupVisible, setEditPopupVisible] = useState(false);

  function logout() {
    // You can perform any additional logout logic here
    props.Logout();
    // Close the popup after logout
    setLogoutPopupVisible(false);
  }

  function Edit() {
    setEditPopupVisible(false);
  }

  return (
    <div className="profilebarBackground">
      <div className="profilebar">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>

        <>
          {props.isLogin() ? (
            <div className="userprofile">
              <img src={unknowIcon} className="profile" alt="profile" />
              <p className="text">Username99</p>
              <span className="icon">
                <img src={notiIcon} alt="noti" />
              </span>
              <span onClick={() => setEditPopupVisible(true)} className="icon">
                <img src={editIcon} alt="edit" />
              </span>
              <span
                onClick={() => setLogoutPopupVisible(true)}
                className="icon"
              >
                <img src={logoutIcon} alt="logout" />
              </span>
              <span className="icon">
                <img src={infoIcon} alt="info" />
              </span>
            </div>
          ) : (
            <div>
              <LoginButton LoginState={props.nowLogin} />
              <SigninButton LoginState={props.nowLogin} />
            </div>
          )}
        </>

        <PopupEdit
          visible={editPopupVisible}
          onClose={() => setEditPopupVisible(false)}
          onEdit={Edit}
        />

        {/* Logout Popup */}
        <PopupExit
          visible={logoutPopupVisible}
          onClose={() => setLogoutPopupVisible(false)}
          onLogout={logout}
        />

        <hr className="barhr" />
        <ProfileButton Detail="หน้าแรก" Img={homeIcon} path={"/"} />
        <ProfileButton Detail="สำรวจ" Img={explorIcon} path={""} />
        {props.isLogin() && (
          <ProfileButton Detail="โพสต์ของฉัน" Img={mypostIcon} path={""} />
        )}
        {props.isLogin() && (
          <ProfileButton Detail="ที่บันทึกไว้" Img={mybookmarkIcon} path={""} />
        )}
        <div className="copyright">
          Copyright © 2023 ·
          <br />
          CPExhange.com โครงงานวิชา Software Engineer 261361 2/66
          ภาควิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
