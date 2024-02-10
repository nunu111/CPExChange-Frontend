import React from "react";
import "./Profile.css";
import { Link, useLocation } from "react-router-dom";
const ProfileButton = ({ Detail, Img, path }) => {
  const location = useLocation();
  const resultcss =
    location.pathname === path ? "profilebuttonON" : "profilebutton";

  return (
    <Link to={path} className={resultcss}>
      <div className="content">
        <img src={Img} className="profilebuttonImg" alt={""} />
        <div className="text">{Detail}</div>
      </div>
    </Link>
  );
};
export default ProfileButton;
