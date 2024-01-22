import React, { useState } from "react";
import "./Profile.css";
import logo from "./Icon/logo.svg";
import loginIcon from "./Icon/login.svg";
import registerIcon from "./Icon/register.svg";
import ProfileButton from "./ProfileButton";
import homeIcon from "./Icon/home.svg";
import explorIcon from "./Icon/explor.svg";
import LoginButton from "./LoginButton";
import Popup_Login from "./Popup_Login";

const ProfileBar = () => {
  const [Login, setLogin] = useState(false);
  return (
    <div className="profilebarBackground">
      <div className="profilebar">
        <img src={logo} className="logo" alt="logo" />
        <>
          {Login ? (
            <></>
          ) : (
            <div>
              <ProfileButton Detail="ลงชื่อเข้าใช้" Img={loginIcon} />
              <ProfileButton Detail="สมัครบัญชี" Img={registerIcon} />
            </div>
          )}
        </>
        <hr />

        <ProfileButton Detail="หน้าแรก" Img={homeIcon} />
        <ProfileButton Detail="สำรวจ" Img={explorIcon} />
        <LoginButton />
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
