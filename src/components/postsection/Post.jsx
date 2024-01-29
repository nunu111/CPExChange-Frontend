import React, { useState } from "react";
import "../Postlist.css";
import pinIcon from "../Icon/pin.svg";
import { useParams } from "react-router-dom";
import heartIcon from "../Icon/heart.svg";
import PostTag from "../posttag";
import Comment from "./Comment";
import "./Comment.css";
export default function Post() {
  const params = useParams();
  const PID = params.PID;
  const [Tags, setTag] = useState(["ไก่ย่าง", "เเล่นเกมที่บ้าน"]);

  return (
    <div className="Mainbox">
      <div className="Postbox">
        <div className="Title">Post{PID}</div>
        <div className="top">
          <img src={heartIcon} alt="heart" className="like" />
          <span className="text">{10}</span>
          <img src={pinIcon} alt="pin" className="bookmark" />
        </div>
        <p className="date">โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77</p>
        <hr />
        {Tags.map((Tag, i) => {
          return <PostTag TagName={Tag} key={i} />;
        })}
        <br />
        <div className="detail">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."ฃ "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non
        </div>

        <div className="commmentsection">
          <p className="ctitle">Comment section</p>
          <hr className="chr" />
          <Comment />
        </div>
      </div>
    </div>
  );
}
