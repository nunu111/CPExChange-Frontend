import React, { useState } from "react";
import "./Profile.css";
import logo from "../Icon/logo.svg";
import loginIcon from "../Icon/login.svg";
import registerIcon from "../Icon/register.svg";
import ProfileButton from "./ProfileButton";
import homeIcon from "../Icon/home.svg";
import explorIcon from "../Icon/explor.svg";
import LoginButton from "../LoginButton";
import Popup_Login from "../Popup_Login";
import SigninButton from "../SigninButton";
import { Link } from "react-router-dom";

const ProfileBar = () => {
  const [Login, setLogin] = useState(false);

  return (
    <div className="profilebarBackground">
      <div className="profilebar">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>

        <>
          {Login ? (
            <></>
          ) : (
            <div>
              <LoginButton />
              <SigninButton />
            </div>
          )}
        </>
        <hr />

        <ProfileButton Detail="หน้าแรก" Img={homeIcon} path={"/"} />
        <ProfileButton Detail="สำรวจ" Img={explorIcon} path={""} />
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
