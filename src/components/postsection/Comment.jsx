import React, { useState } from "react";
import "./Comment.css";
import commentIcon from "../Icon/comment.svg";
import heartIcon from "../Icon/heart.svg";
import verifyIcon from "../Icon/verify.svg";
import unknowIcon from "../Icon/unknow.svg";
export default function Comment() {
  const [isVerify, setIsVerify] = useState(true);
  return (
    <div className="commentbox">
      {isVerify ? (
        <span className="topvarify">
          <img src={verifyIcon} alt="verify" className="verify" />
          {/* <span className="text">Answer Vilified</span> */}
        </span>
      ) : (
        <></>
      )}
      <div className="cCLV">
        <img src={commentIcon} alt="comment" className="comment" />
        <span className="text">{10}</span>
        <img src={heartIcon} alt="heart" className="heart" />
        <span className="text">{10}</span>
      </div>
      <div className="userdate">
        <img src={unknowIcon} className="profile" alt="profile" />
        <div>
          <p className="username">username100</p>
          <span className="date">9 : 40 | 15 Dec 22</span>
        </div>
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </div>
  );
}
